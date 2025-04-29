import React from 'react'
import logo from '../assets/logo-fn.png'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

  return (
    <div className="bg-[#FDFBFC] w-full px-[38px] md:px-20">
      <div className="flex items-center justify-between mx-auto h-[80px] gap-10 max-w-7xl">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-[40px]" />

         {/* Desktop Nav */}
        <nav className="hidden md:flex flex-row justify-end gap-10 font-Poppins font-[400] text-[18px] text-[#000000]">
          <Link to="/" className="hover:text-blue-600 hover:underline transition">Home</Link>
          <Link to="/about" className="hover:text-blue-600 hover:underline transition">About</Link>
          <Link to="/course" className="hover:text-blue-600 hover:underline transition">Course</Link>
          <Link to="/blog" className="hover:text-blue-600 hover:underline transition">Blog</Link>
          <Link to="/contact" className="hover:text-blue-600 hover:underline transition">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
        <button onClick={toggleMenu}>
            {isOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

       {/* Mobile Dropdown */}
       {isOpen && (
        <div className="flex flex-col mr-5 items-end gap-1 py-1 bg-[#FDFBFC] font-Poppins text-[18px] md:hidden">
          <Link to="/" className="hover:text-blue-600 hover:underline transition" onClick={toggleMenu} >Home</Link>
          <Link to="/about" className="hover:text-blue-600 hover:underline transition" onClick={toggleMenu}>About</Link>
          <Link to="/course" className="hover:text-blue-600 hover:underline transition" onClick={toggleMenu}>Course</Link>
          <Link to="/blog" className="hover:text-blue-600 hover:underline transition" onClick={toggleMenu}>Blog</Link>
          <Link to="/contact" className="hover:text-blue-600 hover:underline transition" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </div>
  );
};


export default Navbar