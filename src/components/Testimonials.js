import React, { useEffect, useState } from "react";
import axios from "axios";
import quotes from "../images/quotes.png";

function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get("https://admin.tomedes.com/api/v1/get-reviews?page=1")
      .then((res) => {
        const topReviews = res.data.data.slice(0, 10);
        setReviews(topReviews);
      })
      .catch((err) => console.error("Failed to fetch reviews", err));
  }, []);

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 < reviews.length ? prevIndex + 2 : prevIndex
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 >= 0 ? prevIndex - 2 : 0));
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <section className="testimonial-section">
      <h2>What Our Customers Say</h2>

      {!isMobile && (
        <div className="testimonial-nav">
          <button onClick={prev} disabled={currentIndex === 0}>
            ←
          </button>
          <button onClick={next} disabled={currentIndex + 2 >= reviews.length}>
            →
          </button>
        </div>
      )}

      <div className="testimonial-slider">
        {(isMobile ? reviews : reviews.slice(currentIndex, currentIndex + 2)).map(
          (review) => (
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
          )
        )}
      </div>
    </section>
  );
}

export default Testimonials;
