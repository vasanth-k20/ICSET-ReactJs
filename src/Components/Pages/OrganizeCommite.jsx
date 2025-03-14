import React from "react";

const committeeMembers = [
  {
    name: "Christofer Toumazou",
    role: "HONORARY CHAIR",
    institution: "Imperial College, UK",
    image: "/images/christofer.jpg",
    icon: "🌐", // Replace with actual icon
  },
  {
    name: "Izzet Kale",
    role: "GENERAL CO-CHAIR",
    institution: "University of Westminster, UK",
    image: "/images/izzet.jpg",
    icon: "🌐", // Replace with actual icon
  },
  {
    name: "Andreas Demosthenous",
    role: "GENERAL CO-CHAIR",
    institution: "University College London, UK",
    image: "/images/andreas.jpg",
    icon: "🌐", // Replace with actual icon
  },
  {
    name: "Alison Burdett",
    role: "GENERAL CO-CHAIR",
    institution: "Sensium, UK",
    image: "/images/alison.jpg",
    icon: "🔗", // Replace with LinkedIn icon
  },
  {
    name: "Gabriele Manganaro",
    role: "TPC Chair",
    institution: "MediaTek, USA",
    image: "/images/alison.jpg",
    icon: "🔗", // Replace with LinkedIn icon
  },
  {
    name: "Maire O'Neill",
    role: "TPC Co-Chair",
    institution: "Queens University Belfast, UK",
    image: "/images/christofer.jpg",
    icon: "🌐", // Replace with actual icon
  },
  {
    name: "Elena Blokhina",
    role: "TPC Co-Chair",
    institution: "University College Dublin, Ireland",
    image: "/images/izzet.jpg",
    icon: "🌐", // Replace with actual icon
  },
  {
    name: "Timothy Constandinou",
    role: "TPC Co-Chair",
    institution: "Imperial College London, UK",
    image: "/images/andreas.jpg",
    icon: "🌐", // Replace with actual icon
  },
];

const OrganizingCommittee = () => {
  return (
    <section>
      {/* Banner Section */}
      <div className="relative bg-[#881B1B] py-20 text-white text-center">
        <h1 className="text-5xl font-bold relative z-10 opacity-85">Organizing Committee</h1>
        <div className="absolute inset-0 mt-33 px-10 opacity-10 flex items-center justify-start">
          <h1 className="text-6xl font-bold text-[#f99696]">Organizing Committee</h1>
        </div>
      </div>

      {/* Committee Members Grid */}
      <div className="container w-[65%] mx-auto px-6 my-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {committeeMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden text-center p-4"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-red-700 font-bold mt-3 uppercase text-sm">
                {member.role}
              </h3>
              <p className="text-lg font-semibold">{member.name}</p>
              <p className="text-gray-600 text-sm">{member.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizingCommittee;