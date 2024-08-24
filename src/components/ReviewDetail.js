import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ReviewDetail = () => {
  const { id } = useParams();
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const res = await axios.get(`/api/reviews/${id}`);
        setReview(res.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load review");
        setLoading(false);
      }
    };

    fetchReview();
  }, [id]);

  return (
    <div className="review-detail">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : review ? (
        <div>
          <h1>{review.hotelName}</h1>
          <p>
            <strong>Rating:</strong> {review.rating} stars
          </p>
          <p>
            <strong>Review:</strong> {review.reviewText}
          </p>
          <p>
            <strong>Posted by:</strong> {review.user}
          </p>
          <p>
            <strong>Posted on:</strong>{" "}
            {new Date(review.date).toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p>Review not found.</p>
      )}
    </div>
  );
};

export default ReviewDetail;
