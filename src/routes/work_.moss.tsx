import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Container, Nav, SectionLabel } from "@/components/site";
import farmSensorKit from "@/assets/farm-sensor-kit.png";

export const Route = createFileRoute("/work_/moss")({
  head: () => ({
    meta: [
      { title: "Sensor Kit · Moss" },
      { name: "description", content: "Turning a one-off sensing prototype into a repeatable field system." },
      { property: "og:title", content: "Sensor Kit · Moss" },
      { property: "og:description", content: "Turning a one-off sensing prototype into a repeatable field system." },
    ],
  }),
  component: MossPage,
});

const scaling = [
  {
    insight: "Knowledge existed only in my head. Another engineer couldn't easily build the system.",
    solution: "Documentation: wiring schematics, block diagrams, connector maps, build manuals, and BOMs.",
  },
  {
    insight: "Building each unit took nearly two weeks.",
    solution: "Backplanes that consolidate wiring and simplify assembly.",
  },
  {
    insight: "Assembly required extensive manual wiring.",
    solution: "Standardized connectors, pre-crimped cables, and repeatable assembly procedures.",
  },
];

const reliability = [
  {
    insight: "The enclosure had to survive heat, rain, dust, and continuous ATV vibration.",
    solution: "Components selected against ingress protection, temperature, vibration, humidity, and mounting stability.",
  },
  {
    insight: "Field repairs couldn't require rebuilding the enclosure.",
    solution: "Modular backplanes, fixed component positions, documented wiring, and accessible replacement points.",
  },
];

