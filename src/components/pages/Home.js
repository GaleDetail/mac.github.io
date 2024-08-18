import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../common/Sidebar';
import CardContainer from '../card/CardContainer';
import BackgroundModal from '../modals/BackgroundModal';
import AddCardModal from '../modals/AddCardModal';
import '../../styles/Home.css';

const Home = () => {
    const [cards, setCards] = useState([]);
    const [showAddCardModal, setShowAddCardModal] = useState(false);
    const [showBackgroundModal, setShowBackgroundModal] = useState(false);
    const [backgroundImage, setBackgroundImage] = useState(`${process.env.PUBLIC_URL}/static/images/default-background.jpg`);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [backgrounds, setBackgrounds] = useState([]);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [images, setImages] = useState([]);

    // Додайте функцію toggleSidebar тут
    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/data/backgrounds.json`)
            .then(response => response.json())
            .then(data => {
                const bgList = Object.keys(data).map(name => ({
                    src: data[name],
                    name: name || data[name]
                }));
                setBackgrounds(bgList);
            });

        fetch(`${process.env.PUBLIC_URL}/data/images.json`)
            .then(response => response.json())
            .then(data => {
                const cats = Object.keys(data);
                setCategories(cats);
                setSelectedCategory(cats[0]);
                setImages(data[cats[0]]);
            });
    }, []);

    const openBackgroundModal = () => setShowBackgroundModal(true);
    const handleCardSelection = (card) => {
        if (card) {
            setCards([...cards, { ...card, x: 0, y: 0 }]); // Default position
            setShowAddCardModal(false);
        }
    };
    const handleBackgroundSelection = (bg) => {
        setBackgroundImage(`${process.env.PUBLIC_URL}/static/images/${bg}`);
        setShowBackgroundModal(false);
    };
    const filteredBackgrounds = backgrounds.filter(bg =>
        bg.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentBackgrounds = filteredBackgrounds.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(filteredBackgrounds.length / itemsPerPage);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        fetch(`${process.env.PUBLIC_URL}/data/images.json`)
            .then(response => response.json())
            .then(data => setImages(data[category]));
    };

    return (
        <Container fluid className="home-container">
            <Sidebar
                isCollapsed={isSidebarCollapsed}
                toggleSidebar={toggleSidebar}
                openBackgroundModal={openBackgroundModal}
                categories={categories}
                selectedCategory={selectedCategory}
                onCategorySelect={handleCategorySelect}
            />
            <Row className="content">
                <Col className={`main-area ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
                    <CardContainer cards={cards} setCards={setCards} images={images} />
                </Col>
            </Row>
            <AddCardModal
                show={showAddCardModal}
                handleClose={() => setShowAddCardModal(false)}
                handleCardSelection={handleCardSelection}
            />
            <BackgroundModal
                show={showBackgroundModal}
                handleClose={() => setShowBackgroundModal(false)}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                currentBackgrounds={currentBackgrounds}
                handleBackgroundSelection={handleBackgroundSelection}
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageChange={setCurrentPage}
                itemsPerPage={itemsPerPage}
                setItemsPerPage={setItemsPerPage}
            />
        </Container>
    );
};

export default Home;
