'use client';

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { workData } from "@/assets/assets";

const categories = ["All", "Next.js", "Shopify", "WordPress"];

const Work = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = workData.filter(
    (project) => activeTab === "All" || project.category === activeTab
  );

  return (
    <section
      id="work"
      className="relative w-full bg-[#FAFAFA] px-0 md:px-6 py-24 md:py-32 text-black md:px-[10%] overflow-hidden selection:bg-[#D4AF37] selection:text-white"
    >
      <div className="mx-auto w-full max-w-7xl">
        
        {/* HEADER & FILTER TABS (Added horizontal padding for mobile) */}
        <div className="px-6 md:px-0 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 md:gap-10 border-b-2 border-black pb-10 md:pb-12 mb-10 md:mb-16">
          
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D4AF37] mb-4 md:mb-6"
            >
              Case Studies
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-black tracking-tighter leading-[0.85] uppercase"
            >
              Selected <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>
                Works.
              </span>
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-4 md:gap-8"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`relative text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 pb-2 ${
                  activeTab === cat ? "text-black" : "text-black/30 hover:text-black/60"
                }`}
              >
                {cat}
                {activeTab === cat && (
                  <motion.div
                    layoutId="workTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37]"
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>

        {/* PROJECTS SECTION: Slider on Mobile, Grid on Desktop */}
        {/* Added custom scrollbar hiding styles inline or via classes if you have a plugin */}
        <motion.div 
          layout 
          className="flex md:grid md:grid-cols-2 gap-6 md:gap-x-12 md:gap-y-20 lg:gap-x-16 lg:gap-y-24 
                     overflow-x-auto md:overflow-visible snap-x snap-mandatory 
                     px-6 md:px-0 pb-12 md:pb-0 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const num = String(index + 1).padStart(2, '0');
              
              return (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, filter: 'blur(5px)' }}
                  transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                  // Mobile: Fixed width (85vw) for slider effect. Desktop: 100% width of grid column.
                  className="group flex flex-col w-[85vw] md:w-full flex-shrink-0 snap-center md:snap-align-none h-full"
                >
                  
                  {/* 🔥 FIXED IMAGE CONTAINER */}
                  <div className="relative w-full aspect-[4/3] bg-gray-50 overflow-hidden mb-6 md:mb-8 border border-gray-200">
                    
                    {/* Floating Number */}
                    <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20 text-2xl md:text-3xl font-black text-black/10 select-none">
                      /{num}
                    </div>
                    
                    {/* FIXED IMAGE */}
                    <Image
                      src={project.bgImage}
                      alt={project.title}
                      fill
                      className="object-contain p-6 md:p-10 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out pointer-events-none md:pointer-events-auto"
                    />
                    
                    {/* Hover Launch Button (Desktop only hover effect, Mobile shows link below) */}
                    {project.liveSite && (
                      <a 
                        href={project.liveSite} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hidden md:flex absolute inset-0 items-center justify-center bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm z-20"
                      >
                        <span className="flex items-center gap-3 bg-black px-6 py-3 text-[10px] font-black uppercase tracking-widest text-white hover:bg-[#D4AF37] hover:text-black transition-colors shadow-xl">
                          Launch Site <ArrowUpRight className="w-4 h-4" />
                        </span>
                      </a>
                    )}
                  </div>

                  {/* Content Container */}
                  <div className="flex flex-col flex-grow">
                    
                    <div className="flex items-center gap-4 mb-3 md:mb-4">
                      <span className="px-3 py-1 border border-black/20 text-[9px] font-black uppercase tracking-[0.2em] text-black">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-black tracking-tight leading-[1.1] mb-3 md:mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-xs md:text-sm font-medium leading-relaxed text-black/60 mb-6 md:mb-8 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    {project.techStack && (
                      <div className="flex flex-wrap gap-y-2 gap-x-4 mt-auto border-t border-black/10 pt-4 md:pt-5">
                        {project.techStack.map((item) => (
                          <span
                            key={item}
                            className="text-[9px] font-bold text-black/50 uppercase tracking-[0.1em]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Mobile Only Live Link */}
                    {project.liveSite && (
                      <a
                        href={project.liveSite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="md:hidden mt-5 flex items-center justify-between gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white bg-black px-5 py-3 w-full active:scale-95 transition-transform"
                      >
                        View Live Project <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="w-full py-20 flex flex-col items-center text-center px-6"
          >
            <p className="text-xl md:text-2xl font-black text-black/20 uppercase tracking-widest">No Projects found in this category.</p>
            <button onClick={() => setActiveTab("All")} className="mt-6 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] border-b border-[#D4AF37] pb-1">
              View All Works
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default Work;