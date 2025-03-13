import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const images = ["/london1.jpg", "/west.jpg", "/west.jpg"]; // Image paths

  const sliderRef = useRef(null); // Reference for custom buttons

  const settings = {
    dots: false,
    infinite: true,
    speed: 800, // Slower transition
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000, // Increased time for image change
    arrows: false, // Hide default arrows, using custom ones
  };

  return (
    <div className="w-full h-full">
      {/* Venue Update Section */}
      <div className="bg-yellow-400 text-center py-4 text-black font-bold">
        <p className="text-xl mt-5">VENUE UPDATE</p>
        <h2 className="mb-5 text-3xl">IEEE ISCAS 2025 NOW TAKING PLACE AT THE INTERCONTINENTAL LONDON O2</h2>
      </div>

      {/* Carousel and Content */}
      <div className="relative flex items-center justify-between">
        {/* Carousel */}
        <div className="w-3/5 relative">
          <Slider ref={sliderRef} {...settings}>
            {images.map((img, index) => (
              <div key={index}>
                <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </Slider>

          {/* Custom Next/Prev Buttons */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-lg"
            onClick={() => sliderRef.current.slickPrev()}
          >
            ❮
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-lg"
            onClick={() => sliderRef.current.slickNext()}
          >
            ❯
          </button>
        </div>

        {/* Right Content */}
        <div className="w-1/2 bg-white p-8 flex flex-col items-center text-center">
          {/* ISCAS Logo */}
          <div className="mb-4">
            <img src="/logo.png" alt="ISCAS 2025 Logo" className="w-150 h-auto" />
          </div>
          <p className="text-gray-700 font-medium">MAY 25-28, 2025 | LONDON, UNITED KINGDOM</p>
          <h3 className="text-xl font-bold mt-2">2025 IEEE International Symposium on Circuits and Systems</h3>
          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            <button className="bg-red-800 text-white px-4 py-2 rounded-lg">Contact Us</button>
            <button className="bg-red-800 text-white px-4 py-2 rounded-lg">Register Now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;