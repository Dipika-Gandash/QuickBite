import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks for contacting us!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-8 md:p-10">
        <h1 className="text-4xl font-extrabold text-[#FF5722] mb-6 text-center">
          Contact Us
        </h1>

        <p className="text-lg text-gray-700 mb-8 text-center">
          We’d love to hear from you! Whether it's feedback, questions, or support — drop us a message below.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-[#FF5722] mb-1">Email</h2>
              <p className="text-gray-700">support@quickbite.com</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[#FF5722] mb-1">Phone</h2>
              <p className="text-gray-700">+91 98765 43210</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[#FF5722] mb-1">Address</h2>
              <p className="text-gray-700">123 Foodie Lane, Flavor Town, India</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[#FF5722] mb-1">Hours</h2>
              <p className="text-gray-700">Mon–Sun: 9 AM – 9 PM</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF5722]"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF5722]"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF5722]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#FF5722] text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
