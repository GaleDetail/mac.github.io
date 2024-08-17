import React, { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Alert, Container } from 'react-bootstrap';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!email || !password) {
            setError('All fields are required.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
            setSuccess('Signed in successfully!');
            setTimeout(() => navigate('/'), 2000);
        } catch (err) {
            // Покращена обробка помилок для кращого інформування користувача
            if (err.code === 'auth/wrong-password') {
                setError('Incorrect password. Please try again.');
            } else if (err.code === 'auth/user-not-found') {
                setError('No user found with this email.');
            } else {
                setError('Failed to sign in. Please try again later.');
            }
        }
    };

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
            <div>
                <h2 className="text-center">Sign In</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}
                <Form onSubmit={handleSignIn}>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            isInvalid={!!error}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            isInvalid={!!error}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">
                        Sign In
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default SignIn;
