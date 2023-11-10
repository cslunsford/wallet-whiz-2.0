import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';

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
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
            {showError && <Alert variant='danger'>{errorMessage}</Alert>}
            <Form.Group className='mb-3'>
                <Form.Label>Email:</Form.Label>
                <Form.Control
                    type='email'
                    placeholder='Please enter your email!'
                    name='email'
                    onChange={handleInputChange}
                    value={userFormData.email}
                    required
                />
                <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Password:</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Please enter your password!'
                    name='password'
                    onChange={handleInputChange}
                    value={userFormData.password}
                    required
                />
                <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Please confirm your password!'
                    name='confirmPassword'
                    onChange={handleInputChange}
                    value={userFormData.confirmPassword}
                    required
                />
                <Form.Control.Feedback type='invalid'>Passwords must match!</Form.Control.Feedback>
            </Form.Group>

            <Button
                className='btn btn-primary btn-lg btn-block'
                disabled={(!userFormData.email && userFormData.password && userFormData.confirmPassword)}
                type='submit'
            >
                Submit
            </Button>
        </Form>
    );
};

export default RegisterForm;