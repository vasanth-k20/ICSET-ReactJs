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
            <div className="w-full bg-gray-50 py-10 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">

                    {/* Name 1 */}
                    <div className="border border-orange-300 rounded-md p-5">
                        <h3 className="text-lg font-bold mb-1">Name 1</h3>
                        <p className="mb-1">ASP / Mechanical Engg.</p>
                        <p className="mb-1">Prince Mohammed Bin Fahd University,</p>
                        <p className="italic text-gray-600">Al Khobar, Saudi Arabia.</p>
                    </div>

                    {/* Name 2 */}
                    <div className="border border-orange-300 rounded-md p-5">
                        <h3 className="text-lg font-bold mb-1">Name 2</h3>
                        <p className="mb-1">ASP / Production Engg.</p>
                        <p className="mb-1">National Institute of Technology,</p>
                        <p className="italic text-gray-600">Trichy.</p>
                    </div>

                    {/* Name 3 */}
                    <div className="border border-orange-300 rounded-md p-5 sm:col-span-2 lg:col-span-1">
                        <h3 className="text-lg font-bold mb-1">Name 3</h3>
                        <p className="mb-1">AP & Head / Mech</p>
                        <p className="mb-1">National Institute of Technology,</p>
                        <p className="italic text-gray-600">Karaikal, UT of Puducherry.</p>
                    </div>

                    {/* Name 4 */}
                    <div className="border border-orange-300 rounded-md p-5 sm:col-span-2 lg:col-span-1">
                        <h3 className="text-lg font-bold mb-1">Name 4</h3>
                        <p className="mb-1">Manager</p>
                        <p className="mb-1">Advanced Technology Products,</p>
                        <p className="italic text-gray-600">BHEL, Trichy.</p>
                    </div>

                    {/* Name 5 */}
                    <div className="border border-orange-300 rounded-md p-5 sm:col-span-2 lg:col-span-3 mx-auto w-full max-w-md">
                        <h3 className="text-lg font-bold mb-1">Name 5</h3>
                        <p className="mb-1">Professor</p>
                        <p className="mb-1">Dept. of Environmental Science & Engg.,</p>
                        <p className="italic text-gray-600">Mersin University, Turkey.</p>
                    </div>

                </div>
            </div>

        </div>
    )
}
