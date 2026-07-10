'use client';

import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    // Check if touch device
    const isTouch = matchMedia && matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };

    // Hover effects
    const clickableSelector = [
      'a[href]',
      'button',
      'input[type="button"]',
      'input[type="submit"]',
      '[role="button"]',
      '.btn-primary',
      '.clickable',
    ].join(',');

const handleMouseOver = () => {};
const handleMouseOut = () => {};


    // Click animation
   const handleMouseDown = () => {
  cursor.classList.add('scale-90');
};

const handleMouseUp = () => {
  cursor.classList.remove('scale-90');
};

    // Hide cursor when leaving window
    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = '1';
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

 return (
  <img
    id="custom-cursor"
    src="/image-removebg-preview.png"
    alt="Cursor"
    className="
      fixed
      pointer-events-none
      z-[2147483647]
      w-6
      h-6
      object-contain
      transition-transform
      duration-150
      will-change-transform
    "
    style={{
      transform: 'translate(-50%, -50%)',
      opacity: 1,
      background: 'transparent',
    }}
  />
);
}
