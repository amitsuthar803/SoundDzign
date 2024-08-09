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
import { motion } from "framer-motion";

function Topics() {
  const show = {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1.2,
      delay: 0.2,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  };
  const [currentImage, setCurrentImage] = useState(studio);

  return (
    <section id="topics" className="bg-black py-[80px] phone:py-[60px]">
      <Wrapper className="wrapper relative mb-[33px] phone:mb-[21px] tablet:mb-[30px]">
        {/* reusable heading */}
        <Heading
          initial={{
            x: "-50%",
            opacity: 0,
          }}
          whileInView={show}
          className=" after:bg-primary-red"
        >
          What will you learn?
        </Heading>
        {/* container */}
        <div className="flex   justify-between items-center phone:mt-[24px] mt-[33px]">
          <motion.ul
            initial={{
              x: "-100%",
              opacity: 0,
            }}
            whileInView={show}
            className="flex   font-fontsecondary tablet:mt-[8px] flex-col gap-6 m-0 p-0 ml-[36px] mt-[9px] "
          >
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
          </motion.ul>
          {/* img box */}
          <motion.div
            initial={{
              x: "50%",
              opacity: 0,
            }}
            whileInView={show}
            v
            className="mt-[1px] tablet:mt-[11px] phone:hidden "
          >
            <img
              className=" object-cover max-w-[558px] tablet:w-[385px] tablet:h-[287px]"
              src={currentImage}
              alt=""
            />
          </motion.div>
        </div>
        <img
          src={yellowBorder}
          className="absolute bottom-[-33px] right-[-30px] tablet:bottom-[-30px] phone:right-[32px] phone:bottom-[-23px] tablet:right-[-26px]"
          alt=""
        />
      </Wrapper>
    </section>
  );
}

export default Topics;
