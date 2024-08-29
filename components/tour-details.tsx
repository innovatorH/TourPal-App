import { useCallback } from "react";
import RatingStar from "./rating-star";
import Rating from "./rating";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const TourDetails = ({ className = "" }) => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/contact-details");
  }, [router]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[21px] max-w-full text-left text-mini-8 text-wwwtripadvisorcom-black font-wwwtripadvisorcom-inter-black-463 ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-3 pl-2 pr-1.5 box-border max-w-full text-2xs-5 text-firebrick">
        <div className="flex-1 flex flex-col items-start justify-start gap-2 max-w-full">
          <div className="rounded bg-seashell border-firebrick border-[1px] border-solid flex flex-row items-start justify-start pt-1.5 pb-1 pl-[9px] pr-[7px] whitespace-nowrap">
            <div className="relative leading-[14px] uppercase font-extrabold inline-block min-w-[82.1px]">
              SPECIAL OFFER
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 text-6xl-3 text-wwwtripadvisorcom-black mq1050:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-2 max-w-full">
              <div className="relative leading-[34px] font-extrabold mq450:text-xl mq450:leading-[27px]">
                Full Day Tour of Addis Ababa with Hotel Pickup and Drop-off
              </div>
              <div className="w-[447px] flex flex-col items-start justify-start gap-4 max-w-full text-base-1 text-darkslategray-200">
                <div className="w-[170.4px] relative [text-decoration:underline] leading-[22px] flex items-center">
                  By Felega Tours
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[7px] pr-0 box-border max-w-full text-center text-mini-6">
                  <div className="flex-1 flex flex-row items-end justify-center gap-[3.6px] max-w-full mq450:flex-wrap">
                    <div className="flex flex-col items-start justify-end pt-0 pb-[3px] pl-0 pr-[17px]">
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
                    <div className="w-[88.8px] flex flex-col items-start justify-end pt-0 pb-[3px] pl-0 pr-1 box-border">
                      <div className="self-stretch h-4 relative [text-decoration:underline] leading-[22px] flex items-center justify-center shrink-0 min-w-[84.6px]">
                        150 reviews
                      </div>
                    </div>
                    <img
                      className="h-[22px] w-[22px] relative min-h-[22px]"
                      loading="lazy"
                      alt=""
                      src="/svg2.svg"
                    />
                    <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-px box-border min-w-[151px] text-left text-sm-3">
                      <div className="self-stretch relative leading-[17px]">
                        Recommended by 97% of travellers
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-3">
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <img
                  className="w-8 h-8 relative rounded-2xl"
                  loading="lazy"
                  alt=""
                  src="/button-menu--share.svg"
                />
              </div>
              <button className="cursor-pointer border-wwwtripadvisorcom-black border-[1px] border-solid py-[7px] pl-[15px] pr-[13px] bg-white rounded-31xl flex flex-row items-start justify-start gap-1 hover:bg-gainsboro-100 hover:border-darkslategray-200 hover:border-[1px] hover:border-solid hover:box-border">
                <img
                  className="h-5 w-5 relative min-h-[20px]"
                  alt=""
                  src="/svg-17.svg"
                />
                <b className="relative text-mini leading-[20px] inline-block font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-center min-w-[36px]">
                  Save
                </b>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[420px] flex flex-row items-start justify-start pt-0 px-0 pb-[11px] box-border max-w-full text-center text-sm-5 text-white">
        <div className="self-stretch w-[1150px] rounded-xl overflow-hidden shrink-0 flex flex-col items-start justify-start py-0 pl-[731px] pr-0 box-border relative gap-1 max-w-full lg:pl-[365px] lg:box-border mq450:pl-5 mq450:box-border mq750:pl-[182px] mq750:box-border">
          <div className="w-[741px] h-full !m-[0] absolute top-[0px] bottom-[0px] left-[0px] bg-gainsboro-200 flex flex-row items-start justify-start py-0 pl-0 pr-[9px] box-border max-w-full">
            <div className="self-stretch w-[732px] relative hidden max-w-full" />
            <div className="self-stretch flex-1 flex flex-row items-end justify-end py-4 px-5 box-border bg-cover bg-no-repeat bg-[top] max-w-full z-[1]">
              <img
                className="h-[409px] w-[732px] relative object-cover hidden max-w-full"
                alt=""
                src="/image-57@2x.png"
              />
              <div className="w-[82.6px] rounded-xl bg-wwwtripadvisorcom-black flex flex-row items-start justify-start pt-2.5 pb-2 pl-4 pr-[15px] box-border gap-1 z-[2]">
                <img className="h-5 w-5 relative" alt="" src="/svg-23.svg" />
                <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <b className="self-stretch relative leading-[20px] inline-block min-w-[26.8px]">
                    359
                  </b>
                </div>
              </div>
            </div>
          </div>
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/button--see-all-photos@2x.png"
          />
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[2]"
            alt=""
            src="/button--see-all-photos-1@2x.png"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center gap-[22px] max-w-full mq1050:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-[54px] min-w-[438px] max-w-full mq750:gap-[27px] mq750:min-w-full">
          <div className="flex flex-col items-start justify-start gap-[27px] max-w-full">
            <b className="relative leading-[19px] inline-block min-w-[45px]">
              About
            </b>
            <div className="flex flex-col items-start justify-start gap-3.5 text-base-3 text-darkslategray-200">
              <div className="relative leading-[22px]">
                <p className="m-0">{`Experience many of Addis Ababa’s highlights on one comprehensive full-day tour. After a `}</p>
                <p className="m-0">
                  convenient hotel or airport pickup, explore the National
                  Museum, where the 3 million-year-
                </p>
                <p className="m-0">{`old fossils of Lucy is kept, and Merkato, the giant open-air market. Catch amazing views of `}</p>
                <p className="m-0">{`Ethiopia’s capital city from Enoto, enjoy a delicious lunch, and stop by St. George `}</p>
                <p className="m-0">
                  Cathedral, the 15th century church and Rastafarian pilgrimage
                  site.
                </p>
              </div>
              <b className="relative text-mini-6 [text-decoration:underline] leading-[19px] inline-block text-center min-w-[69px]">
                Read less
              </b>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[19px] max-w-full text-base">
            <div className="self-stretch flex flex-col items-start justify-start gap-[26px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[23px] max-w-full">
                <div className="flex flex-row items-end justify-start gap-[3.8px] max-w-full mq750:flex-wrap">
                  <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px text-base-6 text-darkslategray-200">
                    <div className="flex flex-row items-start justify-start gap-2">
                      <img
                        className="h-5 w-5 relative rounded-3xs min-h-[20px]"
                        loading="lazy"
                        alt=""
                        src="/background4.svg"
                      />
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <div className="relative [text-decoration:underline] leading-[16px]">
                          Lowest price guarantee
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[1.1px]">
                    <div className="relative inline-block min-w-[9px] shrink-0">
                      •
                    </div>
                    <div className="relative text-base-3 [text-decoration:underline] leading-[16px] text-darkslategray-200 shrink-0">{`Reserve now & pay later`}</div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-px">
                    <div className="relative inline-block min-w-[9px]">•</div>
                    <div className="relative text-[15.9px] [text-decoration:underline] leading-[19px] text-darkslategray-200 inline-block min-w-[129px]">
                      Free cancellation
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px relative border-gainsboro-200 border-t-[1px] border-solid box-border overflow-hidden shrink-0" />
              </div>
              <div className="flex flex-row items-start justify-start gap-2 text-mini-9 text-darkslategray-200">
                <div className="flex flex-col items-start justify-start gap-3">
                  <img
                    className="w-[18px] h-[18px] relative"
                    alt=""
                    src="/svg-34.svg"
                  />
                  <img
                    className="w-[18px] h-[18px] relative"
                    alt=""
                    src="/svg-41.svg"
                  />
                  <img
                    className="w-[18px] h-[18px] relative"
                    alt=""
                    src="/svg-52.svg"
                  />
                  <input
                    className="m-0 w-[18px] h-[18px] relative"
                    type="checkbox"
                  />
                  <img
                    className="w-[18px] h-[18px] relative"
                    alt=""
                    src="/svg-71.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <div className="flex flex-col items-start justify-start gap-2">
                    <div className="relative leading-[22px]">
                      Ages 1-90, max of 15 per group
                    </div>
                    <div className="relative text-base-1 leading-[22px]">
                      Duration: 6–7 hours
                    </div>
                    <div className="relative text-[15.5px] leading-[22px]">
                      Start time: Check availability
                    </div>
                    <div className="relative text-base-4 leading-[22px] inline-block min-w-[94px]">
                      Mobile ticket
                    </div>
                    <div className="relative text-base-3 leading-[22px]">
                      Live guide: English
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-px relative border-gainsboro-200 border-t-[1px] border-solid box-border overflow-hidden shrink-0 z-[1]">
              <div className="absolute top-[1px] left-[0px] border-gainsboro-200 border-t-[1px] border-solid box-border w-full h-full overflow-hidden hidden" />
            </div>
            <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 text-mini-8">
              <div className="w-[357px] flex flex-col items-start justify-start gap-5 max-w-[calc(100%_-_40px)]">
                <b className="relative leading-[19px] inline-block min-w-[118px]">
                  What's included
                </b>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-4 pr-0 box-border max-w-full text-base-6 text-darkslategray-200">
                  <div className="flex-1 flex flex-col items-start justify-start gap-1 max-w-full">
                    <div className="relative text-base-4 leading-[22px]">
                      Transport by air-conditioned minivan
                    </div>
                    <div className="relative text-[15.5px] leading-[22px]">
                      All taxes, fees and handling charges
                    </div>
                    <div className="relative leading-[22px] inline-block min-w-[110px]">
                      Fuel surcharge
                    </div>
                    <div className="relative text-[15.9px] leading-[22px] inline-block min-w-[93px]">
                      Driver/guide
                    </div>
                    <div className="relative leading-[22px]">
                      Blue Badge guide
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-1 text-base-3">
                      <div className="relative text-base-4 leading-[22px] inline-block min-w-[104px]">
                        Hotel drop-off
                      </div>
                      <div className="relative text-base-6 leading-[22px] inline-block min-w-[93.3px]">
                        Hotel pickup
                      </div>
                      <div className="relative text-base-4 leading-[22px]">
                        Round-trip shared transfer
                      </div>
                      <div className="relative text-[15.5px] leading-[22px]">{`All entrance fee except Entoto View point `}</div>
                      <div className="relative leading-[22px]">
                        Entry/Admission - National Museum of Ethiopia
                      </div>
                      <div className="relative leading-[22px]">
                        Entry/Admission - Addis Ababa
                      </div>
                      <div className="relative leading-[22px]">
                        Entry/Admission - Mercato Market
                      </div>
                      <div className="relative leading-[22px]">
                        Entry/Admission - St. George's Cathedral
                      </div>
                      <div className="relative leading-[22px]">
                        Entry/Admission - Tiglachin Memorial
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img className="h-5 w-5 relative" alt="" src="/svg-81.svg" />
            </div>
          </div>
        </div>
        <div className="w-[453.7px] shadow-[0px_2px_54px_rgba(0,_0,_0,_0.1)] rounded-xl bg-gray-800 border-gainsboro-200 border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[27px] px-6 pb-[68px] gap-6 min-w-[453.7px] max-w-full text-2xl-4 mq750:pt-5 mq750:pb-11 mq750:box-border mq750:min-w-full mq1050:flex-1">
          <div className="flex flex-col items-start justify-start gap-0.5">
            <div className="flex flex-row items-start justify-start gap-[7.7px]">
              <b className="relative leading-[29px] mq450:text-mid mq450:leading-[23px]">
                {`From `}
                <span className="[text-decoration:line-through]">$60.00</span>
              </b>
              <b className="w-[89px] relative text-2xl-2 leading-[29px] flex text-firebrick items-center shrink-0 whitespace-nowrap mq450:text-mid mq450:leading-[23px]">
                $46.00
              </b>
            </div>
            <div className="relative text-sm-3 leading-[17px] text-darkslategray-200">
              per adult (price varies by group size)
            </div>
          </div>
          <div className="w-[330px] flex flex-col items-start justify-start gap-4 max-w-full text-mini">
            <b className="relative leading-[19px]">Select date and travelers</b>
            <div className="self-stretch flex flex-row items-start justify-start gap-2 text-center text-smi-4 mq450:flex-wrap">
              <div className="flex-1 rounded-3xl bg-white border-gainsboro-200 border-[1px] border-solid box-border overflow-hidden flex flex-row items-end justify-start pt-[13px] px-[17px] pb-3 gap-[3px] min-w-[164px]">
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
                  <img
                    className="w-[18px] h-[18px] relative"
                    alt=""
                    src="/svg-91.svg"
                  />
                </div>
                <b className="relative leading-[17px]">
                  Friday, August 30, 2024
                </b>
              </div>
              <div className="w-[62.4px] rounded-3xl bg-white border-gainsboro-200 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-end justify-start pt-[13px] pb-3 pl-[17px] pr-[13px] gap-[3px] text-sm">
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
                  <img
                    className="w-[18px] h-[18px] relative"
                    alt=""
                    src="/svg-101.svg"
                  />
                </div>
                <b className="relative leading-[17px] inline-block min-w-[9px]">
                  2
                </b>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full text-[16.6px]">
            <div className="flex-1 rounded-xl border-wwwtripadvisorcom-black border-[2px] border-solid box-border flex flex-col items-start justify-start pt-[15px] pb-[22px] pl-[18px] pr-4 gap-[16.5px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start gap-[8.7px] mq450:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[207px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[7px]">
                    <b className="relative leading-[22px]">
                      <p className="m-0">
                        Full Day Tour of Addis Ababa with Hotel
                      </p>
                      <p className="m-0">Pickup and Drop-off</p>
                    </b>
                    <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[9px] text-sm-6">
                      <div className="relative leading-[17px] inline-block min-w-[103px]">
                        Pickup included
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[3.5px] text-smi-9 text-darkslategray-200">
                      <div className="relative leading-[17px] inline-block min-w-[118px]">
                        <span>{`2 Adults x `}</span>
                        <span className="text-wwwtripadvisorcom-black">
                          $46.00
                        </span>
                      </div>
                      <b className="relative text-mini-1 leading-[19px] text-wwwtripadvisorcom-black">
                        <span>
                          {`Total `}
                          <span className="[text-decoration:line-through]">
                            $120.00
                          </span>
                          {` `}
                        </span>
                        <span className="text-firebrick">$92.00</span>
                      </b>
                      <div className="relative text-xs-4 leading-[14px]">
                        (Price includes taxes and booking fees)
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 pl-0 pr-3.5">
                  <div className="h-6 w-6 relative rounded-3xl border-wwwtripadvisorcom-black border-[2px] border-solid box-border">
                    <div className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_6px)] rounded-xl bg-wwwtripadvisorcom-black w-3 h-3" />
                    <div className="absolute top-[0px] left-[0px] rounded-31xl bg-royalblue border-royalblue border-[1px] border-solid box-border w-px h-px overflow-hidden z-[1]">
                      <div className="absolute top-[0.2px] left-[0.2px] rounded-31xl bg-royalblue w-full h-full hidden" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[341.7px] flex flex-row items-start justify-start max-w-full [row-gap:20px] text-smi-3 mq450:flex-wrap">
                <button className="cursor-pointer border-wwwtripadvisorcom-black border-[1px] border-solid py-[7px] px-[25px] bg-white flex-[0.9166] rounded-xl box-border flex flex-row items-start justify-start min-w-[58px] shrink-0 whitespace-nowrap hover:bg-gainsboro-100 hover:border-darkslategray-200 hover:border-[1px] hover:border-solid hover:box-border mq450:flex-1">
                  <b className="relative text-smi-5 leading-[17px] inline-block font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left min-w-[54px]">
                    9:00 AM
                  </b>
                </button>
                <div className="flex-[0.8887] rounded-xl bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[7px] px-[26px] min-w-[58px] shrink-0 whitespace-nowrap z-[1] ml-[-6px] mq450:flex-1">
                  <b className="relative leading-[17px] inline-block min-w-[52px]">
                    9:30 AM
                  </b>
                </div>
                <div className="flex-1 rounded-xl bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[7px] px-[22px] min-w-[58px] shrink-0 whitespace-nowrap z-[2] ml-[-6px]">
                  <b className="relative leading-[17px] inline-block min-w-[58.5px]">
                    10:00 AM
                  </b>
                </div>
              </div>
              <b className="relative text-mini-3 [text-decoration:underline] leading-[19px] inline-block text-darkslategray-200 text-center min-w-[125px]">
                See 2 More Times
              </b>
              <div className="w-[15px] h-px relative overflow-hidden shrink-0 hidden" />
            </div>
          </div>
          <button
            className="cursor-pointer [border:none] pt-4 px-[148px] pb-3 bg-mediumseagreen-200 self-stretch rounded-3xl flex flex-row items-start justify-center whitespace-nowrap hover:bg-seagreen mq450:pl-5 mq450:pr-5 mq450:box-border"
            onClick={onButtonClick}
          >
            <b className="relative text-mini-4 leading-[20px] inline-block font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-center min-w-[93px]">
              Reserve Now
            </b>
          </button>
          <div className="flex flex-row items-end justify-start gap-2 max-w-full text-base-1 text-darkslategray-200">
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[9px]">
              <img
                className="w-[18px] h-[18px] relative rounded-4xs shrink-0"
                alt=""
                src="/background-19.svg"
              />
            </div>
            <div className="relative leading-[19px] shrink-0">
              <p className="m-0">
                Not sure? You can cancel this reservation up to 24
              </p>
              <p className="m-0">hours in advance for a full refund.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-0 px-0 pb-1.5 box-border gap-1 max-w-full text-[15.5px] text-darkslategray-200">
        <div className="flex flex-col items-start justify-start gap-1 max-w-full">
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[7px] text-mini-6 text-wwwtripadvisorcom-black">
            <b className="relative leading-[19px]">What's not included</b>
          </div>
          <div className="flex flex-row items-start justify-start py-0 pl-4 pr-0">
            <div className="relative leading-[22px]">
              Excess luggage charges (where applicable)
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-4 text-base-6">
            <div className="relative leading-[22px]">Airport/Departure Tax</div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
            <div className="relative leading-[22px]">
              Alcoholic drinks (available to purchase)
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-4">
            <div className="relative leading-[22px] inline-block min-w-[118px]">
              Food and drinks
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-4 text-mini">
          <div className="relative leading-[16px]">
            Entry/Admission - Mount Entoto
          </div>
        </div>
      </div>
      <div className="w-[674.3px] flex flex-col items-start justify-start gap-4 max-w-full text-base-4 text-darkslategray-200">
        <div className="self-stretch h-px relative border-gainsboro-200 border-t-[1px] border-solid box-border overflow-hidden shrink-0" />
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start pt-0 px-0 pb-1.5 box-border gap-[1.5px] max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[21.8px] min-w-[424px] max-w-full mq750:min-w-full">
            <b className="relative text-mini-9 leading-[19px] inline-block text-wwwtripadvisorcom-black min-w-[111.8px]">
              What to expect
            </b>
            <div className="relative leading-[22px]">
              <p className="m-0">
                <b>Itinerary</b>
              </p>
              <p className="m-0">
                This is a typical itinerary for this product
              </p>
            </div>
            <div className="relative text-base-3 leading-[22px] inline-block max-w-full">
              <b>{`Pass By: `}</b>
              <span>Meyazia 27 Square Monument, Addis Ababa Ethiopia</span>
            </div>
            <div className="relative text-[15.5px] leading-[22px] inline-block max-w-full">
              <p className="m-0">
                Myazia 27 Square Monument or Dillachin ( Victory Monument )
              </p>
              <p className="m-0">{`The historic monument depicts a Lion of Judah and a circle of relief figures and `}</p>
              <p className="m-0">{`monumental panels celebrating the liberation of Ethiopia. `}</p>
            </div>
            <div className="relative leading-[22px] inline-block max-w-full">
              <b>{`Stop At: `}</b>
              <span>
                National Museum of Ethiopia, King George VI Street, Addis Ababa
                Ethiopia
              </span>
            </div>
            <div className="relative text-base-3 leading-[22px]">
              <p className="m-0">{`You will start your city tour of Addis Ababa with the National Museum of Ethiopia. This is `}</p>
              <p className="m-0">{`one of the best museums in quality and diversity of the exhibits. Archeological exhibits `}</p>
              <p className="m-0">{`include the 3.5 million-year-old fossil of Lucy (or Dinkinesh – ‘thou art wonderful’- in the `}</p>
              <p className="m-0">{`native language), a hominoid woman of the specious of Australopithecus Afarensis. The `}</p>
              <p className="m-0">{`discovery of Lucy’s fossil in 1974 forced a complete rethink of human genealogy, providing `}</p>
              <p className="m-0">{`that our ancestors were walking 2.5 million years earlier than had been supposed. The `}</p>
              <p className="m-0">{`National Museum also contains many wonderful artifacts dating back to pre-Axumite `}</p>
              <p className="m-0">civilization.</p>
            </div>
            <div className="relative leading-[22px] inline-block max-w-full">
              Please note that the National Museum Will be closed on Monday.
            </div>
            <div className="relative text-base-1 leading-[22px] inline-block min-w-[113.6px]">
              Duration: 1 hour
            </div>
            <div className="relative text-base-1 leading-[22px] inline-block max-w-full">
              <b>{`Pass By: `}</b>
              <span>Yekatit 12 Martyrs Square, Addis Ababa Ethiopia</span>
            </div>
            <div className="relative leading-[22px] inline-block max-w-full">
              <p className="m-0">{`Yekatit 12 Martyrs Square Monument is located near the Addis Ababa University and the `}</p>
              <p className="m-0">
                Lion Zoo. This place has a significant historical background.
              </p>
            </div>
            <div className="relative leading-[22px] inline-block max-w-full">
              <b>{`Pass By: `}</b>
              <span>
                Chiromeda Market, Toward Entoto Hill, Addis Ababa Ethiopia
              </span>
            </div>
          </div>
          <img className="h-5 w-5 relative" alt="" src="/svg-81.svg" />
        </div>
        <div className="flex flex-col items-start justify-start gap-[22px] max-w-full text-base-3">
          <div className="relative leading-[22px]">
            <p className="m-0">{`Before Moving up to mount entoto we will pass by Chiromeda market. The market has a `}</p>
            <p className="m-0">{`variety of traditional clothing like Dress, Shawl, Scarf, Bed Cover, Napkins, Mens Shirt, etc... `}</p>
            <p className="m-0">{`all locally hand made product are being sold here. `}</p>
          </div>
          <div className="relative text-base-8 leading-[22px]">{`Stooping here is optional. `}</div>
          <div className="relative text-base-4 leading-[22px] inline-block max-w-full">
            <b>{`Stop At: `}</b>
            <span>Mount Entoto, Addis Ababa Ethiopia</span>
          </div>
          <div className="flex flex-col items-start justify-start max-w-full">
            <div className="flex flex-row items-start justify-start py-0 pl-[3px] pr-0">
              <div className="relative leading-[22px]">{`we will drive uphill to Entoto, which once was Emperor Minilik II’s permanent camp. Driving `}</div>
            </div>
            <div className="relative text-[15.5px] leading-[22px] inline-block max-w-full z-[1]">
              <p className="m-0">{`the hill there is a considerable drop in altitude and the air is filled with the scent of the `}</p>
              <p className="m-0">{`Eucalyptus trees which cover the area. From the top, there is a panoramic view of the `}</p>
              <p className="m-0">{`capital and surrounding countryside. Please note that entrance fee to the Entoto park is `}</p>
              <p className="m-0">
                not included, If you wish to enter the park the cost will be 20
                USD/Person
              </p>
            </div>
          </div>
          <div className="relative text-base-1 leading-[22px] inline-block min-w-[113.6px]">
            Duration: 1 hour
          </div>
          <div className="relative leading-[22px] inline-block max-w-full">
            <b>{`Stop At: `}</b>
            <span>
              Ethnological Museum, 2QW5+P3Q, Algeria St, Addis Ababa, Ethiopia
            </span>
          </div>
          <div className="relative leading-[22px]">
            <p className="m-0">{`We continue our tour of Addis Ababa with visit to the Ethnographic Museum which is found `}</p>
            <p className="m-0">{`inside the compound of the Addis Ababa University. This museum is very different to the `}</p>
            <p className="m-0">{`National Museum, but equally absorbing, this museum exhibit, a varied array of artifacts `}</p>
            <p className="m-0">
              and daily objects related to most ethnic groups living in
              Ethiopia.
            </p>
          </div>
          <div className="relative text-base-1 leading-[22px] inline-block min-w-[113.6px]">
            Duration: 1 hour
          </div>
          <div className="relative text-[15.5px] leading-[22px] inline-block max-w-full">
            <b>{`Stop At: `}</b>
            <span>
              Mercato Market, Dubai Tera Building, Addis Ababa Ethiopia
            </span>
          </div>
          <div className="relative text-base-1 leading-[22px] inline-block max-w-full">
            <p className="m-0">
              After lunch, city tour of Addis Ababa continues with the visit to
              Merkato, the largest open-
            </p>
            <p className="m-0">{`air market in Africa, where almost every possible commodity is on sale. `}</p>
          </div>
          <div className="relative text-mini leading-[22px]">
            Duration: 40 minutes
          </div>
          <div className="w-[590.7px] relative text-mini-6 leading-[22px] flex items-center max-w-full">
            <span className="w-full">
              <b>{`Stop At: `}</b>
              <span>
                Itegue Taitu Hotel | Piazza, 2QJ3+7P2, Dej. Jote St, Addis
                Ababa, Ethiopia
              </span>
            </span>
          </div>
          <div className="relative leading-[22px] inline-block max-w-full">
            <p className="m-0">{`Lunch at The Oldest Hotel in Ethiopia Established in 1898E.C, Their is a variety of choice `}</p>
            <p className="m-0">{`here at the Taitu Hotel, Their Vegan Buffet is well known, but there is also a possibility to `}</p>
            <p className="m-0">{`make an order from the menu... `}</p>
          </div>
          <div className="relative text-[15.5px] leading-[22px] inline-block max-w-full">{`Client can advise us for a different place for Lunch. `}</div>
          <div className="relative text-mini leading-[22px]">
            Duration: 40 minutes
          </div>
          <div className="relative text-base-4 leading-[22px] inline-block max-w-full">
            <b>{`Stop At: `}</b>
            <span>
              St. George's Cathedral, Piazza, Addis Ababa 0000 Ethiopia
            </span>
          </div>
          <div className="relative text-[15.5px] leading-[22px]">
            <p className="m-0">{`Our visit continues with St. George Cathedral, one of the oldest cathedral in Addis Ababa `}</p>
            <p className="m-0">{`and the most colorful church. `}</p>
          </div>
          <div className="relative text-base-1 leading-[22px] inline-block min-w-[113.6px]">
            Duration: 1 hour
          </div>
          <div className="relative text-[15.5px] leading-[22px] inline-block max-w-full">
            <b>{`Stop At: `}</b>
            <span>
              Tiglachin Memorial, Churchill Avenue, Addis Ababa Ethiopia
            </span>
          </div>
          <div className="relative text-base-6 leading-[22px]">
            <p className="m-0">{`Tiglachin Memorial is a memorial to Ethiopian and Cuban soldiers involved in the Ogaden `}</p>
            <p className="m-0">
              War. It was built under Mengistu Haile Mariam on Churchill Avenue
              in Addis Ababa.
            </p>
          </div>
          <div className="relative text-mini leading-[22px]">
            Duration: 30 minutes
          </div>
        </div>
      </div>
      <div className="w-[674.3px] flex flex-col items-start justify-start pt-0 px-0 pb-1 box-border gap-[15px] max-w-full text-mini-9">
        <div className="self-stretch h-px relative border-gainsboro-200 border-t-[1px] border-solid box-border overflow-hidden shrink-0" />
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[13.6px] max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[18px] min-w-[417px] max-w-full mq750:min-w-full">
            <b className="relative leading-[19px]">Departure and return</b>
            <div className="self-stretch flex flex-col items-start justify-start gap-[11px] max-w-full text-mini-5">
              <div className="flex flex-row items-start justify-start gap-[3.8px]">
                <b className="relative leading-[19px] inline-block min-w-[40px]">
                  Start:
                </b>
                <div className="relative text-[15.5px] leading-[22px] text-darkslategray-200">
                  Multiple pickup locations offered.
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-2 max-w-full text-mini-6 text-darkslategray-200 mq750:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="flex flex-col items-start justify-start gap-[81px]">
                    <img
                      className="w-5 h-5 relative"
                      alt=""
                      src="/svg-121.svg"
                    />
                    <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[22px]">
                      <img
                        className="h-5 w-5 relative"
                        alt=""
                        src="/svg-121.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[63px]">
                      <img
                        className="w-5 h-5 relative"
                        alt=""
                        src="/svg-141.svg"
                      />
                      <div className="flex flex-col items-start justify-start gap-[49px]">
                        <img
                          className="w-5 h-5 relative"
                          alt=""
                          src="/svg-151.svg"
                        />
                        <img
                          className="w-5 h-5 relative"
                          alt=""
                          src="/svg-161.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[19px] min-w-[398px] max-w-full mq750:min-w-full">
                  <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[3px] box-border gap-1 max-w-full">
                    <div className="flex flex-col items-start justify-start gap-2">
                      <div className="rounded bg-gainsboro-200 flex flex-row items-start justify-start py-[5px] pl-1 pr-[3px] whitespace-nowrap">
                        <b className="relative leading-[16px] inline-block min-w-[59.2px]">
                          Option 1
                        </b>
                      </div>
                      <b className="relative text-mini leading-[19px] text-wwwtripadvisorcom-black">
                        Addis Ababa, Ethiopia
                      </b>
                    </div>
                    <div className="relative text-base-4 leading-[22px]">
                      We can collect all customers from the airport or Hotel...
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[7.5px] max-w-full text-mini-8">
                    <div className="rounded bg-gainsboro-200 flex flex-row items-start justify-start py-[5px] pl-1 pr-[3px] whitespace-nowrap">
                      <b className="relative leading-[16px] inline-block min-w-[62px]">
                        Option 2
                      </b>
                    </div>
                    <b className="relative leading-[19px] inline-block text-wwwtripadvisorcom-black max-w-full">
                      National Museum of Ethiopia, 2QQ6+6P4, Addis Ababa Arada,
                      Ethiopia
                    </b>
                    <div className="relative text-base-4 leading-[22px]">
                      <p className="m-0">{`The Full Day Tour of Addis Ababa will start by a visit at the National Museum, and `}</p>
                      <p className="m-0">{`travelers can meet us at this place `}</p>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[7px] text-wwwtripadvisorcom-black">
                    <b className="relative leading-[19px] inline-block min-w-[101px]">
                      Pickup details
                    </b>
                    <div className="h-[38px] relative text-[15.5px] leading-[22px] text-darkslategray-200 flex items-center shrink-0">
                      <span>
                        <p className="m-0">{`We can pick up our guests at the Airport, apartment, and any other places travelers `}</p>
                        <p className="m-0">want to be picked up...</p>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[5px] box-border gap-1 max-w-full text-mini-9 text-wwwtripadvisorcom-black">
                    <b className="relative leading-[19px]">
                      Hotel pickup offered
                    </b>
                    <div className="relative text-base-3 leading-[22px] text-darkslategray-200">
                      During checkout you will be able to select from the list
                      of included hotels.
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-1 max-w-full text-mini-8">
                    <b className="relative leading-[19px] text-wwwtripadvisorcom-black">
                      Airport pickup offered
                    </b>
                    <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[7px] text-base-3">
                      <div className="relative leading-[22px]">
                        During checkout you will be able to select from the list
                        of included airports.
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 px-4 text-base-6">
                      <div className="relative leading-[22px]">
                        Bole Airport, Addis Ababa Ethiopia
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[2.9px] max-w-full text-mini-3 mq450:flex-wrap">
              <b className="relative leading-[19px] inline-block min-w-[32px] shrink-0">
                End:
              </b>
              <div className="relative text-base-3 leading-[22px] text-darkslategray-200 inline-block shrink-0 max-w-full">
                This activity ends back at the meeting point.
              </div>
            </div>
          </div>
          <img className="h-5 w-5 relative" alt="" src="/svg-81.svg" />
        </div>
        <div className="self-stretch h-px relative border-gainsboro-200 border-t-[1px] border-solid box-border overflow-hidden shrink-0" />
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[35.6px] max-w-full text-mini-4 mq750:gap-[18px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[30px] min-w-[402px] max-w-full mq750:min-w-full">
            <div className="flex flex-col items-start justify-start gap-5">
              <b className="relative leading-[19px] inline-block min-w-[92px]">
                Accessibility
              </b>
              <div className="flex flex-row items-start justify-start py-0 pl-4 pr-0 text-base-8 text-darkslategray-200">
                <div className="flex flex-col items-start justify-start gap-1">
                  <div className="relative leading-[22px]">
                    Infant seats available
                  </div>
                  <div className="relative leading-[22px]">
                    Wheelchair accessible
                  </div>
                  <div className="relative leading-[22px]">
                    Near public transportation
                  </div>
                  <div className="relative text-mini leading-[22px]">
                    Infants must sit on laps
                  </div>
                  <div className="relative text-[15.5px] leading-[16px]">
                    Transportation is wheelchair accessible
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[3px] text-base-4 text-darkslategray-200">
              <div className="relative leading-[22px]">
                <p className="m-0">
                  If you have questions about accessibility, we’d be happy to
                  help. Just call the number
                </p>
                <p className="m-0">
                  below and reference the product code: 91529P1
                </p>
              </div>
              <div className="relative text-smi [text-decoration:underline] leading-[19px] text-wwwtripadvisorcom-black inline-block min-w-[107.9px] whitespace-nowrap">
                +251-930252577
              </div>
            </div>
          </div>
          <img className="h-5 w-5 relative" alt="" src="/svg-81.svg" />
        </div>
      </div>
      <div className="w-[674.3px] flex flex-col items-start justify-start pt-0 px-0 pb-1.5 box-border gap-4 max-w-full">
        <div className="self-stretch h-px relative border-gainsboro-200 border-t-[1px] border-solid box-border overflow-hidden shrink-0" />
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[15.5px] max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-5 max-w-full mq750:min-w-full">
            <b className="relative leading-[19px]">Additional information</b>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-4 pr-0 box-border max-w-full text-base-4 text-darkslategray-200">
              <div className="flex-1 flex flex-col items-start justify-start gap-1 max-w-full">
                <div className="relative leading-[22px] inline-block max-w-full">
                  Confirmation will be received at time of booking
                </div>
                <div className="relative leading-[22px] inline-block max-w-full">
                  Child rate applies only when sharing with 2 paying adults
                </div>
                <div className="relative text-base-3 leading-[22px]">
                  Dress code is smart casual
                </div>
                <div className="relative text-[15.5px] leading-[22px]">
                  May be operated by a multi-lingual guide
                </div>
                <div className="relative leading-[22px] inline-block max-w-full">
                  Please advise any specific dietary requirements at time of
                  booking
                </div>
                <div className="relative text-[15.5px] leading-[22px] inline-block max-w-full">
                  Vegetarian option is available, please advise at time of
                  booking if required
                </div>
                <div className="relative text-base-8 leading-[22px]">
                  Most travelers can participate
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1.5 text-[15.5px]">
                  <div className="h-[38px] relative leading-[22px] flex items-center">
                    <span>
                      <p className="m-0">{`This experience requires good weather. If it’s canceled due to poor weather, you’ll be `}</p>
                      <p className="m-0">
                        offered a different date or a full refund
                      </p>
                    </span>
                  </div>
                </div>
                <div className="relative text-base-1 leading-[16px] inline-block max-w-full">
                  This tour/activity will have a maximum of 15 travelers
                </div>
              </div>
            </div>
          </div>
          <img className="h-5 w-5 relative" alt="" src="/svg-81.svg" />
        </div>
      </div>
      <div className="w-[674.3px] flex flex-col items-start justify-start gap-4 max-w-full text-base-1">
        <div className="self-stretch h-px relative border-gainsboro-200 border-t-[1px] border-solid box-border overflow-hidden shrink-0" />
        <div className="self-stretch flex flex-row items-start justify-between gap-5">
          <b className="relative leading-[19px] shrink-0">
            Cancellation policy
          </b>
          <img
            className="h-5 w-5 relative min-h-[20px] shrink-0"
            alt=""
            src="/svg-20.svg"
          />
        </div>
        <div className="self-stretch h-px relative border-gainsboro-200 border-t-[1px] border-solid box-border overflow-hidden shrink-0" />
        <div className="self-stretch flex flex-row items-start justify-between gap-5 text-base-3">
          <b className="relative leading-[19px] inline-block min-w-[35px]">
            Help
          </b>
          <img
            className="h-5 w-5 relative min-h-[20px]"
            alt=""
            src="/svg-20.svg"
          />
        </div>
        <div className="self-stretch h-px relative border-gainsboro-200 border-t-[1px] border-solid box-border overflow-hidden shrink-0" />
      </div>
    </div>
  );
};

TourDetails.propTypes = {
  className: PropTypes.string,
};

export default TourDetails;
