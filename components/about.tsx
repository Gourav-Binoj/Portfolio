'use client';

import { Download } from 'lucide-react';

export default function About() {
  const skills = [
  {
    category: 'Programming',
    items: ['Python', 'Java', 'C', 'JavaScript'],
  },
  {
    category: 'AI & ML',
    items: [
      'Machine Learning',
      'Graph Neural Networks',
      'Random Forest',
      'Scikit-learn',
    ],
  },
  {
    category: 'Web Development',
    items: [
      'React',
      'Node.js',
      'FastAPI',
      'WebSocket',
      'HTML/CSS',
    ],
  },
  {
    category: 'Tools & Technologies',
    items: [
      'MongoDB',
      'SQL',
      'Git/GitHub',
      'Linux',
      'REST APIs',
    ],
  },
];
const handleDownloadResume = () => {
  const link = document.createElement('a');
  link.href = '/Resume_pits.pdf';
  link.download = 'Resume_pits.pdf';
  link.click();
};

  return (
    <section
  id="about"
  className="relative w-full bg-white py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-primary md:text-5xl">
  About Me
</h2>
            <p className="max-w-2xl text-lg text-black">
  AI/ML-focused Information Technology student from Thiruvananthapuram, Kerala, India, passionate about building intelligent systems, full-stack applications, and solving real-world problems using technology.
</p>
          </div>

          {/* Content Grid */}
          <div className="grid gap-12 md:grid-cols-2">
            {/* Bio */}
            <div className="space-y-4">
              <p className="leading-relaxed text-black">
  I'm Gourav Binoj, an Information Technology student from Thiruvananthapuram, Kerala, India, currently pursuing my B.Tech at Government Engineering College, Barton Hill. My interests lie in Artificial Intelligence, Machine Learning, Cybersecurity, and Full Stack Development.
</p>

<p className="leading-relaxed text-black">
  I enjoy building AI-powered applications and intelligent systems using Python, FastAPI, React, and modern web technologies. My projects include AI-based malware analysis and reverse engineering, real-time vehicle health monitoring, healthcare applications for cardiology education, and interactive IoT solutions such as the Virakupura Sensory Park project. I'm particularly interested in Large Language Models, Agentic AI, conversational systems, and developing scalable AI products that create meaningful impact.
</p>
              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-primary-foreground font-medium transition-all hover:scale-105 hover:shadow-lg mt-4"
              >
                <Download size={20} />
                Download Resume
              </button>
            </div>

            {/* Skills Grid */}
            <div className="grid gap-6 sm:grid-cols-2">
  {skills.map((skillGroup) => (
    <div
      key={skillGroup.category}
      className="
        space-y-3
        rounded-xl
        border border-orange-200
        bg-orange-50
        p-5
        shadow-sm
        transition-all duration-300
        hover:shadow-lg
        hover:-translate-y-1
      "
    >
      <h3 className="font-semibold text-primary">
        {skillGroup.category}
      </h3>

      <ul className="space-y-2">
        {skillGroup.items.map((skill) => (
          <li key={skill} className="text-sm text-gray-700">
            ✓ {skill}
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>
          </div>
        </div>
      </div>
    </section>
  );
}
