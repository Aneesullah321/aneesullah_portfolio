import React from 'react';
import '../index.css';
import pdf from '../assets/Anees_Resume.pdf';
import Spline from '@splinetool/react-spline';

const Hero2 = () => {
  const handleClick = () => {
    const link = document.createElement('a');
    link.href = pdf;
    link.download = 'Aneesullah_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-white">

      {/* 3D BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="w-full h-full scale-150 lg:scale-175 translate-x-32 lg:translate-x-60">
          <Spline scene="https://prod.spline.design/lrt9BtbLFrdCCiVG/scene.splinecode" />
        </div>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* MAIN CONTENT */}
      <div className="pt-32 px-5">
        <div className="w-full flex flex-col lg:flex-row items-center">

          {/* LEFT SIDE */}
          <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="lg:w-1/2 mb-10 lg:mb-0 p-0 md:p-20">
            <h1 className="text-2xl lg:text-3xl font-bold mb-4">
              Hey !
            </h1>

            <h1 className="text-xl lg:text-7xl font-bold mb-4">
              I'm <span className="text-[#8A2BE2]">ANEESULLAH</span>
            </h1>

            <p className="text-lg lg:text-xl mb-8 max-w-xl">
              AI graduate transitioning into Data Analytics with strong skills in SQL, Python, and data visualization.
            </p>

            {/* 🔥 Upgraded Button */}
            <button
              onClick={handleClick}
              className="relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white 
                         bg-gradient-to-r from-[#8A2BE2] to-purple-500 
                         rounded-full transition-all duration-300 
                         hover:scale-105 hover:shadow-[0_0_30px_rgba(138,43,226,0.7)]"
            >
              Download Resume
            </button>
          </div>

          {/* RIGHT SIDE ROBOT */}
          <div className="lg:w-1/2 h-[900px] flex justify-end items-center translate-x-40">
            <Spline scene="https://prod.spline.design/Mkzf3VyhGQJusRrs/scene.splinecode" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero2;
