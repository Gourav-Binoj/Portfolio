// Run this ONCE locally (not on every deploy/cold start) to precompute
// embeddings for the static knowledge base and save them to disk.
//
// Usage: npx tsx scripts/generate-embeddings.ts
// Then commit the generated embeddings.json file to your repo.
//
// Requires: npm install -D dotenv
// Reads GOOGLE_GENERATIVE_AI_API_KEY from .env.local (same file your Next.js app uses).

import dotenv from "dotenv";
import path from "path";
import fs from "fs";

// Load .env.local from the project root (adjust if your .env file has a different name).
// __dirname here = the "scripts" folder, so "../.env.local" points to the project root.
dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
  if (!apiKey) {
    throw new Error(
      "GOOGLE_GENERATIVE_AI_API_KEY is not configured. Make sure it's set in .env.local at your project root."
    );
  }

  // NOTE: these are dynamic imports (await import(...)), not static top-level
  // imports. This is deliberate: static `import` statements get hoisted above
  // all other code by the TypeScript/tsx compiler, which would run
  // knowledgeBase.ts's API-key check (and construct the GoogleGenAI client)
  // BEFORE dotenv.config() above ever executes — causing a
  // "GOOGLE_GENERATIVE_AI_API_KEY is not configured" error even when the key
  // IS present in .env.local. Dynamic import() runs at the point it's
  // reached in the code, so dotenv has already loaded by the time this runs.
  const { GoogleGenAI } = await import("@google/genai");
  const { knowledgeBase, EMBEDDING_MODEL } = await import("../lib/knowledgeBase"); // adjust path

  const ai = new GoogleGenAI({ apiKey });

  async function embedWithRetry(text: string, retries = 5): Promise<number[]> {
    for (let attempt = 0; attempt < retries; attempt++) {
      try {
        const result = await ai.models.embedContent({
          model: EMBEDDING_MODEL,
          contents: text,
        });
        return result.embeddings?.[0]?.values || [];
      } catch (error: any) {
        const status = error?.status || error?.error?.code;
        if (status === 429 && attempt < retries - 1) {
          const waitMs = 2000 * Math.pow(2, attempt); // exponential backoff
          console.warn(`Rate limited, waiting ${waitMs}ms before retry...`);
          await sleep(waitMs);
          continue;
        }
        throw error;
      }
    }
    throw new Error("Exceeded retries for embedding.");
  }

  const output: Record<string, number[]> = {};

  for (const entry of knowledgeBase) {
    console.log(`Embedding entry ${entry.id} (${entry.category})...`);
    output[entry.id] = await embedWithRetry(entry.content);
    // Small delay to stay under per-minute rate limits
    await sleep(300);
  }

  const outPath = path.join(__dirname, "../lib/embeddings.json");
  fs.writeFileSync(outPath, JSON.stringify(output, null, 2));
  console.log(`Saved embeddings for ${Object.keys(output).length} entries to ${outPath}`);
}

main().catch((err) => {
  console.error("Failed to generate embeddings:", err);
  process.exit(1);
});