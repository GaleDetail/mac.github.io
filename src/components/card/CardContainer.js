import React from 'react';
import { Button } from 'react-bootstrap';
import '../../styles/CardContainer.css'; // Якщо є окремі стилі для цього компонента

const CardContainer = ({ cards, setCards }) => {
    return (
        <div className>
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
    );
};

export default CardContainer;
