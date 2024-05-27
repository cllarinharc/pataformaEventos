import { useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Events from "./Components/Events/Events";
import Reports from "./Components/Reports/Reports";

import Register from "./Components/Register/Register";

import AuthLayout from "./Layouts/AuthLayout";
import DefaultLayout from "./Layouts/DefaultLayout";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/reports" element={<Reports />} />
        </Route>
       
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Route>
      </Routes>
    </div>
  );
}

export default App;
