import Image from "next/image";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <header className="hero">
      <span className="avail">
        <Image src="/assets/ameni-ben-rekaya-1.webp" alt={site.name} width={30} height={30} priority />
        <i />
        Available for freelance &amp; full-time
      </span>
      <h1 className="t-display">{site.headline}</h1>

      <div className="hero-foot">
        <p className="rotor">
          <span className="fixed">Built for</span>
          <span className="slot" id="rotor">
            <u>
              {[...site.audiences, site.audiences[0]].map((a, i) => (
                <b key={i}>{a}</b>
              ))}
            </u>
          </span>
        </p>
        <div>
          <p className="t-lead">{site.lead}</p>
          <p className="t-body">{site.body}</p>
          <a className="btn" href="#work">Explore my work ↗</a>
        </div>
      </div>
    </header>
  );
}
