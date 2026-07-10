import { v4 as uuidv4 } from 'uuid';
import { generateResponse } from '@/lib/gemini-rag';

export const runtime = 'nodejs';

// In-memory store for conversation history
const conversations: Record<string, Array<{ role: string; content: string }>> = {};

export async function POST(req: Request) {
  try {
    const { message, sessionId: providedSessionId } = await req.json();

    if (!message || typeof message !== 'string') {
      return new Response(JSON.stringify({ error: 'Message is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const sessionId = providedSessionId || uuidv4();

    // Initialize conversation if not exists
    if (!conversations[sessionId]) {
      conversations[sessionId] = [];
    }

    // Add user message to history
    conversations[sessionId].push({
      role: 'user',
      content: message,
    });

    // Generate response using Gemini with RAG
    const assistantResponse = await generateResponse(message);

    // Add assistant response to history
    conversations[sessionId].push({
      role: 'assistant',
      content: assistantResponse,
    });

    // Return the response
    return new Response(
      JSON.stringify({
        text: assistantResponse,
        sessionId,
        timestamp: new Date().toISOString(),
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Session-Id': sessionId,
        },
      }
    );
  } catch (error) {
  console.error("API CHAT ERROR:", error);

  return Response.json(
    {
      error: error instanceof Error ? error.message : "Unknown error"
    },
    { status: 500 }
  );
}
}
