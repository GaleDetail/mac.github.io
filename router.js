import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/Auth/SignUp";
import SignIn from "./components/Auth/SignIn";
import ResetPassword from "./components/Auth/ResetPassword";
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
