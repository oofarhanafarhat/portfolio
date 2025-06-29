"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiMail, FiLinkedin } from "react-icons/fi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black text-white"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-fuchsia-300 mb-6"
        >
          Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 mb-6"
        >
          I'd love to hear from you! Reach out via email or use the form below.
        </motion.p>

        {/* Contact Info */}
        <div className="mb-8 flex justify-center gap-6 text-gray-300">
          <div className="flex items-center gap-2">
            <FiMail />
            <span>khnkaneez@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FiLinkedin />
            <Link
              href="https://www.linkedin.com/in/khn-kaneez-531032150/"
              target="_blank"
              className="hover:underline text-blue-400"
            >
              LinkedIn
            </Link>
          </div>
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg text-left space-y-4"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              placeholder="Your message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-fuchsia-600 hover:bg-fuchsia-800 transition text-white font-bold py-3 rounded-md shadow"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
