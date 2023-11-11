import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Form, Alert } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const LoginForm = () => {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const [validated] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [login, { loading }] = useMutation(LOGIN_USER);
    const [isLoggedIn, setIsLoggedIn] = useState(Auth.loggedIn());

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setErrorMessage('Please enter your email and password.');
            setShowError(true);
            return;
        }

        try {
            const { data } = await login({
                variables: { ...userFormData }
            });

            if (!data) {
                setErrorMessage('Something went wrong!');
            }

            Auth.login(data.login.token);
            setIsLoggedIn(true);
        } catch (err) {
            setErrorMessage("Email and password don't match. Please try again!");
            setShowError(true);
        }

        setUserFormData({
            email: '',
            password: '',
        });
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
            {showError && <Alert variant='danger'>{errorMessage}</Alert>}
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
                <Form.Control.Feedback type='invalid'>Enter your email to login!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
                <TextField
                    label='Password'
                    margin='normal'
                    variant='outlined'
                    type='password'
                    placeholder='Please enter your password!'
                    name='password'
                    onChange={handleInputChange}
                    value={userFormData.password}
                    required
                />
                <Form.Control.Feedback type='invalid'>Please enter your correct password!</Form.Control.Feedback>
            </Form.Group>

            {isLoggedIn ? null : (
                <Button
                    variant='contained'
                    disableElevation
                    type='submit'
                    disabled={loading}
                >
                    {loading ? 'Logging in' : 'Login'}
                </Button>
            )}
        </Form>
    );
};

export default LoginForm;