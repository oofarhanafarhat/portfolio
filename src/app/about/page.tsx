"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left flex-1"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-fuchsia-300">
            About Me
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
            I&apos;m <span className="font-semibold text-fuchsia-400">Farhana Farhat</span>, a passionate Full Stack Developer specializing in{" "}
            <span className="font-semibold text-blue-300">Next.js</span> and{" "}
            <span className="font-semibold text-blue-300">Tailwind CSS</span>. I enjoy building modern, interactive, and responsive web applications that create impact.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0 ">Currently diving into Generative AI with Python and building automation workflows to strengthen my technical toolkit and create efficient, intelligent solutions.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-fuchsia-500"
        >
          <Image
            src="/pic.jpg"
            alt="Farhana Farhat"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
