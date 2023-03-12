import { NavLink } from 'react-router-dom';

import css from './authMenu.module.css';

const AuthMenu = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Welcome to Phonebook!</h1>
      <div className={css.authMenu}>
        <NavLink to="/register" className={css.link}>
          Register
        </NavLink>{' '}
        |
        <NavLink to="/login" className={css.link}>
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default AuthMenu;
