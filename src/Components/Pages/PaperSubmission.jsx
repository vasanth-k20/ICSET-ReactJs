export default function PaperSubmission() {
    return (
        <section className="w-full lg:w-[60%] mx-auto my-12 text-center px-4">
            <h4 className="text-sm font-semibold text-gray-500">SUBMIT YOUR WORK</h4>
            <h2 className="text-3xl font-bold mb-8">Paper Submission</h2>

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
                            placeholder="Enter the names of the authors"
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
        </section>
    );
}