import React from "react";
import { FaLinkedin, FaGlobe } from "react-icons/fa";

const speakers = [
  {
    name: "Isabelle Ferain",
    designation: "GlobalFoundries, USA",
    image: "/man1.jpg",
    linkedin: "#",
  },
  {
    name: "Bogdan Staszewski",
    designation: "University College Dublin, Ireland",
    image: "/woman1.jpg",
    website: "#",
  },
  {
    name: "Dhireesha Kudithipudi",
    designation: "The University of Texas at San Antonio, USA",
    image: "/man2.jpg",
    website: "#",
  },
  {
    name: "Bor-Sung Liang",
    designation: "MediaTek, Taiwan",
    image: "/man3.jpg",
    linkedin: "#",
  },
  {
    name: "Piero Angeletti",
    designation: "European Space Agency (ESA), The Netherlands",
    image: "/woman2.jpg",
    linkedin: "#",
  },
];

const Speakers = () => {
  return (
    <section className="py-12 bg-white text-center">
      <div className="w-full lg:w-[60%] mx-auto px-4"> {/* Responsive width */}
        <h4 className="text-sm font-semibold text-gray-500">SPECIAL THANKS</h4>
        <h2 className="text-3xl font-bold mb-8">Plenary Speakers</h2>

        {/* Speaker Grid with 3 on top and 2 below */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6">
            {speakers.slice(0, 3).map((speaker, index) => (
              <SpeakerCard key={index} speaker={speaker} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {speakers.slice(3).map((speaker, index) => (
              <SpeakerCard key={index + 3} speaker={speaker} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Speaker Card Component
const SpeakerCard = ({ speaker }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden text-center w-full sm:w-[290px] h-[350px] flex flex-col justify-between">
      <img src={speaker.image} alt={speaker.name} className="w-full h-[200px] object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{speaker.name}</h3>
        <p className="text-gray-500 text-sm">{speaker.designation}</p>
      </div>
      <div className="p-2 border-t flex justify-center">
        {speaker.linkedin && (
          <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="p-2">
            <FaLinkedin className="text-gray-600 hover:text-blue-600 text-xl" />
          </a>
        )}
        {speaker.website && (
          <a href={speaker.website} target="_blank" rel="noopener noreferrer" className="p-2">
            <FaGlobe className="text-gray-600 hover:text-blue-600 text-xl" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Speakers;