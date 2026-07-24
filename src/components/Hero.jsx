import profile from "../assets/myprofile.png";

export default function Hero() {
  return (
    <header className="hero">
      <div className="container hero-grid">
        <div>
          <div className="hero-badge">
            <span className="dot" /> Top Rated on Upwork · 100% Job Success
          </div>
          <h1>
            Professional <em>Algorithmic Trading</em> Software Developer
          </h1>
          <p className="hero-sub">
            Custom NinjaTrader, MT4/MT5, TradingView and cTrader development
            for traders, prop firms and fintech companies — from indicators to
            institutional-grade automated strategies. I code it, backtest it,
            optimize it, and deliver it ready to run live.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Schedule Free Consultation
            </a>
            <a href="#portfolio" className="btn btn-ghost">
              View Projects
            </a>
          </div>
          <div className="hero-checks">
            <span>
              <b>✓</b> 32+ Successful Projects
            </span>
            <span>
              <b>✓</b> 100% Job Success
            </span>
            <span>
              <b>✓</b> $40K+ Earned
            </span>
            <span>
              <b>✓</b> 6+ Years Experience
            </span>
          </div>
        </div>
        <div className="hero-photo-wrap">
          <img
            src={profile}
            alt="Muchhar Bharat — Algorithmic Trading Developer"
            className="hero-photo"
          />
          <div className="dash-card">
            <div className="dash-head">
              <span className="dot" /> Available for new projects
            </div>
            <div className="dash-stats">
              <div>
                <b>32+</b>
                <span>Projects</span>
              </div>
              <div>
                <b className="green">100%</b>
                <span>Job Success</span>
              </div>
              <div>
                <b>4.8★</b>
                <span>Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
