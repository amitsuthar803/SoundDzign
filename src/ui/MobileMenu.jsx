import React, { useEffect } from "react";
import { close } from "../assets/index";
import { motion, useAnimation } from "framer-motion";

function MobileMenu({ classname, showMenu, setShowMenu }) {
  // Animation controls for the motion components
  const controls = useAnimation();

  // UseEffect to trigger animations when showMenu is true (menu is fully visible)
  useEffect(() => {
    if (showMenu) {
      controls.start("visible");
      // Delay animation start by 1 second (1000 milliseconds)
    } else {
      controls.start("hidden");
    }
  }, [showMenu, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Staggering effect
        delayChildren: 0.5, // Delay before starting to stagger
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={showMenu ? { y: 0 } : { y: "-100%" }}
      transition={{ duration: 0.1, ease: [0.42, 0, 0.58, 1] }} // Smooth easing for slide-in effect

      className={` ${classname}  ${
        showMenu ? "translate-y-0" : "translate-y-[-100%]"
      } transition-transform duration-500`}
    >
      <div
        onClick={() => setShowMenu(false)}
        className="cursor-pointer absolute right-[65px] top-[44px]"
      >
        <img src={close} alt="Close" />
      </div>
      <motion.ul
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="flex flex-col gap-[30px] list-none p-0"
      >
        <motion.li variants={itemVariants} className="leading-[19px]">
          <a href="#about" className="text-[1rem] text-white font-extrabold">
            About
          </a>
        </motion.li>
        <motion.li variants={itemVariants} className="leading-[19px]">
          <a href="#topics" className="text-[1rem] text-white font-extrabold">
            Course Details
          </a>
        </motion.li>
        <motion.li variants={itemVariants} className="leading-[19px]">
          <a href="#blog" className="text-[1rem] text-white font-extrabold">
            Blog
          </a>
        </motion.li>
        <motion.li variants={itemVariants} className="leading-[19px]">
          <a
            href="#testimonials"
            className="text-[1rem] text-white font-extrabold"
          >
            Testimonials
          </a>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
}

export default MobileMenu;
