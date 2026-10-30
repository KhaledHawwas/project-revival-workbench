import { createFileRoute } from "@tanstack/react-router";
import { siteConfig } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Khaled Hawwas" },
      { name: "description", content: "Get in touch about freelance Android work, product collaborations, and thoughtful software." },
      { property: "og:title", content: "Contact — Khaled Hawwas" },
      { property: "og:description", content: "Get in touch about freelance Android work, product collaborations, and thoughtful software." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ]
  }),
  component: Contact
});

function Contact() {
  return (
    <div className="container grid max-w-5xl gap-12 py-24 lg:grid-cols-[1fr_.8fr]">
      <div>
        <p className="eyebrow mb-5">Let’s build something useful</p>
        <h1 className="text-5xl font-bold tracking-tight">
          Have a mobile idea?
          <br />
          <span className="text-accent">Let’s talk.</span>
        </h1>
        <p className="mt-7 max-w-lg text-lg leading-8 text-fog">
          I’m open to freelance Android work, product collaborations, and conversations about thoughtful software.
        </p>
      </div>
      <div className="card p-7">
        <p className="eyebrow mb-6">Find me online</p>
        <div className="space-y-5 text-navy-soft">
          <a className="block hover:text-accent" href={`mailto:${siteConfig.email}`}>
            Email
            <br />
            <strong className="text-ink">{siteConfig.email}</strong>
          </a>
          <a className="block hover:text-accent" href={siteConfig.github} target="_blank" rel="noreferrer">
            GitHub
            <br />
            <strong className="text-ink">@KhaledHawwas</strong>
          </a>
          <a className="block hover:text-accent" href={siteConfig.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
            <br />
            <strong className="text-ink">Connect with me</strong>
          </a>
        </div>
      </div>
    </div>
  );
}
