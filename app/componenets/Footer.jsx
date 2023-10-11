import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#242424]">
      <div className="container mx-auto lg:px-[165px] flex lg:justify-between lg:flex-row flex-col ">
        <div className="space-y-40 py-10 flex flex-col  justify-center">
          <p className="text-[#FFFFFF] font-[700] text-[88px] leading-[88px] lg:text-left text-center">
            Contact
          </p>
          <p className="text-[#D9D9D9] font-[500] text-[18px] leading-[28px] text-center lg:-text-left px-4">
            I would love to hear about your project and how I <br /> could help.
            Please fill in the form, and I’ll get back <br /> to you as soon as
            possible.
          </p>
        </div>
        <div className="flex flex-col space-y-10 py-20  lg:w-[445px]  justify-center px-4">
          <input
            type="text"
            placeholder="NAME"
            className="bg-transparent border-b-2  border-white py-4 "
          />
          <input
            type="text"
            placeholder="EMAIL"
            className="bg-transparent border-b-2  border-white py-4 "
          />
          <textarea
            placeholder="MESSAGE"
            className="bg-transparent border-b-2  border-white py-4 "
          ></textarea>
          <div className="flex  justify-end items-end">
            <button className=" text-white border-b-2 border-[#4EE1A0]  fit -content border- py-4 ">
              {" "}
              SEND MESSAGE
            </button>
            <Image
              src="/images/pattern-rings.svg"
              width={520}
              height={520}
              className=" absolute top[50%] right-[40%] z-0 lg:hidden"
            />
          </div>
        </div>
      </div>

      <Image
        src="/images/pattern-rings.svg"
        width={520}
        height={520}
        className="hidden lg:block"
      />
      <div className="lg:container mx-auto lg:px-[165px] py-10 flex justify-between lg:flex-row   flex-col  space-y-5 items-center text-white border-t-2 border-white ">
        <p className="text-[32px] font-[700] leading-[32px]">adamkeyes</p>
        <div className="  flex  space-x-10 z-10 ">
          <Image
            src="/images/icon-github.svg"
            width={20}
            height={20}
            alt="social-media-icons"
          />
          <Image
            src="/images/icon-frontend-mentor.svg"
            width={20}
            height={20}
            alt="social-media-icons"
          />
          <Image
            src="/images/icon-linkedin.svg"
            width={20}
            height={20}
            alt="social-media-icons"
          />
          <Image
            src="/images/icon-twitter.svg"
            width={20}
            height={20}
            alt="social-media-icons"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
