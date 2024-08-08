import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Marquee = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.to(section.querySelector('.text'), {
      xPercent: -73, 
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        // markers: true,
        start: '40% 40%',
        end: 'bottom top',
        scrub: 1.5,
        pin: true,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (<>
    <div className='pin-spacer h-full'></div>
    <div ref={sectionRef} className='w-full py-20    text-white'>
      <div className=' leading-none   flex whitespace-nowrap'>
        <h1 className='text text-[20vw] leading-none font-semibold font-sans uppercase pt-1 pr-20'>
          Contact Me for Freelance Work  </h1>
      </div>
    </div></>
  );
};

export default Marquee;
