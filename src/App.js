import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Analytics from "./Components/Analytics";
import Signin from "./Authentication/Signin";
import Login from "./Authentication/Login";
import CreateQuiz from "./Components/CreateQuiz";
import QandA from "./Components/Q&A";

function App() {
  return (
    <div>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="signin" element={<Signin />} />
        <Route path="login" element={<Login />} />
        <Route path="analytics" element={ <Analytics/> }/>
        <Route path="createquiz" element= { <CreateQuiz/> } />
        <Route path="qanda" element= { <QandA/> } />
      </Routes>
    </div>
  );
}

export default App;
