import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const RegisterPage = () => {

  return (
    <div className="container upperContainer">
      <div className="container">
        <div className="container">
          <h3 className="tagline taglineBig">Welcome to the Future of Finance</h3>
          <h4 className="tagline">Take control of your finances now</h4>
          <div className="card">
            <h4 className='tagline'>Register</h4>          
            <TextField id="margin-normal" label="Username" margin='normal' variant="outlined"/>
            <TextField id="margin-normal" label="Password" margin='normal' variant="outlined" />
            <TextField id="margin-normal" label=" Repeat Password" margin='normal' variant="outlined" />
            <Button variant='contained' disableElevation>Register</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
