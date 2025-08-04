// src/components/Footer.tsx
import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-copyright">&copy; {new Date().getFullYear()} Muscat Corp. All Rights Reserved.</p>
                <p className="footer-credits">Designed with ❤️ in Muscat</p>
            </div>
        </footer>
    );
}

export default Footer;
export {};