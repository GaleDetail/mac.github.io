import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Message from '../Message';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [variant, setVariant] = useState('success'); // 'success' або 'danger'

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (!email || !password || !name) {
            setMessage('All fields are required.');
            setVariant('danger');
            return;
        }

        try {
            // Тут ваш код для реєстрації користувача
            setMessage('Account created successfully!');
            setVariant('success');
        } catch (error) {
            setMessage(error.message);
            setVariant('danger');
        }
    };

    const handleClose = () => setMessage('');

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
            <div>
                <h2 className="text-center">Sign Up</h2>
                {message && <Message message={message} variant={variant} onClose={handleClose} />}
                <form onSubmit={handleSignUp}>
                    <div className="mb-3">
                        <label htmlFor="formName" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="formName"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formEmail" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="formEmail"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formPassword" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="formPassword"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                </form>
            </div>
        </Container>
    );
};

export default SignUp;
