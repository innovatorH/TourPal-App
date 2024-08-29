import { useCallback } from "react";
import Background1 from "../components/background1";
import Background from "../components/background";
import { useRouter } from "next/router";
import RatingStar from "../components/rating-star";
import Rating from "../components/rating";
import DayContainers from "../components/day-containers";

const JourneyRoadmap = () => {
  const router = useRouter();

  const onFooterButtonClick = useCallback(() => {
    router.push("/red-terror-martyrs-memorial");
  }, [router]);

  return (
    <div className="w-full relative [background:linear-gradient(#fff,_#fff),_#fff] overflow-y-auto flex flex-col items-start justify-start py-0 px-0 box-border gap-[54px] leading-[normal] tracking-[normal] mq750:gap-[27px]">
      <Background1 />
      <main className="self-stretch bg-white flex flex-row items-start justify-start pt-0 pb-[128.4px] pl-[191px] pr-[99px] box-border relative gap-[31px] max-w-full text-left text-3xs text-wwwtripadvisorcom-black font-wwwtripadvisorcom-inter-black-463 mq1050:pb-[23px] mq1050:box-border mq450:pl-5 mq450:pr-5 mq450:pb-5 mq450:box-border mq750:gap-[15px] mq750:pl-[95px] mq750:pr-[49px] mq750:box-border mq1225:flex-wrap mq1225:pb-[35px] mq1225:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-11 min-w-[458px] max-w-full text-smi-4 mq1050:min-w-full mq750:gap-[22px]">
          <Background />
          <div className="self-stretch flex flex-row items-start justify-start gap-[11px] max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[48.4px] max-w-[calc(100%_-_32px)] mq750:gap-6">
              <div className="w-[454.8px] flex flex-row items-start justify-start gap-2 max-w-full mq450:flex-wrap">
                <div className="flex-1 rounded-xl bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[7px] pl-3 pr-[11px] min-w-[69px] max-w-[69px] whitespace-nowrap">
                  <b className="relative leading-[17px] inline-block min-w-[44px]">
                    Aug 25
                  </b>
                </div>
                <div className="flex-1 rounded-xl bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[7px] pl-3 pr-[11px] min-w-[69px] max-w-[69px] whitespace-nowrap">
                  <b className="relative leading-[17px] inline-block min-w-[44px]">
                    Aug 26
                  </b>
                </div>
                <div className="flex-1 rounded-xl bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[7px] pl-3 pr-[11px] min-w-[69px] max-w-[68px] whitespace-nowrap">
                  <b className="relative leading-[17px] inline-block min-w-[43px]">
                    Aug 27
                  </b>
                </div>
                <div className="flex-1 rounded-xl bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[7px] pl-3 pr-[11px] min-w-[69px] max-w-[69px] whitespace-nowrap text-smi-3">
                  <b className="relative leading-[17px] inline-block min-w-[44px]">
                    Aug 28
                  </b>
                </div>
                <div className="flex-1 rounded-xl bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[7px] pl-3 pr-[11px] min-w-[69px] max-w-[69px] whitespace-nowrap">
                  <b className="relative leading-[17px] inline-block min-w-[44px]">
                    Aug 29
                  </b>
                </div>
                <div className="flex-1 rounded-xl bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[7px] pl-3 pr-[11px] min-w-[69px] max-w-[70px] whitespace-nowrap text-smi-5">
                  <b className="relative leading-[17px] inline-block min-w-[45px]">
                    Aug 30
                  </b>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[9.9px] max-w-full text-mini-9">
                <div className="w-[628px] flex flex-row items-start justify-start gap-[6.6px] max-w-full text-2xl-6 mq750:flex-wrap">
                  <b className="relative leading-[29px] mq450:text-mid mq450:leading-[23px]">
                    Sunday, Aug 25
                  </b>
                  <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[241px] max-w-full text-center text-lgi-8">
                    <div className="w-[206.2px] relative [text-decoration:underline] leading-[24px] flex items-center justify-center">
                      Addis Ababa, Ethiopia
                    </div>
                  </div>
                  <button
                    className="cursor-pointer [border:none] py-[11px] px-[15px] bg-wwwtripadvisorcom-black w-[77px] rounded-xl flex flex-row items-start justify-start box-border"
                    onClick={onFooterButtonClick}
                  >
                    <b className="flex-1 relative text-mini-8 leading-[20px] font-wwwtripadvisorcom-inter-black-463 text-white text-center">
                      Start
                    </b>
                  </button>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-4 pr-px box-border max-w-full text-mini-8">
                  <div className="flex-1 flex flex-row items-start justify-start gap-8 max-w-full mq750:gap-4">
                    <div className="h-[1084.4px] flex flex-col items-end justify-start">
                      <img
                        className="w-8 h-8 relative rounded-2xl overflow-hidden shrink-0"
                        alt=""
                        src="/background1.svg"
                      />
                      <div className="h-[153.6px] flex flex-row items-start justify-end py-0 pl-4 pr-[15px] box-border">
                        <div className="self-stretch w-px relative border-wwwtripadvisorcom-black border-r-[0.8px] border-solid box-border z-[1]" />
                      </div>
                      <img
                        className="w-8 h-8 relative rounded-2xl overflow-hidden shrink-0 z-[2]"
                        alt=""
                        src="/background-1.svg"
                      />
                      <div className="h-[153.6px] flex flex-row items-start justify-end py-0 pl-4 pr-[15px] box-border">
                        <div className="self-stretch w-px relative border-wwwtripadvisorcom-black border-r-[0.8px] border-solid box-border z-[3]" />
                      </div>
                      <img
                        className="w-8 h-[185.6px] relative"
                        loading="lazy"
                        alt=""
                        src="/container.svg"
                      />
                      <img
                        className="w-8 h-8 relative rounded-2xl overflow-hidden shrink-0"
                        alt=""
                        src="/background-1.svg"
                      />
                      <div className="h-[153.6px] flex flex-row items-start justify-end py-0 pl-4 pr-[15px] box-border">
                        <div className="self-stretch w-px relative border-wwwtripadvisorcom-black border-r-[0.8px] border-solid box-border z-[1]" />
                      </div>
                      <img
                        className="w-8 flex-1 relative max-h-full z-[2]"
                        alt=""
                        src="/container-1.svg"
                      />
                      <img
                        className="w-8 h-8 relative rounded-2xl overflow-hidden shrink-0 z-[3]"
                        alt=""
                        src="/background-3.svg"
                      />
                      <div className="h-[89.6px] flex flex-row items-start justify-end py-0 pl-4 pr-[15px] box-border">
                        <div className="self-stretch w-px relative border-wwwtripadvisorcom-black border-r-[0.8px] border-solid box-border z-[4]" />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-8 max-w-[calc(100%_-_64px)] mq750:gap-4">
                      <div className="self-stretch rounded-lg border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[15px] px-4 gap-4 max-w-full text-mini-4 mq750:flex-wrap">
                        <div className="rounded-tl-lg rounded-tr-none rounded-b-none overflow-hidden flex flex-row items-start justify-start">
                          <img
                            className="h-[120px] w-[120px] relative rounded-md overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/background-4@2x.png"
                          />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[9px] min-w-[274px] max-w-full">
                          <div className="self-stretch h-[19px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.7px] box-border">
                            <b className="relative leading-[19px]">
                              Red Terror Martyrs Memorial Museum
                            </b>
                          </div>
                          <div className="flex flex-row items-start justify-start gap-0.5">
                            <RatingStar
                              vector="/museum-ratings.svg"
                              group="/group@2x.png"
                              ratingStarHeight="12px"
                              ratingStarWidth="12px"
                              groupIconRight="0%"
                              groupIconLeft="50%"
                            />
                            <RatingStar
                              vector="/museum-ratings.svg"
                              group="/group@2x.png"
                              ratingStarHeight="12px"
                              ratingStarWidth="12px"
                              groupIconRight="0%"
                              groupIconLeft="50%"
                            />
                            <RatingStar
                              vector="/museum-ratings.svg"
                              group="/group@2x.png"
                              ratingStarHeight="12px"
                              ratingStarWidth="12px"
                              groupIconRight="0%"
                              groupIconLeft="50%"
                            />
                            <RatingStar
                              vector="/museum-ratings.svg"
                              group="/group@2x.png"
                              ratingStarHeight="12px"
                              ratingStarWidth="12px"
                              groupIconRight="0%"
                              groupIconLeft="50%"
                            />
                            <Rating
                              vector="/museum-ratings.svg"
                              group="/group@2x.png"
                              ratingStarHeight="12px"
                              ratingStarWidth="12px"
                              groupIconRight="0%"
                              groupIconLeft="50%"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-start gap-1 text-sm-3 text-darkslategray-200">
                            <img
                              className="h-4 w-4 relative"
                              alt=""
                              src="/svg-31.svg"
                            />
                            <div className="relative leading-[17px] inline-block min-w-[127px]">
                              Speciality Museums
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[15px] px-4 gap-4 max-w-full mq750:flex-wrap">
                        <div className="rounded-tl-lg rounded-tr-none rounded-b-none overflow-hidden flex flex-row items-start justify-start">
                          <img
                            className="h-[120px] w-[120px] relative rounded-md overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/background-5@2x.png"
                          />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[11.6px] min-w-[274px] max-w-full">
                          <div className="self-stretch h-[19px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.7px] box-border">
                            <b className="relative leading-[19px]">
                              Belvedere Restaurant
                            </b>
                          </div>
                          <div className="flex flex-col items-start justify-start gap-[5.9px] max-w-full text-sm-8 text-darkslategray-200">
                            <div className="flex flex-row items-start justify-start py-0 px-px">
                              <div className="flex flex-row items-start justify-start gap-0.5">
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <Rating
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                              </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-1 mq450:flex-wrap">
                              <div className="flex flex-col items-start justify-start pt-[1.4px] px-0 pb-0">
                                <img
                                  className="w-4 h-4 relative"
                                  alt=""
                                  src="/svg-4.svg"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start pt-[1.4px] pb-0 pl-0 pr-[3px]">
                                <div className="relative leading-[17px] inline-block min-w-[71.1px]">
                                  Restaurant
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start pt-[1.4px] px-0 pb-0">
                                <img
                                  className="w-4 h-4 relative"
                                  alt=""
                                  src="/svg-5.svg"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[3px] text-sm-1">
                                <div className="relative leading-[17px]">
                                  Italian • European • $$
                                </div>
                              </div>
                              <img
                                className="h-4 w-4 relative"
                                alt=""
                                src="/svg-6.svg"
                              />
                              <div className="relative text-sm-3 [text-decoration:underline] leading-[17px] text-center inline-block min-w-[66px]">
                                See Hours
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[15px] px-4 gap-4 max-w-full text-mini-5 mq750:flex-wrap">
                        <div className="rounded-tl-lg rounded-tr-none rounded-b-none overflow-hidden flex flex-row items-start justify-start">
                          <img
                            className="h-[120px] w-[120px] relative rounded-md overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/background-6@2x.png"
                          />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[11px] min-w-[274px] max-w-full">
                          <div className="self-stretch h-[19px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.7px] box-border">
                            <b className="relative leading-[19px] inline-block min-w-[74px]">
                              Unity Park
                            </b>
                          </div>
                          <div className="flex flex-row items-start justify-center gap-[3.8px] max-w-full text-sm-3 text-darkslategray-200 mq450:flex-wrap">
                            <div className="flex flex-row items-start justify-start py-0 pl-0 pr-[3px] gap-0.5">
                              <div className="flex flex-col items-end justify-start gap-2">
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <img
                                  className="w-4 h-4 relative"
                                  alt=""
                                  src="/svg-7.svg"
                                />
                                <img
                                  className="w-4 h-4 relative"
                                  alt=""
                                  src="/svg-8.svg"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start gap-[7.3px]">
                                <div className="flex flex-row items-start justify-start gap-0.5">
                                  <RatingStar
                                    vector="/museum-ratings.svg"
                                    group="/group-9@2x.png"
                                    ratingStarHeight="12px"
                                    ratingStarWidth="12px"
                                    groupIconRight="0%"
                                    groupIconLeft="50%"
                                  />
                                  <RatingStar
                                    vector="/museum-ratings.svg"
                                    group="/group-9@2x.png"
                                    ratingStarHeight="12px"
                                    ratingStarWidth="12px"
                                    groupIconRight="0%"
                                    groupIconLeft="50%"
                                  />
                                  <RatingStar
                                    vector="/museum-ratings.svg"
                                    group="/group-9@2x.png"
                                    ratingStarHeight="12px"
                                    ratingStarWidth="12px"
                                    groupIconRight="0%"
                                    groupIconLeft="50%"
                                  />
                                  <Rating
                                    vector="/museum-ratings.svg"
                                    group="/group-9@2x.png"
                                    ratingStarHeight="12px"
                                    ratingStarWidth="12px"
                                    groupIconRight="0%"
                                    groupIconLeft="50%"
                                  />
                                </div>
                                <div className="flex flex-row items-start justify-start py-0 pl-px pr-0">
                                  <div className="relative leading-[17px]">
                                    Government Buildings
                                  </div>
                                </div>
                                <div className="flex flex-row items-start justify-start py-0 px-px text-center">
                                  <div className="relative [text-decoration:underline] leading-[17px] inline-block min-w-[66px]">
                                    See Hours
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start pt-[19px] px-0 pb-0">
                              <img
                                className="w-4 h-4 relative"
                                alt=""
                                src="/svg-9.svg"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-start pt-[19px] px-0 pb-0 text-sm-7">
                              <div className="relative leading-[17px] inline-block min-w-[59px]">
                                Duration:
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start pt-[19px] px-0 pb-0 text-sm-2">
                              <div className="relative leading-[17px] inline-block min-w-[115.3px]">
                                More than 3 hours
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[15px] px-4 gap-4 max-w-full text-xs mq750:flex-wrap">
                        <div className="w-[120px] rounded-tl-lg rounded-tr-none rounded-b-none overflow-hidden shrink-0 flex flex-row items-start justify-start">
                          <div className="flex-1 rounded-md bg-gainsboro-200 overflow-hidden flex flex-row items-start justify-start pt-[68px] px-2 pb-2 relative">
                            <img
                              className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                              alt=""
                              src="/link--the-kitchen--picture@2x.png"
                            />
                            <div className="h-11 w-[35px] relative">
                              <img
                                className="absolute top-[0px] left-[0px] w-[33px] h-11 z-[1]"
                                alt=""
                                src="/heart.svg"
                              />
                              <b className="absolute top-[27px] left-[3px] inline-block min-w-[32px] z-[2]">
                                2023
                              </b>
                              <img
                                className="absolute top-[1px] left-[0.5px] w-8 h-8 z-[3]"
                                alt=""
                                src="/svg-10.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[11.4px] min-w-[274px] max-w-full text-mini-5">
                          <div className="self-stretch h-[19px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.7px] box-border">
                            <b className="relative leading-[19px] inline-block min-w-[86px]">
                              The Kitchen
                            </b>
                          </div>
                          <div className="flex flex-col items-start justify-start gap-[6.1px] max-w-full text-sm-8 text-darkslategray-200">
                            <div className="flex flex-row items-start justify-start gap-0.5">
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <Rating
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                            </div>
                            <div className="flex flex-row items-start justify-start gap-1 mq750:flex-wrap">
                              <div className="flex flex-col items-start justify-start pt-[1.4px] px-0 pb-0">
                                <img
                                  className="w-4 h-4 relative"
                                  alt=""
                                  src="/svg-4.svg"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start pt-[1.4px] pb-0 pl-0 pr-[3px]">
                                <div className="relative leading-[17px] inline-block min-w-[71.1px]">
                                  Restaurant
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start pt-[1.4px] px-0 pb-0">
                                <img
                                  className="w-4 h-4 relative"
                                  alt=""
                                  src="/svg-5.svg"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[3px] text-sm-2">
                                <div className="relative leading-[17px]">
                                  Mediterranean • Healthy • $$
                                </div>
                              </div>
                              <img
                                className="h-4 w-4 relative"
                                alt=""
                                src="/svg-13.svg"
                              />
                              <div className="relative text-sm-3 [text-decoration:underline] leading-[17px] text-center inline-block min-w-[66px]">
                                See Hours
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[15px] px-4 gap-4 max-w-full mq750:flex-wrap">
                        <div className="rounded-tl-lg rounded-tr-none rounded-b-none overflow-hidden flex flex-row items-start justify-start">
                          <img
                            className="h-[120px] w-[120px] relative rounded-md overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/background-7@2x.png"
                          />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[274px] max-w-full">
                          <div className="self-stretch h-[66px] flex flex-col items-start justify-start gap-[10.8px]">
                            <div className="self-stretch h-[19px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.7px] box-border">
                              <b className="relative leading-[19px]">
                                Addis Ababa Authentic Private City Tour
                              </b>
                            </div>
                            <div className="flex-1 flex flex-col items-start justify-start gap-[6.7px] text-smi text-darkslategray-200">
                              <div className="flex flex-row items-start justify-start py-0 px-px">
                                <div className="flex flex-row items-start justify-start gap-0.5">
                                  <RatingStar
                                    vector="/museum-ratings.svg"
                                    group="/group-9@2x.png"
                                    ratingStarHeight="12px"
                                    ratingStarWidth="12px"
                                    groupIconRight="0%"
                                    groupIconLeft="50%"
                                  />
                                  <RatingStar
                                    vector="/museum-ratings.svg"
                                    group="/group-9@2x.png"
                                    ratingStarHeight="12px"
                                    ratingStarWidth="12px"
                                    groupIconRight="0%"
                                    groupIconLeft="50%"
                                  />
                                  <RatingStar
                                    vector="/museum-ratings.svg"
                                    group="/group-9@2x.png"
                                    ratingStarHeight="12px"
                                    ratingStarWidth="12px"
                                    groupIconRight="0%"
                                    groupIconLeft="50%"
                                  />
                                  <RatingStar
                                    vector="/museum-ratings.svg"
                                    group="/group-9@2x.png"
                                    ratingStarHeight="12px"
                                    ratingStarWidth="12px"
                                    groupIconRight="0%"
                                    groupIconLeft="50%"
                                  />
                                  <Rating
                                    vector="/museum-ratings.svg"
                                    group="/group-9@2x.png"
                                    ratingStarHeight="12px"
                                    ratingStarWidth="12px"
                                    groupIconRight="0%"
                                    groupIconLeft="50%"
                                  />
                                </div>
                              </div>
                              <div className="flex-1 flex flex-row items-start justify-start gap-[7.5px]">
                                <div className="flex flex-row items-start justify-start gap-1">
                                  <img
                                    className="h-4 w-4 relative"
                                    alt=""
                                    src="/svg-14.svg"
                                  />
                                  <div className="relative leading-[17px] inline-block min-w-[95px]">{`Tickets & Tours`}</div>
                                </div>
                                <div className="flex flex-row items-start justify-start gap-1">
                                  <img
                                    className="h-4 w-4 relative"
                                    alt=""
                                    src="/svg-15.svg"
                                  />
                                  <div className="relative leading-[17px] inline-block min-w-[121px]">
                                    Duration: 6-8 hours
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch border-gainsboro-200 border-t-[0.8px] border-solid flex flex-col items-start justify-start pt-[15px] px-0 pb-[0.5px] text-sm-3 text-darkslategray-200">
                            <div className="relative leading-[17px] inline-block min-w-[30px]">
                              from
                            </div>
                            <div className="w-[161px] flex flex-row items-end justify-start gap-[16.6px] text-base-2 text-wwwtripadvisorcom-black">
                              <div className="flex flex-col items-start justify-start">
                                <div className="h-[21.5px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
                                  <b className="mb-[-0.5px] relative leading-[22px] inline-block min-w-[57px] shrink-0 whitespace-nowrap">
                                    $75.00
                                  </b>
                                </div>
                                <div className="relative text-sm leading-[17px] text-darkslategray-200 inline-block min-w-[59.1px] shrink-0">
                                  per adult
                                </div>
                              </div>
                              <button className="cursor-pointer border-goldenrod border-[1px] border-solid py-2 pl-3.5 pr-[13px] bg-white h-[38px] flex-1 rounded-xl box-border flex flex-row items-start justify-start">
                                <b className="relative text-mini-4 leading-[20px] inline-block font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-center min-w-[58px]">
                                  Reserve
                                </b>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg bg-white border-gainsboro-200 border-[1px] border-dashed box-border flex flex-row items-start justify-start py-[23px] px-6 gap-[51px] max-w-full text-base-1 text-darkslategray-200 mq750:gap-[25px] mq750:flex-wrap">
                        <div className="flex-1 flex flex-col items-start justify-start pt-[8.4px] px-0 pb-0 box-border min-w-[293px] max-w-full">
                          <div className="relative leading-[22px]">
                            <span>{`Pick a home-base that matches your vibe. `}</span>
                            <b className="[text-decoration:underline]">
                              Add a place to stay.
                            </b>
                          </div>
                        </div>
                        <img
                          className="h-10 w-10 relative rounded-xl"
                          loading="lazy"
                          alt=""
                          src="/button--dismiss.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[628.2px] flex flex-row items-end justify-between max-w-full gap-5 text-2xl-8 mq750:flex-wrap">
                  <div className="w-[386.7px] flex flex-col items-start justify-end pt-0 px-0 pb-[13px] box-border max-w-full">
                    <div className="self-stretch flex flex-row items-end justify-start gap-[5.3px] mq450:flex-wrap">
                      <div className="h-[102.8px] flex flex-col items-start justify-start gap-[29.8px] min-w-[175.2px] shrink-0 mq450:flex-1">
                        <button className="cursor-pointer border-wwwtripadvisorcom-black border-[1px] border-solid py-3 pl-[22px] pr-[21px] bg-white w-[100.1px] flex-1 rounded-3xl box-border flex flex-row items-start justify-start gap-2">
                          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                            <img
                              className="w-4 h-4 relative"
                              alt=""
                              src="/svg-16.svg"
                            />
                          </div>
                          <b className="w-[30.3px] relative text-base-1 leading-[20px] flex font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-center items-center justify-center shrink-0 min-w-[30.3px]">
                            Add
                          </b>
                        </button>
                        <b className="relative leading-[29px] mq450:text-mid mq450:leading-[23px]">
                          Monday, Aug 26
                        </b>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-px box-border min-w-[134px] text-center text-lgi-8">
                        <div className="self-stretch relative [text-decoration:underline] leading-[24px] shrink-0">
                          Addis Ababa, Ethiopia
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="cursor-pointer [border:none] py-[11px] px-[15px] bg-wwwtripadvisorcom-black w-[77px] rounded-xl flex flex-row items-start justify-start box-border"
                    onClick={onFooterButtonClick}
                  >
                    <b className="flex-1 relative text-mini-8 leading-[20px] font-wwwtripadvisorcom-inter-black-463 text-white text-center">
                      Start
                    </b>
                  </button>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[17px] pr-0 box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-start gap-8 max-w-full mq750:gap-4">
                    <div className="h-[962.8px] flex flex-col items-end justify-start">
                      <img
                        className="w-8 flex-1 relative max-h-full shrink-0"
                        alt=""
                        src="/container-2.svg"
                      />
                      <img
                        className="w-8 h-8 relative rounded-2xl overflow-hidden shrink-0 z-[1]"
                        alt=""
                        src="/background-1.svg"
                      />
                      <div className="h-[153.6px] flex flex-row items-start justify-end py-0 pl-4 pr-[15px] box-border">
                        <div className="self-stretch w-px relative border-wwwtripadvisorcom-black border-r-[0.8px] border-solid box-border shrink-0 z-[2]" />
                      </div>
                      <img
                        className="w-8 h-8 relative rounded-2xl overflow-hidden shrink-0 z-[3]"
                        alt=""
                        src="/background1.svg"
                      />
                      <div className="h-[153.6px] flex flex-row items-start justify-end py-0 pl-4 pr-[15px] box-border">
                        <div className="self-stretch w-px relative border-wwwtripadvisorcom-black border-r-[0.8px] border-solid box-border shrink-0 z-[4]" />
                      </div>
                      <img
                        className="w-8 h-8 relative rounded-2xl overflow-hidden shrink-0 z-[5]"
                        alt=""
                        src="/background-10.svg"
                      />
                      <div className="h-[153.6px] flex flex-row items-start justify-end py-0 pl-4 pr-[15px] box-border">
                        <div className="self-stretch w-px relative border-wwwtripadvisorcom-black border-r-[0.8px] border-solid box-border shrink-0 z-[6]" />
                      </div>
                      <img
                        className="w-8 h-8 relative rounded-2xl overflow-hidden shrink-0"
                        alt=""
                        src="/background-1.svg"
                      />
                      <div className="h-[153.6px] flex flex-row items-start justify-end py-0 pl-4 pr-[15px] box-border">
                        <div className="self-stretch w-px relative border-wwwtripadvisorcom-black border-r-[0.8px] border-solid box-border shrink-0 z-[1]" />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-8 max-w-[calc(100%_-_64px)] mq750:gap-4">
                      <div className="self-stretch rounded-lg border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[15px] px-4 gap-4 max-w-full text-mini-6 mq750:flex-wrap">
                        <div className="rounded-tl-lg rounded-tr-none rounded-b-none overflow-hidden flex flex-row items-start justify-start">
                          <img
                            className="h-[120px] w-[120px] relative rounded-md overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/background-12@2x.png"
                          />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[274px] max-w-full">
                          <div className="self-stretch flex flex-col items-start justify-start gap-[11.2px] shrink-0">
                            <div className="self-stretch h-[19px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.7px] box-border">
                              <b className="relative leading-[19px] shrink-0">
                                Full Day Tour of Addis Ababa with Hotel Pickup
                                and Drop-…
                              </b>
                            </div>
                            <div className="h-[35.8px] flex flex-col items-start justify-start gap-[6.3px] text-smi text-darkslategray-200">
                              <div className="flex flex-row items-start justify-start gap-0.5">
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <Rating
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                              </div>
                              <div className="flex-1 flex flex-row items-start justify-start gap-[7.5px]">
                                <div className="flex flex-row items-start justify-start gap-1">
                                  <img
                                    className="h-4 w-4 relative"
                                    alt=""
                                    src="/svg-14.svg"
                                  />
                                  <div className="relative leading-[17px] inline-block min-w-[95px]">{`Tickets & Tours`}</div>
                                </div>
                                <div className="flex flex-row items-start justify-start gap-1 text-sm-1">
                                  <img
                                    className="h-4 w-4 relative"
                                    alt=""
                                    src="/svg-15.svg"
                                  />
                                  <div className="relative leading-[17px] inline-block min-w-[121px]">
                                    Duration: 6-7 hours
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch border-gainsboro-200 border-t-[0.8px] border-solid flex flex-col items-start justify-start pt-[15px] px-0 pb-[0.5px] shrink-0 text-sm-3 text-darkslategray-200">
                            <div className="relative leading-[17px] inline-block min-w-[30px]">
                              from
                            </div>
                            <div className="w-[161px] flex flex-row items-end justify-start gap-[16.6px] text-[15.9px] text-wwwtripadvisorcom-black">
                              <div className="flex flex-col items-start justify-start">
                                <div className="h-[21.5px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
                                  <b className="mb-[-0.5px] relative leading-[22px] inline-block min-w-[56px] shrink-0 whitespace-nowrap">
                                    $76.00
                                  </b>
                                </div>
                                <div className="relative text-sm leading-[17px] text-darkslategray-200 inline-block min-w-[59.1px] shrink-0">
                                  per adult
                                </div>
                              </div>
                              <button className="cursor-pointer border-goldenrod border-[1px] border-solid py-2 pl-3.5 pr-[13px] bg-white h-[38px] flex-1 rounded-xl box-border flex flex-row items-start justify-start">
                                <b className="relative text-mini-4 leading-[20px] inline-block font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-center min-w-[58px]">
                                  Reserve
                                </b>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[15px] px-4 gap-4 max-w-full mq750:flex-wrap">
                        <div className="rounded-tl-lg rounded-tr-none rounded-b-none overflow-hidden flex flex-row items-start justify-start">
                          <img
                            className="h-[120px] w-[120px] relative rounded-md overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/background-13@2x.png"
                          />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[11.8px] min-w-[274px] max-w-full">
                          <div className="self-stretch h-[19px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.7px] box-border">
                            <b className="relative leading-[19px]">
                              Gazebo Restaurant on the Park
                            </b>
                          </div>
                          <div className="flex flex-col items-start justify-start gap-[5.7px] max-w-full text-sm-8 text-darkslategray-200">
                            <div className="flex flex-row items-start justify-start gap-0.5">
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <Rating
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                            </div>
                            <div className="flex flex-row items-start justify-start gap-1 mq450:flex-wrap">
                              <div className="flex flex-col items-start justify-start pt-[1.4px] px-0 pb-0">
                                <img
                                  className="w-4 h-4 relative"
                                  alt=""
                                  src="/svg-4.svg"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start pt-[1.4px] pb-0 pl-0 pr-[3px]">
                                <div className="relative leading-[17px] inline-block min-w-[71.1px]">
                                  Restaurant
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start pt-[1.4px] px-0 pb-0">
                                <img
                                  className="w-4 h-4 relative"
                                  alt=""
                                  src="/svg-5.svg"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start py-0 pl-0 pr-0.5 text-smi-8">
                                <div className="relative leading-[17px] inline-block min-w-[110px]">
                                  African • Bar • $$
                                </div>
                              </div>
                              <img
                                className="h-4 w-4 relative"
                                alt=""
                                src="/svg-211.svg"
                              />
                              <div className="relative text-sm-3 [text-decoration:underline] leading-[17px] text-center inline-block min-w-[66px]">
                                See Hours
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[15px] px-4 gap-4 max-w-full text-mini-8 mq750:flex-wrap">
                        <div className="rounded-tl-lg rounded-tr-none rounded-b-none overflow-hidden flex flex-row items-start justify-start">
                          <img
                            className="h-[120px] w-[120px] relative rounded-md overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/background-14@2x.png"
                          />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[11.2px] min-w-[274px] max-w-full">
                          <div className="self-stretch h-[19px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.7px] box-border">
                            <b className="relative leading-[19px]">
                              National Museum of Ethiopia
                            </b>
                          </div>
                          <div className="flex flex-row items-start justify-center gap-[4.8px] max-w-full text-sm-3 text-darkslategray-200 mq450:flex-wrap">
                            <div className="flex flex-col items-start justify-start gap-[6.8px]">
                              <div className="flex flex-row items-start justify-start gap-0.5">
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <Rating
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start gap-[7.5px]">
                                <div className="flex flex-row items-start justify-start gap-1">
                                  <img
                                    className="h-4 w-4 relative"
                                    alt=""
                                    src="/svg-31.svg"
                                  />
                                  <div className="relative leading-[17px] inline-block min-w-[127px]">
                                    Speciality Museums
                                  </div>
                                </div>
                                <div className="flex flex-row items-start justify-start gap-1 text-center">
                                  <input
                                    className="cursor-pointer m-0 h-4 w-4 relative"
                                    type="radio"
                                  />
                                  <div className="relative [text-decoration:underline] leading-[17px] inline-block min-w-[66px]">
                                    See Hours
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start pt-[18.8px] px-0 pb-0">
                              <input
                                className="cursor-pointer m-0 w-4 h-4 relative"
                                type="radio"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-start pt-[18.8px] px-0 pb-0 text-sm-7">
                              <div className="relative leading-[17px] inline-block min-w-[59px]">
                                Duration:
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start pt-[18.8px] px-0 pb-0 text-sm-2">
                              <div className="relative leading-[17px] inline-block min-w-[115.3px]">
                                More than 3 hours
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[15px] px-4 gap-4 max-w-full mq750:flex-wrap">
                        <div className="rounded-tl-lg rounded-tr-none rounded-b-none overflow-hidden flex flex-row items-start justify-start">
                          <img
                            className="h-[120px] w-[120px] relative rounded-md overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/background-15@2x.png"
                          />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[11.6px] min-w-[274px] max-w-full">
                          <div className="self-stretch h-[19px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.7px] box-border">
                            <b className="relative leading-[19px]">
                              Holy Trinity Cathedral
                            </b>
                          </div>
                          <div className="flex flex-col items-start justify-start gap-[5.9px] text-sm-3 text-darkslategray-200">
                            <div className="flex flex-row items-start justify-start py-0 px-px">
                              <div className="flex flex-row items-start justify-start gap-0.5">
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <Rating
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                              </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-1">
                              <div className="flex flex-col items-start justify-start pt-[1.4px] px-0 pb-0">
                                <img
                                  className="w-4 h-4 relative"
                                  alt=""
                                  src="/svg-25.svg"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start pt-[1.4px] pb-0 pl-0 pr-[3px]">
                                <div className="relative leading-[17px] inline-block min-w-[92px]">
                                  Religious Sites
                                </div>
                              </div>
                              <img
                                className="h-4 w-4 relative"
                                alt=""
                                src="/svg-26.svg"
                              />
                              <div className="relative [text-decoration:underline] leading-[17px] text-center inline-block min-w-[66px]">
                                See Hours
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[15px] px-4 gap-4 max-w-full text-sm-5 mq750:flex-wrap">
                        <div className="rounded-tl-lg rounded-tr-none rounded-b-none overflow-hidden flex flex-row items-start justify-start">
                          <img
                            className="h-[120px] w-[120px] relative rounded-md overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/background-16@2x.png"
                          />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[11px] min-w-[274px] max-w-full">
                          <div className="self-stretch h-[19px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.7px] box-border">
                            <b className="relative leading-[19px] inline-block min-w-[35px]">
                              MK's
                            </b>
                          </div>
                          <div className="h-9 flex flex-col items-start justify-start gap-[6.5px] text-sm-8 text-darkslategray-200">
                            <div className="flex flex-row items-start justify-start gap-0.5">
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <Rating
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                            </div>
                            <div className="flex-1 flex flex-row items-start justify-start gap-[7.8px]">
                              <div className="flex flex-row items-start justify-start gap-1">
                                <img
                                  className="h-4 w-4 relative"
                                  alt=""
                                  src="/svg-27.svg"
                                />
                                <div className="relative leading-[17px] inline-block min-w-[71.1px]">
                                  Restaurant
                                </div>
                              </div>
                              <div className="flex flex-row items-start justify-start gap-1 text-smi-4">
                                <img
                                  className="h-4 w-4 relative"
                                  alt=""
                                  src="/svg-28.svg"
                                />
                                <div className="relative leading-[17px] inline-block min-w-[87px]">
                                  Bar • Pub • $$
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[630px] flex flex-row items-start justify-start py-0 px-px box-border max-w-full text-2xl-4">
                  <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-5 mq750:flex-wrap">
                    <div className="w-[387.7px] flex flex-col items-start justify-end pt-0 px-0 pb-[12.8px] box-border max-w-full">
                      <div className="self-stretch flex flex-row items-end justify-start gap-[7.5px] shrink-0 mq450:flex-wrap">
                        <div className="h-[114.6px] flex flex-col items-start justify-start gap-[41.6px] min-w-[174px] shrink-0 mq450:flex-1">
                          <button className="cursor-pointer border-wwwtripadvisorcom-black border-[1px] border-solid py-3 pl-[22px] pr-[21px] bg-white w-[100.1px] flex-1 rounded-3xl box-border flex flex-row items-start justify-start gap-2">
                            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                              <img
                                className="w-4 h-4 relative"
                                alt=""
                                src="/svg-16.svg"
                              />
                            </div>
                            <b className="w-[30.3px] relative text-base-1 leading-[20px] flex font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-center items-center justify-center shrink-0 min-w-[30.3px]">
                              Add
                            </b>
                          </button>
                          <b className="relative leading-[29px] mq450:text-mid mq450:leading-[23px]">
                            Tuesday, Aug 27
                          </b>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-px box-border min-w-[134px] text-center text-lgi-8">
                          <div className="self-stretch relative [text-decoration:underline] leading-[24px] shrink-0">
                            Addis Ababa, Ethiopia
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="cursor-pointer [border:none] py-[11px] px-[15px] bg-wwwtripadvisorcom-black w-[77px] rounded-xl flex flex-row items-start justify-start box-border"
                      onClick={onFooterButtonClick}
                    >
                      <b className="flex-1 relative text-mini-8 leading-[20px] font-wwwtripadvisorcom-inter-black-463 text-white text-center">
                        Start
                      </b>
                    </button>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[17px] pr-0 box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-start gap-8 max-w-full mq750:gap-4">
                    <div className="h-[928px] flex flex-col items-end justify-start">
                      <img
                        className="w-8 h-8 relative rounded-2xl overflow-hidden shrink-0"
                        alt=""
                        src="/background-17.svg"
                      />
                      <div className="flex-1 flex flex-row items-start justify-end py-0 pl-4 pr-[15px]">
                        <div className="self-stretch w-px relative border-wwwtripadvisorcom-black border-r-[0.8px] border-solid box-border shrink-0 z-[1]" />
                      </div>
                      <img
                        className="w-8 h-8 relative rounded-2xl overflow-hidden shrink-0 z-[2]"
                        alt=""
                        src="/background-1.svg"
                      />
                      <div className="h-[153.6px] flex flex-row items-start justify-end py-0 pl-4 pr-[15px] box-border">
                        <div className="self-stretch w-px relative border-wwwtripadvisorcom-black border-r-[0.8px] border-solid box-border shrink-0 z-[3]" />
                      </div>
                      <img
                        className="w-8 h-8 relative rounded-2xl overflow-hidden shrink-0 z-[4]"
                        alt=""
                        src="/background-10.svg"
                      />
                      <div className="h-[153.6px] flex flex-row items-start justify-end py-0 pl-4 pr-[15px] box-border">
                        <div className="self-stretch w-px relative border-wwwtripadvisorcom-black border-r-[0.8px] border-solid box-border shrink-0 z-[5]" />
                      </div>
                      <img
                        className="w-8 h-8 relative rounded-2xl overflow-hidden shrink-0 z-[6]"
                        alt=""
                        src="/background-1.svg"
                      />
                      <div className="h-[153.6px] flex flex-row items-start justify-end py-0 pl-4 pr-[15px] box-border">
                        <div className="self-stretch w-px relative border-wwwtripadvisorcom-black border-r-[0.8px] border-solid box-border shrink-0 z-[7]" />
                      </div>
                      <img
                        className="w-8 h-8 relative rounded-2xl overflow-hidden shrink-0 z-[8]"
                        alt=""
                        src="/background-10.svg"
                      />
                      <div className="h-[153.6px] flex flex-row items-start justify-end py-0 pl-4 pr-[15px] box-border">
                        <div className="self-stretch w-px relative border-wwwtripadvisorcom-black border-r-[0.8px] border-solid box-border shrink-0 z-[9]" />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-8 max-w-[calc(100%_-_64px)] mq750:gap-4">
                      <div className="self-stretch rounded-lg border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[15px] px-4 gap-4 max-w-full text-mini-5 mq750:flex-wrap">
                        <div className="rounded-tl-lg rounded-tr-none rounded-b-none overflow-hidden flex flex-row items-start justify-start">
                          <img
                            className="h-[120px] w-[120px] relative rounded-md overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/background-22@2x.png"
                          />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[11px] min-w-[274px] max-w-full">
                          <div className="self-stretch h-[19px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.7px] box-border">
                            <b className="relative leading-[19px] inline-block min-w-[96.2px]">
                              Mount Entoto
                            </b>
                          </div>
                          <div className="w-[386.8px] flex flex-col items-start justify-start gap-[6.5px] max-w-full text-sm-6 text-darkslategray-200">
                            <div className="flex flex-row items-start justify-start gap-0.5">
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <Rating
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-start gap-1 mq450:flex-wrap">
                              <div className="flex-1 flex flex-row items-start justify-start gap-[7.8px] min-w-[206px] min-h-[18px] mq450:flex-wrap">
                                <div className="flex-1 flex flex-row items-start justify-start gap-[3.8px] min-w-[190px] mq450:flex-wrap">
                                  <div className="flex flex-row items-start justify-start gap-[6.9px]">
                                    <div className="flex flex-row items-start justify-start gap-1">
                                      <img
                                        className="h-4 w-4 relative"
                                        alt=""
                                        src="/svg-30.svg"
                                      />
                                      <a className="[text-decoration:none] relative leading-[17px] text-[inherit] inline-block min-w-[68px]">
                                        Mountains
                                      </a>
                                    </div>
                                    <div className="flex flex-row items-start justify-start gap-1 text-sm-7">
                                      <img
                                        className="h-4 w-4 relative"
                                        alt=""
                                        src="/svg-311.svg"
                                      />
                                      <div className="relative leading-[17px] inline-block min-w-[59px]">
                                        Duration:
                                      </div>
                                    </div>
                                  </div>
                                  <div className="relative text-sm-2 leading-[17px] inline-block min-w-[115.3px]">
                                    More than 3 hours
                                  </div>
                                </div>
                                <img
                                  className="h-4 w-4 relative"
                                  alt=""
                                  src="/svg-32.svg"
                                />
                              </div>
                              <div className="relative text-sm-3 [text-decoration:underline] leading-[17px] text-center inline-block min-w-[66px]">
                                See Hours
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[15px] px-4 gap-4 max-w-full mq750:flex-wrap">
                        <div className="rounded-tl-lg rounded-tr-none rounded-b-none overflow-hidden flex flex-row items-start justify-start">
                          <img
                            className="h-[120px] w-[120px] relative rounded-md overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/background-23@2x.png"
                          />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[11.4px] min-w-[274px] max-w-full">
                          <div className="self-stretch h-[19px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.7px] box-border">
                            <b className="relative leading-[19px] inline-block min-w-[111px]">
                              Tomoca Coffee
                            </b>
                          </div>
                          <div className="flex flex-col items-start justify-start gap-[6.1px] text-sm-8 text-darkslategray-200">
                            <div className="flex flex-row items-start justify-start py-0 px-px">
                              <div className="flex flex-row items-start justify-start gap-0.5">
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <Rating
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                              </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-1">
                              <div className="flex flex-col items-start justify-start pt-[1.4px] px-0 pb-0">
                                <img
                                  className="w-4 h-4 relative"
                                  alt=""
                                  src="/svg-4.svg"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start pt-[1.4px] pb-0 pl-0 pr-[3px]">
                                <div className="relative leading-[17px] inline-block min-w-[71.1px]">
                                  Restaurant
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start pt-[1.4px] px-0 pb-0">
                                <img
                                  className="w-4 h-4 relative"
                                  alt=""
                                  src="/svg-5.svg"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[3px] text-smi-8">
                                <div className="relative leading-[17px] inline-block min-w-[51.1px]">
                                  Cafe • $
                                </div>
                              </div>
                              <img
                                className="h-4 w-4 relative"
                                alt=""
                                src="/svg-35.svg"
                              />
                              <div className="relative text-sm-3 [text-decoration:underline] leading-[17px] text-center inline-block min-w-[66px]">
                                See Hours
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[15px] px-4 gap-4 max-w-full mq750:flex-wrap">
                        <div className="rounded-tl-lg rounded-tr-none rounded-b-none overflow-hidden flex flex-row items-start justify-start">
                          <img
                            className="h-[120px] w-[120px] relative rounded-md overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/background-24@2x.png"
                          />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[9px] min-w-[274px] max-w-full">
                          <div className="self-stretch h-[19px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.7px] box-border">
                            <b className="relative leading-[19px]">
                              St. George's Cathedral
                            </b>
                          </div>
                          <div className="flex flex-row items-start justify-start gap-0.5">
                            <RatingStar
                              vector="/museum-ratings.svg"
                              group="/group-9@2x.png"
                              ratingStarHeight="12px"
                              ratingStarWidth="12px"
                              groupIconRight="0%"
                              groupIconLeft="50%"
                            />
                            <RatingStar
                              vector="/museum-ratings.svg"
                              group="/group-9@2x.png"
                              ratingStarHeight="12px"
                              ratingStarWidth="12px"
                              groupIconRight="0%"
                              groupIconLeft="50%"
                            />
                            <RatingStar
                              vector="/museum-ratings.svg"
                              group="/group-9@2x.png"
                              ratingStarHeight="12px"
                              ratingStarWidth="12px"
                              groupIconRight="0%"
                              groupIconLeft="50%"
                            />
                            <RatingStar
                              vector="/museum-ratings.svg"
                              group="/group-9@2x.png"
                              ratingStarHeight="12px"
                              ratingStarWidth="12px"
                              groupIconRight="0%"
                              groupIconLeft="50%"
                            />
                            <Rating
                              vector="/museum-ratings.svg"
                              group="/group-9@2x.png"
                              ratingStarHeight="12px"
                              ratingStarWidth="12px"
                              groupIconRight="0%"
                              groupIconLeft="50%"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-start gap-1 text-sm-7 text-darkslategray-200">
                            <img
                              className="h-4 w-4 relative"
                              alt=""
                              src="/svg-36.svg"
                            />
                            <div className="relative leading-[17px]">{`Churches & Cathedrals`}</div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[15px] px-4 gap-4 max-w-full text-mini-6 mq750:flex-wrap">
                        <div className="rounded-tl-lg rounded-tr-none rounded-b-none overflow-hidden flex flex-row items-start justify-start">
                          <img
                            className="h-[120px] w-[120px] relative rounded-md overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/background-25@2x.png"
                          />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[11.2px] min-w-[274px] max-w-full">
                          <div className="self-stretch h-[19px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.7px] box-border">
                            <b className="relative leading-[19px]">{`Marcus Addis Restaurant & Sky Bar`}</b>
                          </div>
                          <div className="flex flex-col items-start justify-start gap-[6.3px] max-w-full text-sm-8 text-darkslategray-200">
                            <div className="flex flex-row items-start justify-start gap-0.5">
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <Rating
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                            </div>
                            <div className="flex flex-row items-start justify-start gap-1 mq750:flex-wrap">
                              <div className="flex flex-col items-start justify-start pt-[1.4px] px-0 pb-0">
                                <img
                                  className="w-4 h-4 relative"
                                  alt=""
                                  src="/svg-4.svg"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start pt-[1.4px] pb-0 pl-0 pr-[3px]">
                                <div className="relative leading-[17px] inline-block min-w-[71.1px]">
                                  Restaurant
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start pt-[1.4px] px-0 pb-0">
                                <img
                                  className="w-4 h-4 relative"
                                  alt=""
                                  src="/svg-5.svg"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[3px] text-sm-1">
                                <div className="relative leading-[17px]">
                                  International • African • $$$$
                                </div>
                              </div>
                              <img
                                className="h-4 w-4 relative"
                                alt=""
                                src="/svg-39.svg"
                              />
                              <div className="relative text-sm-3 [text-decoration:underline] leading-[17px] text-center inline-block min-w-[66px]">
                                See Hours
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[15px] px-4 gap-4 max-w-full text-mini-6 mq750:flex-wrap">
                        <div className="rounded-tl-lg rounded-tr-none rounded-b-none overflow-hidden flex flex-row items-start justify-start">
                          <img
                            className="h-[120px] w-[120px] relative rounded-md overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/background-26@2x.png"
                          />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[9px] min-w-[274px] max-w-full">
                          <div className="self-stretch h-[19px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.7px] box-border">
                            <b className="relative leading-[19px]">
                              Entoto Maryam Church
                            </b>
                          </div>
                          <div className="flex flex-row items-start justify-start gap-0.5">
                            <RatingStar
                              vector="/museum-ratings.svg"
                              group="/group-9@2x.png"
                              ratingStarHeight="12px"
                              ratingStarWidth="12px"
                              groupIconRight="0%"
                              groupIconLeft="50%"
                            />
                            <RatingStar
                              vector="/museum-ratings.svg"
                              group="/group-9@2x.png"
                              ratingStarHeight="12px"
                              ratingStarWidth="12px"
                              groupIconRight="0%"
                              groupIconLeft="50%"
                            />
                            <RatingStar
                              vector="/museum-ratings.svg"
                              group="/group-9@2x.png"
                              ratingStarHeight="12px"
                              ratingStarWidth="12px"
                              groupIconRight="0%"
                              groupIconLeft="50%"
                            />
                            <RatingStar
                              vector="/museum-ratings.svg"
                              group="/group-9@2x.png"
                              ratingStarHeight="12px"
                              ratingStarWidth="12px"
                              groupIconRight="0%"
                              groupIconLeft="50%"
                            />
                            <Rating
                              vector="/museum-ratings.svg"
                              group="/group-9@2x.png"
                              ratingStarHeight="12px"
                              ratingStarWidth="12px"
                              groupIconRight="0%"
                              groupIconLeft="50%"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-start gap-1 text-sm-7 text-darkslategray-200">
                            <img
                              className="h-4 w-4 relative"
                              alt=""
                              src="/svg-36.svg"
                            />
                            <div className="relative leading-[17px]">{`Churches & Cathedrals`}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <DayContainers />
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[17px] pr-0 box-border max-w-full text-mini-6">
                  <div className="flex-1 flex flex-row items-start justify-start gap-8 max-w-full mq750:gap-4">
                    <div className="h-[962.8px] flex flex-col items-end justify-start">
                      <img
                        className="w-8 h-8 relative rounded-2xl overflow-hidden shrink-0"
                        alt=""
                        src="/background-10.svg"
                      />
                      <div className="h-[153.6px] flex flex-row items-start justify-end py-0 pl-4 pr-[15px] box-border">
                        <div className="self-stretch w-px relative border-wwwtripadvisorcom-black border-r-[0.8px] border-solid box-border z-[1]" />
                      </div>
                      <img
                        className="w-8 h-8 relative rounded-2xl overflow-hidden shrink-0 z-[2]"
                        alt=""
                        src="/background-1.svg"
                      />
                      <div className="h-[153.6px] flex flex-row items-start justify-end py-0 pl-4 pr-[15px] box-border">
                        <div className="self-stretch w-px relative border-wwwtripadvisorcom-black border-r-[0.8px] border-solid box-border z-[3]" />
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <img
                          className="w-8 flex-1 relative max-h-full"
                          alt=""
                          src="/container-3.svg"
                        />
                        <img
                          className="w-8 h-8 relative rounded-2xl overflow-hidden shrink-0 z-[1]"
                          alt=""
                          src="/background1.svg"
                        />
                      </div>
                      <div className="h-[153.6px] flex flex-row items-start justify-end py-0 pl-4 pr-[15px] box-border">
                        <div className="self-stretch w-px relative border-wwwtripadvisorcom-black border-r-[0.8px] border-solid box-border z-[2]" />
                      </div>
                      <img
                        className="w-8 h-8 relative rounded-2xl overflow-hidden shrink-0"
                        alt=""
                        src="/background-1.svg"
                      />
                      <div className="h-[153.6px] flex flex-row items-start justify-end py-0 pl-4 pr-[15px] box-border">
                        <div className="self-stretch w-px relative border-wwwtripadvisorcom-black border-r-[0.8px] border-solid box-border z-[1]" />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-8 max-w-[calc(100%_-_64px)] mq750:gap-4">
                      <div className="self-stretch rounded-lg border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[15px] px-4 gap-4 max-w-full mq750:flex-wrap">
                        <div className="rounded-tl-lg rounded-tr-none rounded-b-none overflow-hidden flex flex-row items-start justify-start">
                          <img
                            className="h-[120px] w-[120px] relative rounded-md overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/background-31@2x.png"
                          />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[9px] min-w-[274px] max-w-full">
                          <div className="self-stretch h-[19px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.7px] box-border">
                            <b className="relative leading-[19px]">
                              Grand Anwar Mosque
                            </b>
                          </div>
                          <div className="flex flex-row items-start justify-start py-0 px-px">
                            <div className="flex flex-row items-start justify-start gap-0.5">
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <Rating
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start gap-1 text-sm-3 text-darkslategray-200">
                            <img
                              className="h-4 w-4 relative"
                              alt=""
                              src="/svg-36.svg"
                            />
                            <div className="relative leading-[17px] inline-block min-w-[92px]">
                              Religious Sites
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[15px] px-4 gap-4 max-w-full text-mini-1 mq750:flex-wrap">
                        <div className="rounded-tl-lg rounded-tr-none rounded-b-none overflow-hidden flex flex-row items-start justify-start">
                          <img
                            className="h-[120px] w-[120px] relative rounded-md overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/background-32@2x.png"
                          />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[11px] min-w-[274px] max-w-full">
                          <div className="self-stretch h-[19px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.7px] box-border">
                            <b className="relative leading-[19px] inline-block min-w-[72.9px]">
                              Effoi Pizza
                            </b>
                          </div>
                          <div className="w-[274px] flex flex-col items-start justify-start gap-[6.5px] text-sm-8 text-darkslategray-200">
                            <div className="flex flex-row items-start justify-start gap-0.5">
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <Rating
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                            </div>
                            <div className="self-stretch flex flex-row items-end justify-start gap-[7.4px]">
                              <div className="flex-1 flex flex-row items-start justify-start gap-1">
                                <img
                                  className="h-4 w-4 relative"
                                  alt=""
                                  src="/svg-4.svg"
                                />
                                <div className="relative leading-[17px] inline-block min-w-[71.1px]">
                                  Restaurant
                                </div>
                              </div>
                              <div className="flex flex-row items-start justify-start gap-1 text-smi-4">
                                <img
                                  className="h-4 w-4 relative"
                                  alt=""
                                  src="/svg-5.svg"
                                />
                                <div className="relative leading-[17px] inline-block min-w-[62px]">
                                  Pizza • $$
                                </div>
                              </div>
                              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[1.4px] text-center text-sm-3">
                                <div className="flex flex-row items-start justify-start gap-1">
                                  <img
                                    className="h-4 w-4 relative"
                                    alt=""
                                    src="/svg-45.svg"
                                  />
                                  <div className="relative [text-decoration:underline] leading-[17px] inline-block min-w-[66px]">
                                    See Hours
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[15px] px-4 gap-4 max-w-full mq750:flex-wrap">
                        <div className="rounded-tl-lg rounded-tr-none rounded-b-none overflow-hidden flex flex-row items-start justify-start">
                          <img
                            className="h-[120px] w-[120px] relative rounded-md overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/background-33@2x.png"
                          />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[274px] max-w-full">
                          <div className="self-stretch h-[66px] flex flex-col items-start justify-start gap-[11.2px]">
                            <div className="self-stretch h-[19px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.7px] box-border">
                              <b className="relative leading-[19px] inline-block min-w-[120.7px]">
                                Taste of Ethiopia
                              </b>
                            </div>
                            <div className="flex-1 flex flex-col items-start justify-start gap-[6.3px] text-smi text-darkslategray-200">
                              <div className="flex flex-row items-start justify-start gap-0.5">
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <Rating
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                              </div>
                              <div className="flex-1 flex flex-row items-start justify-start gap-[7.5px]">
                                <div className="flex flex-row items-start justify-start gap-1">
                                  <img
                                    className="h-4 w-4 relative"
                                    alt=""
                                    src="/svg-14.svg"
                                  />
                                  <div className="relative leading-[17px] inline-block min-w-[95px]">{`Tickets & Tours`}</div>
                                </div>
                                <div className="flex flex-row items-start justify-start gap-1 text-sm-2">
                                  <img
                                    className="h-4 w-4 relative"
                                    alt=""
                                    src="/svg-15.svg"
                                  />
                                  <div className="relative leading-[17px] inline-block min-w-[77.5px]">
                                    Duration: 4h
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch border-gainsboro-200 border-t-[0.8px] border-solid flex flex-col items-start justify-start pt-[15px] px-0 pb-[0.5px] text-sm-3 text-darkslategray-200">
                            <div className="relative leading-[17px] inline-block min-w-[30px]">
                              from
                            </div>
                            <div className="w-[162.7px] flex flex-row items-end justify-start gap-[16.6px] text-[15.2px] text-wwwtripadvisorcom-black">
                              <div className="flex flex-col items-start justify-start">
                                <div className="h-[21.5px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
                                  <b className="mb-[-0.5px] relative leading-[22px] inline-block min-w-[60.8px] shrink-0 whitespace-nowrap">
                                    $102.57
                                  </b>
                                </div>
                                <div className="relative text-sm leading-[17px] text-darkslategray-200 inline-block min-w-[59.1px] shrink-0">
                                  per adult
                                </div>
                              </div>
                              <button className="cursor-pointer border-goldenrod border-[1px] border-solid py-2 pl-3.5 pr-[13px] bg-white h-[38px] flex-1 rounded-xl box-border flex flex-row items-start justify-start">
                                <b className="relative text-mini-4 leading-[20px] inline-block font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-center min-w-[58px]">
                                  Reserve
                                </b>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[15px] px-4 gap-4 max-w-full text-mini-5 mq750:flex-wrap">
                        <div className="rounded-tl-lg rounded-tr-none rounded-b-none overflow-hidden flex flex-row items-start justify-start">
                          <img
                            className="h-[120px] w-[120px] relative rounded-md overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/background-34@2x.png"
                          />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[11.2px] min-w-[274px] max-w-full">
                          <div className="self-stretch h-[19px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.7px] box-border">
                            <b className="relative leading-[19px]">
                              Ethnological Museum
                            </b>
                          </div>
                          <div className="flex flex-col items-start justify-start gap-[6.8px] text-sm-3 text-darkslategray-200">
                            <div className="flex flex-row items-start justify-start gap-0.5">
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <Rating
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                            </div>
                            <div className="flex flex-row items-start justify-start gap-1">
                              <img
                                className="h-4 w-4 relative"
                                alt=""
                                src="/svg-31.svg"
                              />
                              <div className="relative leading-[17px] inline-block min-w-[127px]">
                                Speciality Museums
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[15px] px-4 gap-4 max-w-full text-mini-8 mq750:flex-wrap">
                        <div className="rounded-tl-lg rounded-tr-none rounded-b-none overflow-hidden flex flex-row items-start justify-start">
                          <img
                            className="h-[120px] w-[120px] relative rounded-md overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/background-35@2x.png"
                          />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[11.4px] min-w-[274px] max-w-full">
                          <div className="self-stretch h-[19px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.7px] box-border">
                            <b className="relative leading-[19px]">{`Cravings Restaurant & Bar`}</b>
                          </div>
                          <div className="flex flex-col items-start justify-start gap-[6.1px] max-w-full text-sm-8 text-darkslategray-200">
                            <div className="flex flex-row items-start justify-start gap-0.5">
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <Rating
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                            </div>
                            <div className="flex flex-row items-start justify-start gap-1 mq750:flex-wrap">
                              <div className="flex flex-col items-start justify-start pt-[1.4px] px-0 pb-0">
                                <img
                                  className="w-4 h-4 relative"
                                  alt=""
                                  src="/svg-4.svg"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start pt-[1.4px] pb-0 pl-0 pr-[3px]">
                                <div className="relative leading-[17px] inline-block min-w-[71.1px]">
                                  Restaurant
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start pt-[1.4px] px-0 pb-0">
                                <img
                                  className="w-4 h-4 relative"
                                  alt=""
                                  src="/svg-5.svg"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[3px] text-sm-1">
                                <div className="relative leading-[17px]">
                                  International • Fast Food • $$
                                </div>
                              </div>
                              <img
                                className="h-4 w-4 relative"
                                alt=""
                                src="/svg-51.svg"
                              />
                              <div className="relative text-sm-3 [text-decoration:underline] leading-[17px] text-center inline-block min-w-[66px]">
                                See Hours
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <DayContainers />
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[17px] pr-0 box-border max-w-full text-mini-8">
                  <div className="flex-1 flex flex-row items-start justify-start gap-8 max-w-full mq750:gap-4">
                    <div className="h-[962.8px] flex flex-col items-start justify-start">
                      <img
                        className="w-8 h-[220.4px] relative"
                        alt=""
                        src="/container-2.svg"
                      />
                      <div className="h-[371.2px] flex flex-col items-end justify-start pt-0 px-0 pb-[153.6px] box-border relative mq450:pb-[100px] mq450:box-border">
                        <img
                          className="w-8 h-8 relative rounded-2xl overflow-hidden shrink-0 z-[1]"
                          alt=""
                          src="/background-1.svg"
                        />
                        <div className="flex-1 flex flex-row items-start justify-end py-0 pl-4 pr-[15px]">
                          <div className="self-stretch w-px relative border-wwwtripadvisorcom-black border-r-[0.8px] border-solid box-border z-[2]" />
                        </div>
                        <img
                          className="w-8 h-8 relative rounded-2xl overflow-hidden shrink-0 z-[3]"
                          alt=""
                          src="/background-37.svg"
                        />
                        <div className="w-px h-[153.6px] absolute !m-[0] right-[15.4px] bottom-[0px] border-wwwtripadvisorcom-black border-r-[0.8px] border-solid box-border z-[4]" />
                      </div>
                      <div className="flex-1 flex flex-col items-end justify-start">
                        <img
                          className="w-8 h-8 relative rounded-2xl overflow-hidden shrink-0 z-[5]"
                          alt=""
                          src="/background-1.svg"
                        />
                        <div className="flex-1 flex flex-row items-start justify-end py-0 pl-4 pr-[15px]">
                          <div className="self-stretch w-px relative border-wwwtripadvisorcom-black border-r-[0.8px] border-solid box-border z-[6]" />
                        </div>
                        <img
                          className="w-8 h-8 relative rounded-2xl overflow-hidden shrink-0 z-[7]"
                          alt=""
                          src="/background-37.svg"
                        />
                        <div className="h-[153.6px] flex flex-row items-start justify-end py-0 pl-4 pr-[15px] box-border">
                          <div className="self-stretch w-px relative border-wwwtripadvisorcom-black border-r-[0.8px] border-solid box-border z-[8]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-8 max-w-[calc(100%_-_64px)] mq750:gap-4">
                      <div className="self-stretch rounded-lg border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[15px] px-4 gap-4 max-w-full mq750:flex-wrap">
                        <div className="rounded-tl-lg rounded-tr-none rounded-b-none overflow-hidden flex flex-row items-start justify-start">
                          <img
                            className="h-[120px] w-[120px] relative rounded-md overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/background-40@2x.png"
                          />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[274px] max-w-full">
                          <div className="self-stretch flex flex-col items-start justify-start gap-[11.4px]">
                            <div className="self-stretch h-[19px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 pb-[0.7px] pl-0 pr-1.5 box-border">
                              <b className="relative leading-[19px]">
                                Half day Addis Ababa Excursions- complete
                                experience…
                              </b>
                            </div>
                            <div className="h-[35.6px] flex flex-col items-start justify-start gap-[6.1px] text-smi text-darkslategray-200">
                              <div className="flex flex-row items-start justify-start gap-0.5">
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <Rating
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                              </div>
                              <div className="flex-1 flex flex-row items-start justify-start gap-[7.5px]">
                                <div className="flex flex-row items-start justify-start gap-1">
                                  <img
                                    className="h-4 w-4 relative"
                                    alt=""
                                    src="/svg-14.svg"
                                  />
                                  <div className="relative leading-[17px] inline-block min-w-[95px]">{`Tickets & Tours`}</div>
                                </div>
                                <div className="flex flex-row items-start justify-start gap-1">
                                  <img
                                    className="h-4 w-4 relative"
                                    alt=""
                                    src="/svg-15.svg"
                                  />
                                  <div className="relative leading-[17px] inline-block min-w-[121px]">
                                    Duration: 2-6 hours
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch border-gainsboro-200 border-t-[0.8px] border-solid flex flex-col items-start justify-start pt-[15px] px-0 pb-[0.5px] text-sm-3 text-darkslategray-200">
                            <div className="relative leading-[17px] inline-block min-w-[30px]">
                              from
                            </div>
                            <div className="w-[161px] flex flex-row items-end justify-start gap-[16.6px] text-base text-wwwtripadvisorcom-black">
                              <div className="flex flex-col items-start justify-start">
                                <div className="h-[21.5px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
                                  <b className="mb-[-0.5px] relative leading-[22px] inline-block min-w-[57px] shrink-0 whitespace-nowrap">
                                    $85.00
                                  </b>
                                </div>
                                <div className="relative text-sm leading-[17px] text-darkslategray-200 inline-block min-w-[59.1px] shrink-0">
                                  per adult
                                </div>
                              </div>
                              <button className="cursor-pointer border-goldenrod border-[1px] border-solid py-2 pl-3.5 pr-[13px] bg-white h-[38px] flex-1 rounded-xl box-border flex flex-row items-start justify-start">
                                <b className="relative text-mini-4 leading-[20px] inline-block font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-center min-w-[58px]">
                                  Reserve
                                </b>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[15px] px-4 gap-4 max-w-full mq750:flex-wrap">
                        <div className="rounded-tl-lg rounded-tr-none rounded-b-none overflow-hidden flex flex-row items-start justify-start">
                          <img
                            className="h-[120px] w-[120px] relative rounded-md overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/background-41@2x.png"
                          />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[11px] min-w-[274px] max-w-full">
                          <div className="self-stretch h-[19px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.7px] box-border">
                            <b className="relative leading-[19px]">
                              Yod Abyssinia Traditional Food
                            </b>
                          </div>
                          <div className="flex flex-col items-start justify-start gap-[6.5px] max-w-full text-sm-8 text-darkslategray-200">
                            <div className="flex flex-row items-start justify-start py-0 px-px">
                              <div className="flex flex-row items-start justify-start gap-0.5">
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <Rating
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                              </div>
                            </div>
                            <div className="flex flex-row items-end justify-start gap-[7.5px] mq450:flex-wrap">
                              <div className="flex flex-row items-start justify-start gap-1">
                                <img
                                  className="h-4 w-4 relative"
                                  alt=""
                                  src="/svg-4.svg"
                                />
                                <div className="relative leading-[17px] inline-block min-w-[71.1px]">
                                  Restaurant
                                </div>
                              </div>
                              <div className="flex flex-row items-start justify-start gap-1 text-smi-9">
                                <img
                                  className="h-4 w-4 relative"
                                  alt=""
                                  src="/svg-5.svg"
                                />
                                <div className="relative leading-[17px]">
                                  African • Healthy • $$
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[1.4px] text-center text-sm-3">
                                <div className="flex flex-row items-start justify-start gap-1">
                                  <img
                                    className="h-4 w-4 relative"
                                    alt=""
                                    src="/svg-57.svg"
                                  />
                                  <div className="relative [text-decoration:underline] leading-[17px] inline-block min-w-[66px]">
                                    See Hours
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[15px] px-4 gap-4 max-w-full mq750:flex-wrap">
                        <div className="rounded-tl-lg rounded-tr-none rounded-b-none overflow-hidden flex flex-row items-start justify-start">
                          <img
                            className="h-[120px] w-[120px] relative rounded-md overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/background-42@2x.png"
                          />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[11.4px] min-w-[274px] max-w-full">
                          <div className="self-stretch h-[19px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.7px] box-border">
                            <b className="relative leading-[19px] inline-block min-w-[100px]">
                              Sholla Market
                            </b>
                          </div>
                          <div className="flex flex-col items-start justify-start gap-[6.6px] text-sm-3 text-darkslategray-200">
                            <div className="flex flex-row items-start justify-start py-0 px-px">
                              <div className="flex flex-row items-start justify-start gap-0.5">
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <Rating
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                              </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[3.8px] mq450:flex-wrap">
                              <img
                                className="h-4 w-4 relative"
                                alt=""
                                src="/svg-58.svg"
                              />
                              <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[3px]">
                                <div className="relative leading-[17px]">{`Flea & Street Markets`}</div>
                              </div>
                              <img
                                className="h-4 w-4 relative"
                                alt=""
                                src="/svg-59.svg"
                              />
                              <div className="relative text-sm-7 leading-[17px] inline-block min-w-[59px]">
                                Duration:
                              </div>
                              <div className="relative text-smi-5 leading-[17px] inline-block min-w-[59px]">
                                2-3 hours
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[15px] px-4 gap-4 max-w-full mq750:flex-wrap">
                        <div className="rounded-tl-lg rounded-tr-none rounded-b-none overflow-hidden flex flex-row items-start justify-start">
                          <img
                            className="h-[120px] w-[120px] relative rounded-md overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/background-43@2x.png"
                          />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[11.8px] min-w-[274px] max-w-full">
                          <div className="self-stretch h-[19px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.7px] box-border">
                            <b className="relative leading-[19px] inline-block min-w-[95.3px]">
                              Bait Al Mandi
                            </b>
                          </div>
                          <div className="flex flex-col items-start justify-start gap-[5.7px] max-w-full text-sm-8 text-darkslategray-200">
                            <div className="flex flex-row items-start justify-start gap-0.5">
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <Rating
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                            </div>
                            <div className="flex flex-row items-start justify-start gap-1 mq750:flex-wrap">
                              <div className="flex flex-col items-start justify-start pt-[1.4px] px-0 pb-0">
                                <img
                                  className="w-4 h-4 relative"
                                  alt=""
                                  src="/svg-4.svg"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start pt-[1.4px] pb-0 pl-0 pr-[3px]">
                                <div className="relative leading-[17px] inline-block min-w-[71.1px]">
                                  Restaurant
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start pt-[1.4px] px-0 pb-0">
                                <img
                                  className="w-4 h-4 relative"
                                  alt=""
                                  src="/svg-5.svg"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[3px] text-smi">
                                <div className="relative leading-[17px]">
                                  Middle Eastern • Lebanese • $$
                                </div>
                              </div>
                              <img
                                className="h-4 w-4 relative"
                                alt=""
                                src="/svg-62.svg"
                              />
                              <div className="relative text-sm-3 [text-decoration:underline] leading-[17px] text-center inline-block min-w-[66px]">
                                See Hours
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[15px] px-4 gap-4 max-w-full text-mini-9 mq750:flex-wrap">
                        <div className="rounded-tl-lg rounded-tr-none rounded-b-none overflow-hidden flex flex-row items-start justify-start">
                          <img
                            className="h-[120px] w-[120px] relative rounded-md overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/background-44@2x.png"
                          />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[11.2px] min-w-[274px] max-w-full">
                          <div className="self-stretch h-[19px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.7px] box-border">
                            <b className="relative leading-[19px]">
                              Chiromeda Market
                            </b>
                          </div>
                          <div className="flex flex-col items-start justify-start gap-[6.8px] text-sm-3 text-darkslategray-200">
                            <div className="flex flex-row items-start justify-start py-0 px-px">
                              <div className="flex flex-row items-start justify-start gap-0.5">
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <Rating
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                              </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-1">
                              <img
                                className="h-4 w-4 relative"
                                alt=""
                                src="/svg-58.svg"
                              />
                              <div className="relative leading-[17px]">{`Flea & Street Markets`}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <DayContainers />
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[17px] pr-0 box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-start gap-8 max-w-full mq750:gap-4">
                    <div className="flex flex-col items-start justify-start gap-[153.6px]">
                      <div className="h-[217.6px] flex flex-col items-end justify-start">
                        <img
                          className="w-8 h-8 relative rounded-2xl overflow-hidden shrink-0"
                          alt=""
                          src="/background-37.svg"
                        />
                        <div className="flex-1 flex flex-row items-start justify-end py-0 pl-4 pr-[15px]">
                          <div className="self-stretch w-px relative border-wwwtripadvisorcom-black border-r-[0.8px] border-solid box-border z-[1]" />
                        </div>
                        <img
                          className="w-8 h-8 relative rounded-2xl overflow-hidden shrink-0 z-[2]"
                          alt=""
                          src="/background-1.svg"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-row items-start justify-start relative">
                          <div className="h-[153.6px] w-px absolute !m-[0] top-[-153.6px] right-[15.4px] border-wwwtripadvisorcom-black border-r-[0.8px] border-solid box-border z-[3]" />
                          <img
                            className="h-[220.4px] w-8 relative shrink-0 z-[4]"
                            alt=""
                            src="/container-3.svg"
                          />
                        </div>
                        <img
                          className="w-8 h-8 relative rounded-2xl overflow-hidden shrink-0"
                          alt=""
                          src="/background-1.svg"
                        />
                      </div>
                      <div className="h-[185.6px] flex flex-col items-end justify-start">
                        <div className="flex flex-row items-start justify-start relative">
                          <div className="h-[153.6px] w-px absolute !m-[0] top-[-153.6px] right-[15.4px] border-wwwtripadvisorcom-black border-r-[0.8px] border-solid box-border z-[1]" />
                          <img
                            className="h-8 w-8 relative rounded-2xl overflow-hidden shrink-0 z-[2]"
                            alt=""
                            src="/background-48.svg"
                          />
                        </div>
                        <div className="flex-1 flex flex-row items-start justify-end py-0 pl-4 pr-[15px]">
                          <div className="self-stretch w-px relative border-wwwtripadvisorcom-black border-r-[0.8px] border-solid box-border z-[3]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-8 max-w-[calc(100%_-_64px)] mq750:gap-4">
                      <div className="self-stretch rounded-lg border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[15px] px-4 gap-4 max-w-full mq750:flex-wrap">
                        <div className="rounded-tl-lg rounded-tr-none rounded-b-none overflow-hidden flex flex-row items-start justify-start">
                          <img
                            className="h-[120px] w-[120px] relative rounded-md overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/background-49@2x.png"
                          />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[11.2px] min-w-[274px] max-w-full">
                          <div className="self-stretch h-[19px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.7px] box-border">
                            <b className="relative leading-[19px] inline-block min-w-[116px]">
                              Mercato Market
                            </b>
                          </div>
                          <div className="flex flex-col items-start justify-start gap-[6.3px] max-w-full text-sm-3 text-darkslategray-200">
                            <div className="flex flex-row items-start justify-start gap-0.5">
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <Rating
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                            </div>
                            <div className="flex flex-row items-end justify-start gap-[3.8px] mq450:flex-wrap">
                              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
                                <img
                                  className="w-4 h-4 relative"
                                  alt=""
                                  src="/svg-65.svg"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[3px]">
                                <div className="relative leading-[17px] inline-block min-w-[107px]">
                                  Farmers Markets
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
                                <input
                                  className="cursor-pointer m-0 w-4 h-4 relative"
                                  type="radio"
                                />
                              </div>
                              <div className="relative text-sm-7 leading-[17px] inline-block min-w-[59px]">
                                Duration:
                              </div>
                              <div className="flex flex-col items-start justify-start py-0 pl-0 pr-0.5 text-smi-5">
                                <div className="relative leading-[17px] inline-block min-w-[59px]">
                                  2-3 hours
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[1.9px]">
                                <input
                                  className="cursor-pointer m-0 w-4 h-4 relative"
                                  type="radio"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[1.4px] text-center">
                                <div className="relative [text-decoration:underline] leading-[17px] inline-block min-w-[66px]">
                                  See Hours
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[15px] px-4 gap-4 max-w-full text-mini mq750:flex-wrap">
                        <div className="rounded-tl-lg rounded-tr-none rounded-b-none overflow-hidden flex flex-row items-start justify-start">
                          <img
                            className="h-[120px] w-[120px] relative rounded-md overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/background-50@2x.png"
                          />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[11.6px] min-w-[274px] max-w-full">
                          <div className="self-stretch h-[19px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.7px] box-border">
                            <b className="relative leading-[19px]">
                              Villaverde Addis Ababa
                            </b>
                          </div>
                          <div className="flex flex-col items-start justify-start gap-[5.9px] max-w-full text-sm-8 text-darkslategray-200">
                            <div className="flex flex-row items-start justify-start py-0 px-px">
                              <div className="flex flex-row items-start justify-start gap-0.5">
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <Rating
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                              </div>
                            </div>
                            <div className="flex flex-row items-end justify-start gap-[7.4px] mq450:flex-wrap">
                              <div className="flex flex-row items-start justify-start gap-1">
                                <img
                                  className="h-4 w-4 relative"
                                  alt=""
                                  src="/svg-4.svg"
                                />
                                <div className="relative leading-[17px] inline-block min-w-[71.1px]">
                                  Restaurant
                                </div>
                              </div>
                              <div className="flex flex-row items-start justify-start gap-1 text-sm-1">
                                <img
                                  className="h-4 w-4 relative"
                                  alt=""
                                  src="/svg-5.svg"
                                />
                                <div className="relative leading-[17px]">
                                  Italian • European • $$
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[1.4px] text-center text-sm-3">
                                <div className="flex flex-row items-start justify-start gap-1">
                                  <img
                                    className="h-4 w-4 relative"
                                    alt=""
                                    src="/svg-6.svg"
                                  />
                                  <div className="relative [text-decoration:underline] leading-[17px] inline-block min-w-[66px]">
                                    See Hours
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[15px] px-4 gap-4 max-w-full text-mini-8 mq750:flex-wrap">
                        <div className="rounded-tl-lg rounded-tr-none rounded-b-none overflow-hidden flex flex-row items-start justify-start">
                          <img
                            className="h-[120px] w-[120px] relative rounded-md overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/background-51@2x.png"
                          />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[274px] max-w-full">
                          <div className="self-stretch flex flex-col items-start justify-start gap-[11px]">
                            <div className="self-stretch h-[19px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.7px] box-border">
                              <b className="relative leading-[19px]">
                                Prepare for the Best Day Tour in Addis Ababa
                              </b>
                            </div>
                            <div className="h-9 flex flex-col items-start justify-start gap-[6.5px] text-smi text-darkslategray-200">
                              <div className="flex flex-row items-start justify-start gap-0.5">
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <Rating
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                              </div>
                              <div className="flex-1 flex flex-row items-start justify-start gap-[7.5px]">
                                <div className="flex flex-row items-start justify-start gap-1">
                                  <img
                                    className="h-4 w-4 relative"
                                    alt=""
                                    src="/svg-14.svg"
                                  />
                                  <div className="relative leading-[17px] inline-block min-w-[95px]">{`Tickets & Tours`}</div>
                                </div>
                                <div className="flex flex-row items-start justify-start gap-1 text-sm-5">
                                  <img
                                    className="h-4 w-4 relative"
                                    alt=""
                                    src="/svg-15.svg"
                                  />
                                  <div className="relative leading-[17px] inline-block min-w-[79px]">
                                    Duration: 6h
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch border-gainsboro-200 border-t-[0.8px] border-solid flex flex-col items-start justify-start pt-[15px] px-0 pb-[0.5px] text-sm-3 text-darkslategray-200">
                            <div className="relative leading-[17px] inline-block min-w-[30px]">
                              from
                            </div>
                            <div className="w-[161.2px] flex flex-row items-end justify-start gap-[16.8px] text-[16.3px] text-wwwtripadvisorcom-black">
                              <div className="flex flex-col items-start justify-start">
                                <div className="h-[21.5px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
                                  <b className="mb-[-0.5px] relative leading-[22px] inline-block min-w-[59px] shrink-0 whitespace-nowrap">
                                    $90.00
                                  </b>
                                </div>
                                <a className="[text-decoration:none] relative text-sm leading-[17px] text-darkslategray-200 inline-block min-w-[59.1px] shrink-0">
                                  per adult
                                </a>
                              </div>
                              <button className="cursor-pointer border-goldenrod border-[1px] border-solid py-2 pl-3.5 pr-[13px] bg-white h-[38px] flex-1 rounded-xl box-border flex flex-row items-start justify-start">
                                <b className="relative text-mini-4 leading-[20px] inline-block font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-center min-w-[58px]">
                                  Reserve
                                </b>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[15px] px-4 gap-4 max-w-full text-base-1 mq750:flex-wrap">
                        <div className="rounded-tl-lg rounded-tr-none rounded-b-none overflow-hidden flex flex-row items-start justify-start">
                          <img
                            className="h-[120px] w-[120px] relative rounded-md overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/background-52@2x.png"
                          />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[10.6px] min-w-[274px] max-w-full">
                          <div className="self-stretch h-[19px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.7px] box-border">
                            <b className="relative leading-[19px]">{`Cascara Coffee & Cocktail's`}</b>
                          </div>
                          <div className="h-[36.4px] flex flex-col items-start justify-start gap-[6.9px] text-sm-8 text-darkslategray-200">
                            <div className="flex flex-row items-start justify-start py-0 px-px">
                              <div className="flex flex-row items-start justify-start gap-0.5">
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <Rating
                                  vector="/museum-ratings.svg"
                                  group="/group-9@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-start justify-start gap-[7.8px]">
                              <div className="flex flex-row items-start justify-start gap-1">
                                <img
                                  className="h-4 w-4 relative"
                                  alt=""
                                  src="/svg-27.svg"
                                />
                                <div className="relative leading-[17px] inline-block min-w-[71.1px]">
                                  Restaurant
                                </div>
                              </div>
                              <div className="flex flex-row items-start justify-start gap-1 text-smi-5">
                                <img
                                  className="h-4 w-4 relative"
                                  alt=""
                                  src="/svg-28.svg"
                                />
                                <div className="relative leading-[17px] inline-block min-w-[51px]">
                                  Bar • $$
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[15px] px-4 gap-4 max-w-full text-mini-6 mq750:flex-wrap">
                        <div className="rounded-tl-lg rounded-tr-none rounded-b-none overflow-hidden flex flex-row items-start justify-start">
                          <img
                            className="h-[120px] w-[120px] relative rounded-md overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/background-53@2x.png"
                          />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[11px] min-w-[274px] max-w-full">
                          <div className="self-stretch h-[19px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.7px] box-border">
                            <b className="relative leading-[19px] inline-block min-w-[92px]">
                              Karls Square
                            </b>
                          </div>
                          <div className="flex flex-col items-start justify-start gap-[7px] max-w-full text-sm-2 text-darkslategray-200">
                            <div className="flex flex-row items-start justify-start gap-0.5">
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <Rating
                                vector="/museum-ratings.svg"
                                group="/group-9@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[7.8px] mq450:flex-wrap">
                              <div className="flex flex-row items-start justify-start gap-1">
                                <img
                                  className="h-4 w-4 relative"
                                  alt=""
                                  src="/svg-75.svg"
                                />
                                <div className="relative leading-[17px]">{`Monuments & Statues`}</div>
                              </div>
                              <div className="flex flex-row items-start justify-start gap-[3.9px] text-sm-7">
                                <img
                                  className="h-4 w-4 relative"
                                  alt=""
                                  src="/svg-76.svg"
                                />
                                <div className="relative leading-[17px] inline-block min-w-[59px]">
                                  Duration:
                                </div>
                                <div className="relative text-sm-3 leading-[17px] inline-block min-w-[113.3px]">
                                  Less than an hour
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <DayContainers />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[83px] px-0 pb-0 mq750:pt-5 mq750:box-border mq1225:pt-[23px] mq1225:box-border">
              <div className="flex flex-col items-end justify-start gap-[1055.4px]">
                <div className="flex flex-row items-start justify-end pt-0 pb-[144.6px] pl-0 pr-px">
                  <img className="h-5 w-5 relative" alt="" src="/svg-78.svg" />
                </div>
                <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[34.8px]">
                  <img className="h-5 w-5 relative" alt="" src="/svg-78.svg" />
                </div>
                <img className="w-5 h-5 relative" alt="" src="/svg-78.svg" />
                <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[34.8px]">
                  <img className="h-5 w-5 relative" alt="" src="/svg-78.svg" />
                </div>
                <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[34.8px]">
                  <img className="h-5 w-5 relative" alt="" src="/svg-78.svg" />
                </div>
                <img className="w-5 h-5 relative" alt="" src="/svg-78.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[747px] w-[492px] relative rounded-xl bg-whitesmoke-200 overflow-hidden shrink-0 hidden max-w-full z-[1] text-right font-roboto">
          <div className="absolute top-[708.8px] left-[359.6px] leading-[14px] flex items-center w-[84px] h-3.5 min-w-[84px]">
            Report a map error
          </div>
          <img
            className="absolute top-[710.4px] left-[171.3px] w-[14.4px] h-[9px] overflow-hidden"
            alt=""
            src="/button--keyboard-shortcuts--image.svg"
          />
          <div className="absolute top-[708.8px] left-[197.7px] leading-[14px] flex items-center w-[110.2px] h-3 min-w-[110.2px]">
            Map Data ©2024 Google
          </div>
          <div className="absolute top-[708.8px] left-[319.5px] leading-[14px] flex items-center w-[29px] h-3.5 min-w-[29px]">
            Terms
          </div>
          <img
            className="absolute top-[696px] left-[54px] w-[66px] h-[26px] overflow-hidden"
            alt=""
            src="/image.svg"
          />
          <div className="absolute top-[0px] left-[0px] w-[400px] h-[647.2px]">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden"
              alt=""
              src="/container-6.svg"
            />
            <img
              className="absolute top-[539.2px] left-[350px] rounded-xl w-10 h-10"
              alt=""
              src="/overlayshadow.svg"
            />
            <img
              className="absolute top-[587.2px] left-[350px] rounded-xl w-10 h-10"
              alt=""
              src="/overlayshadow-1.svg"
            />
          </div>
        </div>
        <div className="w-[492px] rounded-xl bg-whitesmoke-200 overflow-hidden shrink-0 flex flex-col items-end justify-start pt-0 pb-[24.2px] pl-0 pr-12 box-border gap-[48.8px] min-w-[492px] max-w-full z-[2] text-right font-roboto mq1050:min-w-full mq750:gap-6 mq1225:flex-1 mq1225:pr-0 mq1225:box-border">
          <div className="self-stretch h-[647.2px] flex flex-row items-start justify-start max-w-full">
            <div className="self-stretch flex flex-col items-start justify-end py-5 pl-[350px] pr-2.5 box-border relative gap-2 max-w-full mq450:pl-5 mq450:box-border">
              <img
                className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/container-6.svg"
              />
              <img
                className="w-10 h-10 relative rounded-xl z-[1]"
                alt=""
                src="/overlayshadow.svg"
              />
              <img
                className="w-10 h-10 relative rounded-xl z-[1]"
                alt=""
                src="/overlayshadow-1.svg"
              />
            </div>
          </div>
          <div className="w-[389.6px] flex flex-row items-end justify-start gap-[11.1px] max-w-full mq450:flex-wrap">
            <div className="w-[106.2px] flex flex-col items-start justify-start">
              <img
                className="w-[66px] h-[26px] relative overflow-hidden shrink-0"
                alt=""
                src="/image.svg"
              />
            </div>
            <div className="flex-1 flex flex-row items-start justify-start gap-[11.8px] min-w-[115px]">
              <div className="flex flex-col items-start justify-start pt-[1.6px] px-0 pb-0">
                <img
                  className="w-[14.4px] h-[9px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/button--keyboard-shortcuts--image.svg"
                />
              </div>
              <div className="flex-1 relative leading-[14px] inline-block min-w-[110.2px]">
                Map Data ©2024 Google
              </div>
              <div className="relative leading-[14px] inline-block min-w-[29px]">
                Terms
              </div>
            </div>
            <div className="relative leading-[14px] inline-block min-w-[84px] shrink-0">
              Report a map error
            </div>
          </div>
        </div>
        <div className="absolute !m-[0] bottom-[-107.4px] left-[0px] text-base inline-block min-w-[5px]">
          ;
        </div>
      </main>
    </div>
  );
};

export default JourneyRoadmap;
