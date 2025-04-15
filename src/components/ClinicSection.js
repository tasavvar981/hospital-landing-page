import React from "react";
import docImg from "../images/doctor-woman.png";
import emergencyImg from "../images/doctor-man.png";
import ambulanceImg from "../images/ambulance.png";

const ClinicSection = () => {
  return (
    <section className="clinic-section">
      <div className="clinic-left">
        <h2>Clinic With Innovative</h2>
        <p>
          We provide the most full medical services, so every person could have the opportunity to receive qualitative medical help.
        </p>
        <button>Learn More</button>
      </div>
      <div className="clinic-right">
  <div className="clinic-card first-card">
    <div className="image-wrapper">
      <img src={docImg} alt="Qualified Doctors" />
    </div>
    <p>Qualified Doctors</p>
  </div>

  <div className="clinic-card second-card">
    <div className="image-wrapper">
      <img src={emergencyImg} alt="Emergency Care" />
    </div>
    <p>Emergency Care</p>
  </div>

  <div className="clinic-card third-card">
    <div className="image-wrapper">
      <img src={ambulanceImg} alt="24 Hours Service" />
    </div>
    <p>24 Hours Service</p>
  </div>
</div>

    </section>
  );
};

export default ClinicSection;
