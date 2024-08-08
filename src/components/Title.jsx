import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Title = ({ value, animationDirection = 'bottom', onComplete }) => {
  const { ref, inView } = useInView({
    threshold: 0.25, // Trigger animation when 25% of the element is in view
    triggerOnce: true, // Animate only once
  });

  // Define the animation variants
  const animation = {
    bottom: {
      initial: { y: "100%" },
      enter: {
        y: "0",
        transition: {
          duration: 0.75,
          ease: [0.33, 1, 0.68, 1],
        },
      },
    },
    left: {
      initial: { x: "-100%" },
      enter: {
        x: "0",
        transition: {
          duration: 0.75,
          ease: [0.33, 1, 0.68, 1],
        },
      },
    },
  };

  const selectedAnimation = animation[animationDirection] || animation.bottom;

  const handleAnimationComplete = () => {
    if (onComplete) {
      onComplete();
    }
  };

  return (
    <div className="flex justify-center"  ref={ref}>
      <div className='my-6'>
      <motion.h1
        className="text-7xl font-thin"
        variants={selectedAnimation}
        initial="initial"
        animate={inView ? "enter" : "initial"}
        onAnimationComplete={handleAnimationComplete}
      >
        {value}
      </motion.h1> 
      </div>
    </div>
  );
};

export default Title;
