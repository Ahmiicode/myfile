'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// SEO Optimized Questions & Answers
const faqs = [
  {
    question: "What types of websites and applications do you build?",
    answer: "I specialize in developing high-performance custom web applications using Next.js and the MERN stack. I also build conversion-optimized e-commerce stores on Shopify and WordPress.",
  },
  {
    question: "Are your websites optimized for Google SEO?",
    answer: "Yes, absolutely. Every project I deliver includes technical On-Page SEO, extremely fast page load speeds, and mobile-first responsive design to ensure you rank higher on search engines.",
  },
  {
    question: "How long does it take to complete a project?",
    answer: "A standard premium landing page takes about 1-2 weeks. More complex full-stack web applications or custom e-commerce platforms can take 4-8 weeks depending on the required features and scale.",
  },
  {
    question: "Do you redesign existing websites?",
    answer: "Yes. I help businesses upgrade their outdated websites by migrating them to modern technologies like Next.js or headless CMS architectures, vastly improving both speed and user experience.",
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer: "Yes, I offer post-launch support and maintenance packages. This ensures your website stays secure, plugins/packages remain up-to-date, and your platform scales smoothly as your business grows.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative w-full bg-[#FAFAFA] px-6 py-32 text-black md:px-[10%] overflow-hidden selection:bg-[#D4AF37] selection:text-white"
    >
      <div className="mx-auto w-full max-w-7xl flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* LEFT SIDE - BRUTALIST HEADING */}
        <div className="w-full lg:w-[40%] lg:sticky lg:top-32 lg:h-fit">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D4AF37] mb-6"
          >
            Common Queries
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-black tracking-tighter leading-[0.9] uppercase"
          >
            The <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>
              Details.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-sm text-sm font-bold text-black/50 leading-relaxed uppercase tracking-widest border-l-2 border-[#D4AF37] pl-4"
          >
            Everything you need to know about my workflow, tech stack, and how we collaborate.
          </motion.p>
        </div>

        {/* RIGHT SIDE - EDITORIAL ACCORDION */}
        <div className="w-full lg:w-[60%] flex flex-col border-t-2 border-black">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            // Format number as 01, 02, etc.
            const num = String(index + 1).padStart(2, '0');

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-b-2 border-black overflow-hidden group"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between py-8 text-left transition-colors duration-300"
                >
                  <div className="flex items-center gap-6 md:gap-10">
                    {/* Brutalist Numbering */}
                    <span className={`text-sm md:text-lg font-black transition-colors duration-300 ${isOpen ? 'text-[#D4AF37]' : 'text-black/30 group-hover:text-black'}`}>
                      /{num}
                    </span>
                    
                    {/* Question with Hover Indent Effect */}
                    <h3 className={`text-xl md:text-3xl font-black tracking-tight uppercase transition-all duration-300 ${isOpen ? 'text-[#D4AF37] pl-2' : 'text-black group-hover:pl-2'}`}>
                      {faq.question}
                    </h3>
                  </div>
                  
                  {/* Bespoke Animated Cross/Plus Icon */}
                  <div className="relative w-6 h-6 shrink-0 ml-4 flex items-center justify-center">
                    <motion.span 
                      animate={{ rotate: isOpen ? 180 : 0, opacity: isOpen ? 0 : 1 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute w-full h-[2.5px] bg-black"
                    />
                    <motion.span 
                      animate={{ rotate: isOpen ? 225 : 90, backgroundColor: isOpen ? '#D4AF37' : '#000' }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute w-full h-[2.5px] bg-black"
                    />
                     <motion.span 
                      animate={{ rotate: isOpen ? 135 : 90, opacity: isOpen ? 1 : 0, backgroundColor: isOpen ? '#D4AF37' : '#000' }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute w-full h-[2.5px]"
                    />
                  </div>
                </button>

                {/* Animated Answer Body */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                    >
                      {/* Left padding matches the gap of the title to align text perfectly */}
                      <p className="pb-10 pl-[52px] md:pl-[68px] text-base md:text-lg font-medium leading-relaxed text-black/70 pr-4 md:pr-12">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;