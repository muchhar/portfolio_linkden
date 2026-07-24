const UPWORK_URL = "https://www.upwork.com/freelancers/bharatm2?mp_source=share";

const testimonials = [
  {
    quote:
      "Very fantastic person and developer. Highly recommended, very good person.",
    name: "Elohiym A.",
  },
  {
    quote:
      "Impressed with the seamless integration of TradingView and Dhan through AWS — fast, reliable, and highly efficient. It's a solid step toward fully automated trading.",
    name: "Herve D.",
  },
  {
    quote: "Muchar did a fantastic job. He really went above and beyond!",
    name: "Michael P.",
  },
  {
    quote:
      "Friendly dev who communicated well and got the job done! Will continue working with him for the future.",
    name: "Yang Cui",
  },
  {
    quote:
      "Working with Bharat was a pleasure. He was fast and delivered tested and running application. He implemented required changes in no time. Looking for our next project in the future…",
    name: "Andreas F.",
  },
  {
    quote:
      "Bharat is very easy to communicate with during U.S. business hours and has delivered some skillful implementations of various GUI code changes we need.",
    name: "Curtis McKittrick",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="kicker">Client Feedback</div>
        <h2 className="section-title">What Clients Say</h2>
        <p className="section-sub">
          Real reviews from completed Upwork projects — 4.8★ average across 32+
          jobs with a 100% Job Success Score.
        </p>
        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <figure className="testimonial-card" key={t.name}>
              <div className="stars">★★★★★</div>
              <blockquote>“{t.quote}”</blockquote>
              <cite>
                {t.name} · <span className="via">via Upwork</span>
              </cite>
            </figure>
          ))}
        </div>
        <div className="testimonial-cta">
          <a
            href={UPWORK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            Verify all reviews on my Upwork profile ↗
          </a>
        </div>
      </div>
    </section>
  );
}
