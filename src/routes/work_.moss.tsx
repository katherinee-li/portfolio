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
      { property: "og:description", content: "A production-ready sensor kit autonomizing tree inventory — count, height, and caliper." },
    ],
  }),
  component: MossPage,
});

function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`flex items-center justify-center border border-dashed border-rule bg-foreground/[0.02] px-6 text-center text-xs uppercase tracking-[0.22em] text-foreground ${className}`}>
      {label}
    </div>
  );
}

function Caption({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-base leading-relaxed text-foreground text-center">{children}</p>;
}

function Eq({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 border border-rule bg-foreground/[0.02] px-6 py-5 font-mono text-sm leading-relaxed text-foreground md:text-base">
      {children}
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
          <SectionLabel dot="green">Agricultural Robotics · Summer 2024</SectionLabel>
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-6">
              <h1 className="font-display text-5xl leading-[0.92] tracking-tight md:text-7xl">
                moss<span className="text-accent-green">.</span>
              </h1>
              <p className="mt-6 font-serif-i text-2xl leading-snug text-accent-green md:text-4xl">
                The sensor kit that <span className="italic">scales</span>.
              </p>
              <p className="mt-8 max-w-md text-base leading-relaxed text-foreground md:text-lg">
                A production-ready sensor kit autonomizing tree inventory — count, height, and caliper — for a venture-backed agricultural robotics startup.
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
                process required 3 people, 2 months, manual counting, and paper records — with rows missed, varieties mixed,
                and containers moved without notice. Version 2.0 of the moss sensor kit autonomizes this pipeline: mount the
                box to an ATV, drive the rows, plug in at end of day, and the data appears.
              </p>
              <div className="mt-8 flex flex-wrap gap-6">
                {[
                  "Improved field accuracy by 16%",
                  "Reduced sensor failure rates by 20%",
                ].map((s) => (
                  <div key={s} className="border-l-2 border-accent-green pl-4">
                    <p className="text-sm font-medium text-foreground">{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6">
            <Placeholder label="Requirements · field data + interviews" className="aspect-[16/7] w-full" />
            <Caption>
              Product requirements derived from field data, interviews with 3 inventory managers, field supervisors, and
              office workers across Oregon farms, covering physical ergonomics, UI preferences, environmental thresholds,
              and error signaling.
            </Caption>
          </div>
        </Container>
      </section>

      {/* 3. Field Discovery */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="green">field discovery · oregon</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            A week in the field before a single <span className="font-serif-i italic text-accent-green">component</span> was specced.
          </h2>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                Prior to any hardware decisions, a week-long deployment to Oregon farms established the operational baseline.
                Equipment currently used on farms was tested firsthand. The manual measurement process was observed directly:
                caliper in inches, height in feet, every fifth to tenth plant, fifteen seconds minimum per tree. Across
                millions of trees, that arithmetic made the case for automation faster than any spec sheet.
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                Color-signal testing was conducted with field workers to map LED states to intuitive meaning. Findings: green
                indicated working, red indicated stop, flashing indicated attention required. Consistent preference emerged
                for fewer interface elements, estimated time remaining over map display, and readability from the ATV
                driver's seat at under 4 mph.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div>
              <Placeholder label="ATV in tree rows · Oregon farm · sensor kit mounted" className="aspect-[4/3] w-full" />
            </div>
            <div>
              <Placeholder label="Field worker · manual caliper measurement" className="aspect-[4/3] w-full" />
            </div>
          </div>
        </Container>
      </section>

      {/* 4. User Research */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="rose">user research · 3 roles · 8 interviews</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            Three roles, three completely different <span className="font-serif-i italic text-accent-green">mental models</span>.
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                role: "Inventory Manager",
                summary: "The office owns the data.",
                body: "Two counts per year, mid-June and September, determine water schedules, fertilizer orders, and competitive purchasing decisions. With farms holding millions of trees across dozens of blocks, a single weather or variety concern could require re-counting the same rows five or six times.",
                needs: "Live quantity numbers, percentage-of-take metrics, and mass-update capability without row-by-row entry.",
              },
              {
                role: "Field Supervisor",
                summary: "Paper-based by default.",
                body: "Responsible for dispatching crews and translating office requests into field tasks. Communication was entirely paper-based. Required data hierarchy: farm, section, block, row.",
                needs: "Deadline attached, originator identified, assignee tracked, operator recorded.",
              },
              {
                role: "Field Worker",
                summary: "Screen interaction only when something is wrong.",
                body: "Operates in gloves, outdoors, on an ATV. Preferred error feedback priority: lights first, sound second, display third.",
                needs: "Current speed, rows remaining, estimated time to complete. Hardware requirements defined around existing workflows, not the reverse.",
              },
            ].map((r) => (
              <div key={r.role} className="rounded-2xl border border-rule p-6">
                <span className="text-xs uppercase tracking-[0.22em] text-accent-green">{r.role}</span>
                <p className="mt-2 font-display text-xl">{r.summary}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground">{r.body}</p>
                <div className="mt-4 border-t border-rule pt-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-foreground mb-1">Primary needs</p>
                  <p className="text-sm leading-relaxed text-foreground">{r.needs}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. System Architecture */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="green">system architecture</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            System <span className="font-serif-i italic text-accent-green">architecture</span>: device · firmware · environment.
          </h2>
          <Placeholder label="Subsystem diagram · Sensing & Alignment / Core Processing / Power & Telemetry Hub" className="aspect-[16/7] w-full mb-10" />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                tag: "Physical",
                body: "Custom industrial enclosure optimized for field ergonomics and weight distribution. Three modular interconnected zones: Sensor & Interface Wing, Compute Engine Core, and Power & Climate Matrix.",
              },
              {
                tag: "Firmware",
                body: "Sensor data acquisition pipeline and edge computation on a dedicated 32-bit microcontroller. Coordinates high-precision temporal synchronization across GPS, LiDAR, and IMU data via an active clock multiplexer pipeline.",
              },
              {
                tag: "Hardware Integration",
                body: "Dense environmental monitoring matrix: multi-point thermal probes, humidity tracking units, voltage and current telemetry, and firmware-driven fan relay controls.",
              },
            ].map((l) => (
              <div key={l.tag} className="rounded-2xl border border-rule p-6">
                <span className="text-xs uppercase tracking-[0.22em] text-accent-green">{l.tag}</span>
                <p className="mt-3 text-sm leading-relaxed text-foreground">{l.body}</p>
              </div>
            ))}
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
                Component sourcing was held to strict IP, shock, temperature, and humidity standards for each element of the
                system. No exceptions were made for availability constraints.
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
              <dl className="space-y-5 text-sm">
                {[
                  { k: "Ingress Protection", v: "Heavy-duty environmentally-matted industrial connectors and protective mesh sensor housings." },
                  { k: "Human-Machine Interface", v: "High-vibration tactile switches and multi-color status indicator arrays." },
                  { k: "Power Infrastructure", v: "Screw-mounted mechanical power relays, auxiliary high-capacity battery inputs, localized DC-DC regulation stages." },
                ].map((m) => (
                  <div key={m.k} className="border-b border-rule pb-5">
                    <dt className="text-xs uppercase tracking-[0.18em] text-foreground mb-1">{m.k}</dt>
                    <dd className="leading-relaxed text-foreground">{m.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. UX Iteration */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="rose">prototyping · mid to high fidelity</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            From a cardboard box to a <span className="font-serif-i italic text-accent-green">field-ready enclosure</span>.
          </h2>
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <ol className="space-y-5">
                {[
                  "User interviews — 3 farmers, 5 office workers",
                  "Mid-fidelity prototype — components wired into a cardboard box, photos shared with Oregon customers",
                  "Customer feedback — physical dimensions, button placement, handle ergonomics, indicator light placement",
                  "High-fidelity hardware specification and field deployment",
                ].map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border border-rule font-mono text-xs text-foreground">
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-foreground">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="md:col-span-7">
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                A rough prototype was shared with Oregon customers before any mechanical design was committed to. Customer
                preferences for handle position, button count, display visibility, and indicator light behavior were
                incorporated into the hardware specification, not added retroactively.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <Placeholder label="Mid-fidelity prototype · cardboard" className="aspect-[4/3] w-full" />
                <Placeholder label="High-fidelity enclosure · field deployment" className="aspect-[4/3] w-full" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. Closing */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <div className="grid gap-14 md:grid-cols-12 items-center">
            <div className="md:col-span-5">
              <img
                src={farmSensorKit}
                alt="Moss farm sensor kit deployed"
                className="w-full border border-rule block"
              />
            </div>
            <div className="md:col-span-7">
              <SectionLabel dot="green">result</SectionLabel>
              <h2 className="font-display text-3xl leading-[1.05] md:text-5xl mt-4">
                Technology that <span className="font-serif-i italic text-accent-green">disappears into the workflow</span>.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg max-w-lg">
                The objective was not to add a screen to a farmer's day. It was to remove a clipboard, a data re-entry step,
                and an unnecessary office communication. What took 3 people 2 months now runs on an ATV. Inventory data is
                available before the sales window closes.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
