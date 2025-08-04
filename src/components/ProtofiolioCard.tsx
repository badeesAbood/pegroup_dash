// src/components/PortfolioCard.tsx
import React from 'react';

interface PortfolioCardProps {
    imageUrl: string;
    title: string;
    category: string;
}

function PortfolioCard({ imageUrl, title, category }: PortfolioCardProps) {
    return (
        <div className="portfolio-card">
            <div className="portfolio-card-image-container">
                <img src={imageUrl} alt={title} className="portfolio-card-image" />
                <div className="portfolio-card-overlay">
                    <h4 className="portfolio-card-title-overlay">{title}</h4>
                </div>
            </div>
            <div className="portfolio-card-content">
                <h5 className="portfolio-card-title">{title}</h5>
                <p className="portfolio-card-category">{category}</p>
            </div>
        </div>
    );
}

export default PortfolioCard;
export {};