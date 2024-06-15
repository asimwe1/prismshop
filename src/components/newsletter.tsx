import type { NextPage } from "next";

export type NewsletterType = {
  className?: string;
};

const Newsletter: NextPage<NewsletterType> = ({ className = "" }) => {
  return (
    <section
      className={`w-[101.813rem] flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[5.562rem] box-border max-w-full text-left text-[2.5rem] text-button-blue font-lato mq900:pb-[3.625rem] mq900:box-border ${className}`}
    >
      <div className="w-[67.563rem] flex flex-col items-end justify-start gap-[3.843rem] max-w-full mq900:gap-[0.938rem] mq1300:gap-[1.938rem]">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[7.437rem] pl-[1.25rem] box-border max-w-full mq900:pr-[3.688rem] mq900:box-border mq450:pr-[1.25rem] mq450:box-border">
          <div className="w-[38.25rem] flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[2.562rem] pl-[2.5rem] box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
                <div className="h-[3.125rem] w-[3.125rem] absolute !m-[0] top-[0.938rem] right-[0rem] rounded-[50%] bg-gold" />
                <h1 className="m-0 h-[6.25rem] flex-1 relative text-inherit font-extrabold font-inherit flex items-center max-w-full z-[1] mq900:text-[2rem] mq450:text-[1.5rem]">
                  Subscribe to our newspaper
                </h1>
              </div>
            </div>
            <h2 className="m-0 self-stretch relative text-[1.875rem] font-light font-inherit z-[2] mt-[-0.688rem] mq900:text-[1.5rem] mq450:text-[1.125rem]">
              To stay updated on new arrivals and discounts
            </h2>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start max-w-full text-[1.875rem]">
          <div className="w-[61.313rem] flex flex-row items-start justify-start relative max-w-full">
            <div className="h-[21.875rem] w-[21.875rem] absolute !m-[0] top-[-7.625rem] left-[-13.5rem] rounded-[50%] bg-salmon-200" />
            <div className="flex-1 shadow-[0px_0px_70px_rgba(0,_0,_0,_0.25)] rounded-mini bg-white flex flex-row items-start justify-between pt-[1rem] pb-[0.937rem] pr-[1.25rem] pl-[2.687rem] box-border max-w-full gap-[1.25rem] z-[1] mq1300:flex-wrap mq1300:pl-[1.313rem] mq1300:box-border">
              <div className="h-[8.438rem] w-[61.313rem] relative shadow-[0px_0px_70px_rgba(0,_0,_0,_0.25)] rounded-mini bg-white hidden max-w-full" />
              <div className="w-[33.063rem] flex flex-col items-start justify-start pt-[1.187rem] px-[0rem] pb-[0rem] box-border max-w-full">
                <h2 className="m-0 self-stretch h-[3.625rem] relative text-inherit font-light font-inherit flex items-center shrink-0 z-[2] mq900:text-[1.5rem] mq450:text-[1.125rem]">
                  Enter your email address
                </h2>
              </div>
              <button className="cursor-pointer [border:none] py-[1.687rem] pr-[3.5rem] pl-[3.687rem] bg-blue h-[6.5rem] rounded-3xs flex flex-row items-start justify-start box-border min-w-[15.563rem] z-[2] hover:bg-mediumpurple-100 mq1300:flex-1">
                <div className="h-[6.5rem] w-[15.563rem] relative rounded-3xs bg-blue hidden" />
                <div className="relative text-[1.875rem] capitalize font-extrabold font-lato text-white text-left z-[3] mq900:text-[1.5rem] mq450:text-[1.125rem]">
                  subscribe
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="w-[6.25rem] h-[6.25rem] relative rounded-[50%] bg-mediumspringgreen" />
      </div>
    </section>
  );
};

export default Newsletter;