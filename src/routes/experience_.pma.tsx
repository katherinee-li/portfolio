import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Container, Nav, SectionLabel } from "@/components/site";

export const Route = createFileRoute("/experience_/pma")({
  head: () => ({
    meta: [
      { title: "PMA · CMU Product Management Academy" },
      { name: "description", content: "President of CMU's Product Management Academy, training 60+ students per year in user research, product strategy, and real-world execution through industry partnerships." },
      { property: "og:title", content: "PMA · CMU Product Management Academy" },
      { property: "og:description", content: "President of CMU's Product Management Academy, training 60+ students per year in user research, product strategy, and real-world execution through industry partnerships." },
    ],
  }),
  component: PMAPage,
});

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l-2 border-accent-green pl-4">
      <p className="font-display text-2xl text-foreground">{value}</p>
      <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">{label}</p>
    </div>
  );
}

function PMAPage() {
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
          <SectionLabel dot="green">CMU · Product Management Academy · 2024 — Present</SectionLabel>
          <div className="md:col-span-7">
            <h1 className="font-display text-4xl leading-[0.92] tracking-tight md:text-6xl">
              PMA<span className="text-accent-green">.</span>
            </h1>
            <p className="mt-4 font-serif-i text-xl leading-snug text-accent-green md:text-2xl">
              President, Product Management Academy at CMU.
            </p>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-foreground">
              President of CMU's Product Management Academy, a two-semester program training 60+ students per year in
              user research, product strategy, and real-world execution through industry partnerships and hands-on
              projects.
            </p>
            <p className="mt-8 text-xs uppercase tracking-[0.22em] text-foreground">
              President · CMU Business Technology Group · 2024 — Present
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Overview */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="green">the program</SectionLabel>
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-8">
              <h2 className="font-display text-3xl leading-[1.05] md:text-5xl">
                How the <span className="font-serif-i italic text-accent-green">program works</span>.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                PMA evolved from a skills workshop into a structured two-semester program. The first semester builds
                foundational PM skills: user research, product sense, PRD development, and presentation. The second
                semester deploys those skills on real company partnerships, where members act as an on-campus research
                arm for startups and produce deliverables that directly influence product roadmaps.
              </p>
              <p className="mt-4 text-base leading-relaxed text-foreground md:text-lg">
                10 exec members. 30 members per cohort. Two cohorts per year.
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-8">
            <Stat value="60+" label="students trained per year" />
            <Stat value="2" label="company partnerships secured" />
          </div>
        </Container>
      </section>

      {/* 3. Project 1: Industry Presentation */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="green">project 1 · industry presentation</SectionLabel>
          <div className="grid gap-10 md:grid-cols-12 items-start">
            <div className="md:col-span-5">
              <h2 className="font-display text-3xl leading-[1.05] md:text-5xl">
                Project 1: <span className="font-serif-i italic text-accent-green">Industry presentations.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                Members apply the CIRCLES framework to solve genuine product pain points for companies including Tesla,
                Waymo, and Airbnb. Each team presents to external judges recruited from industry: Duolingo and PNC
                judged the most recent cycle, providing professional-grade feedback on problem framing, solution
                design, and business case.
              </p>
              <img
                src="/pma-presentation.jpg"
                alt="Students presenting an Xbox AI assistant redesign"
                className="mt-8 w-full rounded-2xl border border-rule block"
              />
            </div>
            <div className="md:col-span-7">
              <iframe
                src="/pma-industry-presentation.pdf"
                className="w-full rounded-2xl border border-rule"
                style={{ height: "520px" }}
                title="Industry Presentation Assignment"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Project 2: Company Partnership */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="orange">project 2 · company partnership</SectionLabel>
          <div className="grid gap-10 md:grid-cols-12 items-start">
            <div className="md:col-span-5">
              <h2 className="font-display text-3xl leading-[1.05] md:text-5xl">
                Project 2: <span className="font-serif-i italic text-accent-green">Company partnership.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                PMA partnered with Perflection AI, a sports analysis startup, placing 20 members into active user
                research and product strategy roles. Members conducted user interviews, developed PRDs, and built a
                market expansion strategy delivered directly to the founder.
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                The project was structured to train members in client management, founder alignment, and the full
                product research cycle: not just the skills, but the judgment required to use them under real
                constraints.
              </p>
            </div>
            <div className="md:col-span-7">
              <iframe
                src="/pma-perflection.pdf"
                className="w-full rounded-2xl border border-rule"
                style={{ height: "520px" }}
                title="PMA x Perflection AI Project Documentation"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Speaker Series */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="green">speaker series</SectionLabel>
          <div className="grid gap-12 md:grid-cols-12 items-start">
            <div className="md:col-span-7">
              <h2 className="font-display text-3xl leading-[1.05] md:text-5xl">
                <span className="font-serif-i italic text-accent-green">Speaker series.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                Each semester includes a speaker series bringing in PMs from Big Tech and startups to share how their
                specific companies work: not generic PM advice, but the actual texture of how decisions get made at
                different organizations and scales.
              </p>
            </div>
            <div className="md:col-span-5">
              <img
                src="/pma-speaker.jpg"
                alt="Speaker session with Sofie Yang, Harvard MBA, former Uber PM and McKinsey consultant"
                className="w-full rounded-2xl border border-rule block"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Operations */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="rose">running the org</SectionLabel>
          <div className="grid gap-10 md:grid-cols-12 items-start">
            <div className="md:col-span-5">
              <h2 className="font-display text-3xl leading-[1.05] md:text-5xl">
                Running <span className="font-serif-i italic text-accent-green">the org.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                Leading PMA meant running weekly exec syncs, managing project oversight across 6 teams simultaneously,
                coordinating external company relationships, and designing the curriculum from scratch each semester.
                The operational challenge was keeping 10 exec members aligned on priorities while giving each enough
                ownership to drive their area.
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                A formal program playbook was developed to standardize handoffs, define exec roles, and create a
                repeatable process for the next leadership team.
              </p>
            </div>
            <div className="md:col-span-7">
              <iframe
                src="/pma-developing-product.pdf"
                className="w-full rounded-2xl border border-rule"
                style={{ height: "520px" }}
                title="Developing a New Product — curriculum slides"
              />
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { label: "Recruitment", desc: "Defining the intake process, interview structure, and cohort composition each semester." },
              { label: "Curriculum", desc: "Designing project briefs, workshop content, and the speaker series from scratch each cycle." },
              { label: "Partnerships", desc: "Sourcing and managing external company relationships and judge recruitment." },
            ].map((p) => (
              <div key={p.label} className="rounded-2xl border border-rule p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-accent-green mb-3">{p.label}</p>
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
            <div className="md:col-span-6">
              <SectionLabel dot="green">where it's going</SectionLabel>
              <h2 className="font-display text-3xl leading-[1.05] md:text-5xl mt-4">
                What <span className="font-serif-i italic text-accent-green">comes next.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                The longer-term vision for PMA is a continuous professional pipeline: foundational skills in the fall,
                experiential company projects in the spring, and an alumni network that stays connected after
                graduation. The current structure proved the model works. The next step is making it permanent.
              </p>
            </div>
            <div className="md:col-span-6">
              <img
                src="/pma-cohort.jpg"
                alt="Fall 2025 PMA cohort welcome session, members holding name cards"
                className="w-full rounded-2xl border border-rule block"
              />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
