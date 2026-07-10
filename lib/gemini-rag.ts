import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

if (!apiKey) {
  throw new Error("GOOGLE_GENERATIVE_AI_API_KEY environment variable is not set");
}

const genAI = new GoogleGenerativeAI(apiKey);

// Simple in-memory store for knowledge (you can replace with database later)
interface KnowledgeEntry {
  id: string;
  content: string;
  category: string;
  timestamp?: Date;
}

let knowledgeBase: KnowledgeEntry[] = [
  {
    id: "1",
    category: "about",
    content: `Who is Gourav Binoj?
Gourav Binoj is an Information Technology student from Thiruvananthapuram, Kerala, India, currently pursuing his B.Tech at Government Engineering College, Barton Hill (2022-2026). He has a CGPA of 8.2 and is passionate about Artificial Intelligence, Machine Learning, Cybersecurity, and Full Stack Development.`,
    timestamp:
    
    new Date()
  },
  {
    id: "2",
    category: "location",
    content: `Where is Gourav from?
  Gourav is from Thiruvananthapuram, Kerala, India.`,
    timestamp: undefined
  },

  {
    id: "3",
    category: "education",
    content: `What is Gourav currently studying?
  Gourav is pursuing a Bachelor of Technology (B.Tech) degree in Information Technology at Government Engineering College, Barton Hill, from 2022 to 2026.`,
    timestamp: undefined
  },

  {
    id: "4",
    category: "cgpa",
    content: `What is Gourav's CGPA?
  Gourav currently has a CGPA of 8.2 in his B.Tech programme.`,
    timestamp: undefined
  },

  {
    id: "5",
    category: "skills",
    content: `What programming languages does Gourav know?
  Gourav is proficient in Python, Java, C, and JavaScript. He also works with SQL databases and modern web technologies.`,
    timestamp: undefined
  },

  {
    id: "6",
    category: "technologies",
    content: `What technologies does Gourav work with?
  Gourav works with React, FastAPI, Flask, Socket.IO, MongoDB, SQL, Linux, Git, REST APIs, and various AI and Machine Learning frameworks including Scikit-learn and Graph Neural Networks.`,
    timestamp: undefined
  },

  {
    id: "7",
    category: "ai",
    content: `What are Gourav's AI interests?
  Gourav is particularly interested in Large Language Models (LLMs), Agentic AI, Retrieval-Augmented Generation (RAG), Machine Learning, Cybersecurity AI applications, and intelligent autonomous systems.`,
    timestamp: undefined
  },

  {
    id: "8",
    category: "malware_project",
    content: `Tell me about the AI-Based Malware Analysis and Reverse Engineering project.
  This was Gourav's final-year project. The system combines Graph Convolutional Networks (GCNs) operating on Control Flow Graphs (CFGs) with CAPEv2 sandbox-based dynamic analysis to classify malware samples. Radare2 was used for feature extraction while Ghidra generated pseudo-code representations for analysis. The project integrates Artificial Intelligence, Machine Learning, and Cybersecurity techniques for malware detection and reverse engineering.`,
    timestamp: undefined
  },

  {
    id: "9",
    category: "vehicle_project",
    content: `Tell me about the Vehicle Health Monitoring System.
  This project uses Machine Learning to monitor engine parameters such as RPM, oil pressure, coolant temperature, and fuel pressure in real time. A Random Forest model detects anomalies and predicts potential failures. The system was built using React, Flask, Socket.IO, and Scikit-learn.`,
    timestamp: undefined
  },

  {
    id: "10",
    category: "virakupura",
    content: `What is the Virakupura Sensory Park project?
  Virakupura was an interactive sensory learning project designed for children. Various wall paintings were equipped with ultrasonic sensors and audio modules. When a child stood in front of a painting for more than three seconds, the system played a sound corresponding to the object shown in the painting. For example, standing in front of a lion painting triggered a lion's roar. The project aimed to create an engaging and educational experience using embedded systems and IoT technologies.`,
    timestamp: undefined
  },

  {
    id: "11",
    category: "healthcare",
    content: `Tell me about the cardiology teaching platform.
  Gourav worked on a healthcare application developed for a doctor at SCTIMST. The platform included DICOM-to-MP4 conversion, ECG image enhancement and editing, automatic image labelling, quiz generation for students, and presentation tools for teaching cardiology concepts more effectively.`,
    timestamp: undefined
  },

  {
    id: "12",
    category: "certifications",
    content: `What certifications does Gourav have?
  Gourav has completed courses in LLM Engineering and Large Language Models, Full Stack Web Development, Generative AI, and modern AI technologies through online learning platforms including Udemy and Microsoft Learn.`,
    timestamp: undefined
  },

  {
    id: "13",
    category: "internships",
    content: `Is Gourav looking for opportunities?
  Yes. Gourav is actively seeking internships, research opportunities, and entry-level roles in Artificial Intelligence, Machine Learning, Cybersecurity, and Software Development.`,
    timestamp: undefined
  },

  {
    id: "14",
    category: "contact",
    content: `How can I contact Gourav?
  You can reach Gourav through:
  Email: gouravbinoj@gmail.com
  LinkedIn: linkedin.com/in/gourav-binoj-621865270
  GitHub: github.com/Gourav-Binoj
  Instagram: instagram.com/__._gova_.__/`,
    timestamp: undefined
  },

  {
    id: "15",
    category: "future",
    content: `What are Gourav's future goals?
  Gourav aims to build intelligent AI systems that solve real-world problems and contribute to advancements in Artificial Intelligence, Cybersecurity, and Healthcare Technology. He is particularly interested in LLMs, Agentic AI, and AI governance.`,
    timestamp: undefined
  },

  {
    id: "16",
    category: "motivation",
    content: `What motivates Gourav as a developer?
  Gourav enjoys solving complex problems and building technology that creates meaningful impact. He is motivated by curiosity, continuous learning, and the opportunity to apply Artificial Intelligence to real-world challenges.`,
    timestamp: undefined
  },

  {
    id: "17",
    category: "teamwork",
    content: `Does Gourav work well in teams?
  Yes. Gourav has collaborated with faculty members, doctors, and fellow students on academic and technical projects. He values teamwork, communication, and knowledge sharing.`,
    timestamp: undefined
  },

  {
    id: "18",
    category: "research",
    content: `Is Gourav interested in research?
  Yes. Gourav has a strong interest in AI research, cybersecurity, malware analysis, AI governance, and emerging technologies. He enjoys exploring innovative applications of AI and contributing to research-oriented projects.`,
    timestamp: undefined
  },
];