function PairTable({ rows, accent }: { rows: { insight: string; solution: string }[]; accent: string }) {
  return (
    <div className="mt-10 border-t border-rule">
      {rows.map((r) => (
        <div key={r.insight} className="grid gap-4 border-b border-rule py-6 md:grid-cols-2 md:gap-12">
          <div>
            <p className={`mb-2 text-xs uppercase tracking-[0.18em] ${accent}`}>insight</p>
            <p className="text-base leading-relaxed text-foreground">{r.insight}</p>
          </div>
          <div>
            <p className={`mb-2 text-xs uppercase tracking-[0.18em] ${accent}`}>solution</p>
            <p className="text-base leading-relaxed text-foreground">{r.solution}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function MossPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />

      <Container className="pt-4">
        <Link to="/work" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-foreground hover:text-foreground">
          <ArrowLeft className="h-3.5 w-3.5" />
          back to work
        </Link>
      </Container>

      {/* 1. Hero */}
      <section className="pt-6 pb-12 md:pt-10 md:pb-16">
        <Container>
          <SectionLabel dot="green">Hardware Systems · Summer 2024</SectionLabel>
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-6">
              <h1 className="font-display text-4xl leading-[0.92] tracking-tight md:text-6xl">
                Sensor Kit
              </h1>
              <p className="mt-4 font-serif-i text-xl leading-snug text-accent-green md:text-2xl">
                Turning a one-off sensing prototype into a repeatable field system
              </p>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-foreground">
                Moss's sensor kit combined LiDAR, cameras, GPS, and IMU sensing to automate tree inventory from an
                ATV.
              </p>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-foreground">
                I redesigned the hardware around field reliability, serviceability, and repeatable assembly so the
                company could move from one prototype toward eight pilot systems.
              </p>
              <p className="mt-8 text-xs uppercase tracking-[0.22em] text-foreground">
                Engineering Intern · Moss · Summer 2024
              </p>
            </div>
            <div className="md:col-span-6 flex justify-center md:justify-end items-start -mt-10">
              <img
                src={farmSensorKit}
                alt="Moss farm sensor kit"
                className="w-full max-w-[380px] object-contain object-top"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Background */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="rose">background</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            A prototype isn't a <span className="font-serif-i italic text-accent-green">deployable system</span>
          </h2>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                The existing sensor kit worked, but it was still a one-off engineering build. It was difficult to
                repair, extensively hand-wired, and dependent on knowledge that wasn't documented anywhere.
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                That was manageable for one prototype. It wouldn't work for eight customer pilots.
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-8">
            {[
              { value: "1", label: "hand-built prototype" },
              { value: "8", label: "pilot systems planned" },
              { value: "~2 wks", label: "assembly time per unit" },
            ].map((s) => (
              <div key={s.label} className="border-l-2 border-accent-green pl-4">
                <p className="font-display text-2xl text-foreground">{s.value}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Current vs target */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="orange">scope</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            One build to a <span className="font-serif-i italic text-accent-green">repeatable platform</span>
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-2xl border border-rule p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-accent-orange">current system · June 2024</p>
              <ul className="mt-5 space-y-3">
                {[
                  "Hand-wired enclosure that grew as the prototype evolved",
                  "Components mounted ad hoc, with no fixed positions",
                  "Repairs required rewiring large parts of the kit",
                  "No schematics, build manuals, or bills of materials",
                ].map((item) => (
                  <li key={item} className="text-base leading-relaxed text-foreground">{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-rule p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-accent-green">target system · August 2024</p>
              <ul className="mt-5 space-y-3">
                {[
                  "Reliable outdoors",
                  "Easy to service",
                  "Repeatable to assemble",
                  "Understandable by another engineer",
                ].map((item) => (
                  <li key={item} className="text-base leading-relaxed text-foreground">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. System architecture */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="green">system architecture</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            Four subsystems, <span className="font-serif-i italic text-accent-green">one enclosure</span>
          </h2>
          <img
            src="/moss-architecture.jpg"
            alt="Subsystem block diagram of the sensor kit"
            className="w-full max-w-[900px] mx-auto block mb-10"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { zone: "Sensing", desc: "LiDAR, cameras, GPS, and IMU." },
              { zone: "Compute", desc: "Processes and records incoming sensor data." },
              { zone: "Power", desc: "Battery management and power distribution." },
              { zone: "Networking", desc: "Communication between internal components and the operator interface." },
            ].map((z) => (
              <div key={z.zone} className="border-l-2 border-accent-green pl-4">
                <p className="text-xs uppercase tracking-[0.18em] text-foreground mb-2">{z.zone}</p>
                <p className="text-base leading-relaxed text-foreground">{z.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Deliverable 1 — field reliability */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="orange">deliverable 01 · field reliability</SectionLabel>
          <h2 className="font-display text-3xl leading-[1.05] md:text-5xl">
            Hardware built for <span className="font-serif-i italic text-accent-green">outdoor deployment</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground md:text-lg">
            Every component had to work under agricultural field conditions, and the kit had to be serviceable
            between collection runs without an engineer present.
          </p>
          <PairTable rows={reliability} accent="text-accent-orange" />
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="w-full max-w-[340px]">
              <img src="/IMG_2924.jpg" alt="Interior wall mounting and detachable backplane" className="w-full aspect-[4/3] object-cover rounded-2xl border border-rule" />
            </div>
            <div className="w-full max-w-[340px]">
              <img src="/IMG_2927.jpg" alt="Dunk-testing the sealed enclosure" className="w-full aspect-[4/3] object-cover rounded-2xl border border-rule" />
            </div>
          </div>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground md:text-lg">
            <span className="text-xs uppercase tracking-[0.22em] text-accent-orange">result</span>
            <br />
            A field system using IP67 connectors, rugged mounting, and vibration-resistant wiring, validated during
            the Oregon deployments.
          </p>
        </Container>
      </section>

      {/* 6. Deliverable 2 — scaling */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="green">deliverable 02 · scaling</SectionLabel>
          <h2 className="font-display text-3xl leading-[1.05] md:text-5xl">
            From one build to <span className="font-serif-i italic text-accent-green">eight pilots</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground md:text-lg">
            The largest scaling constraint was assembly. Instead of treating every sensor kit like a new prototype,
            the redesigned system followed a consistent build process another engineer could follow.
          </p>
          <PairTable rows={scaling} accent="text-accent-green" />
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground md:text-lg">
            <span className="text-xs uppercase tracking-[0.22em] text-accent-green">result</span>
            <br />
            Reduced estimated assembly time from roughly two weeks to three days.
          </p>
        </Container>
      </section>

      {/* 7. Lessons learned */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <div className="grid gap-14 md:grid-cols-12 items-center">
            <div className="md:col-span-5">
              <img
                src="/moss-device-atv.jpg"
                alt="Sensor kit mounted on ATV in the field"
                className="w-full border border-rule block rounded-2xl"
              />
            </div>
            <div className="md:col-span-7">
              <SectionLabel dot="green">lessons learned</SectionLabel>
              <h2 className="font-display text-3xl leading-[1.05] md:text-5xl mt-4">
                ~2 weeks → <span className="font-serif-i italic text-accent-green">~3 days</span>
              </h2>
              <div className="mt-8 grid gap-6">
                {[
                  "Documentation was the deliverable. The system only scaled once someone else could build it without me.",
                  "Designing for service and assembly early was cheaper than reworking a finished prototype.",
                ].map((l, i) => (
                  <div key={l} className="flex gap-4 rounded-2xl border border-rule p-6">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border border-rule font-mono text-xs text-foreground">
                      {i + 1}
                    </span>
                    <p className="text-base leading-relaxed text-foreground">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
