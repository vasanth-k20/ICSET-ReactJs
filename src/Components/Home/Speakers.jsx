import React from "react";

const speakers = [
  {
    name: "David Brown",
    designation: "GlobalFoundries, USA",
    image: "img/man1.jpg",
    linkedin: "#",
  },
  {
    name: "Sarah Lewis",
    designation: "University College Dublin, Ireland",
    image: "img/woman1.jpg",
    website: "#",
  },
  {
    name: "Ethan Carter",
    designation: "The University of Texas at San Antonio, USA",
    image: "img/man2.jpg",
    website: "#",
  },
  {
    name: "Thomas van Dijk",
    designation: "MediaTek, Taiwan",
    image: "img/man3.jpg",
    linkedin: "#",
  },
  {
    name: "Olivia Taylor",
    designation: "European Space Agency (ESA), The Netherlands",
    image: "img/woman2.jpg",
    linkedin: "#",
  },
];

const Speakers = () => {
  return (
    <section className="py-12 bg-white text-center">
      <div className="w-full lg:w-[100%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <h4 className="text-sm font-semibold text-gray-500">SPECIAL THANKS</h4>
        <h2 className="text-3xl font-bold mb-8">Plenary Speakers</h2>

        {/* Speaker Grid with 3 on top and 2 below */}
        <div className="flex flex-col items-center gap-6">
          {/* Top Row (First 3 Speakers) */}
          <div className="flex flex-wrap justify-center gap-6">
            {speakers.slice(0, 3).map((speaker, index) => (
              <SpeakerCard key={index} speaker={speaker} />
            ))}
          </div>

          {/* Bottom Row (Last 2 Speakers) */}
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
    <div className="bg-white shadow-lg rounded-xl overflow-hidden text-center w-full sm:w-[290px] h-[350px] flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
      {/* Speaker Image */}
      <img
        src={speaker.image}
        alt={speaker.name}
        className="w-full h-[250px] object-cover"
      />

      {/* Speaker Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{speaker.name}</h3>
        <p className="text-gray-500 text-sm">{speaker.designation}</p>
      </div>
    </div>
  );
};

export default Speakers;