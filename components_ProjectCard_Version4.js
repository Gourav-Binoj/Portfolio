export default function ProjectCard({ project }) {
  return (
    <article className="card reveal">
      <h3>{project.title}</h3>
      <p className="muted">{project.desc}</p>
      <p className="meta-small"><strong>Role:</strong> {project.role}</p>
    </article>
  );
}