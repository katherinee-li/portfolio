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
      { title: "Proximity Navigation Device · Pulse" },
      { name: "description", content: "A dedicated, single-purpose device for spontaneous human connection. CMU ECE Capstone." },
      { property: "og:title", content: "Proximity Navigation Device · Pulse" },
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
      <section className="pt-6 pb-12 md:pt-10 md:pb-16">
        <Container>
          <SectionLabel dot="orange">ECE Capstone · Spring 2026</SectionLabel>
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-6">
              <h1 className="font-display text-4xl leading-[0.92] tracking-tight md:text-6xl">
                Proximity Navigation Device
              </h1>
              <p className="mt-4 font-serif-i text-xl leading-snug text-accent-orange md:text-2xl">
                Proximity-based social navigation device
              </p>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-foreground">
                Built a handheld device that detects nearby friends and provides real-time directional navigation
                using GNSS, IMU sensing, and device-to-device communication.
              </p>
              <div className="mt-8 rounded-2xl border border-rule p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-accent-orange">What I built</p>
                <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-foreground">
                  <li>ESP32-C5 firmware</li>
                  <li>GNSS and IMU processing</li>
                  <li>Node.js backend services</li>
                  <li>WebSocket communication</li>
                  <li>Device state management</li>
                  <li>Integration and system testing</li>
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  The final system connected four physical devices through a shared backend with real-time location
                  updates.
                </p>
              </div>
              <p className="mt-8 text-xs uppercase tracking-[0.22em] text-foreground">
                CMU ECE · 18-500 · Spring 2026
              </p>
            </div>
            <div className="md:col-span-6">
              <img
                src={pulseDevice}
                alt="Pulse device showing welcome screen"
                className="max-h-[26rem] w-full rounded-2xl object-contain object-top"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Problem + Requirements */}
      <section className="border-t border-rule py-14 md:py-20">
        <Container>
          <SectionLabel dot="rose">problem & requirements</SectionLabel>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <h2 className="font-display text-3xl leading-[1.05] md:text-5xl">
                Smartphones engineer <span className="text-accent-orange">engagement</span>, not connection
              </h2>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                Meeting up with someone nearby still usually starts with a phone: send a message, share a location,
                check a map, and keep looking at the screen. We wanted to see whether a dedicated device could make
                that interaction simpler. Pulse detects nearby friends, lets you request a meetup, and points you
                toward them with a live directional arrow.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <img
              src={pulseRequirements}
              alt="Use-case to design requirements table"
              className="max-h-[26rem] object-contain block w-full"
            />
            <Caption>
              Four use-case requirements mapped to engineering specs with explicit justification, the traceability matrix
              that anchors every downstream design decision.
            </Caption>
          </div>
        </Container>
      </section>

      {/* 3. System Architecture */}
      <section className="border-t border-rule py-14 md:py-20">
        <Container>
          <SectionLabel dot="green">system architecture</SectionLabel>
          <h2 className="mb-6 font-display text-3xl leading-[1.05] md:text-5xl">
            System <span className="text-accent-orange">architecture</span>: device · firmware · server
          </h2>
          <img
            src={pulsePipeline}
            alt="Full system architecture diagram"
            className="max-h-[26rem] object-contain block w-full"
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
      <section className="border-t border-rule py-14 md:py-20">
        <Container>
          <SectionLabel dot="orange">firmware & state machine</SectionLabel>
          <h2 className="mb-6 font-display text-3xl leading-[1.05] md:text-5xl">
            Sensor-to-display <span className="text-accent-orange">pipeline</span>, 200ms budget
          </h2>
          <img src={pulseArchitecture} alt="Data pipeline and device state machine" className="max-h-[26rem] object-contain block w-full" />

          {/* Pipeline budget — centered */}
          <div className="mt-10 max-w-2xl mx-auto text-center">
            <p className="leading-relaxed text-foreground" style={{ fontSize: "22px" }}>
              The end-to-end pipeline runs inside a single 200ms budget, from accelerometer sample to rendered arrow on the
              opposite device.
            </p>
            <Eq>
              τ<sub>total</sub> = τ<sub>imu</sub> + τ<sub>filter</sub> + τ<sub>net</sub> + τ<sub>render</sub> ≤ 200 ms
            </Eq>
            <dl className="grid grid-cols-2 gap-y-5 mt-2">
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

          {/* State transitions — image left, list right */}
          <div className="mt-14 grid gap-8 md:grid-cols-2 items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-foreground mb-4">State transitions · per-state current draw</p>
              <img
                src="/pulse-state-machine.jpg"
                alt="State machine with per-state current draw"
                className="max-h-[26rem] object-contain w-full border border-rule block"
              />
            </div>
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
        </Container>
      </section>

      {/* 5. UI Walkthrough */}
      <section className="border-t border-rule py-14 md:py-20">
        <Container>
          <SectionLabel dot="green">UI walkthrough</SectionLabel>
          <h2 className="mb-6 font-display text-3xl leading-[1.05] md:text-5xl text-center">
            UI flow: idle <span className="text-accent-orange">→ request → navigate → meetup</span>
          </h2>
          <img
            src="/pulse-meetup-flow.jpg"
            alt="5-step meetup flow: Device Wake to SUCCESS"
            className="max-h-[26rem] object-contain mb-10 block w-full rounded-2xl border border-rule"
          />
          <div className="grid grid-cols-3 gap-4 md:grid-cols-5">
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
                  className="aspect-[3/4] w-full object-cover border border-rule"
                />
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Testing & Validation */}
      <section className="border-t border-rule py-14 md:py-20">
        <Container>
          <SectionLabel dot="rose">testing & validation</SectionLabel>
          <h2 className="mb-6 font-display text-3xl leading-[1.05] md:text-5xl text-center">
            Targets vs. <span className="text-accent-orange">measured results</span>
          </h2>
          <img
            src="/pulse-validation.jpg"
            alt="Validation results table: targets vs. measured"
            className="max-h-[26rem] object-contain block w-full"
          />
          <p className="mt-8 max-w-2xl mx-auto text-base leading-relaxed text-foreground md:text-lg text-center">
            More than 40 unit, integration, and end-to-end tests across sensors, firmware, REST/WebSocket services,
            and the database, plus validation across 50+ multi-device scenarios covering latency, positioning
            accuracy, connection recovery, battery life, and complete meetup flows. Every spec passed; navigation
            update latency landed at ~140 ms against a 200 ms target.
          </p>
        </Container>
      </section>

      {/* 7. Risk Mitigations */}
      <section className="border-t border-rule py-14 md:py-20">
        <Container>
          <SectionLabel dot="orange">risk mitigations</SectionLabel>
          <h2 className="mb-6 font-display text-3xl leading-[1.05] md:text-5xl">
            Failure modes and <span className="text-accent-orange">mitigations</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { risk: "GNSS loss", fix: "IMU-based dead reckoning bridges short gaps while GNSS accuracy is degraded." },
              { risk: "Connection loss", fix: "Devices reconnect and recover the active meetup state instead of restarting the interaction." },
              { risk: "Power consumption", fix: "Firmware returns devices to lower-power states when active navigation is unnecessary." },
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
      <section className="border-t border-rule py-14 md:py-20">
        <Container>
          <div className="grid gap-14 md:grid-cols-12 items-center">
            <div className="md:col-span-5">
              <img
                src="/pulse-device-final.jpg"
                alt="Pulse device displaying ARE YOU STILL THERE? idle prompt"
                className="max-h-[26rem] object-contain w-full border border-rule block"
              />
            </div>
            <div className="md:col-span-7">
              <SectionLabel dot="orange">final iteration</SectionLabel>
              <h2 className="font-display text-3xl leading-[1.05] md:text-5xl mt-4">
                A compass that <span className="text-accent-orange">asks to be put down</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg max-w-lg">
                The final prototype supported real-time meetup and navigation across four physical devices, with
                roughly 140 ms synchronization latency and all major engineering requirements passing validation.
                The goal was simple: help two people find each other, then get out of the way.
              </p>
            </div>
          </div>
        </Container>
      </section>

    </main>
  );
}
