import React, { useState, useEffect } from 'react';
import { validate } from '../shared/validate';
import Styles from '../../styles/SignUp.module.css';
import { Link } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from '../shared/toast';

const SignUp = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    isAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data, 'Signup'));
  }, [data, touched]);

  const changeHandler = (event) => {
    if (event.target.name === 'isAccepted') {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const focousHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify('You Singed Up Successefully', 'success');
    } else {
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
      notify('Invalid data!', 'error');
    }
  };

  return (
    <div className={Styles.container}>
      <form onSubmit={submitHandler} className={Styles.formContainer}>
        <h1 className={Styles.header}>Sign Up</h1>
        <div className={Styles.formField}>
          <label>Name</label>
          <input
            className={
              errors.name && touched.name
                ? Styles.uncompleted
                : Styles.formInput
            }
            type="text"
            name="name"
            value={data.name}
            onChange={changeHandler}
            onFocus={focousHandler}
          />
          {errors.name && touched.name && <span>{errors.name}</span>}
        </div>
        <div className={Styles.formField}>
          <label>Email</label>
          <input
            className={
              errors.email && touched.email
                ? Styles.uncompleted
                : Styles.formInput
            }
            type="text"
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focousHandler}
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>
        <div className={Styles.formField}>
          <label>Password</label>
          <input
            className={
              errors.password && touched.password
                ? Styles.uncompleted
                : Styles.formInput
            }
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focousHandler}
          />
          {errors.password && touched.password && (
            <span>{errors.password}</span>
          )}
        </div>
        <div className={Styles.formField}>
          <label>Confirm Password</label>
          <input
            className={
              errors.confirmPassword && touched.confirmPassword
                ? Styles.uncompleted
                : Styles.formInput
            }
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
            onFocus={focousHandler}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
        </div>
        <div className={Styles.formField}>
          <div className={Styles.checkBoxContainer}>
            <label>I accept terms of policy</label>
            <input
              type="checkbox"
              name="isAccepted"
              value={data.isAccepted}
              onChange={changeHandler}
              onFocus={focousHandler}
            />
          </div>
          {errors.isAccepted && touched.isAccepted && (
            <span>{errors.isAccepted}</span>
          )}
        </div>
        <div className={Styles.formButtons}>
          <Link to="/Login">Login</Link>
          <button type="submit">Sign Up</button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default SignUp;
