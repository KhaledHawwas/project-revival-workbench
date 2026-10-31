import { labels, siteConfig } from "@/data/site";
import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";

const navLinks = [
  { to: "/", label: labels.en.home },
  { to: "/projects", label: labels.en.work },
  { to: "/skills", label: labels.en.skills },
  { to: "/timeline", label: labels.en.journey },
  { to: "/search", label: "Search" },
  { to: "/contact", label: labels.en.contact }
] as const;

export function Header() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  const toggleLanguage = () => {
    const html = document.documentElement;
    const arabic = html.lang === "ar";
    html.lang = arabic ? "en" : "ar";
    html.dir = arabic ? "ltr" : "rtl";
  };

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-base/85 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between gap-5">
        <Link to="/" className="font-mono text-base font-bold tracking-tight">
          <span className="text-accent">~/</span>kh.hawwas
          <span className="cursor-blink"></span>
        </Link>

        <nav
          className="hidden items-center gap-1 font-mono text-sm md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              aria-current={isActive(link.to) ? "page" : undefined}
              className={`rounded px-3 py-1.5 transition-colors ${
                isActive(link.to)
                  ? "bg-accent/10 text-accent"
                  : "text-fog hover:text-accent"
              }`}
            >
              <span className="text-mist">./</span>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            className="chip"
            aria-label="Switch language"
          >
            عربي
          </button>
          <button
            type="button"
            className="chip md:hidden"
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? "close" : "menu"}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-line bg-panel px-6 py-4 font-mono text-sm md:hidden"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block rounded px-2 py-2.5 ${
                isActive(link.to) ? "text-accent" : "text-fog"
              }`}
            >
              <span className="text-mist">./</span>
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line py-8">
      <div className="container flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="term-line term-dim">
          © {new Date().getFullYear()} {siteConfig.name} — <span className="term-out">process exited with code 0</span>
        </p>
        <div className="flex gap-5 font-mono text-xs">
          <a className="link-accent" href={siteConfig.github} target="_blank" rel="noreferrer">
            github ↗
          </a>
          <a className="link-accent" href={siteConfig.linkedin} target="_blank" rel="noreferrer">
            linkedin ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
