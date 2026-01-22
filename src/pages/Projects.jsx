import ProjectCard from "../components/ProjectCard";
import { projects } from "../content/projects";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects-section">
      <h1>Projects</h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
