import { createFileRoute } from "@tanstack/react-router";
import { ItemCard } from "@/components/portfolio/item-card";
import { SectionHeading } from "@/components/portfolio/skills";
import { getAllItems } from "@/lib/portfolio";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Khaled Hawwas" },
      {
        name: "description",
        content: "Android and Kotlin projects: open-source experiments, freelance client work, and cross-platform apps."
      },
      { property: "og:title", content: "Projects — Khaled Hawwas" },
      {
        property: "og:description",
        content: "Android and Kotlin projects: open-source experiments, freelance client work, and cross-platform apps."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ]
  }),
  component: ProjectsIndex
});

function ProjectsIndex() {
  const projects = getAllItems().filter((item) => item.collection === "projects");
  return (
    <div className="container py-20">
      <SectionHeading eyebrow="Work" title="Projects with purpose" />
      <p className="mb-10 max-w-2xl text-fog">
        From focused Android utilities to cross-platform experiments and production client work.
      </p>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
