
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import PlaidButton from '../components/PlaidButton';


function User() {
    const [userId, setUserId] = useState(null);

    return (
        <div className="container upperContainer">
        <div className='container'>
            <div className="container registerPage">
                <h3 className="tagline">User Profile</h3>
                <div className="displayCards">
                    <h3 className="cardHeader">Account Information</h3>
                    <div className="form-floating formInputs">
                        <input
                            type="email"
                            className="form-control"
                            id="registerEmail"
                            name="email"
                            placeholder="name@example.com"
                        />
                        <label className="formLabel" htmlFor="floatingInput">
                            Bank Name
                        </label>
                    </div>
                    <div className="form-floating formInputs">
                        <input
                            type="password"
                            className="form-control"
                            id="registerPassword"
                            name="password"
                            placeholder="Password"
                        />
                        <label className="formLabel" htmlFor="floatingPassword">
                            Checking #
                        </label>
                    </div>
                    <div className="form-floating formInputs">
                        <input
                            type="password"
                            className="form-control"
                            id="repeatPassword"
                            name="passwordConfirm"
                            placeholder="Password"
                        />
                        <label className="formLabel" htmlFor="floatingPassword">
                            Routing #
                        </label>
                    </div>
                    {<PlaidButton userId={userId} />}
                </div>
            </div>
        </div>
        </div>
    );
};

export default User;
