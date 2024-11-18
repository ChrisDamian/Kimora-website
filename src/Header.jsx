import React, { useState } from 'react';
import './Header.css';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="header-content">
                <h1>Kimora and Fraser Recruitment for Drivers</h1>
                <button onClick={toggleMenu} className="menu-toggle">
                    {isOpen ? 'Close Menu' : 'Open Menu'}
                </button>
                <nav className={`nav ${isOpen ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#Services">Services</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
