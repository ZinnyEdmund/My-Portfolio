import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Project';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Background from '../components/Background';
import CustomCursor from '../components/Cursor';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      <CustomCursor />
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}