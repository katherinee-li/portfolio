import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
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
          <ul className="mt-12">
            <li>
              <Link
                to="/thoughts/early-works"
                className="group grid grid-cols-12 items-baseline gap-4 border-b border-rule py-6 transition-colors -mx-6 px-6 md:-mx-10 md:px-10 hover:bg-accent-rose/10 md:py-7"
              >
                <div className="col-span-12 md:col-span-8">
                  <p className="font-display text-xl md:text-2xl">Early Works</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">Two physics experiments built from scratch in high school. IB Extended Essays on eddy current braking and CRT deflection.</p>
                </div>
                <span className="col-span-10 font-serif-i text-lg text-accent-rose md:col-span-3">High School · 2022</span>
                <ArrowUpRight className="col-span-2 md:col-span-1 h-4 w-4 text-ink-soft transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent-rose justify-self-end" />
              </Link>
            </li>
          </ul>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
