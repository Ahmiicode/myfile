'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState("");
  const [contactMethod, setContactMethod] = useState("email");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (contactMethod === "whatsapp") {
      const phoneNumber = "923111666123"; 
      const text = `Hi Ahmad, I am ${name}.%0A%0AEmail: ${email}%0A%0AProject Details:%0A${message}`;
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
      
      window.open(whatsappUrl, "_blank");
      setResult("Redirecting to WhatsApp... 🚀");
      event.target.reset();
    } else {
      setResult("Sending...");
      formData.append("access_key", "62cc866d-0c97-4530-8383-4a3b40aaff56");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully 🚀");
        event.target.reset();
      } else {
        setResult("Something went wrong");
      }
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-white px-6 py-32 text-black md:px-[10%]"
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#D4AF37]">
          Next Steps
        </p>

        <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Let's start a <span className="text-gray-400">project.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-lg text-lg font-medium leading-relaxed text-gray-600">
          Have an idea or need a high-performance web solution? Choose how you'd like to reach out below.
        </p>
      </motion.div>

      {/* FORM */}
      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto mt-16 max-w-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm md:p-12"
      >
        
        {/* EMAIL VS WHATSAPP TOGGLE */}
        <div className="mb-10 flex justify-center">
          <div className="inline-flex rounded-none border border-gray-200 bg-white p-1">
            <button
              type="button"
              onClick={() => setContactMethod("email")}
              className={`px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all ${
                contactMethod === "email"
                  ? "bg-black text-white"
                  : "bg-transparent text-gray-500 hover:text-black"
              }`}
            >
              Send Email
            </button>
            <button
              type="button"
              onClick={() => setContactMethod("whatsapp")}
              className={`px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 ${
                contactMethod === "whatsapp"
                  ? "bg-[#25D366] text-white" 
                  : "bg-transparent text-gray-500 hover:text-[#25D366]"
              }`}
            >
              WhatsApp
            </button>
          </div>
        </div>

        {/* INPUTS - Clean Professional Placeholders */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Your Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="rounded-none border border-gray-200 bg-white px-5 py-4 text-sm outline-none transition-all focus:border-black focus:ring-0"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Your Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
              className="rounded-none border border-gray-200 bg-white px-5 py-4 text-sm outline-none transition-all focus:border-black focus:ring-0"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2">
          <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Project Details</label>
          <textarea
            rows="5"
            name="message"
            required
            placeholder="Tell me about your goals, timeline, and budget..."
            className="w-full rounded-none border border-gray-200 bg-white px-5 py-4 text-sm outline-none transition-all focus:border-black focus:ring-0"
          />
        </div>

        {/* DYNAMIC BUTTON */}
        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className={`mt-8 flex w-full items-center justify-center gap-3 px-8 py-5 text-sm font-bold uppercase tracking-widest text-white transition-all shadow-lg ${
            contactMethod === "whatsapp" ? "bg-[#25D366] hover:bg-[#1DA851]" : "bg-black hover:bg-gray-800"
          }`}
        >
          {contactMethod === "whatsapp" ? "Send to WhatsApp" : "Send Email"}
          
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.button>

        {/* STATUS MESSAGE */}
        {result && (
          <p className="mt-5 text-center text-sm font-bold tracking-wide text-[#D4AF37]">
            {result}
          </p>
        )}
      </motion.form>
    </section>
  );
};

export default Contact;