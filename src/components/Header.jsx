import React from "react";
import Wrapper from "../ui/Wrapper";
import { hero } from "../assets";

import Navbar from "./Navbar";

function Header() {
  return (
    <header
      className="min-h-dvh bg-cover bg-center "
      style={{ backgroundImage: `url(${hero})` }}
    >
      <Wrapper className="wrapper relative h-dvh ">
        <Navbar />
        <div className="absolute bottom-0 bg-[rgba(0,0,0,0.5)] rounded-t-[20px]  right-0 w-[453px] h-[326px] py-[50px] border-white border-t-4 border-r-4  border-l-4 px-[40px] backdrop-blur-[25px] ">
          <p className="course-name relative text-white after: mb-[35px] text-[1rem] capitalize font-extrabold">
            Sound Design Masterclass
          </p>
          <h1 className="text-white mb-4 font-bold text-[2.5rem] font-fontsecondary">
            Learn the Art of Sound Design
          </h1>
          <a
            href="#"
            className="text-[1rem]  font-bold bg-primary-red py-[10px] px-8 text-white rounded-[10px]"
          >
            Demo Lesson
          </a>
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
