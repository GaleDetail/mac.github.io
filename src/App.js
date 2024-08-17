// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import Home from './components/Home';
import About from './components/About';
import HowToUse from './components/HowToUse';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Header from './components/Header';
import ProfileSettings from "./components/ProfileSettings";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/about" element={<About />} />
                <Route path="/how-to-use" element={<HowToUse />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile-settings" element={<ProfileSettings />} />

            </Routes>
        </Router>
    );
};

export default App;
