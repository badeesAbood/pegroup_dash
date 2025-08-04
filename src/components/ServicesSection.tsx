// src/components/ServicesSection.tsx
import React from 'react';
import ServiceCard from './ServiceCard';
import { Zap, Briefcase, Users } from 'lucide-react';

function ServicesSection() {
    return (
        <section id="services" className="services-section">
            <div className="services-container">
                <div className="services-title-container">
                    <h3 className="services-title">Our Services</h3>
                    <div className="services-divider"></div>
                </div>
                <div className="services-grid">
                    <ServiceCard
                        icon={<Zap size={40} className="service-card-icon" />}
                        title="Digital Transformation"
                        description="We help businesses modernize their operations with cloud solutions, automation, and data analytics."
                    />
                    <ServiceCard
                        icon={<Briefcase size={40} className="service-card-icon" />}
                        title="Corporate Branding"
                        description="From logo design to complete brand identity, we create compelling brands that resonate with your audience."
                    />
                    <ServiceCard
                        icon={<Users size={40} className="service-card-icon" />}
                        title="Custom Software Dev"
                        description="Tailor-made software solutions designed to meet your unique business challenges and objectives."
                    />
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;
export {};