import { useState } from "react";
import { Link, Routes, Route, useNavigate } from 'react-router-dom'

import Login from "./Components/Login/Login"
import Home from './Components/Home/Home'

import "./App.css"

function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
