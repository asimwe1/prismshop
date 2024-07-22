import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] pb-[7.875rem] pr-[4.187rem] pl-[1.25rem] box-border max-w-full text-left text-[1.25rem] text-blue font-lato mq900:pb-[5.125rem] mq900:box-border mq1300:pr-[2.063rem] mq1300:box-border mq450:pb-[3.313rem] mq450:box-border ${className}`}
    >
      <div className="flex flex-row items-start justify-center gap-[2.875rem] max-w-full mq900:gap-[1.438rem] mq1650:flex-wrap">
        <div className="w-[26.75rem] flex flex-col items-start justify-start pt-[4.812rem] px-[0rem] pb-[0rem] box-border max-w-full mq900:pt-[3.125rem] mq900:box-border">
          <div className="self-stretch flex flex-col items-end justify-start gap-[3.812rem] max-w-full mq450:gap-[1.875rem]">
            <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
              <div className="h-[21.875rem] w-[21.875rem] absolute !m-[0] top-[-9.062rem] left-[-7.75rem] rounded-[50%] bg-salmon-200" />
              <div className="flex-1 shadow-[0px_0px_70px_rgba(69,_71,_160,_0.35)] rounded-3xs bg-white flex flex-col items-end justify-start pt-[2.25rem] pb-[2.312rem] pr-[3.375rem] pl-[3rem] box-border gap-[1.937rem] max-w-full z-[1] mq450:gap-[0.938rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                <div className="w-[26.75rem] h-[19.563rem] relative shadow-[0px_0px_70px_rgba(69,_71,_160,_0.35)] rounded-3xs bg-white hidden max-w-full" />
                <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[0rem] pl-[0.375rem]">
                  <Image
                  width={30}
                  height={25}
                    className="h-[4.375rem] w-[4.375rem] relative rounded-[50%] object-cover z-[2]"
                    loading="lazy"
                    alt=""
                    src="/Ellipse.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.125rem]">
                  <blockquote className="m-0 self-stretch relative z-[2] mq450:text-[1rem]">
                    <span className="font-semibold">“</span>
                    <span className="text-[1rem] font-light text-black">
                      Lorem ipsum dolor sit amet. Et consectetur provident id
                      laboriosam amet sit maiores sunt in voluptatibus deserunt
                      est doloribus facilis et nesciunt laborum et corporis
                      voluptatum.
                    </span>
                    <span className="font-semibold">”</span>
                  </blockquote>
                  <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.625rem] text-[1rem]">
                    <div className="flex flex-col items-start justify-start gap-[0.506rem]">
                      <div className="flex flex-row items-start justify-start gap-[0.4rem]">
                        <Image
                        width={30}
                        height={25}
                          className="h-[0.931rem] w-[0.931rem] relative rounded-12xs min-h-[0.938rem] z-[2]"
                          loading="lazy"
                          alt=""
                          src="/star.svg"
                        />
                        <Image
                        width={25}
                        height={25}
                          className="h-[0.931rem] w-[0.931rem] relative rounded-12xs min-h-[0.938rem] z-[2]"
                          alt=""
                          src="/star.svg"
                        />
                        <Image
                        width={25}
                        height={25}
                          className="h-[0.931rem] w-[0.931rem] relative rounded-12xs min-h-[0.938rem] z-[2]"
                          alt=""
                          src="/star.svg"
                        />
                        <Image
                        width={25}
                        height={25}
                          className="h-[0.931rem] w-[0.931rem] relative rounded-12xs min-h-[0.938rem] z-[2]"
                          alt=""
                          src="/star.svg"
                        />
                        <Image
                        width={30}
                        height={25}
                          className="h-[0.931rem] w-[0.931rem] relative rounded-12xs min-h-[0.938rem] z-[2]"
                          alt=""
                          src="/star.svg"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.5rem] pl-[1.437rem]">
                        <b className="relative font-semibold inline-block min-w-[3.313rem] z-[2]">
                          Brian.T
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xs bg-blue flex flex-col items-start justify-start pt-[1.312rem] pb-[2.125rem] pr-[1.937rem] pl-[2.125rem] gap-[0.812rem] text-[1rem] text-white">
              <div className="w-[13.563rem] h-[7.688rem] relative rounded-3xs bg-blue hidden" />
              <div className="flex flex-row items-start justify-start py-[0rem] pr-[3.062rem] pl-[2.937rem]">
                <b className="relative font-extrabold inline-block min-w-[3.5rem] z-[1]">
                  4.6/5.0
                </b>
              </div>
              <div className="flex flex-col items-start justify-start gap-[0.193rem] text-[0.875rem]">
                <div className="flex flex-row items-start justify-start py-[0rem] pr-[2.062rem] pl-[2rem]">
                  <Image
                  width={25}
                  height={25}
                    className="h-[0.931rem] w-[5.406rem] relative z-[1]"
                    loading="lazy"
                    alt=""
                    src="/group-6958.svg"
                  />
                </div>
                <div className="relative font-semibold z-[1]">
                  Based on 1000+ ratings
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[22.625rem] flex flex-col items-start justify-start py-[0rem] pr-[1rem] pl-[0rem] box-border gap-[1.5rem] max-w-full text-[1rem] text-button-blue">
          <div className="flex flex-row items-start justify-start relative">
            <Image
            width={50}
            height={50}
              className="h-[3.125rem] w-[3.125rem] absolute !m-[0] top-[-1.562rem] right-[-1.5rem] z-[2]"
              loading="lazy"
              alt=""
              src="/group-6956.svg"
            />
            <div className="shadow-[0px_0px_70px_rgba(69,_71,_160,_0.23)] rounded-3xs bg-white flex flex-col items-start justify-start pt-[1.562rem] pb-[1.937rem] pr-[1.5rem] pl-[2.062rem] gap-[1.062rem]">
              <div className="w-[13.75rem] h-[17rem] relative shadow-[0px_0px_70px_rgba(69,_71,_160,_0.23)] rounded-3xs bg-white hidden" />
              <div className="flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1.562rem]">
                <div className="relative font-semibold z-[1]">
                  1000+ Verified review
                </div>
              </div>
              <div className="w-[9.25rem] flex flex-col items-start justify-start gap-[1.062rem]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[0.793rem]">
                  <Image
                  width={45}
                  height={45}
                    className="h-[2.5rem] w-[2.644rem] relative rounded-8xs object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/Ellipse.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[0.187rem]">
                    <b className="self-stretch relative leading-[1.063rem] font-semibold z-[1]">
                      Trust Pilot
                    </b>
                    <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.25rem] text-[0.75rem] text-blue">
                      <div className="flex-1 relative font-light z-[1]">
                        Verified by TP
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[0.793rem]">
                  <Image
                  width={45}
                  height={45}
                    className="h-[2.5rem] w-[2.644rem] relative rounded-8xs object-cover z-[1]"
                    alt=""
                    src="/Ellipse.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[0.187rem]">
                    <b className="self-stretch relative leading-[1.063rem] font-semibold z-[1]">
                      Trust Pilot
                    </b>
                    <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.25rem] text-[0.75rem] text-blue">
                      <div className="flex-1 relative font-light z-[1]">
                        Verified by TP
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[9.25rem] flex flex-row items-start justify-start gap-[0.793rem]">
                <Image
                width={45}
                height={45}
                  className="h-[2.5rem] w-[2.644rem] relative rounded-8xs object-cover z-[1]"
                  alt=""
                  src="/Ellipse.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[0.187rem]">
                  <b className="self-stretch relative leading-[1.063rem] font-semibold z-[1]">
                    Trust Pilot
                  </b>
                  <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.25rem] text-[0.75rem] text-blue">
                    <div className="flex-1 relative font-light z-[1]">
                      Verified by TP
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch shadow-[0px_0px_70px_rgba(69,_71,_160,_0.24)] rounded-3xs bg-white flex flex-col items-end justify-start pt-[1.25rem] pb-[3.062rem] pr-[3.125rem] pl-[3.062rem] box-border gap-[2.187rem] max-w-full text-[1.25rem] text-blue mq450:gap-[1.063rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:pb-[2rem] mq450:box-border">
            <div className="w-[21.625rem] h-[22.938rem] relative shadow-[0px_0px_70px_rgba(69,_71,_160,_0.24)] rounded-3xs bg-white hidden max-w-full" />
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[0rem] pl-[0.062rem]">
              <Image
              width={55}
              height={55}
                className="h-[4.375rem] w-[4.375rem] relative rounded-[50%] object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/Ellipse.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem]">
              <blockquote className="m-0 self-stretch relative z-[1] mq450:text-[1rem]">
                <span className="font-semibold">“</span>
                <span className="text-[1rem] font-light text-black">
                  Lorem ipsum dolor sit amet. Et consectetur provident id
                  laboriosam amet sit maiores sunt in voluptatibus deserunt est
                  doloribus facilis et nesciunt laborum et corporis voluptatum.
                </span>
                <span className="font-semibold">”</span>
              </blockquote>
              <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.375rem] text-[1rem]">
                <div className="flex flex-col items-start justify-start gap-[0.881rem]">
                  <div className="flex flex-row items-start justify-start gap-[0.4rem]">
                    <Image
                    width={10}
                    height={10}
                      className="h-[0.931rem] w-[0.931rem] relative rounded-12xs min-h-[0.938rem] z-[1]"
                      alt=""
                      src="/star.svg"
                    />
                    <Image
                    width={10}
                    height={10}
                      className="h-[0.931rem] w-[0.931rem] relative rounded-12xs min-h-[0.938rem] z-[1]"
                      alt=""
                      src="/star.svg"
                    />
                    <Image
                    width={10}
                    height={10}
                      className="h-[0.931rem] w-[0.931rem] relative rounded-12xs min-h-[0.938rem] z-[1]"
                      alt=""
                      src="/star.svg"
                    />
                    <Image
                    width={10}
                    height={10}
                      className="h-[0.931rem] w-[0.931rem] relative rounded-12xs min-h-[0.938rem] z-[1]"
                      alt=""
                      src="/star.svg"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.875rem] pl-[0.75rem]">
                    <b className="relative font-semibold inline-block min-w-[3.313rem] z-[1]">
                      Theo.N
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[33.938rem] flex flex-col items-start justify-start pt-[1.687rem] px-[0rem] pb-[0rem] box-border max-w-full text-[3.125rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[3.937rem] max-w-full mq900:gap-[1.938rem] mq450:gap-[1rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[3.375rem] max-w-full mq900:gap-[1.688rem]">
              <h1 className="m-0 self-stretch relative text-inherit capitalize font-extrabold font-inherit mq900:text-[2.5rem] mq450:text-[1.875rem]">
                Feedback From our clients
              </h1>
              <blockquote className="m-0 w-[30.875rem] relative inline-block max-w-full text-[1.25rem] mq450:text-[1rem]">
                <span className="font-semibold">“</span>
                <span className="text-[1rem] font-light text-black">{`Lorem ipsum dolor sit amet. Et consectetur provident id laboriosam amet sit maiores sunt in voluptatibus deserunt est doloribus facilis et nesciunt laborum et corporis voluptatum . `}</span>
                <span className="font-semibold">”</span>
              </blockquote>
            </div>
            <blockquote className="m-0 w-[30.875rem] relative inline-block max-w-full text-[1.25rem] mq450:text-[1rem]">
              <span className="font-semibold">“</span>
              <span className="text-[1rem] font-light text-black">{`Lorem ipsum dolor sit amet. Et consectetur provident id laboriosam amet sit maiores sunt in voluptatibus deserunt est doloribus facilis et nesciunt laborum et corporis voluptatum . `}</span>
              <span className="font-semibold">”</span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;