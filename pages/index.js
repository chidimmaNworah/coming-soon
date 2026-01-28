import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SEO />
      <Navbar />
      <main>
        <Hero />
        {/* <Services />
        <About />
        <Products />
        <Contact /> */}
      </main>
      <Footer />
    </>
  );
}
