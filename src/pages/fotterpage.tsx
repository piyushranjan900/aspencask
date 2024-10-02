import React from 'react';
import '../styles/fotterSection.css'; // Import CSS for the footer

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2>AspenCask</h2>
          <p>
          From concept to creation, development to deployment, we guide you at every step to craft innovative solutions tailored for your business needs.
          </p>
        </div>
        <div className="footer-right">
          <h3>Contact</h3>
          <p>Mail: support@aspencask.com</p>
          <p>Call: +91 9608674820</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
