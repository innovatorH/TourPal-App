import { useCallback } from "react";
import { useRouter } from "next/router";

const Place = () => {
  const router = useRouter();

  const onFooterButtonClick = useCallback(() => {
    router.push("/time");
  }, [router]);

  return (
    <div className="w-full relative bg-white flex flex-row items-start justify-center py-[39px] px-5 box-border leading-[normal] tracking-[normal]">
      <section className="w-[1096px] bg-white flex flex-col items-end justify-start py-[51px] px-[191px] box-border gap-[180px] max-w-full text-center text-6xl-3 text-wwwtripadvisorcom-black font-wwwtripadvisorcom-inter-black-463 mq450:gap-[22px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[45px] mq750:py-[33px] mq750:px-[47px] mq750:box-border mq1100:gap-[90px] mq1100:pl-[95px] mq1100:pr-[95px] mq1100:box-border">
        <div className="w-[1096px] h-[710px] relative bg-white hidden max-w-full" />
        <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[13px] pr-[7px] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[84px] max-w-full mq450:gap-[21px] mq750:gap-[42px]">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[53px] pr-[58px] box-border max-w-full mq750:pl-[26px] mq750:pr-[29px] mq750:box-border">
              <div className="flex-1 flex flex-col items-end justify-start gap-12 max-w-full mq750:gap-6">
                <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                  <div className="w-[343.5px] flex flex-col items-start justify-start gap-4 max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-[9px]">
                      <div className="flex-1 relative leading-[34px] font-extrabold z-[1] mq450:text-xl mq450:leading-[27px]">
                        Where do you want to go?
                      </div>
                    </div>
                    <div className="self-stretch relative text-[15.5px] leading-[22px] text-gray-400 z-[1]">
                      Search or get inspired by popular destinations.
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[60px] relative rounded-11xl bg-white border-gainsboro-200 border-[2px] border-solid box-border overflow-hidden shrink-0 z-[1] text-left text-mid-2 text-gray-400">
                  <a className="[text-decoration:none] absolute top-[21px] left-[56px] text-[inherit] flex items-center w-[182.1px] h-[18px]">
                    Search
                  </a>
                  <img
                    className="absolute h-[calc(100%_-_4px)] top-[2px] bottom-[2px] left-[3px] max-h-full w-14 z-[1]"
                    alt=""
                    src="/container.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-end justify-center flex-wrap content-end gap-[35.7px] text-base text-white mq750:gap-[18px]">
              <div className="h-[115px] w-[110px] rounded-xl overflow-hidden shrink-0 flex flex-col items-start justify-start z-[1]">
                <div className="w-[113px] h-[212.8px] relative shrink-0">
                  <div className="absolute top-[0px] left-[0px] rounded-md bg-gainsboro-200 w-[109.8px] overflow-hidden flex flex-row items-start justify-start pt-[136.8px] px-0 pb-0 box-border">
                    <div className="h-[76px] flex-1 relative [background:linear-gradient(0deg,_rgba(0,_0,_0,_0.6),_rgba(0,_0,_0,_0.6)_57.89%,_rgba(0,_0,_0,_0))]">
                      <div className="absolute w-[calc(100%_-_32px)] top-[32px] right-[16px] left-[16px] h-7 overflow-hidden hidden" />
                    </div>
                  </div>
                  <img
                    className="absolute top-[0px] left-[0px] w-[113px] h-[118px] object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/image-45@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[5px] pr-0 mt-[-45.8px]">
                  <div className="h-[46px] w-52 relative tracking-[0.56px] leading-[46px] font-extrabold flex items-center justify-center shrink-0">
                    Menagesha Suba Forest Park
                  </div>
                </div>
              </div>
              <div className="h-[115px] flex-1 relative rounded-xl overflow-hidden min-w-[71px] z-[1]">
                <div className="absolute top-[11px] left-[0px] rounded-md bg-gainsboro-200 w-[109.8px] overflow-hidden flex flex-row items-start justify-start pt-[136.8px] px-0 pb-0 box-border">
                  <div className="h-[76px] flex-1 relative [background:linear-gradient(0deg,_rgba(0,_0,_0,_0.6),_rgba(0,_0,_0,_0.6)_57.89%,_rgba(0,_0,_0,_0))]">
                    <div className="absolute w-[calc(100%_-_32px)] top-[32px] right-[16px] left-[16px] h-7 overflow-hidden hidden" />
                  </div>
                </div>
                <img
                  className="absolute top-[-1px] left-[0px] w-full h-full object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/image-42@2x.png"
                />
              </div>
              <img
                className="h-[115.1px] w-[110.1px] relative rounded-xl overflow-hidden shrink-0 object-contain min-h-[115px] z-[1]"
                loading="lazy"
                alt=""
                src="/item@2x.png"
              />
              <div className="h-[115px] flex-1 rounded-xl overflow-hidden flex flex-row items-start justify-start min-w-[71px] z-[1]">
                <div className="flex-1 rounded-md bg-gainsboro-200 overflow-hidden flex flex-col items-start justify-start gap-[21.8px]">
                  <img
                    className="w-[110px] h-[115px] relative object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/image-43@2x.png"
                  />
                  <div className="self-stretch h-[76px] relative [background:linear-gradient(0deg,_rgba(0,_0,_0,_0.6),_rgba(0,_0,_0,_0.6)_57.89%,_rgba(0,_0,_0,_0))]">
                    <div className="absolute w-[calc(100%_-_32px)] top-[32px] right-[16px] left-[16px] h-7 overflow-hidden hidden" />
                  </div>
                </div>
              </div>
              <div className="h-[115px] flex-1 rounded-xl overflow-hidden flex flex-row items-start justify-start min-w-[71px] z-[1]">
                <div className="flex-1 rounded-md bg-gainsboro-200 overflow-hidden flex flex-col items-start justify-start gap-[21.8px]">
                  <img
                    className="w-[110px] h-[115px] relative object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/image-40@2x.png"
                  />
                  <div className="self-stretch h-[76px] relative [background:linear-gradient(0deg,_rgba(0,_0,_0,_0.6),_rgba(0,_0,_0,_0.6)_57.89%,_rgba(0,_0,_0,_0))]">
                    <div className="absolute w-[calc(100%_-_32px)] top-[32px] right-[16px] left-[16px] h-7 overflow-hidden hidden" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="cursor-pointer [border:none] py-3.5 pl-6 pr-[22px] bg-wwwtripadvisorcom-black rounded-3xl flex flex-row items-start justify-start z-[1] hover:bg-darkslategray-200"
          onClick={onFooterButtonClick}
        >
          <b className="relative text-mini-8 leading-[20px] inline-block font-wwwtripadvisorcom-inter-black-463 text-white text-center min-w-[35px]">
            Next
          </b>
        </button>
      </section>
    </div>
  );
};

export default Place;
