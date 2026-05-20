import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Container, Nav, SectionLabel } from "@/components/site";
import pulseDevice from "@/assets/pulse-device.png";
import pulseRequirements from "@/assets/pulse-requirements.jpg";
import pulseArchitecture from "@/assets/pulse-pipeline.jpg";
import pulsePipeline from "@/assets/pulse-architecture.jpg";

export const Route = createFileRoute("/work_/pulse")({
  head: () => ({
    meta: [
      { title: "Pulse — The Compass That Connects" },
      { name: "description", content: "A dedicated, single-purpose device for spontaneous human connection. CMU ECE Capstone." },
      { property: "og:title", content: "Pulse — The Compass That Connects" },
      { property: "og:description", content: "A dedicated, single-purpose device for spontaneous human connection." },
    ],
  }),
  component: PulsePage,
});


function Caption({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-base leading-relaxed text-foreground text-center">{children}</p>;
}

function Eq({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-xl border border-rule bg-foreground/[0.02] px-6 py-5 font-mono text-sm leading-relaxed text-foreground md:text-base">
      {children}
    </div>
  );
}

function PulsePage() {
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
      <section className="pt-10 pb-24 md:pt-16 md:pb-32">
        <Container>
          <SectionLabel dot="orange">ECE Capstone · Spring 2026</SectionLabel>
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-6">
              <h1 className="font-display text-6xl leading-[0.92] tracking-tight md:text-8xl">
                Pulse<span className="text-accent-orange">.</span>
              </h1>
              <p className="mt-6 font-serif-i text-2xl leading-snug text-accent-orange md:text-4xl">
                The compass that <span className="italic">connects</span>.
              </p>
              <p className="mt-8 max-w-md text-base leading-relaxed text-foreground md:text-lg">
                A dedicated, single-purpose device for spontaneous human connection.
              </p>
              <p className="mt-8 text-xs uppercase tracking-[0.22em] text-foreground">
                CMU ECE · 18-500 · Spring 2026
              </p>
            </div>
            <div className="md:col-span-6 flex justify-center md:justify-end items-start -mt-4">
              <img
                src={pulseDevice}
                alt="Pulse device showing welcome screen"
                className="w-full max-w-[380px] object-contain object-top"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Problem + Requirements */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="rose">problem & requirements</SectionLabel>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <h2 className="font-display text-4xl leading-[1.05] md:text-6xl">
                Smartphones engineer <span className="font-serif-i italic text-accent-orange">engagement</span>, not connection.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                The friction of opening an app, typing, coordinating, it kills spontaneity. Pulse removes that surface area
                entirely, then has to earn its place against the phone with measurable engineering targets.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <img
              src={pulseRequirements}
              alt="Use-case to design requirements table"
              className="w-full max-w-[720px] mx-auto rounded-xl block"
            />
            <Caption>
              Four use-case requirements mapped to engineering specs with explicit justification, the traceability matrix
              that anchors every downstream design decision.
            </Caption>
          </div>
        </Container>
      </section>

      {/* 3. System Architecture */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="green">system architecture</SectionLabel>
          <h2 className="mb-10 font-display text-4xl leading-[1.05] md:text-6xl">
            System <span className="font-serif-i italic text-accent-orange">architecture</span>: device · firmware · server.
          </h2>
          <img
            src={pulsePipeline}
            alt="Full system architecture diagram"
            className="w-full max-w-[820px] mx-auto rounded-xl block"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { tag: "Physical", body: "Custom PCB, 3D-printed shell, GNSS + IMU + radio + 1000mAh LiPo." },
              { tag: "Firmware", body: "Step detection, PDR, Kalman fusion, UI state machine on ESP32-C5." },
              { tag: "Backend", body: "Node.js server, WebSocket routing, SQLite store, proximity engine." },
            ].map((l) => (
              <div key={l.tag} className="rounded-2xl border border-rule p-6">
                <span className="text-xs uppercase tracking-[0.22em] text-accent-orange">{l.tag}</span>
                <p className="mt-3 text-sm leading-relaxed text-foreground">{l.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Firmware & State Machine */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="orange">firmware & state machine</SectionLabel>
          <h2 className="mb-10 font-display text-4xl leading-[1.05] md:text-6xl">
            Sensor-to-display <span className="font-serif-i italic text-accent-orange">pipeline</span>, 200ms budget.
          </h2>
          <img src={pulseArchitecture} alt="Data pipeline and device state machine" className="w-full max-w-[820px] mx-auto rounded-xl block" />
          <div className="mt-12 grid gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="font-serif-i italic text-foreground leading-relaxed" style={{ fontSize: "22px" }}>
                The end-to-end pipeline runs inside a single 200ms budget, from accelerometer sample to rendered arrow on the
                opposite device.
              </p>
              <Eq>
                τ<sub>total</sub> = τ<sub>imu</sub> + τ<sub>filter</sub> + τ<sub>net</sub> + τ<sub>render</sub> ≤ 200 ms
              </Eq>
              <dl className="grid grid-cols-2 gap-y-5">
                {[
                  { k: "Sensor read", v: "≤ 5 ms" },
                  { k: "Filter + PDR", v: "≤ 15 ms" },
                  { k: "WiFi round-trip", v: "≤ 150 ms" },
                  { k: "Render", v: "≤ 25 ms" },
                ].map((m) => (
                  <div key={m.k}>
                    <dt className="text-xs uppercase tracking-[0.22em] text-foreground">{m.k}</dt>
                    <dd className="mt-1 font-display text-2xl">{m.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-2xl border border-rule p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-accent-orange">UI state machine</p>
                <ul className="mt-4 space-y-2 font-mono text-sm text-foreground">
                  <li>OFF → power on</li>
                  <li>CONNECTING → handshake w/ server</li>
                  <li>ACTIVE → idle home screen</li>
                  <li>NAVIGATING → live arrow loop</li>
                  <li>IDLE → low-power hold</li>
                </ul>
              </div>
            </div>
          </div>

          {/* State transitions diagram */}
          <div className="mt-10">
            <p className="text-xs uppercase tracking-[0.22em] text-foreground text-center mb-4">State transitions · per-state current draw</p>
            <img
              src="/pulse-state-machine.jpg"
              alt="State machine with per-state current draw"
              className="w-full max-w-[640px] mx-auto rounded-xl border border-rule block"
            />
          </div>
        </Container>
      </section>

      {/* 5. UI Walkthrough */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="green">UI walkthrough</SectionLabel>
          <h2 className="mb-10 font-display text-4xl leading-[1.05] md:text-6xl">
            UI flow: idle <span className="font-serif-i italic text-accent-orange">→ request → navigate → meetup</span>.
          </h2>
          <img
            src="/pulse-meetup-flow.jpg"
            alt="5-step meetup flow: Device Wake to SUCCESS"
            className="w-full max-w-[820px] mx-auto rounded-xl border border-rule block mb-10"
          />
          <div className="grid grid-cols-3 gap-4 md:grid-cols-5 max-w-[820px] mx-auto">
            {[
              { src: "/pulse-screen-welcome.jpg", label: "Welcome" },
              { src: "/pulse-screen-send-request.jpg", label: "Send request" },
              { src: "/pulse-screen-waiting.jpg", label: "Waiting for response" },
              { src: "/pulse-screen-navigating.jpg", label: "Navigating" },
              { src: "/pulse-screen-success.jpg", label: "Success" },
            ].map((s) => (
              <div key={s.label}>
                <img
                  src={s.src}
                  alt={s.label}
                  className="aspect-[3/4] w-full rounded-lg object-cover border border-rule"
                />
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Testing & Validation */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="rose">testing & validation</SectionLabel>
          <h2 className="mb-10 font-display text-4xl leading-[1.05] md:text-6xl">
            Targets vs. <span className="font-serif-i italic text-accent-orange">measured results</span>.
          </h2>
          <img
            src="/pulse-validation.jpg"
            alt="Validation results table: targets vs. measured"
            className="w-full max-w-[820px] mx-auto rounded-xl block"
          />
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground md:text-lg">
            Nine metrics across latency, accuracy, endurance, and usability. Every spec passed; navigation update latency
            landed at ~140ms against a 200ms target.
          </p>
        </Container>
      </section>

      {/* 7. Risk Mitigations */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="orange">risk mitigations</SectionLabel>
          <h2 className="mb-10 font-display text-4xl leading-[1.05] md:text-6xl">
            Failure modes and <span className="font-serif-i italic text-accent-orange">mitigations</span>.
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { risk: "GPS occlusion", fix: "PDR fusion bridges signal gaps; Kalman weighting drops GNSS as HDOP rises." },
              { risk: "Connection loss", fix: "Reconnect flow with state replay; in-flight meetups survive transient drops." },
              { risk: "Power budget", fix: "IDLE state aggressively reclaimed by the state machine to extend session life." },
            ].map((r) => (
              <div key={r.risk} className="rounded-2xl border border-rule p-6">
                <p className="font-display text-xl">{r.risk}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground">{r.fix}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. Closing */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <div className="grid gap-14 md:grid-cols-12 items-center">
            <div className="md:col-span-5">
              <img
                src="/pulse-device-final.jpg"
                alt="Pulse device displaying ARE YOU STILL THERE? idle prompt"
                className="w-full rounded-2xl border border-rule block"
              />
            </div>
            <div className="md:col-span-7">
              <SectionLabel dot="orange">final iteration</SectionLabel>
              <h2 className="font-display text-4xl leading-[1.05] md:text-6xl mt-4">
                A compass that <span className="font-serif-i italic text-accent-orange">asks to be put down</span>.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg max-w-lg">
                Pulse is a device with a single job, and a screen that quietly bows out when that job is done.
                It earns its place in your pocket by refusing to compete for your attention, and then disappears
                until the next time a friend is nearby.
              </p>
            </div>
          </div>
        </Container>
      </section>

    </main>
  );
}
