import { createFileRoute } from "@tanstack/react-router";
import { Container, Footer, Nav, SectionLabel, thoughts } from "@/components/site";

export const Route = createFileRoute("/thoughts")({
  head: () => ({
    meta: [
      { title: "Thoughts & Writing — Katherine" },
      { name: "description", content: "Essays on product, merit, hardware, and craft." },
      { property: "og:title", content: "Thoughts & Writing — Katherine" },
      { property: "og:description", content: "Essays on product, merit, hardware, and craft." },
    ],
  }),
  component: ThoughtsPage,
});

function ThoughtsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <section className="py-20 md:py-28">
        <Container>
          <SectionLabel dot="rose">thoughts &amp; writing</SectionLabel>
          <h1 className="mb-12 font-display text-5xl leading-[0.95] md:text-7xl">
            Things I've <span className="font-serif-i italic text-accent-orange">written</span>.
          </h1>
          <ul className="space-y-1">
            {thoughts.map((t) => (
              <li key={t.title}>
                <a
                  href="#"
                  className="group flex items-baseline justify-between gap-6 border-b border-rule py-6 transition-colors hover:text-accent-orange md:py-8"
                >
                  <span className="font-serif-i text-2xl leading-tight md:text-4xl">{t.title}</span>
                  <span className="shrink-0 text-sm text-ink-soft transition-colors group-hover:text-accent-orange">
                    {t.read} →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
