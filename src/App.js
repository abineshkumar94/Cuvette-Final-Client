import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Signin from "./Authentication/Signin";
import Login from "./Authentication/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<Signin />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
