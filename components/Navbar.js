export default function Navbar() {
  return (
    <nav className="top">
      <div className="wrap top-in">
        <a className="logo" href="#top">Ameni Ben Rekaya</a>
        <div className="top-links">
          <a href="#featured">Work</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <span style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <button className="swap" id="sw">Dark</button>
          <a className="btn" href="#contact">Contact</a>
        </span>
      </div>
    </nav>
  );
}
