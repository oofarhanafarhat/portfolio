"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <main className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-gray-900 to-black px-6 md:px-20 py-20">
      
      {/* Text Section */}
      <div className="text-center md:text-left max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-white leading-tight"
        >
          Hi, I'm Farhana Farhat
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-lg text-gray-300"
        >
          A passionate Full Stack Developer specialized in Next.js & Tailwind CSS. I craft modern, responsive websites.
        </motion.p>

        <Link
          href="#contact"
          className="inline-block mt-6 bg-fuchsia-600 hover:bg-fuchsia-800 text-white font-semibold px-6 py-3 rounded-md shadow-md transition"
        >
          Hire Me
        </Link>
      </div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-10 md:mt-0 rounded-full overflow-hidden w-52 h-52 md:w-64 md:h-64"
      >
        <Image
          src="/pic.jpg"
          alt="Farhana Farhat"
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
      </motion.div>
    </main>
  );
};

export default Hero;
