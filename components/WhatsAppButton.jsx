'use client'

import Image from "next/image";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/923030703449"  // 👈 apna number yahan change karo
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="w-14 h-14 rounded-full bg-green-500 shadow-lg shadow-green-500/40 flex items-center justify-center hover:bg-green-600 transition">
        
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="whatsapp"
          width={28}
          height={28}
        />

      </div>
    </motion.a>
  );
};

export default WhatsAppButton;