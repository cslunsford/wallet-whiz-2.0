import React from 'react';
import { useQuery } from '@apollo/client';
import { TRANSACTIONS } from '../utils/queries';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../App.css'; 

const PlaidTransactions = () => {
    const { loading, error, data } = useQuery(TRANSACTIONS);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <div>
            {data.transactions.map((transaction) => (
                <div key={transaction._id}>
                    <h2>{transaction.merchantName}</h2>
                    <p>{transaction.amount}$</p>
                    <p>{transaction.date}</p>
                    </div>
            ))}
        </div>
    );
};

export default PlaidTransactions;