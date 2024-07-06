// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";
import "./App.css";
import "./index.css";
import Home from "./Page/Home";
import Policy from "./Page/Policy";

const App = () => {
  return (
    <div className="app">
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
