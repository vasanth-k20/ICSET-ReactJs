import "@fortawesome/fontawesome-free/css/all.min.css";

export default function PaperSubmission() {
    return (
        <section>
            {/* Banner Section */}
            <div className="relative bg-[#881B1B] py-20 text-white text-center">
                <h1 className="text-4xl sm:text-5xl font-bold relative z-10 opacity-85">Paper Submission</h1>
                <div className="absolute inset-0 mt-33 px-10 opacity-10 flex items-center justify-start">
                    <h1 className="text-3xl hidden md:block md:text-5xl lg:text-6xl font-bold text-[#f99696]">Submit Your Work</h1>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="w-full xl:w-[65%] px-4 my-12 flex flex-col lg:flex-row gap-8 items-center justify-center mx-auto">
                {/* Submission Form (Left Side) */}
                <div className="w-full lg:w-2/3 bg-white shadow-lg rounded-2xl p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Submit Your Paper</h2>
                    <form className="space-y-6">
                        {/* Paper Title */}
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                Paper Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Enter the title of your paper"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        {/* Author(s) */}
                        <div>
                            <label htmlFor="authors" className="block text-sm font-medium text-gray-700">
                                Author(s)
                            </label>
                            <input
                                type="text"
                                id="authors"
                                name="authors"
                                placeholder="Enter the name of the author's"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        {/* Author's Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Author's Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter the author's email"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        {/* Author's Institution */}
                        <div>
                            <label htmlFor="institution" className="block text-sm font-medium text-gray-700">
                                Author's Institution
                            </label>
                            <input
                                type="text"
                                id="institution"
                                name="institution"
                                placeholder="Enter the author's institution"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        {/* Author's Category */}
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                Author's Category
                            </label>
                            <select
                                id="category"
                                name="category"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            >
                                <option value="">Select Category</option>
                                <option value="student">Student</option>
                                <option value="researcher">Researcher</option>
                                <option value="faculty">Faculty</option>
                                <option value="industry">Industry Professional</option>
                            </select>
                        </div>

                        {/* Abstract */}
                        <div>
                            <label htmlFor="abstract" className="block text-sm font-medium text-gray-700">
                                Abstract
                            </label>
                            <textarea
                                id="abstract"
                                name="abstract"
                                rows="4"
                                placeholder="Provide a brief summary of your paper"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        {/* File Upload */}
                        <div>
                            <label htmlFor="file" className="block text-sm font-medium text-gray-700">
                                Upload Paper (PDF only)
                            </label>
                            <input
                                type="file"
                                id="file"
                                name="file"
                                accept=".pdf"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            >
                                Submit Paper
                            </button>
                        </div>
                    </form>

                </div>

                {/* Submission Guidelines (Right Side) */}
                <div className="w-full lg:w-1/2 bg-gray-100 shadow-lg rounded-2xl p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Submission Guidelines</h2>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-center">
                            <span className="text-green-500 mr-2"><i className="fa-solid fa-circle-check"></i></span>
                            Papers must be written in English.
                        </li>
                        <li className="flex items-center">
                            <span className="text-green-500 mr-2"><i className="fa-solid fa-circle-check"></i></span>
                            Maximum length: 8 pages including figures and references.
                        </li>
                        <li className="flex items-center">
                            <span className="text-green-500 mr-2"><i className="fa-solid fa-circle-check"></i></span>
                            Use the IEEE conference format.
                        </li>
                        <li className="flex items-center">
                            <span className="text-green-500 mr-2"><i className="fa-solid fa-circle-check"></i></span>
                            Submit in PDF, Docx, PPTX format.
                        </li>
                        <li className="flex items-center">
                            <span className="text-green-500 mr-2"><i className="fa-solid fa-circle-check"></i></span>
                            Include abstract (max 250 words).
                        </li>
                        <li className="flex items-center">
                            <span className="text-green-500 mr-2"><i className="fa-solid fa-circle-check"></i></span>
                            Blind all author information for review.
                        </li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Important Notes</h2>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-center">
                            <span className="text-blue-500 mr-2"><i className="fa-solid fa-circle-info"></i></span>
                            All papers undergo a double-blind peer review process.
                        </li>
                        <li className="flex items-center">
                            <span className="text-blue-500 mr-2"><i className="fa-solid fa-circle-info"></i></span>
                            At least one author must register for the conference.
                        </li>
                        <li className="flex items-center">
                            <span className="text-blue-500 mr-2"><i className="fa-solid fa-circle-info"></i></span>
                            Plagiarism checks will be performed.
                        </li>
                        <li className="flex items-center">
                            <span className="text-blue-500 mr-2"><i className="fa-solid fa-circle-info"></i></span>
                            Multiple submissions are not allowed.
                        </li>
                        <li className="flex items-center">
                            <span className="text-blue-500 mr-2"><i className="fa-solid fa-circle-info"></i></span>
                            Authors must present accepted papers at the conference.
                        </li>
                        <li className="flex items-center">
                            <span className="text-blue-500 mr-2"><i className="fa-solid fa-circle-info"></i></span>
                            Papers will be published in the conference proceedings.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
