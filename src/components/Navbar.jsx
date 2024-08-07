import React from "react";

function Navbar() {
  return (
    <nav className=" h-[80px] z-50 top-6 fixed rounded-b-[10px] w-[1024px] flex backdrop-blur-[20px]   py-[30px] px-8 bg-[rgba(0,0,0,0.5)] text-white items-center justify-between">
      <a href="#" className="text-white font-extrabold text-[1rem]">
        Sound
        <span className="text-primary-red font-extrabold text-[1rem]">
          DZign
        </span>
      </a>

      <ul className="flex gap-[50px] p-0">
        <li>
          <a
            href="About"
            className=" font-extrabold text-[1rem] text-white capitalize"
          >
            About
          </a>
        </li>

        <li>
          <a
            href="CourseDetails"
            className=" font-extrabold text-[1rem] text-white capitalize"
          >
            Course Details
          </a>
        </li>
        <li>
          <a
            href="Blog"
            className=" font-extrabold text-[1rem] text-white capitalize"
          >
            Blog
          </a>
        </li>
        <li>
          <a
            href="Testimonials"
            className=" font-extrabold text-[1rem] text-white capitalize"
          >
            Testimonials
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
