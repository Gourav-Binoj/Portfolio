import resume from "../lib/resume";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <main>
      <section id="hero" className="hero container" aria-label="Introduction">
        <div className="hero-left">
          <h1>Hi, I'm {resume.name}</h1>
          <p className="eyebrow">{resume.label}</p>
          <p className="lead">{resume.summary}</p>

          <div className="contact-quick">
            <a className="btn primary" href={`mailto:${resume.email}`}>{resume.email}</a>
            <a className="btn ghost" href={`tel:${resume.phone.replace(/\s+/g, "")}`}>{resume.phone}</a>
          </div>

          <ul className="meta">
            <li><strong>Location</strong> {resume.location}</li>
            <li><strong>GitHub</strong> <a href={resume.github} target="_blank" rel="noopener">{resume.github.replace(/^https?:\/\//, "")}</a></li>
            <li><strong>LinkedIn</strong> <a href={resume.linkedin} target="_blank" rel="noopener">{resume.linkedin.replace(/^https?:\/\//, "")}</a></li>
          </ul>
        </div>

        <div className="hero-right" aria-hidden="true">
          {/* No photo required — decorative SVG blob for visual interest */}
          <svg className="hero-blob" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
            <g transform="translate(300,300)">
              <path fill="#ffffff" opacity="0.06">
                <animate attributeName="d" dur="8s" repeatCount="indefinite"
                  values="
                    M120,-140C152,-100,160,-50,160,0C160,50,152,100,120,140C88,180,44,220,0,220C-44,220,-88,180,-120,140C-152,100,-160,50,-160,0C-160,-50,-152,-100,-120,-140C-88,-180,-44,-220,0,-220C44,-220,88,-180,120,-140Z;
                    M140,-120C170,-80,170,-40,170,0C170,40,170,80,140,120C110,160,60,180,10,200C-40,220,-80,210,-120,180C-160,150,-180,100,-180,50C-180,0,-160,-50,-120,-80C-80,-110,-40,-140,10,-170C60,-200,110,-160,140,-120Z;
                    M100,-160C130,-120,170,-90,170,-40C170,10,140,60,120,110C100,160,40,200,-10,210C-60,220,-110,200,-140,160C-170,120,-180,70,-160,30C-140,-10,-100,-40,-70,-80C-40,-120,-20,-160,10,-180C40,-200,70,-200,100,-160Z;
                    M120,-140C152,-100,160,-50,160,0C160,50,152,100,120,140C88,180,44,220,0,220C-44,220,-88,180,-120,140C-152,100,-160,50,-160,0C-160,-50,-152,-100,-120,-140C-88,-180,-44,-220,0,-220C44,-220,88,-180,120,-140Z" />
              </path>
            </g>
          </svg>
        </div>
      </section>

      <section id="projects" className="projects container" aria-label="Selected projects">
        <h2>Selected projects</h2>
        <p className="section-desc">Work that highlights AI/ML, embedded systems and real‑time engineering.</p>

        <div className="grid">
          {resume.projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </section>

      <section id="experience" className="experience container" aria-label="Education and volunteer">
        <h2>Education & volunteer</h2>

        <div className="two-col">
          <div>
            <h3>Education</h3>
            <ul className="timeline">
              {resume.education.map((e, i) => (
                <li key={i}>
                  <strong>{e.title}</strong>
                  <div className="muted">{e.org} {e.note ? "— " + e.note : ""}</div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Volunteer & leadership</h3>
            <ul className="timeline">
              {resume.volunteer.map((v, i) => (
                <li key={i}>
                  <strong>{v.role}</strong> — {v.org} <div className="muted">{v.period}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="skills" className="skills container" aria-label="Skills and certifications">
        <h2>Skills</h2>
        <p className="section-desc">Languages, frameworks and soft skills I use to ship projects.</p>

        <ul className="skills-grid">
          {resume.skills.map((s, i) => <li key={i}>{s}</li>)}
        </ul>

        <h3>Certifications</h3>
        <ul className="certs muted">
          {resume.certifications.map((c, i) => <li key={i}>{c}</li>)}
        </ul>
      </section>

      <section id="contact" className="contact container" aria-label="Contact">
        <h2>Contact</h2>
        <p className="section-desc">Open to internships, freelance and collaboration. Email or message me.</p>

        <form
          id="contact-form"
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const name = form.name.value || "";
            const email = form.email.value || "";
            const message = form.message.value || "";
            const subject = encodeURIComponent(`Portfolio contact from ${name || email}`);
            const body = encodeURIComponent(message + "\n\n— " + (name || email));
            // fallback to mailto so no external service is required
            window.location.href = `mailto:${resume.email}?subject=${subject}&body=${body}`;
          }}
        >
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required autoComplete="name" />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required autoComplete="email" />
          </div>
          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" required></textarea>
          </div>
          <div className="form-actions">
            <button className="btn primary" type="submit">Send message</button>
            <button className="btn ghost" type="reset">Reset</button>
          </div>
        </form>

        <div className="more-contact muted" style={{ marginTop: 16 }}>
          <div><strong>Email:</strong> {resume.email}</div>
          <div><strong>Phone:</strong> {resume.phone}</div>
          <div><strong>LeetCode:</strong> <a href={resume.leetcode} target="_blank" rel="noopener">profile</a></div>
          <div style={{ marginTop: 8 }}><a href={resume.resumePdf} target="_blank" rel="noopener" className="btn ghost">Download Resume (PDF)</a></div>
        </div>
      </section>
    </main>
  );
}