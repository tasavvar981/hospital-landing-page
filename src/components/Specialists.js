import React from "react";

const specialists = [
  {
    name: "Dr. Awaatif Al",
    specialty: "Dental Care",
  },
  {
    name: "Dr. Filipa Gaspar",
    specialty: "Cardiology",
  },
  {
    name: "Dr. Sukhmeet Gorae",
    specialty: "Neurological",
  },
  {
    name: "Dr. Siri Jakobsson",
    specialty: "Pediatrics",
  },
];

const Specialists = () => {
  return (
    <section className="specialists-section">
      <div className="specialists-header">
        <h2>We Have The Best Specialist</h2>
        <p>
          We have a wide experience in experience design and strategy, <br />
          with locally-rooted knowledge.
        </p>
      </div>

      <div className="specialists-grid">
        {specialists.map((doc, index) => (
          <div key={index} className="clinic-card">
            <div className="clinic-card-image" />
            <div className="clinic-card-text">
              <h4>{doc.name}</h4>
              <p>{doc.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specialists;
