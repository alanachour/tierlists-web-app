import "./Footer.css";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-content">
        <div className="footer-top">
          <img src={logo} alt="MasterTier Logo" className="footer-logo" />
          <p className="footer-text">
            🎨 MasterTier, l'univers où tout se classe avec style ! 📚✨
          </p>
        </div>

        <div className="footer-middle">
          <div className="footer-icons">
            <span className="footer-icon fire">🔥</span>
            <span className="footer-icon rainbow">🌈</span>
            <span className="footer-icon drama">🎭</span>
            <span className="footer-icon music">🎧</span>
            <span className="footer-icon zap">⚡</span>
          </div>

          <div className="footer-links">
            <a href="/about">À propos</a> |<a href="/contact"> Contact</a> |
            <a href="/faq"> FAQ</a>
          </div>
        </div>

        <p className="footer-credits">
          🚀 MasterTier - Le mot Masterclass a été créé grâce à notre site.
        </p>
      </div>

      <div className="floating-bubbles">
        <div className="bubble bubble-left"></div>
        <div className="bubble bubble1"></div>
        <div className="bubble bubble3"></div>
        <div className="bubble bubble-right"></div>
      </div>
    </footer>
  );
}
