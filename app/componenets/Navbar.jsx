import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="container mx-auto lg:px-[165px] py-10 flex justify-between   md:px-6 items-center text-white ">
      <p className="text-[32px] font-[700] leading-[32px] text-center  mx-auto md:text-left md:mx-0">
        adamkeyes
      </p>
      <div className="    md:space-x-10 lg:z-10 md:z-[10]  hidden  md:flex ">
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
  );
};

export default Navbar;
