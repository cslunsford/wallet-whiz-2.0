import React from 'react';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {

  return (
    <div className="container upperContainer">
        <div className="container">
          <div className="registerPage">
            <h3 className="tagline">Welcome to the Future of Finance</h3>
            <div className='cards'>
            <h3 className="formBoxHeader">Register</h3>
            <RegisterForm />
            </div>
          </div>
      </div>
    </div>
  );
};

export default RegisterPage;
