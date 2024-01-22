import React, {useState} from "react";
import styles from "./analytics.module.css";
import deleteIcon from "../Images/delete.png";
import shareIcon from "../Images/share.png";
import editIcon from "../Images/edit.png";
import { useNavigate } from "react-router-dom";
import CreateQuiz from "./CreateQuiz";
import QandA from "./Q&A";

const Analytics = () => {
  const navigate = useNavigate();
  const [showCreateQuiz, setShowCreateQuiz] = useState(false);
  const [showQandA, setShowQandA] = useState(false);

  const goToDashboard = () => {
    navigate('/dashboard')
  }
  const handleCreateQuizClick = () => {
    setShowCreateQuiz(true);
  };

  const handleQandAClick = () => {
    setShowQandA(true);
    setShowCreateQuiz(false);
  };
  return (
    <div className={styles.analyticsBg}>
      <div className={styles.quizAnalysisContainer}>
        <p className={styles.quizAnalysisPara}>Quiz Analysis</p>
      </div>
      <div className={styles.titleContainer}>
        <p className={styles.titleContents}>S.No</p>
        <p className={styles.titleContents}>Quiz Name</p>
        <p className={styles.titleContents}>Created On</p>
        <p className={styles.titleContents}> Impression</p>
      </div>
      <div className={styles.mainContainer}>
        <p className={styles.mainContent}>1</p>
        <p className={styles.mainContent}>Quiz 1</p>
        <p className={styles.mainContent}>19 Jan, 2024</p>
        <p className={styles.mainContent}>300</p>
        <div className= {styles.mainBtnContainer} >
          <button className={styles.editBtn}>
            <img src={editIcon} alt="editbtn" className="" />
          </button>
          <button className={styles.deleteBtn}>
            <img src={deleteIcon} alt="deletebtn" className="" />
          </button>
          <button className={styles.shareBtn}>
            <img src={shareIcon} alt="sharebtn" className="" />
          </button>
        </div>
        <p className= {styles.qwaPara } >Question Wise Analysis</p>
     </div>
      <div className={styles.buttonContainer}>
        <p className={styles.buttonContainerPara}>QUIZZIE</p>
        <button className={styles.containerBtns} onClick={goToDashboard}>Dashboard</button>
        <button className={`${styles.containerBtns} ${styles.dashboardButton}`}>
          Analytics
        </button>
        <button
          className={styles.containerBtns}
          onClick={handleCreateQuizClick}
        >
          Create Quiz
        </button>
        {showCreateQuiz && (
          <CreateQuiz
            onClose={() => setShowCreateQuiz(false)}
            onQandAClick={handleQandAClick}
          />
        )}
       {showQandA && <QandA onClose={() => setShowQandA(false)} />}
        <button className={styles.logoutBtn}>Logout</button>
      </div>
    </div>
  );
};

export default Analytics;
