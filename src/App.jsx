import React from 'react';
import { AuthProvider } from "./pages/Login/AuthContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from "./pages/Login/LoginPage";
import HomePage from "./pages/Home/HomePage";
import RegistrationPage from "./pages/Login/RegistrationPage"; // Correct import path

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/registration" element={<RegistrationPage />} /> {/* Correct component */}
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
