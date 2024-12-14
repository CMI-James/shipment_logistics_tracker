// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster} from 'sonner'
import "react-toastify/dist/ReactToastify.css";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";
import "./App.css";
import "./index.css";
import Home from "./Page/Home";
import About from "./Page/About";
import Policy from "./Page/Policy";
import Services from "./Page/Services";
import UserPage from "./User";
import Team from "./Page/Team";
import FAQs from "./Page/FAQs";
import Support from "./Page/Support";
import Parcel from "./Page/Parcel";

const App = () => {
  return (
    <div className="app selection:bg-orange-450 selection:text-white">
      <Router>
      <Toaster position="top-right" richColors  />
        <Routes>
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/userpage/:trackingCode" element={<UserPage />} />
          <Route path="/user" element={<UserPage />} />{" "}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/support" element={<Support />} />
          <Route path="/parcel" element={<Parcel />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
