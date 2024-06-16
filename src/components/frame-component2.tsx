import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] pb-[16.375rem] pr-[2.437rem] pl-[1.25rem] box-border max-w-full text-left text-[1.875rem] text-button-blue font-lato mq900:pb-[10.625rem] mq900:box-border ${className}`}
    >
      <div className="w-[85.938rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq1650:flex-wrap mq1650:justify-center">
        <div className="w-[57.625rem] flex flex-row items-start justify-start gap-[4.812rem] min-w-[57.625rem] max-w-full mq900:flex-wrap mq1300:gap-[2.375rem] mq1300:min-w-full mq450:gap-[1.188rem] mq1650:flex-1">
          <div className="w-[23.313rem] flex flex-col items-start justify-start gap-[2.187rem] min-w-[23.313rem] max-w-full mq900:flex-1 mq900:min-w-full mq450:gap-[1.063rem]">
            <div className="w-[21.5rem] flex flex-row items-start justify-start py-[0rem] px-[3.187rem] box-border max-w-full mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
              <div className="flex-1 flex flex-row items-start justify-start">
                <div className="h-[15.125rem] flex-1 relative">
                  <div className="absolute top-[0rem] left-[0rem] shadow-[0px_0px_30px_rgba(69,_71,_160,_0.25)] rounded-[50%] bg-white w-full h-full" />
                  <Image
                    className="absolute top-[1rem] left-[1rem] w-[13.15rem] h-[13.15rem] object-contain z-[2]"
                    alt=""
                    src="/image-14@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.687rem] max-w-full">
              <div className="w-[21.5rem] flex flex-row items-start justify-start py-[0rem] px-[2.625rem] box-border max-w-full mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                <h2 className="m-0 flex-1 relative text-inherit font-extrabold font-inherit mq900:text-[1.5rem] mq450:text-[1.125rem]">
                  1.Register for free
                </h2>
              </div>
              <p className="m-0 self-stretch relative text-[1.25rem] font-light mq450:text-[1rem]">
                <span>
                  No credit card required it’s completely free. Start by
                  creating a
                </span>
                <span className="[text-decoration:underline] text-salmon-100">
                  {" "}
                  free account
                </span>
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[2.187rem] min-w-[19.188rem] max-w-full mq900:gap-[1.063rem]">
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.875rem] pl-[1.25rem]">
              <div className="w-[15.125rem] flex flex-row items-start justify-start">
                <div className="h-[15.125rem] flex-1 relative">
                  <div className="absolute top-[0rem] left-[0rem] shadow-[0px_0px_30px_rgba(69,_71,_160,_0.25)] rounded-[50%] bg-white w-full h-full" />
                  <Image
                    className="absolute top-[4.438rem] left-[4.438rem] w-[6.25rem] h-[6.25rem] object-cover z-[1]"
                    alt=""
                    src="/image-15@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.687rem] max-w-full">
              <h2 className="m-0 relative text-inherit font-extrabold font-inherit mq900:text-[1.5rem] mq450:text-[1.125rem]">
                2.Choose the right product for you
              </h2>
              <div className="self-stretch flex flex-row items-start justify-end py-[0rem] px-[2.625rem] box-border max-w-full text-[1.25rem] mq450:pl-[1.313rem] mq450:pr-[1.313rem] mq450:box-border">
                <div className="w-[23.313rem] flex flex-row items-start justify-start relative max-w-full">
                  <div className="flex-1 relative font-light inline-block max-w-full mq450:text-[1rem]">
                    Take your time and choose the right product for you.
                  </div>
                  <Image
                    className="h-[15.438rem] w-[25.256rem] absolute !m-[0] right-[-20.069rem] bottom-[-11.887rem] object-contain z-[1]"
                    loading="lazy"
                    alt=""
                    src="/line-2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[20.188rem] flex flex-col items-start justify-start gap-[2.187rem] min-w-[20.188rem] max-w-full mq450:gap-[1.063rem] mq1650:flex-1">
          <div className="w-[17.25rem] flex flex-row items-start justify-start py-[0rem] px-[1.062rem] box-border">
            <div className="flex-1 flex flex-row items-start justify-start mq1650:flex-1">
              <div className="h-[15.125rem] flex-1 relative">
                <div className="absolute top-[0rem] left-[0rem] shadow-[0px_0px_30px_rgba(69,_71,_160,_0.25)] rounded-[50%] bg-white w-full h-full" />
                <Image
                  className="absolute top-[4.438rem] left-[4.438rem] w-[6.25rem] h-[6.25rem] object-cover z-[1]"
                  alt=""
                  src="/check-1@2x.png"
                />
                <Image
                  className="absolute top-[2.5rem] left-[3.625rem] rounded-12xs w-[2.394rem] h-[2.394rem] object-contain z-[2]"
                  alt=""
                  src="/star-1.svg"
                />
                <Image
                  className="absolute top-[9.188rem] left-[10.819rem] rounded-12xs w-[1.756rem] h-[1.756rem] object-contain z-[1]"
                  alt=""
                  src="/star-2.svg"
                />
                <div className="absolute top-[3.5rem] left-[10.813rem] rounded-[50%] bg-gold w-[0.313rem] h-[0.313rem] z-[1]" />
                <div className="absolute top-[9.625rem] left-[2.375rem] rounded-[50%] bg-red w-[0.625rem] h-[0.625rem] z-[1]" />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.687rem]">
            <div className="w-[17.25rem] flex flex-row items-start justify-start py-[0rem] px-[0.5rem] box-border">
              <h2 className="m-0 flex-1 relative text-inherit font-extrabold font-inherit mq900:text-[1.5rem] mq450:text-[1.125rem]">
                3.Complete order
              </h2>
            </div>
            <div className="self-stretch relative text-[1.25rem] font-light mq450:text-[1rem]">{`And your product get shipped to you `}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;