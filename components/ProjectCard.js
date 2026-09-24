import Image from "next/image";

export default function ProjectCard({ p, featured = false }) {
  const linked = Boolean(p.href);
  return (
    <a
      className="card rise"
      href={linked ? p.href : "#"}
      {...(linked ? { target: "_blank", rel: "noopener" } : {})}
    >
      <span className="pic">
        <Image
          src={"/" + p.img}
          alt={p.alt}
          width={featured ? 720 : 540}
          height={featured ? 495 : 405}
          sizes="(max-width: 680px) 100vw, (max-width: 1040px) 50vw, 33vw"
        />
      </span>
      <span className="txt">
        <span className="where">{p.where}</span>
        <h3>{p.title}</h3>
        <p className="t-body">{p.text}</p>
        <span className="tags">
          {p.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </span>
        {linked && <span className="visit">View website <i>↗</i></span>}
      </span>
    </a>
  );
}
