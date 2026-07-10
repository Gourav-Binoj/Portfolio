'use client';

import { Award } from 'lucide-react';

export default function Certificates() {
 const certificates = [
  {
    name: 'LLM Engineering: Master AI and Large Language Models',
    issuer: 'Udemy',
    date: '2026',
    credentialId: 'IN-PROGRESS',
  },
  {
  name: 'The Complete 2024 Web Development Bootcamp',
  issuer: 'Udemy',
  date: '2024',
  credentialId: 'UC-a1a90759-ffbb-427c-b49d-d13c7ab2bf82',
},
  {
    name: 'Principles of Generative AI',
    issuer: 'Wingspan',
    date: '2025',
    credentialId: 'Issued Jun 2025',
  },
  {
    name: 'Artificial Intelligence Primer',
    issuer: 'Wingspan',
    date: '2025',
    credentialId: 'Issued Jun 2025',
  },
  {
    name: 'Road Accidents Exploratory Data Analysis (EDA)',
    issuer: 'Wingspan',
    date: '2026',
    credentialId: 'Internship 6.0',
  },
];

  return (
    <section id="certificates" className="relative w-full py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold md:text-5xl">Certifications & Achievements</h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Professional certifications and credentials demonstrating expertise in modern technologies.
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="group rounded-lg border border-border/40 bg-card/40 p-6 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg hover:bg-card/60"
              >
                <div className="space-y-3">
                  {/* Icon and Name */}
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-white/15 p-3 shadow-md transition-all group-hover:bg-white/25">
  <Award className="text-white" size={28} strokeWidth={2.2} />
</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 pt-2 border-t border-border/40">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Issued:</span>
                      <span className="font-medium">{cert.date}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Credential ID:</span>
                      <span className="font-mono text-sm">{cert.credentialId}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
