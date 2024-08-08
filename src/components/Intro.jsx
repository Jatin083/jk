import React from 'react';
import AnimatedText from './AnimatedText'; // Adjust the import path as needed

const Intro = () => {
  const introPhrases = [
    "My name is Jatin. As a dedicated web ",
    "developer, I thrive on creating captivating",
    "animations and effects, leveraging GSAP",
    "for seamless and smooth experiences.",
    "Currently, I'm diving deep into the realms ",
    "of Python, AI, and ML. aiming to blend",
    "futuristic tech into my projects and push",
    "the boundaries of what's possible."
  ];

  return (
    <div className='h-[90vh] w-full flex justify-center  bg-transparent  max-md:h-[120vh] relative'>
      <div className='flex word-wrap max-md:h-[40vh] max-md:w-vw] w-[60vw]  px-4  justify-center text-[45px] max-md:text-[25px]  max-md:px-1 font-normal'>
        <AnimatedText phrases={introPhrases} />
      </div>
    </div>
  );
};

export default Intro;
