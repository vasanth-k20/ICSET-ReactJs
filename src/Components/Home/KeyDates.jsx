import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const KeyDates = () => {
  const dates = [
    { date: "JULY 20, 2025", description: "Paper Submission Deadline – Final Extension" },
    { date: "AUGUST 20, 2025", description: "Author Acceptance Notification Description" },
    { date: "SEPTEMBER 10, 2025", description: "Final Manuscript Submission Deadline" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024, // For tablets and smaller desktops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#881B1B] text-white py-10">
      <div className="text-center mb-6">
        <p className="text-sm uppercase tracking-widest">MARK YOUR CALENDAR</p>
        <h2 className="text-3xl font-bold">Important Dates</h2>
      </div>

      {/* Slider Container */}
      <div className="max-w-5xl mx-auto px-4">
        <Slider {...settings}>
          {dates.map((item, index) => (
            <div key={index} className="px-2">
              <div className="bg-white text-black p-6 rounded-2xl shadow-md text-center h-full">
                <h3 className="font-bold text-red-800 text-lg">{item.date}</h3>
                <p className="mt-2 text-sm sm:text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default KeyDates;