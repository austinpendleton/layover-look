import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    hotelName: "",
    rating: "",
    reviewText: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { hotelName, rating, reviewText } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({ hotelName, rating, reviewText });
      await axios.post("/api/reviews", body, config);

      navigate("/reviews");
    } catch (err) {
      setError("Failed to submit review");
    }
  };

  return (
    <div className="review-form">
      <h1>Submit a New Review</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="hotelName">Hotel Name:</label>
          <input
            type="text"
            name="hotelName"
            value={hotelName}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            name="rating"
            value={rating}
            onChange={onChange}
            required
            min="1"
            max="5"
          />
        </div>
        <div>
          <label htmlFor="reviewText">Review:</label>
          <textarea
            name="reviewText"
            value={reviewText}
            onChange={onChange}
            required
          />
        </div>
        <button type="submit">Submit Review</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default ReviewForm;
