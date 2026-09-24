import { site } from "@/data/site";

export default function Numbers() {
  return (
    <section className="numbers" id="numbers">
      <div className="inner">
        <p className="eye">By the numbers</p>
        {site.numbers.map((n) => (
          <div className="nrow" key={n.label} data-num={n.value} data-suffix={n.suffix || undefined}>
            <span className="odo" />
            <span className="lbl">{n.label}</span>
            <span className="more">{n.more}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
