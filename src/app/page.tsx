import { NextPage } from "next";
import Navigation from "../components/navigation";
import Header from "../components/header";
import Features from "../components/features";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";
import Image from "next/image";

const MacBookPro16: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-[2.187rem] px-[0rem] box-border gap-[3rem] leading-[normal] tracking-[normal] text-left text-[3.125rem] text-ghostwhite-100 font-lato mq450:gap-[1.5rem]">
      <section className="w-[104.125rem] flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1.25rem] box-border relative max-w-full">
        <Navigation />
        <Header />
      </section>
      <div className="w-full h-full bg-cover bg-center flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[22.312rem] box-border max-w-full mq900:pb-[14.5rem] mq900:box-border">
        <div className="w-[43.688rem] flex flex-col items-start justify-start gap-[6.062rem] max-w-full mq900:gap-[3rem] mq450:gap-[1.5rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[2.437rem] max-w-full mq900:gap-[1.188rem]">
            <h1 className="m-0 w-[37.625rem] relative text-inherit capitalize font-semibold font-inherit flex items-center max-w-full z-[2] mq900:text-[2.5rem] mq450:text-[1.875rem]">
              <span className="w-full">
                <span>Welcome to Prism</span>
                <span className="text-salmon-100">Shop</span>
              </span>
            </h1>
            <p className="m-0 self-stretch relative text-[1.25rem] capitalize text-darkgray-100 z-[2] mq450:text-[1rem]">
              Discover unique, high-quality products, from trendy fashion to stylish home decor and innovative gadgets. There&apos;s something special for everyone!
            </p>
          </div>
          <div className="w-[42.875rem] rounded-31xl bg-white flex flex-row flex-wrap items-start justify-start pt-[0.312rem] pb-[0.375rem] pr-[0.5rem] pl-[2.375rem] box-border gap-[3.687rem] max-w-full z-[2] text-[1.25rem] text-steelblue-100 mq900:gap-[1.813rem]">
            <div className="h-[4.375rem] w-[42.875rem] relative rounded-31xl bg-white hidden max-w-full" />
            <div className="flex-1 flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem] box-border min-w-[15.313rem] max-w-full">
              <p className="m-0 self-stretch h-[2.438rem] relative capitalize flex items-center shrink-0 z-[1] mq450:text-[1rem]">
                Looking for something, Type to search
              </p>
            </div>
            <button className="cursor-pointer [border:none] py-[1.25rem] px-[3.937rem] bg-button-blue rounded-31xl overflow-hidden flex flex-row items-end justify-start gap-[0.556rem] z-[1] hover:bg-steelblue-200">
              <Image
                width={20}
                height={20}
                className="h-[1.094rem] w-[1.094rem] relative"
                alt=""
                src="/search-icon.svg"
              />
              <b className="relative text-[1rem] capitalize font-extrabold font-lato text-white text-center inline-block min-w-[3.125rem]">
                Search
              </b>
            </button>
          </div>
        </div>
      </div>
      <Features />
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <Image
        width={25}
        height={25}
        className="w-full h-[48.875rem] absolute !m-[0] right-[0rem] bottom-[114.313rem] left-[0rem] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/pexelscottonbro3944405-1.png"
      />
      <FrameComponent />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default MacBookPro16;
