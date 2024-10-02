'use client';

import { motion } from 'framer-motion';
import { Code, Server, Smartphone, Users } from 'lucide-react';
import '../styles/ServicesSection.css';


interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}

const services: Service[] = [
  { icon: <Code className="w-8 h-8" />, title: "Custom Software Development", description: "Tailored solutions to meet your unique business needs" },
  { icon: <Server className="w-8 h-8" />, title: "Cloud Solutions", description: "Scalable and secure cloud infrastructure for your applications" },
  { icon: <Smartphone className="w-8 h-8" />, title: "Mobile App Development", description: "Engaging mobile experiences for iOS and Android platforms" },
  { icon: <Users className="w-8 h-8" />, title: "IT Consulting", description: "Expert advice to guide your digital transformation journey" },
];

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="mb-24"
    >
      <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-8 text-center">
        Innovating Your Digital Future
      </motion.h2>
      <motion.p variants={itemVariants} className="text-xl text-center mb-12 max-w-3xl mx-auto">
        At TechNova Solutions, we're passionate about leveraging cutting-edge technology to solve complex business challenges. Our team of expert developers and consultants are dedicated to delivering innovative, scalable, and secure software solutions that drive your success.
      </motion.p>
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-blue-400 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ServicesSection;
