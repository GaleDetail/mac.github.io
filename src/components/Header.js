import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Перевірка стану аутентифікації при завантаженні компонента
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setIsLoggedIn(true);
                setUser(currentUser);
            } else {
                setIsLoggedIn(false);
                setUser(null);
            }
        });

        // Відписуємося від прослуховування стану аутентифікації при демонтажі компонента
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setIsLoggedIn(false);
            setUser(null);
        } catch (error) {
            console.error('Error signing out: ', error);
        }
    };

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
                        {isLoggedIn ? (
                            <Dropdown alignRight>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    {user ? user.email : 'Профіль'}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/profile">Сторінка профілю</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/profile-settings">Налаштування</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item onClick={handleLogout}>Вийти</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/login">Увійти</Nav.Link>
                                <Nav.Link as={Link} to="/signup">Зареєструватись</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
