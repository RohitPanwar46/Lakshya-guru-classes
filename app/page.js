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
            Qualifications - BSC in Mathematics, B.ED and lots of experience in exams like exam1, exam2 and exam3
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
    </div>
  );
}
