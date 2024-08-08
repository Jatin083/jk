import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (!sectionElement) return;

    // Create a GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionElement,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        pin: true,
        // markers: true, // Remove this line in production
      }
    });

    // Add animations to the timeline in sequence
    tl.fromTo(
      sectionElement.querySelectorAll('.skill-item1'),
      { opacity: 0, filter: 'blur(10px)' },
      { opacity: 1, filter: 'blur(0px)', stagger: 0.3, duration: 1 }
    )
    .fromTo(
      sectionElement.querySelectorAll('.skill-item2'),
      { opacity: 0, filter: 'blur(10px)' },
      { opacity: 1, filter: 'blur(0px)', stagger: 0.3, duration: 1 },
      '-=0.8' // Start this animation 0.8 seconds before the previous one ends
    )
    .fromTo(
      sectionElement.querySelectorAll('.skill-item3'),
      { opacity: 0, filter: 'blur(10px)' },
      { opacity: 1, filter: 'blur(0px)', stagger: 0.3, duration: 1 },
      '-=0.8'
    )
    .fromTo(
      sectionElement.querySelectorAll('.skill-item4'),
      { opacity: 0, filter: 'blur(10px)' },
      { opacity: 1, filter: 'blur(0px)', stagger: 0.3, duration: 1 },
      '-=0.8'
    )
    .fromTo(
      sectionElement.querySelectorAll('.skill-item5'),
      { opacity: 0, filter: 'blur(10px)' },
      { opacity: 1, filter: 'blur(0px)', stagger: 0.3, duration: 1 },
      '-=0.8'
    )
    .fromTo(
      sectionElement.querySelectorAll('.skill-item6'),
      { opacity: 0, filter: 'blur(10px)' },
      { opacity: 1, filter: 'blur(0px)', stagger: 0.3, duration: 1 },
      '-=0.8'
    )
    .fromTo(
      sectionElement.querySelectorAll('.skill-item7'),
      { opacity: 0, filter: 'blur(10px)' },
      { opacity: 1, filter: 'blur(0px)', stagger: 0.3, duration: 1 },
      '-=0.8'
    )
    .fromTo(
      sectionElement.querySelectorAll('.skill-item8'),
      { opacity: 0, filter: 'blur(10px)' },
      { opacity: 1, filter: 'blur(0px)', stagger: 0.3, duration: 1 },
      '-=0.8'
    )
    .fromTo(
      sectionElement.querySelectorAll('.skill-item9'),
      { opacity: 0, filter: 'blur(10px)' },
      { opacity: 1, filter: 'blur(0px)', stagger: 0.3, duration: 1 },
      '-=0.8'
    )
    .fromTo(
      sectionElement.querySelectorAll('.skill-item10'),
      { opacity: 0, filter: 'blur(10px)' },
      { opacity: 1, filter: 'blur(0px)', stagger: 0.3, duration: 1 },
      '-=0.8'
    )
    .fromTo(
      sectionElement.querySelectorAll('.skill-item11'),
      { opacity: 0, filter: 'blur(10px)' },
      { opacity: 1, filter: 'blur(0px)', stagger: 0.3, duration: 1 },
      '-=0.8'
    )
    .fromTo(
      sectionElement.querySelectorAll('.skill-item12'),
      { opacity: 0, filter: 'blur(10px)' },
      { opacity: 1, filter: 'blur(0px)', stagger: 0.3, duration: 1 },
      '-=0.8'
    )
    .fromTo(
      sectionElement.querySelectorAll('.skill-item13'),
      { opacity: 0, filter: 'blur(10px)' },
      { opacity: 1, filter: 'blur(0px)', stagger: 0.3, duration: 1 },
      '-=0.8'
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className='min-h-screen w-full'>
      <div className='my-10 flex justify-center h-[12vh]  w-full'>
        <h1 className='text-7xl font-normal h-full max-md:my-[5vh]  text-white fixed'>Skills</h1>
      </div>
      <div className='flex flex-wrap w-[70%] gap-[2vh] p-[0vw,5vw] max-md:h-[10vh]  justify-center text-white mx-auto'>
        <h2 className='skill-item2 max-md:text-[6vw] p-[1vw,2vw] text-[3vw] px-5 rounded-[50px] font-normal transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] border-[1px] border-white'>Figma</h2>
        <h2 className='skill-item7 max-md:text-[6vw] p-[1vw,2vw] text-[3vw] px-5 rounded-[50px] font-normal transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] border-[1px] border-white'>React</h2>
        <h2 className='skill-item13 max-md:text-[6vw] p-[1vw,2vw] text-[3vw] rounded-[50px] px-5 font-normal transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] border-[1px] border-white'>HTML</h2>
        <h2 className='skill-item4 max-md:text-[6vw] p-[1vw,2vw] text-[3vw] rounded-[50px] px-5 font-normal transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] border-[1px] border-white'>CSS</h2>
        <h2 className='skill-item10 max-md:text-[6vw] p-[1vw,2vw] text-[3vw] rounded-[50px] px-5 font-normal transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] border-[1px] border-white'>JavaScript</h2>
        <h2 className='skill-item6 max-md:text-[6vw] p-[1vw,2vw] text-[3vw] rounded-[50px] px-5 font-normal transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] border-[1px] border-white'>MongoDB</h2>
        <h2 className='skill-item3 max-md:text-[6vw] p-[1vw,2vw] text-[3vw] rounded-[50px] px-5 font-normal transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] border-[1px] border-white'>Wordpress</h2>
        <h2 className='skill-item9 max-md:text-[6vw] p-[1vw,2vw] text-[3vw] rounded-[50px] px-5 font-normal transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] border-[1px] border-white'>Framer motion</h2>
        <h2 className='skill-item12 max-md:text-[6vw] p-[1vw,2vw] text-[3vw] rounded-[50px] px-5 font-normal transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] border-[1px] border-white'>Express & Node</h2>
        <h2 className='skill-item11 max-md:text-[6vw] p-[1vw,2vw] text-[3vw] rounded-[50px] px-5 font-normal transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] border-[1px] border-white'>Logo & Branding</h2>
        <h2 className='skill-item1 max-md:text-[6vw] p-[1vw,2vw] text-[3vw] rounded-[50px] px-5 font-normal transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] border-[1px] border-white'>Animation and 3D </h2>
        <h2 className='skill-item5 max-md:text-[6vw] p-[1vw,2vw] text-[3vw] rounded-[50px] px-5 font-normal transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] border-[1px] border-white'>Gsap</h2>
        <h2 className='skill-item8 max-md:text-[6vw] p-[1vw,2vw] text-[3vw] rounded-[50px] px-5 font-normal transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] border-[1px] border-white'>Reels for Instagram</h2>
      </div>
    </div>
  );
};

export default Skills;
