import { useCallback } from "react";
import Link from "./link";
import Link1 from "./link1";
import { useRouter } from "next/router";
import FrameComponent2 from "./frame-component2";
import PropTypes from "prop-types";

const Achievements1 = ({ className = "" }) => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/component");
  }, [router]);

  return (
    <section
      className={`w-[1376px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-2xl-4 text-wwwtripadvisorcom-black font-wwwtripadvisorcom-inter-black-463 ${className}`}
    >
      <div className="w-[1089.4px] flex flex-row items-start justify-start gap-[63.4px] max-w-full lg:gap-8 mq750:gap-4 mq1050:flex-wrap">
        <div className="w-[290px] flex flex-col items-start justify-start gap-6 min-w-[290px] mq1050:flex-1">
          <div className="self-stretch bg-white flex flex-col items-start justify-start p-6 gap-2">
            <b className="relative leading-[29px] mq450:text-mid mq450:leading-[23px]">
              Your Achievements
            </b>
            <div className="relative text-sm-5 leading-[17px] text-darkslategray-200">
              Start sharing to unlock
            </div>
            <Link />
            <Link1 />
            <button
              className="cursor-pointer [border:none] pt-[9.6px] pb-[18.4px] pl-[21px] pr-5 bg-wwwtripadvisorcom-black self-stretch rounded-xl flex flex-row items-start justify-center whitespace-nowrap hover:bg-darkslategray-200"
              onClick={onButtonClick}
            >
              <a className="[text-decoration:none] relative text-mini-5 leading-[20px] font-bold font-wwwtripadvisorcom-inter-black-463 text-white text-center inline-block min-w-[56px]">
                View all
              </a>
            </button>
          </div>
          <FrameComponent2 propHeight="unset" propPadding="unset" />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border min-w-[478px] max-w-full text-mini text-gray-1100 font-roboto mq750:min-w-full">
          <div className="self-stretch bg-white overflow-hidden flex flex-col items-start justify-start pt-2.5 px-0 pb-3.5 box-border gap-3.5 max-w-full">
            <div className="w-[600px] flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
              <div className="h-28 flex-1 relative max-w-full">
                <img
                  className="absolute top-[9px] left-[534px] w-[18px] h-[18px] object-contain"
                  loading="lazy"
                  alt=""
                  src="/icondots@2x.png"
                />
                <div className="absolute top-[0px] left-[0px] w-full flex flex-col items-start justify-start gap-[15px] max-w-full h-full">
                  <div className="flex flex-row items-start justify-start gap-3">
                    <img
                      className="h-8 w-8 relative rounded-xl object-cover"
                      loading="lazy"
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <div className="flex flex-col items-start justify-start gap-px">
                      <div className="relative tracking-[0.2px] leading-[17px] inline-block min-w-[75px]">
                        Peter Breis
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[3px] text-smi text-gray-1000">
                        <div className="relative tracking-[0.2px] leading-[17px] inline-block min-w-[75px]">
                          Local Guide
                        </div>
                        <div className="relative tracking-[0.2px] leading-[17px] inline-block min-w-[82px]">
                          ・55 reviews
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-px text-sm text-gray-1000">
                    <div className="flex flex-row items-start justify-start py-0 px-px">
                      <div className="flex flex-row items-start justify-start gap-[4.1px]">
                        <div className="flex flex-row items-start justify-start gap-0.5 shrink-0">
                          <img
                            className="h-[14.2px] w-[15px] relative rounded-12xs-5 min-h-[14px]"
                            loading="lazy"
                            alt=""
                            src="/star1.svg"
                          />
                          <img
                            className="h-[14.2px] w-[15px] relative rounded-12xs-5 min-h-[14px]"
                            loading="lazy"
                            alt=""
                            src="/star2.svg"
                          />
                          <img
                            className="h-[14.2px] w-[15px] relative rounded-12xs-5 min-h-[14px]"
                            loading="lazy"
                            alt=""
                            src="/star3.svg"
                          />
                          <img
                            className="h-[14.2px] w-[15px] relative rounded-12xs-5 min-h-[14px]"
                            loading="lazy"
                            alt=""
                            src="/star4.svg"
                          />
                          <img
                            className="h-[14.2px] w-[15px] relative rounded-12xs-5 min-h-[14px]"
                            alt=""
                            src="/star5.svg"
                          />
                        </div>
                        <div className="relative tracking-[0.2px] leading-[19px] inline-block min-w-[70px] shrink-0">
                          3 days ago
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch relative text-base tracking-[0.2px] leading-[21px] text-gray-1100">
                      This has become my life and I new favourite place in the
                      world. Amazing view and insane fun swimming with sea
                      lions.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[650px] flex flex-row items-start justify-start max-w-full [row-gap:20px] text-xl text-darkgray mq750:flex-wrap">
              <div className="flex-1 flex flex-col items-end justify-start min-w-[220px] max-w-full">
                <img
                  className="self-stretch h-[261px] relative max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/photo1@2x.png"
                />
                <div className="self-stretch h-[301px] flex flex-col items-start justify-start gap-12 mq450:gap-6">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                    loading="lazy"
                    alt=""
                    src="/image@2x.png"
                  />
                  <div className="w-[232px] flex flex-row items-start justify-start py-0 px-6 box-border">
                    <div className="flex-1 flex flex-row items-start justify-between gap-5">
                      <div className="w-[39px] flex flex-row items-start justify-start gap-[9px]">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px]"
                          loading="lazy"
                          alt=""
                          src="/like.svg"
                        />
                        <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                          <div className="self-stretch relative leading-[14px] mq450:text-base mq450:leading-[11px]">
                            1
                          </div>
                        </div>
                      </div>
                      <div className="w-[102px] flex flex-row items-start justify-start gap-[9px] text-center">
                        <img
                          className="h-[17px] w-[17px] relative min-h-[17px]"
                          loading="lazy"
                          alt=""
                          src="/share.svg"
                        />
                        <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                          <h3 className="m-0 self-stretch relative text-inherit leading-[14px] font-normal font-[inherit] mq450:text-base mq450:leading-[11px]">
                            Share
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[496px] w-[312px] flex flex-col items-start justify-start min-w-[312px] text-center text-9xl text-white mq750:flex-1">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/image-1@2x.png"
                />
                <div className="self-stretch h-[235px] flex flex-row items-start justify-start py-[103px] px-[125px] box-border bg-cover bg-no-repeat bg-[top] mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <img
                    className="h-[235px] w-[312px] relative object-cover hidden"
                    alt=""
                    src="/image1@2x.png"
                  />
                  <div className="relative leading-[19px] inline-block min-w-[48px] whitespace-nowrap z-[1] mq450:text-3xl mq450:leading-[15px]">
                    +47
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

Achievements1.propTypes = {
  className: PropTypes.string,
};

export default Achievements1;
