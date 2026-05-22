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
              Eddy current braking is the physics behind frictionless braking on high-speed trains. A changing magnetic
              field induces circulating currents in a conductor, and those currents oppose motion. The closer the magnet,
              the stronger the field, the faster the stop.
            </p>

            <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
              The apparatus was built from scratch. A mechanical fan was stripped down to its DC motor. An aluminum disk
              was bolted to the shaft. A cedar wood lever system held neodymium magnets at controlled distances from the
              spinning disk. A phone magnetometer measured rotational velocity. An iPhone recorded the braking at 60fps
              and footage was analyzed frame by frame in Tracker.
            </p>

            <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
              Ten air gaps. Three trials each. Thirty data points.
            </p>

            <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
              Results confirmed the theoretical inverse-square relationship between magnetic field intensity and braking
              time. The data also exposed a real limitation: at smaller air gaps, the magnets were close enough to induce
              early braking even when out of position, introducing systematic error that required several pages to
              properly account for.
            </p>

            <div className="mt-8 border-l-2 border-accent-blue pl-5">
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                Braking time varies with the inverse square of magnetic field intensity. Reducing the air gap by half
                does not halve the braking time. It reduces it by a factor of four.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#"
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
              A CRT accelerates electrons from a heated filament through an anode, then deflects them using electric
              fields between charged plates. The beam hits a phosphor screen and leaves a glowing dot. Theory predicts
              deflection is inversely proportional to accelerating voltage.
            </p>

            <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
              A CRT demonstration unit was connected to a potentiometer to vary accelerating voltage, measured with a
              voltmeter, and the deflected spot was marked at 18 different voltage settings across 3 trials each. 54
              data points total. Deflection distances were measured in Tracker.
            </p>

            <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
              The data confirmed the inverse relationship with a correlation of 0.9996. The systematic error came from
              an unexpected source: Earth's magnetic field. When the deflecting voltage was removed entirely, the beam
              still deflected. Theoretical deflection due to Earth's field at the experiment location matched the
              observed residual deflection closely enough to identify it as the dominant source of error.
            </p>

            <div className="mt-8 border-l-2 border-accent-blue pl-5">
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                Deflection is inversely proportional to accelerating voltage and proportional to deflecting voltage.
                A 5.1% systematic error, fully explained.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-ink-soft hover:text-accent-blue transition-colors"
              >
                Download PDF ↗
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Closing */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="blue">closing</SectionLabel>
          <div className="max-w-2xl">
            <p className="text-base leading-relaxed text-foreground md:text-lg">
              Both experiments were finished before knowing what an ECE degree looked like. The instinct was the same
              one that showed up later in every project: build something, measure it carefully, and take the error
              seriously.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
