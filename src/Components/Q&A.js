import React, { useState, useEffect } from "react";
import styles from "./q&a.module.css";
import Cross from "../Images/cross.png";
import Plus from "../Images/plus.jpg";
import DeleteIcon from "../Images/delete.png";

const QandA = (props) => {
  const [numButtons, setNumButtons] = useState(1);
  const [createdQuizzes, setCreatedQuizzes] = useState([]);

  const [questionDetails, setQuestionDetails] = useState({
    quizName: "",
    questions: [
      { text: "", imageUrl: "" },
      { text: "", imageUrl: "" },
      { text: "", imageUrl: "" },
      { text: "", imageUrl: "" },
    ],
  });

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

  const handleDeleteOptionClick = (inputKey) => {
    setInputVisibility((prevVisibility) => ({
      ...prevVisibility,
      [inputKey]: false,
    }));
  };

  useEffect(() => {
    if (nextInput !== "") {
      setInputVisibility((prevVisibility) => ({
        ...prevVisibility,
        [nextInput]: true,
      }));
    }
  }, [nextInput]);

  const handleCancelClick = () => {
    props.onClose();
  };

  const handleQuestionDetailChange = (index, field, value) => {
    setQuestionDetails((prevDetails) => {
      if (index === -1) {
        // Update quizName
        return { ...prevDetails, quizName: value };
      } else {
        // Update questions array
        const updatedQuestions = prevDetails.questions.map((question, idx) => {
          if (idx === index) {
            return { ...question, [field]: value };
          }
          return question;
        });
        return { ...prevDetails, questions: updatedQuestions };
      }
    });
    
  };

  const handleCreateQuiz = () => {
    setCreatedQuizzes((prevQuizzes) => [...prevQuizzes, questionDetails]);
    console.log(questionDetails); };
  

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
            value={questionDetails.quizName}
            onChange={(e) =>
              handleQuestionDetailChange(-1, "quizName", e.target.value)
            }
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
            <input
              id="optionType3"
              type="radio"
              value="textAndImageUrl"
              name="optionType"
              onChange={handleOptionTypeChange}
              checked={optionType === "textAndImageUrl"}
            />
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
            {(optionType === "text" || optionType === "textAndImageUrl") && (
              <div>
                <input
                  type="text"
                  placeholder="Text"
                  className={styles.optionInput}
                  value={questionDetails.questions[0].text}
                  onChange={(e) =>
                    handleQuestionDetailChange(0, "text", e.target.value)
                  }
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

            {(optionType === "text" || optionType === "textAndImageUrl") && (
              <div>
                <input
                  type="text"
                  placeholder="Text"
                  className={styles.optionInput}
                  value={questionDetails.questions[1].text}
                  onChange={(e) =>
                    handleQuestionDetailChange(1, "text", e.target.value)
                  }
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
              {(optionType === "text" || optionType === "textAndImageUrl") && (
                <div>
                  <input
                    type="text"
                    placeholder="Text"
                    className={styles.optionInput}
                    value={questionDetails.questions[2].text}
                    onChange={(e) =>
                      handleQuestionDetailChange(2, "text", e.target.value)
                    }
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
              {(optionType === "text" || optionType === "textAndImageUrl") && (
                <div>
                  <input
                    type="text"
                    placeholder="Text"
                    className={styles.optionInput}
                    value={questionDetails.questions[3].text}
                    onChange={(e) =>
                      handleQuestionDetailChange(3, "text", e.target.value)
                    }
                  />
                </div>
              )}
            </div>
          )}

          {(optionType === "imageUrl" || optionType === "textAndImageUrl") && (
            <div
              className={
                optionType === "imageUrl"
                  ? styles.optionInputContainer3Selected
                  : styles.optionInputContainer3
              }
            >
              {(optionType === "imageUrl" ||
                optionType === "textAndImageUrl") && (
                <div>
                  <input
                    id="imageUrlInput1"
                    type="text"
                    placeholder="Image Url"
                    className={styles.optionInput}
                    value={questionDetails.questions[0].imageUrl}
                    onChange={(e) =>
                      handleQuestionDetailChange(0, "imageUrl", e.target.value)
                    }
                  />
                </div>
              )}
            </div>
          )}

          {(optionType === "imageUrl" || optionType === "textAndImageUrl") && (
            <div
              className={
                optionType === "imageUrl"
                  ? styles.optionInputContainer4Selected
                  : styles.optionInputContainer4
              }
            >
              {(optionType === "imageUrl" ||
                optionType === "textAndImageUrl") && (
                <div>
                  <input
                    id="imageUrlInput2"
                    type="text"
                    placeholder="Image Url"
                    className={styles.optionInput}
                    value={questionDetails.questions[1].imageUrl}
                    onChange={(e) =>
                      handleQuestionDetailChange(1, "imageUrl", e.target.value)
                    }
                  />
                </div>
              )}
            </div>
          )}

          {inputVisibility.delType3 && (
            <div
              className={
                optionType === "imageUrl"
                  ? styles.Container5Selected
                  : styles.Container5
              }
            >
              {(optionType === "imageUrl" ||
                optionType === "textAndImageUrl") && (
                <div>
                  <input
                    id="imageUrlInput3"
                    type="text"
                    placeholder="Image Url"
                    className={styles.optionInput}
                    value={questionDetails.questions[2].imageUrl}
                    onChange={(e) =>
                      handleQuestionDetailChange(2, "imageUrl", e.target.value)
                    }
                  />
                </div>
              )}
            </div>
          )}

          {inputVisibility.delType4 && (
            <div
              className={
                optionType === "imageUrl"
                  ? styles.Container6Selected
                  : styles.Container6
              }
            >
              {(optionType === "imageUrl" ||
                optionType === "textAndImageUrl") && (
                <div>
                  <input
                    id="imageUrlInput4"
                    type="text"
                    placeholder="Image Url"
                    className={styles.optionInput}
                    value={questionDetails.questions[3].imageUrl}
                    onChange={(e) =>
                      handleQuestionDetailChange(3, "imageUrl", e.target.value)
                    }
                  />
                </div>
              )}
            </div>
          )}
        </form>
        {inputVisibility.delType3 && (
          <div className={styles.delBtnContainer}>
            <button
              onClick={() => handleDeleteOptionClick("delType3")}
              className={styles.delbttns}
            >
              <img src={DeleteIcon} alt="deleteicon" />
            </button>
          </div>
        )}
        {inputVisibility.delType4 && (
          <div className={styles.delBtnContainer1}>
            <button
              onClick={() => handleDeleteOptionClick("delType4")}
              className={styles.delbttns}
            >
              <img src={DeleteIcon} alt="deleteicon" />
            </button>
          </div>
        )}
        {!(inputVisibility.delType3 && inputVisibility.delType4) && (
          <button
            onClick={handleAddOptionClick}
            className={styles.addOptionbtn}
          >
            Add Option
          </button>
        )}
        <div className={styles.caCqContainer}>
          <button
            className={`${styles.caCqBtns} ${styles.cancelBtn}`}
            onClick={handleCancelClick}
          >
            Cancel
          </button>
          <button
            className={`${styles.caCqBtns} ${styles.continueBtn}`}
            onClick={handleCreateQuiz}
          >
            Create Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default QandA;
