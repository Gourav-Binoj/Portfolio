'use client';

import {
  Code2,
  Briefcase,
  Camera,
  Mail,
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

 const socialLinks = [
  {
    icon: Code2,
    href: 'https://github.com/Gourav-Binoj',
    label: 'GitHub',
  },
  {
    icon: Briefcase,
    href: 'https://www.linkedin.com/in/gourav-binoj-621865270/',
    label: 'LinkedIn',
  },
  {
    icon: Camera,
    href: 'https://www.instagram.com/__._gova_.__/',
    label: 'Instagram',
  },
  {
    icon: Mail,
    href: 'mailto:gouravbinoj@gmail.com',
    label: 'Email',
  },
];

  return (
    <footer className="relative w-full border-t border-border/40 bg-card/40 backdrop-blur-sm py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Portfolio</h3>
         <p className="text-sm text-muted-foreground font-mono">
  while(alive){`{`} learn(); build(); innovate();{`}`}
</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Certificates'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="
rounded-full
bg-white
p-3
text-primary
shadow-md
transition-all duration-300
hover:scale-110
hover:shadow-lg
hover:bg-orange-50
"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-border/40" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with <span className="text-primary">Next.js</span> and <span className="text-primary">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
