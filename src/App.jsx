import { useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";

import "./App.css";
import Register from "./Components/Register/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
