import Motion from "@/components/Motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Numbers from "@/components/Numbers";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div id="prog" />
      <Navbar />
      <div className="wrap" id="top">
        <Hero />
        <Featured />
      </div>
      <Numbers />
      <div className="wrap">
        <About />
        <Services />
        <Work />
        <Skills />
        <Contact />
        <Footer />
      </div>
      <Motion />
    </>
  );
}
