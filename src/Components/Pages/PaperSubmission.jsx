export default function PaperSubmission() {
    return (
        <section>
            <div>
                {/* Banner Section */}
                <div className="relative bg-[#881B1B] py-20 text-white text-center">
                    <h1 className="text-5xl font-bold relative z-10 opacity-85">Paper Submission</h1>
                    <div className="absolute inset-0 mt-33 px-10 opacity-10 flex items-center justify-start">
                        <h1 className="text-6xl font-bold text-[#f99696]">Submit Your Work</h1>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-[50%] mx-auto my-12 text-center px-4">
                {/* Submission Form */}
                <div className="bg-white shadow-lg rounded-2xl p-8 text-left">
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
                                placeholder="Enter the names of the author's"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
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
            </div>
        </section>
    );
}