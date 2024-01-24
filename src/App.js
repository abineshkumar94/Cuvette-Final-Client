import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Analytics from "./Components/Analytics";
import Signin from "./Authentication/Signin";
import Login from "./Authentication/Login";
import CreateQuiz from "./Components/CreateQuiz";
import QandA from "./Components/Q&A";
import QuestionAnalysis from "./Components/QuestionAnalysis";
import PollAnalysis from "./Components/PollAnalysis";
import LinkQandA from "./Components/LinkQandA";

function App() {
  return (
    <div>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/" element={<Signin />} />
        <Route path="login" element={<Login />} />
        <Route path="analytics" element={ <Analytics/> }/>
        <Route path="createquiz" element= { <CreateQuiz/> } />
        <Route path="qanda" element= { <QandA/> } />
        <Route path="questionanalysis" element= {<QuestionAnalysis/>} />
        <Route path="pollanlysis" element= {<PollAnalysis/>} />
        <Route path="linkqanda" element= {<LinkQandA/>} />
      </Routes>
    </div>
  );
}

export default App;
