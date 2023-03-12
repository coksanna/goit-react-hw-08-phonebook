import { useSelector } from 'react-redux';

import AuthMenu from 'components/AuthMenu/AuthMenu';
import UserMenu from 'components/UserMenu/UserMenu';

import css from './navMenu.module.css';

import { isUserLogin } from 'redux/auth/auth-selector';

const NavMenu = () => {
  const isLogin = useSelector(isUserLogin);

  return (
    <div className={css.navMenu}>
      {!isLogin && <AuthMenu />}
      {isLogin && <UserMenu />}
    </div>
  );
};

export default NavMenu;
