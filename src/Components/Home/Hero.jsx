import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const Hero = () => {
  const images = ["img/bridge.jpg", "img/big-ben.jpg", "img/london-eye.jpg"]; // Image paths

  const sliderRef = useRef(null); // Reference for custom buttons

  const settings = {
    dots: false,
    infinite: true,
    speed: 800, // Slower transition
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Increased time for image change
    arrows: false, // Hide default arrows, using custom ones
  };

  return (
    <div className="w-full h-full">
      {/* Venue Update Section */}
      <div className="bg-yellow-400 text-center py-4 text-black font-bold">
        <p className="text-xl mt-5">VENUE UPDATE</p>
        <h2 className="mb-5 md:text-3xl">ICSET 2025 NOW TAKING PLACE AT THE INTERCONTINENTAL LONDON O2</h2>
      </div>

      {/* Carousel and Content */}
      <div className="relative flex flex-col md:flex-row items-center justify-between">
        {/* Carousel */}
        <div className="w-full md:w-3/5 relative">
          <Slider ref={sliderRef} {...settings}>
            {images.map((img, index) => (
              <div key={index} className="h-full">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] object-cover block"
                />
              </div>
            ))}
          </Slider>

          {/* Custom Next/Prev Buttons */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl text-white p-2 rounded-full shadow-lg"
            onClick={() => sliderRef.current.slickPrev()}
          >
            ❮
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl text-white p-2 rounded-full shadow-lg"
            onClick={() => sliderRef.current.slickNext()}
          >
            ❯
          </button>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 bg-white p-8 flex flex-col items-center text-center">
          {/* ISCAS Logo */}
          <div className="mb-4">
            <img src="img/logo.png" alt="ISCAS 2025 Logo" className="w-150 h-auto" />
          </div>
          <p className="text-gray-700 font-medium">AUGUST 25-28, 2025 | LONDON, UNITED KINGDOM</p>
          <h3 className="text-xl font-bold mt-2">2025 ICSET International Conference on Science, Engineering and Technology</h3>
          {/* Buttons */}
          <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex space-x-4">
              <Link to="/contact">
                <button className="bg-[#881B1B] text-white px-8 py-2 rounded-s">
                  Contact Us
                </button>
              </Link>
              <Link to="/papersub">
                <button className="bg-[#881B1B] text-white px-6 py-2 rounded-s">
                  Register Now!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
