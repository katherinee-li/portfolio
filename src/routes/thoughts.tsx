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
            {[
              {
                to: "/thoughts/early-works" as const,
                title: "Early Works",
                desc: "Two physics experiments built from scratch in high school. IB Extended Essays on eddy current braking and CRT deflection.",
                label: "High School · 2022",
                color: "hover:bg-accent-blue/10",
                labelColor: "text-accent-blue",
                arrowColor: "group-hover:text-accent-blue",
              },
              {
                to: "/thoughts/learning-to-take-up-space" as const,
                title: "Learning to take up space.",
                desc: "On taekwondo, noise, and learning to claim space.",
                label: "Personal · 2022",
                color: "hover:bg-accent-orange/10",
                labelColor: "text-accent-orange",
                arrowColor: "group-hover:text-accent-orange",
              },
              {
                to: "/thoughts/magic-in-the-mundane" as const,
                title: "Magic in the mundane.",
                desc: "On teaching physics to kids, finding magic in ordinary things, and co-founding STEMbox.",
                label: "Personal · 2022",
                color: "hover:bg-accent-orange/10",
                labelColor: "text-accent-orange",
                arrowColor: "group-hover:text-accent-orange",
              },
            ].map((entry) => (
              <li key={entry.to}>
                <Link
                  to={entry.to}
                  className={`group grid grid-cols-12 items-baseline gap-4 border-b border-rule py-6 transition-colors -mx-6 px-6 md:-mx-10 md:px-10 ${entry.color} md:py-7`}
                >
                  <div className="col-span-12 md:col-span-8">
                    <p className="font-display text-xl md:text-2xl">{entry.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{entry.desc}</p>
                  </div>
                  <span className={`col-span-10 font-serif-i text-lg md:col-span-3 ${entry.labelColor}`}>{entry.label}</span>
                  <ArrowUpRight className={`col-span-2 md:col-span-1 h-4 w-4 text-ink-soft transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 justify-self-end ${entry.arrowColor}`} />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
