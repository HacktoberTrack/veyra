import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItworks";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ProductDemo from "@/components/ProductDemo";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <Hero />
      {/* <ProductDemo /> */}
      <HowItWorks />
      <Testimonials />
      <Footer />
    </main>
  );
}