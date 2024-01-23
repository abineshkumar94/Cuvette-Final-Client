import React, { useState } from "react";
import styles from "./pollanalysis.module.css";
import { useNavigate } from "react-router-dom";
import QandA from "./Q&A";
import CreateQuiz from "./CreateQuiz";

const PollAnalysis = () => {
  const navigate = useNavigate();
  const [showCreateQuizPoll, setShowCreateQuizPoll] = useState(false);
  const [showQandAPoll, setShowQandAPoll] = useState(false);

  const goToDashboard = () => {
    navigate("/dashboard");
  };

  const handleCreateQuizClick = () => {
    setShowCreateQuizPoll(true);
  };

  const handleQandAClick = () => {
    setShowQandAPoll(true);
    setShowCreateQuizPoll(false);
  };

  return (
    <div className={styles.qaBackground}>
      <div className={styles.quizAnalysisContainer}>
        <p className={styles.quizAnalysisPara}>Quiz Analysis</p>
      </div>
      <div className={styles.buttonContainer}>
        <p className={styles.buttonContainerPara}>QUIZZIE</p>
        <button className={styles.containerBtns} onClick={goToDashboard}>
          Dashboard
        </button>
        <button className={`${styles.containerBtns} ${styles.dashboardButton}`}>
          Analytics
        </button>
        <button
          className={styles.containerBtns}
          onClick={handleCreateQuizClick}
        >
          Create Quiz
        </button>
        {showCreateQuizPoll && (
          <CreateQuiz
            onClose={() => setShowCreateQuizPoll(false)}
            onQandAClick={handleQandAClick}
          />
        )}
        {showQandAPoll && <QandA onClose={() => setShowQandAPoll(false)} />}
        <button className={styles.logoutBtn}>Logout</button>
      </div>
    </div>
  );
};

export default PollAnalysis;
