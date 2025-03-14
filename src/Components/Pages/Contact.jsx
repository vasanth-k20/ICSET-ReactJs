export default function ContactPage() {
    return (
        <section>
            <div>
                {/* Banner Section */}
                <div className="relative bg-[#881B1B] py-20 text-white text-center">
                    <h1 className="text-5xl font-bold relative z-10 opacity-85">GET IN TOUCH</h1>
                    <div className="absolute inset-0 mt-33 px-10 opacity-10 flex items-center justify-start">
                        <h1 className="text-6xl font-bold text-[#f99696]">Contact Us</h1>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-[80%] mx-auto my-12 text-center px-4">
                {/* Two-Column Layout: Form (Left) + Map (Right) */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column: Contact Form */}
                    <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-2xl p-8 text-left">
                        <form className="space-y-6">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email address"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Enter the subject of your message"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Write your message here"
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
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Column: Google Map */}
                    <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-2xl overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.123456789012!2d78.416117!3d12.20318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDEyJzExLjUiTiA3OMKwMjQnNTguMCJF!5e0!3m2!1sen!2sus!4v1633039292613!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            className="w-full h-[400px] lg:h-full"
                        />
                    </div>
                </div>

            </div>

        </section>
    );
}