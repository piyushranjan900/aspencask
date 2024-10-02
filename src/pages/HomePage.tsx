import React from 'react';
import { homeContent } from '../content/HomeContent';
import { aboutContent } from '../content/AboutContent';
import { servicesContent } from '../content/ServicesContent';
import { contactContent } from '../content/ContactContent';
import AboutUsAnimation from './aboutUsAnimation';
import Service from './ServicesSection';
import Contact from './Contactpage';
import Fotter from './fotterpage';


// Importing CSS files
import '../styles/HomeSection.css';
import '../styles/AboutSection.css';
import '../styles/ServicesSection.css';
import '../styles/ContactSection.css';

// Importing the image correctly
import heroImage from '../assets/hero.png'; // Correct import of image

const HomePage: React.FC = () => {
  return (
    <>
      {/* Home Section with Image */}
      <section id="home">
      <div className="content">
    <h1>Welcome to AspenCask</h1>
    <h2>Empowering Your Journey</h2>
    <p>Innovative solutions for your business.</p>
</div>


</section>



  
    <section id="about">
      <AboutUsAnimation />
    </section>
  


      {/* Services Section */}
      <section id="services">
      <Service />
      </section>

      {/* Contact Section */}
      <section id="contact">
      <Contact />
      </section>

      <section id="Footer">
      <Fotter />
      </section>
    </>
  );
};

export default HomePage;
