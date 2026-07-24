const projects = [
  {
    title: "NinjaTrader 8 Trade Copier",
    desc: "Copies trades across accounts in NinjaTrader 8. The user selects a source and target account, and the copier can mirror or take the reverse order in the target account — ideal for hedging and prop-account management.",
    tags: ["NinjaTrader 8", "C#", "Add-On"],
    type: "youtube",
    videoId: "9vbc7ycbUq8",
  },
  {
    title: "AWM Breakout Strategy (NT8)",
    desc: "A breakout strategy built on custom AWMBars. On breakout it enters with confirmation from multiple indicators, including AWMScanner and RSI, with full automated order management.",
    tags: ["NinjaTrader 8", "Strategy", "Custom Bars"],
    type: "youtube",
    videoId: "Vbtk_52lJoA",
  },
  {
    title: "MT5 Market Analysis EA",
    desc: "An Expert Advisor that analyzes every point of the market in MetaTrader 5 — scanning price action continuously to find and act on opportunities in real time.",
    tags: ["MetaTrader 5", "MQL5", "Expert Advisor"],
    type: "youtube",
    videoId: "YiuWLKScnuY",
  },
  {
    title: "MT5 Trading Analytics Dashboard",
    desc: "A React.js web application integrated with MetaAPI to fetch live MT5 trading data, analyze performance, and visualize trade history with interactive charts and insights.",
    tags: ["React.js", "MetaAPI", "MT5", "Data Viz"],
    type: "youtube",
    videoId: "0fNRivc74BQ",
  },
];

function Media({ project }) {
  if (project.type === "youtube") {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${project.videoId}`}
        title={project.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    );
  }
  return (
    <a
      className="video-link"
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Watch demo of ${project.title}`}
    >
      <div className="play-btn">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#04120a">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      <span>▶ Watch demo video</span>
    </a>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="kicker">Real Projects, Real Demos</div>
        <h2 className="section-title">Portfolio</h2>
        <p className="section-sub">
          Don&apos;t take my word for it — watch these systems running. Each
          video is a recording of a real project delivered to a client.
        </p>
        <div className="projects-grid">
          {projects.map((p) => (
            <article className="project-card" key={p.title}>
              <div className="project-media">
                <Media project={p} />
              </div>
              <div className="project-body">
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
