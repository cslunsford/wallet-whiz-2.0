import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import PlaidButton from '../components/PlaidButton';
import AccountButton from '../components/AccountButton';
import UserAccounts from "../components/accountsUserPage";
import { useQuery } from '@apollo/client';
import { USER } from '../utils/queries';
import ChangeUserProfile from "../components/ChangeUserProfile";

function User() {
    

    return (
        <div className="container upperContainer">
            <div className='container'>
                <div className="container registerPage">
                    <UserAccounts />
                        <AccountButton />
                    {data && data.user && !data.user.plaidAccessToken && (
                    <PlaidButton userId={data.user._id} />
                )}
                </div>
            </div>
        </div>
    );
};

export default User;
