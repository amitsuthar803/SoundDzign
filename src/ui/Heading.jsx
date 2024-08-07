import React from "react";

function Heading({ children, className }) {
  return (
    <h2
      className={`${className} mt-0 pt-0  heading relative font-black m-0 p-0 text-white text-[2.5rem]`}
    >
      {children}
    </h2>
  );
}

export default Heading;
