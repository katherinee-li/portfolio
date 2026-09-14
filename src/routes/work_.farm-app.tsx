import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Container, Nav, SectionLabel } from "@/components/site";

export const Route = createFileRoute("/work_/farm-app")({
  head: () => ({
    meta: [
      { title: "Field Deployment · Moss" },
      { name: "description", content: "Turning an autonomous tree-inventory prototype into a system farmers could independently operate." },
      { property: "og:title", content: "Field Deployment · Moss" },
      { property: "og:description", content: "Turning an autonomous tree-inventory prototype into a system farmers could independently operate." },
    ],
  }),
  component: FarmAppPage,
});

function FarmAppPage() {
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
            <div className="md:col-span-5">
              <h1 className="font-display text-4xl leading-[0.92] tracking-tight md:text-6xl">
                Field Deployment
              </h1>
              <p className="mt-4 font-serif-i text-xl leading-snug text-accent-green md:text-2xl">
                Turning an autonomous tree-inventory prototype into a system farmers could independently operate
              </p>
              <p className="mt-8 text-lg leading-relaxed text-foreground">
                Moss had a working perception prototype: LiDAR, cameras, GPS, and IMU could scan 10–50 trees per
                second at 97% accuracy. But the system still ran from developer laptops and wasn't ready for farmers
                to use themselves.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-foreground">
                I worked with growers and field workers to turn that prototype into a deployable system that fit their
                existing workflows and could operate reliably from an ATV.
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.22em] text-foreground">
                Engineering Intern · Moss · Summer 2024
              </p>
            </div>
            <div className="md:col-span-7 flex items-start justify-center">
              <img
                src="/moss-tablet.jpg"
                alt="Field interface showing an active collection session"
                className="w-full max-w-[560px] object-contain"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Problem */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="rose">the problem</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            From prototype to <span className="font-serif-i italic text-accent-green">deployment</span>
          </h2>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                Commercial tree farms manage millions of trees, but inventory was still largely manual.
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                At J. Frank Schmidt, a two-million-tree nursery spanning roughly 3,000 acres, crews measured trees
                with calipers, recorded counts on paper, and later re-entered the data into existing software. The
                process could take months and made mistakes difficult to trace.
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                The technical prototype could already measure trees. The harder problem was making the entire system
                usable without an engineer standing beside it.
              </p>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="w-full max-w-[340px]">
              <img src="/moss-atv-rows.jpg" alt="ATV in tree rows at Oregon farm" className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="w-full max-w-[340px]">
              <img src="/moss-caliper.jpg" alt="Manual caliper measurement in the field" className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Field Research */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="green">field research</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            Understanding the <span className="font-serif-i italic text-accent-green">workflow</span>
          </h2>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                I spent time on farms in Oregon observing how inventory was collected and how the resulting data moved
                through the organization.
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">The workflow followed a hierarchy:</p>
              <p className="mt-4 font-mono text-sm leading-relaxed text-foreground md:text-base">
                Farm → Section → Block → Row
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                Different users also needed different outputs. Field workers needed a simple collection workflow. Farm
                managers cared about patterns across blocks and rows. Sales teams needed accurate count, height, and
                caliper data for forecasting.
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                Instead of replacing their existing systems, we designed around them.
              </p>
            </div>
            <div className="md:col-span-5">
              <img
                src="/moss-inventory-screen.jpg"
                alt="Existing paper-based inventory system on office computer"
                className="w-full rounded-2xl border border-rule"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Data collection */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="green">data collection</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            The operator <span className="font-serif-i italic text-accent-green">workflow</span>
          </h2>
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                The field interface gave operators the information required to complete a collection session without
                exposing the complexity of the underlying sensing system.
              </p>
              <p className="mt-8 text-base leading-relaxed text-foreground md:text-lg">Operators could:</p>
              <ol className="mt-4 space-y-4">
                {[
                  "Select farm, section, block, and row",
                  "Start and stop data collection",
                  "Monitor collection progress",
                  "See battery and system status",
                  "View errors in plain language",
                  "Record changes in tree variety during collection",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border border-rule font-mono text-xs text-foreground">
                      {i + 1}
                    </span>
                    <p className="text-base leading-relaxed text-foreground">{item}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-8 text-base leading-relaxed text-foreground">
                The goal was for farmers to collect data independently instead of relying on an engineer to operate
                the system.
              </p>
            </div>
            <div className="md:col-span-7 flex flex-col gap-6">
              <img
                src="/moss-tablet.jpg"
                alt="Active collection screen showing current speed, location, row progress, and session timer"
                className="w-full rounded-2xl border border-rule"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Existing systems */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="orange">existing systems</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            Fitting into <span className="font-serif-i italic text-accent-green">existing workflows</span>
          </h2>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                The collected data also had to remain useful after the ATV returned from the field.
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                Sales teams relied on an existing ERP system, so we supported CSV exports and aggregated inventory
                tables rather than trying to replace it.
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                Farm managers could explore inventory through maps and filters across variety, block, row, height, and
                caliper.
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                Sales teams could configure table views around the measurements they actually used for forecasting.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Field reliability */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="rose">field reliability</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            Making system state <span className="font-serif-i italic text-accent-green">visible</span>
          </h2>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                A failed collection run could waste an entire day.
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                Operators therefore needed to understand what the system was doing without opening developer tools or
                interpreting internal error codes.
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">We surfaced:</p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "collection status",
              "battery level",
              "progress",
              "speed",
              "location",
              "active errors",
              "exterior LED status",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-rule p-5">
                <p className="text-base leading-relaxed text-foreground">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-base leading-relaxed text-foreground md:text-lg">
            I also created operator documentation in English and Spanish so the system could be deployed without
            engineering support.
          </p>
        </Container>
      </section>

      {/* 7. Hardware */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="orange">hardware</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            Designed for <span className="font-serif-i italic text-accent-green">the field</span>
          </h2>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-6">
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                Consumer hardware wasn't designed for the environment. Heat, dust, rain, vibration, sunlight, and
                gloves were normal operating conditions.
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                I evaluated tablets and field components around those constraints and helped implement:
              </p>
              <div className="mt-10">
                <img
                  src="/tablet-candidates.jpg"
                  alt="Tablet candidates evaluated for field use"
                  className="w-full max-w-[480px] rounded-2xl border border-rule"
                />
              </div>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <dl className="space-y-5">
                {[
                  { k: "IP67 connectors", v: "For repeated outdoor exposure." },
                  { k: "Sunlight-readable tablets", v: "Tested during field operation." },
                  { k: "Rugged mounting", v: "Designed for continuous ATV vibration." },
                  { k: "Retractable Ethernet", v: "A wired connection that operators could reliably use in the field." },
                  { k: "Vibration-resistant wiring", v: "To prevent failures during repeated collection runs." },
                ].map((m) => (
                  <div key={m.k} className="border-b border-rule pb-5">
                    <dt className="text-xs uppercase tracking-[0.18em] text-accent-green mb-1">{m.k}</dt>
                    <dd className="text-base leading-relaxed text-foreground">{m.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. Result */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="green">result</SectionLabel>
          <h2 className="font-display text-3xl leading-[1.05] md:text-5xl mt-4">
            Independent <span className="font-serif-i italic text-accent-green">deployment</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground md:text-lg">
            By the end of the Oregon pilot, farmers could independently operate the sensor kit, collect inventory, and
            move the resulting data into their existing workflow.
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground md:text-lg">
            The biggest shift wasn't a new interface feature. It was moving the system from something engineers could
            demonstrate to something customers could actually deploy.
          </p>
        </Container>
      </section>
    </main>
  );
}
