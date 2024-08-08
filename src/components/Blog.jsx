import React from "react";
import Wrapper from "../ui/Wrapper";
import Heading from "../ui/Heading";
import {
  studioMini,
  guitarMini,
  audienceMini,
  audienceMax,
} from "../assets/index";

function Blog() {
  return (
    <section id="blog" className=" bg-primary-pink phone:py-[60px]  py-[80px]">
      <Wrapper>
        <Heading className=" after:bg-primary-yellow">Latest Posts</Heading>
        {/* content container */}
        <div className="grid grid-cols-3 phone:grid-cols-1  tablet:grid-cols-2 tablet:gap-[30px]  gap-10 mt-[44px]">
          {/* 1 */}
          <div className="hover:scale-105  transition-all ease-in-out duration-300 bg-white rounded-[10px] relative overflow-hidden flex flex-col">
            <span className="absolute font-fontsecondary leading-[18px] px-[16px] font-bold  text-[13px] text-black rounded-[10px] bg-white right-[8px] top-[8px] ">
              DAW
            </span>
            <a href="#">
              <img
                src={studioMini}
                alt=""
                className="rounded-b-[10px] tablet:max-w-[694px]  tablet:max-h-[159px]   object-cover w-full"
              />
            </a>

            <a href="#">
              <h3 className="text-[18px]    py-[16px] px-[24.3px] font-bold  text-black  leading-[24px] font-fontsecondary">
                How To Use Drum Machine in Logic Pro X
              </h3>
            </a>
          </div>
          {/* 2 */}
          <div className="hover:scale-105 transition-all ease-in-out duration-300 bg-white rounded-[10px] relative overflow-hidden flex flex-col">
            <span className="absolute font-fontsecondary leading-[18px] px-[16px] font-bold  text-[13px] text-black rounded-[10px] bg-white right-[8px] top-[8px] ">
              Mixing
            </span>
            <a href="#">
              <img
                src={guitarMini}
                alt=""
                className="rounded-b-[10px] tablet:max-w-[694px]  tablet:max-h-[159px]  object-cover w-full"
              />
            </a>
            <a href="#">
              <h3 className="text-[18px] py-[16px] px-[24.3px] font-bold  text-black  leading-[24px] font-fontsecondary">
                How To Mix Guitars Effectively
              </h3>
            </a>
          </div>
          {/* 3 */}
          <div className="hover:scale-105 phone:col-span-1 tablet:col-span-2 transition-all ease-in-out duration-300 bg-white rounded-[10px] relative overflow-hidden flex flex-col">
            <span className="absolute font-fontsecondary leading-[18px] px-[16px] font-bold  text-[13px] text-black rounded-[10px] bg-white right-[8px] top-[8px] ">
              Vox
            </span>
            <a href="#">
              <img
                src={audienceMini}
                alt=""
                className="rounded-b-[10px] tablet:max-w-[694px]  tablet:max-h-[159px]  object-cover w-full"
              />
            </a>
            <a href="#">
              <h3 className="text-[18px] py-[16px] px-[24.3px] font-bold  text-black  leading-[24px] font-fontsecondary">
                The Real Power of Harmonies in Music Production
              </h3>
            </a>
          </div>
        </div>
        {/* button Container*/}
        <div className="flex justify-end  mt-[30px]">
          <a
            href="#"
            className=" font-fontsecondary px-[32px] py-[4px] text-[16px] font-bold leading-[22px]
            bg-white
             rounded-[10px]
            "
          >
            All Posts
          </a>
        </div>
      </Wrapper>
    </section>
  );
}

export default Blog;
