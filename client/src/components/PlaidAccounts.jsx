import React from 'react';
import { useQuery } from '@apollo/client';
import { ACCOUNTS } from '../utils/queries';
import Divider from '@mui/material/Divider';
import CurrencyFormat from 'react-currency-format';

const PlaidAccounts = () => {
    const { loading, error, data } = useQuery(ACCOUNTS);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <div>
            {data.accounts.map((account) => (
                <div className='balanceContainer' key={account._id}>
                    <h4 className='balanceHeader' id='savingsHeader'>{account.accountName}</h4>
                    <CurrencyFormat className='accountBalance' displayType={'text'} thousandSeparator={true} prefix={'$'} decimalSeparator='.' decimalScale={2} fixedDecimalScale={true} value={account.balance}/>
                    <Divider />
                    </div>
            ))}
        </div>
    );
};

export default PlaidAccounts;