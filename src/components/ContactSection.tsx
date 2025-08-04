// src/components/ContactSection.tsx
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function ContactSection() {
  return (
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-title-container">
            <h3 className="contact-title">Contact Us</h3>
            <div className="contact-divider"></div>
            <p className="contact-description">Have a project in mind? We'd love to hear from you.</p>
          </div>
          <div className="contact-form-grid">
            <div className="contact-form-column">
              <div className="contact-location-details">
                <h4 className="contact-location-title">Our Location</h4>
                <div className="contact-map-container">
                  {/* In a real app, you'd embed a Google Map here */}
                  <img src="https://placehold.co/600x400/E2E8F0/334155?text=Map+of+Muscat" alt="Map of Muscat" className="contact-map-image"/>
                </div>
                <div className="contact-details-list">
                  <div>
                    <MapPin className="contact-details-icon" />
                    <span>123 Knowledge Oasis, Al Khoudh, Muscat, Sultanate of Oman</span>
                  </div>
                  <div>
                    <Mail className="contact-details-icon" />
                    <span>contact@muscatcorp.om</span>
                  </div>
                  <div>
                    <Phone className="contact-details-icon" />
                    <span>+968 24 123 456</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form-column">
              <div className="contact-form">
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="contact-form-label">Name</label>
                    <input type="text" id="name" className="contact-form-input" placeholder="Your Name" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="contact-form-label">Email</label>
                    <input type="email" id="email" className="contact-form-input" placeholder="your.email@example.com" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="contact-form-label">Message</label>
                    <textarea id="message" rows={4} className="contact-form-textarea" placeholder="How can we help you?"></textarea>
                  </div>
                  <button type="submit" className="contact-form-button">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default ContactSection;
export {};