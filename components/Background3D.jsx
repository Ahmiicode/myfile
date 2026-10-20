"use client";

import { motion } from "framer-motion";

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-white">
      {/* Subtle Light Grid Base */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* 3D Animated Wireframe Cube (Top Right) */}
      <motion.div
        animate={{ rotateX: [0, 360], rotateY: [0, 360], rotateZ: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 w-[300px] h-[300px] md:w-[500px] md:h-[500px] border-[1px] border-gray-200/40"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 border-[1px] border-[#D4AF37]/20" style={{ transform: "translateZ(150px)" }}></div>
        <div className="absolute inset-0 border-[1px] border-gray-200/40" style={{ transform: "rotateY(90deg) translateZ(150px)" }}></div>
        <div className="absolute inset-0 border-[1px] border-gray-200/40" style={{ transform: "rotateX(90deg) translateZ(150px)" }}></div>
      </motion.div>

      {/* 3D Minimal Golden Torus/Rings (Bottom Left) */}
      <motion.div
        animate={{ rotateX: [360, 0], rotateY: [360, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border-[1px] border-gray-200/40"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 border-[1px] border-[#D4AF37]/30 rounded-full" style={{ transform: "rotateX(60deg)" }}></div>
        <div className="absolute inset-0 border-[1px] border-gray-200/40 rounded-full" style={{ transform: "rotateY(60deg)" }}></div>
      </motion.div>
      
      {/* Tiny Floating Golden Cube (Center Left) */}
      <motion.div
        animate={{ rotateX: [0, -360], rotateY: [0, 360], y: [0, -40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] left-[10%] w-16 h-16 border-[1px] border-[#D4AF37]/40"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 border-[1px] border-[#D4AF37]/20" style={{ transform: "translateZ(32px)" }}></div>
        <div className="absolute inset-0 border-[1px] border-[#D4AF37]/20" style={{ transform: "rotateY(90deg) translateZ(32px)" }}></div>
      </motion.div>
    </div>
  );
}