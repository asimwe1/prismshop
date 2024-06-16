import type { NextPage } from "next";
import Image from "next/image"

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] pb-[15.812rem] pr-[1.687rem] pl-[1.25rem] box-border relative max-w-full text-left text-[2.5rem] text-button-blue font-lato mq900:pb-[6.688rem] mq900:box-border mq1300:pb-[10.25rem] mq1300:box-border ${className}`}
    >
      <div className="w-[91.563rem] flex flex-col items-start justify-start gap-[5.062rem] max-w-full mq900:gap-[2.5rem] mq450:gap-[1.25rem]">
        <div className="w-[33.563rem] flex flex-row items-start justify-start py-[0rem] px-[0.25rem] box-border max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit capitalize font-extrabold font-inherit inline-block max-w-full mq900:text-[2rem] mq450:text-[1.5rem]">
            Spotlight and news
          </h1>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] max-w-full text-[1.563rem] text-salmon-100">
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq1300:flex-wrap">
            <div className="w-[12.375rem] flex flex-col items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border text-midnightblue-100">
              <b className="w-[9.75rem] relative font-bold flex items-center mq450:text-[1.25rem]">
                Top ranking
              </b>
            </div>
            <div className="w-[22.25rem] flex flex-row items-end justify-start py-[0rem] pr-[0.5rem] pl-[0rem] box-border gap-[4.625rem] max-w-full mq450:flex-wrap mq450:gap-[2.313rem]">
              <u className="relative [text-decoration:underline] font-light inline-block min-w-[7.375rem] mq450:text-[1.25rem]">
                View more
              </u>
              <div className="flex-1 flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.562rem] box-border min-w-[6.313rem] text-midnightblue-100">
                <b className="self-stretch relative font-bold mq450:text-[1.25rem]">
                  New arrivals
                </b>
              </div>
            </div>
            <div className="w-[24.25rem] flex flex-row items-end justify-start gap-[4.375rem] max-w-full mq450:flex-wrap mq450:gap-[2.188rem]">
              <u className="relative [text-decoration:underline] font-light inline-block min-w-[7.375rem] mq450:text-[1.25rem]">
                View more
              </u>
              <div className="flex-1 flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.625rem] box-border min-w-[8.125rem] text-midnightblue-100">
                <h3 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq450:text-[1.25rem]">
                  Savings spotlight
                </h3>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[0.687rem] px-[0rem] pb-[0rem]">
              <u className="relative [text-decoration:underline] font-light inline-block min-w-[7.375rem] mq450:text-[1.25rem]">
                View more
              </u>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[4.5rem] max-w-full text-midnightblue-100 mq900:gap-[2.25rem] mq1300:flex-wrap mq450:gap-[1.125rem]">
            <div className="flex-[0.8698] shadow-[0px_0px_10px_1px_#c5c6ff] rounded-xl bg-white flex flex-col items-start justify-start pt-[1.375rem] pb-[2.187rem] pr-[1.625rem] pl-[2.062rem] box-border gap-[1.687rem] min-w-[18.375rem] max-w-full mq900:pt-[1.25rem] mq900:pb-[1.438rem] mq900:box-border mq1300:flex-1">
              <div className="w-[28.313rem] h-[34.625rem] relative shadow-[0px_0px_10px_1px_#c5c6ff] rounded-xl bg-white hidden max-w-full" />
              <div className="flex flex-col items-start justify-start gap-[0.375rem]">
                <h3 className="m-0 w-[10.313rem] relative text-inherit font-normal font-inherit flex items-center z-[1] mq450:text-[1.25rem]">
                  Most popular
                </h3>
                <div className="relative text-[1rem] font-light text-black z-[1]">
                  Personal and Home laptops
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.312rem] box-border max-w-full text-[1rem] text-black">
                <div className="flex-1 rounded-xl flex flex-row items-start justify-start pt-[0.875rem] px-[0.937rem] pb-[14rem] box-border bg-[url('/deal-name@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[1]">
                  <Image
                    className="h-[17.875rem] w-[24.625rem] relative rounded-xl object-cover hidden max-w-full"
                    alt=""
                    src="/image-1@2x.png"
                  />
                  <div className="w-[14.563rem] rounded-31xl bg-white flex flex-row items-start justify-start pt-[0.75rem] px-[2.125rem] pb-[1rem] box-border whitespace-nowrap z-[2]">
                    <div className="h-[3rem] w-[14.563rem] relative rounded-31xl bg-white hidden" />
                    <div className="flex-1 relative z-[3]">
                      <span>{`Popularity score: `}</span>
                      <b>4.8</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[23.875rem] flex flex-row items-start justify-start gap-[1.25rem] max-w-full mq450:flex-wrap">
                <Image
                  className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover min-w-[5.313rem] min-h-[5.938rem] z-[1]"
                  alt=""
                  src="/image-2@2x.png"
                />
                <Image
                  className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover min-w-[5.313rem] min-h-[5.938rem] z-[1]"
                  alt=""
                  src="/image-2@2x.png"
                />
                <Image
                  className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover min-w-[5.313rem] min-h-[5.938rem] z-[1]"
                  alt=""
                  src="/image-2@2x.png"
                />
              </div>
            </div>
            <div className="w-[25.938rem] flex flex-col items-start justify-start gap-[1.437rem] max-w-full text-[1rem]">
              <div className="self-stretch shadow-[0px_0px_10px_1px_#c5c6ff] rounded-xl bg-white flex flex-col items-start justify-start pt-[1.375rem] px-[2.312rem] pb-[1.312rem] box-border gap-[2.093rem] max-w-full mq450:gap-[1.063rem] mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border">
                <div className="w-[25.938rem] h-[23.5rem] relative shadow-[0px_0px_10px_1px_#c5c6ff] rounded-xl bg-white hidden max-w-full" />
                <div className="w-[16.688rem] relative flex items-center z-[1]">
                  15,000+ New products added today
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[3rem] mq450:flex-wrap mq450:gap-[1.5rem]">
                  <Image
                    className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover min-w-[5.938rem] min-h-[7.688rem] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/image-10@2x.png"
                  />
                  <Image
                    className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover min-w-[5.938rem] min-h-[7.688rem] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/image-11@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[3rem] mq450:flex-wrap mq450:gap-[1.5rem]">
                  <Image
                    className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover min-w-[5.938rem] min-h-[7.688rem] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/image-10@2x.png"
                  />
                  <Image
                    className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover min-w-[5.938rem] min-h-[7.688rem] z-[1]"
                    alt=""
                    src="/image-11@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch shadow-[0px_0px_10px_1px_#c5c6ff] rounded-xl bg-white flex flex-row items-start justify-start pt-[1.812rem] px-[1.5rem] pb-[1.75rem] box-border gap-[0.75rem] max-w-full text-[0.875rem] text-button-blue mq450:flex-wrap">
                <div className="h-[9.688rem] w-[25.938rem] relative shadow-[0px_0px_10px_1px_#c5c6ff] rounded-xl bg-white hidden max-w-full" />
                <Image
                  className="h-[6.125rem] w-[6.75rem] relative rounded-3xs object-cover z-[1]"
                  alt=""
                  src="/image-9@2x.png"
                />
                <div className="w-[9.938rem] flex flex-col items-start justify-start pt-[1.187rem] px-[0rem] pb-[0rem] box-border">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[0.875rem]">
                    <div className="w-[9.125rem] flex flex-row items-start justify-start py-[0rem] px-[0.062rem] box-border">
                      <div className="flex-1 relative font-semibold z-[1]">
                        New this week
                      </div>
                    </div>
                    <div className="self-stretch relative text-[0.75rem] font-semibold text-steelblue-100 z-[1]">
                      Products from our trusted suppliers
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[1.812rem] min-w-[18.375rem] max-w-full text-[1.25rem] text-blue mq1300:flex-1">
              <div className="self-stretch shadow-[0px_0px_10px_1px_#c5c6ff] rounded-xl bg-white flex flex-row items-start justify-start pt-[1.312rem] px-[1.5rem] pb-[1.25rem] box-border gap-[1.562rem] max-w-full mq450:flex-wrap">
                <div className="h-[9.688rem] w-[28.313rem] relative shadow-[0px_0px_10px_1px_#c5c6ff] rounded-xl bg-white hidden max-w-full" />
                <Image
                  className="h-[7.125rem] w-[7.563rem] relative rounded-3xs object-cover z-[1] mq450:flex-1"
                  alt=""
                  src="/image-12@2x.png"
                />
                <div className="w-[14.813rem] flex flex-col items-start justify-start pt-[2.062rem] px-[0rem] pb-[0rem] box-border">
                  <div className="self-stretch relative font-medium z-[1] mq450:text-[1rem]">
                    Lowest Price in 2 weeks
                  </div>
                </div>
              </div>
              <div className="self-stretch shadow-[0px_0px_10px_1px_#c5c6ff] rounded-xl bg-white flex flex-col items-start justify-start pt-[1.312rem] pb-[1.75rem] pr-[1.437rem] pl-[1.562rem] box-border gap-[1.312rem] max-w-full text-button-blue mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border">
                <div className="w-[28.313rem] h-[23.125rem] relative shadow-[0px_0px_10px_1px_#c5c6ff] rounded-xl bg-white hidden max-w-full" />
                <div className="w-[7.063rem] relative font-medium flex items-center z-[1] mq450:text-[1rem]">
                  Best Deals
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.125rem] box-border max-w-full">
                  <Image
                    className="h-[17.25rem] flex-1 relative rounded-3xs max-w-full overflow-hidden object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/image-13@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        className="h-[15.438rem] w-[25.256rem] absolute !m-[0] bottom-[-5rem] left-[24.688rem] object-contain z-[1]"
        loading="lazy"
        alt=""
        src="/line-3.svg"
      />
    </section>
  );
};

export default FrameComponent3;