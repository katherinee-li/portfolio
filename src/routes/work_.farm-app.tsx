import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Container, Nav, SectionLabel } from "@/components/site";

export const Route = createFileRoute("/work_/farm-app")({
  head: () => ({
    meta: [
      { title: "Farm Inventory · Moss" },
      { name: "description", content: "Tablet application for agricultural inventory collection, designed for field workers wearing gloves in direct sunlight." },
      { property: "og:title", content: "Farm Inventory · Moss" },
      { property: "og:description", content: "Tablet application for agricultural inventory collection, designed for field workers wearing gloves in direct sunlight." },
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
          <SectionLabel dot="green">App Design · Summer 2024</SectionLabel>
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <h1 className="font-display text-4xl leading-[0.92] tracking-tight md:text-6xl">
                Farm Inventory<span className="text-accent-green">.</span>
              </h1>
              <p className="mt-4 font-serif-i text-xl leading-snug text-accent-green md:text-2xl">
                Tablet application for agricultural inventory collection.
              </p>
              <p className="mt-8 text-lg leading-relaxed text-foreground">
                Designed the tablet application and field interface for the moss sensor kit. Built around one
                constraint: field workers wear gloves, work in direct sunlight, and do not stop moving to interact
                with software.
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.22em] text-foreground">
                Engineering Intern · Moss · Summer 2024
              </p>
            </div>
            <div className="md:col-span-7 flex items-start justify-center">
              <img
                src="/moss-tablet.jpg"
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
          <SectionLabel dot="green">field discovery · Oregon</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            A week in the <span className="font-serif-i italic text-accent-green">field first</span>.
          </h2>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                Before any interface decisions, a week-long deployment to Oregon farms established what field workers
                actually needed. The manual inventory process was observed firsthand. Existing field tools were tested
                for brightness, button usability with gloves, and general ergonomics. Color-signal testing with field
                workers mapped LED states to intuitive meaning before any color was finalized.
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

      {/* 3. User Research */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="rose">user research · 3 roles · 8 interviews</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            Three roles, three different <span className="font-serif-i italic text-accent-green">needs</span>.
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                role: "Inventory Manager",
                summary: "Owns the data.",
                body: "Needs live counts, percentage-of-take metrics, and mass updates without row-by-row entry. Recounts the same rows up to six times per season when issues arise.",
              },
              {
                role: "Field Supervisor",
                summary: "Dispatches crews from paper lists.",
                body: "Needs farm, section, block, row in that order, with deadline and operator tracked per mission.",
              },
              {
                role: "Field Worker",
                summary: "Checks the screen only when something is wrong.",
                body: "Operates in gloves on an ATV. Needs current speed, rows remaining, and time to completion. Nothing else.",
              },
            ].map((r) => (
              <div key={r.role} className="rounded-2xl border border-rule p-6">
                <span className="text-xs uppercase tracking-[0.22em] text-accent-green">{r.role}</span>
                <p className="mt-2 font-display text-xl">{r.summary}</p>
                <p className="mt-3 text-base leading-relaxed text-foreground">{r.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <img
              src="/moss-inventory-screen.jpg"
              alt="Existing paper-based inventory system on office computer"
              className="w-full max-w-[500px] mx-auto block rounded-2xl border border-rule"
            />
          </div>
        </Container>
      </section>

      {/* 4. Tablet Hardware Selection */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="orange">hardware selection</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            Why standard tablets <span className="font-serif-i italic text-accent-green">did not work</span>.
          </h2>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                Consumer tablets were disqualified on three counts: touchscreens fail with gloves, displays wash out
                in direct sun, and IP ratings are insufficient for field conditions. Candidates were evaluated on
                physical button availability, brightness under direct sunlight, IP67 rating, and ATV mounting
                compatibility. The selected tablet connects to the sensor kit via a tethered cable, a deliberate
                choice based on field worker preference for wired over wireless during active sessions.
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
              src="/tablet-candidates.jpg"
              alt="Tablet candidates evaluated for field use"
              className="w-full max-w-[500px] mx-auto block rounded-2xl border border-rule"
            />
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
                The application covers exactly what a field worker needs during a collection session.
              </p>
              <ol className="mt-8 space-y-4">
                {[
                  "Start and stop data collection",
                  "Enter field information: farm, section, block, row",
                  "Monitor sensor kit battery level in real time",
                  "View active errors from the sensor kit",
                  "Follow the row-by-row mission timeline",
                  "Manually log individual plant records",
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
                All critical actions work without removing gloves. Error states surface in plain language, not codes.
                Large tap targets and physical button shortcuts throughout.
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

      {/* 6. LED System */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="orange">status indication</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            Status visible from the <span className="font-serif-i italic text-accent-green">driver's seat</span>.
          </h2>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                Exterior LED indicators on the sensor kit communicate system state without requiring the operator to
                stop or dismount. Color assignments were validated with field workers before finalization.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { color: "bg-accent-green", label: "Green solid", desc: "Active data collection." },
              { color: "bg-yellow-400", label: "Yellow solid", desc: "Processing." },
              { color: "bg-yellow-400 opacity-60", label: "Yellow flashing", desc: "Transitional, not collecting, not in error." },
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
          <SectionLabel dot="green">outcome</SectionLabel>
          <h2 className="font-display text-3xl leading-[1.05] md:text-5xl mt-4">
            Remove the clipboard, <span className="font-serif-i italic text-accent-green">not add a screen</span>.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg max-w-2xl">
            Every decision, tablet selection, LED color, button placement, cable choice, traced back to a field
            observation or interview finding. The goal was to make the technology disappear into an existing workflow,
            not add to it.
          </p>
        </Container>
      </section>
    </main>
  );
}
