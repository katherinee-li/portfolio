import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Container, Nav, SectionLabel } from "@/components/site";
import farmSensorKit from "@/assets/farm-sensor-kit.png";

export const Route = createFileRoute("/work_/moss")({
  head: () => ({
    meta: [
      { title: "Sensor Kit · Moss" },
      { name: "description", content: "Turning a one-off sensing prototype into a repeatable field system." },
      { property: "og:title", content: "Sensor Kit · Moss" },
      { property: "og:description", content: "Turning a one-off sensing prototype into a repeatable field system." },
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
          <SectionLabel dot="green">Hardware Systems · Summer 2024</SectionLabel>
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-6">
              <h1 className="font-display text-4xl leading-[0.92] tracking-tight md:text-6xl">
                Sensor Kit
              </h1>
              <p className="mt-4 font-serif-i text-xl leading-snug text-accent-green md:text-2xl">
                Turning a one-off sensing prototype into a repeatable field system
              </p>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-foreground">
                Moss's sensor kit combined LiDAR, cameras, GPS, and IMU sensing to automate tree inventory from an
                ATV.
              </p>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-foreground">
                I redesigned the hardware around field reliability, serviceability, and repeatable assembly so the
                company could move from one prototype toward eight pilot systems.
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
          <SectionLabel dot="rose">the problem</SectionLabel>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <h2 className="font-display text-3xl leading-[1.05] md:text-5xl">
                A prototype isn't a <span className="font-serif-i italic text-accent-green">deployable system</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                The existing sensor kit worked, but it was still a one-off engineering build. It was difficult to
                repair, extensively hand-wired, and dependent on knowledge that wasn't documented anywhere.
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                That was manageable for one prototype. It wouldn't work for eight customer pilots.
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">The goal was to make the system:</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-8">
            {[
              "reliable outdoors",
              "easy to service",
              "repeatable to assemble",
              "understandable by another engineer",
            ].map((g) => (
              <div key={g} className="border-l-2 border-accent-green pl-4">
                <p className="text-base leading-relaxed text-foreground">{g}</p>
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
            System <span className="font-serif-i italic text-accent-green">architecture</span>
          </h2>
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-foreground md:text-lg">
            The sensor kit combined several subsystems inside one enclosure.
          </p>
          <img
            src="/moss-architecture.jpg"
            alt="Subsystem block diagram of the sensor kit"
            className="w-full max-w-[900px] mx-auto block mb-10"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { zone: "Sensing", desc: "LiDAR, cameras, GPS, and IMU." },
              { zone: "Compute", desc: "Processes and records incoming sensor data." },
              { zone: "Power", desc: "Battery management and power distribution." },
              { zone: "Networking", desc: "Communication between internal components and the operator interface." },
            ].map((z) => (
              <div key={z.zone} className="border-l-2 border-accent-green pl-4">
                <p className="text-xs uppercase tracking-[0.18em] text-foreground mb-2">{z.zone}</p>
                <p className="text-base leading-relaxed text-foreground">{z.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-base leading-relaxed text-foreground md:text-lg">
            The physical layout had to support those systems while surviving heat, rain, dust, and continuous ATV
            vibration.
          </p>
        </Container>
      </section>

      {/* 4. Serviceability */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="orange">serviceability</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            Modular <span className="font-serif-i italic text-accent-green">hardware</span>
          </h2>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                The first system had grown organically as the prototype evolved. I reorganized the internal hardware
                around modular backplanes and fixed component locations.
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">Each component received:</p>
              <ul className="mt-4 space-y-3">
                {[
                  "a defined mounting position",
                  "a dedicated connection path",
                  "documented wiring",
                  "accessible replacement points",
                ].map((item) => (
                  <li key={item} className="border-l-2 border-accent-green pl-4 text-base leading-relaxed text-foreground">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                Standardized connectors allowed individual components or backplanes to be replaced without rewiring
                the entire enclosure.
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

      {/* 5. Field testing */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="orange">field testing</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            Built for outdoor <span className="font-serif-i italic text-accent-green">deployment</span>
          </h2>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                Every component had to work under agricultural field conditions. The design accounted for:
              </p>
              <ul className="mt-4 space-y-3">
                {["ingress protection", "temperature", "vibration", "humidity", "mounting stability"].map((item) => (
                  <li key={item} className="border-l-2 border-accent-green pl-4 text-base leading-relaxed text-foreground">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                We tested the sealed enclosure against water exposure and evaluated the hardware directly during
                Oregon field deployments. The resulting field system used IP67 connectors, rugged mounting, and
                vibration-resistant wiring.
              </p>
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

      {/* 6. Scaling */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="rose">scaling</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            From one build to <span className="font-serif-i italic text-accent-green">eight pilots</span>
          </h2>
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                The largest scaling constraint was assembly. Building a sensor kit required extensive manual wiring
                and took nearly two weeks per unit.
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                I created the engineering package another person would need to reproduce the system:
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "wiring schematics",
                  "system block diagrams",
                  "connector maps",
                  "build manuals",
                  "bills of materials",
                ].map((item) => (
                  <li key={item} className="border-l-2 border-accent-green pl-4 text-base leading-relaxed text-foreground">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                I also redesigned repeated wiring around backplanes, standardized connectors, pre-crimped cables, and
                repeatable assembly procedures.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Manufacturing */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="green">manufacturing</SectionLabel>
          <h2 className="mb-10 font-display text-3xl leading-[1.05] md:text-5xl">
            Simplifying <span className="font-serif-i italic text-accent-green">assembly</span>
          </h2>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                Instead of treating every sensor kit like a new prototype, the redesigned system followed a
                consistent build process.
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                Backplanes consolidated wiring. Standard connectors reduced manual termination. Documented cable runs
                and component positions removed decisions from assembly.
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                The result was a system another engineer could build without relying on knowledge that only existed
                in my head.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. Result */}
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
              <SectionLabel dot="green">result</SectionLabel>
              <h2 className="font-display text-3xl leading-[1.05] md:text-5xl mt-4">
                ~2 weeks → <span className="font-serif-i italic text-accent-green">~3 days</span>
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-foreground md:text-lg">
                The redesigned hardware and build process reduced estimated sensor-kit assembly time from roughly two
                weeks to three days.
              </p>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-foreground md:text-lg">
                More importantly, the system went from a one-off prototype to a repeatable platform that could
                support multiple customer pilots.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
