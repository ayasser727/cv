import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  fadeIn: {
    width: "1%",
    height: "1%",
    opacity: 0,
    x: 0,
    scale: 1.5,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  inactive: {
    opacity: 1,
    y: 0,
    x: 0,
    width: "100%",
    height: "100%",
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  fadeOut: {
    opacity: 0,
    width: "1%",
    height: "1%",
    scale: 1.4,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const TransitionEffect2 = ({ children }) => {
  const { asPath } = useRouter();

  return (
    <div className="effect-2">
      <motion.div
        key={true}
        variants={variants}
        initial="fadeIn"
        animate="inactive"
        exit="fadeOut"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default TransitionEffect2;
