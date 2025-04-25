"use client"
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import { useEffect } from "react";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-montserrat'
});

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const slideInLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

const slideInRight = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cards = document.querySelectorAll('.animate-card');
      cards.forEach((card, index) => {
        if (card instanceof HTMLElement) {
          card.style.transitionDelay = `${index * 0.1}s`;
        }
      });
    }
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`${montserrat.variable} font-sans text-[#001033] bg-gradient-to-br from-[#FDFEFE] to-[#f0f5ff] min-h-[100vh]`}
    >
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-8 lg:gap-15 mx-6 sm:mx-10 md:mx-20 lg:mx-40 items-center mt-10 lg:mt-20">
        <motion.div
          variants={slideInLeft}
          className="text-[26px] sm:text-[32px] lg:text-[40px] mb-10 lg:mb-20 text-center lg:text-left"
        >
          <p className="font-semibold drop-shadow-lg">
            I am <span className="text-gradient bg-gradient-to-r from-[#263692] to-[#4F46E5] bg-clip-text text-transparent">Dinesh</span>
          </p>
          <p className="font-medium mt-4 text-[16px] sm:text-[18px] text-gray-600">
            Qualifications - BSC in <span className="font-semibold text-[#263692]">Mathematics</span>, B.ED
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href={"/about"}><motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-medium outline-[#263692] outline-1 hover:outline-[#4F46E5] hover:bg-gradient-to-r from-[#4F46E5] to-[#263692] hover:text-white text-[#263692] cursor-pointer rounded-full px-5 mt-6 py-3 text-[14px] sm:text-[16px] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Learn More
            </motion.button></Link>
            <Link href={"/contact"} ><motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-medium bg-gradient-to-r from-[#263692] to-[#4F46E5] hover:bg-gradient-to-l cursor-pointer rounded-full text-white px-5 mt-2 sm:mt-6 py-3 text-[14px] sm:text-[16px] shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Join Us
            </motion.button></Link>
          </div>
        </motion.div>

        <motion.div
          variants={slideInRight}
          className="relative overflow-hidden rounded-xl "
        >
          <Image
            height={350}
            width={350}
            className="object-cover hover:scale-105 transition-transform duration-300"
            
            src="/assets/photos/dinesh.jpg"
            alt="Dinesh"
          />
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="px-6 sm:px-10 md:px-20 lg:px-40 py-14 space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-center text-gradient bg-gradient-to-r from-[#263692] to-[#4F46E5] bg-clip-text text-transparent"
        >
          Lakshya Guru Classes
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-lg font-medium text-gray-600"
        >
          Turning rural dreams into reality — Government exam preparation in your village!
        </motion.p>

        {/* Courses Offered Card */}
        <motion.div
          variants={cardVariants}
          className="animate-card bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 md:p-8 border-l-4 border-[#4F46E5] hover:border-[#263692] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-10"></div>
          <h3 className="font-medium text-xl text-[#263692] mb-4">
            Courses Offered
          </h3>
          <ul className="list-disc list-inside space-y-2 text-[16px]">
            <li className="hover:text-[#4F46E5] transition-colors duration-200">Complete preparation for Class IV Government Jobs</li>
            <li className="hover:text-[#4F46E5] transition-colors duration-200">Special batch for Rajasthan Police Recruitment</li>
            <li className="hover:text-[#4F46E5] transition-colors duration-200">Full guidance for BSTC (Pre D.El.Ed.) Exam</li>
          </ul>
        </motion.div>

        {/* Student Features Card */}
        <motion.div
          variants={cardVariants}
          className="animate-card bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 md:p-8 border-l-4 border-[#4F46E5] hover:border-[#263692] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-10"></div>
          <h3 className="font-medium text-xl text-[#263692] mb-4">
            Student-Friendly Features
          </h3>
          <ul className="list-disc list-inside space-y-2 text-[16px]">
            <li className="hover:text-[#4F46E5] transition-colors duration-200">Easy-to-understand teaching style</li>
            <li className="hover:text-[#4F46E5] transition-colors duration-200">Weekly mock tests and exam practice</li>
            <li className="hover:text-[#4F46E5] transition-colors duration-200">Doubt-clearing sessions every week</li>
            <li className="hover:text-[#4F46E5] transition-colors duration-200">Regular reports for parents</li>
            <li className="hover:text-[#4F46E5] transition-colors duration-200">Affordable fees for village families</li>
            <li className="hover:text-[#4F46E5] transition-colors duration-200">Limited seats with personal attention</li>
            <li className="hover:text-[#4F46E5] transition-colors duration-200">7-day free demo classes</li>
          </ul>
        </motion.div>

        {/* Star Program Card */}
        <motion.div
          variants={cardVariants}
          className="animate-card bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 md:p-8 border-l-4 border-[#4F46E5] hover:border-[#263692] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-10"></div>
          <h3 className="font-medium text-xl text-[#263692] mb-4">
            Lakshya Star Program
          </h3>
          <ul className="list-disc list-inside space-y-2 text-[16px]">
            <li className="hover:text-[#4F46E5] transition-colors duration-200">Special guidance for hardworking students</li>
            <li className="hover:text-[#4F46E5] transition-colors duration-200">Scholarship opportunities</li>
            <li className="hover:text-[#4F46E5] transition-colors duration-200">Monthly rewards for toppers</li>
            <li className="hover:text-[#4F46E5] transition-colors duration-200">Exam-like environment & practice</li>
            <li className="hover:text-[#4F46E5] transition-colors duration-200">Special fee discounts for girls</li>
          </ul>
        </motion.div>

        {/* Contact Details Card */}
        <motion.div
          variants={cardVariants}
          className="animate-card bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 md:p-8 border-l-4 border-[#4F46E5] hover:border-[#263692] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-10"></div>
          <h3 className="font-medium text-xl text-[#263692] mb-4">
            Contact & Instructor Info
          </h3>
          <p className="text-[16px]"><strong className="text-[#263692]">Instructor:</strong> Dinesh Parihar (B.Sc. Mathematics | B.Ed.)</p>
          <p className="text-[16px]"><strong>Location:</strong> Near Sanskrit School, Sadawata</p>
          <p className="text-[16px]"><strong>Contact:</strong> 8290165996 | 8003023077</p>
          <p className="text-[16px]"><strong>Email:</strong> dinesh829016@gmail.com</p>
          <p className="mt-4 text-[16px] font-semibold">
            Your village. Your children. Your dreams — <span className="text-[#263692]">Lakshya Guru Classes</span>.
          </p>
        </motion.div>
      </div>

      <Card />
    </motion.div>
  );
}