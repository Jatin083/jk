import React, { useEffect, useRef } from 'react';
import Navbar from './components/navbar';
import Header from './components/header';
import './App.css';
import Cards from './components/Cards';
import Title from './components/Title';
import Intro from './components/Intro';
import Marquee from './components/Marquee';
import Skills from './components/Skills';
import Footer from './components/footer';
import LocomotiveScroll from 'locomotive-scroll';
import Cursor from './components/Cursor'; // Import the Cursor component

function App() {
  const mainRef = useRef(null);
  const locomotiveScroll = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    locomotiveScroll.current = new LocomotiveScroll({
      el: mainRef.current,
      smooth: true,
    });

    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // Adjust this value for slower or faster playback
    }

    return () => {
      if (locomotiveScroll.current) {
        locomotiveScroll.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <div ref={mainRef} className="relative">
        <Cursor />
        <div className="relative h-screen w-full text-white">
          <video
            ref={videoRef}
            className="absolute top-0 left-0 h-full bg-black w-full object-cover z-0"
            src="https://res.cloudinary.com/dkgv8ynjp/video/upload/v1723087836/qrgzly5kvez0dujc8qyv.mp4" // Adjust the path as necessary
            autoPlay
            loop
            muted
            style={{ filter: 'brightness(1.4) hue-rotate(150deg) contrast(1.1)', border: 'none' }}
          />
          <div className="absolute bottom-0 left-0 h-[30%] w-full bg-gradient-to-t from-black to-transparent z-0"></div>
          <div className="relative z-10">
            <Navbar />
            <Header />
          </div>
        </div>
        <div className="relative h-[175vh] w-full max-md:h-[150vh] text-white bg-black">
          <div className="">
            <Title value="Projects" />
            <Cards />
          </div>
        </div>
        <div className="relative max-md:h-[90vh]   text-white bg-black">
          <div className="">
            <Title value="About ME" />
            <Intro />
          </div>
        </div>
        <div className="overflow-hidden  bg-black">
          <Skills />
          <Marquee />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
