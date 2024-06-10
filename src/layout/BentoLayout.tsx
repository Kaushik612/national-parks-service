import clsx from "clsx";
import { motion } from "framer-motion";

//framer motion components
const imagesVariant = {
  initial: { x: 100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const BentoLayout = () => {
  const images = [
    "assets/crater-lake.jpg",
    "assets/death-valley.jpg",
    "assets/dry-tortugas.jpg",
    "assets/yellowstone.jpg",
    "assets/acadia.png",
    "assets/grand-canyon.png",
    "assets/zion.png",
  ];

  const baseClasses =
    "bg-[#f5f5f5] p-4 bg-cover bg-no-repeat bg-center border-[#94a3b8/10] border-2 rounded-sm row-span-1 mb-10";
  return (
    <motion.div
      className="grid grid-cols-1 auto-rows-[350px] auto-cols-[250px] md:auto-rows-[292px]
     md:grid-cols-2 p-8 gap-4 "
      variants={imagesVariant}
    >
      {[...Array(7)].map((_, i) => (
        <div
          key={i}
          style={{ backgroundImage: `url(${images[i]})` }}
          className={clsx(baseClasses, i === 3 || i === 6 ? "row-span-2" : "")}
        ></div>
      ))}
    </motion.div>
  );
};

export default BentoLayout;
