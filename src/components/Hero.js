import React from "react";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h3>Welcome to MediCare+ Clinic</h3>
        <h1>Best Specialists</h1>
        <p>
          We are on the leading edge of cancer care. Providing the full continuum of cancer
          treatments and supportive care services in a single convenient location.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Make an Appointment</button>
          <button className="btn-secondary">Departments</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="/doctor.png" alt="Doctor" />
      </div>
    </section>
  );
};

export default Hero;
