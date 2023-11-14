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
                    {data && data.user && !data.user.plaidAccessToken && (
                    <PlaidButton userId={data.user._id} />
                )}
                </div>
            </div>
        </div>
        </div>
    );
};

export default User;
