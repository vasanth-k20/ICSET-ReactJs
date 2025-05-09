import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    number: "",
    message: "",
  });

  const [feedback, setFeedback] = useState({ message: "", type: "" });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://icscent.com/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setFeedback({ message: "Message sent successfully!", type: "success" });
        setFormData({ firstName: "", email: "", number: "", message: "" });
      } else {
        setFeedback({ message: result.error || "Failed to send message.", type: "danger" });
      }
    } catch (error) {
      console.error("Error:", error);
      setFeedback({ message: "An error occurred while sending the message.", type: "danger" });
    }
  };

  return (
    <section>
      {/* Banner Section */}
      <div className="relative bg-[#881B1B] py-20 text-white text-center">
        <h1 className="text-5xl font-bold relative z-10 opacity-85">Get In Touch</h1>
        <div className="absolute inset-0 mt-33 px-10 opacity-10 flex items-center justify-start">
          <h1 className="text-3xl hidden md:block md:text-5xl lg:text-6xl font-bold text-[#f99696]">Contact Us</h1>
        </div>
      </div>
      <div className="w-full lg:w-[65%] mx-auto my-12 text-center px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: Contact Form */}
          <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-2xl p-8 text-left">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A7590] focus:border-[#2A7590] focus:outline-none"
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
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A7590] focus:border-[#2A7590] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="number" className="block text-sm font-medium text-gray-700">
                  Your Mobile Number
                </label>
                <input
                  type="number"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="Enter your number"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A7590] focus:border-[#2A7590] focus:outline-none"
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
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Write your message here"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A7590] focus:border-[#2A7590] focus:outline-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-[#2A7590] text-white hover:text-black font-semibold rounded-lg hover:bg-[#689fb1]"
                >
                  Send Message
                </button>
              </div>
            </form>
            <div className="mt-4 text-center text-xl text-blue-700">
              {feedback.message && (
                <div className={`alert alert-${feedback.type}`}>{feedback.message}</div>
              )}
            </div>
          </div>

          {/* Right Column: Contact Information and Google Map */}
          <div className="w-full lg:w-1/2">
            {/* Contact Information */}
            <div className="bg-white shadow-lg rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-center">
                  <span className="text-[#2A7590] mr-2">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <p>Email: <a href="mailto:info@example.com" className="text-blue-600 hover:underline">xxyyzz@outlook.com</a></p>
                </div>
                <div className="flex items-center">
                  <span className="text-[#2A7590] mr-2">
                    <i className="fas fa-phone"></i>
                  </span>
                  <p>Phone: <a href="tel:+1234567890" className="text-blue-600 hover:underline">+12 0000 1212</a></p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198986.92570998636!2d-0.2664021954811455!3d51.528526205103056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e1!3m2!1sen!2sin!4v1746562491231!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="w-full h-[400px] lg:h-[350px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}