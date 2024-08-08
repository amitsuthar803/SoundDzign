import React from "react";
import Wrapper from "../ui/Wrapper";
import { facebook, twitter, instagram } from "../assets/index";

function Footer() {
  return (
    <footer className="bg-black py-[50px] phone:py-[48px]">
      <Wrapper>
        {/* content container */}
        <div className="flex justify-between phone:flex-col phone:gap-[40px]">
          {/* 1 */}
          <div>
            <a href="">
              <h3 className="text-[16px] leading-[19px] font-extrabold text-white ">
                Sound<span className=" text-primary-red">DZign</span>
              </h3>
            </a>
            <div className="flex gap-[16px] mt-[25px]">
              <a href="#">
                <img src={facebook} alt="" />
              </a>
              <a href="#">
                <img src={twitter} alt="" />
              </a>
              <a href="#">
                <img src={instagram} alt="" />
              </a>
            </div>
          </div>
          {/* 2 */}
          <div className="flex flex-col">
            <h3 className=" text-primary-red text-[18px] leading-[24px] font-fontsecondary  font-bold">
              Quick Links
            </h3>
            <ul className="ml-[16px] mt-[7px] flex flex-col gap-[3px]">
              <li>
                <a
                  href="#"
                  className="text-white text-[16px] font-fontsecondary leading-[22px]"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-[16px] font-fontsecondary leading-[22px]"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          {/* 3 */}
          <div>
            <h3 className=" text-primary-red text-[18px] leading-[24px] font-fontsecondary  font-bold">
              Contact Us
            </h3>
            <ul className="ml-[16px] mt-[7px] flex flex-col gap-[3px]">
              <li>
                <a
                  href="#"
                  className="text-white text-[16px] font-fontsecondary leading-[22px]"
                >
                  contact@email.com
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-[16px] font-fontsecondary leading-[22px]"
                >
                  +1 999 9999 999
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-[28px] phone:mt-[40px]">
          <p className="text-white font-fontsecondary text-[16px] leading-[22px]">
            This website is designed&Developed by Amitsuthar Ⓒ 2024
          </p>
        </div>
      </Wrapper>
    </footer>
  );
}

export default Footer;
