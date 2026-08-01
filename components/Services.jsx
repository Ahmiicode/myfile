import React from "react";
import Image from "next/image";
import { assets, serviceData } from "@/assets/assets";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section
      id="services"
      className="w-full bg-[#0b0f19] text-white py-28 px-6 md:px-[12%] relative overflow-hidden"
    >

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e3a8a33,transparent_60%)]" />

      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto">

        <p className="text-blue-400 tracking-[0.3em] uppercase text-xs">
          What I Do
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mt-4">
          Services I Deliver
        </h2>

        <p className="text-gray-400 mt-5 text-sm md:text-base">
          Clean, fast and scalable digital solutions built like production-grade systems.
        </p>

      </div>

      {/* UNIQUE TIMELINE STYLE */}
      <div className="mt-20 max-w-4xl mx-auto relative">

        {/* vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-white/10" />

        {serviceData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative flex items-start gap-6 mb-10"
          >

            {/* DOT */}
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center z-10">
              <Image src={item.icon} className="w-4" />
            </div>

            {/* CONTENT */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 w-full hover:border-blue-500/40 transition">

              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed">
                {item.description}
              </p>

              <a
                href={item.link}
                className="inline-flex items-center gap-2 text-sm mt-4 text-blue-400 hover:text-blue-300 transition"
              >
                Open Service
                <Image src={assets.right_arrow} className="w-4" />
              </a>

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Services;