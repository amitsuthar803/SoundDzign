import React, { useState } from "react";
import Wrapper from "../ui/Wrapper";
import {
  studio,
  yellowBorder,
  call,
  result,
  equilizer,
  meter,
  record,
} from "../assets/index";
import Heading from "../ui/Heading";

function Topics() {
  const [currentImage, setCurrentImage] = useState(studio);

  return (
    <section className="bg-black py-[80px]">
      <Wrapper className="wrapper relative mb-[33px]">
        {/* reusable heading */}
        <Heading className=" after:bg-primary-red">
          What will you learn?
        </Heading>
        {/* container */}
        <div className="flex justify-between items-center mt-[35px]">
          <ul className="flex   font-fontsecondary flex-col gap-6 m-0 p-0 ml-[36px] mt-[9px] ">
            <li
              onMouseEnter={() => setCurrentImage(call)}
              className="relative topic_list text-xl font-normal  leading-[27.33px] text-white"
            >
              What are frequencies?
            </li>
            <li
              onMouseEnter={() => setCurrentImage(studio)}
              className="relative topic_list text-xl leading-[27.33px]  font-normal text-white"
            >
              Using DAW
            </li>
            <li
              onMouseEnter={() => setCurrentImage(record)}
              className="relative topic_list text-xl  font-normal leading-[27.33px] text-white"
            >
              Vocals Processing
            </li>
            <li
              onMouseEnter={() => setCurrentImage(result)}
              className="relative topic_list text-xl  font-normal leading-[27.33px] text-white"
            >
              Mixing
            </li>
            <li
              onMouseEnter={() => setCurrentImage(equilizer)}
              className="relative topic_list text-xl  font-normal leading-[27.33px] text-white"
            >
              Mixing Console
            </li>
            <li
              onMouseEnter={() => setCurrentImage(meter)}
              className="relative topic_list text-xl  font-normal leading-[27.33px] text-white"
            >
              Mastering
            </li>
          </ul>
          {/* img box */}
          <div className="mt-[1px]">
            <img
              className=" object-cover max-w-[558px]"
              src={currentImage}
              alt=""
            />
          </div>
        </div>
        <img
          src={yellowBorder}
          className="absolute bottom-[-30px] right-[-30px]"
          alt=""
        />
      </Wrapper>
    </section>
  );
}

export default Topics;
