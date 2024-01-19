import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Signin from "./Authentication/Signin";
import Login from "./Authentication/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="signin" element={<Signin />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
