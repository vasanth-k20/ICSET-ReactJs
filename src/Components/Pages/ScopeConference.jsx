import React from 'react'

export default function ScopeConference() {
    return (
        <div>
            {/* Banner Section */}
            <div className="relative bg-[#881B1B] py-16 sm:py-20 text-white text-center">
                <h1 className="text-4xl sm:text-5xl font-bold relative z-10 opacity-85">
                    Scope Of the Conference
                </h1>
                <div className="absolute inset-0 mt-24 md:mt-33 px-4 sm:px-10 opacity-10 flex items-center justify-start">
                    <h1 className="text-3xl hidden md:block md:text-5xl lg:text-6xl font-bold text-[#f99696]">Our Scope</h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="w-full bg-gray-100">
                <div className="w-full xl:w-[65%] mx-auto relative flex flex-col xl:flex-row items-center justify-between bg-gray-100 p-4 sm:p-8">
                    {/* Right Image */}
                    <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[450px] mb-8 lg:mb-0">
                        <img
                            src="img/scope.webp"
                            alt="Conference"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Left Content */}
                    <div className="w-full lg:w-2/2 bg-gray-100 p-4 sm:p-8 flex flex-col items-center text-center">
                        {/* <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                            Welcome to ICSET 2025
                        </h3> */}
                        <p className="text-base sm:text-[18px] mb-4 text-justify">
                            The scope of the International Conference on Science, Engineering, and Technology (ICSET 2025) encompasses a broad range of multidisciplinary topics that reflect the latest advancements and challenges across scientific and technological fields. ICSET 2025 aims to bring together scholars, researchers, and industry professionals to foster cross-disciplinary collaboration and innovation.
                        </p>
                        <p className="text-base sm:text-[18px] mb-4 text-justify">
                            Key areas of focus include but are not limited to Artificial Intelligence, Data Science, Renewable Energy, Advanced Materials, Robotics, Internet of Things (IoT), Biotechnology, Environmental Engineering, Cybersecurity, and Sustainable Infrastructure. The conference also welcomes contributions from emerging fields and interdisciplinary research that push the boundaries of knowledge.
                        </p>
                        <p className="text-base sm:text-[18px] mb-4 text-justify">
                            Through keynote addresses, technical paper presentations, and panel discussions, ICSET 2025 provides a platform for sharing transformative ideas, cutting-edge innovations, and practical solutions that address real-world challenges. The conference encourages academic-industry partnerships and the dissemination of knowledge that drives progress in both theoretical and applied domains.
                        </p>
                        <p className="text-base sm:text-[18px] mb-4 text-justify">
                            ICSET 2025 is committed to promoting global collaboration, supporting interdisciplinary research, and shaping the future of science, engineering, and technology through inclusive and forward-thinking dialogue.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
