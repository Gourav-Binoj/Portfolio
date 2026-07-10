import { db } from '@/lib/db';
import { knowledgeChunks } from '@/lib/db/schema';

const sampleKnowledge = [
  {
    content: `Professional Summary:
Gourav Binoj is a B.Tech Information Technology student at Government Engineering College Barton Hill, Thiruvananthapuram, Kerala, India (2022-2026) with a CGPA of 8.2.

His interests include Artificial Intelligence, Machine Learning, Cybersecurity, Full Stack Development, Large Language Models, Agentic AI, and Intelligent Systems.

He enjoys building AI-powered applications and solving real-world problems using modern technologies and scalable software architectures.`,
    source: 'profile_summary',
  },

  {
    content: `Education:
Bachelor of Technology (B.Tech) in Information Technology
Government Engineering College Barton Hill
Thiruvananthapuram, Kerala, India
Duration: 2022 - 2026
Current CGPA: 8.2

Relevant Coursework:
- Data Structures and Algorithms
- Database Management Systems
- Computer Networks
- Operating Systems
- Machine Learning
- Artificial Intelligence
- Software Engineering`,
    source: 'education',
  },

  {
    content: `Technical Skills:

Programming Languages:
- Python
- Java
- C
- JavaScript

AI & Machine Learning:
- Machine Learning
- Graph Neural Networks (GNN)
- Random Forest
- Scikit-learn
- Control Flow Graphs (CFG)

Web Development:
- React
- FastAPI
- Flask
- Node.js
- HTML
- CSS
- WebSocket
- REST APIs

Databases:
- MongoDB
- SQL
- MySQL

Tools & Platforms:
- Git
- GitHub
- Linux
- Docker
- AWS EC2
- Nginx`,
    source: 'skills',
  },

  {
    content: `Projects:

AI-Based Malware Analysis and Reverse Engineering (2026)
- Developed a hybrid malware analysis system using Graph Convolutional Networks on Control Flow Graphs.
- Integrated CAPEv2 sandbox-based dynamic analysis for behavioral inspection.
- Used Radare2 for binary feature extraction.
- Generated pseudo-code using Ghidra for improved malware understanding and classification.

GitHub:
https://github.com/Gourav-Binoj/Main-project-AI-BASED-MALWARE-ANALYSIS-AND-REVERSE-ENGINEERING-`,
    source: 'project_malware_analysis',
  },

  {
    content: `Vehicle Health Monitoring System (2025)
- Built a real-time engine monitoring platform using Machine Learning.
- Developed anomaly detection for RPM, oil pressure, coolant temperature and fuel pressure.
- Implemented using Random Forest algorithm.
- Built frontend using React and backend using Flask and Socket.IO for real-time communication.

GitHub:
https://github.com/Gourav-Binoj/Vehicle_Health_Monitoring_System`,
    source: 'project_vehicle_monitoring',
  },

  {
    content: `AI-Powered Cardiology Teaching Platform (2025)
Developed in collaboration with SCTIMST for cardiology education.

Features included:
- DICOM to MP4 conversion
- ECG image enhancement
- Automatic annotation and labelling
- Presentation mode for doctors
- Quiz system for students
- Remote collaboration tools

Technologies:
Python, Flutter, DICOM and Image Processing.`,
    source: 'project_cardiology_platform',
  },

  {
    content: `Virakupura Sensory Park Project (2025)

Developed an interactive educational sensory wall for children.

Each wall painting was integrated with ultrasonic sensors and DFPlayer Mini modules. When a child stood in front of a painting for more than three seconds, the system played a corresponding audio effect.

Example:
- Lion painting → Roaring sound
- Bird painting → Bird chirping sound

The project combined IoT, Embedded Systems and Interactive Learning principles.`,
    source: 'project_virakupura',
  },

  {
    content: `QuizzyCoder (2024)

Developed an interactive web-based quiz platform featuring:
- Topic-based quizzes
- User authentication
- Real-time scoring
- Instant feedback
- Dynamic navigation

Technologies used:
HTML, CSS and JavaScript.`,
    source: 'project_quizzycoder',
  },

  {
    content: `Certifications:

- LLM Engineering: Master AI and Large Language Models (Udemy)
- The Complete Web Development Bootcamp (Udemy)
- Microsoft Getting Started with Generative AI in Azure
- Projectaro 4.0 Python Workshop
- Additional certifications in Artificial Intelligence, Web Development and Emerging Technologies.`,
    source: 'certifications',
  },

  {
    content: `Areas of Interest:
- Artificial Intelligence
- Large Language Models
- Agentic AI
- Cybersecurity
- Malware Analysis
- Machine Learning
- Full Stack Development
- Conversational AI
- Intelligent Agents
- Cloud Computing`,
    source: 'interests',
  },
];
export async function POST() {
  try {
    // Check if knowledge already exists
    const existing = await db.select().from(knowledgeChunks).limit(1);
    
    if (existing.length > 0) {
      return new Response(
        JSON.stringify({ message: 'Knowledge base already initialized' }),
        { status: 200 }
      );
    }

    // Insert sample knowledge
    for (const chunk of sampleKnowledge) {
      await db.insert(knowledgeChunks).values({
        content: chunk.content,
        source: chunk.source,
      });
    }

    return new Response(
      JSON.stringify({ message: 'Knowledge base initialized successfully' }),
      { status: 201 }
    );
  } catch (error) {
    console.error('Error initializing knowledge base:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to initialize knowledge base' }),
      { status: 500 }
    );
  }
}
