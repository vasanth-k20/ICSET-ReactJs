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
      const response = await fetch("http://localhost:5000/api/contact", {
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
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                  value={formData.message}
                  onChange={handleChange}
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
                  <span className="text-blue-500 mr-2">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <p>Email: <a href="mailto:info@example.com" className="text-blue-600 hover:underline">info@example.com</a></p>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-500 mr-2">
                    <i className="fas fa-phone"></i>
                  </span>
                  <p>Phone: <a href="tel:+1234567890" className="text-blue-600 hover:underline">+123 456 7890</a></p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d812.6263105929652!2d79.16075007735816!3d12.965208209706072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad3893a209c55b%3A0xb3649fe847b74dca!2sBrain%20Insight!5e1!3m2!1sen!2sin!4v1742418806388!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="w-full h-[400px] lg:h-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}