import React from "react";
import Wrapper from "../ui/Wrapper";
import Heading from "../ui/Heading";
import { person1, person2, person3 } from "../assets/index";

function Testimonials() {
  return (
    <section
      id="testimonials"
      className=" bg-primary-dark py-[80px] phone:py-[60px]"
    >
      <Wrapper>
        {/* heading */}
        <Heading className="after:bg-primary-red">
          What our students say?
        </Heading>

        {/* content-container */}
        <div className="flex justify-between mt-[54px] tablet:mt-[64px] phone:mt-[44px]   tablet:flex-col tablet:gap-[50px] phone:gap-[60px]   gap-[116px]">
          {/* 1 */}
          <div className="w-[264px] phone:flex-col phone:items-center phone:gap-[8px]  tablet:flex tablet:gap-[28px] tablet:w-full">
            <img
              src={person1}
              className=" rounded-[10px]   object-cover"
              alt=""
            />
            <div className=" phone:text-center">
              <h3 className=" mt-4 phone:mt-2  text-white font-bold font-fontsecondary text-[20px] leading-[27px] ">
                Peter Adams
              </h3>
              <p className=" mt-[7px] text-[16px] phone:mt-[8px] font-fontsecondary leading-[22px] font-normal text-white">
                This is a great course. I got to learn a lot.
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className=" w-[264px]  phone:items-center phone:gap-[8px]  phone:flex-col    tablet:flex tablet:gap-[28px] tablet:w-full">
            <img
              src={person2}
              className=" rounded-[10px] object-cover"
              alt=""
            />
            <div className="phone:text-center">
              <h3 className=" phone:mt-2 mt-4 text-white font-bold font-fontsecondary text-[20px] leading-[27px] ">
                Robert Fox
              </h3>
              <p className=" mt-[7px] text-[16px] phone:mt-[8px] font-fontsecondary leading-[22px] font-normal text-white">
                I got to learn a lot about Music Production with this course.
                Thanks :)
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="w-[264px]  phone:flex-col phone:items-center  phone:gap-[8px]    tablet:flex tablet:gap-[28px] tablet:w-full">
            <img
              src={person3}
              className=" rounded-[10px] object-cover "
              alt=""
            />
            <div className="phone:text-center">
              <h3 className="phone:mt-2 mt-4 text-white font-bold font-fontsecondary text-[20px] leading-[27px] ">
                Emily Smith
              </h3>
              <p className=" mt-[7px] text-[16px] phone:mt-[8px] leading-[22px] font-fontsecondary font-normal text-white">
                Awesome! Great job!!
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Testimonials;
