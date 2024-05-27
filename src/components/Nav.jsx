import { useRef } from "react";
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
        <a href="/" className="nav__link">
          {" "}
          Home{" "}
        </a>
        <a href="/about" className="nav__link">
          {" "}
          About Us{" "}
        </a>
        <a href="/profile" className="nav__link">
          {" "}
          Profile
        </a>
        <a href="/breeds" className="nav__link">
          {" "}
          Breeds
        </a>
        <a href="/route" className="nav__link">
          {" "}
          Find a Route{" "}
        </a>
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
