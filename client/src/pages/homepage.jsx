import React from 'react';
import Button from '@mui/material/Button';
import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';

function homepage() {
    return (
        <div className="container pageBox">
            <div className="container pageInner">
                <div className="container pageTextBox">
                    <h2 className="headerText">Why use WalletWhiz?</h2>
                    <p className="descriptionSubText">
                        Managing your money can be hard and time-consuming<br />
                        Your time is precious to you, why waste it on hours of book-keeping and stressful budgeting<br />
                        Let WalletWhiz do the heavy lifting for you. WalletWhiz makes it quick and easy to keep an eye on
                        your finances, so you can spend more time on what matters
                    </p>
                </div>
                <div className="container loginBoxesContainer">
                    <div className="formBoxAlign">
                        <h3 className="tagline">Already a user?</h3>
                        <div className="cards" id="loginBox">
                            <h3 className="formBoxHeader">Login</h3>
                            <LoginForm />
                        </div>
                        <div className="registerButtonBox">
                            <h3 className="registerHeader">Not yet managing your money? Register here</h3>
                            <Link to='/register'>
                            <Button variant="contained" disableElevation>Register</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default homepage;