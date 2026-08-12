import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import komponen
import Navbar from './component/navbar';
import Hero from './component/Hero';
import About from './component/About';
import Projects from './component/Projects';
import Footer from './component/Footer';
import Skills from './component/Skills';
import Certifications from './component/Certifications';
import Experience from './component/experience';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="min-h-screen text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Experience/>
      <Projects />
      <Footer />
    </main>
  );
}

export default App;