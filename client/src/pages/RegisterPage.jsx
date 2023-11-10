import React from 'react';

const RegisterPage = () => {

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="registerPage">
            <h3 className="tagline">Welcome to the Future of Finance</h3>
            <h4 className="taglineSubtext mb-4">Take control of your finances now</h4>
            <div className="formBoxHeader">Register</div>
            <form>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="registerEmail" name="email" placeholder="name@example.com" />
                <label htmlFor="registerEmail">Email Address</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="registerPassword" name="password" placeholder="Password" />
                <label htmlFor="registerPassword">Password</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="repeatPassword" name="passwordConfirm" placeholder="Password" />
                <label htmlFor="repeatPassword">Confirm Password</label>
              </div>
              <button type="submit" id="register" className="btn btn-primary btn-lg btn-block">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
