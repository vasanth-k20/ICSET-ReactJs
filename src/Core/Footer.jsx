import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Menu Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Menu</h2>
          <ul className="flex flex-col gap-2">
            <li><a href="#" className="text-gray-200 hover:text-gray-300">Home</a></li>
            <li><a href="#" className="text-gray-200 hover:text-gray-300">About</a></li>
            <li><a href="#" className="text-gray-200 hover:text-gray-300">Services</a></li>
            <li><a href="#" className="text-gray-200 hover:text-gray-300">Contact</a></li>
          </ul>
        </div>

        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">About</h2>
          <p className="text-gray-200">We provide the best solutions for your business. Contact us for more information.</p>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <p className="text-gray-200">Email: contact@example.com</p>
          <p className="text-gray-200">Phone: +123 456 7890</p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-white hover:text-gray-300"><FaFacebookF /></a>
            <a href="#" className="text-white hover:text-gray-300"><FaTwitter /></a>
            <a href="#" className="text-white hover:text-gray-300"><FaInstagram /></a>
            <a href="#" className="text-white hover:text-gray-300"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-200">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
