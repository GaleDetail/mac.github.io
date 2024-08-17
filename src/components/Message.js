import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';

const Message = ({ message, variant, onClose }) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        // Автоматично закриваємо повідомлення через 3 секунди
        const timer = setTimeout(() => {
            setShow(false);
            onClose(); // Закриваємо повідомлення також
        }, 3000);

        // Очистка таймера при демонтажі компонента
        return () => clearTimeout(timer);
    }, [onClose]);

    if (!show) return null;

    return (
        <Alert variant={variant} onClose={() => setShow(false)} dismissible>
            {message}
        </Alert>
    );
};

export default Message;
