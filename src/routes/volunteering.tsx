import { createFileRoute } from "@tanstack/react-router";
import { ItemCard } from "@/components/portfolio/item-card";
import { SectionHeading } from "@/components/portfolio/skills";
import { getAllItems } from "@/lib/portfolio";

export const Route = createFileRoute("/volunteering")({
  head: () => ({
    meta: [
      { title: "Volunteering — Khaled Hawwas" },
      { name: "description", content: "Community work: sharing Android learning notes and open-source experiments." },
      { property: "og:title", content: "Volunteering — Khaled Hawwas" },
      { property: "og:description", content: "Community work: sharing Android learning notes and open-source experiments." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ]
  }),
  component: Volunteering
});

function Volunteering() {
  const items = getAllItems().filter((item) => item.collection === "volunteering");
  return (
    <div className="container py-20">
      <SectionHeading eyebrow="Community" title="Volunteering & community" />
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
