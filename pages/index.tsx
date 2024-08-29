import { useCallback } from "react";
import { useRouter } from "next/router";

const TripType = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/preferences");
  }, [router]);

  return (
    <div className="w-full relative [background:linear-gradient(#fff,_#fff),_#fff] overflow-y-auto flex flex-col items-center justify-start pt-[167px] pb-[150.4px] pl-5 pr-[21px] box-border gap-12 leading-[normal] tracking-[normal] text-center text-[25.5px] text-wwwtripadvisorcom-black font-wwwtripadvisorcom-inter-black-463 mq450:gap-6">
      <div className="w-[890px] h-[22px] shrink-0 flex flex-row items-start justify-start pt-0 px-0 pb-4 box-border max-w-full">
        <div className="self-stretch flex-1 rounded-10xs bg-gray-1200 flex flex-row items-start justify-start max-w-full">
          <div className="self-stretch w-[445px] relative rounded-10xs bg-wwwtripadvisorcom-black max-w-full" />
        </div>
      </div>
      <div className="w-[890px] flex flex-row items-start justify-center py-0 pl-px pr-0 box-border max-w-full">
        <div className="w-[440px] flex flex-col items-end justify-start gap-4 max-w-full">
          <div className="relative leading-[34px] font-extrabold mq450:text-xl mq450:leading-[27px]">
            What kind of trip are you planning?
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5 text-base-4 text-gray-400">
            <div className="relative leading-[22px] inline-block min-w-[82px]">
              Select one.
            </div>
          </div>
        </div>
      </div>
      <div className="w-[890px] flex flex-row items-start justify-center pt-0 px-0 pb-4 box-border max-w-full text-base-5">
        <div className="w-[720px] flex flex-row items-start justify-center flex-wrap content-start gap-4 max-w-full">
          <div className="w-[168px] rounded-xl bg-white border-wwwtripadvisorcom-black border-[1px] border-solid box-border flex flex-col items-start justify-start py-4 px-[17px] gap-[12.8px]">
            <img
              className="w-12 h-12 relative rounded-3xl"
              loading="lazy"
              alt=""
              src="/background.svg"
            />
            <b className="relative leading-[22px] inline-block min-w-[72px]">
              Solo Trip
            </b>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-10 min-w-[229px] max-w-full text-[16.6px] mq450:gap-5">
            <div className="self-stretch flex flex-row items-start justify-center gap-4 mq450:flex-wrap">
              <div className="flex-1 rounded-xl bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[23px] px-[17px] pb-4 gap-[19.8px] min-w-[126px]">
                <div className="flex flex-row items-start justify-start py-0 px-[7px]">
                  <img
                    className="h-[34px] w-[34px] relative"
                    loading="lazy"
                    alt=""
                    src="/svg.svg"
                  />
                </div>
                <b className="w-[93.6px] relative leading-[22px] flex items-center justify-center min-w-[93.6px]">
                  Partner trip
                </b>
              </div>
              <div className="flex-1 rounded-xl bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[23px] px-[17px] pb-4 gap-[19.8px] min-w-[126px] text-base">
                <div className="flex flex-row items-start justify-start py-0 px-[7px]">
                  <img
                    className="h-[34px] w-[34px] relative"
                    loading="lazy"
                    alt=""
                    src="/svg-1.svg"
                  />
                </div>
                <b className="w-[94.2px] relative leading-[22px] flex items-center justify-center min-w-[94.2px]">
                  Friends Trip
                </b>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[18px] text-base-1 text-gray-400">
              <div className="flex-1 flex flex-col items-end justify-start gap-[24.6px]">
                <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[50px] pr-[46px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[3.8px]">
                    <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                      <div className="self-stretch relative leading-[22px]">
                        Are you traveling with pets?
                      </div>
                    </div>
                    <img
                      className="h-[22px] w-4 relative"
                      loading="lazy"
                      alt=""
                      src="/button.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-center gap-4 text-[15.5px] text-wwwtripadvisorcom-black mq450:flex-wrap">
                  <button className="cursor-pointer border-gainsboro-200 border-[1px] border-solid py-3 pl-[62px] pr-[61px] bg-white rounded-3xl flex flex-row items-start justify-start hover:bg-gainsboro-100 hover:border-silver-200 hover:border-[1px] hover:border-solid hover:box-border">
                    <b className="relative text-sm-6 leading-[20px] inline-block font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-center min-w-[25px]">
                      Yes
                    </b>
                  </button>
                  <div className="rounded-3xl bg-mediumseagreen-100 flex flex-row items-start justify-start py-3.5 pl-[52px] pr-[51px] gap-2">
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <img
                        className="w-4 h-4 relative"
                        alt=""
                        src="/svg-2.svg"
                      />
                    </div>
                    <b className="relative leading-[20px] inline-block min-w-[22px]">
                      No
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[168px] rounded-xl bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[23px] px-[17px] pb-4 gap-[19.8px] text-[16.3px]">
            <div className="flex flex-row items-start justify-start py-0 px-[7px]">
              <img
                className="h-[34px] w-[34px] relative"
                loading="lazy"
                alt=""
                src="/svg-3.svg"
              />
            </div>
            <b className="w-[84.3px] relative leading-[22px] flex items-center justify-center min-w-[84.3px]">
              Family trip
            </b>
          </div>
        </div>
      </div>
      <div className="w-[890px] flex flex-row items-start justify-center py-0 pl-px pr-0 box-border max-w-full text-mini-9 text-darkslategray-200">
        <div className="w-[720.1px] flex flex-row items-start justify-between gap-5 max-w-full mq450:flex-wrap mq450:justify-center">
          <div className="w-[36.2px] flex flex-col items-start justify-start pt-[14.5px] px-0 pb-0 box-border">
            <b className="self-stretch relative [text-decoration:underline] leading-[19px] inline-block min-w-[36.2px] shrink-0">
              Back
            </b>
          </div>
          <button
            className="cursor-pointer [border:none] pt-[13.6px] pb-[14.4px] pl-6 pr-[22px] bg-wwwtripadvisorcom-black rounded-3xl flex flex-row items-start justify-start shrink-0 hover:bg-darkslategray-200"
            onClick={onButtonClick}
          >
            <b className="relative text-mini-8 leading-[20px] inline-block font-wwwtripadvisorcom-inter-black-463 text-white text-center min-w-[35px]">
              Next
            </b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TripType;
