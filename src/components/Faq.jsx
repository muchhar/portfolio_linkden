const faqs = [
  {
    q: "Can you convert my Pine Script strategy to NinjaTrader or MT5?",
    a: "Yes — this is one of my most common projects. I port the exact logic from TradingView/Pine Script into NinjaScript (C#) or MQL5, then verify the signals match against the original charts.",
  },
  {
    q: "Can you automate my manual trading strategy?",
    a: "Yes. Send me your rules in any form — a document, a video walkthrough, or a rough description — and I'll turn them into a fully automated system with entry/exit logic and risk management.",
  },
  {
    q: "Do I get the source code?",
    a: "Always. Every project is delivered with full, clean, documented source code. You own it — no locked files, no hidden dependencies.",
  },
  {
    q: "Can you sign an NDA?",
    a: "Of course. Your strategy stays confidential — I never reuse or share client logic, and I'm happy to sign your NDA before you share any details.",
  },
  {
    q: "Can you backtest and optimize an existing strategy?",
    a: "Yes — I run rigorous historical backtests and parameter optimization, and give you honest reports so you know how the strategy behaves before going live.",
  },
  {
    q: "How long does a typical project take?",
    a: "A custom indicator usually takes a few days; a full automated strategy typically 1–3 weeks depending on complexity. You get a clear timeline with the quote before we start.",
  },
  {
    q: "Do you provide support after delivery?",
    a: "Yes — every delivery includes a support period for fixes and adjustments, and I'm available for ongoing maintenance and improvements afterwards.",
  },
];

export default function Faq() {
  return (
    <section id="faq">
      <div className="container">
        <div className="kicker">Common Questions</div>
        <h2 className="section-title">FAQ</h2>
        <p className="section-sub">
          Quick answers to the questions clients ask most before starting a
          project.
        </p>
        <div className="faq-list">
          {faqs.map((f) => (
            <details className="faq-item" key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
