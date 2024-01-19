import React from 'react';
import styles from "./createquiz.module.css";


function CreateQuiz() {
  return (
    <div className= {styles.createTransparent } >
            <div className= {styles.createContainerBox} >
        <form  className= {styles.createformContainer} >
            <input type='text' className= {styles.createform} placeholder='Quiz name' ></input>
        </form>
        <div className= {styles.qTypeContainer} >
            <p>Quiz Type</p>
            <button className= {styles.qTypeBtn } >Q & A</button>
            <button className= {styles.qTypeBtn }>Poll Type</button>
        </div>
        <div className= {styles.ccanContainer } >
            <button className={`${styles.ccBtns} ${styles.cancelBtn}`}>Cancel</button>
            <button className={`${styles.ccBtns} ${styles.continueBtn}`}>Continue</button>
        </div>
    </div>
    </div>
  )
}

export default CreateQuiz;