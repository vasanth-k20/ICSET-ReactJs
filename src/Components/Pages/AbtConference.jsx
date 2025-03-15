import React from 'react'

export default function AbtConference() {
    return (
        <div>
            <div>
                {/* Banner Section */}
                <div className="relative bg-[#881B1B] py-20 text-white text-center">
                    <h1 className="text-5xl font-bold relative z-10 opacity-85">About the Conference</h1>
                    <div className="absolute inset-0 mt-33 px-10 opacity-10 flex items-center justify-start">
                        <h1 className="text-6xl font-bold text-[#f99696]">About Us</h1>
                    </div>
                </div>
            </div>
            <div className="w-[65%] h-full mx-auto">
                {/* Content Section */}
                <div className="relative flex items-center justify-between p-8">
                    {/* Left Content */}
                    <div className="w-3/2 bg-white p-8 flex flex-col items-center text-center">
                        <h3 className="text-2xl font-bold mb-4">Welcome to ISCAS 2025</h3>
                        <p className="text-gray-700 font-medium mb-4">
                            The IEEE International Symposium on Circuits and Systems (ISCAS) is the world's premier forum for researchers in the field of circuit theory, design, and implementation. ISCAS 2025 will be held in London, United Kingdom, from May 25-28, 2025.
                        </p>
                        <p className="text-gray-700 font-medium mb-4">
                            This year's conference will feature keynote speeches, technical sessions, workshops, and exhibitions showcasing the latest advancements in circuits and systems. Join us to explore cutting-edge technologies and network with leading experts in the field.
                        </p>
                        <button className="bg-red-800 text-white px-4 py-2 rounded-lg">Learn More</button>
                    </div>

                    {/* Right Image */}
                    {/* <div className="w-1/2 relative">
                        <img src="/conference.jpg" alt="Conference" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div> */}
                </div>

                {/* Additional Sections */}
                {/* <div className="bg-gray-100 p-8">
                    <h3 className="text-2xl font-bold text-center mb-6">Conference Highlights</h3>
                    <div className="flex justify-around">
                        <div className="text-center">
                            <h4 className="text-xl font-bold">Keynote Speakers</h4>
                            <p className="text-gray-700">Hear from industry leaders and pioneers in circuits and systems.</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-xl font-bold">Technical Sessions</h4>
                            <p className="text-gray-700">Explore the latest research and innovations in the field.</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-xl font-bold">Networking Opportunities</h4>
                            <p className="text-gray-700">Connect with professionals and researchers from around the world.</p>
                        </div>
                    </div>
                </div> */}

                {/* Call to Action Section */}
                {/* <div className="bg-gray-100 text-black text-center py-8">
                    <h3 className="text-2xl font-bold mb-4">Don't Miss Out!</h3>
                    <p className="text-lg mb-6">Register now to secure your spot at ISCAS 2025.</p>
                    <button className="bg-[#881B1B] text-white px-6 py-2 rounded-lg font-bold">Register Now</button>
                </div> */}
            </div>
        </div>
    )
}
