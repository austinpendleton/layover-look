import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
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
        setError("Error fetching reviews");
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="actions">
        <Link to="/submit-review" className="btn btn-primary">
          Submit New Review
        </Link>
        <Link to="/reviews" className="btn btn-secondary">
          View All Reviews
        </Link>
      </div>

      <h2>Your Reviews</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
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
        <p>You have not submitted any reviews yet.</p>
      )}
    </div>
  );
};

export default Dashboard;
