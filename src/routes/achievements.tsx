import { createFileRoute } from "@tanstack/react-router";
import { ItemCard } from "@/components/portfolio/item-card";
import { SectionHeading } from "@/components/portfolio/skills";
import { getAllItems } from "@/lib/portfolio";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — Khaled Hawwas" },
      { name: "description", content: "Hackathons, contests, and milestones across competitive programming and AI projects." },
      { property: "og:title", content: "Achievements — Khaled Hawwas" },
      { property: "og:description", content: "Hackathons, contests, and milestones across competitive programming and AI projects." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ]
  }),
  component: Achievements
});

function Achievements() {
  const items = getAllItems().filter((item) => item.collection === "achievements");
  return (
    <div className="container py-20">
      <SectionHeading eyebrow="Milestones" title="Achievements" />
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
