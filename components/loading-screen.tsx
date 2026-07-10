'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5 opacity-50" />

      <div className="relative z-10 flex flex-col items-center justify-center gap-8">
        {/* Animated text */}
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
            Welcome
          </h1>
          <p className="text-lg text-muted-foreground opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both">
            Loading your portfolio...
          </p>
        </div>

        {/* Animated loader */}
        <div className="flex gap-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="h-3 w-3 rounded-full bg-primary animate-bounce"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            />
          ))}
        </div>

        {/* Animated progress line */}
        <div className="w-32 h-1 bg-primary/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-primary/50 animate-pulse"
            style={{
              animation: 'loadingBar 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes loadingBar {
          0% {
            width: 0%;
            opacity: 1;
          }
          50% {
            width: 100%;
            opacity: 1;
          }
          100% {
            width: 100%;
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
}
