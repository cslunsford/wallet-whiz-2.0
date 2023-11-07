import React from 'react';

function homepage() {
  return (
    <div className="container-fluid upperPage">
      <div className="container-fluid pageBox1">
        <div className="container-fluid pageTextBox">
          <h2 className="descriptionText">Why use WalletWhiz?</h2>
          <h3 className="descriptionSubText">
            Managing your money can be hard and time-consuming<br />
            Your time is precious to you, why waste it on hours of book-keeping and stressful
            budgeting<br />
            Let WalletWhiz do the heavy lifting for you. WalletWhiz makes it quick and easy to keep an eye on
            your finances, so you can spend more time on what matters
          </h3>
        </div>
        <div className="container-fluid loginBoxesContainer">
          <div className="formBoxAlign">
            <h3 className="tagline">Already a user?</h3>
            <h4 className="taglineSubtext">Go on, start managing your money</h4>
            <div className="displayCards" id="loginBox">
              <h3 className="formBoxHeader">Login</h3>
              <div className="form-floating formInputs">
                <input type="email" className="form-control" id="loginEmail" name="email" placeholder="name@example.com" />
                <label className="formLabel" for="floatingInput">Email address</label>
              </div>
              <div className="form-floating formInputs">
                <input type="password" className="form-control" id="loginPassword" name="password" placeholder="Password" />
                <label className="formLabel" for="floatingPassword">Password</label>
              </div>
              <button type="button" className="btn btn-primary btn-lg" id="loginButton">Log In</button>
            </div>
            <div className="registerButtonBox">
              <h3 className="registerHeader">Not yet managing your money? register here</h3>
              <button type="button" className="btn btn-primary btn-lg" id="registerButton">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default homepage;