'use client';

import { ExternalLink, Code2 } from 'lucide-react';

export default function Projects() {
   const projects = [
  {
    title: 'AI-Based Malware Analysis and Reverse Engineering',
    description:
      'Developed a hybrid malware detection system combining Graph Convolutional Networks (GCNs) on Control Flow Graphs (CFGs) with CAPEv2 sandbox-based dynamic analysis. Implemented feature extraction using Radare2 and pseudo-code generation using Ghidra for robust malware classification.',
    technologies: [
      'Python',
      'Graph Neural Networks',
      'CAPEv2',
      'Radare2',
      'Ghidra',
      'Machine Learning',
    ],
    year: '2026',
    link: '#',
    github: 'https://github.com/Gourav-Binoj/Main-project-AI-BASED-MALWARE-ANALYSIS-AND-REVERSE-ENGINEERING-',
  },
  {
    title: 'Vehicle Health Monitoring System',
    description:
      'Built a real-time engine monitoring platform using a Random Forest model to detect anomalies in RPM, oil pressure, coolant temperature, and fuel pressure. Developed with React, Flask, Socket.IO, and Scikit-learn.',
    technologies: [
      'React',
      'Flask',
      'Socket.IO',
      'Scikit-learn',
      'Random Forest',
      'Python',
    ],
    year: '2025',
    link: '#',
    github: 'https://github.com/Gourav-Binoj/Vehicle_Health_Monitoring_System',
  },
  {
    title: 'AI-Powered Cardiology MedPro',
    description:
      'Developed a healthcare application in collaboration with SCTIMST featuring DICOM-to-MP4 conversion, ECG image enhancement, smart annotation, real-time presentation mode, quizzes, and remote collaboration tools.',
    technologies: [
      'Python',
      'Flutter',
      'DICOM',
      'Computer Vision',
      'Image Processing',
    ],
    year: '2025'
  },
  {
    title: 'Virakupura Sensory Park',
    description:
      'Designed and developed an interactive sensory wall using ultrasonic sensors and DFPlayer Mini modules. Children standing in front of a painting for more than three seconds triggered theme-specific audio responses, creating an engaging educational experience.',
    technologies: [
      'Arduino',
      'Ultrasonic Sensors',
      'DFPlayer Mini',
      'Embedded Systems',
      'IoT',
    ],
    year: '2025',
  },
  {
    title: 'QuizzyCoder',
    description:
      'Developed an interactive quiz platform with topic-based quizzes, real-time scoring, user authentication, dynamic navigation, and instant feedback using pure web technologies.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Authentication',
    ],
    year: '2024'
  },
];
  return (
    <section
  id="projects"
  className="relative w-full bg-primary py-20 md:py-32"
>
      {/* Background accent */}

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-white md:text-5xl">
  Featured Projects
</h2>
            <p className="max-w-2xl text-lg text-white/80">
  A collection of projects showcasing my work in Artificial Intelligence,
  Machine Learning, Cybersecurity, Healthcare Technology, and IoT solutions.
</p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
className="
group
rounded-xl
border border-white
bg-white
p-6
shadow-md
transition-all duration-300
hover:shadow-2xl
hover:-translate-y-2
">
                <div className="space-y-4">
  {/* Year and Title */}
  <div className="space-y-2">
    <p className="text-sm font-medium text-primary">
      {project.year}
    </p>

    <h3 className="text-xl font-semibold text-black transition-colors group-hover:text-primary">
      {project.title}
    </h3>
  </div>

  {/* Description */}
  <p className="text-sm leading-relaxed text-gray-700">
    {project.description}
  </p>

  {/* Technologies */}
  <div className="flex flex-wrap gap-2 pt-4">
    {project.technologies.map((tech) => (
      <span
        key={tech}
        className="
          inline-block
          rounded-full
          bg-primary/10
          px-3 py-1
          text-xs
          font-medium
          text-primary
          border border-primary/20
        "
      >
        {tech}
      </span>
    ))}
  </div>

  {/* Links */}
  {/* Links */}
{(project.link || project.github) && (
  <div className="flex gap-4 pt-4">
    {project.link && (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex
          items-center
          gap-2
          text-sm
          font-medium
          text-primary
          transition-all
          hover:gap-3
        "
      >
        View Project
        <ExternalLink size={16} />
      </a>
    )}

    {project.github && (
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex
          items-center
          gap-2
          text-sm
          font-medium
          text-gray-600
          transition-colors
          hover:text-primary
        "
      >
        <Code2 size={16} />
        GitHub
      </a>
    )}
  </div>
)}
</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
