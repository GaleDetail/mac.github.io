import React, { useState } from 'react';
import Draggable from 'react-draggable'; // React Draggable library for dragging functionality

const MovableImage = ({ src, id, onRemove }) => {
    return (
        <Draggable>
            <div className="movable-image" style={{ position: 'absolute' }}>
                <img src={src} alt="Movable" />
                <button onClick={() => onRemove(id)} className="remove-image-btn">×</button>
            </div>
        </Draggable>
    );
};

export default MovableImage;
