import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css'; // Import the updated CSS file

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="NavbarContainer">
      <div className="NavbarContent">
        {/* Logo */}
        <div className="logo">AspenCask</div>

        {/* Mobile Menu Button */}
        <button
          className="MobileMenuButton"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links Container */}
        <div className={`NavItemsContainer ${isOpen ? 'isOpen' : ''}`}>
          <a className="NavItem" href="#home">Home</a>
          <a className="NavItem" href="#about">About</a>
          <a className="NavItem" href="#services">Services</a>
          <a className="NavItem" href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
