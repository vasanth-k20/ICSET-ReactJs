import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  return (
    <header className="shadow-lg sticky top-0 z-50 scroll-header bg-white opacity-80">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src="/public/hlogo.png" alt="ICSET Logo" className="h-20 w-auto" />
        </a>


        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 hover:text-primary focus:outline-none transition-colors duration-300"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-lg font-semibold">
            <li><a href="#" className="hover:text-xl transition-colors duration-300">Home</a></li>
            <li><a href="#" className="hover:text-xl transition-colors duration-300">About</a></li>
            <li className="group relative">
              <a href="#" className="hover:text-xl transition-colors duration-300">Services</a>
              <ul className="absolute left-0 hidden group-hover:block bg-white shadow-md py-2 mt-1 rounded-md w-48">
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Service 1</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Service 2</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Service 3</a></li>
              </ul>
            </li>
            <li><a href="#" className="hover:text-xl transition-colors duration-300">Contact</a></li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-gray-50 border-t border-gray-200 text-lg">
          <ul className="px-4 py-2">
            <li><a href="#" className="block py-2 hover:text-xl">Home</a></li>
            <li><a href="#" className="block py-2 hover:text-xl">About</a></li>
            <li>
              <button
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                className="block py-2 hover:text-xl w-full text-left"
              >
                Services
              </button>
              {isServicesDropdownOpen && (
                <ul className="pl-4">
                  <li><a href="#" className="block py-2 hover:text-xl">Service 1</a></li>
                  <li><a href="#" className="block py-2 hover:text-xl">Service 2</a></li>
                  <li><a href="#" className="block py-2 hover:text-xl">Service 3</a></li>
                </ul>
              )}
            </li>
            <li><a href="#" className="block py-2 hover:text-xl">Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
