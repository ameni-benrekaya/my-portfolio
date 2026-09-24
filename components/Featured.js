import ProjectCard from "./ProjectCard";
import { projects } from "@/data/site";

export default function Featured() {
  return (
    <section id="featured">
      <div className="shead rise">
        <h2 className="t-h2">Recent work</h2>
        <p className="t-body">
          Three recent builds: a Tunisian consultancy, an international medical society on WordPress,
          and an Arabic right-to-left charity platform.
        </p>
      </div>
      <div className="works featured">
        {projects.featured.map((p) => (
          <ProjectCard key={p.title} p={p} featured />
        ))}
      </div>
      <p className="rise" style={{ marginTop: "var(--s3)" }}>
        <a className="btn quiet" href="#work">See all projects ↗</a>
      </p>
    </section>
  );
}
