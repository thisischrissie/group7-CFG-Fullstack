import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Nav.css";

export default function NavBar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="header">
      <nav className="nav" ref={navRef}>
        <Link to="/" className="nav__link">
          Home
        </Link>
        <Link to="/about" className="nav__link">
          About Us
        </Link>
        <Link to="/profile" className="nav__link">
          Profile
        </Link>
        <Link to="/breeds" className="nav__link">
          Breeds
        </Link>
        <Link to="/route" className="nav__link">
          Find a Route
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}
