import React from 'react';
import Draggable from 'react-draggable';
import '../../styles/CardContainer.css';

const CardContainer = ({ cards, images }) => {
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
