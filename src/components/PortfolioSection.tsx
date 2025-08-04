// src/components/PortfolioSection.tsx
import React from 'react';
import PortfolioCard from './ProtofiolioCard';

function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Our Work</h3>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <PortfolioCard
            imageUrl="https://placehold.co/600x400/3498DB/FFFFFF?text=Project+Alpha"
            title="Oman Tourism App"
            category="Mobile Development"
          />
          <PortfolioCard
            imageUrl="https://placehold.co/600x400/2ECC71/FFFFFF?text=Project+Beta"
            title="National Bank Portal"
            category="Web Development"
          />
          <PortfolioCard
            imageUrl="https://placehold.co/600x400/E74C3C/FFFFFF?text=Project+Gamma"
            title="Sohar Industrial Branding"
            category="Corporate Branding"
          />
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
export {};