import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Container, Footer, Nav, SectionLabel } from "@/components/site";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Katherine" },
      { name: "description", content: "Internships, research, and leadership roles." },
      { property: "og:title", content: "Experience — Katherine" },
      { property: "og:description", content: "Internships, research, and leadership roles." },
    ],
  }),
  component: ExperiencePage,
});

const entries = [
  {
    role: "Product Management Intern",
    org: "Coinbase",
    when: "Summer 2026",
    desc: "Scaling product systems at one of the largest crypto platforms.",
  },
  {
    role: "Technical PM Intern",
    org: "Lightmatter",
    when: "Summer 2025",
    desc: "Optimized CI/CD pipelines and deployment automation for program managers at a photonic computing startup.",
  },
  {
    role: "President, PM Club",
    org: "CMU",
    when: "2024 — Now",
    desc: "Running a 100-person PM accelerator — organizing workshops, recruiting programming, and mentoring.",
  },
  {
    role: "Engineering Intern",
    org: "Moss",
    when: "Summer 2024",
    desc: "Built the sensor kit hardware and tablet HCI for autonomous agricultural tree inventory.",
    links: [
      { label: "Farm Sensor Kit", href: "/work/moss" },
      { label: "Farm Inventory App", href: "/work/farm-app" },
    ],
  },
  {
    role: "Robot Exploration Researcher",
    org: "CMU Biorobotics",
    when: "2023 — 2024",
    desc: "Data visualization and operator control GUIs for a fleet of autonomous search and rescue robots.",
    href: "/work/lidar",
  },
] as const;

function ExperiencePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <section className="pt-6 pb-20 md:pt-8 md:pb-28">
        <Container>
          <SectionLabel dot="orange">experience</SectionLabel>
          <h1 className="mb-12 font-display text-5xl leading-[0.95] md:text-7xl">
            Where I've <span className="font-serif-i italic text-accent-orange">worked</span>.
          </h1>
          <ul>
            {entries.map((entry) => {
              const hasLink = "href" in entry;
              const hasDropdown = "links" in entry;

              const rowContent = (
                <>
                  <div className="col-span-12 md:col-span-5">
                    <p className="font-display text-xl md:text-2xl">{entry.role}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{entry.desc}</p>
                  </div>
                  <span className="col-span-7 font-serif-i text-lg text-accent-orange md:col-span-4">{entry.org}</span>
                  <span className="col-span-5 text-right text-sm text-ink-soft md:col-span-3">{entry.when}</span>
                </>
              );

              if (hasDropdown) {
                return (
                  <li key={entry.role + entry.when} className="group relative border-b border-rule">
                    <div className="grid grid-cols-12 items-baseline gap-4 py-6 transition-colors group-hover:bg-foreground/[0.02] md:py-7">
                      {rowContent}
                    </div>
                    <div className="absolute left-0 right-0 top-full z-10 hidden overflow-hidden rounded-b-xl border border-t-0 border-rule bg-background shadow-lg group-hover:block">
                      {entry.links.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          className="flex items-center justify-between px-6 py-4 text-sm transition-colors hover:bg-accent-orange/10 hover:text-accent-orange"
                        >
                          <span>{link.label}</span>
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      ))}
                    </div>
                  </li>
                );
              }

              if (hasLink) {
                return (
                  <li key={entry.role + entry.when}>
                    <Link
                      to={entry.href}
                      className="group grid grid-cols-12 items-baseline gap-4 border-b border-rule py-6 transition-colors hover:bg-foreground/[0.02] md:py-7"
                    >
                      {rowContent}
                    </Link>
                  </li>
                );
              }

              return (
                <li
                  key={entry.role + entry.when}
                  className="group grid grid-cols-12 items-baseline gap-4 border-b border-rule py-6 transition-colors hover:bg-foreground/[0.02] md:py-7"
                >
                  {rowContent}
                </li>
              );
            })}
          </ul>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
