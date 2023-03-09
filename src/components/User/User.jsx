import { useSelector } from 'react-redux';

import { getUser } from '../../redux/auth/auth-selector';

/* import css from "./user.module.css"; */

const User = () => {
  const { name } = useSelector(getUser);

  return (
    <div>
      {name}, <button>Logout</button>
    </div>
  );
};

export default User;
