import content from "./content.json";

export const site = {
  name: "Ameni Ben Rekaya",
  email: "ameni.benrekaya@gmail.com",
  linkedin: "https://www.linkedin.com/in/ameni-ben-rekaya/",
  cv: "/cv.pdf",                 // drop your CV in /public as cv.pdf
  location: "Sousse, Tunisia",
  headline: "WordPress Developer with a Designer's Eye and an AI Workflow",
  lead: "I design and build websites that stay fast, easy to edit and still standing a year later.",
  body: "Nine years of WordPress and front-end craft, now paired with AI agents that take the repetitive half of the build — so projects ship in days instead of weeks, without the templated look that usually comes with speed.",
  audiences: [
    "agencies with more work than hands.",
    "founders who need it live this month.",
    "teams tired of waiting on a developer.",
    "clients who've been burned once.",
  ],
  facts: [
    { title: "Sousse, Tunisia", sub: "working remotely, GMT+1" },
    { title: "English · French · Arabic", sub: "including right-to-left builds" },
    { title: "Engineering degree", sub: "ISITCOM, computer science" },
  ],
  numbers: [
    { value: "9", label: "years designing and building for the web", more: "From first mockups in 2015 to WordPress networks and AI-assisted builds today." },
    { value: "60", suffix: "+", label: "websites built and maintained in one network", more: "A French regional tourism network kept consistent, fast and current." },
    { value: "13", label: "client engagements across Europe and the Middle East", more: "Healthcare, public sector and e-commerce, freelance and in-house." },
  ],
  services: [
    { idx: "01 — FIGMA", title: "Design", text: "Page layouts, visual systems and responsive behaviour drawn before a single line of code — so you see the site before you pay for it.", tags: ["Wireframes", "Design systems", "Responsive specs", "RTL layouts"] },
    { idx: "02 — WORDPRESS", title: "Build", text: "Custom themes, Gutenberg blocks, Elementor and WooCommerce — clean markup your team can edit and the next developer can read. AI agents scaffold the repetitive structure; every decision stays mine.", tags: ["Custom themes", "Gutenberg blocks", "WooCommerce", "AI-assisted build"] },
    { idx: "03 — PERFORMANCE", title: "Optimise", text: "Core Web Vitals, technical SEO, accessible markup and cross-browser testing, so the site is fast and findable the day it launches.", tags: ["Page speed", "Technical SEO", "Accessibility", "Cross-browser QA"] },
    { idx: "04 — AFTER LAUNCH", title: "Maintain", text: "Migrations, deployments, backups, security hardening and fixes. The work that keeps a site healthy long after launch week.", tags: ["Backups", "Security", "Deployments", "Care plans"] },
  ],
};

export const projects = content.projects;   // { featured, rtl, europe }
export const skills = content.skills;
