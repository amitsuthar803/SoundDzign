import React from "react";
import { motion } from "framer-motion";

function Heading({ children, className, initial, whileInView }) {
  return (
    <motion.h2
      initial={initial}
      whileInView={whileInView}
      className={`${className} mt-0 pt-0 phone:text-[24px] phone:leading-[29px] leading-[48px]   heading relative font-black m-0 p-0 text-white text-[2.5rem]`}
    >
      {children}
    </motion.h2>
  );
}

export default Heading;
