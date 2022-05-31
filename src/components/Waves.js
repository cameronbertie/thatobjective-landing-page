import React from "react";
import { motion } from "framer-motion";

const loadingContainer = {
  width: "100%",
  height: "49.655px",
  display: "flex",
  justifyContent: "space-around",
  padding: "0 0 60px 0"
};

const loadingCircle = {
  display: "block",
  width: "35px",
  height: "35px",
  backgroundColor: "white"
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2
    }
  },
  end: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const loadingCircleVariants = {
  start: {
    y: "0%"
  },
  end: {
    y: "33.3%"
  }
};

const loadingCircleTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut"
};

export default function ThreeDotsWave() {
  return (
    <motion.div
      style={loadingContainer}
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      <motion.img
      src="/event-image.png"
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.img
      src="/play-image.png"
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.img
      src="/meal-image.png"
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.img
      src="/workout-image.png"
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.img
      src="/sleep-image.png"
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.img
      src="/meditation-image.png"
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
    </motion.div>
  );
}