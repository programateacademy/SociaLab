import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ods from "./pages/odsDetail/Ods";
import Home from "././pages/home/home/Home";

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ods/:id" element={<Ods />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
