import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BsFillTreeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import MobileNavLink from "./MobileNavLink";
import ThemeToggle from "./toggle";

const Navbar = () => {
  const navItems = [
    {
      label: "About",
      href: "/about",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <header className="sticky top-0 z-20 py-3 backdrop-blur-lg border border-b border-neutral-700/80 text-black dark:text-white">
      <motion.div
        className="flex items-center justify-between px-4 py-2"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.75,
        }}
      >
        <Link to="/">
          <BsFillTreeFill size="50px" color="#1d3319" />
        </Link>
        {/* Mobile Navbar */}
        <div
          className="justify-end flex sm:hidden transition-all ease-in duration-300"
          onClick={toggle}
        >
          <HiMenuAlt2 size={30} />
        </div>
        <motion.div className="hidden sm:block" initial="hidden" animate="show">
          {navItems.map((navItem, index) => (
            <Link
              key={index}
              to={navItem.href}
              className="text-2xl cursor-pointer hover:border-b-2 hover:border-black 
              hover:dark:border-white
               transition-all ease-in duration-200 mr-[40px] font-content"
            >
              {navItem.label}
            </Link>
          ))}
          <Link to={"/top-parks"}>
            <button
              className="text-white  cursor-pointer p-4 font-bold text-xl
           bg-[#1d3319] hover:bg-green-900
           transition-all ease-out duration-150 font-content rounded-md"
            >
              Most Visited Parks
            </button>
          </Link>
        </motion.div>
        <div className="hidden sm:block">
          <ThemeToggle />
        </div>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-[90vh] origin-top
            bg-light dark:bg-dark p-10 z-20"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
                <p
                  className="cursor-pointer text-md text-dark dark:text-light"
                  onClick={toggle}
                >
                  <AiOutlineClose size={30} />
                </p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
              >
                {navItems.map((navItem, index) => {
                  return (
                    <div className="overflow-hidden" key={index}>
                      <MobileNavLink
                        title={navItem.label}
                        href={navItem.href}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
