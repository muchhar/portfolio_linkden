export default function Navbar() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#" className="nav-logo">
          bharatmuchhar<span>.com</span>
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#process">Process</a>
          <a href="#testimonials">Reviews</a>
          <a href="#faq">FAQ</a>
          <a href="#contact" className="btn btn-primary nav-cta">
            Schedule Call
          </a>
        </div>
      </div>
    </nav>
  );
}
