import React from "react";
import Homepage from "./pages/Homepage/homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contactus from "./pages/contact-us/contact-us";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
