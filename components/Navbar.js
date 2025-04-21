import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='flex shadow-blue-950 shadow anton bg-[#4e61d0] text-[#F5F5F5] justify-between items-center px-5 py-2'>
      <div className="logo text-xl font-extrabold cursor-pointer ">Lakshya🎯</div>
      <ul className='flex gap-5'>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>Classes</li>
        <li className='cursor-pointer'>Contact</li>
        <li className='cursor-pointer'>About</li>
      </ul>
    </div>
  )
}

export default Navbar
