"use client";

export default function Header() {
  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#hero">Gourav B.</a>
        <ul className="nav-links" role="menubar">
          <li><a role="menuitem" href="#projects">Projects</a></li>
          <li><a role="menuitem" href="#experience">Experience</a></li>
          <li><a role="menuitem" href="#skills">Skills</a></li>
          <li><a role="menuitem" href="#contact">Contact</a></li>
          <li><a role="menuitem" href={typeof window !== "undefined" ? "/resume_gourav_binoj.pdf" : "/resume_gourav_binoj.pdf"} target="_blank" rel="noopener">Resume (PDF)</a></li>
        </ul>
      </nav>
    </header>
  );
}