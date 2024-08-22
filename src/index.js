import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/profile";


ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Profile />} />
    </Routes>
  </Router>
);
