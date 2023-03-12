import { useState } from 'react';
import PropTypes from 'prop-types';

import TextField from '../TextField/TextField';
import fields from './fields';

import css from './registerForm.module.css';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, email, password });
    setState({ ...initialState });
  };

  const { name, email, password } = state;

  return (
    <div className={css.wrapper}>
      <form className={css.form} onSubmit={handleSubmit}>
        <TextField value={name} handleChange={handleChange} {...fields.name} />
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
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
