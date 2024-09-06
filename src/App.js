import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./blocks/App.css";
import Dashboard from "./components/Dashboard";
import ReviewForm from "./components/ReviewForm";
import ReviewList from "./components/ReviewList";
import ReviewDetail from "./components/ReviewDetail";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="main__content">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reviews" element={<ReviewList />} />
          <Route path="/review/:id" element={<ReviewDetail />} />
          <Route
            path="/submit-review"
            element={
              <ProtectedRoute>
                <ReviewForm />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
