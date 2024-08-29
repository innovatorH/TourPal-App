import PropTypes from "prop-types";

const TripPlanning = ({ className = "" }) => {
  return (
    <section
      className={`w-[1690.1px] flex flex-row items-start justify-center pt-0 px-0 pb-[85.3px] box-border max-w-full text-center text-4xl-9 text-text-clr font-poppins mq900:pb-[55px] mq900:box-border mq450:pb-9 mq450:box-border ${className}`}
    >
      <div className="w-[1482.1px] flex flex-col items-start justify-start gap-[19.9px] max-w-full">
        <div className="flex flex-row items-start justify-start py-0 px-1">
          <div className="relative font-semibold mq450:text-lgi">
            Easy and Fast
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center gap-[135.6px] max-w-full text-left text-47xl-5 text-rd1 font-volkhov mq900:gap-[34px] mq1325:gap-[68px] mq450:gap-[17px] mq1725:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-[42.1px] min-w-[456px] max-w-full mq900:gap-[21px] mq900:min-w-full">
            <b className="self-stretch relative capitalize mq900:text-34xl mq450:text-21xl">
              <p className="m-0">{`Enjoy your next Trip `}</p>
              <p className="m-0">in 3 easy steps</p>
            </b>
            <div className="w-[554px] flex flex-row items-start justify-start gap-[27.5px] max-w-full text-2xl-3 text-text-clr font-poppins mq900:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-[5.3px] px-0 pb-0">
                <div className="flex flex-col items-start justify-start gap-[98.3px]">
                  <div className="rounded-[17.29px] bg-color1 flex flex-row items-start justify-start pt-[17.3px] pb-[17.2px] pl-[17px] pr-[15px]">
                    <div className="h-[63.8px] w-[62.5px] relative rounded-[17.29px] bg-color1 hidden" />
                    <img
                      className="h-[29.3px] w-[29.3px] relative object-contain z-[1]"
                      loading="lazy"
                      alt=""
                      src="/selection-1@2x.png"
                    />
                  </div>
                  <img
                    className="w-[62.5px] h-[63.8px] relative"
                    loading="lazy"
                    alt=""
                    src="/group-12.svg"
                  />
                  <img
                    className="w-[62.5px] h-[63.8px] relative"
                    loading="lazy"
                    alt=""
                    src="/group-11.svg"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[39.5px] min-w-[302px] max-w-full mq450:gap-5">
                <div className="self-stretch flex flex-col items-start justify-start gap-[20.1px]">
                  <b className="relative leading-[124.5%] mq450:text-mid mq450:leading-[21px]">
                    Create Your Perfect Journey
                  </b>
                  <div className="self-stretch relative leading-[124.5%] mq450:text-mid mq450:leading-[21px]">
                    Tell us your interests, travel style, budget, and favorite
                    activities, and we’ll create a personalized travel itinerary
                    just for you.
                  </div>
                </div>
                <div className="w-[453.6px] flex flex-col items-start justify-start gap-[17px] max-w-full">
                  <b className="relative leading-[124.5%] inline-block max-w-full mq450:text-mid mq450:leading-[21px]">
                    Explore with Interactive Stories
                  </b>
                  <div className="self-stretch relative leading-[124.5%] mq450:text-mid mq450:leading-[21px]">
                    Explore your destinations with our interactive map and enjoy
                    immersive stories about each location along the way.
                  </div>
                </div>
                <div className="w-[404.6px] flex flex-col items-start justify-start gap-4 max-w-full">
                  <b className="relative leading-[124.5%] mq450:text-mid mq450:leading-[21px]">
                    Share Your Adventures
                  </b>
                  <div className="self-stretch relative leading-[124.5%] mq450:text-mid mq450:leading-[21px]">
                    Share your journey by reviewing places, posting photos, and
                    connecting with fellow travelers.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[645.1px] flex flex-col items-end justify-start min-w-[645.1px] min-h-[580px] max-w-full text-4xl-9 text-black font-poppins mq900:min-w-full mq1725:flex-1">
            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
              <div className="w-[492px] flex flex-row items-start justify-start relative max-w-full">
                <img
                  className="h-[488.2px] w-[470.9px] absolute !m-[0] top-[-30.8px] right-[-58.8px]"
                  alt=""
                  src="/group-589.svg"
                />
                <div className="flex-1 shadow-[0px_133px_106.41px_rgba(0,_0,_0,_0.02),_0px_86.2px_62.32px_rgba(0,_0,_0,_0.02),_0px_51.2px_33.89px_rgba(0,_0,_0,_0.01),_0px_26.6px_17.29px_rgba(0,_0,_0,_0.01),_0px_10.8px_8.67px_rgba(0,_0,_0,_0.01),_0px_2.5px_4.19px_rgba(0,_0,_0,_0)] rounded-[34.58px] bg-white flex flex-col items-start justify-start pt-6 pb-[42.1px] pl-[33px] pr-8 box-border gap-[9.3px] max-w-full z-[1] mq900:pt-5 mq900:pb-[27px] mq900:box-border">
                  <div className="w-[492px] h-[580px] relative shadow-[0px_133px_106.41px_rgba(0,_0,_0,_0.02),_0px_86.2px_62.32px_rgba(0,_0,_0,_0.02),_0px_51.2px_33.89px_rgba(0,_0,_0,_0.01),_0px_26.6px_17.29px_rgba(0,_0,_0,_0.01),_0px_10.8px_8.67px_rgba(0,_0,_0,_0.01),_0px_2.5px_4.19px_rgba(0,_0,_0,_0)] rounded-[34.58px] bg-white hidden max-w-full" />
                  <img
                    className="self-stretch h-[289.7px] relative rounded-[31.92px] max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                    alt=""
                    src="/testimonial-divider@2x.png"
                  />
                  <div className="self-stretch flex flex-col items-start justify-start gap-[38.5px] mq450:gap-[19px]">
                    <div className="flex flex-col items-start justify-start gap-[16.5px]">
                      <div className="relative tracking-[0.02em] leading-[30px] font-medium z-[1] mq450:text-lgi mq450:leading-[24px]">
                        Trip To Ethiopia
                      </div>
                      <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[11.1px] gap-4 text-2xl-3 text-text-2 mq450:flex-wrap">
                        <div className="flex flex-row items-start justify-start gap-[3px]">
                          <div className="relative leading-[27px] font-medium inline-block min-w-[118px] z-[1] mq450:text-mid mq450:leading-[21px]">
                            14-29 June
                          </div>
                          <div className="h-[22.7px] flex flex-col items-start justify-start pt-[1.4px] px-0 pb-0 box-border">
                            <div className="w-[1.3px] h-[22.6px] relative bg-text-2 border-text-2 border-r-[1.3px] border-solid box-border z-[1]" />
                          </div>
                        </div>
                        <div className="relative leading-[27px] font-medium z-[1] mq450:text-mid mq450:leading-[21px]">
                          by Travel Guide
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 px-1">
                        <img
                          className="h-[47.9px] w-[184.9px] relative z-[1]"
                          alt=""
                          src="/options.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-end justify-between gap-5 text-2xl-3 text-text-2">
                      <div className="flex flex-row items-start justify-start gap-[19.9px] shrink-0">
                        <img
                          className="h-[21.3px] w-[21.3px] relative object-contain shrink-0 z-[1]"
                          alt=""
                          src="/building-1@2x.png"
                        />
                        <div className="flex flex-col items-start justify-start pt-[1.4px] px-0 pb-0">
                          <div className="relative tracking-[-0.02em] leading-[124.5%] font-medium shrink-0 z-[1] mq450:text-mid mq450:leading-[21px]">
                            24 people going
                          </div>
                        </div>
                      </div>
                      <img
                        className="h-[24.7px] w-[26.6px] relative shrink-0 z-[2]"
                        loading="lazy"
                        alt=""
                        src="/heart-6-1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[349.8px] shadow-[0px_133px_106.41px_rgba(0,_0,_0,_0.02),_0px_86.2px_62.32px_rgba(0,_0,_0,_0.02),_0px_51.2px_33.89px_rgba(0,_0,_0,_0.01),_0px_26.6px_17.29px_rgba(0,_0,_0,_0.01),_0px_10.8px_8.67px_rgba(0,_0,_0,_0.01),_0px_2.5px_4.19px_rgba(0,_0,_0,_0)] rounded-[23.94px] bg-white flex flex-row items-start justify-start pt-[21.3px] pb-[29.2px] pl-[26px] pr-2 box-border gap-[13.3px] max-w-full z-[2] mt-[-241.1px] text-lg-6 text-text-2 mq450:flex-wrap">
              <div className="h-[171.6px] w-[349.8px] relative shadow-[0px_133px_106.41px_rgba(0,_0,_0,_0.02),_0px_86.2px_62.32px_rgba(0,_0,_0,_0.02),_0px_51.2px_33.89px_rgba(0,_0,_0,_0.01),_0px_26.6px_17.29px_rgba(0,_0,_0,_0.01),_0px_10.8px_8.67px_rgba(0,_0,_0,_0.01),_0px_2.5px_4.19px_rgba(0,_0,_0,_0)] rounded-[23.94px] bg-white hidden max-w-full" />
              <div className="w-[66.5px] flex flex-col items-start justify-start pt-[2.7px] px-0 pb-0 box-border">
                <div className="self-stretch h-[66.5px] relative">
                  <div className="absolute top-[0px] left-[0px] shadow-[1.3px_12px_7.98px_rgba(105,_104,_104,_0.13)] rounded-[50%] bg-gray-900 w-full h-full z-[1]" />
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[2]"
                    loading="lazy"
                    alt=""
                    src="/mask-group@2x.png"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[17.9px] min-w-[153px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[7.6px]">
                    <div className="flex flex-row items-start justify-start py-0 px-px">
                      <div className="relative tracking-[-0.04em] leading-[124.5%] font-medium inline-block min-w-[77px] z-[1]">
                        Ongoing
                      </div>
                    </div>
                    <div className="relative text-4xl-9 tracking-[-0.01em] leading-[30px] font-medium text-black z-[1] mq450:text-lgi mq450:leading-[24px]">
                      Trip to Addis Ababa
                    </div>
                  </div>
                </div>
                <div className="w-[210.2px] flex flex-col items-start justify-start gap-[12.9px] text-color">
                  <div className="relative tracking-[-0.05em] leading-[124.5%] font-medium shrink-0 z-[1]">
                    <span>40%</span>
                    <span className="text-black"> completed</span>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0">
                    <div className="h-[6.7px] flex-1 relative rounded-20xl-9 bg-circle shrink-0 z-[1]">
                      <div className="absolute top-[0px] left-[0px] rounded-20xl-9 bg-circle w-full h-full hidden" />
                      <div className="absolute top-[0px] left-[0px] rounded-20xl-9 bg-color w-[97.1px] h-[6.7px] z-[1]" />
                    </div>
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

TripPlanning.propTypes = {
  className: PropTypes.string,
};

export default TripPlanning;
