import React from 'react'

export default function ConferenceTracks() {
  return (
    <div>

 {/* Banner Section */}
            <div className="relative bg-[#881B1B] py-16 sm:py-20 text-white text-center">
                <h1 className="text-4xl sm:text-5xl font-bold relative z-10 opacity-85">
                    Conference Tracks
                </h1>
                <div className="absolute inset-0 mt-24 md:mt-33 px-4 sm:px-10 opacity-10 flex items-center justify-start">
                    <h1 className="text-3xl hidden md:block md:text-5xl lg:text-6xl font-bold text-[#f99696]">Conference Tracks</h1>
                </div>
            </div>

<div className="py-12 px-4">
  <div className="max-w-7xl mx-auto text-center">
    {/* <h2 className="text-3xl font-bold text-gray-800 mb-6">Conference Tracks</h2> */}
    <p className="text-black mb-12 text-xl">Explore diverse and innovative research areas at the intersection of science, engineering, and technology.</p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: "Advanced Materials & Nanotechnology",
          desc: "Explore cutting-edge research in smart materials, composites, nanostructures, and their applications across science and engineering domains."
        },
        {
          title: "Artificial Intelligence & Machine Learning",
          desc: "Innovations in AI, deep learning, computer vision, and intelligent systems for industry, healthcare, and society.."
        },
        {
          title: "Renewable Energy & Sustainable Systems",
          desc: "Research on solar, wind, hydrogen, and other green technologies with a focus on energy efficiency and sustainability."
        },
        {
          title: "Robotics, Automation & Control Systems",
          desc: "Developments in autonomous systems, industrial robotics, IoT-based automation, and embedded control systems."
        },
        {
          title: "Communication, Computing & Cybersecurity",
          desc: "Advances in 5G/6G, quantum communication, data analytics, cloud computing, and secure systems."
        },
        {
          title: "Biomedical Engineering & Health Informatics",
          desc: "Research in medical devices, bioengineering, digital health solutions, and diagnostics technologies."
        },
        {
          title: "Smart Infrastructure & Civil Engineering Innovations",
          desc: "Intelligent urban infrastructure, smart transport systems, structural monitoring, and geotechnical advancements."
        },
        {
          title: "Environmental Science & Climate Engineering",
          desc: "Strategies for pollution control, waste management, climate adaptation, and ecological engineering."
        }
      ].map((track, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition text-left">
          <h3 className="text-xl font-semibold text-[#c73f3f] mb-2">{track.title}</h3>
          <p className="text-gray-700 text-[17px]">{track.desc}</p>
        </div>
      ))}
    </div>
  </div>
</div>


    </div>
  )
}
