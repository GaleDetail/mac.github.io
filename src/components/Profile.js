// src/components/Profile.js
import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const Profile = () => {
    return (
        <Container>
            <Card className="my-4">
                <Card.Body>
                    <Card.Title>Profile</Card.Title>
                    <Card.Text>
                        Тут можна додати інформацію про профіль користувача.
                    </Card.Text>
                    <Button variant="primary">Редагувати профіль</Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Profile;
