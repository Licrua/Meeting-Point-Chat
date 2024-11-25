import { useLocation, Navigate } from 'react-router-dom';
import LoginForm from '@components/loginPage/LoginForm';
import SignUpForm from '@components/signUpPage/SignUpForm';
import GeneralAuthContainer from '@components/generalAuthComponents/GeneralAuthContainer';
import GeneralAuthHeader from '@components/generalAuthComponents/GeneralAuthHeader';
import GeneralAuthFooter from '@components/generalAuthComponents/GeneralAuthFooter';

const AuthPage = () => {
  const location = useLocation();

  if (location.pathname === '/login') {
    return (
      <GeneralAuthContainer>
        <GeneralAuthHeader translation="loginFields.logIn" />
        <LoginForm />
        <GeneralAuthFooter
          text="loginFields.account"
          transferLink="loginFields.goToSignUp"
          transferPage="signUp"
        />
      </GeneralAuthContainer>
    );
  }
  if (location.pathname === '/signUp') {
    return (
      <GeneralAuthContainer>
        <GeneralAuthHeader translation="registration" />
        <SignUpForm />
        <GeneralAuthFooter
          text="signUpFields.isRegistered"
          transferLink="signUpFields.goToLogin"
          transferPage="login"
        />
      </GeneralAuthContainer>
    );
  }
  return <Navigate to="/404" />;
};

export default AuthPage;
