import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Container, Nav, SectionLabel } from "@/components/site";
import farmSensorKit from "@/assets/farm-sensor-kit.png";

export const Route = createFileRoute("/work_/moss")({
  head: () => ({
    meta: [
      { title: "Sensor Kit · Moss" },
      { name: "description", content: "Built the version 2.0 electrical system for the moss sensor kit, an ATV-mounted device that autonomizes tree inventory across farms managing 2 to 10 million trees." },
      { property: "og:title", content: "Sensor Kit · Moss" },
      { property: "og:description", content: "Electrical system for an agricultural robotics sensor kit." },
    ],
  }),
  component: MossPage,
});

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
          <SectionLabel dot="green">Engineering · Summer 2024</SectionLabel>
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-6">
              <h1 className="font-display text-4xl leading-[0.92] tracking-tight md:text-6xl">
                Sensor Kit<span className="text-accent-green">.</span>
              </h1>
              <p className="mt-4 font-serif-i text-xl leading-snug text-accent-green md:text-2xl">
                Electrical system for an agricultural robotics sensor kit.
              </p>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-foreground">
                Built the version 2.0 electrical system for the moss sensor kit, an ATV-mounted device that
                autonomizes tree inventory across farms managing 2 to 10 million trees.
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

      {/* 2. Problem */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="rose">problem</SectionLabel>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <h2 className="font-display text-3xl leading-[1.05] md:text-5xl">
                The problem with <span className="font-serif-i italic text-accent-green">manual forestry</span>.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                Tree farms run inventory twice a year, minimum. The previous process required 3 people, 2 months,
                paper records, and manual counting row by row. Version 2.0 of the moss sensor kit replaced that
                process: mount the box to an ATV, drive the rows, plug in at day's end, and the data appears.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-8">
            {[
              { value: "16%", label: "improvement in field accuracy" },
              { value: "20%", label: "reduction in sensor failure rates" },
              { value: "2–10M", label: "trees per farm" },
            ].map((s) => (
              <div key={s.label} className="border-l-2 border-accent-green pl-4">
                <p className="font-display text-2xl text-foreground">{s.value}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. System Architecture */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="green">system architecture</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            How the system <span className="font-serif-i italic text-accent-green">is organized</span>.
          </h2>
          <p className="mb-10 text-base leading-relaxed text-foreground md:text-lg max-w-2xl">
            The sensor kit integrates GPS, LiDAR, and IMU data into a single enclosure built for field deployment.
            Internal architecture is split across three functional zones. All components are wall-mounted to interior
            enclosure walls and carry IP67 ratings, verified through in-house water testing.
          </p>
          <img
            src="/moss-architecture.jpg"
            alt="Three-panel subsystem block diagram: Sensing & Alignment, Core Processing, Power & Telemetry Hub"
            className="w-full max-w-[900px] mx-auto block mb-10"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { zone: "Sensing and Interface Wing", desc: "Manages primary spatial sensing arrays and localized data routing infrastructure." },
              { zone: "Compute Engine Core", desc: "Houses the central high-performance processing node and industrial power injection hardware." },
              { zone: "Power and Climate Matrix", desc: "Controls environmental monitoring, active thermal regulation, power distribution, and system status indication." },
            ].map((z) => (
              <div key={z.zone} className="border-l-2 border-accent-green pl-4">
                <p className="text-xs uppercase tracking-[0.18em] text-foreground mb-2">{z.zone}</p>
                <p className="text-base leading-relaxed text-foreground">{z.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Serviceability */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="orange">serviceability</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            Modular <span className="font-serif-i italic text-accent-green">by design</span>.
          </h2>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                All components mount to detachable backplanes organized by functional zone. The primary backplate
                connects to the full power distribution system via a custom Molex connector, allowing the battery
                and any backplane-mounted component to be swapped in the field without rewiring the main enclosure.
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                The design came out of an external engineering review: every component required a dedicated mount, a
                heat sink path, and a fixed position against the enclosure wall. Floating wires and adhesive mounts
                were eliminated entirely.
              </p>
            </div>
            <div className="md:col-span-5">
              <img
                src="/IMG_2924.jpg"
                alt="Interior wall mounting and detachable backplane"
                className="w-full max-w-[300px] rounded-2xl border border-rule block"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Scalability */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="rose">manufacturing scalability</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            Designed to scale beyond <span className="font-serif-i italic text-accent-green">one kit per week</span>.
          </h2>
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                Version 1 was fully hand-wired. One kit took one week to produce, which meant scaling to 10 farms
                would require 10 weeks of bench wiring with no consistency between units. The solution was two-part:
                custom PCBs were designed for the time-synchronization subsystem, replacing individual wire runs
                with a single board, and backplanes were standardized with modular connectors to reduce assembly to
                a mount-and-connect operation.
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                A full power budget was mapped per operating state — OFF, IDLE, ACTIVE, COLLECTING — to validate
                battery capacity and regulation design across worst-case field sessions.
              </p>
            </div>
            <div className="md:col-span-5 flex flex-col gap-6">
              <div>
                <img
                  src="/IMG_2925.jpg"
                  alt="Wiring map before PCB consolidation"
                  className="w-full aspect-[4/3] object-cover rounded-2xl border border-rule"
                />
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-foreground">Component wiring map before PCB consolidation</p>
              </div>
              <div>
                <img
                  src="/IMG_2926.jpg"
                  alt="Mid-fidelity cardboard prototype showing component layout"
                  className="w-full aspect-[4/3] object-cover rounded-2xl border border-rule"
                />
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-foreground">Mid-fidelity cardboard prototype: component placement validation</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Hardware Testing */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="orange">hardware testing</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            IP67 across <span className="font-serif-i italic text-accent-green">every component</span>.
          </h2>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                Every component was sourced to meet IP, shock, temperature, and humidity thresholds. No exceptions
                were made for availability.
              </p>
              <div className="mt-8 rounded-2xl border border-rule p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-accent-green mb-4">Enclosure protection</p>
                <div className="grid grid-cols-2 gap-4 font-mono text-sm">
                  <div>
                    <p className="text-foreground/60">Target spec</p>
                    <p className="mt-1 text-foreground">Survive standard Oregon agricultural rainfall</p>
                  </div>
                  <div>
                    <p className="text-foreground/60">Tested spec</p>
                    <p className="mt-1 text-foreground">4-hour validation against high-pressure water jets and simulated flooding</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-5">
              <img
                src="/IMG_2927.jpg"
                alt="Waterproof testing, sensor kit over water tub"
                className="w-full max-w-[300px] rounded-2xl border border-rule block"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Closing */}
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
              <SectionLabel dot="green">outcome</SectionLabel>
              <h2 className="font-display text-3xl leading-[1.05] md:text-5xl mt-4">
                What <span className="font-serif-i italic text-accent-green">changed</span>.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg max-w-lg">
                What took 3 people 2 months now runs on an ATV. The transition from hand-wired prototype to
                PCB-driven, backplane-organized assembly created a repeatable manufacturing baseline. Inventory
                data reaches the office before the sales window closes.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
