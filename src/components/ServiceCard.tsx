// src/components/ServiceCard.tsx
import React from 'react';
import { ReactNode } from 'react';

interface ServiceCardProps {
    icon: ReactNode;
    title: string;
    description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
    return (
        <div className="service-card">
            <div className="service-card-icon-container">
                {icon}
            </div>
            <h4 className="service-card-title">{title}</h4>
            <p className="service-card-description">{description}</p>
        </div>
    );
}

export default ServiceCard;
export {};