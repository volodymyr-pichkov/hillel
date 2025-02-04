import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CurrencyConverter from "./pages/CurrencyConverter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/converter" element={<CurrencyConverter />} />
      </Routes>
    </Router>
  );
}

export default App;
