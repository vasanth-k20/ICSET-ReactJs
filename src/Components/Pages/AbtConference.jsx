import React from 'react'

export default function AbtConference() {
    return (
        <div>
            {/* Banner Section */}
            <div className="relative bg-[#881B1B] py-16 sm:py-20 text-white text-center">
                <h1 className="text-4xl sm:text-5xl font-bold relative z-10 opacity-85">
                    About the Conference
                </h1>
                <div className="absolute inset-0 mt-24 md:mt-33 px-4 sm:px-10 opacity-10 flex items-center justify-start">
                    <h1 className="text-3xl hidden md:block md:text-5xl lg:text-6xl font-bold text-[#f99696]">About Us</h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="w-full bg-gray-100">
                <div className="w-full xl:w-[65%] mx-auto relative flex flex-col xl:flex-row items-center justify-between bg-gray-100 p-4 sm:p-8">
                    {/* Right Image */}
                    <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[450px] mb-8 lg:mb-0">
                        <img
                            src="img/big-ben.jpg"
                            alt="Conference"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Left Content */}
                    <div className="w-full lg:w-2/2 bg-gray-100 p-4 sm:p-8 flex flex-col items-center text-center">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                            Welcome to ICSET 2025
                        </h3>
                        <p className="text-base sm:text-[18px] mb-4 text-justify">
                            The International Conference on Science, Engineering, and Technology
                            (ICSET 2025) is a prestigious global forum that brings together
                            researchers, academicians, and industry experts to explore the latest
                            innovations and advancements in various scientific and technological
                            disciplines. The conference aims to foster collaboration, exchange
                            knowledge, and address emerging challenges in science, engineering, and
                            technology.
                        </p>
                        <p className="text-base sm:text-[18px] mb-4 text-justify">
                            ICSET 2025 will be held in [London] on [22-08-2025], providing a dynamic
                            platform for presenting cutting-edge research, discussing industry
                            trends, and networking with professionals from diverse fields. The
                            event will feature keynote speeches, technical sessions, and
                            interactive discussions, creating opportunities for meaningful
                            engagement and knowledge-sharing.
                        </p>
                        <p className="text-base sm:text-[18px] mb-4 text-justify">
                            This annual conference serves as an ideal venue for showcasing
                            groundbreaking research and technological developments, making it a
                            must-attend event for academics, researchers, and industry
                            professionals alike.
                        </p>
                        <p className="text-base sm:text-[18px] mb-4 text-justify">
                            We look forward to welcoming participants to ICSET 2025 and witnessing
                            impactful discussions that drive innovation and progress in science,
                            engineering, and technology.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
