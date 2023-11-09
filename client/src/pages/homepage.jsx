import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { alpha, styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Stack } from '@mui/system';
import { Typography } from '@mui/material';

const theme = createTheme({
    palette: {
        violet: {
            main: '#7F2596'
        }
    }
});

const CssTextField = styled(TextField)({
    width: '100%',
    '& .MuiInputBase-root': {
        '& fieldset': {
        borderColor: '#fff',
        }
    },
    "& .MuiOutlinedInput-root.Mui-focused": {
        "& > fieldset": {
        borderColor: "#afafaf"
        }
    },
    '& .MuiInputBase-root:hover': {
        '& fieldset': {
        borderColor: '#afafaf',
        }
    },
    '&.Mui-focused fieldset': {
        borderColor: '#6F7E8C',
    },
    '& .MuiFormLabel-root': {
        color: '#fff',
    },
    '& .MuiFormLabel-root:hover': {
        color: '#afafaf',
    },
    '& label.Mui-focused': {
        color: '#afafaf',
    },
});

function homepage() {
    return (
        <div className="container pageBox">
            <div className="container pageInner">
                <div className="container pageTextBox">
                    <h2 className="headerText">Why use WalletWhiz?</h2>
                    <p className="descriptionSubText">
                        Managing your money can be hard and time-consuming<br />
                        Your time is precious to you, why waste it on hours of book-keeping and stressful budgeting<br />
                        Let WalletWhiz do the heavy lifting for you. WalletWhiz makes it quick and easy to keep an eye on
                        your finances, so you can spend more time on what matters
                    </p>
                </div>
                <div className="container loginBoxesContainer">
                    <div className="formBoxAlign">
                        <h3 className="tagline">Already a user?</h3>
                        <div className="card" id="loginBox">
                            <h3 className="formBoxHeader">Login</h3>
                            <TextField id="margin-normal" label="Username" margin='normal' variant="outlined" />
                            <CssTextField id="margin-normal" label="Password" margin='normal' variant="outlined" />
                            <Button variant='contained' disableElevation>Login</Button>
                        </div>
                        <div className="registerButtonBox">
                            <h3 className="registerHeader">Not yet managing your money? Register here</h3>
                            <Button variant="contained" disableElevation>Register</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default homepage;