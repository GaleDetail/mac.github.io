// src/components/HowToUse.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const HowToUse = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1>Як працювати з картами</h1>
                    <p>
                        На нашій платформі ви можете працювати з метафоричними картами наступним чином:
                    </p>
                    <Card>
                        <Card.Body>
                            <h5>1. Додавання карт</h5>
                            <p>Натисніть кнопку "Додати карту" для вибору карти зі списку та додавання її на робоче поле.</p>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <h5>2. Переміщення карт</h5>
                            <p>Використовуйте кнопку "Перемістити карту" для переміщення карти по робочій області.</p>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <h5>3. Перегляд зворотного боку</h5>
                            <p>Натисніть кнопку "Перегорнути карту", щоб побачити зворотний бік карти.</p>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <h5>4. Збереження роботи</h5>
                            <p>Натисніть кнопку "Зберегти роботу" для збереження поточного стану карт.</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default HowToUse;
