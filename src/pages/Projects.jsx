import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectDemoModal from "../components/ProjectDemoModal";
import { projects } from "../content/projects";
import "./Projects.css";

export default function Projects() {
  const [activeDemo, setActiveDemo] = useState(null);

  return (
    <section className="projects-section">
      <h1>Projects</h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            createdLabel={project.createdLabel}
            summary={project.summary}
            image={project.image}
            links={project.links}
            onOpenDemo={setActiveDemo}
          />
        ))}
      </div>

      <ProjectDemoModal
        open={Boolean(activeDemo)}
        title={activeDemo?.title ?? ""}
        src={activeDemo?.src ?? ""}
        onClose={() => setActiveDemo(null)}
      />
    </section>
  );
}
