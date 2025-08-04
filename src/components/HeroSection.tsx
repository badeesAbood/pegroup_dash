// src/components/HeroSection.tsx
import React from 'react';

function HeroSection() {
    return (
        <section className="hero-section" style={{ backgroundImage: "url('https://placehold.co/1600x900/003366/FFFFFF?text=Modern+Muscat+Skyline')" }}>
            <div className="hero-overlay" />
            <div className="hero-content">
                <h2 className="hero-title">Innovative Solutions for a Digital Age</h2>
                <p className="hero-description">
                    Based in the heart of Muscat, we blend cutting-edge technology with local expertise to drive business growth.
                </p>
                <a href="#contact" className="hero-button">
                    Get in Touch
                </a>
            </div>
        </section>
    );
}

export default HeroSection;
export {};