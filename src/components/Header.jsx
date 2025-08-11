import React from 'react';
import './Header.css'; // Assuming you will create a Header.css for specific styles

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Homelab Diagnosis</h1>
            </div>
            <nav className="navbar">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;