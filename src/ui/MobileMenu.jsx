import React, { useState } from "react";
import { close } from "../assets/index";

function MobileMenu({ classname, showMenu, setShowMenu }) {
  return (
    <div className={` ${classname}  ${showMenu ? "top-0" : "top-[-282px]"} `}>
      <div onClick={() => setShowMenu(false)} className=" cursor-pointer">
        <img className="fixed right-[56px] top-[44px]" src={close} alt="" />
      </div>
      <ul className="flex flex-col gap-[30px]  list-none p-0">
        <li className=" leading-[19px]">
          <a href="#about" className=" text-[1rem]   text-white font-extrabold">
            About
          </a>
        </li>
        <li className="leading-[19px]">
          <a href="#topics" className=" text-[1rem] text-white font-extrabold ">
            Course Details
          </a>
        </li>
        <li className="leading-[19px]">
          <a href="#blog" className=" text-[1rem] text-white font-extrabold ">
            Blog
          </a>
        </li>
        <li className="leading-[19px]">
          <a
            href="#testimonials"
            className=" text-[1rem] text-white font-extrabold "
          >
            Testimonials
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;
