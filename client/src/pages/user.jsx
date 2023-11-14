import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import PlaidButton from '../components/PlaidButton';
import AccountButton from '../components/AccountButton';
import { useQuery } from '@apollo/client';
import { USER } from '../utils/queries';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar'; 
import Divider from '@mui/material/Divider';

function User() {
    const { loading, error, data } = useQuery(USER);

    return (
        <div className="container upperContainer">
            <div className='container'>
                <div className="container registerPage">
                    <h3 className="tagline">User Profile</h3>
                    <List
                        sx={{
                            width: '100%',
                            bgcolor: 'rgba(255, 255, 255, 0.1)',
                        }}
                    >
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Username" secondary="Username Placeholder" />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Email" secondary="Email Placeholder" />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Account Created:" secondary="July 20, 2014" />
                        </ListItem>
                    </List>
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
