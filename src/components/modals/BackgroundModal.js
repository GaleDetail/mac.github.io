import React from 'react';
import { Modal, InputGroup, FormControl, Image, Pagination, Dropdown, Button } from 'react-bootstrap';
import '../../styles/BackgroundModal.css'; // Імплементуйте стилі для BackgroundModal тут

const BackgroundModal = ({
                             show,
                             handleClose,
                             searchQuery,
                             setSearchQuery,
                             currentBackgrounds,
                             handleBackgroundSelection,
                             currentPage,
                             totalPages,
                             handlePageChange,
                             itemsPerPage,
                             setItemsPerPage,
                             setCurrentPage // Додано пропс для скидання сторінки
                         }) => {
    return (
        <Modal show={show} onHide={handleClose}>
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
                                src={`${process.env.PUBLIC_URL}/static/images/${bg.src}`}
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
                            {[3, 6, 9, 12].map(num => (
                                <Dropdown.Item key={num} onClick={() => {
                                    setItemsPerPage(num);
                                    setCurrentPage(1); // Скидання на першу сторінку при зміні кількості елементів на сторінці
                                }}>{num}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Закрити
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default BackgroundModal;
