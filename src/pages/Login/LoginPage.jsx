// LoginPage.js
import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import LoggedInImage from './LoggedInImage';
import '../../OurStyles/LoginCSS/LoginPage.css';  // Import your CSS file for styling

const LoginPage = () => {
  const { login, isLoggedIn } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform authentication logic here (e.g., call an API, check credentials)
    // For simplicity, we'll just check if the username and password are "admin"
    if (username === 'admin' && password === 'admin') {
      login();
    } else {
      alert('Invalid credentials. Please try again.');
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
