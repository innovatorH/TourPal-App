import { useCallback } from "react";
import Navigation1 from "./navigation1";
import Container2 from "./container2";
import Rating1 from "./rating1";
import RatingStar from "./rating-star";
import Rating from "./rating";
import CityTour from "./city-tour";
import { useRouter } from "next/router";
import FrameComponent15 from "./frame-component15";
import PropTypes from "prop-types";

const OverviewPage = ({ className = "" }) => {
  const router = useRouter();

  const onItemContainerClick = useCallback(() => {
    router.push("/tour-guide");
  }, [router]);

  return (
    <button
      className={`cursor-pointer [border:none] pt-[33px] px-0 pb-[21.5px] bg-white w-[1520px] max-w-full overflow-hidden flex flex-col items-end justify-start box-border relative gap-[57px] leading-[normal] tracking-[normal] mq850:gap-7 ${className}`}
    >
      <Navigation1 />
      <img
        className="w-10 h-10 absolute !m-[0] top-[2589px] right-[163px] rounded-xl z-[2]"
        alt=""
        src="/link--next-page.svg"
      />
      <footer className="w-[1474px] h-[407px] relative bg-white hidden max-w-full z-[2]" />
      <main className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[398px] box-border max-w-full mq850:pb-[71px] mq850:box-border mq1225:pb-[109px] mq1225:box-border">
        <section className="w-[1280px] flex flex-col items-end justify-start gap-[57px] max-w-full mq850:gap-7">
          <Container2 />
          <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[68px] pr-[63px] box-border max-w-full mq1225:pl-[34px] mq1225:pr-[31px] mq1225:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[79px] max-w-full mq850:gap-5 mq1225:gap-[39px]">
              <div className="w-[679.4px] flex flex-col items-start justify-start pt-0 px-0 pb-[31.4px] box-border gap-[26.6px] max-w-full">
                <div className="relative text-19xl-4 leading-[50px] font-extrabold font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left inline-block max-w-full mq450:text-4xl mq450:leading-[30px] mq850:text-12xl mq850:leading-[40px]">
                  Addis Ababa, Ethiopia
                </div>
                <div className="self-stretch relative text-base-3 leading-[22px] font-wwwtripadvisorcom-inter-black-463 text-darkslategray-200 text-left">
                  Often called the capital of Africa, Addis Ababa is a vibrant
                  center of economic, social, and political activity, hosting
                  key institutions like the African Union and the United Nations
                  Economic Commission for Africa. The city's diverse population
                  is mirrored in its numerous churches, mosques, and museums,
                  such as the Ethiopian National Museum, which features the
                  fossilized remains of Dinkinesh, also known as Lucy, the
                  Australopithecine discovered in the region in the 1970s.
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[19px] pl-[5px] pr-0 box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[57px] max-w-full mq850:gap-7">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[27px] max-w-full">
                    <div className="flex flex-row items-start justify-start py-0 px-2">
                      <div className="relative text-6xl-3 leading-[34px] font-extrabold font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left mq450:text-xl mq450:leading-[27px]">
                        Plan your trip
                      </div>
                    </div>
                    <div className="self-stretch rounded-2xl flex flex-col items-start justify-start pt-8 px-[37px] pb-[76px] box-border gap-[25px] bg-[url('/background6@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
                      <div className="flex flex-row items-start justify-start py-0 px-[11px]">
                        <div className="flex flex-row items-start justify-start gap-[7.8px]">
                          <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                            <div className="relative text-xs-4 leading-[14px] font-wwwtripadvisorcom-inter-black-463 text-white text-left inline-block min-w-[78.1px]">
                              Powered by AI
                            </div>
                          </div>
                          <div className="rounded bg-thistle flex flex-row items-start justify-start pt-1.5 pb-1 pl-2 pr-[7px]">
                            <div className="relative text-3xs-9 leading-[14px] uppercase font-extrabold font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left inline-block min-w-[27px]">
                              BETA
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[1042px] flex flex-col items-start justify-start gap-3 max-w-full">
                        <div className="w-[795px] flex flex-row items-start justify-start py-0 px-[11px] box-border max-w-full">
                          <h1 className="m-0 flex-1 relative text-5xl leading-[56px] font-extrabold font-wwwtripadvisorcom-inter-black-463 text-white text-left inline-block max-w-full mq450:text-lgi mq450:leading-[45px]">
                            Find personalized tips for your next adventure
                          </h1>
                        </div>
                        <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-5 mq1225:flex-wrap">
                          <div className="w-[609px] flex flex-col items-start justify-start gap-9 max-w-full mq850:gap-[18px]">
                            <div className="w-[531px] rounded-11xl bg-white border-gainsboro-200 border-[2px] border-solid box-border overflow-hidden flex flex-row items-start justify-start pt-1 pb-px pl-0 pr-2 max-w-full [row-gap:20px] mq850:flex-wrap mq850:pl-2 mq850:box-border">
                              <img
                                className="h-14 w-14 relative"
                                loading="lazy"
                                alt=""
                                src="/container1.svg"
                              />
                              <div className="flex-1 flex flex-col items-start justify-start pt-[19px] pb-0 pl-0 pr-5 box-border min-w-[271px] max-w-full">
                                <h2 className="m-0 w-[182px] h-[18px] relative text-xl font-normal font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left flex items-center shrink-0 mq450:text-base">
                                  Addis Ababa
                                </h2>
                              </div>
                              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                                <img
                                  className="w-[46px] h-[46px] relative rounded-4xl"
                                  loading="lazy"
                                  alt=""
                                  src="/link.svg"
                                />
                              </div>
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[11px] pr-0 box-border max-w-full">
                              <div className="flex-1 relative text-base leading-[14px] font-wwwtripadvisorcom-inter-black-463 text-white text-left inline-block max-w-full">
                                By city/Street only, not region (i.e Piassa,
                                Addis Ababa, not Oromia, Ethiopia).
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[7px]">
                            <div className="rounded-mini bg-white flex flex-row items-start justify-start pt-1.5 px-[15px] pb-[7px]">
                              <div className="h-[35px] w-40 relative rounded-mini bg-white hidden" />
                              <Rating1 />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2 pr-0 box-border max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[35px] max-w-full mq850:gap-[17px]">
                      <div className="flex flex-row items-start justify-start py-0 px-[3px]">
                        <b className="relative text-2xl-9 leading-[29px] font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left mq450:text-lg mq450:leading-[23px]">
                          Things to do
                        </b>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-x-4 gap-y-3.5 min-h-[730px] max-w-full">
                        <div className="w-[368px] flex flex-col items-start justify-start gap-[8.5px] min-w-[350px] max-w-full">
                          <div className="self-stretch rounded-lg bg-gainsboro-200 overflow-hidden flex flex-row items-start justify-start max-w-full">
                            <div className="flex-1 bg-wwwtripadvisorcom-black flex flex-col items-end justify-start pt-2 px-0 pb-0 box-border relative gap-[182.4px] max-w-full mq450:gap-[91px]">
                              <img
                                className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                                alt=""
                                src="/list--item--picture@2x.png"
                              />
                              <div className="flex flex-row items-start justify-end py-0 px-2">
                                <img
                                  className="h-[35.6px] w-[35.6px] relative rounded-31xl z-[1]"
                                  loading="lazy"
                                  alt=""
                                  src="/button--remove-from-trip.svg"
                                />
                              </div>
                              <div className="self-stretch [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.6)_75%)] overflow-x-auto flex flex-row items-start justify-center pt-[29.1px] px-5 pb-[13.1px] gap-[13.8px] z-[1]">
                                <div className="h-[7.8px] w-[7.8px] relative rounded-5xs-8 bg-white shrink-0" />
                                <div className="h-1.5 w-1.5 relative rounded-md bg-lightgray shrink-0" />
                                <div className="h-1.5 w-1.5 relative rounded-md bg-lightgray shrink-0" />
                                <div className="h-1.5 w-1.5 relative rounded-md bg-lightgray shrink-0" />
                                <div className="h-1.5 w-1.5 relative rounded-md bg-lightgray shrink-0" />
                              </div>
                            </div>
                          </div>
                          <b className="h-[18.4px] relative text-[16.3px] leading-[22px] flex font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left items-center shrink-0">
                            Ethnological Museum
                          </b>
                          <div className="flex flex-row items-start justify-start gap-3">
                            <div className="flex flex-row items-start justify-start gap-0.5 shrink-0">
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-5@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-5@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-5@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-5@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <Rating
                                vector="/museum-ratings.svg"
                                group="/group-5@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                            </div>
                            <div className="w-[21.8px] relative text-xs-4 leading-[14px] font-wwwtripadvisorcom-inter-black-463 text-darkslategray-200 text-left flex items-center shrink-0">
                              26
                            </div>
                          </div>
                          <div className="relative text-sm-3 leading-[17px] font-wwwtripadvisorcom-inter-black-463 text-darkslategray-200 text-left inline-block min-w-[127px]">
                            Speciality Museums
                          </div>
                        </div>
                        <CityTour
                          listItemPicture="/list--item--picture-1@2x.png"
                          holyTrinityCathedral="Holy Trinity Cathedral"
                          prop="630"
                          ratingStarHeight="12px"
                          ratingStarHeight="12px"
                          ratingStarHeight="12px"
                          ratingStarHeight="12px"
                          ratingStarWidth="12px"
                          ratingStarWidth="12px"
                          ratingStarWidth="12px"
                          ratingStarWidth="12px"
                          groupIconRight="0%"
                          groupIconRight="0%"
                          groupIconRight="0%"
                          groupIconRight="0%"
                          groupIconLeft="50%"
                          groupIconLeft="50%"
                          groupIconLeft="50%"
                          groupIconLeft="50%"
                        />
                        <div className="w-[368px] flex flex-col items-start justify-start gap-[8.6px] min-w-[350px] max-w-full">
                          <div className="self-stretch rounded-lg bg-gainsboro-200 overflow-hidden flex flex-row items-start justify-start max-w-full">
                            <div className="flex-1 bg-wwwtripadvisorcom-black flex flex-col items-end justify-start pt-2 px-0 pb-0 box-border relative gap-[182.4px] max-w-full mq450:gap-[91px]">
                              <img
                                className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                                alt=""
                                src="/list--item--picture-2@2x.png"
                              />
                              <img className="flex flex-row items-start justify-end py-0 px-2" />
                              <div className="self-stretch [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.6)_75%)] overflow-x-auto flex flex-row items-start justify-center pt-[29.1px] px-5 pb-[13.1px] gap-[13.8px] z-[1]">
                                <div className="h-[7.8px] w-[7.8px] relative rounded-5xs-8 bg-white shrink-0" />
                                <div className="h-1.5 w-1.5 relative rounded-md bg-lightgray shrink-0" />
                                <div className="h-1.5 w-1.5 relative rounded-md bg-lightgray shrink-0" />
                                <div className="h-1.5 w-1.5 relative rounded-md bg-lightgray shrink-0" />
                                <div className="h-1.5 w-1.5 relative rounded-md bg-lightgray shrink-0" />
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-start gap-[4.8px]">
                            <div className="self-stretch h-[22px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[1.6px] px-0 pb-0 box-border">
                              <b className="relative text-[16.3px] leading-[22px] inline-block font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left min-w-[83px]">
                                Unity Park
                              </b>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[7.6px]">
                              <div className="flex flex-row items-start justify-start gap-0.5">
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-5@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-5@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-5@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-5@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <Rating
                                  vector="/museum-ratings.svg"
                                  group="/group-5@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                              </div>
                              <div className="relative text-xs leading-[14px] font-wwwtripadvisorcom-inter-black-463 text-darkslategray-200 text-left inline-block min-w-[14.6px]">
                                74
                              </div>
                            </div>
                          </div>
                          <div className="relative text-sm-3 leading-[17px] font-wwwtripadvisorcom-inter-black-463 text-darkslategray-200 text-left">
                            Government Buildings, Historic Sites
                          </div>
                        </div>
                        <div className="w-[368px] flex flex-col items-start justify-start gap-[7.9px] min-w-[350px] max-w-full">
                          <div className="self-stretch rounded-lg bg-gainsboro-200 overflow-hidden flex flex-row items-start justify-start max-w-full">
                            <div className="flex-1 bg-wwwtripadvisorcom-black flex flex-col items-end justify-start pt-2 px-0 pb-0 box-border relative gap-[182.4px] max-w-full mq450:gap-[91px]">
                              <img
                                className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                                alt=""
                                src="/list--item--picture-3@2x.png"
                              />
                              <div className="flex flex-row items-start justify-end py-0 px-2">
                                <img
                                  className="h-[35.6px] w-[35.6px] relative rounded-31xl z-[1]"
                                  loading="lazy"
                                  alt=""
                                  src="/button--remove-from-trip.svg"
                                />
                              </div>
                              <div className="self-stretch [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.6)_75%)] overflow-x-auto flex flex-row items-end justify-center pt-[29.1px] px-5 pb-[13.1px] gap-[13.8px] z-[1]">
                                <div className="h-[7.8px] w-[7.8px] relative rounded-5xs-8 bg-white shrink-0" />
                                <div className="h-1.5 w-1.5 relative rounded-md bg-lightgray shrink-0" />
                                <div className="h-1.5 w-1.5 relative rounded-md bg-lightgray shrink-0" />
                                <div className="h-1.5 w-1.5 relative rounded-md bg-lightgray shrink-0" />
                                <div className="h-1.5 w-1.5 relative rounded-md bg-lightgray shrink-0" />
                              </div>
                            </div>
                          </div>
                          <b className="h-[18.4px] relative text-base-7 leading-[22px] flex font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left items-center shrink-0">
                            Chiromeda Market
                          </b>
                          <div className="flex flex-row items-start justify-start gap-[7.6px]">
                            <div className="flex flex-row items-start justify-start gap-0.5">
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-5@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-5@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-5@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <RatingStar
                                vector="/museum-ratings.svg"
                                group="/group-5@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                              <Rating
                                vector="/museum-ratings.svg"
                                group="/group-5@2x.png"
                                ratingStarHeight="12px"
                                ratingStarWidth="12px"
                                groupIconRight="0%"
                                groupIconLeft="50%"
                              />
                            </div>
                            <div className="relative text-xs-4 leading-[14px] font-wwwtripadvisorcom-inter-black-463 text-darkslategray-200 text-left inline-block min-w-[15px]">
                              46
                            </div>
                          </div>
                          <div className="relative text-sm-3 leading-[17px] font-wwwtripadvisorcom-inter-black-463 text-darkslategray-200 text-left">{`Flea & Street Markets`}</div>
                        </div>
                        <div className="w-[368px] flex flex-col items-start justify-start gap-[8.6px] min-w-[350px] max-w-full">
                          <div className="self-stretch rounded-lg bg-gainsboro-200 overflow-hidden flex flex-row items-start justify-start max-w-full">
                            <div className="flex-1 bg-wwwtripadvisorcom-black flex flex-col items-start justify-end pt-[226px] px-0 pb-0 box-border relative max-w-full">
                              <div className="self-stretch [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.6)_75%)] overflow-x-auto flex flex-row items-end justify-center pt-[29.1px] px-5 pb-[13.1px] gap-[13.8px]">
                                <div className="h-[7.8px] w-[7.8px] relative rounded-5xs-8 bg-white shrink-0" />
                                <div className="h-1.5 w-1.5 relative rounded-md bg-lightgray shrink-0" />
                                <div className="h-1.5 w-1.5 relative rounded-md bg-lightgray shrink-0" />
                                <div className="h-1.5 w-1.5 relative rounded-md bg-lightgray shrink-0" />
                                <div className="h-1.5 w-1.5 relative rounded-md bg-lightgray shrink-0" />
                              </div>
                              <div className="w-full !m-[0] absolute top-[0.2px] left-[0.4px] flex flex-row items-start justify-start max-w-full h-full">
                                <img
                                  className="h-[276px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                                  alt=""
                                  src="/image-50@2x.png"
                                />
                                <img
                                  className="h-[35.6px] w-[35.6px] absolute !m-[0] top-[7.8px] right-[8.4px] rounded-31xl z-[1]"
                                  loading="lazy"
                                  alt=""
                                  src="/button--save-to-a-trip.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-start gap-[4.8px]">
                            <div className="self-stretch h-[22px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[1.6px] px-0 pb-0 box-border">
                              <b className="relative text-base-9 leading-[22px] inline-block font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left min-w-[120px]">
                                Adadi Maryam
                              </b>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[7.6px]">
                              <div className="flex flex-row items-start justify-start gap-0.5">
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-5@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-5@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-5@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-5@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <Rating
                                  vector="/museum-ratings.svg"
                                  group="/group-5@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                              </div>
                              <div className="relative text-xs leading-[14px] font-wwwtripadvisorcom-inter-black-463 text-darkslategray-200 text-left inline-block min-w-[14.6px]">
                                77
                              </div>
                            </div>
                          </div>
                          <div className="relative text-sm-6 leading-[17px] font-wwwtripadvisorcom-inter-black-463 text-darkslategray-200 text-left">{`Historic Sites, Churches & Cathedrals`}</div>
                        </div>
                        <CityTour
                          listItemPicture="/list--item--picture-4@2x.png"
                          holyTrinityCathedral="Bole Medhane Alem Cathedral"
                          prop="49"
                          propMinWidth="15px"
                          ratingStarHeight="12px"
                          ratingStarHeight="12px"
                          ratingStarHeight="12px"
                          ratingStarHeight="12px"
                          ratingStarWidth="12px"
                          ratingStarWidth="12px"
                          ratingStarWidth="12px"
                          ratingStarWidth="12px"
                          groupIconRight="0%"
                          groupIconRight="0%"
                          groupIconRight="0%"
                          groupIconRight="0%"
                          groupIconLeft="50%"
                          groupIconLeft="50%"
                          groupIconLeft="50%"
                          groupIconLeft="50%"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[9px] pr-1 box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[39px] max-w-full mq850:gap-[19px]">
                  <div className="flex flex-row items-start justify-start py-0 px-1">
                    <h1 className="m-0 relative text-5xl leading-[29px] font-bold font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left mq450:text-lgi mq450:leading-[23px]">
                      Nearby Wonders
                    </h1>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-9 max-w-full mq850:gap-[18px]">
                    <div className="self-stretch overflow-auto flex flex-row items-start justify-start py-1 pl-1 pr-0 box-border gap-[111px] max-w-full mq450:gap-7 mq850:gap-[55px]">
                      <div className="w-[1319px] flex flex-col items-end justify-start py-0 pl-0 pr-[51px] box-border shrink-0 max-w-[117%] mq1225:pr-[25px] mq1225:box-border">
                        <div className="mr-[-91.8px] w-[1359.5px] flex flex-row items-start justify-start flex-wrap content-start gap-4 max-w-[108%] shrink-0">
                          <div
                            className="w-[270px] flex flex-col items-start justify-start gap-1.5 cursor-pointer"
                            onClick={onItemContainerClick}
                          >
                            <div className="self-stretch flex flex-row items-start justify-end pt-2 px-2 pb-[226.4px] relative">
                              <img
                                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg max-w-full overflow-hidden max-h-full object-cover"
                                alt=""
                                src="/picture4@2x.png"
                              />
                              <img
                                className="h-[35.6px] w-[35.6px] relative rounded-31xl z-[1]"
                                loading="lazy"
                                alt=""
                                src="/button--save-to-a-trip.svg"
                              />
                            </div>
                            <div className="self-stretch h-[22px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[1.6px] px-0 pb-0 box-border">
                              <b className="relative text-base-9 leading-[22px] font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left">
                                Addis Ababa Layover
                              </b>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[7.6px]">
                              <div className="flex flex-row items-start justify-start gap-0.5">
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-5@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-5@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-5@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-5@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <Rating
                                  vector="/museum-ratings.svg"
                                  group="/group-5@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                              </div>
                              <div className="relative text-xs-4 leading-[14px] font-wwwtripadvisorcom-inter-black-463 text-darkslategray-200 text-left inline-block min-w-[15px]">
                                48
                              </div>
                            </div>
                            <b className="w-[148px] relative text-smi-9 leading-[17px] flex font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left items-center">
                              from $46 per adult
                            </b>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start gap-4 min-w-[697px] max-w-full mq1225:flex-wrap mq1225:min-w-full">
                            <div className="w-[270px] flex flex-col items-start justify-start gap-[8.7px]">
                              <div className="self-stretch flex flex-row items-start justify-end pt-2 px-2 pb-[226.4px] relative">
                                <img
                                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg max-w-full overflow-hidden max-h-full object-cover"
                                  alt=""
                                  src="/picture-17@2x.png"
                                />
                                <img
                                  className="h-[35.6px] w-[35.6px] relative rounded-31xl z-[1]"
                                  loading="lazy"
                                  alt=""
                                  src="/button--remove-from-trip.svg"
                                />
                              </div>
                              <b className="w-[251.2px] h-[40.4px] relative text-[16.6px] leading-[22px] flex font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left items-center shrink-0">
                                <span className="w-full">
                                  <p className="m-0">
                                    Dire Dewa Authentic Private
                                  </p>
                                  <p className="m-0">City Tour</p>
                                </span>
                              </b>
                              <div className="flex flex-row items-start justify-start gap-[7.6px]">
                                <div className="flex flex-row items-start justify-start gap-0.5">
                                  <RatingStar
                                    vector="/museum-ratings.svg"
                                    group="/group-5@2x.png"
                                    ratingStarHeight="12px"
                                    ratingStarWidth="12px"
                                    groupIconRight="0%"
                                    groupIconLeft="50%"
                                  />
                                  <RatingStar
                                    vector="/museum-ratings.svg"
                                    group="/group-5@2x.png"
                                    ratingStarHeight="12px"
                                    ratingStarWidth="12px"
                                    groupIconRight="0%"
                                    groupIconLeft="50%"
                                  />
                                  <RatingStar
                                    vector="/museum-ratings.svg"
                                    group="/group-5@2x.png"
                                    ratingStarHeight="12px"
                                    ratingStarWidth="12px"
                                    groupIconRight="0%"
                                    groupIconLeft="50%"
                                  />
                                  <RatingStar
                                    vector="/museum-ratings.svg"
                                    group="/group-5@2x.png"
                                    ratingStarHeight="12px"
                                    ratingStarWidth="12px"
                                    groupIconRight="0%"
                                    groupIconLeft="50%"
                                  />
                                  <Rating
                                    vector="/museum-ratings.svg"
                                    group="/group-5@2x.png"
                                    ratingStarHeight="12px"
                                    ratingStarWidth="12px"
                                    groupIconRight="0%"
                                    groupIconLeft="50%"
                                  />
                                </div>
                                <div className="relative text-xs-4 leading-[14px] font-wwwtripadvisorcom-inter-black-463 text-darkslategray-200 text-left inline-block min-w-[15px]">
                                  94
                                </div>
                              </div>
                            </div>
                            <div className="w-[270px] flex flex-col items-start justify-start gap-2">
                              <div className="self-stretch flex flex-row items-start justify-end pt-2 px-2 pb-[226.4px] relative">
                                <img
                                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg max-w-full overflow-hidden max-h-full object-cover"
                                  alt=""
                                  src="/picture-21@2x.png"
                                />
                                <img
                                  className="h-[35.6px] w-[35.6px] relative rounded-31xl z-[1]"
                                  loading="lazy"
                                  alt=""
                                  src="/button--save-to-a-trip.svg"
                                />
                              </div>
                              <div className="self-stretch flex flex-col items-start justify-start gap-[0.8px]">
                                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-0.5 px-0 pb-[7px]">
                                  <b className="h-9 w-[282px] relative text-[16.6px] leading-[22px] flex font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left items-center shrink-0">
                                    A quick tour on south shore of the huge
                                    inland Lake Tana
                                  </b>
                                </div>
                                <div className="flex flex-row items-start justify-start gap-[7.6px]">
                                  <div className="flex flex-row items-start justify-start gap-0.5">
                                    <RatingStar
                                      vector="/museum-ratings.svg"
                                      group="/group-5@2x.png"
                                      ratingStarHeight="12px"
                                      ratingStarWidth="12px"
                                      groupIconRight="0%"
                                      groupIconLeft="50%"
                                    />
                                    <RatingStar
                                      vector="/museum-ratings.svg"
                                      group="/group-5@2x.png"
                                      ratingStarHeight="12px"
                                      ratingStarWidth="12px"
                                      groupIconRight="0%"
                                      groupIconLeft="50%"
                                    />
                                    <RatingStar
                                      vector="/museum-ratings.svg"
                                      group="/group-5@2x.png"
                                      ratingStarHeight="12px"
                                      ratingStarWidth="12px"
                                      groupIconRight="0%"
                                      groupIconLeft="50%"
                                    />
                                    <RatingStar
                                      vector="/museum-ratings.svg"
                                      group="/group-5@2x.png"
                                      ratingStarHeight="12px"
                                      ratingStarWidth="12px"
                                      groupIconRight="0%"
                                      groupIconLeft="50%"
                                    />
                                    <Rating
                                      vector="/museum-ratings.svg"
                                      group="/group-5@2x.png"
                                      ratingStarHeight="12px"
                                      ratingStarWidth="12px"
                                      groupIconRight="0%"
                                      groupIconLeft="50%"
                                    />
                                  </div>
                                  <div className="relative text-xs leading-[14px] font-wwwtripadvisorcom-inter-black-463 text-darkslategray-200 text-left inline-block min-w-[14.6px]">
                                    41
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-start justify-start gap-4 min-w-[326px] max-w-full mq850:flex-wrap">
                              <div className="flex-1 flex flex-col items-start justify-start gap-[7.9px] min-w-[175px]">
                                <div className="self-stretch flex flex-row items-start justify-end pt-2 px-2 pb-[226.4px] relative">
                                  <img
                                    className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg max-w-full overflow-hidden max-h-full object-cover"
                                    alt=""
                                    src="/picture-31@2x.png"
                                  />
                                  <img
                                    className="h-[35.6px] w-[35.6px] relative rounded-31xl z-[1]"
                                    alt=""
                                    src="/button--save-to-a-trip.svg"
                                  />
                                </div>
                                <b className="self-stretch h-[18.4px] relative text-[16.6px] leading-[22px] flex font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left items-center shrink-0">
                                  Jimma City - Half Day Tour
                                </b>
                                <div className="flex flex-row items-start justify-start gap-[7.6px]">
                                  <div className="flex flex-row items-start justify-start gap-0.5">
                                    <RatingStar
                                      vector="/museum-ratings.svg"
                                      group="/group-5@2x.png"
                                      ratingStarHeight="12px"
                                      ratingStarWidth="12px"
                                      groupIconRight="0%"
                                      groupIconLeft="50%"
                                    />
                                    <RatingStar
                                      vector="/museum-ratings.svg"
                                      group="/group-5@2x.png"
                                      ratingStarHeight="12px"
                                      ratingStarWidth="12px"
                                      groupIconRight="0%"
                                      groupIconLeft="50%"
                                    />
                                    <RatingStar
                                      vector="/museum-ratings.svg"
                                      group="/group-5@2x.png"
                                      ratingStarHeight="12px"
                                      ratingStarWidth="12px"
                                      groupIconRight="0%"
                                      groupIconLeft="50%"
                                    />
                                    <RatingStar
                                      vector="/museum-ratings.svg"
                                      group="/group-5@2x.png"
                                      ratingStarHeight="12px"
                                      ratingStarWidth="12px"
                                      groupIconRight="0%"
                                      groupIconLeft="50%"
                                    />
                                    <Rating
                                      vector="/museum-ratings.svg"
                                      group="/group-5@2x.png"
                                      ratingStarHeight="12px"
                                      ratingStarWidth="12px"
                                      groupIconRight="0%"
                                      groupIconLeft="50%"
                                    />
                                  </div>
                                  <div className="relative text-xs leading-[14px] font-wwwtripadvisorcom-inter-black-463 text-darkslategray-200 text-left inline-block min-w-[14.6px]">
                                    18
                                  </div>
                                </div>
                                <b className="relative text-smi-8 leading-[17px] inline-block font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left min-w-[117px]">
                                  from $55 per adult
                                </b>
                              </div>
                              <div className="w-[215.5px] flex flex-col items-start justify-start gap-[9.6px] min-w-[215.5px] mq850:flex-1">
                                <div className="w-[175px] h-[270px] flex flex-row items-start justify-start relative">
                                  <div className="h-full w-[270px] absolute !m-[0] top-[0px] right-[-95px] bottom-[0px]">
                                    <img
                                      className="absolute top-[0px] left-[0px] rounded-lg w-full h-full overflow-hidden object-cover"
                                      alt=""
                                      src="/picture-41@2x.png"
                                    />
                                    <img
                                      className="absolute top-[8px] left-[226.4px] rounded-31xl w-[35.6px] h-[35.6px] z-[1]"
                                      alt=""
                                      src="/button--save-to-a-trip.svg"
                                    />
                                  </div>
                                </div>
                                <b className="self-stretch h-[62.4px] relative text-[16.6px] leading-[22px] flex font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left items-center shrink-0">
                                  <span>
                                    <p className="m-0">
                                      Hidden Treasures of Addis
                                    </p>
                                    <p className="m-0">
                                      Ababa - Food, Culture and
                                    </p>
                                    <p className="m-0">History Tour</p>
                                  </span>
                                </b>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[981.7px] flex flex-col items-start justify-start gap-[5px] max-w-full">
                          <div className="w-[948.6px] flex flex-row items-end justify-between max-w-full gap-5 mq850:flex-wrap">
                            <div className="flex flex-row items-start justify-start gap-[169.7px] max-w-full mq450:gap-[85px] mq850:flex-wrap">
                              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                                <b className="relative text-smi-8 leading-[17px] inline-block font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left min-w-[116.3px] shrink-0">
                                  from $75 per adult
                                </b>
                              </div>
                              <b className="relative text-smi-8 leading-[17px] inline-block font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left min-w-[116.3px] shrink-0">
                                from $75 per adult
                              </b>
                            </div>
                            <div className="h-[13.2px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border">
                              <div className="flex-1 flex flex-row items-start justify-start gap-2">
                                <img
                                  className="self-stretch w-[68px] relative max-h-full min-h-[12px]"
                                  alt=""
                                  src="/svg-18.svg"
                                />
                                <div className="self-stretch w-[14.6px] relative text-xs leading-[14px] font-wwwtripadvisorcom-inter-black-463 text-darkslategray-200 text-left flex items-center shrink-0">
                                  14
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch h-[17px] flex flex-row items-start justify-end">
                            <b className="self-stretch w-[123.7px] relative text-smi-8 leading-[17px] flex font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left items-center shrink-0">
                              from $100 per adult
                            </b>
                          </div>
                        </div>
                      </div>
                      <div className="w-[-111px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-4">
                        <div className="w-[270px] flex flex-col items-start justify-start gap-[8.7px] shrink-0">
                          <div className="self-stretch h-[270px] flex flex-row items-start justify-start relative">
                            <img
                              className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg max-w-full overflow-hidden max-h-full object-cover"
                              alt=""
                              src="/picture-51@2x.png"
                            />
                            <img
                              className="h-[35.6px] w-[35.6px] absolute !m-[0] top-[8px] right-[8px] rounded-31xl z-[1]"
                              alt=""
                              src="/button--save-to-a-trip.svg"
                            />
                          </div>
                          <b className="w-[258px] h-[40.4px] relative text-base-9 leading-[22px] flex font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left items-center shrink-0">
                            <span className="w-full">
                              <p className="m-0">
                                Day trip to Adadi Mariyam, Tiya
                              </p>
                              <p className="m-0">and Melka kunture</p>
                            </span>
                          </b>
                          <div className="w-[117px] flex flex-col items-start justify-start gap-[4.2px]">
                            <div className="flex flex-row items-start justify-start gap-2">
                              <img
                                className="h-3 w-[68px] relative"
                                alt=""
                                src="/svg-24.svg"
                              />
                              <div className="w-2 relative text-xs leading-[14px] font-wwwtripadvisorcom-inter-black-463 text-darkslategray-200 text-left flex items-center shrink-0">
                                4
                              </div>
                            </div>
                            <b className="self-stretch relative text-smi-8 leading-[17px] font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left">
                              from $58 per adult
                            </b>
                          </div>
                        </div>
                        <div className="w-[270px] flex flex-col items-start justify-start gap-[8.7px] shrink-0">
                          <div className="self-stretch h-[270px] relative rounded-lg bg-whitesmoke-100 overflow-hidden shrink-0">
                            <img
                              className="absolute top-[8px] left-[226.4px] rounded-31xl w-[35.6px] h-[35.6px] z-[1]"
                              alt=""
                              src="/button--save-to-a-trip.svg"
                            />
                          </div>
                          <b className="w-[190px] h-[18.4px] relative text-[16.3px] leading-[22px] flex font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left items-center shrink-0">
                            4 Day Omo Valley Tours
                          </b>
                          <div className="w-[125px] flex flex-col items-start justify-start gap-[4.2px]">
                            <div className="flex flex-row items-start justify-start gap-2">
                              <img
                                className="h-3 w-[68px] relative"
                                alt=""
                                src="/svg-18.svg"
                              />
                              <div className="w-[15px] relative text-xs-8 leading-[14px] font-wwwtripadvisorcom-inter-black-463 text-darkslategray-200 text-left flex items-center shrink-0">
                                26
                              </div>
                            </div>
                            <b className="self-stretch relative text-smi-8 leading-[17px] font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left">
                              from $599 per adult
                            </b>
                          </div>
                        </div>
                        <div className="w-[270px] flex flex-col items-start justify-start gap-[7.8px] shrink-0">
                          <div className="self-stretch h-[270px] relative rounded-lg bg-whitesmoke-100 overflow-hidden shrink-0">
                            <img
                              className="absolute top-[8px] left-[226.4px] rounded-31xl w-[35.6px] h-[35.6px] z-[1]"
                              alt=""
                              src="/button--save-to-a-trip.svg"
                            />
                          </div>
                          <b className="w-60 h-[40.4px] relative text-base-5 leading-[22px] flex font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left items-center shrink-0">
                            <span className="w-full">
                              <p className="m-0">
                                Lalibela 3 Days/ 2 Nights Tour
                              </p>
                              <p className="m-0">package</p>
                            </span>
                          </b>
                          <div className="h-[12.2px] flex flex-row items-start justify-start gap-2">
                            <img
                              className="self-stretch w-[68px] relative max-h-full min-h-[12px]"
                              alt=""
                              src="/svg-18.svg"
                            />
                            <div className="self-stretch w-[14.6px] relative text-xs leading-[14px] font-wwwtripadvisorcom-inter-black-463 text-darkslategray-200 text-left flex items-center shrink-0">
                              11
                            </div>
                          </div>
                          <b className="w-[125px] relative text-smi-7 leading-[17px] flex font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left items-center">
                            from $449 per adult
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch overflow-auto flex flex-row items-start justify-start pt-px pb-1 pl-1 pr-0 box-border gap-[111px] max-w-full mq450:gap-7 mq850:gap-[55px]">
                      <div className="w-[1319px] flex flex-row items-start justify-start gap-4 shrink-0 max-w-[117%] mq450:flex-wrap mq850:flex-wrap mq1225:flex-wrap mq1500:flex-wrap">
                        <div className="w-[842px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[842px] max-w-full shrink-0 mq450:flex-1 mq850:flex-1 mq1225:flex-1 mq1225:min-w-full mq1500:flex-1">
                          <div className="self-stretch h-[385px] relative shrink-0">
                            <div className="absolute top-[0px] left-[0px] w-[270px] flex flex-col items-start justify-start gap-[8.7px]">
                              <div className="self-stretch flex flex-row items-start justify-end pt-2 px-2 pb-[226.4px] relative">
                                <img
                                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg max-w-full overflow-hidden max-h-full object-cover"
                                  alt=""
                                  src="/picture-61@2x.png"
                                />
                                <img
                                  className="h-[35.6px] w-[35.6px] relative rounded-31xl z-[1]"
                                  loading="lazy"
                                  alt=""
                                  src="/button--save-to-a-trip.svg"
                                />
                              </div>
                              <b className="w-[223.7px] h-[40.4px] relative text-[16.3px] leading-[22px] flex font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left items-center shrink-0">{`Full-Day Private Adadi Maryam Tour `}</b>
                              <div className="flex flex-col items-start justify-start gap-[4.2px]">
                                <div className="flex flex-row items-start justify-start gap-[7.6px]">
                                  <div className="flex flex-row items-start justify-start gap-0.5">
                                    <RatingStar
                                      vector="/museum-ratings.svg"
                                      group="/group-5@2x.png"
                                      ratingStarHeight="12px"
                                      ratingStarWidth="12px"
                                      groupIconRight="0%"
                                      groupIconLeft="50%"
                                    />
                                    <RatingStar
                                      vector="/museum-ratings.svg"
                                      group="/group-5@2x.png"
                                      ratingStarHeight="12px"
                                      ratingStarWidth="12px"
                                      groupIconRight="0%"
                                      groupIconLeft="50%"
                                    />
                                    <RatingStar
                                      vector="/museum-ratings.svg"
                                      group="/group-5@2x.png"
                                      ratingStarHeight="12px"
                                      ratingStarWidth="12px"
                                      groupIconRight="0%"
                                      groupIconLeft="50%"
                                    />
                                    <RatingStar
                                      vector="/museum-ratings.svg"
                                      group="/group-5@2x.png"
                                      ratingStarHeight="12px"
                                      ratingStarWidth="12px"
                                      groupIconRight="0%"
                                      groupIconLeft="50%"
                                    />
                                    <Rating
                                      vector="/museum-ratings.svg"
                                      group="/group-5@2x.png"
                                      ratingStarHeight="12px"
                                      ratingStarWidth="12px"
                                      groupIconRight="0%"
                                      groupIconLeft="50%"
                                    />
                                  </div>
                                  <div className="relative text-xs-6 leading-[14px] font-wwwtripadvisorcom-inter-black-463 text-darkslategray-200 text-left inline-block min-w-[15px]">
                                    89
                                  </div>
                                </div>
                                <b className="relative text-smi-7 leading-[17px] inline-block font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left min-w-[127.6px]">
                                  from $160 per group
                                </b>
                              </div>
                            </div>
                            <div className="absolute top-[0px] left-[286px] w-[270px] flex flex-col items-start justify-start gap-[8.7px]">
                              <div className="self-stretch flex flex-row items-start justify-end pt-2 px-2 pb-[226.4px] relative">
                                <img
                                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg max-w-full overflow-hidden max-h-full object-cover"
                                  alt=""
                                  src="/picture-71@2x.png"
                                />
                                <img
                                  className="h-[35.6px] w-[35.6px] relative rounded-31xl z-[1]"
                                  loading="lazy"
                                  alt=""
                                  src="/button--save-to-a-trip.svg"
                                />
                              </div>
                              <b className="h-[62.4px] relative text-[16.6px] leading-[22px] flex font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left items-center shrink-0">
                                <span>
                                  <p className="m-0">
                                    Day Trip From Addis Ababa To
                                  </p>
                                  <p className="m-0">{`Debre Libanos & Portuguese`}</p>
                                  <p className="m-0">Bridge</p>
                                </span>
                              </b>
                              <div className="flex flex-col items-start justify-start gap-[4.2px]">
                                <div className="flex flex-row items-start justify-start gap-[7.6px]">
                                  <div className="flex flex-row items-start justify-start gap-0.5">
                                    <RatingStar
                                      vector="/museum-ratings.svg"
                                      group="/group-5@2x.png"
                                      ratingStarHeight="12px"
                                      ratingStarWidth="12px"
                                      groupIconRight="0%"
                                      groupIconLeft="50%"
                                    />
                                    <RatingStar
                                      vector="/museum-ratings.svg"
                                      group="/group-5@2x.png"
                                      ratingStarHeight="12px"
                                      ratingStarWidth="12px"
                                      groupIconRight="0%"
                                      groupIconLeft="50%"
                                    />
                                    <RatingStar
                                      vector="/museum-ratings.svg"
                                      group="/group-5@2x.png"
                                      ratingStarHeight="12px"
                                      ratingStarWidth="12px"
                                      groupIconRight="0%"
                                      groupIconLeft="50%"
                                    />
                                    <RatingStar
                                      vector="/museum-ratings.svg"
                                      group="/group-5@2x.png"
                                      ratingStarHeight="12px"
                                      ratingStarWidth="12px"
                                      groupIconRight="0%"
                                      groupIconLeft="50%"
                                    />
                                    <Rating
                                      vector="/museum-ratings.svg"
                                      group="/group-5@2x.png"
                                      ratingStarHeight="12px"
                                      ratingStarWidth="12px"
                                      groupIconRight="0%"
                                      groupIconLeft="50%"
                                    />
                                  </div>
                                  <div className="relative text-xs-6 leading-[14px] font-wwwtripadvisorcom-inter-black-463 text-darkslategray-200 text-left inline-block min-w-[15px]">
                                    60
                                  </div>
                                </div>
                                <b className="relative text-smi-8 leading-[17px] inline-block font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left min-w-[117.5px]">
                                  from $80 per adult
                                </b>
                              </div>
                            </div>
                            <div className="absolute top-[0px] left-[572px] w-[270px] flex flex-col items-start justify-start gap-[6.7px]">
                              <div className="self-stretch flex flex-row items-start justify-end pt-2 px-2 pb-[226.4px] relative">
                                <img
                                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg max-w-full overflow-hidden max-h-full object-cover"
                                  alt=""
                                  src="/picture-81@2x.png"
                                />
                                <img
                                  className="h-[35.6px] w-[35.6px] relative rounded-31xl z-[1]"
                                  loading="lazy"
                                  alt=""
                                  src="/button--save-to-a-trip.svg"
                                />
                              </div>
                              <div className="h-[22px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[1.6px] pb-0 pl-0 pr-9 box-border">
                                <b className="relative text-base-9 leading-[22px] font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left">
                                  Lalibela One Night/two Days
                                </b>
                              </div>
                              <div className="flex flex-row items-start justify-start gap-[7.6px]">
                                <div className="flex flex-row items-start justify-start gap-0.5 shrink-0">
                                  <RatingStar
                                    vector="/museum-ratings.svg"
                                    group="/group-5@2x.png"
                                    ratingStarHeight="12px"
                                    ratingStarWidth="12px"
                                    groupIconRight="0%"
                                    groupIconLeft="50%"
                                  />
                                  <RatingStar
                                    vector="/museum-ratings.svg"
                                    group="/group-5@2x.png"
                                    ratingStarHeight="12px"
                                    ratingStarWidth="12px"
                                    groupIconRight="0%"
                                    groupIconLeft="50%"
                                  />
                                  <RatingStar
                                    vector="/museum-ratings.svg"
                                    group="/group-5@2x.png"
                                    ratingStarHeight="12px"
                                    ratingStarWidth="12px"
                                    groupIconRight="0%"
                                    groupIconLeft="50%"
                                  />
                                  <RatingStar
                                    vector="/museum-ratings.svg"
                                    group="/group-5@2x.png"
                                    ratingStarHeight="12px"
                                    ratingStarWidth="12px"
                                    groupIconRight="0%"
                                    groupIconLeft="50%"
                                  />
                                  <Rating
                                    vector="/museum-ratings.svg"
                                    group="/group-5@2x.png"
                                    ratingStarHeight="12px"
                                    ratingStarWidth="12px"
                                    groupIconRight="0%"
                                    groupIconLeft="50%"
                                  />
                                </div>
                                <div className="relative text-xs leading-[14px] font-wwwtripadvisorcom-inter-black-463 text-darkslategray-200 text-left inline-block min-w-[7.4px] shrink-0">
                                  7
                                </div>
                              </div>
                              <b className="relative text-smi-7 leading-[17px] inline-block font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left min-w-[124.3px]">
                                from $385 per adult
                              </b>
                            </div>
                          </div>
                        </div>
                        <div className="w-[534.6px] flex flex-row items-start justify-start gap-4 min-w-[534.6px] shrink-0 max-w-full mq450:flex-1 mq850:flex-1 mq850:flex-wrap mq850:min-w-full mq1225:flex-1 mq1500:flex-1">
                          <div className="flex-1 flex flex-col items-start justify-start gap-[7.9px] min-w-[175px]">
                            <div className="self-stretch flex flex-row items-start justify-end pt-2 px-2 pb-[226.4px] relative">
                              <img
                                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg max-w-full overflow-hidden max-h-full object-cover"
                                alt=""
                                src="/picture-91@2x.png"
                              />
                              <img
                                className="h-[35.6px] w-[35.6px] relative rounded-31xl z-[1]"
                                alt=""
                                src="/button--save-to-a-trip.svg"
                              />
                            </div>
                            <b className="h-[40.4px] relative text-base-2 leading-[22px] flex font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left items-center shrink-0">
                              <span>
                                <p className="m-0">
                                  Hawassa Culinary Tour - Market,
                                </p>
                                <p className="m-0">{`Food, Coffee Ceremony & more`}</p>
                              </span>
                            </b>
                            <div className="flex flex-row items-start justify-start gap-[7.6px]">
                              <div className="flex flex-row items-start justify-start gap-0.5">
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-5@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-5@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-5@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <RatingStar
                                  vector="/museum-ratings.svg"
                                  group="/group-5@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                                <Rating
                                  vector="/museum-ratings.svg"
                                  group="/group-5@2x.png"
                                  ratingStarHeight="12px"
                                  ratingStarWidth="12px"
                                  groupIconRight="0%"
                                  groupIconLeft="50%"
                                />
                              </div>
                              <div className="relative text-xs leading-[14px] font-wwwtripadvisorcom-inter-black-463 text-darkslategray-200 text-left inline-block min-w-[14.6px]">
                                57
                              </div>
                            </div>
                            <b className="relative text-smi-8 leading-[17px] inline-block font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left min-w-[117px]">
                              from $85 per adult
                            </b>
                          </div>
                          <div className="w-[248.6px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[248.6px] mq850:flex-1">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[8.7px]">
                              <div className="w-[175px] h-[270px] flex flex-row items-start justify-start relative">
                                <div className="h-full w-[270px] absolute !m-[0] top-[0px] right-[-95px] bottom-[0px]">
                                  <img
                                    className="absolute top-[0px] left-[0px] rounded-lg w-full h-full overflow-hidden object-cover"
                                    alt=""
                                    src="/picture-101@2x.png"
                                  />
                                  <img
                                    className="absolute top-[8px] left-[226.4px] rounded-31xl w-[35.6px] h-[35.6px] z-[1]"
                                    alt=""
                                    src="/button--save-to-a-trip.svg"
                                  />
                                </div>
                              </div>
                              <b className="self-stretch h-[40.4px] relative text-base-5 leading-[22px] flex font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left items-center shrink-0">
                                <span>
                                  <p className="m-0">
                                    2 Days Wildlife Safari to Awash
                                  </p>
                                  <p className="m-0">National Park</p>
                                </span>
                              </b>
                              <div className="w-[124.3px] flex flex-col items-start justify-start gap-[4.2px]">
                                <div className="flex flex-row items-start justify-start gap-2">
                                  <img
                                    className="h-3 w-[68px] relative"
                                    loading="lazy"
                                    alt=""
                                    src="/svg-24.svg"
                                  />
                                  <div className="w-[15px] relative text-xs-8 leading-[14px] font-wwwtripadvisorcom-inter-black-463 text-darkslategray-200 text-left flex items-center shrink-0">
                                    20
                                  </div>
                                </div>
                                <b className="self-stretch h-[17px] relative text-smi-7 leading-[17px] flex font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left items-center shrink-0">
                                  from $359 per adult
                                </b>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[1414px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border max-w-[125%] shrink-0">
                        <div className="w-[-111px] overflow-hidden flex flex-row items-start justify-start gap-4 shrink-0">
                          <div className="w-[270px] flex flex-col items-start justify-start gap-[7.8px] shrink-0">
                            <div className="self-stretch h-[270px] relative rounded-lg bg-whitesmoke-100 overflow-hidden shrink-0">
                              <img
                                className="absolute top-[8px] left-[226.4px] rounded-31xl w-[35.6px] h-[35.6px] z-[1]"
                                alt=""
                                src="/button--save-to-a-trip.svg"
                              />
                            </div>
                            <b className="w-[254.4px] h-[18.4px] relative text-base-5 leading-[22px] flex font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left items-center shrink-0">
                              Day Trip to Debre Zeit/ Bishoftu
                            </b>
                            <div className="h-[12.2px] flex flex-row items-start justify-start gap-2">
                              <img
                                className="self-stretch w-[68px] relative max-h-full min-h-[12px]"
                                loading="lazy"
                                alt=""
                                src="/svg-24.svg"
                              />
                              <div className="self-stretch w-[14.6px] relative text-xs leading-[14px] font-wwwtripadvisorcom-inter-black-463 text-darkslategray-200 text-left flex items-center shrink-0">
                                13
                              </div>
                            </div>
                            <b className="w-[117px] relative text-smi-8 leading-[17px] flex font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left items-center">
                              from $85 per adult
                            </b>
                          </div>
                          <div className="w-[270px] flex flex-col items-start justify-start gap-[8.7px] shrink-0">
                            <div className="self-stretch h-[270px] relative rounded-lg bg-whitesmoke-100 overflow-hidden shrink-0">
                              <img
                                className="absolute top-[8px] left-[226.4px] rounded-31xl w-[35.6px] h-[35.6px] z-[1]"
                                alt=""
                                src="/button--save-to-a-trip.svg"
                              />
                            </div>
                            <b className="w-[239.2px] h-[40.4px] relative text-[16.3px] leading-[22px] flex font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left items-center shrink-0">
                              <span className="w-full">
                                <p className="m-0">
                                  5 DAYS Lalibela, Axum, Tigray
                                </p>
                                <p className="m-0">churches and Danakil</p>
                              </span>
                            </b>
                            <div className="w-[134px] flex flex-col items-start justify-start gap-[4.2px]">
                              <div className="flex flex-row items-start justify-start gap-2">
                                <img
                                  className="h-3 w-[68px] relative"
                                  alt=""
                                  src="/svg-18.svg"
                                />
                                <div className="w-[15px] relative text-xs-4 leading-[14px] font-wwwtripadvisorcom-inter-black-463 text-darkslategray-200 text-left flex items-center shrink-0">
                                  33
                                </div>
                              </div>
                              <b className="self-stretch relative text-smi-7 leading-[17px] font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left">
                                from $1,026 per adult
                              </b>
                            </div>
                          </div>
                          <div className="w-[270px] flex flex-col items-start justify-start gap-[7.8px] shrink-0">
                            <div className="self-stretch h-[270px] relative rounded-lg bg-whitesmoke-100 overflow-hidden shrink-0">
                              <img
                                className="absolute top-[8px] left-[226.4px] rounded-31xl w-[35.6px] h-[35.6px] z-[1]"
                                alt=""
                                src="/button--save-to-a-trip.svg"
                              />
                            </div>
                            <b className="self-stretch h-[40.4px] relative text-[16.3px] leading-[22px] flex font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left items-center shrink-0">
                              <span>
                                <p className="m-0">
                                  3 Days Dankile Depression group
                                </p>
                                <p className="m-0">Tours</p>
                              </span>
                            </b>
                            <div className="h-[12.2px] flex flex-row items-start justify-start gap-2">
                              <img
                                className="self-stretch w-[68px] relative max-h-full min-h-[12px]"
                                alt=""
                                src="/svg-18.svg"
                              />
                              <div className="self-stretch w-[14.6px] relative text-xs leading-[14px] font-wwwtripadvisorcom-inter-black-463 text-darkslategray-200 text-left flex items-center shrink-0">
                                21
                              </div>
                            </div>
                            <b className="w-[125.8px] h-[17px] relative text-smi-8 leading-[17px] flex font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left items-center shrink-0">
                              from $450 per adult
                            </b>
                          </div>
                          <div className="w-[270px] flex flex-col items-start justify-start gap-[7.8px] shrink-0">
                            <div className="self-stretch h-[270px] flex flex-row items-start justify-start relative">
                              <img
                                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg max-w-full overflow-hidden max-h-full object-cover"
                                alt=""
                                src="/picture-111@2x.png"
                              />
                              <img
                                className="h-[35.6px] w-[35.6px] absolute !m-[0] top-[8px] right-[8px] rounded-31xl z-[1]"
                                alt=""
                                src="/button--save-to-a-trip.svg"
                              />
                            </div>
                            <b className="self-stretch h-[18.4px] relative text-[16.6px] leading-[22px] flex font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left items-center shrink-0">
                              Addis Ababa City - Half Day Tour
                            </b>
                            <div className="h-[12.2px] flex flex-row items-start justify-start gap-2">
                              <img
                                className="self-stretch w-[68px] relative max-h-full min-h-[12px]"
                                alt=""
                                src="/svg-24.svg"
                              />
                              <div className="self-stretch w-[14.6px] relative text-xs leading-[14px] font-wwwtripadvisorcom-inter-black-463 text-darkslategray-200 text-left flex items-center shrink-0">
                                18
                              </div>
                            </div>
                            <b className="w-[117px] h-[17px] relative text-smi-8 leading-[17px] flex font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left items-center shrink-0">
                              from $55 per adult
                            </b>
                          </div>
                          <div className="w-[270px] flex flex-col items-start justify-start gap-[8.7px] shrink-0">
                            <div className="self-stretch h-[270px] relative rounded-lg bg-whitesmoke-100 overflow-hidden shrink-0">
                              <img
                                className="absolute top-[8px] left-[226.4px] rounded-31xl w-[35.6px] h-[35.6px] z-[1]"
                                alt=""
                                src="/button--save-to-a-trip.svg"
                              />
                            </div>
                            <b className="w-[257.6px] h-[40.4px] relative text-base-5 leading-[22px] flex font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left items-center shrink-0">
                              <span className="w-full">
                                <p className="m-0">
                                  3 Day Danakil Depression Ertale
                                </p>
                                <p className="m-0">and Dallol Tours</p>
                              </span>
                            </b>
                            <div className="w-[126.6px] flex flex-col items-start justify-start gap-[4.2px]">
                              <div className="flex flex-row items-start justify-start gap-2">
                                <img
                                  className="h-3 w-[68px] relative"
                                  alt=""
                                  src="/svg-18.svg"
                                />
                                <div className="w-[15px] relative text-xs-8 leading-[14px] font-wwwtripadvisorcom-inter-black-463 text-darkslategray-200 text-left flex items-center shrink-0">
                                  24
                                </div>
                              </div>
                              <b className="self-stretch h-[17px] relative text-smi-8 leading-[17px] flex font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left items-center shrink-0">
                                from $400 per adult
                              </b>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[170px] pl-[13px] pr-2 box-border max-w-full mq850:pb-[71px] mq850:box-border mq1225:pb-[110px] mq1225:box-border">
                <div className="flex-1 flex flex-col items-start justify-start gap-9 max-w-full mq850:gap-[18px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-6">
                    <div className="flex flex-col items-start justify-start gap-2">
                      <div className="relative text-5xl-5 leading-[34px] font-extrabold font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left mq450:text-xl mq450:leading-[27px]">
                        Browse collections
                      </div>
                      <div className="relative text-base-4 leading-[22px] font-wwwtripadvisorcom-inter-black-463 text-darkslategray-200 text-left">
                        Get ideas on what to do, see, and eat
                      </div>
                    </div>
                    <div className="self-stretch grid flex-row items-start justify-start gap-4 grid-cols-[repeat(4,_minmax(202px,_1fr))] mq450:grid-cols-[minmax(202px,_1fr)] mq1225:justify-center mq1225:grid-cols-[repeat(2,_minmax(202px,_351px))]">
                      <div className="h-[392px] flex flex-col items-start justify-start pt-0 px-0 pb-[3.6px] box-border gap-[10.4px]">
                        <div className="self-stretch flex-1 flex flex-row items-end justify-start relative">
                          <img
                            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg max-w-full overflow-hidden max-h-full object-cover"
                            loading="lazy"
                            alt=""
                            src="/container-11@2x.png"
                          />
                          <div className="flex-1 rounded-t-none rounded-b-lg [background:linear-gradient(0deg,_rgba(0,_0,_0,_0.6),_rgba(0,_0,_0,_0.6)_69.81%,_rgba(0,_0,_0,_0))] flex flex-row items-start justify-start pt-[34.4px] px-4 pb-[18.6px] z-[1]">
                            <b className="h-[53px] relative text-3xl-1 leading-[29px] flex font-wwwtripadvisorcom-inter-black-463 text-white text-left items-center mq450:text-lg mq450:leading-[23px]">
                              <span>
                                <p className="m-0">Ethiopian coffee</p>
                                <p className="m-0">culture</p>
                              </span>
                            </b>
                          </div>
                        </div>
                        <div className="h-4 relative text-base-4 leading-[22px] font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left flex items-center shrink-0">
                          Sip tradition in every cup
                        </div>
                      </div>
                      <div className="h-[392px] flex flex-col items-start justify-start pt-0 px-0 pb-[3.6px] box-border gap-[10.4px]">
                        <div className="self-stretch flex-1 flex flex-row items-end justify-start relative">
                          <img
                            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg max-w-full overflow-hidden max-h-full object-cover"
                            loading="lazy"
                            alt=""
                            src="/container-21@2x.png"
                          />
                          <div className="flex-1 rounded-t-none rounded-b-lg [background:linear-gradient(0deg,_rgba(0,_0,_0,_0.6),_rgba(0,_0,_0,_0.6)_58.44%,_rgba(0,_0,_0,_0))] flex flex-row items-start justify-start pt-[34.4px] px-4 pb-[18.6px] whitespace-nowrap z-[1]">
                            <b className="relative text-2xl-8 leading-[24px] font-wwwtripadvisorcom-inter-black-463 text-white text-left">
                              Ethiopian cuisine
                            </b>
                          </div>
                        </div>
                        <div className="h-4 relative text-[15.5px] leading-[22px] font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left flex items-center shrink-0">
                          Dive into the flavor landscape
                        </div>
                      </div>
                      <div className="h-[392px] flex flex-col items-start justify-start pt-0 px-0 pb-[3.6px] box-border gap-[10.4px]">
                        <div className="self-stretch flex-1 flex flex-row items-end justify-start relative">
                          <img
                            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg max-w-full overflow-hidden max-h-full object-cover"
                            loading="lazy"
                            alt=""
                            src="/container-31@2x.png"
                          />
                          <div className="flex-1 rounded-t-none rounded-b-lg [background:linear-gradient(0deg,_rgba(0,_0,_0,_0.6),_rgba(0,_0,_0,_0.6)_58.44%,_rgba(0,_0,_0,_0))] flex flex-row items-start justify-start pt-[34.4px] px-4 pb-[18.6px] whitespace-nowrap z-[1]">
                            <b className="relative text-2xl-9 leading-[24px] font-wwwtripadvisorcom-inter-black-463 text-white text-left">
                              Ethiopian jazz
                            </b>
                          </div>
                        </div>
                        <div className="h-4 relative text-base-4 leading-[22px] font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left flex items-center shrink-0">
                          Catch the beat of the city
                        </div>
                      </div>
                      <div className="h-[392px] flex flex-col items-start justify-start pt-0 px-0 pb-[3.6px] box-border gap-[10.4px]">
                        <div className="self-stretch flex-1 flex flex-row items-end justify-start relative">
                          <img
                            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg max-w-full overflow-hidden max-h-full object-cover"
                            loading="lazy"
                            alt=""
                            src="/container-4@2x.png"
                          />
                          <div className="flex-1 rounded-t-none rounded-b-lg [background:linear-gradient(0deg,_rgba(0,_0,_0,_0.6),_rgba(0,_0,_0,_0.6)_58.44%,_rgba(0,_0,_0,_0))] flex flex-row items-start justify-start pt-[34.4px] px-4 pb-[18.6px] whitespace-nowrap z-[1]">
                            <b className="relative text-2xl-9 leading-[24px] font-wwwtripadvisorcom-inter-black-463 text-white text-left">
                              Hidden gems
                            </b>
                          </div>
                        </div>
                        <div className="h-4 relative text-base-3 leading-[22px] font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left flex items-center shrink-0">
                          Unique vibes off the beaten path
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start relative gap-4">
                    <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[248px] max-w-[270px]">
                      <div className="self-stretch h-[362px] flex flex-row items-end justify-start relative">
                        <img
                          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg max-w-full overflow-hidden max-h-full object-cover"
                          loading="lazy"
                          alt=""
                          src="/container-5@2x.png"
                        />
                        <button className="cursor-pointer [border:none] pt-[34.4px] px-4 pb-[18.6px] bg-[transparent] flex-1 rounded-t-none rounded-b-lg [background:linear-gradient(0deg,_rgba(0,_0,_0,_0.6),_rgba(0,_0,_0,_0.6)_58.44%,_rgba(0,_0,_0,_0))] flex flex-row items-start justify-start whitespace-nowrap z-[1]">
                          <b className="relative text-2xl-6 leading-[24px] font-wwwtripadvisorcom-inter-black-463 text-white text-left">
                            Must-see attractions
                          </b>
                        </button>
                      </div>
                      <div className="self-stretch h-[22px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[2.4px] pb-0 pl-0 pr-7 box-border">
                        <div className="relative text-base-3 leading-[22px] font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left">
                          Discover the city's heart and soul
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[248px] max-w-[270px]">
                      <div className="self-stretch h-[362px] flex flex-row items-end justify-start relative">
                        <img
                          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg max-w-full overflow-hidden max-h-full object-cover"
                          loading="lazy"
                          alt=""
                          src="/container-61@2x.png"
                        />
                        <div className="flex-1 rounded-t-none rounded-b-lg [background:linear-gradient(0deg,_rgba(0,_0,_0,_0.6),_rgba(0,_0,_0,_0.6)_58.44%,_rgba(0,_0,_0,_0))] flex flex-row items-start justify-start pt-[34.4px] px-4 pb-[18.6px] whitespace-nowrap z-[1]">
                          <b className="relative text-2xl-9 leading-[24px] font-wwwtripadvisorcom-inter-black-463 text-white text-left">
                            Historical landmarks
                          </b>
                        </div>
                      </div>
                      <div className="self-stretch h-[22px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[2.4px] pb-0 pl-0 pr-[27px] box-border">
                        <div className="relative text-base-4 leading-[22px] font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left">
                          Travel back through time's pages
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[3.6px] box-border gap-[10.4px] min-w-[248px] max-w-[270px]">
                      <div className="self-stretch h-[362px] flex flex-row items-end justify-start relative">
                        <img
                          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg max-w-full overflow-hidden max-h-full object-cover"
                          loading="lazy"
                          alt=""
                          src="/container-7@2x.png"
                        />
                        <div className="flex-1 rounded-t-none rounded-b-lg [background:linear-gradient(0deg,_rgba(0,_0,_0,_0.6),_rgba(0,_0,_0,_0.6)_58.44%,_rgba(0,_0,_0,_0))] flex flex-row items-start justify-start pt-[34.4px] px-4 pb-[18.6px] whitespace-nowrap z-[1]">
                          <b className="relative text-2xl-9 leading-[24px] font-wwwtripadvisorcom-inter-black-463 text-white text-left">
                            Art galleries
                          </b>
                        </div>
                      </div>
                      <div className="h-4 relative text-base-4 leading-[22px] font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left flex items-center shrink-0">
                        Modern twists on traditional art
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[3.6px] box-border gap-[10.4px] min-w-[248px] max-w-[270px]">
                      <div className="self-stretch h-[362px] flex flex-row items-end justify-start relative">
                        <img
                          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg max-w-full overflow-hidden max-h-full object-cover"
                          alt=""
                          src="/container-8@2x.png"
                        />
                        <div className="flex-1 rounded-t-none rounded-b-lg [background:linear-gradient(0deg,_rgba(0,_0,_0,_0.6),_rgba(0,_0,_0,_0.6)_58.44%,_rgba(0,_0,_0,_0))] flex flex-row items-start justify-start pt-[34.4px] px-4 pb-[18.6px] whitespace-nowrap z-[1]">
                          <b className="relative text-3xl-3 leading-[24px] font-wwwtripadvisorcom-inter-black-463 text-white text-left">
                            Outdoor adventures
                          </b>
                        </div>
                      </div>
                      <div className="h-[38px] relative text-base-4 leading-[22px] font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left flex items-center shrink-0">
                        <span>
                          <p className="m-0">
                            Hike, bird-watch, and breathe fresh
                          </p>
                          <p className="m-0">air</p>
                        </span>
                      </div>
                    </div>
                    <img
                      className="h-[1512.3px] w-[235.4px] absolute !m-[0] right-[-121.1px] bottom-[-1242.3px] z-[1]"
                      loading="lazy"
                      alt=""
                      src="/social1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[94.5px] pl-5 pr-7">
                <div className="flex flex-row items-start justify-start relative">
                  <div className="h-px w-[1135.1px] absolute !m-[0] right-[-449px] bottom-[24.5px] border-wwwtripadvisorcom-black border-b-[0.8px] border-solid box-border" />
                  <div className="bg-wwwtripadvisorcom-black flex flex-row items-start justify-start py-4 pl-16 pr-[63px] whitespace-nowrap z-[1]">
                    <b className="relative text-mini-8 leading-[19px] inline-block font-wwwtripadvisorcom-inter-black-463 text-white text-center min-w-[110px]">
                      Related Stories
                    </b>
                  </div>
                </div>
              </div>
              <div className="w-[565.6px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <div className="w-[367px] flex flex-row items-start justify-start relative max-w-full">
                  <img
                    className="h-[492px] w-[655px] absolute !m-[0] top-[calc(50%_-_246px)] right-[-576px] rounded-lg overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/picture-121@2x.png"
                  />
                  <div className="flex-1 bg-mintcream flex flex-col items-end justify-start pt-12 px-6 pb-[49.2px] box-border gap-[24.8px] max-w-full z-[1]">
                    <div className="self-stretch h-[19.8px] flex flex-row items-start justify-center py-0 pl-[3px] pr-0 box-border">
                      <div className="self-stretch flex flex-row items-start justify-start">
                        <b className="relative text-base leading-[19px] inline-block font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-center min-w-[21px] shrink-0">{`By `}</b>
                        <div className="flex flex-col items-start justify-start py-0 px-0">
                          <b className="ml-[-0.2px] relative text-mini-9 leading-[19px] inline-block font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-center min-w-[101px] shrink-0 whitespace-nowrap">
                            Shayla Martin
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-2.5">
                      <b className="self-stretch h-[40.4px] relative text-[16.6px] leading-[22px] flex font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-center items-center shrink-0">
                        <span>
                          <p className="m-0">
                            A coffee lover’s guide to celebrating its
                          </p>
                          <p className="m-0">African roots</p>
                        </span>
                      </b>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[3px] pr-1">
                        <div className="flex-1 relative text-base-7 leading-[22px] font-wwwtripadvisorcom-inter-black-463 text-darkslategray-200 text-center">
                          <p className="m-0">
                            Where to enjoy one of the world’s most
                          </p>
                          <p className="m-0">
                            popular drinks and learn about its
                          </p>
                          <p className="m-0">history.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FrameComponent15 />
    </button>
  );
};

OverviewPage.propTypes = {
  className: PropTypes.string,
};

export default OverviewPage;
