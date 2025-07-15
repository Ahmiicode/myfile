import React from 'react';
import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'motion/react';

const Work = () => {
  return (
    <motion.section
      id="work"
      className="w-full max-w-6xl mx-auto px-6 py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Heading */}
      <motion.h2
        className="text-center text-4xl font-Ovo font-semibold mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        MY WORK
      </motion.h2>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
   <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 bg-white dark:bg-gray-900">
  <Image
    src={project.bgImage}
    alt={project.title}
    fill
    className="rounded-t-lg"
    style={{ objectFit: 'contain' }}
    priority={index < 2}
  />
</div>



            {/* Project Info */}
            <div className="p-5 bg-white dark:bg-gray-800 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 flex-grow">{project.description}</p>

              {/* Live Site Link */}
              {project.liveSite ? (
                <a
                  href={project.liveSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-lime-600 dark:text-lime-400 font-medium hover:underline"
                >
                  Live Site &rarr;
                </a>
              ) : (
                <span className="mt-4 text-gray-400 italic">No live site available</span>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Work;
