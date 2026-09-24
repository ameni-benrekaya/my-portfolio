import Image from "next/image";
import { site } from "@/data/site";

export default function About() {
  return (
    <section className="about rise" id="about">
      <figure className="portrait" style={{ margin: 0 }}>
        <span className="unmask">
          <Image
            src="/assets/ameni-ben-rekaya-wordpress-and-front-end-developer-5.webp"
            alt="Ameni Ben Rekaya, WordPress and front-end developer"
            width={536}
            height={340}
            sizes="(max-width: 900px) 170px, 268px"
          />
        </span>
        <span className="seal" aria-hidden="true">
          <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <path id="circ" fill="none" d="M60,60 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0" />
            <text>
              <textPath href="#circ" startOffset="0%">
                WordPress · UI design · AI workflow · Front-end ·{" "}
              </textPath>
            </text>
          </svg>
          <em>✳</em>
        </span>
        <figcaption className="tagline">Ameni Ben Rekaya · Sousse</figcaption>
      </figure>

      <div>
        <p className="eye">About</p>
        <h2 className="t-lead" style={{ marginTop: 14 }}>
          I design the page before I build it — which is why the built version still looks like the design.
        </h2>
        <p className="t-body" style={{ marginTop: 18, maxWidth: "52ch" }}>
          I started in UI design and moved into development without dropping either. For agencies that
          means one person covering the gap where projects lose time: no handoff losses, no
          back-and-forth over spacing. For direct clients it means one contact from first sketch to
          launch day.
        </p>
        <div className="facts">
          {site.facts.map((f) => (
            <div key={f.title}>
              <b>{f.title}</b>
              <span>{f.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
