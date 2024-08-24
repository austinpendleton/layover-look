import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ReviewForm from "./components/ReviewForm";
import ReviewList from "./components/ReviewList";
import ReviewDetail from "./components/ReviewDetail";
import Login from "./components/Login";
// import Register from './components/auth/Register';
import Home from "./components/Home"; // Import Home component
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the root path */}
        <Route path="/" element={<Home />} />

        {/* Protected routes require authentication */}
        <Route
          path="/dashboard"
          element={<ProtectedRoute component={Dashboard} />}
        />
        <Route
          path="/submit-review"
          element={<ProtectedRoute component={ReviewForm} />}
        />
        <Route
          path="/reviews"
          element={<ProtectedRoute component={ReviewList} />}
        />
        <Route
          path="/reviews/:id"
          element={<ProtectedRoute component={ReviewDetail} />}
        />

        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
