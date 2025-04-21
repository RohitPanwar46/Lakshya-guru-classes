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
    <div className=" text-[#001033]  bg-[#FDFEFE] min-h-[100vh]">
      <Navbar/>
      <div className="flex justify-between gap-15 mx-40 items-center mt-20">
        <div className=" text-[40px] mb-20">
          <p className={montserrat.className}>I am <span className="text-[#263692] ">Dinesh</span></p>
          <p className={montserrat.className}>Qualifications - BSC in Mathematic, B.ED and lot of experience in exam like exam1, exam2 and exam3 </p>
          <div className="flex gap-2">
          <button className="outline-[#263692] outline-1 hover:outline-[#4e67f7] hover:bg-[#4e67f7] hover:text-[#ffffff] text-[#263692] cursor-pointer rounded-full px-5 mt-8 py-3 text-[16px]"><span className={montserrat500.className}>Learn More</span></button>
          <button className="bg-[#263692] hover:bg-[#4e67f7] cursor-pointer rounded-full text-[#ffffff] px-5 mt-8 py-3 text-[16px]"><span className={montserrat500.className}>Join Us</span></button>
          </div>
        </div>
        <Image className="rounded-xl" height={350} width={350} src="/assets/photos/dinesh.jpg" alt="" />
      </div>
      <Card/>
    </div>
  );
}
