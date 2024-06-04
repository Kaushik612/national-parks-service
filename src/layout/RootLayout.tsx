import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import AnimatedLayout from "./AnimatedLayout";

const RootLayout = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={true}>
      <motion.div
        key={location.pathname}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.75,
        }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          animateState: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          exitState: {
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          },
        }}
        className="w-full h-screen"
      >
        <AnimatedLayout />
      </motion.div>
    </AnimatePresence>
  );
};

export default RootLayout;
