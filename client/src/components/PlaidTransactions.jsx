import React from 'react';
import { useQuery } from '@apollo/client';
import { TRANSACTIONS } from '../utils/queries';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Divider from '@mui/material/Divider';
import CurrencyFormat from 'react-currency-format';
import moment from 'moment';

const PlaidTransactions = () => {
    const { loading, error, data } = useQuery(TRANSACTIONS);
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <div>
            {data.transactions.map((transaction) => (
                <div className='container transactionContainer'>
                    <div className='transactionInner' key={transaction._id}>
                        <div>
                    <h2>{transaction.merchantName}</h2>
                    <CurrencyFormat displayType={'text'} thousandSeparator={true} prefix={'$'} decimalSeparator='.' decimalScale={2} fixedDecimalScale={true} value={transaction.amount}/>
                        </div>
                    <p>{moment(transaction.date).format('MMMM Do YYYY')}</p>
                    </div>
                    <Divider/>
                </div>
            ))}
        </div>
    );
};

export default PlaidTransactions;