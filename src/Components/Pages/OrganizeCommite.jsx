import React from "react";

const committeeMembers = [
  {
    name: "Damon Salvatore",
    role: "HONORARY CHAIR",
    institution: "Imperial College, UK",
    image: "img/comm1.jpg",
  },
  {
    name: "Klaus Mikaelson",
    role: "GENERAL CO-CHAIR",
    institution: "University of Westminster, UK",
    image: "img/comm2.jpg",
  },
  {
    name: "Tyler Lockwood",
    role: "GENERAL CO-CHAIR",
    institution: "University College London, UK",
    image: "img/comm3.jpg",
  },
  {
    name: "Emily White",
    role: "GENERAL CO-CHAIR",
    institution: "Sensium, UK",
    image: "img/comm6.jpg",
  },
  {
    name: "Alaric Saltzman",
    role: "TPC Chair",
    institution: "MediaTek, USA",
    image: "img/comm4.jpg",
  },
  {
    name: "Katherine Pierce",
    role: "TPC Co-Chair",
    institution: "Queens University Belfast, UK",
    image: "img/comm7.jpg",
  },
  {
    name: "Elena Gilbert",
    role: "TPC Co-Chair",
    institution: "University College Dublin, Ireland",
    image: "img/comm8.jpg",
  },
  {
    name: "Matt Donovan",
    role: "TPC Co-Chair",
    institution: "Imperial College London, UK",
    image: "img/comm5.jpg",
  },
  {
    name: "Daniel Kim",
    role: "Plenary Speaker Chair",
    institution: "University College Dublin, Ireland",
    image: "img/ccom1.jpg",
  },
  {
    name: "Rohan Mehta",
    role: "Plenary Speaker Co-Chair",
    institution: "University of Oxford, UK",
    image: "img/ccom2.jpg",
  },
  {
    name: "Edward Cullen",
    role: "Plenary Speaker Chair",
    institution: "Macquarie University, Australia",
    image: "img/ccom3.jpg",
  },
  {
    name: "Bonnie Bennett",
    role: "Plenary Speaker Chair",
    institution: "University of Groningen, Germany",
    image: "img/ccom6.jpg",
  },
  {
    name: "Robert Jr.",
    role: "Special Sessions Chair",
    institution: "Delft University of Technology, The Netherlands",
    image: "img/ccom4.jpg",
  },
  {
    name: "Caroline Forbes",
    role: "Special Sessions Co-Chair",
    institution: "University of Cyprus, Cyprus",
    image: "img/ccom7.jpg",
  },
  {
    name: "Jenna Sommers",
    role: "Special Sessions Co-Chair",
    institution: "Northeastern University, USA",
    image: "img/ccom8.jpg",
  },
  {
    name: "William Scott",
    role: "Special Sessions Co-Chair",
    institution: "Newcastle University, UK",
    image: "img/ccom5.jpg",
  },
];

const OrganizingCommittee = () => {
  return (
    <section>
      {/* Banner Section */}
      <div className="relative bg-[#881B1B] py-16 sm:py-20 text-white text-center">
        <h1 className="text-4xl sm:text-5xl font-bold relative z-10 opacity-85">
          Organizing Committee
        </h1>
        <div className="absolute inset-0 mt-24 md:mt-33 px-4 sm:px-10 opacity-10 flex items-center justify-start">
          <h1 className="text-3xl hidden md:block md:text-5xl lg:text-6xl font-bold text-[#f99696]">
            Organizing Committee
          </h1>
        </div>
      </div>

      {/* Committee Members Grid */}
      <div className="container w-full xl:w-[65%] mx-auto px-4 sm:px-6 my-12 sm:my-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {committeeMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden text-center pb-4 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Member Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 sm:h-56 object-cover rounded-t-xl"
              />

              {/* Member Details */}
              <div className="p-4">
                <h3 className="text-red-700 font-bold mt-3 uppercase text-sm">
                  {member.role}
                </h3>
                <p className="text-lg font-semibold">{member.name}</p>
                <p className="text-gray-600 text-sm">{member.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizingCommittee;