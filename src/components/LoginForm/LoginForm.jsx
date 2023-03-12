import { useState } from 'react';
import PropTypes from 'prop-types';

import TextField from '../TextField/TextField';
import fields from './fields';

import css from './loginForm.module.css';

const initialState = {
  email: '',
  password: '',
};

const LoginForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ email, password });
    setState({ ...initialState });
  };

  const { email, password } = state;

  return (
    <div className={css.wrapper}>
      <form className={css.form} onSubmit={handleSubmit}>
        <TextField
          value={email}
          handleChange={handleChange}
          {...fields.email}
        />
        <TextField
          value={password}
          handleChange={handleChange}
          {...fields.password}
        />
        <button className={css.formBtn} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
