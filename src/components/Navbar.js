import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close mobile menu when screen width > 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="navbar">
        <div className="logo">
          <span className="blue">Medi</span>
          <span className="orange">Care+</span>
        </div>

        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">News</a>
        </nav>

        <button className="contact-button">Contact</button>

        {/* Hamburger for small screens */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">News</a>
          <button className="contact-button">Contact</button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
