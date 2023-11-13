import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import PlaidButton from '../components/PlaidButton';
import { useMutation, useQuery } from '@apollo/client';
import { FETCH_PLAID_DATA } from "../utils/mutations";
import { USER } from '../utils/queries';

function User() {;
    const [fetchPlaidData] = useMutation(FETCH_PLAID_DATA);
    const { loading, error, data } = useQuery(USER);

    useEffect(() => {
        if (!loading && !error && data && data.user && data.user.plaidAccessToken) {
            fetchPlaidData({
                variables: {
                    accessToken: data.user.plaidAccessToken
                }
            });
        }
    }, [loading, error, data]);

    return (
        <div className='userpage'>
            <div className="container-fluid registerPage">
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
                    {data && data.user && !data.user.plaidAccessToken && (
                    <PlaidButton userId={data.user._id} />
                )}
                </div>
            </div>
            <div className="usertextbottom">
            <div className="container-fluid appFeaturesBox">
                <h2 className="featuresHeader">
                    What does WalletWhiz have to offer you?
                </h2>
                <div className="container-fluid featuresBoxInner">
                    <div className="container-fluid featuresTextBox">
                        <h3 className="featuresText">
                            WalletWhiz tracks your transactions in real time so that you can
                            accurately manage incoming and outgoing finances
                        </h3>
                    </div>
                    <div className="container-fluid featuresTextBox">
                        <h3 className="featuresText">
                            WalletWhiz has tools to analyze your spending habits so you can
                            save more money for the things you want
                        </h3>
                    </div>
                    <div className="container-fluid featuresTextBox">
                        <h3 className="featuresText">
                            WalletWhiz is made by people like you, for people like you. We
                            implemented features that we want to track our own finances
                        </h3>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;
