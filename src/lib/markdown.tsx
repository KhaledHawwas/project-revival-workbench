import type { ReactNode } from "react";

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    const key = `${keyPrefix}-${index}`;
    if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
      return (
        <code key={key} className="rounded bg-[var(--color-surface)] px-1.5 py-0.5 text-[.9em] text-[var(--color-accent)]">
          {part.slice(1, -1)}
        </code>
      );
    }
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return <strong key={key}>{part.slice(2, -2)}</strong>;
    }
    return <span key={key}>{part}</span>;
  });
}

/** Minimal markdown renderer for the portfolio content bodies: h2, lists, paragraphs, `code`, **bold**. */
export function renderMarkdown(markdown: string): ReactNode[] {
  const lines = markdown.split("\n");
  const blocks: ReactNode[] = [];
  let list: { ordered: boolean; items: string[] } | null = null;

  const flushList = () => {
    if (!list) return;
    const items = list.items.map((item, index) => <li key={index}>{renderInline(item, `li-${blocks.length}-${index}`)}</li>);
    blocks.push(
      list.ordered ? (
        <ol key={`list-${blocks.length}`} className="list-decimal space-y-2 pl-5">
          {items}
        </ol>
      ) : (
        <ul key={`list-${blocks.length}`} className="list-disc space-y-2 pl-5">
          {items}
        </ul>
      )
    );
    list = null;
  };

  lines.forEach((rawLine, index) => {
    const line = rawLine.trim();
    if (!line) {
      flushList();
      return;
    }
    const unordered = /^- (.*)$/.exec(line);
    const ordered = /^(?:\d+)\. (.*)$/.exec(line);
    const heading = /^## (.*)$/.exec(line);
    const headingText = heading?.[1];
    if (heading && headingText) {
      flushList();
      blocks.push(
        <h2 key={index} className="mt-10 mb-3 text-2xl font-semibold tracking-tight text-ink">
          {renderInline(headingText, `h-${index}`)}
        </h2>
      );
    } else if (unordered) {
      if (!list || list.ordered) {
        flushList();
        list = { ordered: false, items: [] };
      }
      list.items.push(unordered[1] ?? "");
    } else if (ordered) {
      if (!list || !list.ordered) {
        flushList();
        list = { ordered: true, items: [] };
      }
      list.items.push(ordered[1] ?? "");
    } else {
      flushList();
      blocks.push(
        <p key={index} className="my-4 leading-7">
          {renderInline(line, `p-${index}`)}
        </p>
      );
    }
  });
  flushList();
  return blocks;
}
