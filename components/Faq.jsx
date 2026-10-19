"use client";

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
      className="relative bg-white px-6 py-32 text-black md:px-[10%]"
    >
      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-16 lg:grid-cols-12">
        
        {/* LEFT SIDE - HEADING */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 lg:h-fit">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#D4AF37]"
          >
            Common Queries
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-4xl font-black tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
          >
            Frequently Asked <span className="text-gray-400">Questions.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-sm text-lg font-medium leading-relaxed text-gray-600"
          >
            Everything you need to know about my services, tech stack, and how we can work together.
          </motion.p>
        </div>

        {/* RIGHT SIDE - ACCORDION */}
        <div className="lg:col-span-7">
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-gray-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-[#D4AF37]"
                >
                  <h3 className={`text-lg font-black transition-colors md:text-xl ${openIndex === index ? "text-[#D4AF37]" : "text-gray-900"}`}>
                    {faq.question}
                  </h3>
                  
                  {/* Plus / Minus Icon */}
                  <span className="ml-6 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-xl font-light">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {/* Animated Answer Body */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-base font-medium leading-relaxed text-gray-600 pr-10">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;