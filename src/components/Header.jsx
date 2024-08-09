import Wrapper from "../ui/Wrapper";
import { hero } from "../assets";

import Navbar from "./Navbar";

function Header() {
  return (
    <header
      id="about"
      className="min-h-dvh bg-cover bg-center "
      style={{ backgroundImage: `url(${hero})` }}
    >
      <Wrapper className="wrapper relative h-dvh ">
        <Navbar  />
        <div className="absolute bottom-0 bg-[rgba(0,0,0,0.5)] rounded-t-[20px]  tablet:w-[356px] right-0 phone:w-auto phone:right-[32px] phone:h-[281px] phone:left-[32px] w-[453px] h-[326px]  phone:pt-[41px]  pt-[46px] smallphone:left-[16px] smallphone:right-[16px] border-white border-t-4 border-r-4  border-l-4 px-[40px] backdrop-blur-[25px] ">
          <p className="course-name relative text-white  phone:mb-[25px] mb-[35px] text-[1rem] capitalize font-extrabold leading-[19px]">
            Sound Design Masterclass
          </p>
          <h1 className="text-white leading-[54px] phone:leading-[44px] mb-6  phone:text-[32px] phone:mb-[34px] font-bold text-[2.5rem] font-fontsecondary smallphone:text-[1.6rem]">
            Learn the Art of
            <br /> Sound Design
          </h1>
          <a
            href="#"
            className="text-[1rem] smallphone:text-[0.8rem]  font-bold  bg-primary-red py-[10px] px-8 text-white rounded-[10px]"
          >
            Demo Lesson
          </a>
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
