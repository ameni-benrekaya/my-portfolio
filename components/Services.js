import { site } from "@/data/site";

export default function Services() {
  return (
    <section id="services">
      <div className="shead rise">
        <h2 className="t-h2">What I do</h2>
        <p className="t-body">Four stages, one person. Hover a stage to see what it covers.</p>
      </div>
      <div className="panels rise" id="panels">
        {site.services.map((s, i) => (
          <article className={`panel${i === 0 ? " on" : ""}`} key={s.title} tabIndex={0}>
            <p className="idx">{s.idx}</p>
            <h3 className="t-h3">{s.title}</h3>
            <div className="body">
              <p className="t-body">{s.text}</p>
              <ul>
                {s.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
