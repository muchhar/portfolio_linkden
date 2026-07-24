const contacts = [
  {
    icon: "✉️",
    label: "Email",
    value: "muchharbharat10@gmail.com",
    href: "mailto:muchharbharat10@gmail.com",
  },
  {
    icon: "📞",
    label: "Phone / WhatsApp",
    value: "+91 72039 70277",
    href: "tel:+917203970277",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/muchhar-bharat",
    href: "https://www.linkedin.com/in/muchhar-bharat-277191190",
  },
];

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="kicker">Let&apos;s Talk</div>
        <h2 className="section-title">Have a trading idea? Let&apos;s automate it.</h2>
        <p className="section-sub">
          Send me your strategy idea or rules — I&apos;ll tell you exactly how I
          can automate it, with a clear quote and timeline. Free consultation,
          no obligation.
        </p>
        <div className="contact-grid">
          <div className="contact-list">
            {contacts.map((c) => (
              <a
                className="contact-item"
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                <div className="ci-icon">{c.icon}</div>
                <div>
                  <div className="ci-label">{c.label}</div>
                  <div className="ci-value">{c.value}</div>
                </div>
              </a>
            ))}
          </div>
          <form
            className="contact-form"
            action="https://formsubmit.co/muchharbharat10@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_subject" value="New inquiry from bharatmuchhar.com" />
            <input type="hidden" name="_captcha" value="false" />
            <label>
              Your name
              <input type="text" name="name" required placeholder="John Trader" />
            </label>
            <label>
              Your email
              <input type="email" name="email" required placeholder="you@example.com" />
            </label>
            <div className="form-row">
              <label>
                Platform
                <select name="platform" required defaultValue="">
                  <option value="" disabled>
                    Select platform…
                  </option>
                  <option>NinjaTrader</option>
                  <option>MT4</option>
                  <option>MT5</option>
                  <option>TradingView</option>
                  <option>cTrader</option>
                  <option>Other / Not sure</option>
                </select>
              </label>
              <label>
                Budget
                <select name="budget" defaultValue="">
                  <option value="" disabled>
                    Select budget…
                  </option>
                  <option>Under $500</option>
                  <option>$500 – $1,000</option>
                  <option>$1,000 – $5,000</option>
                  <option>$5,000+</option>
                  <option>Not sure yet</option>
                </select>
              </label>
            </div>
            <label>
              Project details
              <textarea
                name="message"
                rows="5"
                required
                placeholder="Platform (NinjaTrader / MT5 / cTrader / TradingView) and a short description of your strategy or idea…"
              />
            </label>
            <button type="submit" className="btn btn-primary">
              Book Free Consultation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
