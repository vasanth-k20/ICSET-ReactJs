"use client"; // Ensure this runs on the client-side in Next.js
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa"; // FontAwesome icon for register button

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const closeDropdowns = () => {
    setIsAboutDropdownOpen(false);
    setIsServicesDropdownOpen(false);
  };

  const handleDropdownClick = (dropdown) => {
    if (dropdown === "about") {
      setIsAboutDropdownOpen(!isAboutDropdownOpen);
      setIsServicesDropdownOpen(false);
    } else if (dropdown === "services") {
      setIsServicesDropdownOpen(!isServicesDropdownOpen);
      setIsAboutDropdownOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        closeDropdowns();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="shadow-lg sticky top-0 z-50 bg-white opacity-95">
      <div className="container w-full lg:w-[65%] mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/public/hlogo.png" alt="ICSET Logo" className="h-20 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-lg font-semibold">
          <Link to="/" className="hover:text-xl transition-colors duration-300">
            Home
          </Link>

          {/* About Dropdown */}
          <div className="relative dropdown">
            <button
              onClick={() => handleDropdownClick("about")}
              className="hover:text-xl transition-colors duration-300"
            >
              About
            </button>
            {isAboutDropdownOpen && (
              <ul className="absolute left-0 bg-white shadow-md py-2 mt-1 rounded-s w-60">
                <li><Link to="/abtconf" onClick={closeDropdowns} className="block px-4 py-2 hover:bg-gray-100">About The Conference</Link></li>
                <li><Link to="/committee" onClick={closeDropdowns} className="block px-4 py-2 hover:bg-gray-100">Organizing Committee</Link></li>
                {/* <li><Link to="#" onClick={closeDropdowns} className="block px-4 py-2 hover:bg-gray-100">Service 3</Link></li> */}
              </ul>
            )}
          </div>

          {/* Services Dropdown */}
          <div className="relative dropdown">
            <button
              onClick={() => handleDropdownClick("services")}
              className="hover:text-xl transition-colors duration-300"
            >
              Services
            </button>
            {isServicesDropdownOpen && (
              <ul className="absolute left-0 bg-white shadow-md py-2 mt-1 rounded-s w-52">
                {/* <li><Link to="#" onClick={closeDropdowns} className="block px-4 py-2 hover:bg-gray-100">Service 1</Link></li> */}
                <li><Link to="/regidetail" onClick={closeDropdowns} className="block px-4 py-2 hover:bg-gray-100">Registration Details</Link></li>
                <li><Link to="/papersub" onClick={closeDropdowns} className="block px-4 py-2 hover:bg-gray-100">Paper Submision</Link></li>
              </ul>
            )}
          </div>

          <Link to="/contact" className="hover:text-xl transition-colors duration-300">
            Contact
          </Link>

          {/* Register Button */}
          <div>
            <Link to="/papersub" className="bg-[#881B1B] text-white px-4 py-2 rounded-s flex items-center gap-2 hover:bg-opacity-80 transition">
             Register  <FaArrowRight />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;