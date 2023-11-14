import React from 'react';
import { useQuery } from '@apollo/client';
import { ACCOUNTS } from '../utils/queries';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../App.css'; 

const PlaidAccounts = () => {
    const { loading, error, data } = useQuery(ACCOUNTS);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <div className='card displayCards' id='balanceCard'>
            {data.accounts.map((account) => (
                <div className='container balanceContainer' id='balanceContainer' key={account._id}>
                    <h2 className='headerText balanceHeaders' id='savingsHeader'>{account.accountName}</h2>
                    <p className='headerText' id='savings'>Balance: ${account.balance}</p>
                    </div>
            ))}
        </div>
    );
};

export default PlaidAccounts;