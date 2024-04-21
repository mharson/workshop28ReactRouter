import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Blue from "./Blue";
import Red from "./Red";
import Home from "./Home";

function App() {
  return (
    <>
      <div id="container">
        <h1> What is your favorite color?</h1>

        <div id="navbar">
          <Link to="./Home">Home</Link>
          <Link to="./Blue">Blue</Link>
          <Link to="/Red">Red</Link>
        </div>

        <div id="main-section">
          <Routes>
            <Route path="/Blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
