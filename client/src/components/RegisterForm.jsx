import React, { useState } from 'react';
import { Form, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import Button from '@mui/material/Button'; 
import { TextField } from '@mui/material';
import { REGISTER } from '../utils/mutations';
import Auth from '../utils/auth';

const RegisterForm = () => {
    const [userFormData, setUserFormData] = useState({ email: '', password: '', confirmPassword: '' });
    const [validated, setValidated] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [register] = useMutation(REGISTER);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false || userFormData.password !== userFormData.confirmPassword) {
            event.stopPropagation();
            setErrorMessage('Passwords must match!');
            setShowError(true);
            return;
        }

        try {
            const { data } = await register({
                variables: { ...userFormData },
            });
            if (!data) {
                throw new Error('Something went wrong!');
            }

            const { token, user } = data.register;
            Auth.login(token);
        } catch (err) {
            setErrorMessage('Error with registration!');
            setShowError(true);
        }

        setUserFormData({
            email: '',
            password: '',
            confirmPassword: '',
        })
        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleFormSubmit} className='container'>
            {showError && <Alert variant='danger'>{errorMessage}</Alert>}
            <Form.Group>
            <TextField
                    label='Username'
                    margin='normal'
                    variant='outlined'
                    type='username'
                    name='username'
                    onChange={handleInputChange}
                    value={userFormData.email}
                    required
                />
                <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
            <TextField
                    label='Email'
                    margin='normal'
                    variant='outlined'
                    type='email'
                    name='email'
                    onChange={handleInputChange}
                    value={userFormData.email}
                    required
                />
                <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
            <TextField
                    label='Password'
                    margin='normal'
                    variant='outlined'
                    type='password'
                    name='password'
                    onChange={handleInputChange}
                    value={userFormData.password}
                    required
                />
                <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
            <TextField
                    label='Confirm Password'
                    margin='normal'
                    variant='outlined'
                    type='password'
                    name='confirmPassword'
                    onChange={handleInputChange}
                    value={userFormData.confirmPassword}
                    required
                />
                <Form.Control.Feedback type='invalid'>Passwords must match!</Form.Control.Feedback>
            </Form.Group>

            <Button
                disabled={(!userFormData.email && userFormData.password && userFormData.confirmPassword)}
                variant='contained'
                disableElevation
                type='submit'
            >
                Submit
            </Button>
        </Form>
    );
};

export default RegisterForm;