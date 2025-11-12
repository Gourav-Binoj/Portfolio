// Resume data extracted from resume_gourav_binoj.pdf
// Edit this file to update the content used across the site.

const resume = {
  name: "Gourav Binoj",
  label: "Engineering student — AI/ML · Real-time systems · Full-stack",
  email: "gouravbinoj@gmail.com",
  phone: "+91 70127 22579",
  location: "Keraladityapuram, Thiruvananthapuram, Kerala",
  github: "https://github.com/Gourav-Binoj",
  linkedin: "https://www.linkedin.com/in/gourav-binoj-621865270/",
  summary:
    "I’m an engineering student passionate about AI/ML, intelligent systems, and real-time applications, with skills in machine learning, backend development, and UI design. I build impactful, data‑intelligent, and efficient solutions.",
  education: [
    {
      title: "Bachelor of Technology — Information Technology",
      org: "Government Engineering College Barton Hill",
      note: "CGPA: 8.09 (S1–S6)"
    },
    {
      title: "Higher Secondary (CBSE)",
      org: "Sarvodaya Central Vidyalaya",
      note: "90.4%"
    },
    {
      title: "Secondary (CBSE)",
      org: "Sarvodaya Central Vidyalaya",
      note: "89.6%"
    }
  ],
  skills: [
    "Python",
    "Java",
    "C",
    "JavaScript / React",
    "HTML / CSS",
    "Flask / Node",
    "scikit-learn / ML",
    "Embedded systems / Sensors",
    "Socket.IO / Real‑time",
    "Fast learner",
    "Team collaboration",
    "Creative problem solving",
    "Attention to details",
    "Time management"
  ],
  projects: [
    {
      title: "Vehicle Health Monitoring System",
      desc: "Web-based real-time engine monitoring using a Random Forest model (~65% accuracy) to detect anomalies in RPM, oil/coolant and fuel metrics. Built with React (frontend), Flask (backend), Socket.IO (real-time updates), and scikit-learn (ML inference/training).",
      role: "Full-stack + ML (team project)"
    },
    {
      title: "Virakupura Sensory Wall",
      desc: "Interactive sensory wall for Viragupura Sensory Park using ultrasonic sensors and DFPlayer Mini to trigger theme-based audio aligned with wall paintings — an engaging educational experience for children.",
      role: "Embedded systems & UX"
    },
    {
      title: "AI-powered Cardiology Teaching Platform (in progress)",
      desc: "Platform with ECG/image enhancement, smart annotation, clinical calculators, in-slide quizzes, and remote collaboration. Technologies: Python, Flutter, real-time sync.",
      role: "ML & product design"
    },
    {
      title: "QuizzyCoder — Quiz Website",
      desc: "Interactive quiz site with topic-based quizzes, real-time scoring and instant feedback. Built with pure HTML/CSS/JavaScript; includes authentication and a responsive UI with video backgrounds.",
      role: "Frontend"
    }
  ],
  volunteer: [
    { role: "Design Lead", org: "CSI SB GECBH", period: "2024–2025" },
    { role: "Design Team Member", org: "IEDC GECBH", period: "2024–2025" },
    { role: "Project Mentor", org: "ISTE PDC / Projectaro 4.0", period: "March 2025" },
    { role: "Event Volunteer", org: "IGNITE, CSI GECBH", period: "March 2025" }
  ],
  certifications: [
    "Infosys Springboard",
    "Artificial Intelligence Primer Certification",
    "Generative AI Certification (Udemy)",
    "The Complete Full-Stack Web Development (Udemy)"
  ],
  hobbies: ["Chess (chess.com rating: 1300)", "Badminton", "Video editing"],
  leetcode: "https://leetcode.com/u/rating/",
  resumePdf: "/resume_gourav_binoj.pdf" // Place your PDF in the project's /public folder
};

export default resume;