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

const deployment = [
  {
    insight: "Farms are organized by farm → section → block → row, and tree varieties frequently change.",
    solution: "Operators can note variety changes during collection and edit them afterwards.",
  },
  {
    insight: "Sales relies on an existing ERP system. It is slow, but essential.",
    solution: "CSV exports and inventory tables aggregated by variety.",
  },
  {
    insight: "Sales teams need accurate count, height, and caliper data for forecasting.",
    solution: "Table view with customizable columns.",
  },
  {
    insight: "Farm managers care about patterns: irrigation, pests, damage.",
    solution: "Interactive maps and filters by variety, block, row, height, and caliper.",
  },
];

const adoption = [
  {
    insight: "Failure is expensive. One mistake could waste an entire day of work.",
    solution: "Visible system feedback through LEDs, tablet status, progress, battery, speed, and maps.",
  },
  {
    insight: "Operators didn't know what the system was doing.",
    solution: "Operator guide for the sensor kit in English and Spanish.",
  },
  {
    insight: "Hardware wasn't built for the field. Heat, dust, rain, and vibration were everyday realities.",
    solution: "IP67 connectors, sunlight-tested tablets, rugged mounting, retractable Ethernet, and vibration-resistant wiring.",
  },
];

function PairTable({ rows, dot }: { rows: { insight: string; solution: string }[]; dot: "green" | "orange" }) {
  const accent = dot === "green" ? "text-accent-green" : "text-accent-orange";
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

      {/* 2. Background */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="rose">background</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            Inventory was still <span className="font-serif-i italic text-accent-green">manual</span>
          </h2>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                Tree farmers struggle to maintain accurate inventory. The manual process left little traceability
                when numbers were wrong.
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                At J. Frank Schmidt & Son Co., one of the largest tree nurseries in the U.S., crews measured trees
                with calipers, recorded counts on tally sheets, and later re-entered the data into existing software.
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-8">
            {[
              { value: "2M", label: "trees" },
              { value: "3,000", label: "acres" },
              { value: "2", label: "people" },
              { value: "3", label: "months" },
            ].map((s) => (
              <div key={s.label} className="border-l-2 border-accent-green pl-4">
                <p className="font-display text-2xl text-foreground">{s.value}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="w-full max-w-[340px]">
              <img src="/moss-caliper.jpg" alt="Manual caliper measurement in the field" className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="w-full max-w-[340px]">
              <img src="/moss-inventory-screen.jpg" alt="Office re-entry of handwritten inventory data" className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Current vs target */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="orange">scope</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            Prototype to <span className="font-serif-i italic text-accent-green">pilot-ready system</span>
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-2xl border border-rule p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-accent-orange">current system · June 2024</p>
              <ul className="mt-5 space-y-3">
                {[
                  "Standalone sensor kit prototype integrating LiDAR, cameras, GPS, and IMU",
                  "Scans 10–50 trees per second at 97% accuracy",
                  "Controlled through developer laptops",
                ].map((item) => (
                  <li key={item} className="text-base leading-relaxed text-foreground">{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-rule p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-accent-green">target system · August 2024</p>
              <ul className="mt-5 space-y-3">
                {[
                  "Deployable sensor kit ready for field use",
                  "Interface that lets farmers and workers collect data themselves",
                  "Collected data integrates into their current workflows",
                  "Scalable to support eight pilot programs",
                ].map((item) => (
                  <li key={item} className="text-base leading-relaxed text-foreground">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Deliverable 1 */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="green">deliverable 01 · deployment</SectionLabel>
          <h2 className="font-display text-3xl leading-[1.05] md:text-5xl">
            A prototype farmers could <span className="font-serif-i italic text-accent-green">actually use</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground md:text-lg">
            I spent time on farms in Oregon watching how inventory was collected and how the resulting data moved
            through the organization. Instead of replacing the systems they already relied on, we designed around
            them.
          </p>
          <PairTable rows={deployment} dot="green" />
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground md:text-lg">
            <span className="text-xs uppercase tracking-[0.22em] text-accent-green">result</span>
            <br />
            Farmers could independently collect inventory data and integrate it into their existing workflow.
          </p>
        </Container>
      </section>

      {/* 5. Deliverable 2 */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="orange">deliverable 02 · adoption</SectionLabel>
          <h2 className="font-display text-3xl leading-[1.05] md:text-5xl">
            A system farmers could <span className="font-serif-i italic text-accent-green">trust in the field</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground md:text-lg">
            Operators work outdoors, wear gloves, and rarely stop the ATV to interact with software. They needed to
            know what the system was doing without opening developer tools or reading internal error codes.
          </p>
          <PairTable rows={adoption} dot="orange" />
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="w-full max-w-[340px]">
              <img src="/tablet-candidates.jpg" alt="Tablets and controllers evaluated for field use" className="w-full aspect-[4/3] object-cover rounded-2xl border border-rule" />
            </div>
            <div className="w-full max-w-[340px]">
              <img src="/IMG_2927.jpg" alt="Dunk-testing the sealed enclosure" className="w-full aspect-[4/3] object-cover rounded-2xl border border-rule" />
            </div>
          </div>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground md:text-lg">
            <span className="text-xs uppercase tracking-[0.22em] text-accent-orange">result</span>
            <br />
            A sensor kit farmers could deploy independently during the Oregon field pilot.
          </p>
        </Container>
      </section>

      {/* 6. Lessons learned */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="green">lessons learned</SectionLabel>
          <h2 className="font-display text-3xl leading-[1.05] md:text-5xl mt-4">
            Bring customers in <span className="font-serif-i italic text-accent-green">earlier</span>
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              "Waiting too long to involve customers led us to make assumptions about their workflow and needs.",
              "Involving customers in the design process built trust, ownership, and ultimately adoption.",
            ].map((l, i) => (
              <div key={l} className="flex gap-4 rounded-2xl border border-rule p-6">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border border-rule font-mono text-xs text-foreground">
                  {i + 1}
                </span>
                <p className="text-base leading-relaxed text-foreground">{l}</p>
              </div>
            ))}
          </div>
          <blockquote className="mt-10 max-w-2xl border-l-2 border-accent-green pl-6">
            <p className="font-serif-i text-xl leading-snug text-foreground md:text-2xl">
              "The biggest detractors were like the best… they don't want change. But if you could satisfy them, they
              were your biggest proponent out there telling everyone else."
            </p>
            <footer className="mt-4 text-xs uppercase tracking-[0.22em] text-ink-soft">Trent · Farm Owner</footer>
          </blockquote>
        </Container>
      </section>
    </main>
  );
}
