import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Nav.css";
import { useDispatch } from "react-redux";
import { GhostBigButton } from "./BigButton";

import { logout } from "../redux/userSlice";

export default function NavBar() {
  const dispatch = useDispatch();
  const navRef = useRef();
  const navigate = useNavigate();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
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
          <div className="nav__logout-container">
            <GhostBigButton className="nav__logout" onClick={handleLogout}>
              Log out
            </GhostBigButton>
          </div>
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
