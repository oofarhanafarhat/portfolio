"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiSanity,
  SiPostgresql,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Sanity", icon: <SiSanity className="text-red-400" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-400" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-400" /> },
];

const Skills = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const loop = setInterval(() => {
      setShow(false);
      setTimeout(() => setShow(true), 400);
    }, 6000);

    return () => clearInterval(loop);
  }, []);

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.4, ease: "easeOut" },
    }),
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-fuchsia-300 mb-10">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {show &&
            skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg shadow-md"
                variants={itemVariant}
                initial="hidden"
                animate="visible"
                custom={i}
              >
                <span className="text-xl">{skill.icon}</span>
                <span className="text-base">{skill.name}</span>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
