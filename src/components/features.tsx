import type { NextPage } from "next";
// import Slide from "./slide";
import GroupComponent1 from "./group-component1";
import GroupComponent from "./group-component";
import Image from "next/image";

export type FeaturesType = {
  className?: string;
};

const Features: NextPage<FeaturesType> = ({ className = "" }) => {
  return (
    <section
      className={`flex flex-row items-start justify-end py-[0rem] pr-[0.312rem] pl-[0rem] box-border max-w-full text-left text-[1rem] text-white font-lato ${className}`}
    >
      <div className="w-[107.688rem] flex flex-row items-start justify-start gap-[8.55rem] max-w-full mq900:gap-[2.125rem] mq1300:gap-[4.25rem] mq450:gap-[1.063rem]">
        <div className="ml-[-10.294rem] h-[91.213rem] flex flex-col items-start justify-start pt-[87.843rem] px-[0rem] pb-[0rem] box-border mq900:pt-[37.125rem] mq900:box-border mq1300:pt-[57.125rem] mq1300:box-border">
          <Image
            className="w-[1.619rem] flex-1 relative max-h-full overflow-hidden shrink-0 [debug_commit:69da668]"
            alt=""
            src="/widgets.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-[3.25rem] shrink-0 [debug_commit:69da668] max-w-full mq450:gap-[1.625rem]">
          <div className="flex flex-row items-start justify-start py-[0rem] px-[0.125rem] box-border max-w-full">
            <div className="flex flex-row items-start justify-start gap-[2.937rem] max-w-full mq900:gap-[1.438rem] mq1300:flex-wrap">
              <div className="w-[5.313rem] flex flex-col items-start justify-start pt-[5.187rem] px-[0rem] pb-[0rem] box-border">
                <div className="w-[3.688rem] flex flex-row items-start justify-start pt-[4.631rem] pb-[3.337rem] pr-[1.25rem] pl-[0rem] box-border relative">
                  <div className="h-full w-[15.125rem] absolute !m-[0] top-[0rem] bottom-[0rem] left-[-12.687rem]">
                    <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-salmon-100 w-full h-full z-[3]" />
                    <div className="absolute top-[1.394rem] left-[1.913rem] rounded-[50%] bg-white w-[2.594rem] h-[2.594rem] z-[4]" />
                  </div>
                  <div className="ml-[-10.613rem] h-[1.619rem] w-[10.394rem] relative leading-[1.619rem] capitalize font-extrabold flex items-center shrink-0 [debug_commit:69da668] z-[4]">
                    Millions of products to chose from
                  </div>
                  <div className="w-[10.588rem] flex flex-col items-start justify-start pt-[1.781rem] px-[0rem] pb-[0rem] box-border shrink-0 ml-[-10.2rem] text-[0.625rem]">
                    <p className="m-0 self-stretch h-[2.75rem] relative capitalize flex items-center shrink-0 [debug_commit:69da668] z-[4]">
                      Explore our vast collections of products and choose
                      according to your taste
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[33.063rem] flex flex-col items-start justify-start gap-[6.312rem] max-w-full text-[1.875rem] mq900:gap-[3.125rem] mq450:gap-[1.563rem]">
                <div className="w-[30.063rem] flex flex-row items-start justify-start py-[0rem] px-[0.437rem] box-border max-w-full">
                  <div className="flex-1 rounded-xl bg-salmon-100 flex flex-col items-start justify-start pt-[2.25rem] px-[3.75rem] pb-[6.437rem] box-border gap-[0.312rem] max-w-full z-[3] mq900:pl-[1.875rem] mq900:pr-[1.875rem] mq900:box-border mq450:pt-[1.438rem] mq450:pb-[4.188rem] mq450:box-border">
                    <div className="w-[29.188rem] h-[24.125rem] relative rounded-xl bg-salmon-100 hidden max-w-full" />
                    <div className="w-[20.313rem] flex flex-col items-start justify-start gap-[1.687rem] max-w-full">
                      <Image
                        className="w-[5rem] h-[5rem] relative z-[4]"
                        loading="lazy"
                        alt=""
                        src="/circle.svg"
                      />
                      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.25rem] box-border max-w-full">
                        <h2 className="m-0 h-[3.125rem] flex-1 relative text-inherit capitalize font-extrabold font-inherit flex items-center max-w-full z-[1] mq900:text-[1.5rem] mq450:text-[1.125rem]">
                          Many products to chose from
                        </h2>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.625rem] box-border max-w-full text-[0.875rem]">
                      <p className="m-0 h-[5.313rem] flex-1 relative capitalize flex items-center max-w-full z-[1]">
                        Explore products and suppliers for your business from
                        millions of offerings worldwide.
                      </p>
                    </div>
                  </div>
                </div>
                <h1 className="m-0 self-stretch relative text-[2.5rem] capitalize font-extrabold font-inherit text-button-blue mq900:text-[2rem] mq450:text-[1.5rem]">{`Explore Our Categories and pick for yourself `}</h1>
              </div>
              <div className="flex flex-col items-start justify-start pt-[5.187rem] pb-[0rem] pr-[0.562rem] pl-[0rem]">
                <div className="rounded-xl bg-salmon-100 flex flex-col items-start justify-start pt-[1.187rem] px-[2.062rem] pb-[3.062rem] gap-[0.412rem] z-[3]">
                  <div className="w-[15.125rem] h-[12.5rem] relative rounded-xl bg-salmon-100 hidden" />
                  <div className="flex flex-row items-start justify-start py-[0rem] px-[0.125rem]">
                    <Image
                      className="h-[2.594rem] w-[2.594rem] relative z-[4]"
                      alt=""
                      src="/group-6929.svg"
                    />
                  </div>
                  <div className="w-[10.763rem] flex flex-col items-start justify-start gap-[0.118rem]">
                    <div className="w-[10.394rem] relative capitalize font-extrabold flex items-center z-[1]">
                      One-stop trading solution
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.062rem] pl-[0.125rem] text-[0.625rem]">
                      <p className="m-0 flex-1 relative capitalize z-[1]">
                        Order seamlessly from product/supplier search to order
                        management, payment, and fulfillment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[15.125rem] flex flex-col items-start justify-start pt-[5.5rem] px-[0rem] pb-[0rem] box-border">
                <div className="self-stretch rounded-xl bg-salmon-100 flex flex-col items-start justify-start pt-[0.875rem] px-[1.75rem] pb-[3.375rem] gap-[0.85rem] z-[3]">
                  <div className="w-[15.125rem] h-[12.5rem] relative rounded-xl bg-salmon-100 hidden" />
                  <div className="flex flex-row items-start justify-start py-[0rem] px-[0.125rem]">
                    <Image
                      className="h-[2.594rem] w-[2.594rem] relative z-[4]"
                      alt=""
                      src="/group-6929.svg"
                    />
                  </div>
                  <div className="w-[10.763rem] flex flex-col items-start justify-start gap-[0.437rem]">
                    <div className="w-[10.5rem] relative capitalize font-extrabold flex items-center z-[1]">
                      Get to access amazing company products
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.125rem] text-[0.625rem]">
                      <p className="m-0 h-[2.75rem] flex-1 relative capitalize flex items-center z-[1]">
                        Explore our vast collections of products and choose
                        according to your taste
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-8xs bg-ghostwhite-200 flex flex-row items-end justify-start pt-[2.312rem] pb-[7.062rem] pr-[3.312rem] pl-[4.062rem] box-border gap-[5rem] max-w-full text-[1.25rem] text-tomato mq900:gap-[2.5rem] mq900:pt-[1.25rem] mq900:pb-[2.938rem] mq900:pr-[1.625rem] mq900:pl-[2rem] mq900:box-border mq1300:pt-[1.5rem] mq1300:pb-[4.563rem] mq1300:box-border mq450:gap-[1.25rem] mq1650:flex-wrap">
            <div className="h-[63.5rem] w-[107.813rem] relative rounded-8xs bg-ghostwhite-200 hidden max-w-full" />
            <div className="w-[38.063rem] flex flex-col items-start justify-start py-[0rem] pr-[0.687rem] pl-[0rem] box-border gap-[8.25rem] max-w-full mq900:gap-[4.125rem] mq450:gap-[2.063rem]">
              {/* <Slide accessories="Accessories" />
              <Slide
                accessories={`Beauty & Personal Care`}
                propWidth="24.375rem"
                propDisplay="flex"
                propMinWidth="unset"
                propWidth1="13.875rem"
                propTextDecoration="none"
              /> */}
            </div>
            <div className="w-[32.75rem] flex flex-col items-start justify-start gap-[12.125rem] max-w-full text-[1rem] text-blue mq900:gap-[6.063rem] mq450:gap-[3rem]">
              <div className="self-stretch flex flex-row items-start justify-start gap-[4.625rem] mq900:flex-wrap mq900:gap-[2.313rem] mq450:gap-[1.125rem]">
                <GroupComponent1 />
                <GroupComponent />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[4.625rem] mq900:flex-wrap mq900:gap-[2.313rem] mq450:gap-[1.125rem]">
                <GroupComponent1 />
                <GroupComponent1 />
              </div>
            </div>
            <div className="w-[19.625rem] flex flex-col items-start justify-start gap-[8.437rem] mq450:gap-[4.188rem]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.125rem]">
                <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.375rem] pl-[1.25rem]">
                  <button className="cursor-pointer [border:none] pt-[0.625rem] pb-[0.437rem] pr-[2.812rem] pl-[2.875rem] bg-salmon-100 rounded-3xs flex flex-row items-start justify-start z-[1] hover:bg-indianred">
                    <div className="h-[2.563rem] w-[8.75rem] relative rounded-3xs bg-salmon-100 hidden" />
                    <b className="relative text-[1.25rem] capitalize font-semibold font-lato text-white text-left inline-block min-w-[3.063rem] z-[2] mq450:text-[1rem]">
                      More
                    </b>
                  </button>
                </div>
                <div className="self-stretch flex flex-row items-start justify-center gap-[2.437rem] mq450:flex-wrap mq450:gap-[1.188rem]">
                  <GroupComponent />
                  <div className="flex flex-col items-start justify-start pt-[7.625rem] px-[0rem] pb-[0rem]">
                    <Image
                      className="w-[3.125rem] h-[3.125rem] relative z-[1]"
                      alt=""
                      src="/group-6942.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.125rem]">
                <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.375rem] pl-[1.25rem]">
                  <button className="cursor-pointer [border:none] pt-[0.625rem] pb-[0.437rem] pr-[2.812rem] pl-[2.875rem] bg-salmon-100 rounded-3xs flex flex-row items-start justify-start z-[1] hover:bg-indianred">
                    <div className="h-[2.563rem] w-[8.75rem] relative rounded-3xs bg-salmon-100 hidden" />
                    <b className="relative text-[1.25rem] capitalize font-semibold font-lato text-white text-left inline-block min-w-[3.063rem] z-[2] mq450:text-[1rem]">
                      More
                    </b>
                  </button>
                </div>
                <div className="self-stretch flex flex-row items-start justify-center gap-[2.437rem] mq450:flex-wrap mq450:gap-[1.188rem]">
                  <GroupComponent1 />
                  <div className="flex flex-col items-start justify-start pt-[7.625rem] px-[0rem] pb-[0rem]">
                    <Image
                      className="w-[3.125rem] h-[3.125rem] relative z-[1]"
                      alt=""
                      src="/group-6942.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;