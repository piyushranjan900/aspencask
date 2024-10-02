import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import '../styles/ContactSection.css';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, message });
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-700 text-white py-16 px-4 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h1 className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500">
          Get In Touch
        </h1>
        <p className="text-lg mb-12 leading-relaxed">
          We're here to assist you. Drop us a message and we'll get back to you as soon as possible!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-semibold mb-6 text-indigo-300">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 rounded-md focus:ring-4 focus:ring-blue-500 outline-none"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 rounded-md focus:ring-4 focus:ring-blue-500 outline-none"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full px-4 py-3 bg-gray-800 rounded-md focus:ring-4 focus:ring-blue-500 outline-none"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md font-semibold hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info Section */}
        <motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="bg-gray-900 p-8 rounded-lg shadow-lg"
>
  <h2 className="text-3xl font-semibold mb-6 text-indigo-300">Contact Information</h2>
  <div className="space-y-6 text-gray-300">
    <div className="flex items-center">
      <FaEnvelope className="text-blue-500 mr-3" />
      <span>support@aspencask.com</span>
    </div>

    <div className="flex items-center">
      <FaMapMarkerAlt className="text-blue-500 mr-3" />
      <span>Near Raj Bagh Metro Station, Sahibabad, Uttar-Pradesh</span>
    </div>
  </div>

  <h3 className="text-xl font-semibold mt-10 text-indigo-300 mb-4">Schedule a Meeting</h3>
  <div className="relative">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setShowCalendar(!showCalendar)}
      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center"
    >
      <FaCalendarAlt className="mr-2" />
      {showCalendar ? 'Hide Calendar' : 'Show Calendar'}
    </motion.button>
    {showCalendar && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="absolute z-10 mt-4 bg-white rounded-lg shadow-lg"
      >
        <Calendar date={selectedDate} onChange={handleDateSelect} className="rounded-lg" />
      </motion.div>
    )}
  </div>
  {selectedDate && (
    <p className="mt-4 text-center text-white">
      Selected date: <span className="font-semibold">{selectedDate.toDateString()}</span>
    </p>
  )}

  {/* New Send Meeting Request Button */}
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => alert('Meeting request sent!')}
    className="w-full mt-6 bg-gradient-to-r from-green-600 to-teal-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
  >
    Send Meeting Request
  </motion.button>
</motion.div>

      </div>
    </div>
  );
}
