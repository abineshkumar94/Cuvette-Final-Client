import React, { useState } from "react";
import styles from "./login.module.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");

 const handleEmailChange = (event) => {
    setEmail(event.target.value);
 };

 const handlePasswordChange = (event) => {
    setPassword(event.target.value);
 };

 const handleSubmit = (event) => {
  event.preventDefault();
  axios.post('http://localhost:4000/api/v1/login', { email, password })
    .then(response => {
      console.log('Success:', response.data);
      navigate('/dashboard');
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

 return (
    <div className={styles.loginContainer}>
      <p className={styles.logInQuizzie}>QUIZZIE</p>
      <div className={styles.signUplogin}>Sign Up</div>
      <div className={styles.logInBackground}>Log In</div>
      <form className={styles.logInForm} onSubmit={handleSubmit}>
        <div className={styles.loginformGroup}>
          <label htmlFor="Email">Email</label>
          <input id="email" type="email" required value={email} onChange={handleEmailChange} />
        </div>
        <div className={styles.loginformGroup}>
          <label htmlFor="Password">Password</label>
          <input id="password" type="password" required value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
 );
};

export default Login;
