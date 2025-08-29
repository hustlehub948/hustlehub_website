import { useEffect, useState } from "react";

export default function useActiveSection(
  ids: string[],
  options?: { offset?: number; threshold?: number }
) {
  const [active, setActive] = useState<string>(ids[0] ?? "");
  const offset = options?.offset ?? 84;           // header height
  const threshold = options?.threshold ?? 0.5;    // % of section visible

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most-visible section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        root: null,
        // start observing a bit earlier to compensate sticky header
        rootMargin: `-${offset}px 0px -40% 0px`,
        threshold: Array.from({ length: 11 }, (_, i) => i / 10), // 0..1
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, [ids, offset, threshold]);

  return active;
}
