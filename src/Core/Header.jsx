"use client"; // Ensure this runs on the client-side in Next.js
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa"; // FontAwesome icons for register button and mobile menu

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const location = useLocation();

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

  // Determine active state based on current route
  const isActive = (path) => location.pathname === path;

  return (
    <header className="shadow-lg sticky top-0 z-50 bg-white opacity-95">
      <div className="container w-full xl:w-[65%] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center mt-1 mb-1">
          <img src="/public/hlogo.png" alt="ICSET Logo" className="h-20 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-4 lg:text-lg font-semibold">
          <Link
            to="/"
            className={`px-4 py-2 rounded-s transition-colors duration-300 ${
              isActive("/") ? "bg-[#881B1B] text-white" : "hover:bg-gray-200"
            }`}
          >
            Home
          </Link>

          {/* About Dropdown */}
          <div className="relative dropdown">
            <button
              onClick={() => handleDropdownClick("about")}
              className={`px-4 py-2 rounded-s transition-colors duration-300 ${
                isActive("/abtconf") || isActive("/committee")
                  ? "bg-[#881B1B] text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              About
            </button>
            {isAboutDropdownOpen && (
              <ul className="absolute left-0 bg-white shadow-md py-2 mt-1 rounded-s w-60">
                <li>
                  <Link
                    to="/abtconf"
                    onClick={closeDropdowns}
                    className={`block px-4 py-2 ${
                      isActive("/abtconf") ? "bg-[#881B1B] text-white" : "hover:bg-gray-200"
                    }`}
                  >
                    About The Conference
                  </Link>
                </li>
                <li>
                  <Link
                    to="/committee"
                    onClick={closeDropdowns}
                    className={`block px-4 py-2 ${
                      isActive("/committee") ? "bg-[#881B1B] text-white" : "hover:bg-gray-200"
                    }`}
                  >
                    Organizing Committee
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {/* Services Dropdown */}
          <div className="relative dropdown">
            <button
              onClick={() => handleDropdownClick("services")}
              className={`px-4 py-2 rounded-s transition-colors duration-300 ${
                isActive("/regidetail") || isActive("/papersub")
                  ? "bg-[#881B1B] text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              Author's Desk
            </button>
            {isServicesDropdownOpen && (
              <ul className="absolute left-0 bg-white shadow-md py-2 mt-1 rounded-s w-52">
                <li>
                  <Link
                    to="/regidetail"
                    onClick={closeDropdowns}
                    className={`block px-4 py-2 ${
                      isActive("/regidetail") ? "bg-[#881B1B] text-white" : "hover:bg-gray-200"
                    }`}
                  >
                    Registration Details
                  </Link>
                </li>
                <li>
                  <Link
                    to="/papersub"
                    onClick={closeDropdowns}
                    className={`block px-4 py-2 ${
                      isActive("/papersub") ? "bg-[#881B1B] text-white" : "hover:bg-gray-200"
                    }`}
                  >
                    Paper Submission
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <Link
            to="/contact"
            className={`px-4 py-2 rounded-s transition-colors duration-300 ${
              isActive("/contact") ? "bg-[#881B1B] text-white" : "hover:bg-gray-200"
            }`}
          >
            Contact
          </Link>

          {/* Register Button */}
          <div>
            <Link
              to="/papersub"
              className="bg-[#881B1B] text-white px-4 py-2 rounded-s flex items-center gap-2 hover:bg-opacity-80 transition"
            >
              Register <FaArrowRight />
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-2xl"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-2">
            <Link
              to="/"
              className={`block px-4 py-2 rounded-s transition-colors duration-300 ${
                isActive("/") ? "bg-[#881B1B] text-white" : "hover:bg-gray-200"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* About Dropdown */}
            <div className="relative dropdown">
              <button
                onClick={() => handleDropdownClick("about")}
                className={`block w-full text-left px-4 py-2 rounded-s transition-colors duration-300 ${
                  isActive("/abtconf") || isActive("/committee")
                    ? "bg-[#881B1B] text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                About
              </button>
              {isAboutDropdownOpen && (
                <ul className="pl-4">
                  <li>
                    <Link
                      to="/abtconf"
                      onClick={() => {
                        closeDropdowns();
                        setIsMobileMenuOpen(false);
                      }}
                      className={`block px-4 py-2 rounded-s transition-colors duration-300 ${
                        isActive("/abtconf") ? "bg-[#881B1B] text-white" : "hover:bg-gray-200"
                      }`}
                    >
                      About The Conference
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/committee"
                      onClick={() => {
                        closeDropdowns();
                        setIsMobileMenuOpen(false);
                      }}
                      className={`block px-4 py-2 rounded-s transition-colors duration-300 ${
                        isActive("/committee") ? "bg-[#881B1B] text-white" : "hover:bg-gray-200"
                      }`}
                    >
                      Organizing Committee
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative dropdown">
              <button
                onClick={() => handleDropdownClick("services")}
                className={`block w-full text-left px-4 py-2 rounded-s transition-colors duration-300 ${
                  isActive("/regidetail") || isActive("/papersub")
                    ? "bg-[#881B1B] text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                Author's Desk
              </button>
              {isServicesDropdownOpen && (
                <ul className="pl-4">
                  <li>
                    <Link
                      to="/regidetail"
                      onClick={() => {
                        closeDropdowns();
                        setIsMobileMenuOpen(false);
                      }}
                      className={`block px-4 py-2 rounded-s transition-colors duration-300 ${
                        isActive("/regidetail") ? "bg-[#881B1B] text-white" : "hover:bg-gray-200"
                      }`}
                    >
                      Registration Details
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/papersub"
                      onClick={() => {
                        closeDropdowns();
                        setIsMobileMenuOpen(false);
                      }}
                      className={`block px-4 py-2 rounded-s transition-colors duration-300 ${
                        isActive("/papersub") ? "bg-[#881B1B] text-white" : "hover:bg-gray-200"
                      }`}
                    >
                      Paper Submission
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            <Link
              to="/contact"
              className={`block px-4 py-2 rounded-s transition-colors duration-300 ${
                isActive("/contact") ? "bg-[#881B1B] text-white" : "hover:bg-gray-200"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Register Button */}
            <div>
              <Link
                to="/papersub"
                className="bg-[#881B1B] text-white px-4 py-2 rounded-s flex items-center gap-2 hover:bg-opacity-80 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Register <FaArrowRight />
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;