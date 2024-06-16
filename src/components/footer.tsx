import type { NextPage } from "next";
import Image from "next/image";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-blue flex flex-col items-start justify-start pt-[6.312rem] px-[8.312rem] pb-[5.5rem] box-border gap-[3.5rem] max-w-full text-left text-[2.5rem] text-white font-lato mq900:gap-[1.75rem] mq900:pt-[4.125rem] mq900:px-[2.063rem] mq900:pb-[3.563rem] mq900:box-border mq1300:pl-[4.125rem] mq1300:pr-[4.125rem] mq1300:box-border ${className}`}
    >
      <div className="w-[108rem] h-[44rem] relative bg-blue hidden max-w-full" />
      <div className="flex flex-row items-start justify-center gap-[3rem] max-w-full mq900:gap-[1.813rem]  ">
        <div className="w-[27.625rem] flex flex-col items-start justify-start py-[0rem] pr-[2rem] pl-[0rem] box-border max-w-full text-[2.188rem] font-montserrat">
          <div className="w-[19.438rem] flex flex-row items-start justify-start gap-[0.25rem]">
            <Image
            width={45}
            height={45}
              className="h-[4.813rem] w-[4.75rem] relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/group-6-962.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem]">
              <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit z-[1] mq900:text-[1.75rem] mq450:text-[1.313rem]">
                <span>Prism</span>
                <span className="text-salmon-100">Shop</span>
              </h1>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.125rem] box-border max-w-full text-[1.875rem] font-lato">
            <p className="m-0 h-[17.813rem] flex-1 relative inline-block max-w-full z-[2] mq900:text-[1.5rem] mq450:text-[1.125rem]">
              Lorem ipsum dolor sit amet. Et consectetur provident id laboriosam
              amet sit maiores sunt in voluptatibus deserunt est doloribus
              facilis et nesciunt laborum et corporis voluptatum.
            </p>
          </div>
        </div>
        <div className="w-[12.125rem] flex flex-col items-start justify-start pt-[1.125rem] px-[0rem] pb-[0rem] box-border text-[1.875rem]">
          <div className="self-stretch relative z-[1] mq900:text-[1.5rem] mq450:text-[1.125rem]">
            <p className="m-0 text-[2.5rem] font-black">Company</p>
            <p className="m-0 text-[2.5rem] font-black">&nbsp;</p>
            <p className="m-0">About us</p>
            <p className="m-0">Newsroom</p>
            <p className="m-0">Our Pricing</p>
            <p className="m-0">Why us</p>
          </div>
        </div>
        <div className="w-[19.188rem] flex flex-col items-start justify-start pt-[1.125rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border">
          <div className="w-[16.25rem] h-[20.125rem] relative inline-block z-[1] mq900:text-[2rem] mq450:text-[1.5rem]">
            <p className="m-0">
              <span>
                <span className="font-black">Resources</span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span>&nbsp;</span>
              </span>
            </p>
            <p className="m-0 text-[1.875rem]">
              <span>
                <span>Affiliate</span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span>Become a supplier</span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span>Submit a guest post</span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span>Suppliers directory</span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span>&nbsp;</span>
              </span>
            </p>
          </div>
        </div>
        <div className="w-[13.938rem] flex flex-col items-start justify-start pt-[0.687rem] px-[0rem] pb-[0rem] box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[3.625rem]">
            <h1 className="m-0 w-[12.563rem] relative text-inherit font-black font-inherit inline-block z-[1] mq900:text-[2rem] mq450:text-[1.5rem]">
              Contact us
            </h1>
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.562rem]">
              <div className="flex-1 flex flex-row items-end justify-between gap-[1.25rem]">
                <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <Image
                  width={50}
                  height={50}
                    className="w-[3.125rem] h-[3.125rem] relative overflow-hidden shrink-0 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/facebook-1.png"
                  />
                </div>
                <Image
                width={60}
                height={50}
                  className="h-[3.75rem] w-[3.281rem] relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/instagram-1.png"
                />
                <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.25rem]">
                  <Image
                  width={50}
                  height={50}
                    className="w-[3.125rem] h-[3.125rem] relative overflow-hidden shrink-0 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/xtwitter-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[87.063rem] flex flex-row items-start justify-start py-[0rem] px-[0.125rem] box-border max-w-full">
        <hr
        className="w-[30rem] rotate-90"
        />
      </div>
      <div className="w-[86.625rem] flex flex-row items-start justify-start py-[0rem] px-[0.125rem] box-border max-w-full text-[1.875rem]">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq1300:flex-wrap">
          <h2 className="m-0 w-[55.25rem] relative text-inherit font-medium font-inherit flex items-center shrink-0 max-w-full z-[1] mq900:text-[1.5rem] mq450:text-[1.125rem]">
            copyright ©️ 2024 PrismShop. Built by Techers. All Rights Reserved
          </h2>
          <h2 className="m-0 relative text-inherit font-medium font-inherit z-[1] mq900:text-[1.5rem] mq450:text-[1.125rem]">
            Privacy policy
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;