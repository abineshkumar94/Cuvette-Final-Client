import React, {useState} from 'react';
import styles from "./createquiz.module.css";
import { useNavigate } from "react-router-dom";
import QandA from './Q&A';

const CreateQuiz = (props) => {
    const navigate = useNavigate();
    const [showQandA, setShowQandA,] = useState(false);
   
    const handleQandAClick = () => {
        setShowQandA(true); 
        props.onClose();
        props.onQandAClick(); 
      }
  return (
    <div className= {styles.createTransparent } >
            <div className= {styles.createContainerBox} >
        <form  className= {styles.createformContainer} >
            <input type='text' className= {styles.createform} placeholder='Quiz name' ></input>
        </form>
        <div className= {styles.qTypeContainer} >
            <p>Quiz Type</p>
            <button className= {styles.qTypeBtn } onClick={handleQandAClick}>Q & A</button>
            {showQandA && <QandA/> }
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