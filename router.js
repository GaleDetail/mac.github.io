import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import ResetPassword from "./components/auth/ResetPassword";
import Home from "./components/Home";

const RouterConfig = () => (
    <Router>
        <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/" element={<Home />} />
        </Routes>
    </Router>
);

export default RouterConfig;
