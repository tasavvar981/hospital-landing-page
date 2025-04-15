import React from "react";
import "../styles/global.css";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import ClinicSection from "../components/ClinicSection";
import Specialists from "../components/Specialists";
import Testimonial from "../components/Testimonials";
import Subscribe from "../components/Subscribe"; // Optionally add Subscribe if needed
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <main className="landing-page">
      <div className="container">
        <Navbar />
        <Hero />
        <Services />
        <ClinicSection />
        <Specialists />
        <Testimonial />
         <Subscribe />
         <Footer/>
      </div>
    </main>
  );
};

export default IndexPage;
