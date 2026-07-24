import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 40, prefix: "$", suffix: "K+", label: "Earned on Upwork", cls: "accent" },
  { target: 100, suffix: "%", label: "Job Success Score", cls: "accent" },
  { target: 32, suffix: "+", label: "Projects Completed", cls: "" },
  { target: 1500, suffix: "+", label: "Hours Worked", cls: "" },
  { target: 4.8, suffix: " ★", decimals: 1, label: "Average Client Rating", cls: "gold" },
];

function useCountUp(target, start, decimals = 0, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function Stat({ s, start }) {
  const display = useCountUp(s.target, start, s.decimals || 0);
  return (
    <div>
      <div className="stat-value">
        <span className={s.cls}>
          {s.prefix || ""}
          {display}
          {s.suffix || ""}
        </span>
      </div>
      <div className="stat-label">{s.label}</div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="stats" ref={ref}>
      <div className="container stats-grid">
        {stats.map((s) => (
          <Stat key={s.label} s={s} start={start} />
        ))}
      </div>
    </div>
  );
}
