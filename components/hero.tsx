'use client';

import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden pt-20"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="space-y-8 text-center">
          {/* Main Heading */}
          <div className="space-y-4">
       <h1 className="font-['Sora'] text-5xl font-bold leading-tight md:text-7xl text-balance">
  Hi, I'm  <span className="bg-gradient-to-r from-[#ffe240] via-[#ffe240] to-[#ffe240] bg-clip-text text-transparent">
    Gourav Binoj
  </span>
  <br />
  <span className="text-3xl md:text-5xl">
    Software Engineer & AI Enthusiast
  </span>
</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
               Let's create something amazing together.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row justify-center pt-8">
            <button
  onClick={() => handleScroll('#about')}
  className="
    inline-flex items-center justify-center gap-2
    rounded-lg border-2 border-primary
    bg-primary text-primary-foreground
    px-8 py-3 font-medium transition-all duration-300
    hover:bg-white hover:text-primary
    hover:scale-105 hover:shadow-lg
  "
>
  Explore My Work
  <ArrowRight size={20} />
</button>
          </div>

          {/* Stats */}
        </div>
      </div>
    </section>
  );
}
