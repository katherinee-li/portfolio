import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container, Nav, SectionLabel } from "@/components/site";

export const Route = createFileRoute("/work_/stembox")({
  head: () => ({
    meta: [
      { title: "STEMbox — Hands-On Science Kits" },
      { name: "description", content: "Non-profit delivering hands-on STEM experiment kits to elementary students across the Greater Vancouver Area." },
      { property: "og:title", content: "STEMbox — Hands-On Science Kits" },
      { property: "og:description", content: "Three years, 400+ students, 12+ schools." },
    ],
  }),
  component: STEMboxPage,
});

function Caption({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-base leading-relaxed text-foreground text-center">{children}</p>;
}

function STEMboxPage() {
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
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-7">
              <SectionLabel dot="green">Non-Profit · 2020 — 2023</SectionLabel>
              <h1 className="font-display text-4xl leading-[0.92] tracking-tight md:text-6xl">
                STEMbox<span className="text-accent-green">.</span>
              </h1>
              <p className="mt-4 font-serif-i text-xl leading-snug text-accent-green md:text-2xl">
                Hands-on science, delivered to your door.
              </p>
              <p className="mt-8 text-lg leading-relaxed text-foreground">
                Co-founded a non-profit delivering hands-on STEM experiment kits to elementary students across the Greater
                Vancouver Area. Three years, 400+ students, 12+ schools.
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.22em] text-foreground">
                Co-Founder · Greater Vancouver Area · 2020 — 2023
              </p>
            </div>
            <div className="md:col-span-5 flex items-start justify-center">
              <img
                src="/stembox-team.jpg"
                alt="STEMbox team"
                className="w-full max-w-[340px] object-contain rounded-xl"
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
                Elementary science became <span className="font-serif-i italic text-accent-green">worksheets and videos</span>.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground">
                When schools closed in 2020, hands-on science education stopped. Elementary students in the Greater
                Vancouver Area had no way to run real experiments or experience science as something physical. Worksheets
                replaced labs. Videos replaced demonstrations. STEMbox was co-founded to close that gap: designing,
                assembling, and delivering physical experiment kits directly to students, paired with live virtual
                instruction.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. The Kit */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="green">the product</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            Every student. Every material. <span className="font-serif-i italic text-accent-green">By name.</span>
          </h2>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-lg leading-relaxed text-foreground">
                Each STEMbox kit was built around a single experiment. Materials were individually sourced, portioned,
                and packed for each student: DNA extraction, electromagnets, buoyancy testing, volcano chemistry, UV
                bead sunscreen experiments, Alka-Seltzer film canisters, Cartesian divers, and more. Every box was
                labeled with a student's name, assembled in a garage, and distributed to partner schools across Vancouver.
              </p>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="w-full max-w-[340px]">
              <img
                src="/stembox-assembly.jpg"
                alt="STEMbox kits being assembled on the living room floor, materials spread out across the carpet"
                className="w-full rounded-xl border border-rule object-cover aspect-[4/3]"
              />
              <Caption>Assembly on the living room floor: materials portioned for each student.</Caption>
            </div>
            <div className="w-full max-w-[340px]">
              <img
                src="/stembox-boxes.jpg"
                alt="Finished STEMbox kits stacked in the garage, each labeled with a student name"
                className="w-full rounded-xl border border-rule object-cover aspect-[4/3]"
              />
              <Caption>Finished boxes stacked in the garage, each labeled with a student name.</Caption>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Curriculum */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="green">curriculum · 12+ lessons</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            Designed, written, and <span className="font-serif-i italic text-accent-green">taught from scratch</span>.
          </h2>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-lg leading-relaxed text-foreground">
                Every lesson was created and delivered live, covering physics, chemistry, biology, and engineering for
                grades 1 through 7. Topics included buoyancy, electromagnets, DNA structure, osmosis, Cartesian divers,
                the effects of sunscreen on UV radiation, and structural engineering. Each session paired the physical
                kit with a purpose-built slide deck and live instruction, run virtually during a period when keeping
                young students engaged across a screen required deliberate design.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <img
              src="/stembox-lessons.jpg"
              alt="Grid of 12+ lesson decks including DNA extraction, electromagnets, volcano, buoyancy, and Alka-Seltzer"
              className="w-full max-w-[500px] mx-auto block rounded-xl border border-rule"
            />
            <Caption>Original lesson decks spanning physics, chemistry, biology, and engineering.</Caption>
          </div>
        </Container>
      </section>

      {/* 5. Scale */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="orange">impact</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            Three years. <span className="font-serif-i italic text-accent-green">400+ students. 12 schools.</span>
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-foreground max-w-2xl">
            What began as a direct response to pandemic learning loss grew into a three-year program with school
            partnerships across the region. Kits were assembled by hand, logistics were managed independently, and
            curriculum was iterated based on student and teacher feedback each session.
          </p>
          <dl className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {[
              { k: "Students reached", v: "400+" },
              { k: "Partner schools", v: "12+ across the Greater Vancouver Area" },
              { k: "Years of operation", v: "3 continuous years" },
              { k: "Grades served", v: "Grades 1 through 7" },
              { k: "Subjects covered", v: "Physics, chemistry, biology, and engineering" },
            ].map((s) => (
              <div key={s.k} className="border-l-2 border-accent-green pl-4">
                <dt className="text-xs uppercase tracking-[0.18em] text-accent-green mb-1">{s.k}</dt>
                <dd className="text-base leading-relaxed text-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* 6. Press */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="rose">recognition</SectionLabel>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <h2 className="font-display text-3xl leading-[1.05] md:text-5xl">
                Featured in the <span className="font-serif-i italic text-accent-green">Peace Arch News</span>.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground">
                The program was recognized for its impact on students and families across the Semiahoo Secondary
                community during the height of virtual learning.
              </p>
              <a
                href="https://peacearchnews.com/2021/07/11/teaching-virtual-stem-camp-rewarding-and-powerful-for-semihamoo-secondary-students/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-accent-green hover:underline"
              >
                Featured in Peace Arch News
                <ArrowUpRight className="h-4 w-4" />
              </a>
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
                src="/stembox-class.jpg"
                alt="STEMbox students in virtual class"
                className="w-full rounded-xl border border-rule block"
              />
            </div>
            <div className="md:col-span-7">
              <SectionLabel dot="green">conviction</SectionLabel>
              <h2 className="font-display text-3xl leading-[1.05] md:text-5xl mt-4">
                Science is something <span className="font-serif-i italic text-accent-green">you do</span>.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground max-w-xl">
                STEMbox was built on one conviction: a student who has extracted DNA from a strawberry or built a working
                electromagnet understands science differently than one who has only read about it. The kits were the
                product. The curiosity was the point.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
