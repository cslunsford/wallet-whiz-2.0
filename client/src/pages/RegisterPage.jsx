import React from 'react';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {

  return (
    <div className="container upperContainer">
        <div className="container">
          <div className="registerPage">
            <h3 className="tagline">Welcome to the Future of Finance</h3>
            <h4 className="taglineSubtext mb-4">Take control of your finances now</h4>
            <div className="formBoxHeader">Register</div>
            <RegisterForm />
          </div>
      </div>
    </div>
  );
};

export default RegisterPage;
