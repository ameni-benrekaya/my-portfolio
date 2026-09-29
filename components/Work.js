import ProjectCard from "./ProjectCard";
import { rtlProjects, euProjects } from "@/data/site";

function Group({ title, count, items }) {
  return (
    <>
      <div className="group">
        <h3>{title}</h3><span className="rule" /><span className="count">{count}</span>
      </div>
      <div className="works">{items.map((p) => <ProjectCard key={p.title} p={p} />)}</div>
    </>
  );
}

export default function Work() {
  return (
    <section id="work">
      <div className="shead rise">
        <h2 className="t-h2">All projects</h2>
        <p className="t-body">
          The full list, grouped by market — including Arabic right-to-left builds, a rare skill in this field.
        </p>
      </div>
      <Group title="Arabic & RTL builds" count={`${rtlProjects.length} projects · Saudi Arabia`} items={rtlProjects} />
      <Group title="Europe & international" count={`${euProjects.length} projects · France, Tunisia, Saudi Arabia`} items={euProjects} />
    </section>
  );
}
