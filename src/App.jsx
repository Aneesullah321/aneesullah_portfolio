import { BrowserRouter } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import {
  About,
  Contact,
  Experience,
  Hero2,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";


const App = () => {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      once: true,     // Animate only once while scrolling down
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div>
          <Navbar />
          <Hero2 />
        </div>

        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <Footer />
      <Toaster position="bottom-right" reverseOrder={false} />
    </BrowserRouter>
  );
};

export default App;
