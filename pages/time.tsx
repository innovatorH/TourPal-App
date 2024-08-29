import { useCallback } from "react";
import { useRouter } from "next/router";

const Time = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-center pt-[81px] px-5 pb-20 box-border leading-[normal] tracking-[normal]">
      <main className="w-[1120px] bg-white flex flex-col items-end justify-start pt-[53px] pb-9 pl-[108px] pr-32 box-border gap-[53px] max-w-full text-center text-mini-9 text-darkslategray-200 font-wwwtripadvisorcom-inter-black-463 mq450:pt-[22px] mq450:pb-5 mq450:box-border mq750:gap-[26px] mq750:pl-[27px] mq750:pr-8 mq750:box-border mq1025:pt-[34px] mq1025:pb-[23px] mq1025:box-border mq1125:pl-[54px] mq1125:pr-16 mq1125:box-border">
        <div className="w-[1120px] h-[768px] relative bg-white hidden max-w-full" />
        <section className="self-stretch flex flex-col items-end justify-start gap-16 text-center text-6xl-4 text-wwwtripadvisorcom-black font-wwwtripadvisorcom-inter-black-463 mq450:gap-4 mq1025:gap-8">
          <div className="self-stretch rounded-10xs bg-gray-1200 flex flex-row items-start justify-start z-[1]">
            <div className="h-1.5 w-[221px] relative rounded-10xs bg-wwwtripadvisorcom-black" />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5">
            <div className="w-[265px] flex flex-col items-start justify-start gap-4">
              <div className="relative leading-[34px] font-extrabold z-[1] mq450:text-xl mq450:leading-[27px]">
                When are you going?
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[3px] pr-[5px] text-[15.5px] text-gray-400">
                <div className="flex-1 relative leading-[22px] z-[1]">
                  Choose a date range, up to 7 days.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-8 pl-1.5 pr-0 box-border max-w-full text-center text-sm-8 text-wwwtripadvisorcom-black font-wwwtripadvisorcom-inter-black-463">
          <div className="w-[720px] flex flex-col items-start justify-start gap-11 max-w-full mq750:gap-[22px]">
            <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[22px] max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[16.6px] min-w-[225px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[6.2px]">
                  <div className="w-[217.6px] flex flex-row items-start justify-between shrink-0 gap-5">
                    <img
                      className="h-10 w-10 relative rounded-xl z-[1]"
                      alt=""
                      src="/button--previous-month.svg"
                    />
                    <div className="flex flex-col items-start justify-start pt-[10.4px] px-0 pb-0">
                      <b className="relative leading-[19.2px] inline-block min-w-[89px] z-[1]">
                        August 2024
                      </b>
                    </div>
                  </div>
                  <div className="self-stretch bg-white border-gainsboro-200 border-b-[1px] border-solid flex flex-row items-start justify-between pt-[9.6px] px-[18px] pb-[5px] shrink-0 gap-5 z-[1] text-sm mq450:flex-wrap mq450:justify-center">
                    <div className="relative leading-[17px] inline-block min-w-[9px] mq450:w-full mq450:h-[9px]">
                      S
                    </div>
                    <div className="relative leading-[17px] inline-block min-w-[13px] mq450:w-full mq450:h-[13px]">
                      M
                    </div>
                    <div className="relative leading-[17px] inline-block min-w-[10px] mq450:w-full mq450:h-2.5">
                      T
                    </div>
                    <div className="relative text-sm-5 leading-[17px] inline-block min-w-[14px] mq450:w-full mq450:h-3.5">
                      W
                    </div>
                    <div className="relative leading-[17px] inline-block min-w-[10px] mq450:w-full mq450:h-2.5">
                      T
                    </div>
                    <div className="relative leading-[16.8px] inline-block min-w-[9.9px] mq450:w-full mq450:h-[9.9px]">
                      F
                    </div>
                    <div className="relative leading-[16.8px] inline-block min-w-[10.1px] mq450:w-full mq450:h-[10.1px]">
                      S
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-2 z-[1] text-sm text-gray-400">
                  <div className="self-stretch flex flex-row items-start justify-between pt-[9px] pb-1.5 pl-[13px] pr-[18px] gap-5 text-[transparent] mq450:flex-wrap">
                    <div className="w-[18px] relative flex items-center justify-center shrink-0">
                      28
                    </div>
                    <div className="w-[18px] relative flex items-center justify-center shrink-0">
                      29
                    </div>
                    <div className="w-[18px] relative flex items-center justify-center shrink-0">
                      30
                    </div>
                    <div className="w-[17px] relative flex items-center justify-center shrink-0">
                      31
                    </div>
                    <div className="w-[12.8px] relative text-gray-400 flex items-center justify-center shrink-0 mq450:w-full mq450:h-[12.8px]">
                      1
                    </div>
                    <div className="w-[17px] relative text-gray-400 flex items-center justify-center shrink-0 mq450:w-full">
                      2
                    </div>
                    <div className="w-[17px] relative text-gray-400 flex items-center justify-center shrink-0 mq450:w-full">
                      3
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between pt-[9px] pb-1.5 pl-[17px] pr-3.5 gap-5 mq450:flex-wrap">
                    <div className="relative inline-block min-w-[10px] mq450:w-full mq450:h-2.5">
                      4
                    </div>
                    <div className="relative inline-block min-w-[9px] mq450:w-full mq450:h-[9px]">
                      5
                    </div>
                    <div className="relative inline-block min-w-[9px] mq450:w-full mq450:h-[9px]">
                      6
                    </div>
                    <div className="relative inline-block min-w-[8.6px] mq450:w-full mq450:h-[8.6px]">
                      7
                    </div>
                    <div className="relative inline-block min-w-[9px] mq450:w-full mq450:h-[9px]">
                      8
                    </div>
                    <div className="relative inline-block min-w-[9px] mq450:w-full mq450:h-[9px]">
                      9
                    </div>
                    <div className="relative text-xs-7 inline-block min-w-[13px] mq450:w-full mq450:h-[13px]">
                      10
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between pt-[9px] pb-1.5 pl-[13px] pr-3.5 gap-5 mq450:flex-wrap">
                    <div className="w-[17px] relative flex items-center justify-center shrink-0 mq450:w-full">
                      11
                    </div>
                    <div className="relative inline-block min-w-[17px] mq450:w-full">
                      12
                    </div>
                    <div className="relative inline-block min-w-[17px] mq450:w-full">
                      13
                    </div>
                    <div className="relative inline-block min-w-[17px] mq450:w-full">
                      14
                    </div>
                    <div className="relative inline-block min-w-[17px] mq450:w-full">
                      15
                    </div>
                    <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[17px] mq450:w-full">
                      16
                    </a>
                    <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[17px] mq450:w-full">
                      17
                    </a>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between pt-[9px] px-[13px] pb-1.5 gap-5 text-wwwtripadvisorcom-black mq450:flex-wrap">
                    <div className="relative text-gray-400 inline-block min-w-[17px] mq450:w-full">
                      18
                    </div>
                    <div className="relative text-gray-400 inline-block min-w-[17px] mq450:w-full">
                      19
                    </div>
                    <div className="relative text-sm-8 text-gray-400 inline-block min-w-[18px] mq450:w-full mq450:h-[18px]">
                      20
                    </div>
                    <div className="relative inline-block min-w-[17px] mq450:w-full">
                      21
                    </div>
                    <div className="relative inline-block min-w-[18px] mq450:w-full mq450:h-[18px]">
                      22
                    </div>
                    <div className="relative text-sm-7 inline-block min-w-[17px] mq450:w-full mq450:h-[17px]">
                      23
                    </div>
                    <div className="relative text-sm-8 inline-block min-w-[18px] mq450:w-full mq450:h-[18px]">
                      24
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between pt-[9px] pb-1.5 pl-[13px] pr-3.5 gap-5 text-wwwtripadvisorcom-black mq450:flex-wrap">
                    <div className="relative inline-block min-w-[17px] mq450:w-full">
                      25
                    </div>
                    <div className="relative text-sm-8 inline-block min-w-[17px] mq450:w-full mq450:h-[17px]">
                      26
                    </div>
                    <div className="relative inline-block min-w-[17px] mq450:w-full">
                      27
                    </div>
                    <div className="relative text-sm-9 inline-block min-w-[18px] mq450:w-full mq450:h-[18px]">
                      28
                    </div>
                    <div className="relative text-sm-8 inline-block min-w-[17px] mq450:w-full mq450:h-[17px]">
                      29
                    </div>
                    <div className="relative text-sm-5 inline-block min-w-[17px] mq450:w-full mq450:h-[17px]">
                      30
                    </div>
                    <div className="relative inline-block min-w-[17px] mq450:w-full">
                      31
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[16.6px] min-w-[229px] max-w-full text-mini-3">
                <div className="self-stretch flex flex-col items-end justify-start gap-[6.2px] max-w-full">
                  <div className="w-[237.9px] flex flex-row items-end justify-between shrink-0 gap-5">
                    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[9.6px]">
                      <b className="relative leading-[20px] inline-block min-w-[118px] z-[1]">
                        September 2024
                      </b>
                    </div>
                    <img
                      className="h-10 w-10 relative rounded-xl z-[1]"
                      alt=""
                      src="/button--next-month.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-1.5 box-border max-w-full text-sm">
                    <div className="flex-1 bg-white border-gainsboro-200 border-b-[1px] border-solid box-border flex flex-row items-start justify-between pt-[9.6px] px-[18px] pb-[5px] shrink-0 max-w-full gap-5 z-[1] mq450:flex-wrap mq450:justify-center">
                      <div className="relative leading-[17px] inline-block min-w-[9px] mq450:w-full mq450:h-[9px]">
                        S
                      </div>
                      <div className="relative leading-[17px] inline-block min-w-[13px] mq450:w-full mq450:h-[13px]">
                        M
                      </div>
                      <div className="relative leading-[17px] inline-block min-w-[10px] mq450:w-full mq450:h-2.5">
                        T
                      </div>
                      <div className="relative text-sm-5 leading-[17px] inline-block min-w-[14px] mq450:w-full mq450:h-3.5">
                        W
                      </div>
                      <div className="relative leading-[17px] inline-block min-w-[10px] mq450:w-full mq450:h-2.5">
                        T
                      </div>
                      <div className="relative leading-[16.8px] inline-block min-w-[9.9px] mq450:w-full mq450:h-[9.9px]">
                        F
                      </div>
                      <div className="relative leading-[16.8px] inline-block min-w-[10.1px] mq450:w-full mq450:h-[10.1px]">
                        S
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-2 z-[1] text-sm">
                  <div className="self-stretch flex flex-row items-start justify-between pt-[9px] pb-1.5 pl-[17px] pr-[19px] gap-5 mq450:flex-wrap">
                    <div className="relative inline-block min-w-[8.6px] mq450:w-full mq450:h-[8.6px]">
                      1
                    </div>
                    <div className="relative inline-block min-w-[9px] mq450:w-full mq450:h-[9px]">
                      2
                    </div>
                    <div className="relative inline-block min-w-[9px] mq450:w-full mq450:h-[9px]">
                      3
                    </div>
                    <div className="relative inline-block min-w-[10px] mq450:w-full mq450:h-2.5">
                      4
                    </div>
                    <div className="relative inline-block min-w-[9px] mq450:w-full mq450:h-[9px]">
                      5
                    </div>
                    <div className="relative inline-block min-w-[9px] mq450:w-full mq450:h-[9px]">
                      6
                    </div>
                    <div className="relative inline-block min-w-[8.6px] mq450:w-full mq450:h-[8.6px]">
                      7
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between pt-[9px] pb-1.5 pl-[17px] pr-3.5 gap-5 mq450:flex-wrap">
                    <div className="relative inline-block min-w-[9px] mq450:w-full mq450:h-[9px]">
                      8
                    </div>
                    <div className="relative inline-block min-w-[9px] mq450:w-full mq450:h-[9px]">
                      9
                    </div>
                    <div className="relative text-xs-7 inline-block min-w-[13px] mq450:w-full mq450:h-[13px]">
                      10
                    </div>
                    <div className="relative text-[9.2px] inline-block min-w-[8.6px] mq450:w-full mq450:h-[8.6px]">
                      11
                    </div>
                    <div className="relative text-[8px] inline-block min-w-[9px]">
                      12
                    </div>
                    <div className="relative text-5xs-8 inline-block min-w-[8.6px]">
                      13
                    </div>
                    <div className="w-[9px] relative text-5xs-8 flex items-center justify-center shrink-0">
                      14
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between pt-[9px] pb-1.5 pl-[13px] pr-3.5 gap-5 mq450:flex-wrap">
                    <div className="relative inline-block min-w-[17px] mq450:w-full">
                      15
                    </div>
                    <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[17px] mq450:w-full">
                      16
                    </a>
                    <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[17px] mq450:w-full">
                      17
                    </a>
                    <div className="relative inline-block min-w-[17px] mq450:w-full">
                      18
                    </div>
                    <div className="relative inline-block min-w-[17px] mq450:w-full">
                      19
                    </div>
                    <div className="relative text-sm-8 inline-block min-w-[18px] mq450:w-full mq450:h-[18px]">
                      20
                    </div>
                    <div className="relative inline-block min-w-[17px] mq450:w-full">
                      21
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between pt-[9px] px-[13px] pb-1.5 gap-5 mq450:flex-wrap">
                    <div className="relative inline-block min-w-[18px] mq450:w-full mq450:h-[18px]">
                      22
                    </div>
                    <div className="relative text-sm-7 inline-block min-w-[17px] mq450:w-full mq450:h-[17px]">
                      23
                    </div>
                    <div className="relative text-sm-8 inline-block min-w-[18px] mq450:w-full mq450:h-[18px]">
                      24
                    </div>
                    <div className="relative inline-block min-w-[17px] mq450:w-full">
                      25
                    </div>
                    <div className="relative text-sm-8 inline-block min-w-[17px] mq450:w-full mq450:h-[17px]">
                      26
                    </div>
                    <div className="relative inline-block min-w-[17px] mq450:w-full">
                      27
                    </div>
                    <div className="relative text-sm-9 inline-block min-w-[18px] mq450:w-full mq450:h-[18px]">
                      28
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between pt-[9px] pb-1.5 pl-[13px] pr-[18px] gap-5 text-[transparent] mq450:flex-wrap">
                    <div className="relative text-sm-8 text-wwwtripadvisorcom-black inline-block min-w-[17px] mq450:w-full mq450:h-[17px]">
                      29
                    </div>
                    <div className="relative text-sm-5 text-wwwtripadvisorcom-black inline-block min-w-[17px] mq450:w-full mq450:h-[17px]">
                      30
                    </div>
                    <div className="w-[12.8px] relative flex items-center justify-center shrink-0">
                      1
                    </div>
                    <div className="w-[17px] relative flex items-center justify-center shrink-0">
                      2
                    </div>
                    <div className="w-[17px] relative flex items-center justify-center shrink-0">
                      3
                    </div>
                    <div className="w-[17px] relative flex items-center justify-center shrink-0">
                      4
                    </div>
                    <div className="w-[17px] relative flex items-center justify-center shrink-0">
                      5
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[25px] text-mini-5 text-darkslategray-200">
              <b className="relative [text-decoration:underline] leading-[19px] z-[1]">
                I don't know my dates yet
              </b>
            </div>
          </div>
        </section>
        <div className="w-[868px] flex flex-row items-start justify-end py-0 px-[74px] box-border max-w-full mq1025:pl-[37px] mq1025:pr-[37px] mq1025:box-border">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq450:flex-wrap mq450:justify-center">
            <div className="w-[36.2px] flex flex-col items-start justify-start pt-[14.5px] px-0 pb-0 box-border">
              <b className="self-stretch relative [text-decoration:underline] leading-[19px] inline-block min-w-[36.2px] shrink-0 z-[1]">
                Back
              </b>
            </div>
            <button
              className="cursor-pointer [border:none] py-3.5 pl-6 pr-[22px] bg-wwwtripadvisorcom-black rounded-3xl flex flex-row items-start justify-start shrink-0 z-[1] hover:bg-darkslategray-200"
              onClick={onButtonClick}
            >
              <b className="relative text-mini-8 leading-[20px] inline-block font-wwwtripadvisorcom-inter-black-463 text-white text-center min-w-[35px]">
                Next
              </b>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Time;
