"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { assets } from "@/assets/assets";

const tech = [
  "React",
  "Next.js",
  "Tailwind",
  "Framer Motion",
  "Node.js",
  "MongoDB",
];

const stats = [
  { number: "30+", title: "Projects" },
  { number: "2+", title: "Years Learning" },
  { number: "100%", title: "Responsive" },
];

export default function Header() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] text-white">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[130px]" />
        <div className="absolute left-1/2 top-1/3 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]" />
      </div>

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
          linear-gradient(to right,#fff 1px,transparent 1px),
          linear-gradient(to bottom,#fff 1px,transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-16 px-6 pt-24 lg:flex-row">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-400/30 bg-white/5 px-5 py-2 backdrop-blur-xl">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-sm text-emerald-300">
              Available For Freelance
            </span>
          </div>

          <h1 className="text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
            Crafting{" "}
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Digital Experiences
            </span>{" "}
            That Inspire
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-gray-400">
            I build premium websites using React, Next.js and modern animations
            that feel fast, elegant and convert visitors into customers.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <button className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold transition hover:scale-105 hover:shadow-xl">
              View Projects →
            </button>
            <button className="rounded-full border border-white/20 bg-white/5 px-8 py-4 backdrop-blur-xl transition hover:bg-white/10">
              Download CV
            </button>
          </div>

          {/* Tech Stack */}
          <div className="mt-10 flex flex-wrap gap-3">
            {tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 backdrop-blur-xl"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-10">
            {stats.map((item) => (
              <div key={item.title}>
                <h2 className="text-4xl font-bold text-cyan-400">
                  {item.number}
                </h2>
                <p className="mt-2 text-gray-400">{item.title}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-1 justify-center items-center"
        >
          {/* Glow */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[100px]"
          />

          {/* Perfect Circular Wrapper with Strict Overflow Hidden */}
          <div className="relative h-[360px] w-[360px] lg:h-[410px] lg:w-[410px] rounded-full border-2 border-cyan-500/40 bg-gradient-to-b from-[#0f172a] to-[#050816] shadow-[0_0_50px_rgba(6,182,212,0.15)] overflow-hidden flex items-end justify-center">
            
            {/* Image strictly bounded inside circle */}
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="relative h-full w-full flex items-end justify-center">
              <Image
                src={assets.profile_img}
                alt="profile"
                width={400}
                height={500}
                priority
                className="h-[105%] w-auto object-cover object-top"
              />
            </motion.div>

            {/* Dark gradient fade at bottom for blending */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-40 pointer-events-none" />
          </div>

          {/* Floating Card 1 */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute left-0 top-6 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl shadow-lg"
          >
            🚀
            <p className="mt-1 text-sm font-semibold">30+ Projects</p>
            <span className="text-xs text-gray-400">Completed</span>
          </motion.div>

          {/* Floating Card 2 */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute right-0 top-20 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl shadow-lg"
          >
            ⚡
            <p className="mt-1 text-sm font-semibold">Fast UI</p>
            <span className="text-xs text-gray-400">Performance</span>
          </motion.div>

          {/* Experience Badge */}
          <div className="absolute bottom-4 right-4 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-xl border-4 border-[#050816]">
            <h3 className="text-2xl font-bold">2+</h3>
            <span className="text-xs">Years</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center"
      >
        <p className="text-xs tracking-[5px] text-gray-500">SCROLL</p>
        <div className="mx-auto mt-2 h-8 w-5 rounded-full border border-white/20" />
      </motion.div>
    </section>
  );
}