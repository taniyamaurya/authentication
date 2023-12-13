import React, { useState } from 'react';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        const headers = {
            'Content-Type': 'application/json', // assuming JSON data is being sent
            // Add any other headers if needed
        };

        const requestBody = JSON.stringify({ name, email, password });

        try {
            const response = await fetch('http://localhost:4500/postData', {
                method: 'POST',
                headers: headers,
                body: requestBody,
            });

            if (response.ok) {
                // Handle success response
                const responseData = await response.json();
                console.log('Data successfully sent:', responseData);
            } else {
                // Handle error response
                const errorData = await response.json();
                console.error('Error:', errorData);
            }
        } catch (error) {
            // Handle fetch error
            console.error('Fetch error:', error);
        }
    };

    return (
        <div>
            <input
                type='text'
                placeholder='enter your name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type='email'
                placeholder='enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type='password'
                placeholder='enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Register;
