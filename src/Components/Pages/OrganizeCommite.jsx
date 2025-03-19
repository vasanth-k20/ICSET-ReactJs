import React from "react";

const committeeMembers = [
  {
    name: "Christofer Toumazou",
    role: "HONORARY CHAIR",
    institution: "Imperial College, UK",
    image: "/comm1.jpg",
    icon: "🌐", // Replace with actual icon
  },
  {
    name: "Izzet Kale",
    role: "GENERAL CO-CHAIR",
    institution: "University of Westminster, UK",
    image: "/comm2.jpg",
    icon: "🌐", // Replace with actual icon
  },
  {
    name: "Andreas Demosthenous",
    role: "GENERAL CO-CHAIR",
    institution: "University College London, UK",
    image: "/comm3.jpg",
    icon: "🌐", // Replace with actual icon
  },
  {
    name: "Alison Burdett",
    role: "GENERAL CO-CHAIR",
    institution: "Sensium, UK",
    image: "/comm6.jpg",
    icon: "🔗", // Replace with LinkedIn icon
  },
  {
    name: "Gabriele Manganaro",
    role: "TPC Chair",
    institution: "MediaTek, USA",
    image: "/comm4.jpg",
    icon: "🔗", // Replace with LinkedIn icon
  },
  {
    name: "Maire O'Neill",
    role: "TPC Co-Chair",
    institution: "Queens University Belfast, UK",
    image: "/comm7.jpg",
    icon: "🌐", // Replace with actual icon
  },
  {
    name: "Elena Blokhina",
    role: "TPC Co-Chair",
    institution: "University College Dublin, Ireland",
    image: "/comm8.jpg",
    icon: "🌐", // Replace with actual icon
  },
  {
    name: "Timothy Constandinou",
    role: "TPC Co-Chair",
    institution: "Imperial College London, UK",
    image: "/comm5.jpg",
    icon: "🌐", // Replace with actual icon
  },
  {
    name: "Peter Kennedy",
    role: "Plenary Speaker Chair",
    institution: "University College Dublin, Ireland",
    image: "/comm1.jpg",
    icon: "🌐", // Replace with actual icon
  },
  {
    name: "Timothy Denison",
    role: "Plenary Speaker Co-Chair",
    institution: "University of Oxford, UK",
    image: "/comm2.jpg",
    icon: "🌐", // Replace with actual icon
  },
  {
    name: "Ediz Cetin",
    role: "Plenary Speaker Chair",
    institution: "Macquarie University, Australia",
    image: "/comm3.jpg",
    icon: "🌐", // Replace with actual icon
  },
  {
    name: "Elisabetta Chicca",
    role: "Plenary Speaker Chair",
    institution: "University of Groningen, Germany",
    image: "/comm6.jpg",
    icon: "🔗", // Replace with LinkedIn icon
  },
  {
    name: "Wouter Serdijn",
    role: "Special Sessions Chair",
    institution: "Delft University of Technology, The Netherlands",
    image: "/comm4.jpg",
    icon: "🔗", // Replace with LinkedIn icon
  },
  {
    name: "Julius Georgiou",
    role: "Special Sessions Co-Chair",
    institution: "University of Cyprus, Cyprus",
    image: "/comm7.jpg",
    icon: "🌐", // Replace with actual icon
  },
  {
    name: "Marvin Onabajo",
    role: "Special Sessions Co-Chair",
    institution: "Northeastern University, USA",
    image: "/comm8.jpg",
    icon: "🌐", // Replace with actual icon
  },
  {
    name: "Rishad Shafik",
    role: "Special Sessions Co-Chair",
    institution: "Newcastle University, UK",
    image: "/comm5.jpg",
    icon: "🌐", // Replace with actual icon
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