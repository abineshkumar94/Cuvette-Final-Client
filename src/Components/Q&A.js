import React, { useState } from "react";
import styles from "./q&a.module.css";
import Cross from "../Images/cross.png";
import Plus from "../Images/plus.jpg";

const QandA = () => {
 const [numButtons, setNumButtons] = useState(1);

 const handleClick = (id) => {
    if (id === 'add') {
      if (numButtons < 5) {
        setNumButtons((prevNumButtons) => prevNumButtons + 1);
      }
    } else {
      setNumButtons((prevNumButtons) => prevNumButtons - 1);
    }
 };

 return (
    <div className={styles.createTransparentQA}>
      <div className={styles.qandAContainerBox}>
        <div className={styles.qButtonContainer}></div>
        {Array.from({ length: numButtons }, (_, i) => (
 <button key={i} className={styles.qButton}>
    {i + 1}
    {i > 0 && (
      <img
        src={Cross}
        alt={`crossBtn${i + 1}`}
        className={styles.crossImgBtn}
        onClick={() => handleClick(`remove${i + 1}`)}
      />
    )}
 </button>
))}
        <button onClick={() => handleClick('add')} className={`${styles.qButton} ${styles.addBtn}`}>
          <img src={Plus} alt="PlusBtn" className={styles.plusImg} />
        </button>
        <span className={styles.maxText}>Max 5 Questions</span>
      </div>
    </div>
 );
};

export default QandA;

