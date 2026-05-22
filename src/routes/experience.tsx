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
    logo: "/logo-coinbase.png",
    when: "Summer 2026",
    desc: "Scaling product systems at one of the largest crypto platforms.",
    tint: "hover:bg-accent-orange/10",
    coming: true,
  },
  {
    role: "Technical PM Intern",
    org: "Lightmatter",
    logo: "/logo-lightmatter.png",
    when: "Summer 2025",
    desc: "Optimized CI/CD pipelines and deployment automation for program managers at a photonic computing startup.",
    tint: "hover:bg-accent-rose/10",
    href: "/experience/lightmatter",
  },
  {
    role: "President, PM Club",
    org: "CMUBTG",
    logo: "/logo-cmu.png",
    when: "2024 — Now",
    desc: "Running a 100-person PM accelerator: organizing workshops, recruiting programming, and mentoring.",
    tint: "hover:bg-accent-green/10",
    href: "/experience/pma",
  },
  {
    role: "Engineering Intern",
    org: "moss",
    logo: "/logo-moss.png",
    when: "Summer 2024",
    desc: "Built the sensor kit hardware and tablet HCI for autonomous agricultural tree inventory.",
    tint: "hover:bg-accent-green/10",
    links: [
      { label: "Farm Sensor Kit", href: "/work/moss" },
      { label: "Farm Inventory App", href: "/work/farm-app" },
    ],
  },
  {
    role: "Robot Exploration Researcher",
    org: "CMU Biorobotics",
    logo: "/logo-biorobotics.jpg",
    when: "2023 — 2024",
    desc: "Data visualization and operator control GUIs for a fleet of autonomous search and rescue robots.",
    tint: "hover:bg-accent-orange/10",
    href: "/work/lidar",
  },
  {
    role: "Co-founder",
    org: "STEMbox",
    logo: "/logo-stembox.png",
    when: "2020 — 2023",
    href: "/work/stembox",
    desc: "Co-founded a non-profit teaching hands-on STEM to 400+ students across 12 schools in Vancouver. Ran for three years.",
    tint: "hover:bg-accent-rose/10",
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
            Where I've <span className="font-serif-i italic text-accent-orange">been</span>.
          </h1>
          <ul>
            {entries.map((entry) => {
              const hasLink = "href" in entry;
              const hasDropdown = "links" in entry;

              const rowContent = (
                <>
                  <div className="col-span-12 md:col-span-5">
                    <p className="font-display text-xl md:text-2xl">{entry.role}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {entry.desc}
                      {"coming" in entry && entry.coming && (
                        <span className="ml-1 font-semibold text-foreground"> In the works.</span>
                      )}
                    </p>
                  </div>
                  <span className="col-span-7 flex items-center gap-2 font-serif-i text-lg text-accent-orange md:col-span-4">
                    <img src={entry.logo} alt={entry.org} className="h-5 w-5 rounded object-contain" />
                    {entry.org}
                  </span>
                  <span className="col-span-5 text-right text-sm text-ink-soft md:col-span-3">{entry.when}</span>
                </>
              );

              if (hasDropdown) {
                return (
                  <li key={entry.role + entry.when} className="group relative border-b border-rule">
                    <div className={`grid grid-cols-12 items-baseline gap-4 py-6 transition-colors -mx-6 px-6 md:-mx-10 md:px-10 ${entry.tint} md:py-7`}>
                      {rowContent}
                    </div>
                    <div className="absolute -left-6 -right-6 md:-left-10 md:-right-10 top-full z-10 hidden overflow-hidden rounded-b-xl border border-t-0 border-rule bg-background shadow-lg group-hover:block">
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
                      className={`group grid grid-cols-12 items-baseline gap-4 border-b border-rule py-6 transition-colors -mx-6 px-6 md:-mx-10 md:px-10 ${entry.tint} md:py-7`}
                    >
                      {rowContent}
                    </Link>
                  </li>
                );
              }

              return (
                <li
                  key={entry.role + entry.when}
                  className={`group grid grid-cols-12 items-baseline gap-4 border-b border-rule py-6 transition-colors -mx-6 px-6 md:-mx-10 md:px-10 ${entry.tint} md:py-7`}
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
