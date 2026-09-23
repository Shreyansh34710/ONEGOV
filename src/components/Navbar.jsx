import { Bell, Menu, UserRound, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="gov-strip">
        <div className="gov-strip-inner">
          <span>भारत सरकार</span>
          <span className="gov-divider">|</span>
          <span>Government of India</span>
        </div>

        <div className="gov-strip-right">
          Digital India • SIH 2026 Concept
        </div>
      </div>

      <nav className="main-navbar">

        <Link to="/" className="gov-brand">

          <div className="gov-mark">
            GOI
          </div>

          <div>
            <strong>ONEGOV</strong>
            <span>JOURNEY</span>
          </div>

        </Link>

        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>

          <NavLink to="/home" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/services" onClick={closeMenu}>
            Services
          </NavLink>

          <NavLink to="/track" onClick={closeMenu}>
            Track Application
          </NavLink>

        </div>

        <div className="nav-actions">

          <button className="nav-icon-button" type="button" aria-label="Notifications">
            <Bell size={18} />
          </button>

          <button className="nav-profile" type="button">
            <UserRound size={17} />
            Citizen
          </button>

          <Link to="/admin" className="official-link">
            Official
          </Link>

        </div>

        <button
          className="mobile-menu"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

      </nav>
    </>
  );
}
