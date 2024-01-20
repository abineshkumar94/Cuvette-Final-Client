import React, { useState } from "react";
import styles from "./q&a.module.css";
import Cross from "../Images/cross.png";
import Plus from "../Images/plus.jpg";
import DeleteIcon from "../Images/delete.png";

const QandA = () => {
  const [numButtons, setNumButtons] = useState(1);

  const handleClick = (id) => {
    if (id === "add") {
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
        <button
          onClick={() => handleClick("add")}
          className={`${styles.qButton} ${styles.addBtn}`}
        >
          <img src={Plus} alt="PlusBtn" className={styles.plusImg} />
        </button>
        <span className={styles.maxText}>Max 5 Questions</span>
        <form className={styles.qandaformContainer}>
          <input
            type="text"
            className={styles.qandacreateform}
            placeholder="Quiz name"
          ></input>
        </form>
        <form className={styles.radioContainer}>
          <span>Option Type</span>
          <div>
            <input id="optionType1" type="radio" name="optionType" />
            <label htmlFor="optionType1">Text</label>
          </div>
          <div>
            <input id="optionType2" type="radio" name="optionType" />
            <label htmlFor="optionType2">Image Url</label>
          </div>
          <div>
            <input id="optionType3" type="radio" name="optionType" />
            <label htmlFor="optionType3">Text & Image Url</label>
          </div>
        </form>
        <div className={styles.textUrlContainer}>
          <input id="optionType1" type="radio" name="optionType" />
          <input
            id="optionType1"
            type="text"
            placeholder="Text"
            className={styles.textUrlForm}
          />
          <input
            id="optionType1"
            type="text"
            placeholder="Image Url"
            className={styles.textUrlForm1}
          />
          <div>
            <input
              id="optionType2"
              type="radio"
              name="optionType"
              className={styles.radioBtn1}
            />
            <input
              id="optionType2"
              type="text"
              placeholder="Text"
              className={styles.textUrlForm2}
            />
            <input
              id="optionType2"
              type="text"
              placeholder="Image Url"
              className={styles.textUrlForm3}
            />
          </div>
          <div>
            <input
              id="optionType3"
              type="radio"
              name="optionType"
              className={styles.radioBtn2}
            />
            <input
              id="optionType3"
              type="text"
              placeholder="Text"
              className={styles.textUrlForm4}
            />
            <input
              id="optionType3"
              type="text"
              placeholder="Image Url"
              className={styles.textUrlForm5}
            />
            <button className={styles.deleteIcon1}>
              <img src={DeleteIcon} alt="deletebutton" />
            </button>
          </div>
          <div>
            <input
              id="optionType4"
              type="radio"
              name="optionType"
              className={styles.radioBtn3}
            />
            <input
              id="optionType4"
              type="text"
              placeholder="Text"
              className={styles.textUrlForm6}
            />
            <input
              id="optionType4"
              type="text"
              placeholder="Image Url"
              className={styles.textUrlForm7}
            />
            <button className={styles.deleteIcon2}>
              <img src={DeleteIcon} alt="deletebutton" />
            </button>
          </div>
          <button className={styles.addOptionBtn}>Add Option</button>
        </div>
        <div className={styles.caCqContainer}>
          <button className={`${styles.caCqBtns} ${styles.cancelBtn}`}>
            Cancel
          </button>
          <button className={`${styles.caCqBtns} ${styles.continueBtn}`}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default QandA;
