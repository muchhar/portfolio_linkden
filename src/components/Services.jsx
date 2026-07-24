const services = [
  {
    icon: "🤖",
    title: "Automated Trading Systems",
    desc: "Fully automated bots and EAs for NinjaTrader, MT4/MT5 and cTrader — coded exactly to your rules with safety controls built in.",
    features: ["Entry/Exit Logic", "Risk Management", "Optimization", "Walk-Forward"],
  },
  {
    icon: "📊",
    title: "Custom Indicators & Scanners",
    desc: "Chart-based indicators, market scanners and analysis tools that surface exactly the setups you trade.",
    features: ["Custom Bars", "Scanners", "Volume Profile", "Alerts"],
  },
  {
    icon: "🔁",
    title: "Strategy Conversion",
    desc: "Pine Script to NinjaTrader/MT5, MT4 to MT5, or any cross-platform port — same logic, new platform.",
    features: ["Pine → NinjaScript", "Pine → MQL5", "MT4 → MT5"],
  },
  {
    icon: "🛡️",
    title: "Trade Copiers & Risk Tools",
    desc: "Copy trades across accounts with reverse mode and lot scaling, plus SL/TP systems, trailing stops and prop-firm risk rules.",
    features: ["Multi-Account", "Reverse Trades", "Lot Scaling", "Prop-Firm Rules"],
  },
  {
    icon: "🧪",
    title: "Backtesting & Optimization",
    desc: "Rigorous historical testing and parameter optimization so you see honest numbers before a strategy touches real money.",
    features: ["Historical Testing", "Parameter Tuning", "Reports"],
  },
  {
    icon: "📈",
    title: "Dashboards & API Integration",
    desc: "Web dashboards and integrations with broker and data APIs for live analytics, trade history and performance insight.",
    features: ["React", "MetaAPI", "Webhooks", "REST APIs"],
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="kicker">What I Build</div>
        <h2 className="section-title">Services</h2>
        <p className="section-sub">
          From a strategy written on a napkin to a fully automated system
          running live — I handle the whole pipeline.
        </p>
        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="feature-badges">
                {s.features.map((f) => (
                  <span key={f}>{f}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
