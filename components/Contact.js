import { site } from "@/data/site";

export default function Contact() {
  return (
    <section className="cta" id="contact">
      <h2 className="t-display rise">Let&apos;s build something that lasts.</h2>
      <p className="t-body rise" style={{ marginTop: 20, maxWidth: "46ch", fontSize: "16.5px" }}>
        Tell me what you need and when you need it. I reply within a day, in English, French or Arabic.
      </p>
      <div className="ways rise">
        <a className="btn quiet" href={`mailto:${site.email}`}>{site.email}</a>
        <a className="btn quiet" href={site.linkedin}>LinkedIn</a>
        <a className="btn quiet" href={site.cv}>Download CV</a>
      </div>
    </section>
  );
}
