import { Outfit, Ovo } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Builds by Ahmad | Next.js & MERN Stack Developer",
  description: "Independent full-stack developer in Pakistan specializing in Next.js, MERN stack, Shopify, and WordPress. I build high-converting web applications.",
  keywords: ["Next.js developer", "MERN stack freelancer", "Shopify expert", "Web developer in Pakistan"],
  icons: {
    icon: "/favicon-52x52.png",
    shortcut: "/favicon-55x55.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden text-black relative bg-white`}>
        
        {/* 🔥 PURE CSS 3D STUDIO BACKGROUND (NO PNG/JPG) 🔥 */}
        <div className="fixed inset-0 z-[-1] h-full w-full overflow-hidden ">
          
          {/* 3D Horizon Line (Neeche se shadow aayega jaise zameen ho) */}
          <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-gray-100/70 to-transparent"></div>

          {/* Frost/Silver Highlight (Oopar Right se roshni aayegi) */}
          <div className="absolute -top-[20%] -right-[10%] h-[60vw] w-[60vw] rounded-full bg-[radial-gradient(circle,rgba(240,240,245,1)_0%,transparent_70%)]"></div>

          {/* Deep Ambient Shadow (Neeche Left par gehrai ke liye) */}
          <div className="absolute -bottom-[20%] -left-[10%] h-[70vw] w-[70vw] rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.03)_0%,transparent_70%)]"></div>

          {/* Minimal Gold Center Glow (Halka sa gold touch) */}
          <div className="absolute top-[20%] left-[20%] h-[40vw] w-[40vw] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)]"></div>

          {/* Premium CSS Noise/Grain Effect (Yeh 3D render wala texture dega) */}
          <div 
            className="absolute inset-0 opacity-[0.3] mix-blend-overlay" 
            style={{ 
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' 
            }}
          ></div>
        </div>

        {/* MAIN CONTENT */}
        <div className="relative z-10">
          {children}
        </div>

        {/* AI CHAT WIDGET */}
        <Script
          src="https://cdn.zanderio.ai/widget/loader.js"
          data-id="wdg_7YQM9CZSU9lSqIucZUdrvnnw"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}