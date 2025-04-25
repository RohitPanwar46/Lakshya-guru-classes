'use client'
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-montserrat'
});

// Teacher's Information (Bilingual)
const teacherInfo = {
  name: "Dinesh Parihar",
  qualifications: "B.Sc. Mathematics | B.Ed.",
  location: "Near Sanskrit School, Sadawata", // संस्कृत स्कूल के पास, सदावता
  contact: "8290165996 | 8003023077",
  email: "dinesh829016@gmail.com"
};

// Animation Variants (Same as Home Page)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const slideInLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

export default function About() {
  return (
    <>
    <Navbar/>
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`${montserrat.variable} font-sans bg-gradient-to-br from-[#FDFEFE] to-[#f0f5ff] min-h-screen py-12 px-6 sm:px-10 md:px-20 lg:px-40`}
    >
      {/* Main Heading */}
      <motion.h1
        variants={slideInLeft}
        className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#263692] mb-8 text-center"
      >
        About Lakshya Guru Classes
      </motion.h1>

      {/* Teacher's Card */}
      <motion.div
        variants={cardVariants}
        className="animate-card bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 md:p-8 border-l-4 border-[#4F46E5] mb-8"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-10"></div>
        <h2 className="text-2xl font-semibold text-[#263692] mb-4">
          Meet Your Mentor 🎓
        </h2>
        <div className="space-y-4 text-gray-700">
          <p className="flex items-center gap-2">
            <span className="font-medium">Name:</span>
            {teacherInfo.name}
          </p>
          <p className="flex items-center gap-2">
            <span className="font-medium">Qualifications:</span>
            {teacherInfo.qualifications}
          </p>
          <p className="flex items-center gap-2">
            📍 <span className="font-medium">Location:</span>
            {teacherInfo.location}
          </p>
          <p className="flex items-center gap-2">
            📞 <span className="font-medium">Contact:</span>
            {teacherInfo.contact}
          </p>
          <p className="flex items-center gap-2">
            📧 <span className="font-medium">Email:</span>
            <a href={`mailto:${teacherInfo.email}`} className="text-[#4F46E5] hover:underline">
              {teacherInfo.email}
            </a>
          </p>
        </div>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        variants={cardVariants}
        className="animate-card bg-gradient-to-r from-[#263692] to-[#4F46E5] text-white rounded-2xl shadow-lg p-6 md:p-8 mt-8"
      >
        <h2 className="text-2xl font-semibold mb-4">Our Mission 🌟</h2>
        <div className="space-y-4 text-lg">
          <p>✅ Empower rural students with quality education</p>
          <p>✅ Personalized attention for every learner</p>
          <p>✅ Affordable exam preparation solutions</p>
          <p>✅ Create confident government job aspirants</p>
        </div>
      </motion.div>

      {/* Teaching Philosophy */}
      <motion.div
        variants={cardVariants}
        className="animate-card bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 md:p-8 border-l-4 border-[#4F46E5] mt-8"
      >
        <h2 className="text-2xl font-semibold text-[#263692] mb-4">
          Teaching Methodology 🧑🏫
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <p className="flex items-center gap-2 text-gray-800">
              <span className="text-[#4F46E5]">✔️</span> Concept-focused lectures
            </p>
            <p className="flex items-center gap-2 text-gray-800">
              <span className="text-[#4F46E5]">✔️</span> Weekly progress reports
            </p>
            <p className="flex items-center gap-2 text-gray-800">
              <span className="text-[#4F46E5]">✔️</span> Bilingual instruction
            </p>
          </div>
          <div className="space-y-3">
            <p className="flex items-center gap-2 text-gray-800">
              <span className="text-[#4F46E5]">✔️</span> Mock test series
            </p>
            <p className="flex items-center gap-2 text-gray-800">
              <span className="text-[#4F46E5]">✔️</span> Doubt clearing sessions
            </p>
            <p className="flex items-center gap-2 text-gray-800">
              <span className="text-[#4F46E5]">✔️</span> Parent-teacher meetings
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
    </>
  );
}