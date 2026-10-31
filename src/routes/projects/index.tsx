import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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

const filters = [
  { key: "all", label: "all" },
  { key: "open-source", label: "open source" },
  { key: "client", label: "client work" },
  { key: "wip", label: "in progress" }
] as const;

type FilterKey = (typeof filters)[number]["key"];

function ProjectsIndex() {
  const [filter, setFilter] = useState<FilterKey>("all");
  const projects = getAllItems().filter((item) => item.collection === "projects");

  const visible = projects.filter((item) => {
    const type = item.data["type"] as string | undefined;
    const status = item.data["status"] as string | undefined;
    if (filter === "open-source") return type === "open-source";
    if (filter === "client") return type !== "open-source";
    if (filter === "wip") return status === "work-in-progress";
    return true;
  });

  return (
    <div className="container py-20">
      <SectionHeading eyebrow="work" title="Projects with purpose" />
      <p className="mb-8 max-w-2xl text-fog">
        From focused Android utilities to cross-platform experiments and production client work.
      </p>

      <div
        className="mb-4 flex flex-wrap items-center gap-2 font-mono text-xs"
        role="group"
        aria-label="Filter projects"
      >
        <span className="text-accent">$</span>
        <span className="text-mist">filter --type</span>
        {filters.map((option) => (
          <button
            key={option.key}
            type="button"
            aria-pressed={filter === option.key}
            onClick={() => setFilter(option.key)}
            className={`rounded border px-3 py-1.5 transition-colors ${
              filter === option.key
                ? "border-accent bg-accent/10 text-accent"
                : "border-line-soft text-fog hover:border-accent hover:text-accent"
            }`}
          >
            {option.label}
          </button>
        ))}
        <span className="ml-auto text-mist">
          {visible.length}/{projects.length} results
        </span>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
