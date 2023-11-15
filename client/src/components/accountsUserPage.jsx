import React from 'react';
import { useQuery } from '@apollo/client';
import { ACCOUNTS, USER } from '../utils/queries';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar'; 
import Divider from '@mui/material/Divider';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const UserAccounts = () => {
    const { loading: userLoading, error: userError, data: userData } = useQuery(USER);
    const { loading: accountsLoading, error: accountsError, data: accountsData } = useQuery(ACCOUNTS);

    if (userLoading || accountsLoading) return <p>Loading...</p>
    if (userError || accountsError) return <p>Error: {userError?.message || accountsError?.message}</p>

    const user = userData.user;
    const accounts = accountsData.accounts;

    return (
        <div key={user._id}>
            <h3 className="tagline">{user.username || user.email}'s Profile</h3>
            <div className="container">
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary='Username:' secondary={user.username} />
                </ListItem>
                <Divider variant="inset" />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <AlternateEmailIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary='Email:' secondary={user.email} />
                </ListItem>
                <Divider variant="inset" />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <AccessTimeIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Account Created:" secondary={user.createdAt} />
                </ListItem>
                <Divider variant="inset" />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <AccessTimeIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Linked Banks:" />
                    {accounts.map((account) => (
                        <ListItemText secondary={account.accountName} key={account._id} />
                    ))}
                </ListItem>
                <Divider variant="inset" />
            </div>
        </div>
    );
};

export default UserAccounts;