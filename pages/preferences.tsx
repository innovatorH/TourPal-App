import { useCallback } from "react";
import { useRouter } from "next/router";

const Preferences = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/journey-roadmap");
  }, [router]);

  return (
    <div className="w-full relative [background:linear-gradient(#fff,_#fff),_#fff] overflow-y-auto flex flex-col items-center justify-start pt-[167px] px-5 pb-[149.8px] box-border gap-[157.4px] leading-[normal] tracking-[normal] text-center text-5xl-8 text-wwwtripadvisorcom-black font-wwwtripadvisorcom-inter-black-463 mq700:gap-[39px] mq925:gap-[79px]">
      <div className="w-[890px] flex flex-col items-start justify-start gap-12 max-w-full mq450:gap-6">
        <div className="self-stretch h-[22px] flex flex-row items-start justify-start pt-0 px-0 pb-4 box-border max-w-full">
          <div className="self-stretch flex-1 rounded-10xs bg-gray-1200 flex flex-row items-start justify-start max-w-full">
            <div className="self-stretch w-[667.5px] relative rounded-10xs bg-wwwtripadvisorcom-black max-w-full" />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[389.2px] flex flex-col items-end justify-start gap-4 max-w-full">
            <div className="self-stretch relative leading-[34px] font-extrabold mq450:text-xl mq450:leading-[27px]">
              Tell us what you’re interested in
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5 text-base-6 text-gray-400">
              <div className="w-[149.6px] relative leading-[22px] flex items-center justify-center shrink-0">
                Select all that apply.
              </div>
            </div>
          </div>
        </div>
        <div className="w-[861.8px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-smi-9">
          <div className="w-[691.8px] flex flex-row items-start justify-center gap-[1.6px] max-w-full mq700:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[185px] text-smi-5 mq700:flex-1">
              <div className="flex flex-row items-start justify-start gap-4">
                <div className="rounded-xl flex flex-row items-start justify-start">
                  <div className="rounded-xl bg-white border-gainsboro-200 border-[1px] border-solid flex flex-row items-start justify-start pt-0 pb-[7px] pl-0 pr-2.5 gap-[11.8px]">
                    <div className="h-px w-px relative rounded-10xs-5 bg-white border-gray-300 border-[1px] border-solid box-border overflow-hidden shrink-0 z-[1]" />
                    <div className="flex flex-col items-start justify-start pt-[8.8px] px-0 pb-0">
                      <b className="relative leading-[17px]">
                        Must-see Attractions
                      </b>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl flex flex-row items-start justify-start text-sm-5">
                  <div className="rounded-xl bg-white border-gainsboro-200 border-[1px] border-solid flex flex-row items-start justify-start pt-0 pb-[7px] pl-0 pr-2.5 gap-[11.8px]">
                    <div className="h-px w-px relative rounded-10xs-5 bg-white border-gray-300 border-[1px] border-solid box-border overflow-hidden shrink-0 z-[1]" />
                    <div className="flex flex-col items-start justify-start pt-[8.8px] px-0 pb-0">
                      <b className="relative leading-[17px] inline-block min-w-[73px]">
                        Great Food
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-4 text-smi">
                <div className="rounded-xl flex flex-row items-start justify-start shrink-0">
                  <div className="rounded-xl bg-white border-gainsboro-200 border-[1px] border-solid flex flex-col items-start justify-start pt-0 px-0 pb-[7px] gap-[7.8px]">
                    <div className="w-px h-px relative rounded-10xs-5 bg-white border-gray-300 border-[1px] border-solid box-border overflow-hidden shrink-0 z-[1]" />
                    <div className="flex flex-row items-start justify-start py-0 pl-3 pr-[13px]">
                      <b className="relative leading-[17px]">
                        Ethiopian Coffee Culture
                      </b>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl flex flex-row items-start justify-start shrink-0">
                  <div className="rounded-xl bg-white border-gainsboro-200 border-[1px] border-solid flex flex-col items-start justify-start pt-0 px-0 pb-[7px] gap-[7.8px]">
                    <div className="w-px h-px relative rounded-10xs-5 bg-white border-gray-300 border-[1px] border-solid box-border overflow-hidden shrink-0 z-[1]" />
                    <div className="flex flex-row items-start justify-start py-0 pl-3 pr-[13px]">
                      <b className="relative leading-[17px] inline-block min-w-[60.3px]">
                        Outdoors
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[259.7px] flex flex-row items-start justify-start gap-4">
                <button className="cursor-pointer [border:none] pt-0 px-0 pb-[3px] bg-[transparent] w-[116.9px] rounded-xl flex flex-row items-start justify-start box-border shrink-0">
                  <div className="flex-1 rounded-xl bg-white border-gainsboro-200 border-[1px] border-solid flex flex-row items-start justify-start pt-0 pb-[7px] pl-0 pr-2.5 gap-[11.8px]">
                    <div className="h-px w-px relative rounded-10xs-5 bg-white border-gray-300 border-[1px] border-solid box-border overflow-hidden shrink-0 z-[1]" />
                    <div className="flex flex-col items-start justify-start pt-[8.8px] px-0 pb-0">
                      <b className="relative text-smi-8 leading-[17px] inline-block font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left min-w-[91.5px]">{`Arts & Theatre`}</b>
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 rounded-xl flex flex-row items-start justify-start shrink-0">
                  <div className="flex-1 rounded-xl bg-white border-gainsboro-200 border-[1px] border-solid flex flex-row items-start justify-start pt-0 pb-[7px] pl-0 pr-2.5 gap-[11.8px]">
                    <div className="h-px w-px relative rounded-10xs-5 bg-white border-gray-300 border-[1px] border-solid box-border overflow-hidden shrink-0 z-[1]" />
                    <button className="cursor-pointer [border:none] pt-[8.8px] px-0 pb-0 bg-[transparent] flex flex-col items-start justify-start">
                      <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-end justify-start gap-1">
                        <img
                          className="h-5 w-5 relative min-h-[20px] shrink-0"
                          alt=""
                          src="/svg2.svg"
                        />
                        <b className="relative text-smi-8 leading-[17px] inline-block font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left min-w-[77.4px] shrink-0">
                          Add interest
                        </b>
                      </button>
                    </button>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex flex-col items-end justify-start py-0 pl-0 pr-2 gap-4">
              <div className="flex flex-row items-start justify-end py-0 pl-px pr-[5px]">
                <div className="rounded-xl flex flex-row items-start justify-start">
                  <div className="rounded-xl bg-white border-gainsboro-200 border-[1px] border-solid flex flex-row items-start justify-start pt-0 pb-[7px] pl-0 pr-[11px] gap-[11.8px]">
                    <div className="h-px w-px relative rounded-10xs-5 bg-white border-gray-300 border-[1px] border-solid box-border overflow-hidden shrink-0 z-[1]" />
                    <div className="flex flex-col items-start justify-start pt-[8.8px] px-0 pb-0">
                      <b className="relative leading-[17px] inline-block min-w-[85.1px]">
                        Hidden Gems
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl flex flex-row items-start justify-start text-smi-8">
                <div className="rounded-xl bg-white border-gainsboro-200 border-[1px] border-solid flex flex-row items-start justify-start pt-0 pb-[7px] pl-0 pr-[11px] gap-[11.8px]">
                  <div className="h-px w-px relative rounded-10xs-5 bg-white border-gray-300 border-[1px] border-solid box-border overflow-hidden shrink-0 z-[1]" />
                  <div className="flex flex-col items-start justify-start pt-[8.8px] px-0 pb-0">
                    <b className="relative leading-[17px] inline-block min-w-[76.2px]">{`Wine & Beer`}</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[182px] mq700:flex-1">
              <div className="flex flex-row items-start justify-start gap-[16.1px]">
                <div className="rounded-xl flex flex-row items-start justify-start shrink-0">
                  <div className="rounded-xl bg-white border-gainsboro-200 border-[1px] border-solid flex flex-row items-start justify-start pt-0 pb-[7px] pl-0 pr-[11px] gap-[11.8px]">
                    <div className="h-px w-px relative rounded-10xs-5 bg-white border-gray-300 border-[1px] border-solid box-border overflow-hidden shrink-0 z-[1]" />
                    <div className="flex flex-col items-start justify-start pt-[8.8px] px-0 pb-0">
                      <b className="relative leading-[17px]">
                        Historical Landmarks
                      </b>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl flex flex-row items-start justify-start shrink-0 text-smi-8">
                  <div className="rounded-xl bg-white border-gainsboro-200 border-[1px] border-solid flex flex-row items-start justify-start pt-0 pb-[7px] pl-0 pr-[11px] gap-[11.8px]">
                    <div className="h-px w-px relative rounded-10xs-5 bg-white border-gray-300 border-[1px] border-solid box-border overflow-hidden shrink-0 z-[1]" />
                    <div className="flex flex-col items-start justify-start pt-[8.8px] px-0 pb-0">
                      <b className="relative leading-[17px] inline-block min-w-[79px]">
                        Art Galleries
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-[5px]">
                <div className="flex flex-row items-start justify-start gap-4">
                  <div className="w-[72.6px] rounded-xl flex flex-row items-start justify-start">
                    <div className="flex-1 rounded-xl bg-white border-gainsboro-200 border-[1px] border-solid flex flex-row items-start justify-start pt-0 pb-[7px] pl-0 pr-[11px] gap-[11.8px]">
                      <div className="h-px w-px relative rounded-10xs-5 bg-white border-gray-300 border-[1px] border-solid box-border overflow-hidden shrink-0 z-[1]" />
                      <div className="flex flex-col items-start justify-start pt-[8.8px] px-0 pb-0">
                        <b className="relative leading-[17px] inline-block min-w-[47.2px]">
                          Culture
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl flex flex-row items-start justify-start text-smi-8">
                    <div className="rounded-xl bg-white border-gainsboro-200 border-[1px] border-solid flex flex-row items-start justify-start pt-0 pb-[7px] pl-0 pr-[11px] gap-[11.8px]">
                      <div className="h-px w-px relative rounded-10xs-5 bg-white border-gray-300 border-[1px] border-solid box-border overflow-hidden shrink-0 z-[1]" />
                      <div className="flex flex-col items-start justify-start pt-[8.8px] px-0 pb-0">
                        <b className="relative leading-[17px]">
                          Adventure and Sports
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[891px] flex flex-row items-start justify-center py-0 pl-0 pr-px box-border max-w-full text-mini-9 text-darkslategray-200">
        <div className="w-[720px] flex flex-row items-start justify-between gap-5 max-w-full mq450:flex-wrap">
          <div className="w-[36.2px] flex flex-col items-start justify-start pt-[14.5px] px-0 pb-0 box-border">
            <b className="self-stretch relative [text-decoration:underline] leading-[19px] inline-block min-w-[36.2px]">
              Back
            </b>
          </div>
          <button
            className="cursor-pointer [border:none] pt-[13.6px] pb-[14.4px] pl-6 pr-[23px] bg-wwwtripadvisorcom-black rounded-3xl flex flex-row items-start justify-start hover:bg-darkslategray-200"
            onClick={onButtonClick}
          >
            <b className="relative text-mini-3 leading-[20px] inline-block font-wwwtripadvisorcom-inter-black-463 text-white text-center min-w-[50px]">
              Submit
            </b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
