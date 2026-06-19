import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import GitHubStats from "./components/GitHubStats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <AnimatePresence>
      <div className="relative">
        {/* Noise Overlay */}
        <div className="noise" />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <GitHubStats />
          <Contact />
        </motion.main>

        {/* Footer */}
        <Footer />
      </div>
    </AnimatePresence>
  );
}
