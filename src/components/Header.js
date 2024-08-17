// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Метафоричні карти онлайн</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Головна</Nav.Link>
                        <Nav.Link as={Link} to="/about">Про сервіс</Nav.Link>
                        <Nav.Link as={Link} to="/how-to-use">Як працювати з картами</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Контакти</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/profile-settings">Профіль</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
