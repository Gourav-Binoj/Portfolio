import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

if (!apiKey) {
  throw new Error(
    "GOOGLE_GENERATIVE_AI_API_KEY is not configured."
  );
}

const ai = new GoogleGenAI({ apiKey });
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
  {
  id: "19",
  category: "projects",
  content: `What projects has Gourav worked on?
Gourav has worked on several projects across Artificial Intelligence, Cybersecurity, Healthcare Technology, and IoT domains.

1. AI-Based Malware Analysis and Reverse Engineering

2. Vehicle Health Monitoring System

3. Cardiology medpro
 
4. Virakupura Sensory Park
  
and many more. For details, please refer to the Projects section of his portfolio.`,
  timestamp: undefined
},

{
  id: "20",
  category: "father",
  content: `Who is Gourav's father?
Gourav's father is Binoj Manikandan.`,
  timestamp: undefined
},

{
  id: "21",
  category: "mother",
  content: `Who is Gourav's mother?
Gourav's mother is Roopa Binoj.`,
  timestamp: undefined
},

{
  id: "22",
  category: "sister",
  content: `Does Gourav have siblings?
Yes, Gourav has a twin sister named Maanasi Binoj.`,
  timestamp: undefined
},

{
  id: "23",
  category: "friends",
  content: `Who are Gourav's close friends?

Gourav's close friends include:
- Amartya AS
- Akhil M Deepak
- Aaron Edison
- Gautham JK
- J Govind
- J S Abhiram Suresh
- Nikitha Jacob Lasitha
- Namitha Jacob Lasitha`,
  timestamp: undefined
},

{
  id: "24",
  category: "amartya",
  content: `Who is Amartya AS?

Amartya is one of the core people in Gourav's life. They grew up together, played together, and shared countless memories throughout their childhood and teenage years. Gourav has immense respect for him, especially because he had the courage and determination to pursue his dream career. Among his friend circle, Amartya's dedication towards achieving his goals has always been a source of inspiration.`,
  timestamp: undefined
},

{
  id: "25",
  category: "akhil",
  content: `Who is Akhil M Deepak?

Akhil is one of Gourav's funniest friends and one of the people he enjoys spending time with the most. Gourav jokingly says that Akhil and Govind share the same brain cell because of the amount of chaos they create together. Akhil is the group's comedian and someone who can make almost anyone laugh.`,
  timestamp: undefined
},

{
  id: "26",
  category: "aaron",
  content: `Who is Aaron Edison?

Aaron, better known by his nickname "Nasty Bug", was one of the kindest and most innocent people when Gourav first met him. Over time, he transformed into what Gourav jokingly describes as a "wild animal". Despite the chaos and fun he brings, Aaron remains one of Gourav's closest friends and someone who always keeps the group lively.`,
  timestamp: undefined
},

{
  id: "27",
  category: "gautham",
  content: `Who is Gautham JK?

Gautham is Gourav's closest college buddy and one of the most helpful people he knows. He has a strong helping mentality and is always willing to support others whenever they need it. Gourav values him greatly as a friend and appreciates his reliability and kindness.`,
  timestamp: undefined
},

{
  id: "28",
  category: "govind",
  content: `Who is J Govind?

Govind is the other half of the legendary "shared brain cell" duo alongside Akhil. Together they create endless entertainment for the friend group. He is also an extremely passionate RCB fan, something Gourav never misses an opportunity to tease him about.`,
  timestamp: undefined
},

{
  id: "29",
  category: "abhiram",
  content: `Who is J S Abhiram Suresh?

Abhiram is a naturally funny and brilliant person. Gourav enjoys hanging out with him because conversations are always entertaining and full of laughter. Alongside his sense of humor, Abhiram is also highly intelligent and someone Gourav deeply values as a friend.`,
  timestamp: undefined
},

{
  id: "30",
  category: "nikitha",
  content: `Who is Nikitha Jacob Lasitha?

Nikitha is one of the sweetest and kindest people Gourav knows. He values her friendship deeply and appreciates her caring and supportive nature. She is someone who has had a meaningful place in his life.`,
  timestamp: undefined
},

{
  id: "31",
  category: "namitha",
  content: `Who is Namitha Jacob Lasitha?

Namitha is another very close friend of Gourav's. Their friendship is filled with jokes, playful arguments, and endless banter. Despite all the teasing, Gourav considers her a genuinely sweet person and someone he appreciates having in his life.`,
  timestamp: undefined
},
{
  id: "32",
  category: "hobbies",
  content: `What does Gourav enjoy outside academics and programming?
Gourav enjoys playing chess and has a Chess.com rating of approximately 1300, reflecting his strategic thinking and problem-solving mindset. He also loves playing badminton with his friends and enjoys spending time with his buddies outside of academics and technology. Apart from sports, Gourav enjoys exploring new technologies, experimenting with AI tools, and working on side projects.`,
  timestamp: undefined
},
{
  id: "33",
  category: "sports",
  content: `Does Gourav play any sports or games?
Yes. Gourav enjoys playing chess and currently has a Chess.com rating of around 1300. He also regularly plays badminton with his friends and enjoys the teamwork, competition, and strategy involved in both activities.`,
  timestamp: undefined
},
];

export async function generateResponse(
  userMessage: string
): Promise<string> {
  try {
    const relevantKnowledge = searchKnowledgeBase(userMessage);

    const contextText = relevantKnowledge
      .map(
        (entry) =>
          `[${entry.category.toUpperCase()}] ${entry.content}`
      )
      .join("\n\n");

    const systemPrompt = `
You are Gova AI, the AI assistant on Gourav Binoj's portfolio website.

You answer questions about:
- Education
- Skills
- Projects
- Interests
- Friends
- Family
- Career goals
- Hobbies

Guidelines:
- Speak naturally and conversationally.
- Do not introduce yourself in every message.
- Avoid repetitive greetings.
- Use the provided context whenever possible.
- If information is unavailable, say so honestly.
- Keep responses concise unless asked for more detail.

Context:
${contextText || "No context available."}
`;

    const prompt = `
${systemPrompt}

User Question:
${userMessage}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text ?? "I couldn't generate a response.";
  } catch (error) {
    console.error("[Gova AI Error]", error);
    return "Sorry, I'm having trouble responding right now.";
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
