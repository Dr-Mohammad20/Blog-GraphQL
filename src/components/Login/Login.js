import React, { useState, useEffect } from 'react';
import { validate } from '../shared/validate';
import Styles from '../../styles/Login.module.css';
import { Link } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from '../shared/toast';

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data, 'Login'));
  }, [data, touched]);

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
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
        email: true,
        password: true,
      });
      notify('Invalid data!', 'error');
    }
  };

  return (
    <div className={Styles.container}>
      <form onSubmit={submitHandler} className={Styles.formContainer}>
        <h1 className={Styles.header}>Login</h1>
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
        <div className={Styles.formButtons}>
          <Link to="/Signup">SignUp</Link>
          <button type="submit">Login</button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Login;
