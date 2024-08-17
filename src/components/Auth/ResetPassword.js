import React, { useState } from "react";
import { resetPassword } from "../../services/authService";
import { Container, TextField, Button } from '@mui/material';

const ResetPassword = () => {
    const [email, setEmail] = useState("");

    const handleResetPassword = async () => {
        try {
            await resetPassword(email);
            alert("Password reset email sent!");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container maxWidth="sm">
            <h1>Reset Password</h1>
            <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="primary" onClick={handleResetPassword}>
                Reset Password
            </Button>
        </Container>
    );
};

export default ResetPassword;
