import { useCallback } from "react";
import FrameComponent14 from "../components/frame-component14";
import { useRouter } from "next/router";
import Footer2 from "../components/footer2";

const Achievements = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/user-profile");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start py-0 pl-0 pr-[9px] box-border leading-[normal] tracking-[normal]">
      <div className="h-[3206px] flex-1 [background:linear-gradient(#fff,_#fff),_#fff] overflow-y-auto flex flex-col items-start justify-start pt-0 pb-[3082.2px] px-0 box-border relative gap-[9.2px] max-w-full mq800:pb-[550px] mq800:box-border mq1300:h-auto mq1300:pb-[846px] mq1300:box-border">
        <div className="w-full h-[2658px] absolute !m-[0] top-[0px] right-[0px] left-[0px] shrink-0">
          <img
            className="absolute top-[102px] left-[0px] w-[1519px] h-[2556px]"
            alt=""
            src="/main.svg"
          />
        </div>
        <FrameComponent14 />
        <main className="self-stretch bg-whitesmoke-200 overflow-y-auto shrink-0 flex flex-col items-end justify-start pt-12 px-0 pb-[19.4px] box-border relative gap-[122px] max-w-full z-[1] text-left text-4xl-9 text-text-clr font-poppins mq450:gap-[30px] mq800:gap-[61px] mq1300:pt-5 mq1300:pb-5 mq1300:box-border">
          <section className="self-stretch flex flex-col items-end justify-start max-w-full text-left text-[36.6px] text-wwwtripadvisorcom-black font-wwwtripadvisorcom-inter-black-463">
            <div className="w-[1507.6px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <div className="w-[1298.8px] flex flex-col items-end justify-start gap-[75px] max-w-full mq450:gap-[19px] mq800:gap-[37px]">
                <div className="w-[1286.4px] flex flex-col items-start justify-start gap-4 max-w-full">
                  <div className="relative leading-[50px] font-extrabold inline-block max-w-full mq450:text-3xl mq450:leading-[30px] mq800:text-10xl mq800:leading-[40px]">
                    Your Achievements
                  </div>
                  <div className="self-stretch relative text-[30.5px] mq450:text-lg mq800:text-5xl">
                    Earn badges as you write reviews, share photos, and guide
                    travelers—it all starts here.
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-2.5 box-border max-w-full text-[27.5px]">
                  <div className="flex-1 flex flex-col items-start justify-start max-w-full">
                    <div className="self-stretch rounded-2xl bg-white flex flex-col items-start justify-start pt-[52px] px-[71px] pb-11 box-border gap-6 max-w-full mq800:pt-[34px] mq800:pb-[29px] mq800:box-border mq1300:pl-[35px] mq1300:pr-[35px] mq1300:box-border">
                      <div className="flex flex-col items-start justify-start gap-2 max-w-full">
                        <div className="relative leading-[38px] font-extrabold mq450:text-3xl mq450:leading-[30px]">
                          Your milestones
                        </div>
                        <b className="relative text-base-2 leading-[22px]">
                          Unlock new milestones and (bonus!) help travelers
                          along the way.
                        </b>
                      </div>
                      <div className="w-[1131.8px] flex flex-row items-start justify-start flex-wrap content-start gap-4 max-w-full text-base-6">
                        <div className="flex-1 rounded-lg border-gainsboro-200 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[23px] pl-[23px] pr-[22px] gap-8 min-w-[275px] max-w-full mq450:gap-4">
                          <div className="w-[210.5px] flex flex-row items-start justify-start py-0 px-px box-border">
                            <div className="flex-1 flex flex-row items-end justify-start gap-6 mq450:flex-wrap">
                              <img
                                className="h-[92px] w-[92px] relative rounded-27xl"
                                loading="lazy"
                                alt=""
                                src="/background3.svg"
                              />
                              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-3 box-border min-w-[60px]">
                                <div className="self-stretch flex flex-col items-start justify-start gap-2">
                                  <b className="relative leading-[22px] inline-block min-w-[64.3px]">
                                    Reviews
                                  </b>
                                  <div className="relative text-6xl-4 leading-[34px] font-extrabold inline-block min-w-[92px] mq450:text-xl mq450:leading-[27px]">
                                    Locked
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-start gap-2 text-xs text-gray-400">
                            <div className="self-stretch rounded-2xl bg-gray-1200 overflow-x-auto flex flex-row items-start justify-start py-0 pl-5 pr-0 gap-5">
                              <div className="h-4 w-px relative bg-white shrink-0" />
                              <div className="h-4 w-px relative bg-white shrink-0" />
                              <div className="h-4 w-px relative bg-white shrink-0" />
                              <div className="h-4 w-px relative bg-white shrink-0" />
                              <div className="h-4 w-[21px] relative bg-white shrink-0" />
                              <div className="h-4 w-[29px] relative bg-white shrink-0" />
                              <div className="h-4 w-[37px] relative bg-white shrink-0" />
                              <div className="h-4 w-[69px] relative bg-white shrink-0" />
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0.5">
                              <div className="flex-1 flex flex-row items-start justify-between gap-5">
                                <div className="w-[237.4px] flex flex-col items-start justify-start gap-6">
                                  <div className="self-stretch flex flex-col items-start justify-start gap-4">
                                    <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
                                      <div className="flex-1 flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
                                        <div className="w-[86.1px] flex flex-row items-start justify-start gap-[8.4px]">
                                          <div className="relative leading-[14px] text-darkslategray-200 inline-block min-w-[8px]">
                                            0
                                          </div>
                                          <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-[5px]">
                                            <div className="relative leading-[14px] inline-block min-w-[5px]">
                                              1
                                            </div>
                                          </div>
                                          <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-1">
                                            <div className="relative leading-[14px] inline-block min-w-[8px]">
                                              2
                                            </div>
                                          </div>
                                          <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-1">
                                            <div className="relative leading-[14px] inline-block min-w-[8px]">
                                              3
                                            </div>
                                          </div>
                                          <div className="relative leading-[14px] inline-block min-w-[8px]">
                                            5
                                          </div>
                                        </div>
                                        <div className="w-[17.7px] flex flex-col items-start justify-start py-0 pl-0 pr-[5px] box-border text-2xs-7">
                                          <div className="relative leading-[14px] inline-block min-w-[12px]">
                                            10
                                          </div>
                                        </div>
                                        <div className="w-[26px] flex flex-col items-start justify-start py-0 pl-0 pr-2.5 box-border text-xs-3">
                                          <div className="relative leading-[14px] inline-block min-w-[15px]">
                                            20
                                          </div>
                                        </div>
                                        <div className="relative text-xs-4 leading-[14px] inline-block min-w-[14.3px] mq450:w-full mq450:h-[14.3px]">
                                          50
                                        </div>
                                      </div>
                                    </div>
                                    <div className="relative text-mini-9 leading-[22px] text-darkslategray-200">
                                      Write 1 review to unlock
                                    </div>
                                  </div>
                                  <button className="cursor-pointer [border:none] pt-[13.6px] pb-[14.4px] pl-6 pr-[23px] bg-wwwtripadvisorcom-black w-[149.7px] rounded-3xl flex flex-row items-start justify-start box-border whitespace-nowrap hover:bg-darkslategray-200">
                                    <b className="flex-1 relative text-mini-5 leading-[20px] inline-block font-wwwtripadvisorcom-inter-black-463 text-white text-center min-w-[101.9px]">
                                      Write a review
                                    </b>
                                  </button>
                                </div>
                                <div className="relative text-2xs-3 leading-[14px] inline-block min-w-[24.8px]">
                                  100+
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 rounded-lg border-gainsboro-200 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[23px] pl-[23px] pr-[22px] gap-8 min-w-[275px] max-w-full text-base-2 mq450:gap-4">
                          <div className="w-[210.5px] flex flex-row items-start justify-start py-0 px-px box-border">
                            <div className="flex-1 flex flex-row items-end justify-start gap-6 mq450:flex-wrap">
                              <img
                                className="h-[92px] w-[92px] relative rounded-27xl"
                                alt=""
                                src="/background-18.svg"
                              />
                              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-3 box-border min-w-[60px]">
                                <div className="self-stretch flex flex-col items-start justify-start gap-2">
                                  <b className="relative leading-[22px] inline-block min-w-[56.1px]">
                                    Photos
                                  </b>
                                  <div className="relative text-6xl-4 leading-[34px] font-extrabold inline-block min-w-[92px] mq450:text-xl mq450:leading-[27px]">
                                    Locked
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-start gap-2 text-xs text-gray-400">
                            <div className="self-stretch rounded-2xl bg-gray-1200 overflow-x-auto flex flex-row items-start justify-start py-0 pl-5 pr-0 gap-5">
                              <div className="h-4 w-px relative bg-white shrink-0" />
                              <div className="h-4 w-px relative bg-white shrink-0" />
                              <div className="h-4 w-px relative bg-white shrink-0" />
                              <div className="h-4 w-px relative bg-white shrink-0" />
                              <div className="h-4 w-[21px] relative bg-white shrink-0" />
                              <div className="h-4 w-[29px] relative bg-white shrink-0" />
                              <div className="h-4 w-[37px] relative bg-white shrink-0" />
                              <div className="h-4 w-[69px] relative bg-white shrink-0" />
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0.5">
                              <div className="flex-1 flex flex-row items-start justify-between gap-5">
                                <div className="w-[237.4px] flex flex-row items-start justify-start gap-[41.7px] shrink-0">
                                  <div className="flex-1 flex flex-col items-start justify-start gap-6 shrink-0">
                                    <div className="self-stretch flex flex-col items-start justify-start gap-4">
                                      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
                                        <div className="flex-1 flex flex-row items-start justify-between gap-5">
                                          <div className="w-[86.1px] flex flex-row items-start justify-start gap-[8.4px]">
                                            <div className="relative leading-[14px] text-darkslategray-200 inline-block min-w-[8px]">
                                              0
                                            </div>
                                            <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-[5px]">
                                              <div className="relative leading-[14px] inline-block min-w-[5px]">
                                                1
                                              </div>
                                            </div>
                                            <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-1">
                                              <div className="relative leading-[14px] inline-block min-w-[8px]">
                                                2
                                              </div>
                                            </div>
                                            <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-1">
                                              <div className="relative leading-[14px] inline-block min-w-[8px]">
                                                3
                                              </div>
                                            </div>
                                            <div className="relative leading-[14px] inline-block min-w-[8px]">
                                              5
                                            </div>
                                          </div>
                                          <div className="w-[17.7px] flex flex-col items-start justify-start py-0 pl-0 pr-[5px] box-border text-2xs-7">
                                            <div className="relative leading-[14px] inline-block min-w-[12px]">
                                              10
                                            </div>
                                          </div>
                                          <div className="relative text-xs-3 leading-[14px] inline-block min-w-[15px]">
                                            20
                                          </div>
                                        </div>
                                      </div>
                                      <div className="relative text-base-4 leading-[22px] text-darkslategray-200">
                                        Upload 1 photo to unlock
                                      </div>
                                    </div>
                                    <button className="cursor-pointer [border:none] pt-[13.6px] pb-[14.4px] pl-6 pr-[23px] bg-wwwtripadvisorcom-black w-[161px] rounded-3xl flex flex-row items-start justify-start box-border whitespace-nowrap hover:bg-darkslategray-200">
                                      <b className="flex-1 relative text-base-3 leading-[20px] inline-block font-wwwtripadvisorcom-inter-black-463 text-white text-center min-w-[113.2px]">
                                        Upload a photo
                                      </b>
                                    </button>
                                  </div>
                                  <div className="relative text-xs-4 leading-[14px] inline-block min-w-[14.3px] shrink-0">
                                    50
                                  </div>
                                </div>
                                <div className="relative text-2xs-3 leading-[14px] inline-block min-w-[24.8px] shrink-0">
                                  100+
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 rounded-lg border-gainsboro-200 border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[23px] pb-9 pl-[23px] pr-[22px] gap-10 min-w-[275px] max-w-full text-[15.5px] mq450:gap-5">
                          <div className="self-stretch flex flex-col items-start justify-start gap-8 mq450:gap-4">
                            <div className="w-[210.5px] flex flex-row items-start justify-start py-0 px-px box-border">
                              <div className="flex-1 flex flex-row items-end justify-start gap-6 mq450:flex-wrap">
                                <img
                                  className="h-[92px] w-[92px] relative rounded-27xl"
                                  alt=""
                                  src="/background-2.svg"
                                />
                                <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-3 box-border min-w-[60px]">
                                  <div className="self-stretch flex flex-col items-start justify-start gap-2">
                                    <b className="relative leading-[22px] inline-block min-w-[47px]">
                                      Views
                                    </b>
                                    <div className="relative text-6xl-4 leading-[34px] font-extrabold inline-block min-w-[92px] mq450:text-xl mq450:leading-[27px]">
                                      Locked
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="self-stretch flex flex-col items-end justify-start gap-2 text-xs-4 text-gray-400">
                              <div className="self-stretch rounded-2xl bg-gray-1200 overflow-x-auto flex flex-row items-start justify-between py-0 pl-8 pr-0 gap-5">
                                <div className="h-4 w-px relative bg-white shrink-0" />
                                <div className="h-4 w-px relative bg-white shrink-0" />
                                <div className="h-4 w-px relative bg-white shrink-0" />
                                <div className="h-4 w-px relative bg-white shrink-0" />
                                <div className="h-4 w-[3px] relative bg-white shrink-0" />
                                <div className="h-4 w-2.5 relative bg-white shrink-0" />
                                <div className="h-4 w-[15px] relative bg-white shrink-0" />
                                <div className="h-4 w-8 relative bg-white shrink-0" />
                              </div>
                              <div className="self-stretch flex flex-col items-start justify-start gap-4">
                                <div className="self-stretch flex flex-row items-start justify-start gap-[5.9px] mq450:flex-wrap">
                                  <div className="w-[16.5px] flex flex-col items-start justify-start py-0 pl-0 pr-2 box-border text-xs text-darkslategray-200">
                                    <div className="relative leading-[14px] inline-block min-w-[8px]">
                                      0
                                    </div>
                                  </div>
                                  <div className="w-[25.9px] flex flex-col items-start justify-start py-0 pl-0 pr-1.5 box-border text-[11.1px]">
                                    <div className="relative leading-[14px] inline-block min-w-[19px]">
                                      100
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-start justify-start py-0 pl-0 pr-1.5">
                                    <div className="relative leading-[14px] inline-block min-w-[22px]">
                                      200
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-start justify-start py-0 pl-0 pr-1.5 text-xs-3">
                                    <div className="relative leading-[14px] inline-block min-w-[22px]">
                                      300
                                    </div>
                                  </div>
                                  <div className="w-[24.5px] flex flex-col items-start justify-start py-0 pl-0 pr-0.5 box-border text-xs-6">
                                    <div className="relative leading-[14px] inline-block min-w-[22px]">
                                      500
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-start justify-start py-0 pl-0 pr-0.5">
                                    <div className="relative leading-[14px] inline-block min-w-[30px]">
                                      1,000
                                    </div>
                                  </div>
                                  <div className="flex-[0.803] flex flex-col items-start justify-start py-0 pl-0 pr-2 box-border min-w-[28px] mq450:flex-1">
                                    <div className="relative leading-[14px] inline-block min-w-[32px]">
                                      2,000
                                    </div>
                                  </div>
                                  <div className="relative text-xs-8 leading-[14px] inline-block min-w-[33px]">
                                    5,000
                                  </div>
                                  <div className="flex-1 relative text-2xs-9 leading-[14px] inline-block min-w-[28px]">
                                    10,000+
                                  </div>
                                </div>
                                <div className="relative text-mini-9 leading-[22px] text-darkslategray-200">
                                  Get 100 views to unlock
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-[161.2px] flex flex-row items-start justify-start py-0 px-px box-border text-center text-mini-3 text-darkslategray-200">
                            <b className="flex-1 relative [text-decoration:underline] leading-[19px]">
                              Tips to get more views
                            </b>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch rounded-2xl bg-white flex flex-col items-start justify-start pt-[52px] px-[71px] pb-[76.7px] box-border gap-[50px] max-w-full text-[28.8px] mq800:gap-[25px] mq800:pt-[22px] mq800:pb-8 mq800:box-border mq1300:pt-[34px] mq1300:px-[35px] mq1300:pb-[50px] mq1300:box-border">
                      <div className="flex flex-col items-start justify-start gap-2 max-w-full">
                        <div className="relative leading-[38px] font-extrabold mq450:text-4xl mq450:leading-[30px]">
                          Your badges
                        </div>
                        <b className="relative text-[16.3px] leading-[22px]">
                          Start sharing to earn badges and show off your skills.
                        </b>
                      </div>
                      <div className="self-stretch border-gainsboro-200 border-b-[0.8px] border-solid flex flex-row items-start justify-start pt-0 px-0 pb-[11px] text-5xl-8">
                        <div className="relative leading-[34px] font-extrabold inline-block min-w-[80.2px] mq450:text-xl mq450:leading-[27px]">
                          Hotels
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[52.7px] max-w-full text-center text-mini-8 mq800:gap-[26px]">
                        <div className="w-[720px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
                          <div className="flex-1 flex flex-row items-start justify-start flex-wrap content-start gap-[35.2px] max-w-full mq800:gap-[18px]">
                            <div className="flex-1 flex flex-col items-end justify-start min-w-[142px] max-w-[152px] text-base-1">
                              <div className="self-stretch flex flex-row items-start justify-start p-4">
                                <img
                                  className="h-[120px] w-[120px] relative rounded-41xl object-cover z-[1]"
                                  alt=""
                                  src="/background-36@2x.png"
                                />
                              </div>
                              <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[63px] pr-[62px]">
                                <b className="flex-1 relative leading-[19px] inline-block min-w-[26.1px]">
                                  0/5
                                </b>
                              </div>
                              <div className="self-stretch flex flex-row items-start justify-end py-0 px-[18px] text-[16.6px]">
                                <b className="flex-1 relative leading-[22px] inline-block min-w-[115.9px]">
                                  Hotel Explorer
                                </b>
                              </div>
                              <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0.5 pr-px text-mini-9">
                                <div className="flex-1 relative leading-[19px]">
                                  Write 5 hotel reviews
                                </div>
                              </div>
                            </div>
                            <div className="flex-1 flex flex-col items-end justify-start min-w-[142px] max-w-[152px]">
                              <div className="self-stretch flex flex-row items-start justify-start p-4">
                                <img
                                  className="h-[120px] w-[120px] relative rounded-41xl object-cover z-[1]"
                                  alt=""
                                  src="/background-45@2x.png"
                                />
                              </div>
                              <div className="flex flex-row items-start justify-end py-0 pl-[63px] pr-[62px]">
                                <b className="relative leading-[19px] inline-block min-w-[26px]">
                                  0/3
                                </b>
                              </div>
                              <div className="flex flex-row items-start justify-end py-0 pl-[31px] pr-[30px] text-base-2">
                                <b className="relative leading-[22px] inline-block min-w-[91px] z-[1]">{`B&B Insider`}</b>
                              </div>
                              <div className="flex flex-row items-start justify-end py-0 pl-1.5 pr-1">
                                <div className="relative leading-[19px] z-[2]">{`Write 3 B&B reviews`}</div>
                              </div>
                            </div>
                            <div className="flex-1 flex flex-col items-end justify-start min-w-[142px] max-w-[154px]">
                              <div className="self-stretch flex flex-row items-start justify-end py-0 px-px">
                                <div className="flex-1 flex flex-row items-start justify-start p-4">
                                  <img
                                    className="h-[120px] w-[120px] relative rounded-41xl object-cover z-[1]"
                                    alt=""
                                    src="/background-54@2x.png"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-row items-start justify-end py-0 px-16">
                                <b className="relative leading-[19px] inline-block min-w-[26px] z-[1]">
                                  0/3
                                </b>
                              </div>
                              <div className="self-stretch flex flex-row items-start justify-end py-0 px-[19px] text-[15.9px]">
                                <b className="flex-1 relative leading-[22px] inline-block min-w-[116.3px] z-[2]">
                                  Resort All-Star
                                </b>
                              </div>
                              <div className="self-stretch relative leading-[19px] z-[3]">
                                Write 3 resort reviews
                              </div>
                            </div>
                            <div className="flex-1 flex flex-col items-end justify-start min-w-[140px] max-w-[152px]">
                              <div className="self-stretch flex flex-row items-start justify-start p-4 shrink-0">
                                <img
                                  className="h-[120px] w-[120px] relative rounded-41xl object-cover z-[1]"
                                  alt=""
                                  src="/background-61@2x.png"
                                />
                              </div>
                              <div className="flex flex-row items-start justify-end py-0 pl-[63px] pr-[62px] mt-[-0.2px]">
                                <b className="relative leading-[19px] inline-block min-w-[26px] shrink-0 z-[1]">
                                  0/3
                                </b>
                              </div>
                              <div className="self-stretch flex flex-row items-start justify-end py-0 px-[19px] mt-[-0.2px] text-base">
                                <b className="flex-1 relative leading-[22px] inline-block min-w-[113.7px] shrink-0 z-[2]">
                                  Luxury Seeker
                                </b>
                              </div>
                              <div className="flex flex-row items-start justify-end py-0 px-[7px] mt-[-0.2px] text-mini-9">
                                <div className="relative leading-[19px] shrink-0 z-[3]">
                                  <p className="m-0">Write 3 luxury hotel</p>
                                  <p className="m-0">reviews</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-12 max-w-full mq800:gap-6">
                          <div className="self-stretch border-gainsboro-200 border-b-[0.8px] border-solid flex flex-row items-start justify-start pt-0 px-0 pb-[11px]">
                            <input
                              className="w-[156.1px] [border:none] [outline:none] font-extrabold font-wwwtripadvisorcom-inter-black-463 text-5xl-9 bg-[transparent] h-[34px] relative leading-[34px] text-wwwtripadvisorcom-black text-left flex items-center p-0 mq450:text-xl mq450:leading-[27px]"
                              placeholder="Things to Do"
                              type="text"
                            />
                          </div>
                          <div className="w-[721.9px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
                            <div className="flex-1 flex flex-row items-start justify-start flex-wrap content-start gap-[35.4px] max-w-full mq800:gap-[18px]">
                              <div className="flex-1 flex flex-col items-end justify-start min-w-[140px] max-w-[152px] text-base-1">
                                <div className="self-stretch flex flex-row items-start justify-start p-4 shrink-0">
                                  <img
                                    className="h-[120px] w-[120px] relative rounded-41xl z-[1]"
                                    alt=""
                                    src="/background-71.svg"
                                  />
                                </div>
                                <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[63px] pr-[62px] mt-[-0.2px]">
                                  <b className="flex-1 relative leading-[19px] inline-block min-w-[26.1px] shrink-0 z-[1]">
                                    0/5
                                  </b>
                                </div>
                                <div className="flex flex-row items-start justify-end py-0 pl-[30px] pr-[29px] mt-[-0.2px] text-[16.6px]">
                                  <b className="relative leading-[22px] shrink-0 z-[2]">
                                    <p className="m-0">Experience</p>
                                    <p className="m-0">Explorer</p>
                                  </b>
                                </div>
                                <div className="flex flex-row items-start justify-end py-0 pl-2 pr-1.5 mt-[-0.2px] text-base-4">
                                  <div className="h-[38px] relative leading-[19px] flex items-center shrink-0 z-[3]">
                                    <span>
                                      <p className="m-0">Write 5 experience</p>
                                      <p className="m-0">reviews</p>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-1 flex flex-col items-end justify-start min-w-[140px] max-w-[152px]">
                                <div className="self-stretch flex flex-row items-start justify-start p-4 shrink-0">
                                  <img
                                    className="h-[120px] w-[120px] relative rounded-41xl z-[1]"
                                    alt=""
                                    src="/background-8.svg"
                                  />
                                </div>
                                <div className="flex flex-row items-start justify-end py-0 pl-[63px] pr-[62px] mt-[-0.2px]">
                                  <b className="relative leading-[19px] inline-block min-w-[26px] shrink-0 z-[1]">
                                    0/3
                                  </b>
                                </div>
                                <div className="self-stretch flex flex-row items-start justify-end py-0 px-[25px] mt-[-0.2px] text-base-7">
                                  <b className="flex-1 relative leading-[22px] inline-block min-w-[101.2px] shrink-0 z-[2]">
                                    Beach Lover
                                  </b>
                                </div>
                                <div className="flex flex-row items-start justify-end py-0 px-[25px] mt-[-0.2px] text-base-4">
                                  <div className="relative leading-[19px] shrink-0 z-[3]">
                                    <p className="m-0">Write 3 beach</p>
                                    <p className="m-0">reviews</p>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-1 flex flex-col items-end justify-start min-w-[140px] max-w-[152px]">
                                <div className="self-stretch flex flex-row items-start justify-start p-4 shrink-0">
                                  <img
                                    className="h-[120px] w-[120px] relative rounded-41xl z-[1]"
                                    alt=""
                                    src="/background-9.svg"
                                  />
                                </div>
                                <div className="flex flex-row items-start justify-end py-0 pl-[63px] pr-[62px] mt-[-0.2px]">
                                  <b className="relative leading-[19px] inline-block min-w-[26px] shrink-0 z-[1]">
                                    0/3
                                  </b>
                                </div>
                                <div className="flex flex-row items-start justify-end py-0 pl-[25px] pr-[23px] mt-[-0.2px] text-base-8">
                                  <b className="relative leading-[22px] inline-block min-w-[104px] shrink-0 z-[2]">
                                    Museum Buff
                                  </b>
                                </div>
                                <div className="flex flex-row items-start justify-end py-0 pl-[19px] pr-[17px] mt-[-0.2px]">
                                  <div className="h-[38px] relative leading-[19px] flex items-center shrink-0 z-[3]">
                                    <span>
                                      <p className="m-0">Write 3 museum</p>
                                      <p className="m-0">reviews</p>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-1 flex flex-col items-end justify-start min-w-[144px] max-w-[156px]">
                                <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0.5 pr-px">
                                  <div className="flex-1 flex flex-row items-start justify-start p-4 shrink-0">
                                    <img
                                      className="h-[120px] w-[120px] relative rounded-41xl z-[1]"
                                      alt=""
                                      src="/background-101.svg"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-row items-start justify-end py-0 pl-[65px] pr-16">
                                  <b className="relative leading-[19px] inline-block min-w-[26px] shrink-0 z-[1]">
                                    0/3
                                  </b>
                                </div>
                                <div className="flex flex-row items-start justify-end py-0 pl-[23px] pr-[22px] text-mid">
                                  <h3 className="m-0 relative text-inherit leading-[22px] font-bold font-[inherit] inline-block min-w-[110px] shrink-0 z-[2]">
                                    Nature Guide
                                  </h3>
                                </div>
                                <div className="flex flex-row items-start justify-start pt-0 px-0 pb-0 text-[15.5px]">
                                  <div className="mt-[-0.7px] relative leading-[19px] shrink-0 z-[3]">
                                    <p className="m-0">Write 3 nature or</p>
                                    <p className="m-0">national park reviews</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-12 max-w-full text-left text-5xl-8 mq800:gap-6">
                          <div className="self-stretch border-gainsboro-200 border-b-[0.8px] border-solid flex flex-row items-start justify-start pt-0 px-0 pb-[11px]">
                            <div className="relative leading-[34px] font-extrabold mq450:text-xl mq450:leading-[27px]">
                              Restaurants
                            </div>
                          </div>
                          <div className="w-[908px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full text-center text-mini-8">
                            <div className="flex-1 flex flex-row items-start justify-start flex-wrap content-start gap-9 max-w-full mq450:gap-[18px]">
                              <div className="flex-1 flex flex-col items-end justify-start min-w-[149px] max-w-[152px] text-base-1">
                                <div className="self-stretch flex flex-row items-start justify-start p-4 shrink-0">
                                  <img
                                    className="h-[120px] w-[120px] relative rounded-41xl z-[1]"
                                    alt=""
                                    src="/background-111.svg"
                                  />
                                </div>
                                <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[63px] pr-[62px] mt-[-0.2px]">
                                  <b className="flex-1 relative leading-[19px] inline-block min-w-[26.1px] shrink-0 z-[1]">
                                    0/5
                                  </b>
                                </div>
                                <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[31px] pr-[30px] mt-[-0.2px] text-[16.6px]">
                                  <b className="flex-1 relative leading-[22px] shrink-0 z-[2]">
                                    <p className="m-0">Restaurant</p>
                                    <p className="m-0">Explorer</p>
                                  </b>
                                </div>
                                <div className="self-stretch flex flex-row items-start justify-end py-0 px-2.5 mt-[-0.2px] text-base-4">
                                  <div className="flex-1 relative leading-[19px] shrink-0 z-[3]">
                                    <p className="m-0">Write 5 restaurant</p>
                                    <p className="m-0">reviews</p>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-1 flex flex-col items-end justify-start min-w-[149px] max-w-[152px]">
                                <div className="self-stretch flex flex-row items-start justify-start p-4 shrink-0">
                                  <img
                                    className="h-[120px] w-[120px] relative rounded-41xl z-[1]"
                                    alt=""
                                    src="/background-121.svg"
                                  />
                                </div>
                                <div className="flex flex-row items-start justify-end py-0 pl-[63px] pr-[62px] mt-[-0.2px]">
                                  <b className="relative leading-[19px] inline-block min-w-[26px] shrink-0 z-[1]">
                                    0/3
                                  </b>
                                </div>
                                <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[15px] pr-3.5 mt-[-0.2px] text-[16.3px]">
                                  <b className="flex-1 relative leading-[22px] inline-block min-w-[122.7px] shrink-0 z-[2]">
                                    Fine Dining Fan
                                  </b>
                                </div>
                                <div className="flex flex-row items-start justify-end py-0 px-[11px] mt-[-0.2px] text-mini">
                                  <div className="relative leading-[19px] shrink-0 z-[3]">
                                    <p className="m-0">Write 3 fine dining</p>
                                    <p className="m-0">reviews</p>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-1 flex flex-col items-end justify-start min-w-[149px] max-w-[152px]">
                                <div className="self-stretch flex flex-row items-start justify-start p-4">
                                  <img
                                    className="h-[120px] w-[120px] relative rounded-41xl z-[1]"
                                    alt=""
                                    src="/background-131.svg"
                                  />
                                </div>
                                <div className="flex flex-row items-start justify-end py-0 pl-[63px] pr-[62px]">
                                  <b className="relative leading-[19px] inline-block min-w-[26px] z-[1]">
                                    0/3
                                  </b>
                                </div>
                                <div className="flex flex-row items-start justify-end py-0 pl-4 pr-[15px] text-mid-2">
                                  <b className="relative leading-[22px] inline-block min-w-[121px] z-[2]">
                                    Cafe Collector
                                  </b>
                                </div>
                                <div className="flex flex-row items-start justify-end py-0 pl-1 pr-[3px] text-mini">
                                  <div className="relative leading-[19px] z-[3]">
                                    Write 3 cafe reviews
                                  </div>
                                </div>
                              </div>
                              <div className="flex-1 flex flex-col items-end justify-start min-w-[149px] max-w-[152px]">
                                <div className="self-stretch flex flex-row items-start justify-start p-4 shrink-0">
                                  <img
                                    className="h-[120px] w-[120px] relative rounded-41xl z-[1]"
                                    alt=""
                                    src="/background-141.svg"
                                  />
                                </div>
                                <div className="flex flex-row items-start justify-end py-0 pl-[63px] pr-[62px] mt-[-0.2px]">
                                  <b className="relative leading-[19px] inline-block min-w-[26px] shrink-0 z-[1]">
                                    0/3
                                  </b>
                                </div>
                                <div className="flex flex-row items-start justify-end py-0 pl-7 pr-[27px] mt-[-0.2px] text-base">
                                  <b className="relative leading-[22px] inline-block min-w-[97px] shrink-0 z-[2]">
                                    Bakery Boss
                                  </b>
                                </div>
                                <div className="flex flex-row items-start justify-end py-0 pl-6 pr-[23px] mt-[-0.2px] text-base-1">
                                  <div className="relative leading-[19px] shrink-0 z-[3]">
                                    <p className="m-0">Write 3 bakery</p>
                                    <p className="m-0">reviews</p>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-1 flex flex-col items-end justify-start min-w-[149px] max-w-[152px]">
                                <div className="self-stretch flex flex-row items-start justify-start p-4 shrink-0">
                                  <img
                                    className="h-[120px] w-[120px] relative rounded-41xl z-[1]"
                                    alt=""
                                    src="/background-151.svg"
                                  />
                                </div>
                                <div className="flex flex-row items-start justify-end py-0 pl-[63px] pr-[62px] mt-[-0.2px]">
                                  <b className="relative leading-[19px] inline-block min-w-[26px] shrink-0 z-[1]">
                                    0/3
                                  </b>
                                </div>
                                <div className="self-stretch flex flex-row items-start justify-end py-0 pl-7 pr-[27px] mt-[-0.2px] text-base-7">
                                  <b className="flex-1 relative leading-[22px] inline-block min-w-[96.6px] shrink-0 z-[2]">
                                    Bar Crawler
                                  </b>
                                </div>
                                <div className="flex flex-row items-start justify-end py-0 pl-2.5 pr-2 mt-[-0.2px] text-base-4">
                                  <div className="h-[38px] relative leading-[19px] flex items-center shrink-0 z-[3]">
                                    <span>
                                      <p className="m-0">Write 3 bar or pub</p>
                                      <p className="m-0">reviews</p>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch [background:linear-gradient(94.6deg,_#00aa6c_67.5%,_#96ca88_74.5%,_#559563_77.95%,_#01945e_77.96%,_#fff6dc_77.96%)] flex flex-col items-start justify-start pt-[80.5px] px-[190px] pb-[160.5px] box-border gap-4 max-w-full text-[36.8px] text-white mq450:pt-[52px] mq450:px-5 mq450:pb-[104px] mq450:box-border mq800:pl-[47px] mq800:pr-[47px] mq800:box-border mq1300:pl-[95px] mq1300:pr-[95px] mq1300:box-border">
              <div className="relative leading-[50px] font-extrabold inline-block max-w-full mq450:text-3xl mq450:leading-[30px] mq800:text-10xl mq800:leading-[40px]">
                Let your stories shine
              </div>
              <div className="flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full text-3xl-1">
                <b className="relative leading-[29px] mq450:text-lg mq450:leading-[23px]">
                  Share a tip or post a pic from a recent trip to unlock
                  milestones and badges.
                </b>
              </div>
              <div className="w-[326.7px] flex flex-row items-start justify-start flex-wrap content-start gap-4 max-w-full">
                <button
                  className="cursor-pointer [border:none] pt-[17.6px] pb-[18.4px] pl-6 pr-[23px] bg-white w-[149.7px] rounded-9xl flex flex-row items-start justify-start box-border shrink-0 whitespace-nowrap hover:bg-gainsboro-100"
                  onClick={onButtonClick}
                >
                  <b className="flex-1 relative text-mini-5 leading-[20px] inline-block font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-center min-w-[101.9px]">
                    Write a review
                  </b>
                </button>
                <button
                  className="cursor-pointer [border:none] pt-[17.6px] pb-[18.4px] pl-6 pr-[23px] bg-white flex-1 rounded-9xl flex flex-row items-start justify-start box-border min-w-[105px] shrink-0 whitespace-nowrap hover:bg-gainsboro-100"
                  onClick={onButtonClick}
                >
                  <b className="flex-1 relative text-base-3 leading-[20px] inline-block font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-center min-w-[113.2px]">
                    Upload a photo
                  </b>
                </button>
              </div>
            </div>
          </section>
          <Footer2 />
          <div className="absolute !m-[0] bottom-[215.3px] left-[67px] text-mid-3 leading-[124.5%] font-medium inline-block min-h-[66px] z-[3]">
            <p className="m-0">Plan your trip in minute, get full</p>
            <p className="m-0">Control for much longer.</p>
          </div>
          <b className="absolute !m-[0] bottom-[332.4px] left-[421px] text-8xl-9 leading-[35px] inline-block text-black z-[3] mq450:text-3xl mq450:leading-[28px]">
            Company
          </b>
          <div className="absolute !m-[0] bottom-[257.6px] left-[421px] leading-[30px] font-medium inline-block min-w-[109px] z-[3] mq450:text-lgi mq450:leading-[24px]">
            About Us
          </div>
          <div className="absolute !m-[0] bottom-[212.4px] left-[421px] leading-[30px] font-medium inline-block min-w-[53px] z-[3] mq450:text-lgi mq450:leading-[24px]">
            Blog
          </div>
          <div className="absolute !m-[0] bottom-[165.8px] left-[421px] leading-[30px] font-medium z-[3] mq450:text-lgi mq450:leading-[24px]">
            Terms and policies
          </div>
          <b className="absolute !m-[0] right-[661.9px] bottom-[332.4px] text-8xl-9 leading-[35px] inline-block text-black min-w-[117px] z-[3] mq450:text-3xl mq450:leading-[28px]">
            Contact
          </b>
          <div className="absolute !m-[0] right-[665.2px] bottom-[260.3px] leading-[30px] font-medium inline-block min-w-[115px] z-[3] mq450:text-lgi mq450:leading-[24px]">
            Help/FAQ
          </div>
          <div className="absolute !m-[0] right-[716.2px] bottom-[212.4px] leading-[30px] font-medium inline-block min-w-[64px] z-[3] mq450:text-lgi mq450:leading-[24px]">
            Press
          </div>
          <div className="absolute !m-[0] right-[682.2px] bottom-[165.8px] leading-[30px] font-medium inline-block min-w-[98px] z-[3] mq450:text-lgi mq450:leading-[24px]">
            Affilates
          </div>
          <b className="absolute !m-[0] right-[499.2px] bottom-[332.4px] text-8xl-9 leading-[35px] inline-block text-black min-w-[73px] z-[3] mq450:text-3xl mq450:leading-[28px]">
            More
          </b>
          <div className="absolute !m-[0] right-[497.2px] bottom-[257.6px] leading-[30px] font-medium inline-block min-w-[75px] z-[3] mq450:text-lgi mq450:leading-[24px]">
            Hotels
          </div>
          <div className="absolute !m-[0] right-[496.2px] bottom-[209.7px] leading-[30px] font-medium inline-block min-w-[76px] z-[3] mq450:text-lgi mq450:leading-[24px]">
            Airline
          </div>
          <div className="absolute !m-[0] right-[401.2px] bottom-[163.2px] leading-[30px] font-medium z-[3] mq450:text-lgi mq450:leading-[24px]">
            Write a review
          </div>
          <h2 className="!m-[0] absolute right-[585.2px] bottom-[26.4px] text-xl leading-[25px] font-medium font-[inherit] z-[3] mq450:text-base mq450:leading-[20px]">
            All rights reserved@TourPal.com
          </h2>
          <img
            className="w-[150px] h-[46.4px] absolute !m-[0] bottom-[321px] left-[94px] shrink-0 object-cover z-[3]"
            loading="lazy"
            alt=""
            src="/tourpal-2@2x.png"
          />
        </main>
      </div>
    </div>
  );
};

export default Achievements;
