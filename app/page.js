import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import FAQ from "@/components/CommonFaq"; // 👈 FAQ Import kiya hai
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      {/* 
        NOTE: Dark mode ke props hata diye hain kyunke ab humari 
        theme 100% Premium White hai. Is se code fast aur clean ho gaya hai.
      */}
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <FAQ /> {/* 👈 FAQ Section Yahan Add Hai */}
      <Contact />
      <Footer />

      {/* 🔥 FLOATING WHATSAPP ICON */}
      <WhatsAppButton />

      {/* 👇 GOOGLE SEO FAQ SCHEMA (Invisible for users, Visible for Google) 👇 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What types of websites and applications do you build?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "I specialize in developing high-performance custom web applications using Next.js and the MERN stack. I also build conversion-optimized e-commerce stores on Shopify and WordPress."
                }
              },
              {
                "@type": "Question",
                "name": "Are your websites optimized for Google SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, absolutely. Every project I deliver includes technical On-Page SEO, extremely fast page load speeds, and mobile-first responsive design to ensure you rank higher on search engines."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to complete a project?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A standard premium landing page takes about 1-2 weeks. More complex full-stack web applications or custom e-commerce platforms can take 4-8 weeks depending on the required features and scale."
                }
              },
              {
                "@type": "Question",
                "name": "Do you redesign existing websites?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. I help businesses upgrade their outdated websites by migrating them to modern technologies like Next.js or headless CMS architectures, vastly improving both speed and user experience."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide ongoing maintenance and support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, I offer post-launch support and maintenance packages. This ensures your website stays secure, plugins/packages remain up-to-date, and your platform scales smoothly as your business grows."
                }
              }
            ]
          }),
        }}
      />
      {/* 👆 SEO SCHEMA ENDS HERE 👆 */}
    </main>
  );
}