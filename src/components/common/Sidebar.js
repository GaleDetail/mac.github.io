import React from 'react';
import { Button, Col } from 'react-bootstrap';

const Sidebar = ({ addCard, removeAllCards, saveWork, exportResults, openBackgroundModal }) => {
    return (
        <Col md={3} className="sidebar">
            <Button variant="primary" className="w-100 mt-3 btn-sm" onClick={addCard}>Додати карту</Button>
            <Button variant="danger" className="w-100 mt-2 btn-sm" onClick={removeAllCards}>Видалити всі карти</Button>
            <Button variant="success" className="w-100 mt-2 btn-sm" onClick={saveWork}>Зберегти роботу</Button>
            <Button variant="info" className="w-100 mt-2 btn-sm" onClick={exportResults}>Експортувати результати</Button>
            <Button variant="secondary" className="w-100 mt-2 btn-sm" onClick={openBackgroundModal}>Змінити фон</Button>
        </Col>
    );
};

export default Sidebar;
