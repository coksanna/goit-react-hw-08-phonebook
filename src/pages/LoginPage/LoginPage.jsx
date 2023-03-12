import { useDispatch } from 'react-redux';

import { login } from '../../redux/auth/auth-operations';

import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  return (
    <div className="container">
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
