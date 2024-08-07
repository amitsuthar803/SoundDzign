import React from "react";
import Wrapper from "../ui/Wrapper";
import { videoIcon, studentIcon, redBorder } from "../assets/index";

function Info() {
  return (
    <section className=" bg-primary-dark pt-[80px] pb-[49px]">
      <Wrapper className="relative">
        {/* container */}
        <div className="flex justify-center gap-[280px] py-[31px]     items-center text-white">
          {/* info */}
          <div className="flex flex-col items-center justify-center  ">
            <img src={studentIcon} alt="" />
            <span className=" leading-[48px] text-[40px] text-white font-black ">
              23,000+
            </span>
            <p className=" leading-[41px] text-[30px] text-white font-bold font-fontsecondary">
              Students
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={videoIcon} alt="" />
            <span className="leading-[48px] text-[40px] text-white font-black ">
              26 Hrs
            </span>
            <p className="leading-[41px] text-[30px] text-white font-bold font-fontsecondary">
              Video Content
            </p>
          </div>
        </div>

        <img className="absolute left-[-18px] top-0" src={redBorder} alt="" />
      </Wrapper>
    </section>
  );
}

export default Info;
