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
          Hi, I&apos;m Farhana Farhat
        </motion.h1>

      
         <p className="py-3 text-xl font-normal font-sans ">A passionate Full Stack Developer specialized in Next.js and Tailwind CSS. I craft modern responsive websites.</p> 
      

       
         
        
         <p className="py-3 text-xl font-normal font-sans "> Currently diving into Generative AI with Python and building automation workflows to strengthen my technical toolkit and create efficient, intelligent solutions.</p>
     

        <Link
          href="#contact"
          className="inline-block mt-6 bg-fuchsia-600 hover:bg-fuchsia-800 text-white font-semibold px-6 py-3 rounded-md shadow-md transition"
        >
          Hire Me
        </Link>
      </div>

      {/* Image Section with loop animation */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1], // zoom in and out
          rotate: [0, 1, -1, 0], // slight rotate left-right
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="mt-10 md:mt-0 rounded-full overflow-hidden w-52 h-52 md:w-64 md:h-64 shadow-lg"
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
