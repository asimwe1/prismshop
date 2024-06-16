import type { NextPage } from "next";
import Image from "next/image";

export type GroupComponent1Type = {
  className?: string;
};

const GroupComponent1: NextPage<GroupComponent1Type> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 shadow-[0px_4px_4px_rgba(246,_115,_102,_0.24)] rounded-3xs bg-white flex flex-col items-end justify-start pt-[0.625rem] pb-[1rem] pr-[1.812rem] pl-[1.75rem] box-border gap-[1.625rem] min-w-[9.125rem] z-[1] text-left text-[1rem] text-blue font-lato ${className}`}
    >
      <div className="w-[14.063rem] h-[19.063rem] relative rounded-3xs bg-white hidden" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.062rem]">
        <div className="flex flex-row items-start justify-start pt-[0rem] pb-[0.5rem] pr-[3.062rem] pl-[2.937rem]">
          <b className="relative capitalize font-bold inline-block min-w-[4.375rem] z-[1]">
            HeadSets
          </b>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.562rem] pl-[0.5rem]">
          <Image
          height={50}
          width={50}
            className="h-[8.313rem] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
            alt=""
            src="/mask-group.png"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.062rem] text-salmon-100">
          <div className="flex-1 flex flex-row items-start justify-between gap-[1.25rem]">
            <b className="relative capitalize font-semibold inline-block min-w-[2rem] whitespace-nowrap z-[1]">
              30$
            </b>
            <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem]">
              <Image
              width={50}
              height={50}
                className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0 z-[1]"
                alt=""
                src="/add-shopping-cart.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch relative text-[0.625rem] capitalize font-light text-midnightblue-200 z-[1]">
          The ultimate music experience you can get
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-[0.625rem] pr-[2.5rem] pl-[2.562rem] bg-blue rounded-8xs flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-mediumpurple-100">
        <div className="h-[2.125rem] w-[10.5rem] relative rounded-8xs bg-blue hidden" />
        <b className="relative text-[1rem] leading-[0.875rem] capitalize font-semibold font-lato text-white text-left inline-block min-w-[5.438rem] z-[2]">
          Order now
        </b>
      </button>
    </div>
  );
};

export default GroupComponent1;