import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import quotes from "../images/quotes.png";

function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const wrapperRef = useRef(null);

  useEffect(() => {
    axios
      .get("https://admin.tomedes.com/api/v1/get-reviews?page=1")
      .then((res) => {
        const topReviews = res.data.data.slice(0, 10);
        setReviews(topReviews);
      })
      .catch((err) => console.error("Failed to fetch reviews", err));
  }, []);

  const scrollRight = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  return (
    <section className="testimonial-section">
      <h2>What Our Customers Say</h2>

   

      <div className="testimonial-wrapper" ref={wrapperRef}>
        {reviews.map((review) => (
          <div className="testimonial-card" key={review.ID}>
            <p className="testimonial-text">"{review.Reviews}"</p>
            <div className="testimonial-footer">
              <img
                className="testimonial-avatar"
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                  review.Name
                )}&background=007bff&color=fff`}
                alt={review.Name}
              />
              <div>
                <p className="testimonial-name">{review.Name}</p>
                <p className="testimonial-company">{review.Company}</p>
              </div>
            </div>
            <img src={quotes} alt="Quote Icon" className="quote-icon" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
