import Image from "next/image";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";


export default function Home() {
  return (
    <div className=" text-[#001033] bg-[#FDFEFE] min-h-[100vh]">
      <Navbar/>
      <div className="flex justify-between gap-15 mx-20 items-center mt-26">
        <div className="font-bold  text-3xl mb-20">
          <p>My name</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis id hic deserunt iste inventore beatae harum tempore veniam illum earum et necessitatibus facilis repellat, dolore, eveniet, minus commodi laudantium rerum?</p>
        </div>
        <Image className="rounded-xl" height={350} width={350} src="/assets/photos/dinesh.jpg" alt="" />
      </div>
      <Card/>
    </div>
  );
}
