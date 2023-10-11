import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="overflow-x-hidden">
      <Image
        src="/images/pattern-rings.svg"
        width={520}
        height={520}
        alt="shapes "
        className=" absolute left-[-50%] z-0"
      />
      <Image
        src="/images/pattern-circle.svg"
        width={200}
        height={200}
        alt="circle"
        className="absolute lg:hidden right-[-22%] bottom-[50%] z-10  md:right-[-12%] clippedCircle"
      />
      <Image
        src="/images/image-profile-tablet.webp"
        width={255}
        height={100}
        alt="person"
        className="absolute top-0 right-0 z-0  hidden md:block lg:hidden "
      />
      <Image
        src="/images/image-profile-mobile.webp"
        width={420}
        height={420}
        className="mx-auto px-[100px] md:hidden"
      />
      <div className=" lg:container lg:px-[165px] lg:mx-auto relative text-white mb-[40px] ">
        <div className=" flex justify-between flex-row ">
          <div className=" lg:py-[127px] lg:space-y-4 space-y-1 z-10">
            <p className="lg:text-[88px] font-[700] leading-[88px] text-white  md:text-[60px] text-[40px] text-center md:text-left md:px-6 lg:px-0">
              Nice to meet you!
            </p>
            <p className="lg:text-[88px] font-[700] leading-[88px] text-white md:text-[60px] text-[40px] text-center md:text-left md:px-6 lg:px-0">
              I'm{" "}
              <span className="  border-b-2 border-[#4EE1A0] ">
                Adam Keyes.
              </span>
            </p>
            <p className="font-[500] leading-[28px] text-[#d9d9d9] text-[18px] text-center mx-auto px-4 lg:px-0 lg:mx-0  md:text-left md:px-6 ">
              Based in the UK, I’m a front-end developer <br /> passionate about
              building accessible web apps <br /> that users love.
            </p>
            <button className="text-[16px] font-[700] leading-[26px] text-white  py-2   border-b-2 border-[#4EE1A0] mx-auto flex justify-center md:mx-0 md:ml-6 lg:ml-0    md:block">
              Contact Me
            </button>
          </div>
          <Image
            src="/images/image-profile-desktop.webp"
            width={455}
            height={200}
            alt="person"
            className="absolute lg:top-[-20%] lg:right-[10%] lg:z-[0] hidden lg:block "
          />

          <Image
            src="/images/pattern-circle.svg"
            width={200}
            height={200}
            alt="circle"
            className="absolute lg:bottom-0 lg:right-[34%] hidden z-50"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
