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
      <body className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden bg-white text-black`}>
        {children}

        <Script
          src="https://cdn.zanderio.ai/widget/loader.js"
          data-id="wdg_7YQM9CZSU9lSqIucZUdrvnnw"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}