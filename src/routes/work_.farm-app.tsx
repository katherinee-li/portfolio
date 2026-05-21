import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Container, Nav, SectionLabel } from "@/components/site";

export const Route = createFileRoute("/work_/farm-app")({
  head: () => ({
    meta: [
      { title: "Farm Inventory App — Moss" },
      { name: "description", content: "The tablet application and physical interface for agricultural field workers collecting tree inventory data." },
      { property: "og:title", content: "Farm Inventory App — Moss" },
      { property: "og:description", content: "Tablet application and HCI designed for gloved agricultural field workers." },
    ],
  }),
  component: FarmAppPage,
});

function Caption({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-base leading-relaxed text-foreground text-center">{children}</p>;
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
          <SectionLabel dot="green">Human-Computer Interface · Summer 2024</SectionLabel>
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <h1 className="font-display text-4xl leading-[0.92] tracking-tight md:text-6xl">
                Farm Inventory<span className="text-accent-green">.</span>
              </h1>
              <p className="mt-4 font-serif-i text-xl leading-snug text-accent-green md:text-2xl">
                Tablet application and field HCI for agricultural inventory.
              </p>
              <p className="mt-8 text-lg leading-relaxed text-foreground">
                Parallel to the sensor kit hardware, the tablet application and physical interface were designed from the
                ground up around one constraint: agricultural field workers wear gloves, work in direct sunlight, and do
                not stop moving to interact with software.
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.22em] text-foreground">
                Moss · Firmware Intern · Summer 2024
              </p>
            </div>
            <div className="md:col-span-7 flex items-start justify-center">
              <img
                src="/moss-tablet-app.jpg"
                alt="Farm inventory tablet application showing active collection session"
                className="w-full max-w-[560px] object-contain"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Field Discovery */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="green">field discovery · oregon</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            A week in the field before a single <span className="font-serif-i italic text-accent-green">screen</span> was designed.
          </h2>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                Prior to any interface decisions, a week-long deployment to Oregon farms established the operational
                baseline. The manual measurement process was observed directly: caliper in inches, height in feet, every
                fifth to tenth plant, fifteen seconds minimum per tree. Existing tools used in the field were tested and
                assessed for display brightness, button placement, and ease of use with gloves.
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                Color-signal testing was conducted with field workers to map LED and UI states to intuitive meaning.
                Findings: green indicated working, red indicated stop, flashing indicated attention required. Consistent
                preference emerged for fewer interface elements, estimated time remaining over map display, and physical
                buttons over touchscreen interaction.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div>
              <img src="/moss-atv-rows.jpg" alt="ATV in tree rows at Oregon farm" className="w-full aspect-[4/3] object-cover" />
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-foreground">ATV and farming equipment, Oregon farm rows</p>
            </div>
            <div>
              <img src="/moss-caliper.jpg" alt="Manual caliper measurement in the field" className="w-full aspect-[4/3] object-cover" />
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-foreground">Manual caliper measurement: the process being replaced</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. User Research */}
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
                <p className="mt-3 text-base leading-relaxed text-foreground">{r.body}</p>
                <div className="mt-4 border-t border-rule pt-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-foreground mb-1">Primary needs</p>
                  <p className="text-base leading-relaxed text-foreground">{r.needs}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Tablet Hardware Selection */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="orange">hardware selection · tablet</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            The right <span className="font-serif-i italic text-accent-green">tablet</span> for the field.
          </h2>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                Standard consumer tablets were disqualified immediately: touchscreens fail with gloves, screens wash out
                in direct sunlight, and IP ratings are insufficient for agricultural environments. Tablet candidates were
                evaluated across four criteria: physical button availability, display brightness under direct sun, IP67
                rating with sealed charging port, and form factor compatible with ATV mounting.
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                Testing was conducted in field conditions to validate brightness thresholds and button tactility with
                gloves. The selected tablet met all four criteria and paired with the sensor kit via a tethered physical
                cable, a deliberate choice reflecting field worker preference for wired connections over wireless during
                data collection sessions.
              </p>
            </div>
            <div className="md:col-span-5">
              <dl className="space-y-5">
                {[
                  { k: "Physical buttons", v: "Required for gloved operation without touchscreen dependency." },
                  { k: "Display brightness", v: "Validated against direct Oregon summer sun conditions." },
                  { k: "IP67 rating", v: "Sealed charging port, independently verified." },
                  { k: "Wired connection", v: "Tethered cable to sensor kit, field worker preference over wireless." },
                ].map((m) => (
                  <div key={m.k} className="border-b border-rule pb-5">
                    <dt className="text-xs uppercase tracking-[0.18em] text-accent-green mb-1">{m.k}</dt>
                    <dd className="text-base leading-relaxed text-foreground">{m.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="mt-12">
            <img
              src="/moss-tablet-candidates.jpg"
              alt="Tablet candidates evaluated for field use"
              className="w-full max-w-[500px] mx-auto block"
            />
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-foreground text-center">Tablet candidates evaluated across brightness, buttons, and IP rating</p>
          </div>
        </Container>
      </section>

      {/* 5. Application Design */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="green">tablet application</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            Six functions. <span className="font-serif-i italic text-accent-green">Nothing extra.</span>
          </h2>
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                The tablet application was scoped to exactly what field workers needed during a collection session, and
                nothing beyond it.
              </p>
              <ol className="mt-8 space-y-4">
                {[
                  "Start and stop data collection",
                  "Enter field information: farm, section, block, row",
                  "Monitor sensor kit battery level in real time",
                  "View active errors from the sensor kit",
                  "Follow the row-by-row collection timeline for the current mission",
                  "Manually log individual plant records during a session",
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
                Color coding, large tap targets, and physical button shortcuts were incorporated throughout. All critical
                actions were accessible without removing gloves. Error states surfaced immediately with plain-language
                descriptions rather than codes.
              </p>
            </div>
            <div className="md:col-span-7 flex flex-col gap-6">
              <img
                src="/moss-tablet-app.jpg"
                alt="Tablet application showing active collection session with speed, location, and row progress"
                className="w-full rounded-2xl border border-rule"
              />
              <img
                src="/moss-farm-map.jpg"
                alt="Farm inventory map showing block and row data with variety color coding"
                className="w-full rounded-2xl border border-rule"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Status Indication */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="orange">LED system · enclosure exterior</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            Status readable from the <span className="font-serif-i italic text-accent-green">driver's seat</span>.
          </h2>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                Enclosure-exterior LED indicators were designed to communicate system state without requiring the operator
                to stop, dismount, or look at a screen. Color assignments were validated through structured field testing
                with workers, who matched LED states to intended meanings before any color was finalized.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { color: "bg-accent-green", label: "Green solid", desc: "Active data collection." },
              { color: "bg-yellow-400", label: "Yellow solid", desc: "Processing." },
              { color: "bg-yellow-400 opacity-60", label: "Yellow flashing", desc: "Transitional state, not collecting, not in error." },
              { color: "bg-red-500", label: "Red flashing", desc: "Error requiring attention." },
              { color: "bg-blue-500", label: "Blue flashing / solid", desc: "Flashing on boot, solid when ready." },
            ].map((s) => (
              <div key={s.label} className="flex items-start gap-4 rounded-2xl border border-rule p-5">
                <div className={`mt-1 h-4 w-4 shrink-0 rounded-full ${s.color}`} />
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-foreground mb-1">{s.label}</p>
                  <p className="text-base leading-relaxed text-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. Closing */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <div className="grid gap-14 md:grid-cols-12 items-center">
            <div className="md:col-span-5">
              <img
                src="/moss-inventory-screen.jpg"
                alt="Old inventory sheets on office computer"
                className="w-full border border-rule block"
              />
            </div>
            <div className="md:col-span-7">
              <SectionLabel dot="green">result</SectionLabel>
              <h2 className="font-display text-3xl leading-[1.05] md:text-5xl mt-4">
                Technology that <span className="font-serif-i italic text-accent-green">disappears into the workflow</span>.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg max-w-lg">
                The objective was not to add a screen to a farmer's day. It was to remove a clipboard, a data re-entry
                step, and an unnecessary office communication. Every interface decision, tablet selection, LED color,
                button placement, and cable choice, traced directly back to a field observation or interview finding.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
