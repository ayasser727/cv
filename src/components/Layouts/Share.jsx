import React, { ReactNode } from "react";

import { motion } from "framer-motion";
import { randomIntFromInterval } from "@/utils/utils";

// const variants = {
//   hidden: { opacity: 0, x: -200, y: 0 },
//   enter: { opacity: 1, x: 0, y: 0 },
//   exit: { opacity: 0, x: 0, y: -100 },
// };

const variants = {
  fadeIn: {
    y: -200,
    opacity: 0,
    scale: 1.5,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  inactive: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  fadeOut: {
    opacity: 0,
    y: -200,
    scale: 1.4,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};
const variants1 = {
  fadeIn: {
    x: "-100%",
    opacity: 0,
    scale: 1.7,
    transition: {
      duration: 0.5,
      ease: "linear",
    },
  },
  inactive: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  fadeOut: {
    opacity: 0,
    x: "-100%",
    scale: 1.4,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const variants3 = {
  fadeIn: {
    opacity: 0,
    y: "200%",
    scale: 3,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  inactive: {
    opacity: 1,
    y: 0,

    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  fadeOut: {
    opacity: 0,
    y: "200%",
    scale: 3,

    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const variants2 = {
  fadeIn: {
    y: 50,
    scale: 0.5,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
  inactive: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },

  fadeOut: {
    y: 50,
    scale: 0.5,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const effect = [variants, variants1, variants2, variants3];
const Layout = ({ children, title, description }) => {
  return (
    <div>
      <motion.main
        initial="fadeIn"
        animate="inactive"
        exit="fadeOut"
        variants={effect[randomIntFromInterval(0, effect.length)] || effect[0]}
      >
        {children}
      </motion.main>
    </div>
  );
};

export default Layout;
