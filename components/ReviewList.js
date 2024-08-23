import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get("/api/reviews");
        setReviews(res.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch reviews");
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="review-list">
      <h1>All Reviews</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review._id}>
              <Link to={`/reviews/${review._id}`}>
                {review.hotelName} - {review.rating} stars
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews found.</p>
      )}
    </div>
  );
};

export default ReviewList;
