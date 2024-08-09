import React from "react";
import PropTypes from "prop-types";
import { easeOut, motion } from "framer-motion";
// import custome framer varients
import { fadeIn } from "../Varients";

function Wrapper({
  children,
  className,
  initial,
  once,
  amount,
  position,
  delay,
  whileInView,
}) {
  return (
    <motion.div
      initial={initial}
      variants={fadeIn(position, delay)}
      viewport={{ once: once, amount: amount }}
      whileInView={whileInView}
      className={`${className} max-w-[1024px]   phone:px-[32px] tablet:max-w-[694px] m-auto`}
    >
      {children}
    </motion.div>
  );
}

export default Wrapper;

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
