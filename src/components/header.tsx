import type { NextPage } from "next";
import Image from "next/image";

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[11rem] box-border max-w-full ${className}`}
    >
      <header className="w-[99.188rem] flex flex-row items-start justify-start py-[0rem] pr-[1rem] pl-[0rem] box-border gap-[0.25rem] max-w-full text-left text-[0.8rem] text-button-blue font-lato">
        <Image
        width={30}
        height={30}
          className="h-[4.813rem] w-[4.75rem] relative object-cover"
          loading="lazy"
          alt=""
          src="/group-6-962.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem] box-border max-w-full text-[1.5rem] font-montserrat">
          <div className="self-stretch flex flex-row items-start justify-start gap-[1.812rem]">
            <h1 className="m-0 h-[3.563rem] flex-1 relative text-inherit font-bold font-inherit inline-block whitespace-nowrap">
              <span>Prism</span>
              <span className="text-salmon-100">Shop</span>
            </h1>
            <div className="flex gap-1 items-start justify-start pt-[0.562rem] px-[0rem] pb-[0rem] text-[0.8rem] font-lato">
              <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[6rem]">
                Categories
              </a>
          <Image
          width={30}
          height={30}
            className="w-[0.5rem] h-[0.5rem] relative overflow-hidden shrink-0 pt-[0.3rem] -mx-4 pr-10"
            alt=""
            src="/down-chevron.svg"
          />
            </div>
          </div>
        </div>
       
        <div className="flex gap-1 items-start justify-start pt-[1.2rem] px-[0rem] pb-[0rem] text-[0.8rem] font-lato">
              <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[6rem]">
                Services
              </a>
          <Image
          width={30}
          height={30}
            className="w-[0.5rem] h-[0.5rem] relative overflow-hidden shrink-0 pt-[0.3rem] -mx-4 pr-10"
            alt=""
            src="/down-chevron.svg"
          />
            </div>
        <div className="w-[7.063rem] flex flex-col items-start justify-start pt-[1.187rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border">
          <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[5.563rem]">
            industries
          </a>
        </div>
        <div className="w-[12rem] flex flex-col items-start justify-start pt-[1.187rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border">
          <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] whitespace-nowrap">
            Become a supplier
          </a>
        </div>
        <div className="w-[17.625rem] flex flex-col items-start justify-start pt-[1.187rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border">
          <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[6.688rem] whitespace-nowrap">
            Help Center
          </a>
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.187rem] pb-[0rem] pr-[1.312rem] pl-[0rem]">
          <button className="cursor-pointer py-[1rem] px-[3rem] bg-[transparent] rounded-3xs flex flex-row items-start justify-start border-[1px] border-solid border-blue hover:bg-mediumpurple-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-mediumpurple-100">
            <div className="h-[4rem] w-[9.875rem] relative rounded-3xs box-border hidden border-[1px] border-solid border-blue" />
            <a className="[text-decoration:none] h-[1.75rem] relative text-[1.25rem] capitalize font-bold font-lato text-blue text-left flex items-center min-w-[3.875rem] z-[1]">
              LOGIN
            </a>
          </button>
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
          <button className="cursor-pointer py-[1rem] px-[2rem] bg-blue rounded-3xs flex flex-row items-start justify-start border-[1px] border-solid border-blue hover:bg-mediumpurple-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-mediumpurple-100">
            <div className="h-[4rem] w-[9.875rem] relative rounded-3xs bg-blue box-border hidden border-[1px] border-solid border-blue" />
            <a className="[text-decoration:none] h-[1.75rem] relative text-[1.25rem] capitalize font-bold font-lato text-white text-left flex items-center min-w-[5.813rem] z-[1]">
              REGISTER
            </a>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;