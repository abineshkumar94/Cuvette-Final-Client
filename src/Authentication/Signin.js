import { useState } from "react";
import React from "react";
import styles from "./signin.module.css";

const Signin = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [touched, setTouched] = useState({
      name: false,
      email: false,
      password: false,
      confirmPassword: false,
    });

    const [errors, setErrors] = useState({});
   
    const handleFocus = (field) => (event) => {
      setTouched({ ...touched, [field]: true });
    };
   
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
   
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
   
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
   
    const handleConfirmPasswordChange = (event) => {
      setConfirmPassword(event.target.value);
    };
   
    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = {};
        if (!name) errors.name = 'Name is required';
        if (!email) errors.email = 'Email is required';
        if (!password) errors.password = 'Password is required';
        if (!confirmPassword) errors.confirmPassword = 'Confirm Password is required';
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
          console.log({ name, email, password, confirmPassword });
        }
       };
   
    const getPlaceholder = (field) => {
      if (touched[field]) {
        switch (field) {
          case 'name':
            return 'Enter your name';
          case 'email':
            return 'Enter your email';
          case 'password':
            return 'Enter your password';
          case 'confirmPassword':
            return "Confirm your password";
          default:
            return '';
        }
      }
      return '';
    };

    const getErrorClass = (field) => {
        return errors[field] ? styles.error : '';
       };

  return (
    <div className={styles.signInContainer}>
      <p className={styles.SignInQuizzie}>QUIZZIE</p>
      <div className={styles.signUpBackground}>Sign Up</div>
      <div className={styles.logInText}>Log In</div>
      <form className={styles.signInForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder={getPlaceholder('name')}
            required
            onChange={handleNameChange}
            onFocus={handleFocus('name')}
            className={getErrorClass('name')}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder={getPlaceholder('email')}
            required
            onChange={handleEmailChange}
            onFocus={handleFocus('email')}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder={getPlaceholder('password')}
            required
            onChange={handlePasswordChange}
            onFocus={handleFocus('password')}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder={getPlaceholder('confirmPassword')}
            required
            onChange={handleConfirmPasswordChange}
            onFocus={handleFocus('confirmPassword')}
          />
        </div>
        <button type="submit">Sign - Up</button>
      </form>
    </div>
  );
};

export default Signin;
