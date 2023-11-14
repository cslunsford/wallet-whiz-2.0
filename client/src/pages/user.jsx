import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import PlaidButton from '../components/PlaidButton';
import AccountButton from '../components/AccountButton';
import UserAccounts from "../components/accountsUserPage";
import { useQuery } from '@apollo/client';
import { ACCOUNTS } from '../utils/queries';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar'; 
import Divider from '@mui/material/Divider';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function User() {
    const { loading, error, data } = useQuery(ACCOUNTS);
    

    return (
        <div className="container upperContainer">
            <div className='container'>
                <div className="container registerPage">
                    <h3 className="tagline">User Profile</h3>
                    <div className="container">
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Username:" secondary="Username Placeholder" />
                        </ListItem>
                        <Divider variant="inset"/>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <AlternateEmailIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Email:" secondary='' />
                        </ListItem>
                        <Divider variant="inset"/>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <AccessTimeIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Account Created:" secondary="July 20, 2014" />
                        </ListItem>
                        <Divider variant="inset"/>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <AccessTimeIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <UserAccounts />
                            </ListItem>
                        <Divider variant="inset"/>
                    </div>
                    {data && data.user && data.user.plaidAccessToken && (
                        <AccountButton />
                    )}
                    {data && data.user && !data.user.plaidAccessToken && (
                    <PlaidButton userId={data.user._id} />
                )}
                </div>
            </div>
        </div>
    );
};

export default User;
