import { site } from "@/data/site";

/**
 * Keep each value in the HTML so it appears once, with or without JavaScript.
 */
export default function Numbers() {
  return (
    <section className="numbers" id="numbers">
      <div className="inner">
        <p className="eye">By the numbers</p>
        {site.numbers.map((n) => (
          <div className="nrow" key={n.label}>
            <span className="odo-fallback">{`${n.value}${n.suffix || ""}`}</span>
            <span className="lbl">{n.label}</span>
            <span className="more">{n.more}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
