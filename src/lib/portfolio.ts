export type ItemType = "projects" | "certifications" | "achievements" | "volunteering";

export type NormalizedItem = {
  type: ItemType;
  collection: ItemType;
  id: string;
  title: string;
  date?: string;
  summary: string;
  skills: string[];
  data: Record<string, unknown>;
};

export type SkillCounts = Record<ItemType, number>;

import { projects, certifications, achievements, volunteering, type Project } from "@/data/items";
import { skills, getSkill } from "@/data/skills";

const collections = { projects, certifications, achievements, volunteering } as const;

function normalize(collection: ItemType): NormalizedItem[] {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (collections[collection] as readonly any[]).map((item) => ({
    type: collection,
    collection,
    id: item.id,
    title: item.title,
    date: item.date,
    summary: item.summary,
    skills: item.skills,
    data: item
  }));
}

export function getAllItems(): NormalizedItem[] {
  const entries: NormalizedItem[] = [
    ...normalize("projects"),
    ...normalize("certifications"),
    ...normalize("achievements"),
    ...normalize("volunteering")
  ];
  return entries.sort((a, b) => (b.date ? Date.parse(b.date) : 0) - (a.date ? Date.parse(a.date) : 0));
}

export function getItemsBySkill(skillId: string): NormalizedItem[] {
  return getAllItems().filter((item) => item.skills.includes(skillId));
}

export function getSkillCounts() {
  const items = getAllItems();
  return skills.map((skill) => {
    const relatedItems = items.filter((item) => item.skills.includes(skill.id));
    const counts = relatedItems.reduce<SkillCounts>(
      (result, item) => {
        result[item.collection] += 1;
        return result;
      },
      { projects: 0, certifications: 0, achievements: 0, volunteering: 0 }
    );
    return { ...skill, counts, count: relatedItems.length };
  });
}

export { getSkill, skills as allSkills, projects as allProjects };
export type { Project };

export function formatDate(date: string | undefined, options: Intl.DateTimeFormatOptions = { month: "short", year: "numeric" }): string {
  if (!date) return "";
  const parsed = new Date(`${date}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return "";
  return parsed.toLocaleDateString("en", { ...options, timeZone: "UTC" });
}
