import React from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import '../../styles/Sidebar.css';

const Sidebar = ({
                     isCollapsed,
                     toggleSidebar,
                     openBackgroundModal,
                     categories,
                     selectedCategory,
                     onCategorySelect
                 }) => {
    return (
        <>
            <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
                <div className="sidebar-content">
                    <Dropdown>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            {selectedCategory || 'Select Category'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {categories.map(cat => (
                                <Dropdown.Item
                                    key={cat}
                                    onClick={() => onCategorySelect(cat)}
                                >
                                    {cat}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button onClick={openBackgroundModal}>Change Background</Button>
                </div>
            </div>
            <Button onClick={toggleSidebar} className="toggle-sidebar-btn">
                {isCollapsed ? '☰' : '×'}
            </Button>
        </>
    );
};

export default Sidebar;
