import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Container, Nav, SectionLabel } from "@/components/site";
import farmSensorKit from "@/assets/farm-sensor-kit.png";

export const Route = createFileRoute("/work_/moss")({
  head: () => ({
    meta: [
      { title: "Moss — The Sensor Kit That Scales" },
      { name: "description", content: "A production-ready sensor kit autonomizing tree inventory for a venture-backed agricultural robotics startup." },
      { property: "og:title", content: "Moss — The Sensor Kit That Scales" },
      { property: "og:description", content: "A production-ready sensor kit autonomizing tree inventory: count, height, and caliper." },
    ],
  }),
  component: MossPage,
});

function Caption({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-base leading-relaxed text-foreground text-center">{children}</p>;
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
          <SectionLabel dot="green">Agricultural Robotics · Summer 2024</SectionLabel>
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-6">
              <h1 className="font-display text-4xl leading-[0.92] tracking-tight md:text-6xl">
                moss<span className="text-accent-green">.</span>
              </h1>
              <p className="mt-4 font-serif-i text-xl leading-snug text-accent-green md:text-2xl">
                Agricultural robotics sensor kit for automated tree inventory.
              </p>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-foreground">
                A production-ready sensor kit autonomizing tree inventory (count, height, and caliper) for a venture-backed agricultural robotics startup.
              </p>
              <p className="mt-8 text-xs uppercase tracking-[0.22em] text-foreground">
                Moss · Firmware Intern · Summer 2024
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

      {/* 2. Problem & Requirements */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="rose">problem & requirements</SectionLabel>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <h2 className="font-display text-3xl leading-[1.05] md:text-5xl">
                Manual forestry is <span className="font-serif-i italic text-accent-green">laborious</span>, and the data is always wrong.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                Tree farms manage between 2 and 10 million trees. Inventory runs a minimum of twice per year. The previous
                process required 3 people, 2 months, manual counting, and paper records, with rows missed, varieties mixed,
                and containers moved without notice. Version 2.0 of the moss sensor kit autonomizes this pipeline: mount the
                box to an ATV, drive the rows, plug in at end of day, and the data appears.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {[
              "Improved field accuracy by 16%",
              "Reduced sensor failure rates by 20%",
            ].map((s) => (
              <div key={s} className="border-l-2 border-accent-green pl-4">
                <p className="text-base font-medium text-foreground">{s}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <img
              src="/moss-caliper.jpg"
              alt="Manually measuring tree caliper in the field"
              className="w-full max-w-[400px] mx-auto block"
            />
            <Caption>
              Manually measuring caliper in the field: every fifth to tenth tree, fifteen seconds minimum per measurement,
              recorded by hand. Across millions of trees, the arithmetic made the case for automation.
            </Caption>
          </div>
        </Container>
      </section>

      {/* 3. System Architecture */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="green">system architecture</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            System <span className="font-serif-i italic text-accent-green">architecture</span>: device · firmware · environment.
          </h2>
          <img
            src="/moss-architecture-v2.jpg"
            alt="Three-panel subsystem block diagram: Sensing & Alignment, Core Processing, Power & Telemetry Hub"
            className="w-full max-w-[900px] mx-auto block mb-10"
          />

          {/* Physical */}
          <div className="mb-6 rounded-2xl border border-rule p-6 md:p-8">
            <span className="text-xs uppercase tracking-[0.22em] text-accent-green">Physical</span>
            <p className="mt-3 text-base leading-relaxed text-foreground">
              Custom industrial enclosure engineered around three design constraints: field serviceability, environmental
              ruggedness, and manufacturing scalability. All components mount directly to interior enclosure walls across
              three detachable backplanes. Small components and custom PCBs are grouped by function onto dedicated
              backplanes. The primary backplate detaches via a Molex connector, allowing full removal and replacement
              without rewiring. Every component carries an IP67 rating, independently verified through in-house water jet
              and immersion testing.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                { zone: "Sensor & Interface Wing", desc: "Manages primary spatial sensing arrays and localized data routing infrastructure." },
                { zone: "Compute Engine Core", desc: "Houses the central high-performance processing node and industrial power injection hardware." },
                { zone: "Power & Climate Matrix", desc: "Controls environmental monitoring, active thermal regulation, power distribution, and system status indication." },
              ].map((z) => (
                <div key={z.zone} className="border-l-2 border-accent-green pl-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-foreground mb-1">{z.zone}</p>
                  <p className="text-base leading-relaxed text-foreground">{z.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Firmware + Hardware Integration */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-rule p-6 md:p-8">
              <span className="text-xs uppercase tracking-[0.22em] text-accent-green">Firmware</span>
              <p className="mt-3 text-base leading-relaxed text-foreground">
                Sensor data acquisition pipeline and edge computation running on a dedicated 32-bit microcontroller.
                Coordinates high-precision temporal synchronization across sensing and compute nodes via an active clock
                multiplexer pipeline, ensuring microsecond-accurate alignment of GPS, LiDAR, and IMU data during field
                navigation.
              </p>
            </div>
            <div className="rounded-2xl border border-rule p-6 md:p-8">
              <span className="text-xs uppercase tracking-[0.22em] text-accent-green">Hardware Integration</span>
              <p className="mt-3 text-base leading-relaxed text-foreground">
                Dense environmental monitoring matrix managed through an internal communication hub: multi-point thermal
                probes, environmentally isolated humidity tracking units, integrated voltage and current telemetry for
                real-time power metrics, and firmware-driven fan relay controls.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Serviceability */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="orange">serviceability & ruggedness</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            Designed to be <span className="font-serif-i italic text-accent-green">opened, not replaced</span>.
          </h2>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                An external engineering review identified a core constraint early: components that vibrate loose, overheat,
                or short in field conditions cannot be hot-glued in place and called done. Every component required a
                dedicated mount, a heat sink path, and a position flush against the enclosure wall with a defined shelf or
                bracket. Floating wires were eliminated.
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                The removable backplane became the central serviceability feature. The battery mounts to the backplane
                directly. A custom open-and-closable Molex connector allows the battery to connect to the full power
                distribution system while the backplate remains detachable as a single unit. Swapping the battery or any
                backplane-mounted component requires no rewiring of the main enclosure.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <img
              src="/moss-wiring-interior.jpg"
              alt="Interior of sensor kit showing wall-mounted components and backplane layout"
              className="w-full max-w-[720px] mx-auto block"
            />
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-foreground text-center">Interior: wall-mounted components and detachable backplane</p>
          </div>
        </Container>
      </section>

      {/* 5. Scalability */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="rose">manufacturing scalability</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            Hand-wired in a week. <span className="font-serif-i italic text-accent-green">Unacceptable at 10 farms.</span>
          </h2>
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                Version 1 of the electrical system was fully hand-wired. One kit took one week to produce. Scaling to 10
                farms under that model would require 10 weeks of bench wiring, with no consistency guarantees between units
                and no path to parallel production.
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                The solution was to eliminate hand wiring at the component level. Custom PCBs were designed for the
                time-synchronization subsystem, consolidating connections that previously required individual wire runs into
                a single board. Backplanes were designed to accept standardized connectors, reducing assembly to a
                mount-and-connect operation rather than a wire-by-wire build.
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                The power system and budget were designed in parallel: mapping every component's draw by state, summing
                worst-case consumption, and validating that the battery capacity and regulation stages could support
                sustained field sessions without thermal or voltage issues.
              </p>
            </div>
            <div className="md:col-span-5 flex flex-col gap-6">
              <div>
                <img
                  src="/moss-pcb-layout.jpg"
                  alt="PCB layout with tape and sticky notes mapping connections"
                  className="w-full aspect-[4/3] object-cover"
                />
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-foreground">Component wiring map before PCB consolidation</p>
              </div>
              <div>
                <img
                  src="/moss-cardboard-prototype.jpg"
                  alt="Cardboard prototype showing component layout inside enclosure"
                  className="w-full aspect-[4/3] object-cover"
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
          <SectionLabel dot="orange">hardware testing & constraints</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            Real engineering for <span className="font-serif-i italic text-accent-green">harsh environments</span>.
          </h2>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="font-serif-i italic text-foreground leading-relaxed" style={{ fontSize: "22px" }}>
                Component sourcing was held to strict IP, shock, temperature, and humidity standards for every element of
                the system. No exceptions were made for availability constraints.
              </p>
              <div className="mt-8 rounded-2xl border border-rule p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-accent-green">Enclosure protection</p>
                <div className="mt-4 grid grid-cols-2 gap-4 font-mono text-sm">
                  <div>
                    <p className="text-foreground/60">Target spec</p>
                    <p className="mt-1 text-foreground">Survive standard Oregon agricultural rainfall</p>
                  </div>
                  <div>
                    <p className="text-foreground/60">Tested spec</p>
                    <p className="mt-1 text-foreground">4-hour waterproof validation against high-pressure water jets and simulated flooding</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-5">
              <p className="text-xs uppercase tracking-[0.22em] text-accent-green mb-4">Component specification</p>
              <dl className="space-y-5">
                {[
                  { k: "Ingress Protection", v: "Heavy-duty environmentally-matted industrial connectors and protective mesh sensor housings." },
                  { k: "Human-Machine Interface", v: "High-vibration tactile switches and multi-color status indicator arrays." },
                  { k: "Power Infrastructure", v: "Screw-mounted mechanical power relays, auxiliary high-capacity battery inputs, localized DC-DC regulation stages." },
                ].map((m) => (
                  <div key={m.k} className="border-b border-rule pb-5">
                    <dt className="text-xs uppercase tracking-[0.18em] text-foreground mb-1">{m.k}</dt>
                    <dd className="text-base leading-relaxed text-foreground">{m.v}</dd>
                  </div>
                ))}
              </dl>
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
                src="/moss-atv-rows.jpg"
                alt="Team in tree rows at Oregon farm"
                className="w-full border border-rule block"
              />
            </div>
            <div className="md:col-span-7">
              <SectionLabel dot="green">result</SectionLabel>
              <h2 className="font-display text-3xl leading-[1.05] md:text-5xl mt-4">
                A sensor kit <span className="font-serif-i italic text-accent-green">built to scale</span>.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg max-w-lg">
                What took 3 people 2 months now runs on an ATV. The transition from hand-wired prototype to PCB-driven,
                backplane-organized assembly reduced per-unit production time and created a repeatable manufacturing
                baseline. Inventory data reaches the office before the sales window closes.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