export async function generateResponse(userMessage: string): Promise<string> {
  try {
    // Retrieve relevant context from knowledge base
    const relevantKnowledge = searchKnowledgeBase(userMessage);

    const contextText = relevantKnowledge
      .map((entry) => `[${entry.category.toUpperCase()}] ${entry.content}`)
      .join("\n\n");

  const systemPrompt = `
You are answering questions on Gourav Binoj's portfolio website.
"

refer to yourself as:
- "Gova AI"
- "an AI assistant"
- "Gourav's AI assistant"

Do not introduce yourself at the beginning of every response.
Do not say "Hello", "Hi", or similar greetings unless it is the very first message of the conversation.

Your role is to answer questions about:
- Education
- Skills
- Projects
- Certifications
- Interests
- Experience
- Career goals

Guidelines:
- Be professional, friendly, and concise.
- Use the provided context whenever possible.
- If information is unavailable, politely state that you do not have that information rather than inventing details.
- Speak naturally and conversationally as if Gourav himself is responding to the visitor.

Context:
${contextText || "No context available."}
`;
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent(
  `${systemPrompt}\n\nUser Question:\n${userMessage}`
);

    const response = result.response;
    const text = response.text();

    return text;
  } catch (error) {
    console.error("[v0] Gemini API Error:", error);
    throw error;
  }
}

export function searchKnowledgeBase(query: string): KnowledgeEntry[] {
  const queryLower = query.toLowerCase();

  // Simple keyword-based search
  return knowledgeBase
    .filter((entry) => {
      const contentLower = entry.content.toLowerCase();
      const keywords = queryLower.split(" ");
      return keywords.some((keyword) => contentLower.includes(keyword));
    })
    .sort((a, b) => {
      // Score based on relevance
      const aMatches = (a.content.toLowerCase().match(new RegExp(queryLower, "g")) || []).length;
      const bMatches = (b.content.toLowerCase().match(new RegExp(queryLower, "g")) || []).length;
      return bMatches - aMatches;
    })
    .slice(0, 5);
}

export function addKnowledgeEntry(content: string, category: string): KnowledgeEntry {
  const entry: KnowledgeEntry = {
    id: String(knowledgeBase.length + 1),
    content,
    category,
    timestamp: new Date(),
  };
  knowledgeBase.push(entry);
  return entry;
}

export function getKnowledgeBase(): KnowledgeEntry[] {
  return knowledgeBase;
}

export function updateKnowledgeBase(entries: KnowledgeEntry[]): void {
  knowledgeBase = entries;
}
