import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Modal, Form, Image, InputGroup, FormControl, Pagination, Dropdown } from 'react-bootstrap';
import './Home.css'; // Стилі для Home.js

const Home = () => {
    const [cards, setCards] = useState([]);
    const [showAddCardModal, setShowAddCardModal] = useState(false);
    const [showBackgroundModal, setShowBackgroundModal] = useState(false);
    const [backgroundImage, setBackgroundImage] = useState('/images/default-background.jpg');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [backgrounds, setBackgrounds] = useState([]);

    useEffect(() => {
        fetch('/data/backgrounds.json')
            .then(response => response.json())
            .then(data => {
                const bgList = Object.keys(data).map(name => ({
                    src: data[name],
                    name: name || data[name]
                }));
                setBackgrounds(bgList);
            });
    }, []);

    const addCard = () => {
        setShowAddCardModal(true);
    };

    const handleCardSelection = (card) => {
        if (card) {
            setCards([...cards, card]);
            setShowAddCardModal(false);
        }
    };

    const removeAllCards = () => {
        setCards([]);
    };

    const saveWork = () => {
        console.log("Work saved");
    };

    const exportResults = () => {
        console.log("Results exported");
    };

    const openBackgroundModal = () => {
        setShowBackgroundModal(true);
    };

    const handleBackgroundSelection = (bg) => {
        setBackgroundImage(`/images/${bg}`);
        setShowBackgroundModal(false);
    };

    const filteredBackgrounds = backgrounds.filter(bg =>
        bg.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentBackgrounds = filteredBackgrounds.slice(indexOfFirst, indexOfLast);

    const totalPages = Math.ceil(filteredBackgrounds.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <Container fluid className="home-container">

            <Row className="content">
                <Col md={3} className="sidebar">
                    <Button variant="primary" className="w-100 mt-3 btn-sm" onClick={addCard}>Додати карту</Button>
                    <Button variant="danger" className="w-100 mt-2 btn-sm" onClick={removeAllCards}>Видалити всі карти</Button>
                    <Button variant="success" className="w-100 mt-2 btn-sm" onClick={saveWork}>Зберегти роботу</Button>
                    <Button variant="info" className="w-100 mt-2 btn-sm" onClick={exportResults}>Експортувати результати</Button>
                    <Button variant="secondary" className="w-100 mt-2 btn-sm" onClick={openBackgroundModal}>Змінити фон</Button>
                </Col>
                <Col md={9} className="main-area" style={{ backgroundImage: `url(${backgroundImage})` }}>
                    <div className="card-container">
                        {cards.map((card, index) => (
                            <div key={index} className="card">
                                <img src={card} alt={`Card ${index}`} className="card-image" />
                                <div className="card-buttons">
                                    <Button variant="secondary" className="btn-sm" onClick={() => {/* Логіка перегортання */}}>Перегорнути карту</Button>
                                    <Button variant="secondary" className="btn-sm" onClick={() => {/* Логіка переміщення */}}>Перемістити карту</Button>
                                    <Button variant="danger" className="btn-sm" onClick={() => setCards(cards.filter((_, i) => i !== index))}>Закрити карту</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>

            <Modal show={showAddCardModal} onHide={() => setShowAddCardModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Виберіть карту</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Виберіть картку</Form.Label>
                            <Form.Control as="select" onChange={(e) => handleCardSelection(e.target.value)}>
                                <option value="">Оберіть картку</option>
                                <option value="card1.png">Картка 1</option>
                                <option value="card2.png">Картка 2</option>
                                {/* Додайте більше карток тут */}
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowAddCardModal(false)}>
                        Закрити
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showBackgroundModal} onHide={() => setShowBackgroundModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Виберіть фон</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Пошук фону"
                            aria-label="Пошук фону"
                            aria-describedby="basic-addon2"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </InputGroup>
                    <div className="background-options">
                        {currentBackgrounds.map((bg, index) => (
                            <div key={index} className="background-item">
                                <Image
                                    src={`/images/${bg.src}`}
                                    thumbnail
                                    className="background-preview"
                                    onClick={() => handleBackgroundSelection(bg.src)}
                                />
                                <div className="background-name">{bg.name}</div>
                            </div>
                        ))}
                    </div>
                    <div className="pagination-container">
                        <Pagination>
                            {[...Array(totalPages).keys()].map((pageNumber) => (
                                <Pagination.Item
                                    key={pageNumber + 1}
                                    active={pageNumber + 1 === currentPage}
                                    onClick={() => handlePageChange(pageNumber + 1)}
                                >
                                    {pageNumber + 1}
                                </Pagination.Item>
                            ))}
                        </Pagination>
                        <Dropdown className="ms-3">
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                {itemsPerPage} на сторінці
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => {
                                    setItemsPerPage(3);
                                    setCurrentPage(1); // Reset to first page on items per page change
                                }}>3</Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    setItemsPerPage(6);
                                    setCurrentPage(1); // Reset to first page on items per page change
                                }}>6</Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    setItemsPerPage(9);
                                    setCurrentPage(1); // Reset to first page on items per page change
                                }}>9</Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    setItemsPerPage(12);
                                    setCurrentPage(1); // Reset to first page on items per page change
                                }}>12</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowBackgroundModal(false)}>
                        Закрити
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Home;
