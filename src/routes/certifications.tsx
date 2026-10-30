import { createFileRoute } from "@tanstack/react-router";
import { ItemCard } from "@/components/portfolio/item-card";
import { SectionHeading } from "@/components/portfolio/skills";
import { getAllItems } from "@/lib/portfolio";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Khaled Hawwas" },
      { name: "description", content: "Certifications and completed tracks: CS50x, DEPI Android development, and continuous learning." },
      { property: "og:title", content: "Certifications — Khaled Hawwas" },
      { property: "og:description", content: "Certifications and completed tracks: CS50x, DEPI Android development, and continuous learning." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ]
  }),
  component: Certifications
});

function Certifications() {
  const items = getAllItems().filter((item) => item.collection === "certifications");
  return (
    <div className="container py-20">
      <SectionHeading eyebrow="Learning" title="Certifications" />
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
