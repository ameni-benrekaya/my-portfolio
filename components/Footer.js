import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer>
      <span>© {new Date().getFullYear()} {site.name}</span>
      <span>{site.location} · working remotely</span>
      <span>WordPress · Front-end · UI design</span>
    </footer>
  );
}
