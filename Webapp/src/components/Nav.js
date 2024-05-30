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
        <ul className="nav__list">
          <li>
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav__link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/profile" className="nav__link">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/breeds" className="nav__link">
              Breeds
            </Link>
          </li>
          <li>
            <Link to="/FindRoute" className="nav__link">
              Find a Route
            </Link>
          </li>
        </ul>
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
