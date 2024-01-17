import React from "react";
import styles from "./login.module.css";

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <p className={styles.logInQuizzie}>QUIZZIE</p>
      <div className={styles.signUplogin}>Sign Up</div>
      <div className={styles.logInBackground}>Log In</div>
      <form className={styles.logInForm}>
        <div className={styles.loginformGroup}>
          <label htmlFor="Email">Email</label>
          <input id="email" type="email" required  />
        </div>
        <div className={styles.loginformGroup}>
          <label htmlFor="Password">Password</label>
          <input id="password" type="password" required />
        </div>
        <button type="submit">Log In</button>
      </form>

    </div>
  );
};

export default Login;
