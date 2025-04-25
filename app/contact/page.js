'use client'
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <Navbar/>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-[#FDFEFE] to-[#f0f5ff] py-12 px-6 sm:px-10 md:px-20 lg:px-40"
    >
      <motion.h1 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#263692] mb-8 text-center"
      >
        Contact Us
      </motion.h1>

      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-l-4 border-[#4F46E5] max-w-2xl mx-auto"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
        <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full text-gray-800 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/50 transition-all"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full text-gray-800 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/50 transition-all"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full text-gray-800 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/50 transition-all"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full text-gray-800 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/50 transition-all"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 rounded-full text-white font-medium transition-all ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-[#263692] to-[#4F46E5] hover:from-[#4F46E5] hover:to-[#263692]'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>

          {submitStatus === 'success' && (
            <div className="p-4 bg-green-100 text-green-700 rounded-lg">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="p-4 bg-red-100 text-red-700 rounded-lg">
              Oops! Something went wrong. Please try again later.
            </div>
          )}
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-l-4 border-[#4F46E5] max-w-2xl mx-auto mt-8"
      >
        <h2 className="text-2xl font-semibold text-[#263692] mb-4">Direct Contact</h2>
        <div className="space-y-3 text-gray-700">
          <p className="flex items-center gap-2">
            📞 <span className="font-medium">Phone:</span> 8290165996 | 8003023077
          </p>
          <p className="flex items-center gap-2">
            📧 <span className="font-medium">Email:</span> dinesh829016@gmail.com
          </p>
          <p className="flex items-center gap-2">
            📍 <span className="font-medium">Address:</span> Near Sanskrit School, Sadawata
          </p>
        </div>
      </motion.div>
    </motion.div>
    </>
  );
}