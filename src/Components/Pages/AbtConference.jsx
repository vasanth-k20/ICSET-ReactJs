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
            <div>
                <div className="w-full bg-gray-100">
                    {/* Content Section */}
                    <div className="w-[65%] mx-auto relative flex items-center justify-between bg-gray-100">

                        {/* Right Image */}
                        <div className="w-1/2 relative h-[450px]">
                            <img src="/big-ben.jpg" alt="Conference" className="w-full h-full object-cover rounded-s shadow-lg" />
                        </div>

                        {/* Left Content */}
                        <div className="w-1/1 bg-gray-100 p-8 flex flex-col items-center text-center">
                            <h3 className="text-3xl font-bold mb-4">Welcome to ICSET 2025</h3>
                            <p className="text-[18px] mb-4  text-justify">
                                The International Conference on Science, Engineering, and Technology (ICSET 2025) is a prestigious global forum that brings together researchers, academicians, and industry experts to explore the latest innovations and advancements in various scientific and technological disciplines. The conference aims to foster collaboration, exchange knowledge, and address emerging challenges in science, engineering, and technology.
                            </p>
                            <p className="text-[18px] mb-4 text-justify">
                                ICSET 2025 will be held in [Location] on [Dates], providing a dynamic platform for presenting cutting-edge research, discussing industry trends, and networking with professionals from diverse fields. The event will feature keynote speeches, technical sessions, and interactive discussions, creating opportunities for meaningful engagement and knowledge-sharing.
                            </p>
                            <p className="text-[18px] mb-4 text-justify">
                                This annual conference serves as an ideal venue for showcasing groundbreaking research and technological developments, making it a must-attend event for academics, researchers, and industry professionals alike.
                            </p>
                            <p className="text-[18px] mb-4 text-justify">
                                We look forward to welcoming participants to ICSET 2025 and witnessing impactful discussions that drive innovation and progress in science, engineering, and technology.
                            </p>
                        </div>

                    </div>
                </div>
                {/* Additional Sections */}
                {/* <div className="w-[65%] mx-auto">
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
                {/* <div className="bg-gray-100 text-black text-center mb-4">
                    <h3 className="text-2xl font-bold mb-4">Don't Miss Out!</h3>
                    <p className="text-lg mb-6">Register now to secure your spot at ISCAS 2025.</p>
                    <button className="bg-[#881B1B] text-white px-6 py-2 rounded-lg font-bold">Register Now</button>
                </div> */}
            </div>
        </div>
    )
}
