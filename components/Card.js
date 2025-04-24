'use client'
import { motion } from "framer-motion";

const Card = () => {
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className='cards flex md:flex-row flex-col items-center justify-center gap-8 px-6 sm:px-10 md:px-20 lg:px-40 pb-20'>
      {[1, 2, 3].map((index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="animate-card w-80 max-w-sm bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 md:p-8 border-l-4 border-[#4F46E5] hover:border-[#263692] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-10"></div>
          
          <h1 className="text-xl font-semibold text-gray-800 mb-4">
            📚 Get Our Running or Upcoming Course Details
          </h1>
          
          <div className="details text-gray-600 text-base mb-2">
            {index === 1 && "4th Grade Teacher Vacancy Preparation"}
            {index === 2 && "Special Batch for Rajasthan Police Admission"}
            {index === 3 && "Whole Preparation of BSTC (Pre D.El.Ed.)"}
          </div>
          
          <div className="date text-sm text-gray-500 mb-6">
            📅 Starts on: <span className="font-medium">01 May 2025</span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full cursor-pointer flex items-center justify-center gap-2 bg-gradient-to-r from-[#263692] to-[#4F46E5] text-white px-4 py-3 rounded-full hover:bg-gradient-to-l transition-all duration-300"
          >
            View Details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </motion.button>
        </motion.div>
      ))}
    </div>
  )
}

export default Card