import Image from "next/image";
import Navbar from "./componenets/Navbar";
import HeroSection from "./componenets/HeroSection";
import MainSection from "./componenets/MainSection";
import Projects from "./componenets/Projects";
import Footer from "./componenets/Footer";

export default function Home() {
  return (
    <div className="bg-[#151515] overflow-x-hidden  ">
      <Navbar />
      <HeroSection />
      <MainSection />
      <Projects />
      <Footer />
    </div>
  );
}
