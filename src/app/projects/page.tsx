"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

interface Project {
  _id: string;
  title: string;
  description: string;
  image: any;
  vercel?: string;
}

const getProjects = async (): Promise<Project[]> => {
  const res = await client.fetch(`
    *[_type=="project"]{_id, title, description, image,vercel, demo}
  `);
  return res;
};

const Projects = () => {
  const [data, setData] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const projects = await getProjects();
      setData(projects);
    };
    fetchData();
  }, []);

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-fuchsia-300 mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.length === 0 ? (
            <p>Loading...</p>
          ) : (
            data.map((item, index) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white/5 backdrop-blur-md border border-gray-700 rounded-xl p-5 shadow-xl flex flex-col justify-between h-full"
              >
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="rounded-md object-cover w-full h-48 mb-4"
                  />
                )}

                <h3 className="text-xl font-semibold text-fuchsia-200">{item.title}</h3>
                <p className="text-gray-300 my-3 text-sm">{item.description}</p>

                <div className="mt-auto flex gap-3">
              {item.vercel && (
  <Link
    href={item.vercel}
    target="_blank"
    rel="noopener noreferrer"
    className=" justify-center mt-auto  px-6 bg-fuchsia-600 text-white text-sm shadow-md hover:bg-fuchsia-800 font-semibold py-2 rounded-lg transition duration-300 text-center items-center"
  >
    View Live
  </Link>
              )}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
