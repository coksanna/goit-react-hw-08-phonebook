import { useSelector, useDispatch } from 'react-redux';

import { getUser } from '../../redux/auth/auth-selector';

import { logout } from '../../redux/auth/auth-operations';

import css from './userMenu.module.css';

const User = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.userMenu}>
      <p className={css.email}>{email}</p>
      <button className={css.button} onClick={onLogout}>
        Log out
      </button>
    </div>
  );
};

export default User;
