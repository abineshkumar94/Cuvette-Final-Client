import React, { useState } from "react";
import styles from "./questionanalysis.module.css";
import { useNavigate } from "react-router-dom";
import CreateQuiz from "./CreateQuiz";
import QandA from "./Q&A";

const QuestionAnalysis = () => {
  const navigate = useNavigate();
  const [showCreateQuizQA, setShowCreateQuizQA] = useState(false);
  const [showQandAQA, setShowQandAQA] = useState(false);

  const goToDashboard = () => {
    navigate("/dashboard");
  };

  const handleCreateQuizClick = () => {
    setShowCreateQuizQA(true);
  };

  const handleQandAClick = () => {
    setShowQandAQA(true);
    setShowCreateQuizQA(false);
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
        {showCreateQuizQA && (
          <CreateQuiz
            onClose={() => setShowCreateQuizQA(false)}
            onQandAClick={handleQandAClick}
          />
        )}
        {showQandAQA && <QandA onClose={() => setShowQandAQA(false)} />}
        <button className={styles.logoutBtn}>Logout</button>
      </div>
    </div>
  );
};

export default QuestionAnalysis;
