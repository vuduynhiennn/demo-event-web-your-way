"use client";

import { 
  motion as framerMotion, 
  AnimatePresence as FramerAnimatePresence 
} from "framer-motion";

export const motion = framerMotion;
export const AnimatePresence = FramerAnimatePresence;

export const fadeIn = (delay: number = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay }
});

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const slideIn = (direction: "left" | "right" | "up" | "down", delay: number = 0) => {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.5,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const scaleIn = (delay: number = 0) => ({
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5, 
      delay,
      ease: [0.25, 0.25, 0.25, 0.75] 
    }
  }
});