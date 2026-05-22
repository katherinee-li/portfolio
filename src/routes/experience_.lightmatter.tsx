import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Container, Nav, SectionLabel } from "@/components/site";

export const Route = createFileRoute("/experience_/lightmatter")({
  head: () => ({
    meta: [
      { title: "Lightmatter · Technical Program Management" },
      { name: "description", content: "Technical PM intern at a $4.4B AI photonic computing unicorn. Defining product lifecycle milestones, authoring validation criteria, and building documentation systems." },
      { property: "og:title", content: "Lightmatter · Technical Program Management" },
      { property: "og:description", content: "Technical PM intern at a $4.4B AI photonic computing unicorn. Defining product lifecycle milestones, authoring validation criteria, and building documentation systems for a 300-person engineering org." },
    ],
  }),
  component: LightmatterPage,
});

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l-2 border-accent-orange pl-4">
      <p className="font-display text-2xl text-foreground">{value}</p>
      <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">{label}</p>
    </div>
  );
}

function LightmatterPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />

      <Container className="pt-4">
        <Link to="/experience" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-foreground hover:text-foreground">
          <ArrowLeft className="h-3.5 w-3.5" />
          back to experience
        </Link>
      </Container>

      {/* 1. Hero */}
      <section className="pt-6 pb-12 md:pt-10 md:pb-16">
        <Container>
          <SectionLabel dot="orange">Technical Program Management · Summer 2025</SectionLabel>
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-7">
              <h1 className="font-display text-4xl leading-[0.92] tracking-tight md:text-6xl">
                Lightmatter<span className="text-accent-orange">.</span>
              </h1>
              <p className="mt-4 font-serif-i text-xl leading-snug text-accent-orange md:text-2xl">
                Building the infrastructure behind the infrastructure.
              </p>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-foreground">
                Technical PM intern at a $4.4B AI photonic computing unicorn. Defining product lifecycle milestones,
                authoring validation criteria, and building documentation systems for a 300-person engineering org
                shipping AI data center hardware.
              </p>
              <p className="mt-8 text-xs uppercase tracking-[0.22em] text-foreground">
                Technical Program Management Intern · Mountain View, CA · Summer 2025
              </p>
            </div>
            <div className="md:col-span-5 flex justify-center md:justify-end items-start">
              <img
                src="/lightmatter-rack.jpg"
                alt="Lightmatter photonic computing rack showing Passage and Guide modules with fiber optic interconnects"
                className="w-full max-w-[420px] object-contain rounded-2xl border border-rule"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Context */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="orange">the company</SectionLabel>
          <div className="grid gap-12">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl leading-[1.05] md:text-5xl">
                Photonic computing for <span className="font-serif-i italic text-accent-orange">AI data centers</span>.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                Lightmatter builds photonic interconnect hardware that moves data between AI chips using light instead
                of copper. At a $4.4B valuation and ~300 people, the company was at the inflection point between
                startup speed and enterprise rigor, scaling programs and processes without losing the ability to ship.
              </p>
              <p className="mt-4 text-base leading-relaxed text-foreground md:text-lg">
                The TPM role sat at that intersection: owning cross-functional alignment across engineering, hardware,
                and product teams simultaneously building toward large-scale data center deployment.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Work 1: Product Lifecycle */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="orange">task 01 · product lifecycle</SectionLabel>
          <h2 className="mb-8 font-display text-3xl leading-[1.05] md:text-5xl">
            Build an org-wide <span className="font-serif-i italic text-accent-orange">program playbook</span>.
          </h2>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                The core project was creating a program playbook: a structured framework for how programs start, run,
                and close at Lightmatter. This required interviewing team leads across engineering and product to
                understand what milestones actually mattered, where handoffs broke down, and what information program
                managers needed at each stage but were not getting.
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                The output: 55+ product lifecycle milestones defined across the full org, covering PRD commitment, gap
                and risk analysis, and budget allocation. The milestone structure was designed to work across both
                hardware and software teams, which operate on fundamentally different timelines and iterate differently.
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                Hardware locks decisions early. Software ships continuously. The playbook had to accommodate both
                without creating a process so rigid it slowed either down.
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-8">
            <Stat value="55+" label="lifecycle milestones defined" />
            <Stat value="~300" label="person org aligned" />
            <Stat value="2 tracks" label="hardware and software timelines reconciled" />
          </div>
        </Container>
      </section>

      {/* 4. Work 2: Validation Criteria */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="rose">task 02 · engineering validation</SectionLabel>
          <h2 className="mb-8 font-display text-3xl leading-[1.05] md:text-5xl">
            Author hardware <span className="font-serif-i italic text-accent-orange">validation criteria</span>.
          </h2>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                Authored 40+ validation criteria for engineering and production tests across Lightmatter's hardware
                systems. Each criterion mapped to a market standard, with FIT (Failure in Time) evaluations calculated
                to verify reliability thresholds required for large-scale AI data center deployment.
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                The validation framework gave engineering teams a clear pass/fail definition for each test, removing
                ambiguity that had previously stalled sign-off and delayed deployment timelines.
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-8">
            <Stat value="40+" label="validation criteria authored" />
            <Stat value="FIT" label="evaluations against market standards" />
            <Stat value="Unblocked" label="large-scale AI data center deployment" />
          </div>
        </Container>
      </section>

      {/* 5. Work 3: CI/CD Documentation Pipeline */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="green">task 03 · documentation pipeline</SectionLabel>
          <h2 className="mb-8 font-display text-3xl leading-[1.05] md:text-5xl">
            Automate documentation <span className="font-serif-i italic text-accent-orange">as code</span>.
          </h2>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                Program and product managers at Lightmatter maintained documentation manually, a process that introduced
                version drift, inconsistency, and significant update overhead across 30+ PMs. The solution was to treat
                documentation like code: a CI/CD pipeline built via GitHub Actions that automated documentation
                generation, validation, and publishing on every commit.
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                The pipeline reduced update cycle time by 65%. Credentials were secured via GitHub Secrets. Test suites
                that previously took 8 minutes to run were refactored to complete in 3 minutes, reducing iteration
                friction for the full PM team.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-rule p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-accent-orange mb-6">Documentation architecture</p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="border-l-2 border-accent-orange pl-4">
                <p className="text-xs uppercase tracking-[0.18em] text-foreground mb-2">Production Docs</p>
                <p className="text-base leading-relaxed text-foreground">
                  Static, signed-off, milestone-linked. The authoritative record that follows each program through its
                  full lifecycle.
                </p>
              </div>
              <div className="border-l-2 border-accent-orange pl-4">
                <p className="text-xs uppercase tracking-[0.18em] text-foreground mb-2">Working Docs</p>
                <p className="text-base leading-relaxed text-foreground">
                  Dynamic, linked to live Google Drives, organized by functional area. Landing pages designed to be
                  non-prescriptive. Teams adopt the structure at their own pace.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-8">
            <Stat value="65%" label="reduction in update cycle time" />
            <Stat value="8→3 min" label="test suite runtime" />
            <Stat value="30+" label="program and product managers served" />
          </div>
        </Container>
      </section>

      {/* 6. Goals & Growth */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="orange">internship goals</SectionLabel>
          <h2 className="mb-8 font-display text-3xl leading-[1.05] md:text-5xl">
            Internship <span className="font-serif-i italic text-accent-orange">goals</span>.
          </h2>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                The internship was structured around three pillars. Ownership: building something real, not shadowing.
                Technical fluency: learning to speak the language of hardware and software engineering teams well
                enough to be genuinely useful, not just present. Iteration and influence: learning to form opinionated
                conclusions from incomplete information, identify bottlenecks, and communicate findings to people at
                every level of the org.
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                The playbook, validation criteria, and CI/CD pipeline were each outputs of those three goals running
                in parallel.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { label: "Ownership", desc: "Building something real: three shipped deliverables with measurable org impact, not shadow work." },
              { label: "Technical Fluency", desc: "Learning to speak hardware and software engineering well enough to be useful to both, not just present in the room." },
              { label: "Cross-Functional Influence", desc: "Forming opinionated conclusions from incomplete information and communicating findings across every level of the org." },
            ].map((p) => (
              <div key={p.label} className="rounded-2xl border border-rule p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-accent-orange mb-3">{p.label}</p>
                <p className="text-base leading-relaxed text-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. Closing */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <div className="grid gap-14 md:grid-cols-12 items-start">
            <div className="md:col-span-7">
              <SectionLabel dot="orange">result</SectionLabel>
              <h2 className="font-display text-3xl leading-[1.05] md:text-5xl mt-4">
                Three systems built to <span className="font-serif-i italic text-accent-orange">scale with the org</span>.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg max-w-lg">
                Lightmatter was at the exact moment where process starts to matter: large enough that ad hoc
                coordination breaks down, small enough that the right system could still be designed from scratch.
                The summer was spent building those systems: for milestones, for validation, and for documentation.
                Each one designed to scale with the org rather than constrain it.
              </p>
            </div>
            <div className="md:col-span-5 flex flex-col gap-6">
              <img
                src="/lightmatter-team.jpg"
                alt="Lightmatter intern cohort group photo"
                className="w-full rounded-2xl border border-rule block"
              />
              <img
                src="/lightmatter-intern-card.jpg"
                alt="Lightmatter intern feature card"
                className="w-full rounded-2xl border border-rule block"
              />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
