import { motion } from "framer-motion";
import BentoLayout from "../layout/BentoLayout";
import Navbar from "../components/navbar";

const content = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

const title = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const About = () => {
  return (
    <>
      <Navbar />
      <motion.main
        className="w-full min-h-screen"
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
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 1.75,
        }}
      >
        <section
          className="max-w-[1440px] p-12 my-12 mx-auto text-black 
        dark:text-white"
        >
          <motion.div
            className="grid grid-cols-mobile1fr sm:grid-cols-1fr gap-20"
            variants={content}
            animate="animate"
            initial="initial"
          >
            <motion.div
              className="flex flex-col gap-12 relative font-content"
              variants={title}
            >
              <h1 className="font-bold font-body text-[5rem] ">About</h1>
              <p className="text-xl tracking-wider">
                {" "}
                The United States has 62 protected areas known as national parks
                that are operated by the National Park Service, an agency of the
                Department of the Interior. National parks must be established
                by an act of the United States Congress. A bill creating the
                first national park, Yellowstone, was signed into law by
                President Ulysses S. Grant in 1872, followed by Mackinac
                National Park in 1875 (decommissioned in 1895), and then Rock
                Creek Park (later merged into National Capital Parks), Sequoia
                and Yosemite in 1890.
              </p>
              <p className="text-xl tracking-wider">
                The Organic Act of 1916 created the National Park Service "to
                conserve the scenery and the natural and historic objects and
                wildlife therein, and to provide for the enjoyment of the same
                in such manner and by such means as will leave them unimpaired
                for the enjoyment of future generations." Many current national
                parks had been previously protected as national monuments by the
                president under the Antiquities Act before being upgraded by
                Congress.
              </p>
              <p className="text-xl tracking-wider">
                Seven national parks (including six in Alaska) are paired with a
                national preserve, areas with different levels of protection
                that are administered together but considered separate units and
                whose areas are not included in the figures below. Criteria for
                the selection of national parks include natural beauty, unique
                geological features, unusual ecosystems, and recreational
                opportunities (though these criteria are not always considered
                together). National monuments, on the other hand, are frequently
                chosen for their historical or archaeological significance.
              </p>
            </motion.div>
            <BentoLayout />
          </motion.div>
        </section>
      </motion.main>
    </>
  );
};

export default About;
