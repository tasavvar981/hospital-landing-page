import React from "react";

const Navbar = () => {
  return (
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
    </header>
  );
};

export default Navbar;
