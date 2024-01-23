import React, { useState, useEffect } from "react";
import styles from "./createquiz.module.css";
import { useNavigate } from "react-router-dom";
import QandA from "./Q&A";

const CreateQuiz = (props) => {
  const navigate = useNavigate();
  const [showQandA, setShowQandA] = useState(false);
  const [continueClicked, setContinueClicked] = useState(false);

  const handleQandAClick = () => {
    setShowQandA(true);
    props.onClose();
    props.onQandAClick();
  };

  const handleCancelClick = () => {
    props.onClose();
  };

  const handleContinueClick = () => {
    if (showQandA && !continueClicked) {
      setContinueClicked(true);
    }
 };


 useEffect(() => {
    if (continueClicked) {
      navigate('/path-to-QandA');
    }
 }, [continueClicked]);

  return (
    <div className={styles.createTransparent}>
      <div className={styles.createContainerBox}>
        <form className={styles.createformContainer}>
          <input
            type="text"
            className={styles.createform}
            placeholder="Quiz name"
          ></input>
        </form>
        <div className={styles.qTypeContainer}>
          <p>Quiz Type</p>
          <button className={styles.qTypeBtn} onClick={handleQandAClick}>
            Q & A
          </button>
          {showQandA && <QandA />}
          <button className={styles.qTypeBtn}>Poll Type</button>
        </div>
        <div className={styles.ccanContainer}>
          <button
            className={`${styles.ccBtns} ${styles.cancelBtn}`}
            onClick={handleCancelClick}
          >
            Cancel
          </button>
          <button
            className={`${styles.ccBtns} ${styles.continueBtn}`}
            onClick={handleContinueClick}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateQuiz;
