import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ThemeToggle from "./toggle";

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

const MobileNavLink = ({ title, href }: { title: string; href: string }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-5xl uppercase flex flex-col 
      justify-center font-lora items-center gap-16 mt-16"
    >
      <a className="text-dark dark:text-light" href={href}>
        {title}
      </a>
      <Link to={"/top-parks"}>
        <button
          className="text-light cursor-pointer p-4 font-bold text-xl
           bg-[#1d3319] hover:bg-green-900
           transition-all ease-out duration-150 font-content rounded-md"
        >
          Most Visted Parks
        </button>
      </Link>
      <ThemeToggle />
    </motion.div>
  );
};

export default MobileNavLink;
