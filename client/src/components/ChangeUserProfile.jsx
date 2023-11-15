import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_USERNAME, UPDATE_EMAIL } from '../utils/mutations';


const ChangeUserProfile = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form data submitted:', formData);

        setFormData({
            username: '',
            email: '',
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">New Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">New Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Update Profile</button>
        </form>
    );
};

export default ChangeUserProfile;