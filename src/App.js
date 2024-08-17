// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import Home from './components/pages/Home';
import About from './components/pages/About';
import HowToUse from './components/pages/HowToUse';
import Contact from './components/pages/Contact';
import Profile from './components/pages/profile/Profile';
import Header from './components/common/Header';
import ProfileSettings from "./components/pages/profile/ProfileSettings";

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
