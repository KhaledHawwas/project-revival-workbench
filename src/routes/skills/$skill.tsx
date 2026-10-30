import { createFileRoute, Link } from "@tanstack/react-router";
import { ItemCard } from "@/components/portfolio/item-card";
import { getItemsBySkill, getSkill } from "@/lib/portfolio";

export const Route = createFileRoute("/skills/$skill")({
  head: ({ params }) => {
    const skill = getSkill(params.skill);
    const title = skill ? `${skill.name} skill — Khaled Hawwas` : "Skill — Khaled Hawwas";
    return {
      meta: [
        { title },
        { name: "description", content: skill ? skill.body : "Skill overview." },
        { property: "og:title", content: title },
        { property: "og:description", content: skill ? skill.body : "Skill overview." },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" }
      ]
    };
  },
  component: SkillDetail
});

function SkillDetail() {
  const { skill: skillId } = Route.useParams();
  const skill = getSkill(skillId);
  if (!skill) throw new Error(`Skill not found: ${skillId}`);
  const items = getItemsBySkill(skill.id);

  return (
    <div className="container py-20">
      <Link className="text-sm text-accent" to="/skills">
        ← All skills
      </Link>
      <p className="eyebrow mt-12 mb-4">{skill.category}</p>
      <h1 className="text-5xl font-bold">{skill.name}</h1>
      <p className="mt-5 max-w-2xl text-lg text-fog">{skill.body}</p>
      <p className="mt-4 text-sm text-mist">{items.length} connected items</p>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {items.map((item) => (
          <ItemCard key={`${item.collection}-${item.id}`} item={item} />
        ))}
      </div>
    </div>
  );
}
