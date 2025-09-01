// src/sections/About.tsx
import { useEffect, useRef, useState } from "react";
import Section from "../components/ui/Section";
import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";

// --- Stats ---
const stats = [
  { value: 25, suffix: "+", label: "Projects Delivered" },
  { value: 97, suffix: "%", label: "Client Satisfaction" },
  { value: 99, suffix: "%", label: "On-Time Project Delivery" },
  { value: 95, suffix: "%", label: "Client Retention" },
];



// --- Testimonials ---

// --- Team ---
const coreTeam = [
  {
    name: "Bhargav Hathwar",
    role: "Founder & CEO",
    tagline: "Driving strategy, vision, and growth at HustleHub.",
    photo: "/team/bhargav.jpg",
    linkedin: "http://www.linkedin.com/in/g-bhargav-hathwar",
  },
  {
    name: "Pruthvi MP",
    role: "Co-Founder & Head of Security",
    tagline: "Securing digital ecosystems with trusted expertise.",
    photo: "/team/pruthvi.jpg",
    linkedin: "http://www.linkedin.com/in/pruthvi-mp",
  },
  {
    name: "Rahul",
    role: "Full-Stack Developer",
    tagline: "Building scalable, modern web solutions.",
    photo: "/team/rahul.jpg",
    linkedin: "http://www.linkedin.com/in/rahul-js",
  },
];

// --- CountUp Hook for Stats ---
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

// --- Animation Variants for Team ---
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

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
      <div ref={ref} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="rounded-2xl backdrop-blur-md bg-white/30 border border-white/20 p-6 text-center shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            <CountUp to={s.value} suffix={s.suffix} start={inView} />
            <div className="mt-1 text-sm text-hhDark/70">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="mt-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-hhPurple/20 bg-hhPurple/5 px-3 py-1 text-xs font-medium text-hhPurple">
            Our Team
          </span>
          <h3 className="mt-3 text-2xl md:text-3xl font-bold text-hhDark">
            Meet the Core Team
          </h3>
          <p className="mt-2 text-hhDark/70">
            Small, agile, and dedicated — your growth partners at HustleHub.
          </p>
        </div>

        <motion.div
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {coreTeam.map((p, i) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              custom={i}
              className="group relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/30 border border-white/20 shadow-lg ring-1 ring-black/5"
            >
              <div className="h-64 w-full overflow-hidden">
                <img
                  src={p.photo}
                  alt={p.name}
                  className="h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0 group-hover:scale-[1.05]"
                />
              </div>
              <div className="p-4 text-center">
                <div className="font-semibold text-hhDark">{p.name}</div>
                <div className="text-sm text-hhDark/60">{p.role}</div>
                <p className="mt-2 text-sm text-hhDark/70">{p.tagline}</p>
                {p.linkedin && (
                  <a
                    href={p.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1 rounded-lg border border-hhPurple/50 px-3 py-1 text-xs font-semibold text-hhPurple transition hover:bg-hhPurple hover:text-white"
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
