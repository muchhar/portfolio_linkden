export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} Muchhar Bharat · Algorithmic Trading Developer</div>
        <div>
          <a
            href="https://www.linkedin.com/in/muchhar-bharat-277191190"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          {" · "}
          <a
            href="https://www.upwork.com/freelancers/bharatm2?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
          >
            Upwork
          </a>
          {" · "}
          <a href="mailto:muchharbharat10@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
