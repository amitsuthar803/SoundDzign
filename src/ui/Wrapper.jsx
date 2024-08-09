import React from "react";
import PropTypes from "prop-types";

function Wrapper({ children, className }) {
  return (
    <div
      className={`${className} max-w-[1024px]   phone:px-[32px] tablet:max-w-[694px] m-auto`}
    >
      {children}
    </div>
  );
}

export default Wrapper;

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
