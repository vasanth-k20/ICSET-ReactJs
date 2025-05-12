"use client";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaArrowRight, FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState(null);
  const location = useLocation();

  const closeDropdowns = () => {
    setIsAboutDropdownOpen(false);
    setIsServicesDropdownOpen(false);
  };

  const startCloseTimer = () => {
    // Clear any existing timeout
    if (closeTimeout) {
      clearTimeout(closeTimeout);
    }
    // Set new timeout with 500ms delay
    setCloseTimeout(setTimeout(closeDropdowns, 500));
  };

  const cancelCloseTimer = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
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
      cancelCloseTimer();
    };
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="shadow-lg sticky top-0 z-50 bg-white opacity-95">
      <div className="container w-full xl:w-[65%] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center mt-1 mb-1">
          <img src="img/hlogo.png" alt="ICSET Logo" className="h-20 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-4 lg:text-lg font-semibold">
          <Link
            to="/"
            className={`px-4 py-2 rounded-s transition-colors duration-300 ${
              isActive("/") ? "bg-[#881B1B] text-white" : "hover:bg-gray-200"
            }`}
            onMouseEnter={() => {
              cancelCloseTimer();
              closeDropdowns();
            }}
          >
            Home
          </Link>

          {/* About Dropdown */}
          <div
            className="relative dropdown"
            onMouseEnter={() => {
              cancelCloseTimer();
              setIsAboutDropdownOpen(true);
              setIsServicesDropdownOpen(false);
            }}
            onMouseLeave={startCloseTimer}
          >
            <button
              onClick={() => handleDropdownClick("about")}
              className={`px-4 py-2 rounded-s transition-colors duration-300 flex items-center gap-1 ${
                isActive("/about_the_conference") || isActive("/organize_committee")
                  ? "bg-[#881B1B] text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              About
              {isAboutDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {isAboutDropdownOpen && (
              <ul 
                className="absolute left-0 bg-white shadow-md py-2 mt-1 rounded-s w-70"
                onMouseEnter={cancelCloseTimer}
                onMouseLeave={startCloseTimer}
              >
                <li>
                  <Link
                    to="/about_the_conference"
                    onClick={closeDropdowns}
                    className={`block px-4 py-2 ${
                      isActive("/about_the_conference") ? "bg-[#881B1B] text-white" : "hover:bg-gray-200"
                    }`}
                  >
                    About The Conference
                  </Link>
                </li>
                <li>
                  <Link
                    to="/scope_of_the_conference"
                    onClick={closeDropdowns}
                    className={`block px-4 py-2 ${
                      isActive("/scope_of_the_conference") ? "bg-[#881B1B] text-white" : "hover:bg-gray-200"
                    }`}
                  >
                    Scope Of The Conference
                  </Link>
                </li>
                <li>
                  <Link
                    to="/organize_committee"
                    onClick={closeDropdowns}
                    className={`block px-4 py-2 ${
                      isActive("/organize_committee") ? "bg-[#881B1B] text-white" : "hover:bg-gray-200"
                    }`}
                  >
                    Organizing Committee
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {/* Services Dropdown */}
          <div
            className="relative dropdown"
            onMouseEnter={() => {
              cancelCloseTimer();
              setIsServicesDropdownOpen(true);
              setIsAboutDropdownOpen(false);
            }}
            onMouseLeave={startCloseTimer}
          >
            <button
              onClick={() => handleDropdownClick("services")}
              className={`px-4 py-2 rounded-s transition-colors duration-300 flex items-center gap-1 ${
                isActive("/registration_details") || isActive("/paper_submission")
                  ? "bg-[#881B1B] text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              Author's Desk
              {isServicesDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {isServicesDropdownOpen && (
              <ul 
                className="absolute left-0 bg-white shadow-md py-2 mt-1 rounded-s w-52"
                onMouseEnter={cancelCloseTimer}
                onMouseLeave={startCloseTimer}
              >
                <li>
                  <Link
                    to="/registration_details"
                    onClick={closeDropdowns}
                    className={`block px-4 py-2 ${
                      isActive("/registration_details") ? "bg-[#881B1B] text-white" : "hover:bg-gray-200"
                    }`}
                  >
                    Registration Details
                  </Link>
                </li>
                <li>
                  <Link
                    to="/paper_submission"
                    onClick={closeDropdowns}
                    className={`block px-4 py-2 ${
                      isActive("/paper_submission") ? "bg-[#881B1B] text-white" : "hover:bg-gray-200"
                    }`}
                  >
                    Paper Submission
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <Link
            to="/contact_us"
            className={`px-4 py-2 rounded-s transition-colors duration-300 ${
              isActive("/contact_us") ? "bg-[#881B1B] text-white" : "hover:bg-gray-200"
            }`}
            onMouseEnter={() => {
              cancelCloseTimer();
              closeDropdowns();
            }}
          >
            Contact
          </Link>

          {/* Register Button */}
          <div>
            <Link
              to="/paper_submission"
              className="bg-[#881B1B] text-white px-4 py-2 rounded-s flex items-center gap-2 hover:bg-opacity-80 transition"
              onMouseEnter={() => {
                cancelCloseTimer();
                closeDropdowns();
              }}
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

      {/* Mobile Navigation - No changes needed here */}
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
                className={`block w-full text-left px-4 py-2 rounded-s transition-colors duration-300 flex items-center justify-between ${
                  isActive("/about_the_conference") || isActive("organize_committee")
                    ? "bg-[#881B1B] text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                About
                {isAboutDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {isAboutDropdownOpen && (
                <ul className="pl-4">
                  <li>
                    <Link
                      to="/about_the_conference"
                      onClick={() => {
                        closeDropdowns();
                        setIsMobileMenuOpen(false);
                      }}
                      className={`block px-4 py-2 rounded-s transition-colors duration-300 ${
                        isActive("/about_the_conference") ? "bg-[#881B1B] text-white" : "hover:bg-gray-200"
                      }`}
                    >
                      About The Conference
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/scope_of_the_conference"
                      onClick={() => {
                        closeDropdowns();
                        setIsMobileMenuOpen(false);
                      }}
                      className={`block px-4 py-2 rounded-s transition-colors duration-300 ${
                        isActive("/scope_of_the_conference") ? "bg-[#881B1B] text-white" : "hover:bg-gray-200"
                      }`}
                    >
                      Scope Of The Conference
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="organize_committee"
                      onClick={() => {
                        closeDropdowns();
                        setIsMobileMenuOpen(false);
                      }}
                      className={`block px-4 py-2 rounded-s transition-colors duration-300 ${
                        isActive("organize_committee") ? "bg-[#881B1B] text-white" : "hover:bg-gray-200"
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
                className={`block w-full text-left px-4 py-2 rounded-s transition-colors duration-300 flex items-center justify-between ${
                  isActive("/registration_details") || isActive("/paper_submission")
                    ? "bg-[#881B1B] text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                Author's Desk
                {isServicesDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {isServicesDropdownOpen && (
                <ul className="pl-4">
                  <li>
                    <Link
                      to="/registration_details"
                      onClick={() => {
                        closeDropdowns();
                        setIsMobileMenuOpen(false);
                      }}
                      className={`block px-4 py-2 rounded-s transition-colors duration-300 ${
                        isActive("/registration_details") ? "bg-[#881B1B] text-white" : "hover:bg-gray-200"
                      }`}
                    >
                      Registration Details
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/paper_submission"
                      onClick={() => {
                        closeDropdowns();
                        setIsMobileMenuOpen(false);
                      }}
                      className={`block px-4 py-2 rounded-s transition-colors duration-300 ${
                        isActive("/paper_submission") ? "bg-[#881B1B] text-white" : "hover:bg-gray-200"
                      }`}
                    >
                      Paper Submission
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            <Link
              to="/contact_us"
              className={`block px-4 py-2 rounded-s transition-colors duration-300 ${
                isActive("/contact_us") ? "bg-[#881B1B] text-white" : "hover:bg-gray-200"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Register Button */}
            <div>
              <Link
                to="/paper_submission"
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