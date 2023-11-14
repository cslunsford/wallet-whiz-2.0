import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import PlaidButton from '../components/PlaidButton';
import { useMutation, useQuery } from '@apollo/client';
import { FETCH_PLAID_DATA } from "../utils/mutations";
import { USER } from '../utils/queries';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar'; 
import Divider from '@mui/material/Divider';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


function User() {
    ;
    const [fetchPlaidData] = useMutation(FETCH_PLAID_DATA);
    const { loading, error, data } = useQuery(USER);

    useEffect(() => {
        if (!loading && !error && data && data.user && data.user.plaidAccessToken) {
            fetchPlaidData({
                variables: {
                    accessToken: data.user.plaidAccessToken
                }
            });
        }
    }, [loading, error, data]);


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
                                    <AlternateEmailIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Email" secondary="Email Placeholder" />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <AccessTimeIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Account Created:" secondary="July 20, 2014" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <AccessTimeIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Linked Banks" secondary="N/A" />
                        </ListItem>
                    </List>
                    <PlaidButton />
                </div>
            </div>
        </div>
    );
};

export default User;
