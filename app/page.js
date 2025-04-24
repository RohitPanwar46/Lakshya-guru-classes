import Image from "next/image";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '600',
})

const montserrat500 = Montserrat({
  subsets: ['latin'],
  weight: '500',
})

export default function Home() {
  return (
    <div className="text-[#001033] bg-[#FDFEFE] min-h-[100vh]">
      <Navbar />

      <div className="flex flex-col-reverse lg:flex-row justify-between gap-8 lg:gap-15 mx-6 sm:mx-10 md:mx-20 lg:mx-40 items-center mt-10 lg:mt-20">
        <div className="text-[26px] sm:text-[32px] lg:text-[40px] mb-10 lg:mb-20 text-center lg:text-left">
          <p className={montserrat.className}>
            I am <span className="text-[#263692]">Dinesh</span>
          </p>
          <p className={`${montserrat.className} mt-4 text-[16px] sm:text-[18px]`}>
            Qualifications - BSC in <span className="text-[#263692]">Mathematics</span>, B.ED
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="outline-[#263692] outline-1 hover:outline-[#4F46E5] hover:bg-[#4F46E5] hover:text-white text-[#263692] cursor-pointer rounded-full px-5 mt-6 py-3 text-[14px] sm:text-[16px]">
              <span className={montserrat500.className}>Learn More</span>
            </button>
            <button className="bg-[#263692] hover:bg-[#4F46E5] cursor-pointer rounded-full text-white px-5 mt-2 sm:mt-6 py-3 text-[14px] sm:text-[16px]">
              <span className={montserrat500.className}>Join Us</span>
            </button>
          </div>
        </div>

        <Image
          className="rounded-xl w-[250px] sm:w-[300px] md:w-[350px] h-auto"
          height={350}
          width={350}
          src="/assets/photos/dinesh.jpg"
          alt="Dinesh"
        />
      </div>

      <Card />

      <div className="px-6 sm:px-10 md:px-20 lg:px-40 py-14">
  <h2 className={`${montserrat.className} text-2xl sm:text-3xl lg:text-4xl font-semibold text-center text-[#263692] mb-10`}>
    Lakshya Guru Classes
  </h2>

  <p className="text-center text-lg mb-4 font-medium">
    Turning rural dreams into reality — Government exam preparation in your village!
  </p>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
    <div className="space-y-4">
      <h3 className={`${montserrat500.className} text-xl text-[#263692]`}>Courses Offered:</h3>
      <ul className="list-disc list-inside space-y-1 text-[16px]">
        <li>Complete preparation for Class IV Government Jobs</li>
        <li>Special batch for Rajasthan Police Recruitment</li>
        <li>Full guidance for BSTC (Pre D.El.Ed.) Exam</li>
      </ul>

      <h3 className={`${montserrat500.className} text-xl text-[#263692] mt-6`}>Why choose us:</h3>
      <ul className="list-disc list-inside space-y-1 text-[16px]">
        <li>Easy-to-understand teaching style</li>
        <li>Weekly mock tests and exam practice</li>
        <li>Doubt-clearing sessions every week</li>
        <li>Regular reports for parents</li>
        <li>Affordable fees for village families</li>
        <li>Limited seats with personal attention</li>
        <li>7-day free demo classes</li>
      </ul>
    </div>

    <div className="space-y-4">
      <h3 className={`${montserrat500.className} text-xl text-[#263692]`}>Lakshya Star Program:</h3>
      <ul className="list-disc list-inside space-y-1 text-[16px]">
        <li>Special guidance for hardworking students</li>
        <li>Scholarship opportunities</li>
        <li>Monthly rewards for toppers</li>
        <li>Exam-like environment & practice</li>
        <li>Special fee discounts for girls</li>
      </ul>

      <div className="mt-6 text-[16px]">
        <p><strong className="text-[#263692]">Instructor:</strong> Dinesh Parihar (B.Sc. Mathematics | B.Ed.)</p>
        <p><strong>Location:</strong> Near Sanskrit School, Sadawata</p>
        <p><strong>Contact:</strong> 8290165996 | 8003023077</p>
        <p><strong>Email:</strong> dinesh829016@gmail.com</p>
        <p className="mt-2 font-semibold">Your village. Your children. Your dreams — <span className="text-[#263692]">Lakshya Guru Classes</span>.</p>
      </div>
    </div>
  </div>
</div>

      
    </div>
  );
}
