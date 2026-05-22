import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Container, Nav, SectionLabel } from "@/components/site";

export const Route = createFileRoute("/thoughts_/early-works")({
  head: () => ({
    meta: [
      { title: "Early Works · Katherine" },
      { name: "description", content: "Two physics experiments built from scratch in high school. IB Extended Essays on eddy current braking and cathode ray tube deflection." },
      { property: "og:title", content: "Early Works · Katherine" },
      { property: "og:description", content: "Two physics experiments built from scratch in high school. IB Extended Essays on eddy current braking and cathode ray tube deflection." },
    ],
  }),
  component: EarlyWorksPage,
});

function EarlyWorksPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />

      <Container className="pt-4">
        <Link to="/thoughts" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-foreground hover:text-foreground">
          <ArrowLeft className="h-3.5 w-3.5" />
          back to thoughts
        </Link>
      </Container>

      {/* Hero */}
      <section className="pt-6 pb-12 md:pt-10 md:pb-16">
        <Container>
          <SectionLabel dot="blue">High School · 2022</SectionLabel>
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl leading-[0.92] tracking-tight md:text-6xl">
              Early Works<span className="text-accent-blue">.</span>
            </h1>
          </div>
        </Container>
      </section>

      {/* Experiment 1: Eddy Current Braking */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="blue">experiment 01 · eddy current braking</SectionLabel>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl leading-[1.05] md:text-5xl">
              Eddy Current <span className="font-serif-i italic text-accent-blue">Braking System</span>.
            </h2>
            <p className="mt-6 font-serif-i text-lg leading-relaxed text-ink-soft md:text-xl">
              How does the air gap between a permanent magnet and a rotating aluminum disk affect braking time?
            </p>

            <p className="mt-8 text-base leading-relaxed text-foreground md:text-lg">
              I was first exposed to the phenomenon of eddy currents when I read about the experiment where you drop a
              magnet through a copper tube. However, what intrigued me was the varied practical applications of an eddy
              current braking system and how it can aid or even replace our standard method of braking. I particularly
              wanted to gain a better understanding of the limitations of this phenomenon.
            </p>

            <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
              This experiment is concerned with how changing the air gap between a permanent magnet and a non-ferrous
              rotating disk affects the braking time of the disk, determining the effectiveness of an eddy current
              braking system. Effectiveness in this study refers to the ECB being able to stop motion in the shortest
              amount of time.
            </p>

            <div className="mt-8">
              <a
                href="/early-works-eddy-current.pdf"
                download
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-ink-soft hover:text-accent-blue transition-colors"
              >
                Download PDF ↗
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Experiment 2: Cathode Ray Tube */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="blue">experiment 02 · cathode ray tube deflection</SectionLabel>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl leading-[1.05] md:text-5xl">
              Cathode Ray Tube <span className="font-serif-i italic text-accent-blue">Deflection</span>.
            </h2>
            <p className="mt-6 font-serif-i text-lg leading-relaxed text-ink-soft md:text-xl">
              What is the relationship between accelerating voltage and the deflection of an electron beam?
            </p>

            <p className="mt-8 text-base leading-relaxed text-foreground md:text-lg">
              I am particularly interested in the motion of electrons in electric and magnetic fields. During an
              in-class demonstration, I watched the luminous spot on the Cathode Ray Tube's phosphor screen move as I
              changed the accelerating voltage knob in the slightest way. I want to explore the underlying workings of
              electron beam deflection.
            </p>

            <div className="mt-8">
              <a
                href="/early-works-crt.pdf"
                download
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-ink-soft hover:text-accent-blue transition-colors"
              >
                Download PDF ↗
              </a>
            </div>
          </div>
        </Container>
      </section>


    </main>
  );
}
