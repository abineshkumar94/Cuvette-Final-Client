import React, { useState, useEffect } from "react";
import styles from "./q&a.module.css";
import Cross from "../Images/cross.png";
import Plus from "../Images/plus.jpg";
import DeleteIcon from "../Images/delete.png";

const QandA = () => {
  const [numButtons, setNumButtons] = useState(1);

  const [inputVisibility, setInputVisibility] = useState({
    delType3: false,
    delType4: false,
    delType5: false,
    delType6: false,
  });

  const [nextInput, setNextInput] = useState("");
  const [optionType, setOptionType] = useState("text");
  const handleClick = (id) => {
    if (id === "add") {
      if (numButtons < 5) {
        setNumButtons((prevNumButtons) => prevNumButtons + 1);
      }
    } else {
      setNumButtons((prevNumButtons) => prevNumButtons - 1);
    }
  };

  const handleAddOptionClick = () => {
    if (!inputVisibility.delType3) {
      setNextInput("delType3");
    } else if (!inputVisibility.delType4) {
      setNextInput("delType4");
    } else if (!inputVisibility.delType5) {
      setNextInput("delType5");
    } else if (!inputVisibility.delType6) {
      setNextInput("delType6");
    }
  };

  const handleOptionTypeChange = (event) => {
    setOptionType(event.target.value);
  };

  useEffect(() => {
    if (nextInput !== "") {
      setInputVisibility((prevVisibility) => ({
        ...prevVisibility,
        [nextInput]: true,
      }));
    }
  }, [nextInput]);

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
            <input
              id="optionType1"
              type="radio"
              name="optionType"
              value="text"
              onChange={handleOptionTypeChange}
              checked={optionType === "text"}
            />
            <label htmlFor="optionType1">Text</label>
          </div>
          <div>
            <input
              id="optionType2"
              type="radio"
              name="optionType"
              value="imageUrl"
              onChange={handleOptionTypeChange}
              checked={optionType === "imageUrl"}
            />
            <label htmlFor="optionType2">Image Url</label>
          </div>
          <div>
            <input id="optionType3" type="radio" name="optionType" />
            <label htmlFor="optionType3">Text & Image Url</label>
          </div>
          <div className={styles.optionInputContainer}>
            <div>
              <input
                id="optionType4"
                type="radio"
                name="optionType"
                className={
                  optionType === "imageUrl"
                    ? styles.radioButtonImg1
                    : styles.radioButton
                }
              />
            </div>
            {optionType === "text" && (
              <div>
                <input
                  type="text"
                  placeholder="Text"
                  className={styles.optionInput}
                />
              </div>
            )}
            <div>
              <input
                id="optionType5"
                type="radio"
                name="optionType"
                className={
                  optionType === "imageUrl"
                    ? styles.radioButtonImg2
                    : styles.radioButton1
                }
              />
            </div>

            {optionType === "text" && (
              <div>
                <input
                  type="text"
                  placeholder="Text"
                  className={styles.optionInput}
                />
              </div>
            )}
          </div>

          {inputVisibility.delType3 && (
            <div className={styles.optionInputContainer1}>
              <div>
                <input
                  id="optionType6"
                  type="radio"
                  name="optionType"
                  className={
                    optionType === "imageUrl"
                      ? styles.radioButtonImg3
                      : styles.radioButton2
                  }
                />
              </div>
              {optionType === "text" && (
                <div>
                  <input
                    type="text"
                    placeholder="Text"
                    className={styles.optionInput}
                  />
                </div>
              )}
            </div>
          )}
          {inputVisibility.delType4 && (
            <div className={styles.optionInputContainer2}>
              <div>
                <input
                  id="optionType7"
                  type="radio"
                  name="optionType"
                  className={
                    optionType === "imageUrl"
                      ? styles.radioButtonImg3
                      : styles.radioButton2
                  }
                />
              </div>
              {optionType === "text" && (
                <div>
                  <input
                    type="text"
                    placeholder="Text"
                    className={styles.optionInput}
                  />
                </div>
              )}
            </div>
          )}

          {optionType === "imageUrl" && (
            <div
              className={
                optionType === "imageUrl"
                  ? styles.optionInputContainer3Selected
                  : styles.optionInputContainer3
              }
            >
              <input
                id="imageUrlInput1"
                type="text"
                placeholder="Image Url"
                className={styles.optionInput}
              />
            </div>
          )}

          {optionType === "imageUrl" && (
            <div
              className={
                optionType === "imageUrl"
                  ? styles.optionInputContainer4Selected
                  : styles.optionInputContainer4
              }
            >
              <input
                id="imageUrlInput2"
                type="text"
                placeholder="Image Url"
                className={styles.optionInput}
              />
            </div>
          )}

          {optionType === "imageUrl" && inputVisibility.delType3 && (
            <div
              className={
                optionType === "imageUrl"
                  ? styles.Container5Selected
                  : styles.Container5
              }
            >
              <input
                id="imageUrlInput3"
                type="text"
                placeholder="Image Url"
                className={styles.optionInput}
              />
            </div>
          )}

          {optionType === "imageUrl" && inputVisibility.delType4 && (
            <div
              className={
                optionType === "imageUrl"
                  ? styles.Container6Selected
                  : styles.Container6
              }
            >
              <input
                id="imageUrlInput4"
                type="text"
                placeholder="Image Url"
                className={styles.optionInput}
              />
            </div>
          )}
        </form>
        {!(inputVisibility.delType3 && inputVisibility.delType4) && (
          <button
            onClick={handleAddOptionClick}
            className={styles.addOptionbtn}
          >
            Add Option
          </button>
        )}
        <div className={styles.caCqContainer}>
          <button className={`${styles.caCqBtns} ${styles.cancelBtn}`}>
            Cancel
          </button>
          <button className={`${styles.caCqBtns} ${styles.continueBtn}`}>
            Create Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default QandA;
