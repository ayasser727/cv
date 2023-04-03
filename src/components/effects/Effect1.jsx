import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  in: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.2,
    },
  },
  out: {
    opacity: 0,
    scale: 1.3,
    y: 40,
    transition: {
      duration: 0.3,
    },
  },
};

const TransitionEffect1 = ({ children }) => {
  const { asPath } = useRouter();

  return (
    <div className="effect-1">
      <motion.div
        key={true}
        variants={variants}
        animate="in"
        initial="out"
        exit="out"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default TransitionEffect1;
