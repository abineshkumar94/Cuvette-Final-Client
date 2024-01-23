import React from "react";
import styles from "./linkqanda.module.css";
import BigCross from "../Images/BigCross.png";

const LinkQandA = () => {
  return (
    <div className={styles.linkQandATransparent}>
      <div className={styles.linkContainerBox}>
        <button className= {styles.linkCrossBtn } >
          <img src={BigCross} alt="clossBtn" className= {styles.crossBtnImg } />
        </button>
        <p className={styles.linkqandAPara} >Congrats your Quiz is <br/> Published!</p>
      </div>
    </div>
  );
};

export default LinkQandA;
