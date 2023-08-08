import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import LoggedInImage from './LoggedInImage';
import '../../OurStyles/LoginCSS/LoginPage.css';  // Import your CSS file for styling

const LoginPage = () => {
  const { login, isLoggedIn } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          login();
        } else {
          alert('Invalid credentials. Please try again.');
        }
      } else {
        console.error('Error while logging in');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="center-content">
      {isLoggedIn ? (
        <LoggedInImage />
      ) : (
        <form onSubmit={handleLogin}>
          <h2>Please Login:</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
