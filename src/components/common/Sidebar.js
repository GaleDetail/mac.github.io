import React from 'react';
import { Button } from 'react-bootstrap';
import '../../styles/Sidebar.css';

const Sidebar = ({ isCollapsed, toggleSidebar, addCard, removeAllCards, saveWork, exportResults, openBackgroundModal }) => {
    return (
        <>
            <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
                <div className="sidebar-content">
                    <Button onClick={addCard}>Add Card</Button>
                    <Button onClick={removeAllCards}>Remove All Cards</Button>
                    <Button onClick={saveWork}>Save Work</Button>
                    <Button onClick={exportResults}>Export Results</Button>
                    <Button onClick={openBackgroundModal}>Change Background</Button>
                </div>
            </div>
            <Button onClick={toggleSidebar} className="toggle-sidebar-btn">
                {isCollapsed ? '☰' : '×'} {/* Стрілка для відкриття/закриття сайдбара */}
            </Button>
        </>
    );
};

export default Sidebar;
