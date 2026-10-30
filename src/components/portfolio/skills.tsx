import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, action, href }: { eyebrow: string; title: string; action?: string; href?: string }) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        <p className="eyebrow mb-2">{eyebrow}</p>
        <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
      </div>
      {href && action && (
        <a className="text-sm text-accent hover:underline" href={href}>
          {action} →
        </a>
      )}
    </div>
  );
}

export function SkillChip({ skill }: { skill: string }) {
  const skillColors: Record<string, string> = {
    kotlin: "chip-kotlin",
    android: "chip-android",
    compose: "chip-compose",
    "compose-multiplatform": "chip-compose",
    java: "chip-java",
    kmp: "chip-kmp",
    architecture: "chip-architecture",
    python: "chip-python",
    ktor: "chip-ktor",
    git: "chip-git",
    algorithms: "chip-algorithms",
    leadership: "chip-leadership",
    firebase: "chip-firebase",
    room: "chip-room",
    di: "chip-di",
    webrtc: "chip-webrtc",
    websockets: "chip-websockets",
    coze: "chip-coze",
    koin: "chip-koin",
    accessibility: "chip-accessibility",
    vpn: "chip-vpn",
    workmanager: "chip-workmanager",
    notifications: "chip-notifications",
    "firebase-realtime": "chip-firebase",
    camerax: "chip-camerax",
    "java-swing": "chip-java",
    "sql-server": "chip-sql",
    coil: "chip-coil",
    testing: "chip-testing"
  };
  return (
    <a className={`chip ${skillColors[skill] ?? "chip-default"}`} href={`/skills/${skill}`}>
      {skill}
    </a>
  );
}
