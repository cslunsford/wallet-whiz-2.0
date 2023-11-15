import React from 'react';
import { useQuery } from '@apollo/client';
import { ACCOUNTS, USER } from '../utils/queries';
import Divider from '@mui/material/Divider';
import CurrencyFormat from 'react-currency-format';
import ListItemText from '@mui/material/ListItemText';

const UserAccounts = () => {
    const { loading: userLoading, error: userError, data: userData } = useQuery(USER);
    const { loading: accountsLoading, error: accountsError, data: accountsData } = useQuery(ACCOUNTS);

    if (userLoading || accountsLoading) return <p>Loading...</p>
    if (userError || accountsError) return <p>Error: {userError?.message || accountsError?.message}</p>

    const user = userData.user;
    const accounts = accountsData.accounts;

    return (
        <div>
            <ListItemText primary="Linked Banks:" />
            {accounts.map((account) => (
                <ListItemText secondary={account.accountName} key={account._id}/>
            ))}
        </div>
    );
};

export default UserAccounts;