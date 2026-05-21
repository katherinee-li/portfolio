import { createFileRoute } from "@tanstack/react-router";
import { Container, Footer, Nav, SectionLabel } from "@/components/site";

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
          <h1 className="font-display text-5xl leading-[0.95] md:text-7xl">
            Things I've <span className="font-serif-i italic text-accent-orange">written</span>.
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-ink-soft">Coming soon.</p>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
