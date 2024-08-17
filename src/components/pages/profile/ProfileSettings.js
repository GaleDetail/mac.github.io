import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const ProfileSettings = () => {
    return (
        <Container className="d-flex align-items-center justify-content-center mt-5">
            <div>
            <h2>Profile Settings</h2>
            <Form>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mt-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mt-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter a new password" />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">
                    Save Changes
                </Button>
            </Form>
            </div>
        </Container>
    );
};

export default ProfileSettings;
