import { useSelector } from 'react-redux';

import Auth from 'components/Auth/auth';
import User from 'components/User/User';

import css from './userMenu.module.css';

import { isUserLogin } from 'redux/auth/auth-selector';

const UserMenu = () => {
  const isLogin = useSelector(isUserLogin);

  return (
    <div className={css.userMenu}>
      {!isLogin && <Auth />}
      {isLogin && <User />}
    </div>
  );
};

export default UserMenu;
