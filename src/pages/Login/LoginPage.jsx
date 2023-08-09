import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import LoggedInImage from './LoggedInImage';
import '../../OurStyles/LoginCSS/LoginPage.css';  // Import your CSS file for styling
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_URL = 'http://localhost:8000';  // Replace with your backend URL

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { isLoggedIn, login } = useAuth(); // Use the isLoggedIn status from AuthContext

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${API_URL}/api/token/`, {
                email,
                password,
            });
            const token = response.data.access;
            login(token); // Set the user as logged in
            // Redirect the user to the appropriate page
        } catch (error) {
            // Handle error, show error message to the user
        }
    };

    return (
        <div>
            {isLoggedIn ? (
                <LoggedInImage /> // Render LoggedInImage when user is logged in
            ) : (
                <>
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleLogin}>Login</button>
                    <p>Don't have an account? <Link to="/registration">Register here</Link></p>
                </>
            )}
        </div>
    );
}; 

export default LoginPage;
