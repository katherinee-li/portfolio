import { createFileRoute } from "@tanstack/react-router";
import { Container, Footer, Nav, SectionLabel, work } from "@/components/site";

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

function ExperiencePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <section className="py-20 md:py-28">
        <Container>
          <SectionLabel dot="orange">experience</SectionLabel>
          <h1 className="mb-12 font-display text-5xl leading-[0.95] md:text-7xl">
            Where I've <span className="font-serif-i italic text-accent-orange">worked</span>.
          </h1>
          <ul>
            {work.map((w) => (
              <li
                key={w.role + w.when}
                className="group grid grid-cols-12 items-baseline gap-4 border-b border-rule py-6 transition-colors hover:bg-foreground/[0.02] md:py-7"
              >
                <span className="col-span-12 font-display text-xl md:col-span-5 md:text-2xl">{w.role}</span>
                <span className="col-span-7 font-serif-i text-lg text-accent-orange md:col-span-4">{w.org}</span>
                <span className="col-span-5 text-right text-sm text-ink-soft md:col-span-3">{w.when}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
