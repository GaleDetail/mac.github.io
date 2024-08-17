// src/components/Contact.js
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={6}>
                    <h1>Контакти</h1>
                    <p>
                        Якщо у вас є питання або пропозиції, будь ласка, зв'яжіться з нами:
                    </p>
                    <p>Email: support@yourservice.com</p>
                    <p>Телефон: +123 456 7890</p>
                </Col>
                <Col md={6}>
                    <h2>Форма зворотного зв'язку</h2>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Ім'я</Form.Label>
                            <Form.Control type="text" placeholder="Введіть ваше ім'я" />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Введіть ваш email" />
                        </Form.Group>
                        <Form.Group controlId="formMessage">
                            <Form.Label>Повідомлення</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Введіть ваше повідомлення" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Відправити
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
