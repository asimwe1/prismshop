import type { NextPage } from "next";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[12.687rem] box-border max-w-full text-left text-[5rem] text-white font-lato mq900:pb-[5.375rem] mq900:box-border mq1300:pb-[8.25rem] mq1300:box-border ${className}`}
    >
      <div className="flex-1 bg-darkslateblue flex flex-col items-center justify-start pt-[14rem] pb-[16.5rem] pr-[1.312rem] pl-[1.25rem] box-border gap-[5.625rem] max-w-full z-[1] mq900:gap-[1.375rem] mq900:pt-[9.125rem] mq900:pb-[10.75rem] mq900:box-border mq1300:gap-[2.813rem] mq450:pt-[5.938rem] mq450:pb-[7rem] mq450:box-border">
        <div className="w-[108rem] h-[48.938rem] relative bg-darkslateblue hidden max-w-full" />
        <div className="w-[66.438rem] flex flex-col items-start justify-start gap-[0.562rem] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.625rem] box-border max-w-full">
            <h1 className="m-0 w-[49.313rem] relative text-inherit font-extrabold font-inherit flex items-center shrink-0 max-w-full z-[2] mq900:text-[2.5rem] mq450:text-[1.5rem]">
              Ready to get started ?
            </h1>
          </div>
          <h2 className="m-0 self-stretch relative text-[1.875rem] font-medium font-inherit z-[2] mq900:text-[1.5rem] mq450:text-[1.125rem]">
            Start by registering and explore millions of our products from
            trusted suppliers
          </h2>
        </div>
        <div className="w-[66.438rem] flex flex-row items-start justify-center py-[0rem] pr-[0rem] pl-[0.062rem] box-border max-w-full">
          <button className="cursor-pointer py-[1rem] pr-[3.625rem] pl-[3.687rem] bg-blue rounded-3xs flex flex-row items-start justify-start z-[2] border-[1px] border-solid border-blue hover:bg-mediumpurple-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-mediumpurple-100">
            <div className="h-[4rem] w-[13.588rem] relative rounded-3xs bg-blue box-border hidden border-[1px] border-solid border-blue" />
            <b className="h-[1.75rem] relative text-[1.25rem] capitalize font-bold font-lato text-white text-left flex items-center min-w-[6.25rem] z-[1] mq450:text-[1rem]">
              REGISTER
            </b>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;