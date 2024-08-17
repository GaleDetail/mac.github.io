import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const AddCardModal = ({ show, handleClose, handleCardSelection }) => {
    return (
        <Modal show={show} onHide={handleClose}>
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
                <Button variant="secondary" onClick={handleClose}>
                    Закрити
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddCardModal;
