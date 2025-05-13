import React from 'react'

export default function EditorialBoard() {
    return (
        <div>

            {/* Banner Section */}
            <div className="relative bg-[#881B1B] py-16 sm:py-20 text-white text-center">
                <h1 className="text-4xl sm:text-5xl font-bold relative z-10 opacity-85">
                    Editorial Board
                </h1>
                <div className="absolute inset-0 mt-24 md:mt-33 px-4 sm:px-10 opacity-10 flex items-center justify-start">
                    <h1 className="text-3xl hidden md:block md:text-5xl lg:text-6xl font-bold text-[#f99696]">Editorial Board</h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="w-full bg-white py-10 px-4">
                <div className="max-w-4xl mx-auto flex flex-col items-center space-y-6">

                    {/* Row 1: 2 Cards */}
                    <div className="w-full flex flex-col md:flex-row justify-center gap-6">
                        <div className="border border-[#c22828] rounded-md p-4 w-full md:w-1/2 text-center">
                            <h3 className="font-bold text-lg mb-1">Name 1</h3>
                            <p className="mb-4">ASP / Mechanical Engg.</p>
                            <p>Collage,</p>
                            <p className="italic text-gray-600">Location.</p>
                        </div>
                        <div className="border border-[#c22828] rounded-md p-4 w-full md:w-1/2 text-center">
                            <h3 className="font-bold text-lg mb-1">Name 2</h3>
                            <p className="mb-4">ASP / Production Engg.</p>
                            <p>Collage,</p>
                            <p className="italic text-gray-600">Location.</p>
                        </div>
                    </div>

                    {/* Row 2: 2 Cards */}
                    <div className="w-full flex flex-col md:flex-row justify-center gap-6">
                        <div className="border border-[#c22828] rounded-md p-4 w-full md:w-1/2 text-center">
                            <h3 className="font-bold text-lg mb-1">Name 3</h3>
                            <p className="mb-4">AP & Head / Mech</p>
                            <p>Collage,</p>
                            <p className="italic text-gray-600">Location.</p>
                        </div>
                        <div className="border border-[#c22828] rounded-md p-4 w-full md:w-1/2 text-center">
                            <h3 className="font-bold text-lg mb-1">Name 4</h3>
                            <p className="mb-4">Manager</p>
                            <p>Collage,</p>
                            <p className="italic text-gray-600">Location.</p>
                        </div>
                    </div>

                    {/* Row 3: 1 Centered Card */}
                    <div className="border border-[#c22828] rounded-md p-4 w-full md:w-1/2 text-center">
                        <h3 className="font-bold text-lg mb-1">Name 5</h3>
                        <p className="mb-4">Professor</p>
                        <p>Collage,</p>
                        <p className="italic text-gray-600">Location.</p>
                    </div>

                </div>
            </div>


        </div>
    )
}
