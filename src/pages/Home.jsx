import React from 'react';
import './styles/main.css';

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to Homelab Diagnosis</h1>
                <p>Your trusted partner in home lab testing and diagnosis.</p>
            </header>
            <section className="home-features">
                <h2>Our Services</h2>
                <ul>
                    <li>Comprehensive Lab Tests</li>
                    <li>Fast and Reliable Results</li>
                    <li>Expert Consultation</li>
                    <li>Home Sample Collection</li>
                </ul>
            </section>
            <section className="home-info">
                <h2>Why Choose Us?</h2>
                <p>At Homelab Diagnosis, we prioritize your health and convenience. Our state-of-the-art technology ensures accurate results delivered to your doorstep.</p>
            </section>
            <footer className="home-footer">
                <p>&copy; {new Date().getFullYear()} Homelab Diagnosis. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;