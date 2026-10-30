import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { getAllItems, type NormalizedItem } from "@/lib/portfolio";
import { allSkills } from "@/lib/portfolio";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
      { title: "Search — Khaled Hawwas" },
      { name: "description", content: "Search every project, skill, certification, and achievement in the portfolio." },
      { property: "og:title", content: "Search — Khaled Hawwas" },
      { property: "og:description", content: "Search every project, skill, certification, and achievement in the portfolio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ]
  }),
  component: Search
});

function search(term: string): NormalizedItem[] {
  const query = term.trim().toLowerCase();
  if (!query) return [];
  const items = getAllItems();
  const matchingSkillIds = new Set(
    allSkills
      .filter((skill) => skill.id.includes(query) || skill.name.toLowerCase().includes(query) || skill.aliases.some((alias) => alias.toLowerCase().includes(query)))
      .map((skill) => skill.id)
  );
  return items.filter(
    (item) =>
      item.title.toLowerCase().includes(query) ||
      item.summary.toLowerCase().includes(query) ||
      item.skills.some((skill) => matchingSkillIds.has(skill) || skill.includes(query))
  );
}

function Search() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState<NormalizedItem[] | null>(null);

  const run = () => setResults(search(term));

  return (
    <div className="container py-20">
      <p className="eyebrow mb-4">Explore</p>
      <h1 className="text-5xl font-bold">Search the portfolio</h1>
      <p className="mt-5 max-w-xl text-fog">Find projects, skills, certifications, and achievements.</p>
      <div className="mt-10 flex gap-3">
        <input
          value={term}
          onChange={(event) => setTerm(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") run();
          }}
          className="focus-ring w-full rounded-full border border-[#2d4860] bg-surface px-5 py-3 text-ink"
          placeholder="Try Kotlin, Compose, or hackathon"
          type="search"
        />
        <button onClick={run} className="rounded-full bg-accent px-5 py-3 font-bold text-on-accent" type="button">
          Search
        </button>
      </div>
      <div className="mt-8 space-y-4" aria-live="polite">
        {results === null ? (
          <p className="text-mist">Enter a search term to begin.</p>
        ) : results.length === 0 ? (
          <p className="text-mist">No results for “{term}”.</p>
        ) : (
          results.slice(0, 10).map((item) => (
            <a key={`${item.collection}-${item.id}`} className="card block p-5 hover:border-accent" href={`/${item.collection}/${item.id}`}>
              <strong>{item.title}</strong>
              <p className="mt-2 text-sm text-fog">{item.summary}</p>
            </a>
          ))
        )}
      </div>
    </div>
  );
}
