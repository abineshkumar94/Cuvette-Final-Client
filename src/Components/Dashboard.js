import React from "react";
import styles from "./dashboard.module.css";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  
  const goToDashboard = () => {
    navigate('/dashboard')
  }
  const goToAnalytics = () => {
    navigate('/analytics');
  }
  return (
    <div className={styles.background}>
      <div className={styles.detailContainer}>
        <div className={styles.detailContainerBox}>
          <p className={styles.value1}>10</p>
          <p className={styles.detailPara1}>Quiz Created</p>
        </div>
        <div className={styles.detailContainerBox}>
          <p className={styles.value2}>20</p>
          <p className={styles.detailPara2}>Questions Created</p>
        </div>
        <div className={styles.detailContainerBox}>
          <p className={styles.value3}>100</p>
          <p className={styles.detailPara3}>Total Impressions</p>
        </div>
       </div>
       <div className= {styles.trendingQuizContainer} >
        <p className={styles.trendingPara } >Trending Quizs</p>
       </div>
      <div className={styles.buttonContainer}>
        <p className={styles.buttonContainerPara}>QUIZZIE</p>
        <button className={`${styles.containerBtns} ${styles.dashboardButton}`} onClick={goToDashboard}>
          Dashboard
        </button>
        <button className={styles.containerBtns} onClick={goToAnalytics}>Analytics</button>
        <button className={styles.containerBtns}>Create Quiz</button>
        <button className={styles.logoutBtn}>Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;


