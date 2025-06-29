"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contect" },
  ];

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Farhana Farhat</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="hover:text-fuchsia-400 transition">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden flex flex-col gap-4 px-6 mt-4 bg-gray-800 rounded-md py-4"
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-white hover:text-fuchsia-400 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
