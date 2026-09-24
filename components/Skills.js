import { skills } from "@/data/site";

export default function Skills() {
  return (
    <section id="skills">
      <div className="shead rise">
        <h2 className="t-h2">Tools &amp; technologies</h2>
        <p className="t-body">What I reach for daily, and what I've worked with along the way.</p>
      </div>
      {skills.map((g) => (
        <div className="skill rise" key={g.group}>
          <h3>{g.group}</h3>
          <div className="pills">
            {g.items.map((i) => (
              <span key={i.label} className={i.dim ? "dim" : undefined}>
                {i.label}
              </span>
            ))}
          </div>
        </div>
      ))}
      <p className="note rise">
        Dashed items are tools I've used on projects but don't position myself as a specialist in.
      </p>
    </section>
  );
}
