import React from "react";
import dentalImage from "../images/dentalcare.png";
import pulmonaryImage from "../images/pulmonary.png";
import neuroImage from "../images/human-brain.png";
import pediatricsImage from "../images/medical-file.png";

const services = [
  { name: "Dental Care", image: dentalImage },
  { name: "Pulmonary", image: pulmonaryImage },
  { name: "Neurological", image:neuroImage},
  { name: "Pediatrics", image:pediatricsImage },
];

const Services = () => {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <p className="services-subtitle">
        We provide the most full medical services, so every person could have the opportunity to receive qualitative medical help.
      </p>
      <div className="services-grid">
        {services.map((service, idx) => (
          <div className="service-card" key={idx}>
            <div className="image-wrapper">
              <img src={service.image} alt={service.name} />
            </div>
            <h4>{service.name}</h4>
            <a href="#" className="learn-more">LEARN MORE →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
