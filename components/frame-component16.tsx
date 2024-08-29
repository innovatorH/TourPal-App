import RatingStar from "./rating-star";
import Rating from "./rating";
import PropTypes from "prop-types";

const FrameComponent16 = ({ className = "" }) => {
  return (
    <div
      className={`w-[1119.7px] flex flex-row items-start justify-start flex-wrap content-start gap-2 max-w-full text-left text-xl-8 text-wwwtripadvisorcom-black font-wwwtripadvisorcom-inter-black-463 ${className}`}
    >
      <div className="w-[290.5px] flex flex-col items-start justify-start gap-[55px] text-center mq450:gap-[27px]">
        <div className="w-[241.6px] flex flex-row items-start justify-start py-0 px-[41px] box-border">
          <div className="h-[37px] flex-1 relative">
            <div className="absolute top-[27px] left-[0px] border-wwwtripadvisorcom-black border-b-[2px] border-solid box-border w-[85.4px] h-2.5" />
            <div className="absolute top-[0px] left-[0px] w-[159.6px] flex flex-row items-start justify-start gap-[23.8px]">
              <b className="flex-1 relative leading-[24px] inline-block min-w-[85.6px] mq450:text-mid mq450:leading-[19px]">
                Reviews
              </b>
              <b className="w-[50.2px] relative text-3xl-7 leading-[29px] flex text-darkslategray-200 items-center justify-center shrink-0 min-w-[50.2px] mq450:text-lg mq450:leading-[23px]">{`Q&A`}</b>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-0.5 text-left text-xl">
          <div className="flex flex-col items-end justify-start gap-[17.5px]">
            <div className="flex flex-row items-start justify-start gap-[15px]">
              <b className="relative leading-[29px] inline-block min-w-[34.6px] mq450:text-base mq450:leading-[23px]">
                5.0
              </b>
              <div className="flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0">
                <div className="flex flex-row items-start justify-start gap-0.5">
                  <RatingStar
                    vector="/museum-ratings.svg"
                    group="/group-91@2x.png"
                    ratingStarHeight="12px"
                    ratingStarWidth="12px"
                    groupIconRight="0%"
                    groupIconLeft="50%"
                  />
                  <RatingStar
                    vector="/museum-ratings.svg"
                    group="/group-91@2x.png"
                    ratingStarHeight="12px"
                    ratingStarWidth="12px"
                    groupIconRight="0%"
                    groupIconLeft="50%"
                  />
                  <RatingStar
                    vector="/museum-ratings.svg"
                    group="/group-91@2x.png"
                    ratingStarHeight="12px"
                    ratingStarWidth="12px"
                    groupIconRight="0%"
                    groupIconLeft="50%"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-end py-0 px-1.5 text-sm-5">
              <div className="flex flex-col items-start justify-start gap-[9px]">
                <div className="h-[17px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-px pb-0 pl-0 pr-[9px] box-border">
                  <div className="relative leading-[17px] inline-block min-w-[58px]">
                    Excellent
                  </div>
                </div>
                <div className="h-[17px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-px px-0 pb-0 box-border text-sm-6">
                  <div className="relative leading-[17px] inline-block min-w-[67px] shrink-0 whitespace-nowrap">
                    Very good
                  </div>
                </div>
                <div className="h-[17px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-px pb-0 pl-0 pr-3 box-border text-sm">
                  <div className="relative leading-[17px] inline-block min-w-[55px]">
                    Average
                  </div>
                </div>
                <div className="h-[17px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-px pb-0 pl-0 pr-9 box-border text-sm-9">
                  <div className="relative leading-[17px] inline-block min-w-[31px]">
                    Poor
                  </div>
                </div>
                <div className="h-[17px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-px pb-0 pl-0 pr-[17px] box-border text-sm-7">
                  <div className="relative leading-[17px] inline-block min-w-[50px]">
                    Terrible
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[27px] text-mini-6 text-darkslategray-200">
            <div className="flex flex-row items-end justify-start gap-[21.4px]">
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[2.5px]">
                <div className="flex flex-row items-start justify-start gap-0.5">
                  <RatingStar
                    vector="/museum-ratings.svg"
                    group="/group-91@2x.png"
                    ratingStarHeight="12px"
                    ratingStarWidth="12px"
                    groupIconRight="0%"
                    groupIconLeft="50%"
                  />
                  <Rating
                    vector="/museum-ratings.svg"
                    group="/group-91@2x.png"
                    ratingStarHeight="12px"
                    ratingStarWidth="12px"
                    groupIconRight="0%"
                    groupIconLeft="50%"
                  />
                </div>
              </div>
              <div className="relative leading-[22px] inline-block min-w-[84.6px]">
                150 reviews
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[7px] pr-0">
              <div className="flex-1 flex flex-col items-start justify-start gap-3.5">
                <div className="self-stretch rounded-81xl bg-gainsboro-200 flex flex-row items-start justify-start py-0 pl-0 pr-2.5">
                  <div className="h-3 flex-1 relative rounded-81xl bg-goldenrod" />
                </div>
                <div className="self-stretch rounded-81xl bg-gainsboro-200 flex flex-row items-start justify-start">
                  <div className="h-3 w-3 relative rounded-81xl bg-goldenrod" />
                </div>
                <div className="self-stretch h-3 relative rounded-81xl bg-gainsboro-200" />
                <div className="self-stretch h-3 relative rounded-81xl bg-gainsboro-200" />
                <div className="self-stretch h-3 relative rounded-81xl bg-gainsboro-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[60.5px] flex flex-col items-start justify-start pt-[140px] px-0 pb-0 box-border text-xs">
        <div className="flex flex-col items-start justify-start gap-3">
          <div className="relative text-2xs-1 leading-[14px] inline-block min-w-[18.7px]">
            137
          </div>
          <div className="relative text-4xs leading-[14px] inline-block min-w-[8.4px]">
            11
          </div>
          <div className="relative leading-[14px] inline-block min-w-[5px]">
            1
          </div>
          <div className="relative leading-[14px] inline-block min-w-[8px]">
            0
          </div>
          <div className="relative leading-[14px] inline-block min-w-[5px]">
            1
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-[41px] px-0 pb-0 box-border min-w-[489px] max-w-full text-mini lg:pt-[27px] lg:box-border mq750:pt-5 mq750:box-border mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-2.5 max-w-full">
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 mq750:flex-wrap">
            <div className="w-[489.9px] flex flex-col items-start justify-start gap-[23px] max-w-full">
              <div className="flex flex-row items-start justify-start py-0 px-0.5">
                <div className="overflow-hidden flex flex-row items-start justify-start py-px px-0 gap-2">
                  <div className="h-8 w-8 relative rounded-2xl overflow-hidden shrink-0">
                    <img
                      className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-full object-cover"
                      alt=""
                      src="/link1@2x.png"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-0.5 shrink-0">
                    <b className="relative leading-[19px] inline-block min-w-[54px]">
                      Abby C
                    </b>
                    <div className="relative text-xs-4 leading-[14px] text-darkslategray-200 inline-block min-w-[89.1px]">
                      49 contributions
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-3.5 max-w-full text-mini-6">
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
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0 box-border max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-2.5 max-w-full">
                    <b className="relative leading-[19px]">
                      A fantastic tour showcasing the history, culture and food
                      of Ethiopia
                    </b>
                    <div className="relative text-mini-4 inline-block min-w-[114px]">
                      Aug 2024 • Solo
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-center text-xs">
              <div className="flex flex-row items-start justify-start">
                <div className="rounded-2xl flex flex-row items-end justify-start py-1.5 pl-[5px] pr-1 gap-1">
                  <img className="h-5 w-5 relative" alt="" src="/svg-221.svg" />
                  <b className="relative leading-[14px] inline-block min-w-[9px]">
                    0
                  </b>
                </div>
                <img
                  className="h-8 w-8 relative rounded-2xl min-h-[32px] z-[1]"
                  alt=""
                  src="/button-menu--open-options-menu.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-6 pl-0.5 pr-1 box-border max-w-full text-base-1 text-darkslategray-200">
            <div className="flex-1 flex flex-col items-start justify-start gap-[5px] max-w-full">
              <div className="relative leading-[22px]">
                <p className="m-0">
                  I had a fantastic day tour of Addis Ababa with Luel. He is
                  extremely knowledgeable and friendly. I
                </p>
                <p className="m-0">
                  highly recommend going on this tour with Luel, which showcases
                  the amazing history, culture and food
                </p>
                <p className="m-0">of Ethiopia.</p>
              </div>
              <div className="flex flex-row items-start justify-center pt-0 px-0 pb-3.5 box-border gap-1 max-w-full mq750:flex-wrap">
                <img
                  className="h-[100px] w-[100px] relative rounded-md overflow-hidden shrink-0 object-cover min-h-[100px]"
                  loading="lazy"
                  alt=""
                  src="/picture1@2x.png"
                />
                <img
                  className="h-[100px] w-[100px] relative rounded-md overflow-hidden shrink-0 object-cover min-h-[100px]"
                  alt=""
                  src="/picture-1@2x.png"
                />
                <img
                  className="h-[100px] w-[100px] relative rounded-md overflow-hidden shrink-0 object-cover min-h-[100px]"
                  alt=""
                  src="/picture-2@2x.png"
                />
                <img
                  className="h-[100px] w-[100px] relative rounded-md overflow-hidden shrink-0 object-cover min-h-[100px]"
                  alt=""
                  src="/picture-3@2x.png"
                />
                <img
                  className="h-[100px] w-[100px] relative rounded-md overflow-hidden shrink-0 object-cover min-h-[100px]"
                  alt=""
                  src="/picture-4@2x.png"
                />
                <img
                  className="h-[100px] w-[100px] relative rounded-md overflow-hidden shrink-0 object-cover min-h-[100px]"
                  alt=""
                  src="/picture-5@2x.png"
                />
                <img
                  className="h-[100px] w-[100px] relative rounded-md overflow-hidden shrink-0 object-cover min-h-[100px]"
                  alt=""
                  src="/picture-6@2x.png"
                />
              </div>
              <div className="flex flex-row items-start justify-start pt-0 px-0 pb-5 text-2xs-9">
                <div className="relative leading-[14px] inline-block min-w-[120.6px]">
                  Written August 4, 2024
                </div>
              </div>
              <div className="self-stretch h-px relative border-gainsboro-200 border-t-[1px] border-solid box-border overflow-hidden shrink-0" />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[33px] pl-1.5 pr-0 box-border max-w-full text-mini-6">
            <div className="flex-1 flex flex-col items-start justify-start gap-[27px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start max-w-full [row-gap:20px] mq750:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start gap-[37px] max-w-full mq750:gap-[18px] mq750:min-w-full">
                  <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
                    <div className="w-[282.2px] flex flex-col items-start justify-start gap-[27px]">
                      <div className="overflow-hidden flex flex-row items-start justify-start py-px px-0 gap-2">
                        <div className="h-8 w-8 relative rounded-2xl overflow-hidden shrink-0">
                          <img
                            className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-full object-cover"
                            alt=""
                            src="/link-1@2x.png"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start gap-0.5 shrink-0">
                          <b className="relative leading-[19px] inline-block min-w-[70px]">
                            Melanie S
                          </b>
                          <div className="relative text-xs-4 leading-[14px] text-darkslategray-200 inline-block min-w-[74.4px]">
                            1 contribution
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-2.5 text-mini-5">
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
                        <b className="relative leading-[19px]">
                          Don't miss out on this great experience!
                        </b>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-center text-xs">
                      <div className="rounded-2xl flex flex-row items-end justify-start py-1.5 pl-[5px] pr-1 gap-1">
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/svg-221.svg"
                        />
                        <b className="relative leading-[14px] inline-block min-w-[9px]">
                          0
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[19px] max-w-full text-base-3 text-darkslategray-200">
                    <div className="flex flex-col items-start justify-start gap-[11px] max-w-full">
                      <div className="h-[60px] relative leading-[22px] flex items-center shrink-0 z-[1]">
                        <span>
                          <p className="m-0">
                            Luel was so knowledgeable of the area both as a
                            driver and in history and facts.He was also very
                          </p>
                          <p className="m-0">
                            accommodating to our needs for the tour and great
                            overall!
                          </p>
                          <p className="m-0">
                            Knows all the best places to go, makingbthis tour
                            one not to miss if you are in Addis Ababa
                          </p>
                        </span>
                      </div>
                      <div className="flex flex-row items-start justify-center gap-1 max-w-full mq750:flex-wrap">
                        <img
                          className="h-[100px] w-[100px] relative rounded-md overflow-hidden shrink-0 object-cover min-h-[100px]"
                          alt=""
                          src="/picture-7@2x.png"
                        />
                        <img
                          className="h-[100px] w-[100px] relative rounded-md overflow-hidden shrink-0 object-cover min-h-[100px]"
                          alt=""
                          src="/picture-8@2x.png"
                        />
                        <img
                          className="h-[100px] w-[100px] relative rounded-md overflow-hidden shrink-0 object-cover min-h-[100px]"
                          alt=""
                          src="/picture-9@2x.png"
                        />
                        <img
                          className="h-[100px] w-[100px] relative rounded-md overflow-hidden shrink-0 object-cover min-h-[100px]"
                          alt=""
                          src="/picture-10@2x.png"
                        />
                        <img
                          className="h-[100px] w-[100px] relative rounded-md overflow-hidden shrink-0 object-cover min-h-[100px]"
                          alt=""
                          src="/picture-11@2x.png"
                        />
                        <img
                          className="h-[100px] w-[100px] relative rounded-md overflow-hidden shrink-0 object-cover min-h-[100px]"
                          alt=""
                          src="/picture-12@2x.png"
                        />
                      </div>
                    </div>
                    <div className="relative text-2xs-9 leading-[14px] inline-block min-w-[112px]">
                      Written July 28, 2024
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <img
                    className="w-8 h-8 relative rounded-2xl z-[1]"
                    alt=""
                    src="/button-menu--open-options-menu.svg"
                  />
                </div>
              </div>
              <div className="self-stretch h-px relative border-gainsboro-200 border-t-[1px] border-solid box-border overflow-hidden shrink-0" />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[27px] pl-[3px] pr-0 box-border max-w-full text-mini-9 text-darkslategray-200">
            <div className="flex-1 flex flex-col items-start justify-start gap-[37px] max-w-full mq750:gap-[18px]">
              <div className="self-stretch flex flex-row items-start justify-start gap-[11.5px] max-w-full mq750:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start gap-[19px] min-w-[432px] max-w-full mq750:min-w-full">
                  <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[18px] gap-5 text-wwwtripadvisorcom-black">
                    <div className="flex flex-col items-start justify-start gap-[17px]">
                      <div className="overflow-hidden flex flex-row items-start justify-start py-px px-0 gap-2">
                        <div className="h-8 w-8 relative rounded-2xl overflow-hidden shrink-0">
                          <img
                            className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-full object-cover"
                            alt=""
                            src="/link-2@2x.png"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start gap-[5px] shrink-0">
                          <b className="relative leading-[19px] inline-block min-w-[69px]">
                            Bridget O
                          </b>
                          <div className="relative text-xs-4 leading-[14px] text-darkslategray-200 inline-block min-w-[74.4px]">
                            1 contribution
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 px-[3px]">
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
                    </div>
                    <b className="relative leading-[19px]">
                      Great tour and excellent hospitality
                    </b>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[5px] max-w-full text-base-4">
                    <div className="relative leading-[22px]">
                      <p className="m-0">
                        Desale went above and beyond to make sure I had a great
                        tour and trip to Ethiopia. I will be
                      </p>
                      <p className="m-0">
                        recommending him and this tour to any coming to Addis.
                      </p>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-1 max-w-full text-mini-3 text-wwwtripadvisorcom-black mq450:flex-wrap">
                      <div className="flex flex-row items-start justify-start relative">
                        <div className="absolute !m-[0] right-[-6px] bottom-[36px] inline-block min-w-[106px]">
                          Jul 2024 • Solo
                        </div>
                        <img
                          className="h-[100px] w-[100px] relative rounded-md overflow-hidden shrink-0 object-cover z-[1]"
                          alt=""
                          src="/picture-13@2x.png"
                        />
                      </div>
                      <img
                        className="h-[100px] w-[100px] relative rounded-md overflow-hidden shrink-0 object-cover min-h-[100px] z-[1]"
                        alt=""
                        src="/picture-14@2x.png"
                      />
                      <img
                        className="h-[100px] w-[100px] relative rounded-md overflow-hidden shrink-0 object-cover min-h-[100px]"
                        alt=""
                        src="/picture-15@2x.png"
                      />
                      <img
                        className="h-[100px] w-[100px] relative rounded-md overflow-hidden shrink-0 object-cover min-h-[100px]"
                        alt=""
                        src="/picture-16@2x.png"
                      />
                    </div>
                  </div>
                  <div className="relative text-2xs-9 leading-[14px] inline-block min-w-[112px]">
                    Written July 22, 2024
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[31px] px-0 pb-0 text-center text-xs text-wwwtripadvisorcom-black">
                  <div className="flex flex-row items-start justify-start">
                    <div className="rounded-2xl flex flex-row items-end justify-start py-1.5 pl-[5px] pr-1 gap-1 shrink-0">
                      <img
                        className="h-5 w-5 relative"
                        alt=""
                        src="/svg-221.svg"
                      />
                      <b className="relative leading-[14px] inline-block min-w-[6px]">
                        1
                      </b>
                    </div>
                    <img
                      className="h-8 w-8 relative rounded-2xl min-h-[32px] shrink-0"
                      alt=""
                      src="/button-menu--open-options-menu.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch h-px flex flex-row items-start justify-start py-0 pl-[3px] pr-0 box-border max-w-full">
                <div className="self-stretch flex-1 relative border-gainsboro-200 border-t-[1px] border-solid box-border overflow-hidden max-w-full" />
              </div>
            </div>
          </div>
          <div className="w-[630px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-base">
            <div className="w-40 flex flex-row items-end justify-start gap-[11.7px]">
              <div className="flex-1 flex flex-row items-end justify-start gap-[5.6px]">
                <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-0.5 text-white">
                  <div className="self-stretch rounded-xl bg-wwwtripadvisorcom-black flex flex-row items-start justify-start pt-[13.5px] pb-[6.5px] pl-[17px] pr-[15px]">
                    <b className="relative leading-[20px] inline-block min-w-[7px]">
                      1
                    </b>
                  </div>
                </div>
                <div className="flex-[0.3] rounded-xl bg-white flex flex-row items-start justify-start pt-[13.5px] pb-[6.5px] pl-[15px] pr-[13px]">
                  <b className="relative leading-[20px] inline-block min-w-[11px]">
                    2
                  </b>
                </div>
                <div className="w-[17px] flex flex-col items-start justify-end pt-0 px-0 pb-[11px] box-border">
                  <b className="self-stretch relative leading-[19px]">…</b>
                </div>
              </div>
              <img
                className="h-10 w-10 relative rounded-xl"
                alt=""
                src="/link--next-page.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent16.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent16;
