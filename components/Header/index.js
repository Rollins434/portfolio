import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

function Header() {
  const [showNav, setShowNav] = useState(false);
  const handleClick = () => {
    setShowNav((prev) => !prev);
  };
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);
  return (
    <>
    
      <div className={`sticky w-full h-[80px] ${ scrollDirection === "down" ? "-top-[80px]" : "top-0"} flex justify-between items-center px-4   bg-black/[.08] backdrop-blur-[10px] className="text-gray-400  `}>
        <div>
          <Image src="/logo-bg.png" alt="logo" height={100} width={100} />
        </div>

        <div>
          <ul className="hidden md:flex ">
            <Link to="home" smooth={true} duration={500}>
              <li >Home</li>
            </Link>
            <Link to="about" smooth={true} duration={500}>
              <li>About</li>
            </Link>
            <Link to="skills" smooth={true} duration={500}>
              <li>Skills</li>
            </Link>
            <li>Projects</li>
          </ul>
        </div>

        {/* hamburger */}
        <div className="md:hidden z-10 cursor-pointer" onClick={handleClick}>
          {!showNav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile menu */}
        <div
          className={
            !showNav
              ? "hidden"
              : "absolute  left-0 w-full h-screen bg-[#c1cde0] flex flex-col justify-center items-center "
          }
        >
          <ul>
            <Link to="home" smooth={true} duration={500}>
              <li className="py-6 text-3xl text-center">Home</li>
            </Link>
            <Link to="about" smooth={true} duration={500}>
              <li className="py-6 text-3xl text-center">About</li>
            </Link>
            <Link to="skills" smooth={true} duration={500}>
              <li className="py-6 text-3xl text-center">Skills</li>
            </Link>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          {/* <ul>
            <li className="w-[160px] h-[50px] rounded-sm  flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
              <a
                href="#"
                className="flex flex-row justify-between w-full items-center"
              >
                Linkedin <FaLinkedin size={24} />
              </a>
            </li>
            <li className="w-[160px] h-[50px] rounded-sm   flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
              <a
                href="#"
                className="flex flex-row justify-between w-full items-center"
              >
                Github <FaGithub size={24} />
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </>
  );
}

export default Header;
