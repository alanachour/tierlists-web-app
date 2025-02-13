import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 
import "./Header.css";
import logo from "../../assets/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo avec image */}
      <Link to="/" className="logo-container">
        <img src={logo} alt="MasterTier Logo" className="logo-img" />
        <span className="logo-text">MasterTier</span>
      </Link>

      {/* Navigation Desktop & Mobile */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
          Accueil
        </Link>
        <Link
          to="/create"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Créer
        </Link>
        <Link
          to="/explore"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Explorer
        </Link>
      </nav>

      {/* Bouton menu hamburger pour mobile */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </header>
  );
}
