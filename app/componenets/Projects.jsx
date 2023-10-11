import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="mb-[50px] space-y-10 py-10">
      <div className="flex justify-between container mx-auto lg:px-[165px] px-5  ">
        <p className="lg:text-[88px] text-[40px] font-[700] leading-[88px] text-white">
          Projects
        </p>
        <button className="text-[16px] font-[700]  leading-[26px] text-white border-b-2 border-[#4EE1A0]">
          CONTACT ME
        </button>
      </div>
      <div className="grid md:grid-cols-2 container mx-auto lg:px-[165px]  lg:gap-[100px] px-4 gap-5">
        <div>
          <Image
            src="/images/thumbnail-project-1-large.webp"
            width={590}
            height={590}
            alt="projects"
          />
          <p className="font-[700] text-[24px] leading-[32px] text-white">
            DESIGN PORTFOLIO
          </p>
          <p className="font-[500] text-[18px] leading-[28px] text-[#d9d9d9]">
            HTML CSS
          </p>
        </div>
        <div>
          <Image
            src="/images/thumbnail-project-2-large.webp"
            width={590}
            height={590}
            alt="projects"
          />
          <p className="font-[700] text-[24px] leading-[32px] text-white">
            E-LEARNING LANDING PAGE
          </p>
          <p className="font-[500] text-[18px] leading-[28px] text-[#d9d9d9]">
            HTML CSS
          </p>
        </div>
        <div>
          <Image
            src="/images/thumbnail-project-3-large.webp"
            width={590}
            height={590}
            alt="projects"
          />
          <p className="font-[700] text-[24px] leading-[32px] text-white">
            TODO WEB APP
          </p>
          <p className="font-[500] text-[18px] leading-[28px] text-[#d9d9d9]">
            HTML CSS JS
          </p>
        </div>
        <div>
          <Image
            src="/images/thumbnail-project-4-large.webp"
            width={590}
            height={590}
            alt="projects"
          />
          <p className="font-[700] text-[24px] leading-[32px] text-white">
            ENTERTAINMENT WEB APP
          </p>
          <p className="font-[500] text-[18px] leading-[28px] text-[#d9d9d9]">
            HTML CSS JS
          </p>
        </div>
        <div>
          <Image
            src="/images/thumbnail-project-5-large.webp"
            width={590}
            height={590}
            alt="projects"
          />
          <p className="font-[700] text-[24px] leading-[32px] text-white">
            MEMORY GAME
          </p>
          <p className="font-[500] text-[18px] leading-[28px] text-[#d9d9d9]">
            HTML CSS JS
          </p>
        </div>
        <div>
          <Image
            src="/images/thumbnail-project-6-large.webp"
            width={590}
            height={590}
            alt="projects"
          />
          <p className="font-[700] text-[24px] leading-[32px] text-white">
            ART GALLERY SHOWCASE
          </p>
          <p className="font-[500] text-[18px] leading-[28px] text-[#d9d9d9]">
            HTML CSS JS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
