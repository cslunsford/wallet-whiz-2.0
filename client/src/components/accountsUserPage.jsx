import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { ACCOUNTS, USER } from '../utils/queries';
import { UPDATE_USERNAME, UPDATE_EMAIL } from '../utils/mutations';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar'; 
import Divider from '@mui/material/Divider';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';


const UserAccounts = () => {
    const { loading: userLoading, error: userError, data: userData } = useQuery(USER);
    const { loading: accountsLoading, error: accountsError, data: accountsData } = useQuery(ACCOUNTS);

    const [updateUsername] = useMutation(UPDATE_USERNAME);
    const [updateEmail] = useMutation(UPDATE_EMAIL);

    const [updateField, setUpdateField] = useState(null);
    const [newUsername, setNewUsername] = useState('');
    const [newEmail, setNewEmail] = useState('');

    const handleUpdateClick = (field) => {
        setUpdateField(field);
    }

    const handleCloseClick = () => {
        setUpdateField(null);
    };
    
    const handleSave = async () => {
        if (updateField === 'username') {
            await updateUsername({ variables: { userId: userData.user._id, username: newUsername } });
        } else if (updateField === 'email') {
            await updateEmail({ variables: { userId: userData.user._id, email: newEmail } });
        }
        
        window.location.reload();
    };
    
    if (userLoading || accountsLoading) return <p>Loading...</p>
    if (userError || accountsError) return <p>Error: {userError?.message || accountsError?.message}</p>
    
    const user = userData.user;
    const accounts = accountsData.accounts;

    return (
        <div key={user._id}>
            <h3 className="tagline">{user.username || user.email}&apos;s Profile</h3>
            <div className="container">
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary='Username:' secondary={user.username} />
                    <Button variant='contained' disableElevation onClick={() => handleUpdateClick('username')}>Change Username</Button>
                </ListItem>
                {updateField === 'username' && (
                    <ListItem>
                    <TextField
                        label='New Username'
                        value={newUsername}
                        variant='outlined'
                        onChange={(e) => setNewUsername(e.target.value)}
                        />
                            <CloseIcon color='error' onClick={handleCloseClick} style={{ cursor: 'pointer' }} />
                        </ListItem>
                )}
                <Divider variant="inset" />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <AlternateEmailIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary='Email:' secondary={user.email} />
                    <Button variant='contained' disableElevation onClick={() => handleUpdateClick('email')}>Change Email</Button>
                </ListItem>
                {updateField === 'email' && (
                    <ListItem>
                    <TextField
                        label='New Email'
                        value={newEmail}
                        variant='outlined'
                        onChange={(e) => setNewEmail(e.target.value)}
                        />
                            <CloseIcon color='error' onClick={handleCloseClick} style={{ cursor: 'pointer' }} />
                        </ListItem>
                )}
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
                            <AccountBalanceIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Linked Banks:" />
                    {accounts.map((account) => (
                        <ListItemText secondary={account.accountName} key={account._id} />
                    ))}
                </ListItem>
                <Divider variant="inset" />
                {updateField && (
                    <Button variant='contained' disableElevation onClick={handleSave}>Save</Button>
                )}
            </div>
        </div>
    );
};

export default UserAccounts;