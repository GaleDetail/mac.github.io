import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import '../../styles/CardContainer.css';

const CardContainer = ({ cards, setCards, images, isSidebarCollapsed }) => {
    const [containerWidth, setContainerWidth] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);

    useEffect(() => {
        // Оновлюємо розмір контейнера при його зміні
        const updateContainerSize = () => {
            const container = document.querySelector('.main-area');
            if (container) {
                setContainerWidth(container.offsetWidth);
                setContainerHeight(container.offsetHeight);
            }
        };

        window.addEventListener('resize', updateContainerSize);
        updateContainerSize();

        return () => window.removeEventListener('resize', updateContainerSize);
    }, []);

    useEffect(() => {
        // Перерахунок координат картинок при зміні стану сайдбару
        const adjustCardPositions = () => {
            setCards(prevCards =>
                prevCards.map(card => ({
                    ...card,
                    x: (card.x / containerWidth) * document.querySelector('.main-area').offsetWidth,
                    y: (card.y / containerHeight) * document.querySelector('.main-area').offsetHeight
                }))
            );
        };

        adjustCardPositions();
    }, [isSidebarCollapsed, containerWidth, containerHeight, setCards]);

    return (
        <div className="card-container">
            {cards.map((card, index) => (
                <Draggable key={index}>
                    <div className="card" style={{ position: 'absolute', top: card.y, left: card.x }}>
                        <img src={`${process.env.PUBLIC_URL}/static/images/${card.src}`} alt="card" />
                    </div>
                </Draggable>
            ))}
            {images.map((image, index) => (
                <Draggable key={index}>
                    <div className="image" style={{ position: 'absolute', top: image.y, left: image.x }}>
                        <img src={`${process.env.PUBLIC_URL}/static/images/${image.src}`} alt={image.name} />
                    </div>
                </Draggable>
            ))}
        </div>
    );
};

export default CardContainer;
