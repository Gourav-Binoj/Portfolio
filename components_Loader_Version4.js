"use client";

import { useEffect, useState } from "react";

/*
  Entrance loader inspired by sage.fantik.studio's polished entrance:
  - full-screen overlay
  - centered wordmark ("Gourav B.")
  - animated morphing SVG blob
  - subtle progress bar animation
  This component keeps the screen until window 'load' event fires and at least MIN_VISIBLE ms passed.
*/

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const MIN_VISIBLE = 700;
  const start = Date.now();

  useEffect(() => {
    function hideSoon() {
      const elapsed = Date.now() - start;
      const wait = Math.max(0, MIN_VISIBLE - elapsed);
      setTimeout(() => setVisible(false), wait);
    }

    if (document.readyState === "complete") {
      hideSoon();
    } else {
      window.addEventListener("load", hideSoon);
      return () => window.removeEventListener("load", hideSoon);
    }
  }, []);

  if (!visible) return null;

  return (
    <div id="loader" className="loader">
      <div className="loader-inner" role="status" aria-live="polite" aria-label="Loading">
        <svg className="loader-wordmark" viewBox="0 0 260 48" aria-hidden="true">
          <text x="0" y="36" fontFamily="Inter, system-ui, -apple-system, Roboto" fontWeight="800" fontSize="36" fill="#fff">Gourav</text>
          <text x="158" y="36" fontFamily="Inter, system-ui, -apple-system, Roboto" fontWeight="700" fontSize="36" fill="#fff">B.</text>
        </svg>

        <svg className="loader-blob" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <defs>
            <linearGradient id="g" x1="0" x2="1">
              <stop offset="0" stopColor="#ffffff"></stop>
              <stop offset="1" stopColor="#ffffff"></stop>
            </linearGradient>
          </defs>
          <g transform="translate(300,300)">
            <path fill="url(#g)">
              <animate attributeName="d" dur="4.5s" repeatCount="indefinite"
                values="
                M120,-140C152,-100,160,-50,160,0C160,50,152,100,120,140C88,180,44,220,0,220C-44,220,-88,180,-120,140C-152,100,-160,50,-160,0C-160,-50,-152,-100,-120,-140C-88,-180,-44,-220,0,-220C44,-220,88,-180,120,-140Z;
                M140,-120C170,-80,170,-40,170,0C170,40,170,80,140,120C110,160,60,180,10,200C-40,220,-80,210,-120,180C-160,150,-180,100,-180,50C-180,0,-160,-50,-120,-80C-80,-110,-40,-140,10,-170C60,-200,110,-160,140,-120Z;
                M100,-160C130,-120,170,-90,170,-40C170,10,140,60,120,110C100,160,40,200,-10,210C-60,220,-110,200,-140,160C-170,120,-180,70,-160,30C-140,-10,-100,-40,-70,-80C-40,-120,-20,-160,10,-180C40,-200,70,-200,100,-160Z;
                M120,-140C152,-100,160,-50,160,0C160,50,152,100,120,140C88,180,44,220,0,220C-44,220,-88,180,-120,140C-152,100,-160,50,-160,0C-160,-50,-152,-100,-120,-140C-88,-180,-44,-220,0,-220C44,-220,88,-180,120,-140Z" />
            </path>
          </g>
        </svg>

        <div className="loader-bar" aria-hidden="true"><span /></div>
        <div className="loader-caption">Crafting real‑time, data‑intelligent web experiences…</div>
      </div>
    </div>
  );
}