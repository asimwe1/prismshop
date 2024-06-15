import type { NextPage } from "next";

export type NavigationType = {
  className?: string;
};

const Navigation: NextPage<NavigationType> = ({ className = "" }) => {
  return (
    <div
      className={`h-[86.313rem] w-[106.063rem] absolute !m-[0] bottom-[-75.375rem] left-[-1.937rem] ${className}`}
    >
      <img
        className="absolute top-[0rem] left-[0rem] rounded-3xs w-[103.875rem] h-[59.5rem] object-cover"
        alt=""
        src="/shoppingbagsgoldenshoppingcart-232148667038-1@2x.png"
      />
      <div className="absolute top-[8.625rem] left-[51.938rem] rounded-[50%] bg-salmon-100 w-[1.25rem] h-[1.25rem] z-[1]" />
      <img
        className="absolute top-[46.988rem] left-[0rem] w-[103.875rem] h-[39.325rem] z-[2]"
        alt=""
        src="/rectangle-1313.svg"
      />
      <div className="absolute top-[5.063rem] left-[68rem] w-[38.063rem] h-[81.25rem]">
        <div className="absolute h-full top-[0rem] bottom-[0rem] left-[0rem] rounded-[50%] box-border w-[81.25rem] z-[1] border-[0px] border-solid border-darkgray-200" />
        <div className="absolute top-[30.813rem] left-[19.375rem] rounded-[50%] bg-salmon-100 w-[5rem] h-[5rem] z-[2]" />
        <div className="absolute top-[33.313rem] left-[22.563rem] rounded-[50%] bg-blue w-[2.5rem] h-[2.5rem] z-[3]" />
        <div className="absolute top-[0rem] left-[22.563rem] shadow-[0px_0px_25px_rgba(151,_151,_151,_0.25)] rounded-81xl bg-white w-[5.625rem] h-[5.625rem] z-[2]">
          <div className="absolute top-[0rem] left-[0rem] shadow-[0px_0px_25px_rgba(151,_151,_151,_0.25)] rounded-81xl bg-white w-full h-full hidden" />
          <img
            className="absolute top-[1.313rem] left-[1.313rem] w-[3rem] h-[3rem] overflow-hidden z-[1]"
            alt=""
            src="/mditruckfastoutline.svg"
          />
        </div>
      </div>
      <div className="absolute top-[43.563rem] left-[65.188rem] shadow-[0px_0px_25px_rgba(151,_151,_151,_0.25)] rounded-81xl bg-white w-[5.625rem] h-[5.625rem] z-[3]">
        <div className="absolute top-[0rem] left-[0rem] shadow-[0px_0px_25px_rgba(151,_151,_151,_0.25)] rounded-81xl bg-white w-full h-full hidden" />
        <img
          className="absolute top-[1.313rem] left-[1.313rem] w-[3rem] h-[3rem] overflow-hidden z-[1]"
          alt=""
          src="/bxbxsplanetakeoff.svg"
        />
      </div>
      <img
        className="absolute top-[67.375rem] left-[1.813rem] w-[5rem] h-[5rem] overflow-hidden z-[4]"
        loading="lazy"
        alt=""
        src="/chevron-left.svg"
      />
      <img
        className="absolute top-[67.375rem] left-[36rem] w-[5rem] h-[5rem] overflow-hidden z-[3]"
        loading="lazy"
        alt=""
        src="/chevron-right.svg"
      />
    </div>
  );
};

export default Navigation;