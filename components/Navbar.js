import React from 'react'
import Image from 'next/image'
import { Anton } from 'next/font/google'

const anton = Anton({
  subsets: ['latin'],
  weight: '400'
})

const Navbar = () => {
  return (
    <div className='flex shadow-blue-950 shadow sticky top-0  bg-[#4e61d0] text-[#F5F5F5] justify-between items-center px-5 py-2'>
      <div className="logo text-xl font-extrabold cursor-pointer">Lakshya🎯</div>
      <ul className='flex gap-5'>
        <li className='cursor-pointer font-semibold'>Home</li>
        <li className='cursor-pointer font-semibold'>Classes</li>
        <li className='cursor-pointer font-semibold'>Contact</li>
        <li className='cursor-pointer font-semibold'>About</li>
      </ul>
    </div>
  )
}

export default Navbar
