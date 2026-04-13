import { useState } from "react";
import HobbyCard from "../components/HobbyCard";
import ProjectDemoModal from "../components/ProjectDemoModal";
import { hobbies } from "../content/hobbies";
import "./Hobbies.css";

export default function HobbiesPage() {
  const [activeDemo, setActiveDemo] = useState(null);

  return (
    <section className="hobbies-page">
      <h1>Hobbies</h1>
      <div className="hobbies-grid">
        {hobbies.map((hobby) => (
          <HobbyCard
            key={hobby.id}
            title={hobby.title}
            summary={hobby.summary}
            image={hobby.image}
            links={hobby.links}
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
