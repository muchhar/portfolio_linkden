const steps = [
  {
    num: "01",
    title: "Share Your Idea",
    desc: "Send me your trading idea or strategy rules — a document, a video, or even a rough description. NDA-friendly.",
  },
  {
    num: "02",
    title: "I Code It",
    desc: "I build it on your platform — NinjaTrader, MT4/5, cTrader or TradingView — exactly to your rules, with clean source code.",
  },
  {
    num: "03",
    title: "Backtest & Optimize",
    desc: "I backtest against historical data and optimize the parameters, so you see honest numbers before going live.",
  },
  {
    num: "04",
    title: "Deliver & Support",
    desc: "You get a ready-to-use system with source code included, guaranteed shortcuts-free, plus support after delivery.",
  },
];

export default function Process() {
  return (
    <section id="process">
      <div className="container">
        <div className="kicker">How I Work</div>
        <h2 className="section-title">From Idea to Live Trading</h2>
        <p className="section-sub">
          A simple, transparent process — clean, well-documented code with no
          hidden dependencies, delivered on time.
        </p>
        <div className="process-grid">
          {steps.map((s) => (
            <div className="process-step" key={s.num}>
              <div className="step-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
