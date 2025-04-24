"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="sticky top-0 z-50 shadow shadow-blue-950 bg-[#4e61d0] text-[#F5F5F5] px-5 py-3">
      <div className="flex justify-between items-center relative">
        <div className="text-xl font-extrabold cursor-pointer">Lakshya 🎯</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-semibold">
          <Link href={"/"}><li className="cursor-pointer">Home</li></Link>
          <Link href={"/classes"}><li className="cursor-pointer">Classes</li></Link>
          <Link href={"/contact"}><li className="cursor-pointer">Contact</li></Link>
          <Link href={"/about"}><li className="cursor-pointer">About</li></Link>
        </ul>

        {/* Mobile Dropdown Toggle */}
        <div className="md:hidden relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="flex items-center gap-1 font-semibold"
          >
            Menu
            <ChevronDown size={20} />
          </button>

          {/* Dropdown menu */}
          {dropdownOpen && (
            <ul className="absolute right-0 mt-2 w-40 bg-white text-[#263692] shadow-lg rounded-lg py-2 text-sm font-medium">
              <Link href={"/"}><li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">Home</li></Link>
              <Link href={"/classes"}><li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">Classes</li></Link>
              <Link href={"/contack"}><li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">Contact</li></Link>
              <Link href={"/about"}><li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">About</li></Link>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
