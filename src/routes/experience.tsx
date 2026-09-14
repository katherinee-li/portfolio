import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Container, Nav, SectionLabel } from "@/components/site";

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
    role: "Incoming Evaluations Intern",
    org: "General Intuition · New York",
    when: "2026",
    desc: "Integrating action models into new environments and hardware, building evaluation systems, and testing model behavior ahead of deployment.",
    tint: "hover:bg-accent-orange/10",
  },
  {
    role: "Technical Program / Product Intern",
    org: "Lightmatter · Mountain View",
    logo: "/logo-lightmatter.png",
    when: "2025",
    desc: "Built Python and CI/CD tooling for teams developing photonic computing systems. Automated workflows used by 30+ program managers and engineers, reducing update cycles by roughly 25%, and built validation tooling across 120+ photonics test runs.",
    tint: "hover:bg-accent-rose/10",
    href: "/experience/lightmatter",
  },
  {
    role: "Engineering Intern",
    org: "Moss · Pittsburgh",
    logo: "/logo-moss.png",
    when: "2024",
    desc: "Built hardware and software for an agricultural sensing platform deployed on commercial tree farms. Worked across GPS, LiDAR, IMU sensing, electrical design, field software, and customer deployment.",
    tint: "hover:bg-accent-green/10",
    links: [
      { label: "Sensor Kit", href: "/work/moss" },
      { label: "Farm Inventory", href: "/work/farm-app" },
    ],
  },
  {
    role: "Robotics Researcher",
    org: "CMU Biorobotics Lab · Pittsburgh",
    logo: "/logo-biorobotics.jpg",
    when: "2023–2024",
    desc: "Built C++/ROS autonomy and operator tooling for autonomous search-and-rescue robots. Improved autonomous task success by 25% and reduced multi-robot calibration time from four minutes to roughly one.",
    tint: "hover:bg-accent-orange/10",
    href: "/work/lidar",
  },
] as const;

const leadership = [
  {
    role: "President",
    org: "CMU Product Management Academy",
    logo: "/logo-cmu.png",
    when: "2024–2026",
    desc: "Led a 100-person product community and accelerator connecting students with product teams, mentors, and technical projects.",
    tint: "hover:bg-accent-green/10",
    href: "/experience/pma",
  },
  {
    role: "Co-founder",
    org: "STEMbox · Vancouver",
    logo: "/logo-stembox.png",
    when: "2020–2023",
    href: "/experience/stembox",
    desc: "Co-founded a nonprofit that taught hands-on STEM programs to 400+ students across 12 schools.",
    tint: "hover:bg-accent-rose/10",
  },
] as const;

type Entry = (typeof entries)[number] | (typeof leadership)[number];

function ExperiencePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <section className="pt-6 pb-20 md:pt-8 md:pb-28">
        <Container>
          <SectionLabel dot="orange">experience</SectionLabel>
          <h1 className="mb-12 font-display text-5xl leading-[0.95] md:text-7xl">
            Where I've <span className="font-serif-i italic text-accent-orange">been</span>
          </h1>

          <EntryList items={entries} />
          <div className="mt-16">
            <SectionLabel dot="green">leadership</SectionLabel>
            <EntryList items={leadership} />
          </div>
        </Container>
      </section>
    </main>
  );
}

function EntryList({ items }: { items: readonly Entry[] }) {
  return (
    <ul>
      {items.map((entry) => {
        const hasDropdown = "links" in entry;
        const logo = "logo" in entry ? entry.logo : null;

        const rowContent = (
          <>
            <div className="col-span-12 md:col-span-5">
              <p className="font-display text-xl md:text-2xl">{entry.role}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">{entry.desc}</p>
            </div>
            <span className="col-span-7 flex items-center gap-2 font-serif-i text-lg text-accent-orange md:col-span-4">
              {logo && <img src={logo} alt={entry.org} className="h-5 w-5 rounded object-contain" />}
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

        if (!("href" in entry)) {
          return (
            <li key={entry.role + entry.when}>
              <div
                className={`grid grid-cols-12 items-baseline gap-4 border-b border-rule py-6 transition-colors -mx-6 px-6 md:-mx-10 md:px-10 ${entry.tint} md:py-7`}
              >
                {rowContent}
              </div>
            </li>
          );
        }

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
      })}
    </ul>
  );
}
