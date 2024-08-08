import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import styles from './AnimatedText.module.css'; // Make sure this file exists

// Define the AnimatedText component
export default function AnimatedText({ phrases, animationDirection = 'bottom', onComplete }) {
  const { ref, inView } = useInView({
    threshold: 0.25, // Trigger animation when 25% of the element is in view
    triggerOnce: true // Animate only once
  });

  // Define the animation variants
  const animation = {
    bottom: {
      initial: { y: "100%" },
      enter: i => ({
        y: "0",
        transition: {
          duration: 0.75,
          ease: [0.33, 1, 0.68, 1],
          delay: 0.075 * i
        }
      })
    },
    left: {
      initial: { x: "-100%" },
      enter: i => ({
        x: "0",
        transition: {
          duration: 0.75,
          ease: [0.33, 1, 0.68, 1],
          delay: 0.075 * i
        }
      })
    },
  };

  const selectedAnimation = animation[animationDirection] || animation.bottom;

  const handleAnimationComplete = () => {
    if (onComplete) {
      onComplete();
    }
  };

  return (
    <div ref={ref} className={styles.body}>
      {phrases.map((phrase, index) => (
        <div key={index} className={styles.lineMask}>
          <motion.p
            custom={index}
            variants={selectedAnimation}
            initial="initial"
            animate={inView ? "enter" : "initial"}
            onAnimationComplete={index === phrases.length - 1 ? handleAnimationComplete : undefined}  className=''
          >
            {phrase}
          </motion.p>
        </div>
      ))}
    </div>
  );
}
