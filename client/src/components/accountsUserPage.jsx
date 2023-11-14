import React from 'react';
import { useQuery } from '@apollo/client';
import { ACCOUNTS } from '../utils/queries';
import Divider from '@mui/material/Divider';
import CurrencyFormat from 'react-currency-format';
import ListItemText from '@mui/material/ListItemText';

const UserAccounts = () => {
    const { loading, error, data } = useQuery(ACCOUNTS);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <div>
            <ListItemText primary="Linked Banks:" />
            {data.accounts.map((account) => (
                <ListItemText secondary={account.accountName}/>
            ))}
        </div>
    );
};

export default UserAccounts;