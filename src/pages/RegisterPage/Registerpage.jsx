import { useDispatch } from 'react-redux';
// import { Navigate } from 'react-router-dom';

import { signup } from '../../redux/auth/auth-operations';

import RegisterForm from '../../components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };

  //   if (isLogin) {
  //     return <Navigate to="/phonebook" />;
  //   }

  return (
    <div className="container">
      <h1 className="page-title">Register page</h1>
      <RegisterForm onSubmit={handleSignup} />
    </div>
  );
};

export default RegisterPage;
