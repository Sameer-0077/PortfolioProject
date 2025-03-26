import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://formsubmit.co/sameeryadav0077@gmail.com",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setMessageSent(true);
        e.target.reset();
        setTimeout(() => setMessageSent(false), 3000); // Hide message after 3s
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen  p-6">
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Starts from bottom
        animate={{ opacity: 1, y: 0 }} // Moves to normal position
        transition={{ duration: 1, ease: "easeOut" }} // Smooth effect
        className="w-full max-w-lg p-8 bg-blue-400 backdrop-blur-lg rounded-xl shadow-lg"
      >
        <h1 className="text-4xl font-bold text-center text-white">
          Contact Me
        </h1>

        {/* Success Message */}
        {messageSent && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-green-700 bg-green-200 p-3 rounded text-center"
          >
            ✅ Email Sent Successfully!
          </motion.div>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Spam Prevention */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Name Field */}
          <label className="block font-semibold text-white">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 transition duration-300"
            required
          />

          {/* Email Field */}
          <label className="block font-semibold text-white">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 transition duration-300"
            required
          />

          {/* Message Field */}
          <label className="block font-semibold text-white">Message</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 transition duration-300"
            rows="4"
            required
          ></textarea>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg mt-4 hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;
