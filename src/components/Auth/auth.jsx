import { NavLink } from 'react-router-dom';

import css from './auth.module.css';

const Auth = () => {
  return (
    <div>
      <NavLink to="/register" className={css.link}>
        Register
      </NavLink>{' '}
      |
      <NavLink to="/login" className={css.link}>
        Login
      </NavLink>
    </div>
  );
};

export default Auth;
