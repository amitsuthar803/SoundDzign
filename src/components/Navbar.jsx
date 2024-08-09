import React, { useEffect, useState } from "react";
import { hamburgerIcon } from "../assets/index";
import MobileMenu from "../ui/MobileMenu";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: "0" },
          hidden: { y: "-150%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="h-[80px] z-50 top-6 phone:top-4 fixed rounded-b-[10px]   w-[1024px] flex backdrop-blur-[20px] tablet:max-w-[694px] phone:h-[60px]  py-[30px]  phone:w-auto phone:left-[32px] phone:right-[32px]  px-8 bg-[rgba(0,0,0,0.5)] text-white items-center justify-between"
      >
        <a href="#" className="text-white font-extrabold text-[1rem]">
          Sound
          <span className="text-primary-red font-extrabold text-[1rem]">
            DZign
          </span>
        </a>

        <ul className="flex gap-[50px]  phone:hidden">
          <li>
            <a
              href="#about"
              className=" font-extrabold text-[1rem] text-white capitalize"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#topics"
              className=" font-extrabold text-[1rem] text-white capitalize"
            >
              Course Details
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className=" font-extrabold text-[1rem] text-white capitalize"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className=" font-extrabold text-[1rem] text-white capitalize"
            >
              Testimonials
            </a>
          </li>
        </ul>
        <div className=" hidden  phone:block" onClick={() => setShowMenu(true)}>
          <img className="cursor-pointer" src={hamburgerIcon} alt="" />
        </div>
      </motion.nav>

      <MobileMenu
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        classname=" hidden phone:block   px-[32px]  bg-primary-dark z-50 text-white left-0 right-0 w-full fixed
        py-[58px] max-h-[282px]
        "
      />
    </>
  );
}

export default Navbar;
