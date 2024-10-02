'use client';

import { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/AboutSection.css';

interface Testimonial {
  id: number;
  text: string;
  author: string;
}

const testimonials: Testimonial[] = [
  { id: 1, text: "Their innovative solutions have revolutionized our business processes.", author: "Emma Thompson, CEO of InnovateTech" },
  { id: 2, text: "The team's expertise and dedication to our project were truly exceptional.", author: "Michael Chen, CTO of FutureSoft" },
  { id: 3, text: "We've seen a significant boost in productivity thanks to their software.", author: "Sarah Johnson, Operations Manager at SwiftCorp" },
];

const CountUp = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(end * percentage));
      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}</span>;
};

export default function Component() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

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
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <main className="container mx-auto px-4 py-16">
        
        {/* Our Impact Section */}
        <motion.section
          ref={ref} // Attach the ref here for visibility tracking
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mb-24"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12 text-center">
            Our Impact
          </motion.h2>
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">
                <CountUp end={5} />+
              </div>
              <p className="text-xl">Satisfied Clients</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">
                <CountUp end={10} />+
              </div>
              <p className="text-xl">Projects Completed</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">
                <CountUp end={20} />+
              </div>
              <p className="text-xl">Expert Developers</p>
            </div>
          </motion.div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mb-24"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12 text-center">
            What Our Clients Say
          </motion.h2>
          <motion.div variants={itemVariants} className="relative bg-gray-800 p-8 rounded-lg shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-xl mb-4 italic">&ldquo;{testimonials[currentTestimonial].text}&rdquo;</p>
                <p className="text-right font-semibold">- {testimonials[currentTestimonial].author}</p>
              </motion.div>
            </AnimatePresence>
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col">
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col">
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-8 text-center">
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-center mb-12">
            Let's discuss how our innovative solutions can drive your success.
          </motion.p>
          <motion.div variants={itemVariants} className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-600 transition duration-300"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
}
