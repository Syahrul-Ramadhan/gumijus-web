import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import HeroSection from "../components/home/HeroHome";
import AboutSection from "../components/home/AboutHome";
function Home() {
  return (
    <div className="overflow-hidden ">
      <Navbar />
      <section className="relative w-full overflow-hidden">
        {/* Hero Section Content */}
        <HeroSection />
        {/* About Section */}
        <AboutSection />
        {/* Decoration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }} 
          className="flex justify-center">
          <img src="/icons/decoration.svg" alt="decoration" className="w-25 md:w-35 2xl:w-45 max-w-md" />
        </motion.div>
      </section>
      <BackToTop />
      <Footer bgColor="bg-[#EC7825]" />
    </div>
  );
}

export default Home;
