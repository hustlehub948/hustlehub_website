// src/sections/About.tsx
import { useEffect, useRef, useState } from "react";
import Section from "../components/ui/Section";

type Stat = { value: number; suffix?: string; label: string };

const stats: Stat[] = [
  { value: 120, suffix: "+", label: "Projects Delivered" },
  { value: 240, suffix: "%", label: "Avg. ROI Growth" },
  { value: 12,  suffix: "+", label: "Countries Served" },
  { value: 95,  suffix: "%", label: "Client Retention" },
];

const logos = ["Acme", "Aurora", "Nimbus", "Vertex"]; // replace with real logos later

const testimonials = [
  {
    quote: "HustleHub helped us scale our digital presence and boosted ROI by 3x within months.",
    name: "Jane Doe",
    role: "Marketing Director, Acme Corp",
  },
  {
    quote: "The team is incredibly reliable and innovative — our go-to digital partner.",
    name: "John Smith",
    role: "Founder, Aurora Labs",
  },
];

function useInViewOnce<T extends HTMLElement>(threshold = 0.35) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current || inView) return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [inView, threshold]);
  return { ref, inView } as const;
}

function CountUp({ to, suffix = "", start }: { to: number; suffix?: string; start: boolean }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const duration = 1200;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      setVal(Math.round(p * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, to]);
  return (
    <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-hhDark">
      {val}
      <span className="ml-0.5 align-top text-lg md:text-xl font-bold text-hhPurple">{suffix}</span>
    </div>
  );
}

export default function About() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>(0.35);

  return (
    <Section id="about">
      {/* Intro */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold">
          Driven by Innovation, Focused on Results
        </h2>
        <p className="mt-3 text-hhDark/70">
          We provide reliable, scalable digital solutions. With a global network of experts,
          we help startups and enterprises thrive online.
        </p>
      </div>

      {/* Stats */}
      <div
        ref={ref}
        className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((s, i) => (
          <div
            key={i}
            className="rounded-2xl border border-black/5 bg-white p-6 text-center shadow-[0_10px_30px_-12px_rgba(20,20,43,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(20,20,43,0.22)]"
          >
            <CountUp to={s.value} suffix={s.suffix} start={inView} />
            <div className="mt-1 text-sm text-hhDark/70">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Logos */}
      <div className="mt-12 text-center">
        <p className="text-sm text-hhDark/60 mb-4">Trusted by teams at</p>
        <div className="flex flex-wrap justify-center gap-6">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="rounded-xl border border-black/5 bg-white px-4 py-2 text-sm font-semibold text-hhDark shadow-[0_6px_18px_-8px_rgba(20,20,43,0.16)]"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="rounded-2xl border border-black/5 bg-white p-6 shadow-[0_10px_30px_-12px_rgba(20,20,43,0.18)]"
          >
            <p className="text-hhDark/80 italic mb-3">“{t.quote}”</p>
            <div className="text-sm font-semibold text-hhDark">{t.name}</div>
            <div className="text-xs text-hhDark/60">{t.role}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <a
          href="#services"
          className="inline-flex items-center justify-center rounded-xl border border-hhPurple px-6 py-3 font-semibold text-hhPurple transition hover:bg-hhPurple hover:text-white"
        >
          Explore Our Services
        </a>
      </div>
    </Section>
  );
}
