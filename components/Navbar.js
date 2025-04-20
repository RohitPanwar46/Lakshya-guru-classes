import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='flex bg-[#d400ff] text-[#00eeff] justify-between items-center px-5 py-2'>
      <div className="logo text-xl font-extrabold font-serif">Lakshya Guru Classes</div>
      <ul className='flex gap-5'>
        <li>Home</li>
        <li>Classes</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </div>
  )
}

export default Navbar
