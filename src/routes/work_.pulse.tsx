import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Container, Footer, Nav, SectionLabel } from "@/components/site";
import pulseDevice from "@/assets/pulse-device.png";
import pulseRequirements from "@/assets/pulse-requirements.jpg";
import pulseArchitecture from "@/assets/pulse-architecture.jpg";
import pulsePipeline from "@/assets/pulse-pipeline.jpg";

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

function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl border border-dashed border-rule bg-foreground/[0.02] px-6 text-center text-xs uppercase tracking-[0.22em] text-foreground ${className}`}
    >
      {label}
    </div>
  );
}

function Caption({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-sm leading-relaxed text-foreground">{children}</p>;
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
              <p className="mt-6 font-serif-i text-2xl leading-snug text-accent-cream md:text-4xl">
                The compass that <span className="italic text-accent-orange">connects</span>.
              </p>
              <p className="mt-8 max-w-md text-base leading-relaxed text-foreground md:text-lg">
                A dedicated, single-purpose device for spontaneous human connection.
              </p>
              <dl className="mt-10 grid max-w-md grid-cols-1 gap-4 text-sm">
                {[
                  { who: "The compass that connects.", what: "Software & Interface" },
                ].map((t) => (
                  <div key={t.who} className="flex items-baseline justify-between gap-6 border-b border-rule pb-3">
                    <dt className="font-display text-base">{t.who}</dt>
                    <dd className="text-xs uppercase tracking-[0.18em] text-foreground">{t.what}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-8 text-xs uppercase tracking-[0.22em] text-foreground">
                CMU ECE · 18-500 · Spring 2026
              </p>
            </div>
            <div className="md:col-span-6 flex justify-center md:justify-end">
              <img src={pulseDevice} alt="Pulse device showing welcome screen" className="w-full max-w-[280px] object-contain" />
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
                The friction of opening an app, typing, coordinating — it kills spontaneity. Pulse removes that surface area
                entirely, then has to earn its place against the phone with measurable engineering targets.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <img src={pulseRequirements} alt="Use-case to design requirements table" className="w-full" />
            <Caption>
              Four use-case requirements mapped to engineering specs with explicit justification — the traceability matrix
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
            Three layers, <span className="font-serif-i italic text-accent-orange">Three layers.&nbsp;</span>.
          </h2>
          <img src={pulseArchitecture} alt="Full system architecture diagram" className="w-full" />
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
            From raw IMU to a <span className="font-serif-i italic text-accent-orange">moving arrow</span>.
          </h2>
          <img src={pulsePipeline} alt="Data pipeline and device state machine" className="w-full" />
          <div className="mt-12 grid gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                The end-to-end pipeline runs inside a single 200ms budget — from accelerometer sample to rendered arrow on the
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
        </Container>
      </section>

      {/* 5. Backend & Software */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="rose">backend & software</SectionLabel>
          <h2 className="mb-10 font-display text-4xl leading-[1.05] md:text-6xl">
            Node, sockets, <span className="font-serif-i italic text-accent-orange">a proximity engine</span>.
          </h2>
          <Placeholder label="Slide 7 · server diagram + 5-step meetup flow + DB schema" className="aspect-[16/9] w-full" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { tag: "Routing", body: "WebSocket sessions per device; 5-step meetup handshake (request → accept → pair → navigate → resolve)." },
              { tag: "Proximity", body: "Server-side Kalman fusion over GNSS + PDR. Discovery ≤ 75m, meetup trigger ≤ 3m." },
              { tag: "Storage", body: "SQLite for users, friend graph, session logs. No continuous location persisted." },
            ].map((l) => (
              <div key={l.tag} className="rounded-2xl border border-rule p-6">
                <span className="text-xs uppercase tracking-[0.22em] text-accent-orange">{l.tag}</span>
                <p className="mt-3 text-sm leading-relaxed text-foreground">{l.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Hardware + Power */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="orange">hardware & power</SectionLabel>
          <h2 className="mb-10 font-display text-4xl leading-[1.05] md:text-6xl">
            A real <span className="font-serif-i italic text-accent-orange">power budget</span>.
          </h2>
          <Placeholder label="Slide 9 · parts list + power consumption table" className="aspect-[16/9] w-full" />
          <div className="mt-10 grid gap-12 md:grid-cols-12">
            <div className="md:col-span-6">
              <p className="text-xs uppercase tracking-[0.22em] text-foreground">Per-state current draw</p>
              <dl className="mt-4 divide-y divide-rule font-mono text-sm">
                {[
                  ["OFF", "0.5 mA"],
                  ["IDLE", "32 mA"],
                  ["ACTIVE", "88 mA"],
                  ["CONNECTING", "120 mA"],
                  ["NAVIGATING", "165.8 mA"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between py-3">
                    <dt className="text-foreground">{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="md:col-span-6">
              <p className="text-xs uppercase tracking-[0.22em] text-accent-orange">Honest constraint</p>
              <p className="mt-3 text-base leading-relaxed text-foreground md:text-lg">
                Weighted average draw is <span className="text-foreground">143.5 mA</span>, marginally over the
                <span className="text-foreground"> 141.7 mA</span> target derived from the 6h battery requirement on a
                1000mAh cell. We chose to ship the spec honestly rather than tune the duty cycle to hide the gap.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground">
                Mitigation lives in the firmware: aggressive IDLE entry whenever the state machine permits.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. UI Walkthrough (compact) */}
      <section className="border-t border-rule py-20 md:py-24">
        <Container>
          <SectionLabel dot="green">UI walkthrough</SectionLabel>
          <h2 className="mb-8 font-display text-3xl leading-[1.05] md:text-4xl">Six screens, idle to meetup.</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
            {[
              { img: "IMG_2888", label: "Welcome" },
              { img: "IMG_2885", label: "Request" },
              { img: "IMG_2882", label: "Waiting" },
              { img: "IMG_2886", label: "Invite" },
              { img: "IMG_2884", label: "Navigate" },
              { img: "IMG_2887", label: "Success" },
            ].map((s) => (
              <div key={s.img}>
                <Placeholder label={s.img} className="aspect-[3/4] w-full" />
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. Testing & Validation */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="rose">testing & validation</SectionLabel>
          <h2 className="mb-10 font-display text-4xl leading-[1.05] md:text-6xl">
            How we know it <span className="font-serif-i italic text-accent-orange">works</span>.
          </h2>
          <Placeholder label="Slide 10 · V&V table" className="aspect-[16/9] w-full" />
          <div className="mt-10 grid gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                PDR drift is the headline metric: how far the dead-reckoned position diverges from truth across a GPS gap.
              </p>
              <Eq>
                Drift % = (PDR error ÷ distance walked) × 100
              </Eq>
            </div>
            <div className="md:col-span-5">
              <p className="text-xs uppercase tracking-[0.22em] text-accent-orange">Pass criteria</p>
              <dl className="mt-4 grid grid-cols-1 gap-5">
                <div>
                  <dt className="text-xs uppercase tracking-[0.22em] text-foreground">PDR drift / 10s gap</dt>
                  <dd className="mt-1 font-display text-3xl">≤ 3%</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.22em] text-foreground">Fused position error</dt>
                  <dd className="mt-1 font-display text-3xl">≤ 3 m</dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* 9. Risk Mitigations */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="orange">risk mitigations</SectionLabel>
          <h2 className="mb-10 font-display text-4xl leading-[1.05] md:text-6xl">
            Three honest <span className="font-serif-i italic text-accent-orange">failure modes</span>.
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
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-foreground">
            The product remains outdoor-only by design. Indoor positioning is a known unsolved problem at this hardware
            class; pretending otherwise would be the bigger risk.
          </p>
        </Container>
      </section>

      {/* 10. Team + Reflection */}
      <section className="border-t border-rule py-24 md:py-32">
        <Container>
          <SectionLabel dot="green">team & reflection</SectionLabel>
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-7">
              <h2 className="font-display text-4xl leading-[1.05] md:text-6xl">
                Three people, <span className="font-serif-i italic text-accent-orange">one device</span>.
              </h2>
              <dl className="mt-10 space-y-8">
                {[
                  { who: "The compass that connects.", role: "Software & Interface", body: "Built the Node backend, WebSocket routing, and the on-device state machine and screens." },
                ].map((p) => (
                  <div key={p.who} className="border-b border-rule pb-6">
                    <div className="flex items-baseline justify-between gap-6">
                      <dt className="font-display text-2xl">{p.who}</dt>
                      <span className="text-xs uppercase tracking-[0.22em] text-accent-orange">{p.role}</span>
                    </div>
                    <dd className="mt-3 text-base leading-relaxed text-foreground">{p.body}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="md:col-span-5">
              <Placeholder label="IMG_2887 · success screen" className="aspect-[3/4] w-full" />
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
