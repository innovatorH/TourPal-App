import { useCallback } from "react";
import { useRouter } from "next/router";
import TitleAndImage from "../components/title-and-image";
import TourBookingDetails from "../components/tour-booking-details";
import Footer1 from "../components/footer1";

const ContactDetails = () => {
  const router = useRouter();

  const onTourPal1ImageClick = useCallback(() => {
    router.push("/tour-pal-landing-page");
  }, [router]);

  const onContainerClick = useCallback(() => {
    router.push("/payment-details");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-y-auto flex flex-col items-start justify-start pt-[30px] pb-0 pl-0 pr-6 box-border gap-1.5 leading-[normal] tracking-[normal]">
      <div className="w-[601px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <img
          className="h-[72px] w-[183px] relative rounded-8xs object-cover cursor-pointer"
          loading="lazy"
          alt=""
          src="/tourpal-1@2x.png"
          onClick={onTourPal1ImageClick}
        />
      </div>
      <div className="w-full h-0.5 absolute !m-[0] top-[172.1px] right-[0px] left-[0px] border-silver-100 border-t-[2px] border-solid box-border shrink-0" />
      <div className="w-[178px] h-px absolute !m-[0] bottom-[-2.2px] left-[-102px] shrink-0 [transform:_rotate(180deg)] [transform-origin:0_0]" />
      <main className="self-stretch flex flex-row items-start justify-start pt-0 px-[157px] pb-[0.8px] box-border gap-[157px] max-w-full text-left text-sm-4 text-wwwtripadvisorcom-black font-wwwtripadvisorcom-inter-black-463 lg:gap-[78px] lg:pl-[78px] lg:pr-[78px] lg:box-border mq450:gap-5 mq750:gap-[39px] mq750:pl-[39px] mq750:pr-[39px] mq750:box-border">
        <div className="ml-[-158px] w-px flex flex-col items-start justify-start pt-[1159.2px] px-0 pb-0 box-border shrink-0 lg:pt-[753px] lg:box-border mq750:pt-[489px] mq750:box-border">
          <div className="self-stretch h-px overflow-hidden shrink-0 flex flex-row items-start justify-start relative">
            <div className="h-[17px] w-[353.1px] absolute !m-[0] right-[-352.1px] bottom-[-16px] flex items-center z-[1]">{`{\"mode\":\"full\",\"isActive\":true,\"isUserDisabled\":false}`}</div>
          </div>
        </div>
        <section className="w-[1182px] flex flex-col items-end justify-start gap-[32.9px] shrink-0 max-w-full text-center text-sm text-white font-wwwtripadvisorcom-inter-black-463 mq750:gap-4">
          <div className="w-[1158px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="w-[359.6px] flex flex-row items-start justify-start flex-wrap content-start gap-[49.7px] shrink-0 max-w-full mq450:gap-[25px]">
              <div className="flex-1 flex flex-row items-end justify-start gap-2 min-w-[101px]">
                <div className="w-8 rounded-2xl bg-wwwtripadvisorcom-black flex flex-row items-start justify-start pt-[9px] pb-1.5 pl-[13px] pr-[11px] box-border">
                  <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[7px]">
                    1
                  </a>
                </div>
                <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[3px] text-mini text-wwwtripadvisorcom-black">
                  <a className="[text-decoration:none] self-stretch relative leading-[20px] font-bold text-[inherit] inline-block min-w-[113.5px]">
                    Contact Details
                  </a>
                </div>
              </div>
              <div className="flex-1 flex flex-row items-end justify-start gap-2 min-w-[101px] text-sm-7 text-wwwtripadvisorcom-black">
                <div className="w-8 rounded-2xl bg-whitesmoke-100 flex flex-row items-start justify-start pt-[9px] pb-[7px] pl-3 pr-2.5 box-border shrink-0">
                  <b className="relative inline-block min-w-[9px]">3</b>
                </div>
                <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[3px] text-mini-6">
                  <b className="self-stretch relative leading-[20px] inline-block min-w-[116.4px] shrink-0">
                    Payment Details
                  </b>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-white flex flex-row items-end justify-center pt-[71.9px] pb-[37px] pl-[46px] pr-6 box-border gap-7 shrink-0 max-w-full z-[1] text-left text-xl text-wwwtripadvisorcom-black lg:flex-wrap lg:pl-[23px] lg:pt-[47px] lg:pb-6 lg:box-border mq750:pt-[31px] mq750:pb-5 mq750:box-border">
            <div className="h-[72px] w-[1182px] relative bg-white hidden max-w-full" />
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[3.3px] box-border min-w-[450px] max-w-full mq1050:min-w-full">
              <div className="self-stretch h-[940px] flex flex-col items-start justify-start pt-0 px-0 pb-[410.9px] box-border gap-24 max-w-full lg:pb-[267px] lg:box-border mq450:gap-6 mq750:h-auto mq750:gap-12 mq750:pb-[174px] mq750:box-border">
                <div className="flex flex-col items-start justify-start gap-[15px] max-w-full shrink-0">
                  <b className="relative leading-[14px] mq450:text-base mq450:leading-[11px]">
                    Contact Details
                  </b>
                  <div className="relative text-sm leading-[14px]">
                    We'll use this information to send you confirmation and
                    updates about your booking.
                  </div>
                </div>
                <form className="m-0 self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[300.9px] box-border gap-[42.9px] max-w-full mq750:gap-[21px] mq750:pb-[196px] mq750:box-border">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[32.5px] max-w-full mq750:gap-4 mq750:flex-wrap">
                    <div className="flex-1 flex flex-row items-start justify-start min-w-[247px] max-w-full">
                      <div className="w-[380px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border max-w-full">
                        <div className="self-stretch rounded-lg border-silver-400 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-3 px-4 pb-[11px] max-w-full">
                          <div className="h-[57px] w-[381px] relative rounded-lg border-silver-400 border-[1px] border-solid box-border hidden max-w-full" />
                          <input
                            className="w-[100.8px] [border:none] [outline:none] font-zen-kaku-gothic-antique text-base bg-[transparent] h-[29px] relative leading-[28.16px] text-gray-400 text-left inline-block p-0 z-[1]"
                            placeholder="Johnson"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="w-[79.8px] bg-gray-100 overflow-hidden shrink-0 flex flex-row items-start justify-start py-0 px-[5px] box-border whitespace-nowrap z-[1] ml-[-368.8px]">
                        <div className="h-[23px] w-[79.8px] relative bg-gray-100 hidden" />
                        <div className="flex-1 relative text-smi-8 leading-[23px] font-zen-kaku-gothic-antique text-gray-400 text-center inline-block min-w-[68.7px] z-[1]">
                          Your Name
                        </div>
                      </div>
                    </div>
                    <div className="w-[274px] flex flex-row items-start justify-start">
                      <div className="w-[274px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
                        <div className="self-stretch rounded-lg border-silver-400 border-[1px] border-solid flex flex-row items-start justify-start pt-3 px-[11px] pb-[11px]">
                          <div className="h-[57px] w-[275px] relative rounded-lg border-silver-400 border-[1px] border-solid box-border hidden" />
                          <input
                            className="w-[72.7px] [border:none] [outline:none] font-zen-kaku-gothic-antique text-base bg-[transparent] h-[29px] relative leading-[28.16px] text-gray-400 text-left inline-block p-0 z-[1]"
                            placeholder="Doe"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="w-[57.5px] bg-gray-100 overflow-hidden shrink-0 flex flex-row items-start justify-start z-[1] ml-[-265.9px]">
                        <div className="h-[23px] w-[57.5px] relative bg-gray-100 hidden" />
                        <div className="ml-[-5.1px] w-[68.7px] relative text-smi-8 leading-[23px] font-zen-kaku-gothic-antique text-gray-400 text-center inline-block shrink-0 z-[1]">
                          Father
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[7.2px] box-border max-w-full">
                    <div className="w-[687px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border max-w-full">
                      <div className="self-stretch rounded-lg border-darkslategray-100 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-3 px-7 pb-[11px] max-w-full">
                        <div className="h-[57px] w-[688px] relative rounded-lg border-darkslategray-100 border-[1px] border-solid box-border hidden max-w-full" />
                        <input
                          className="w-[314.6px] [border:none] [outline:none] font-zen-kaku-gothic-antique text-base bg-[transparent] h-[29px] relative leading-[28.16px] text-darkslategray-100 text-left inline-block whitespace-nowrap p-0 z-[1]"
                          placeholder="johnsondoe@nomail.com"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="w-[97.6px] bg-gray-100 overflow-hidden shrink-0 flex flex-row items-start justify-start py-0 px-[5px] box-border whitespace-nowrap z-[1] ml-[-666.8px]">
                      <div className="h-[23px] w-[97.6px] relative bg-gray-100 hidden" />
                      <div className="w-[83px] relative text-smi-8 leading-[23px] font-zen-kaku-gothic-antique text-darkslategray-100 text-center inline-block shrink-0 min-w-[83px] z-[1]">
                        Email Address
                      </div>
                    </div>
                  </div>
                  <div className="w-[562px] flex flex-col items-start justify-start gap-10 max-w-full mq750:gap-5">
                    <div className="w-[380px] flex flex-row items-start justify-start max-w-full">
                      <div className="w-[380px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border max-w-full">
                        <div className="self-stretch rounded-lg border-silver-400 border-[1px] border-solid box-border flex flex-row items-start justify-start py-3 pl-7 pr-1.5 gap-[13px] max-w-full mq450:flex-wrap">
                          <div className="h-[57px] w-[381px] relative rounded-lg border-silver-400 border-[1px] border-solid box-border hidden max-w-full" />
                          <input
                            className="w-[calc(100%_-_50px)] [border:none] [outline:none] font-text-me-one text-base bg-[transparent] h-[29px] flex-1 relative leading-[28.16px] text-darkslategray-100 text-left inline-block min-w-[205px] whitespace-nowrap p-0 z-[1]"
                            placeholder="+251-9 "
                            type="text"
                          />
                          <div className="flex flex-col items-start justify-start pt-[6.1px] px-0 pb-0">
                            <img
                              className="w-4 h-4 relative object-cover z-[1]"
                              alt=""
                              src="/exiconeye2@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-[67px] bg-gray-100 overflow-hidden shrink-0 flex flex-row items-start justify-start py-0 pl-[5px] pr-[3px] box-border z-[1] ml-[-368.8px]">
                        <div className="h-[23px] w-[67px] relative bg-gray-100 hidden" />
                        <div className="flex-1 relative text-smi-8 leading-[23px] font-zen-kaku-gothic-antique text-gray-400 text-center z-[1]">
                          Number
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-end max-w-full">
                      <button
                        className="cursor-pointer [border:none] py-px pl-[25px] pr-[23px] bg-[transparent] h-14 w-[486px] overflow-hidden shrink-0 flex flex-row items-start justify-start box-border max-w-full"
                        onClick={onContainerClick}
                      >
                        <div className="h-14 flex-1 rounded-9xl bg-mediumseagreen-200 border-mediumseagreen-100 border-[1px] border-solid box-border flex flex-row items-start justify-center pt-[19px] px-5 pb-[15px] whitespace-nowrap max-w-full">
                          <b className="relative text-mini-8 leading-[20px] font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-center">
                            Complete Booking
                          </b>
                        </div>
                      </button>
                    </div>
                  </div>
                </form>
                <div className="self-stretch flex flex-row items-start justify-end text-center text-xs-3 text-gray-200">
                  <div className="w-[297px] relative whitespace-pre-wrap flex items-center justify-center shrink-0">{`© 2024 TourPal All rights reserved.  `}</div>
                </div>
              </div>
            </div>
            <div className="h-[985.3px] w-[390.5px] flex flex-col items-start justify-start pt-0 px-0 pb-[485.3px] box-border gap-[24.1px] min-w-[390.5px] max-w-full text-sm text-darkslategray-200 lg:flex-1 lg:pb-[315px] lg:box-border mq1050:min-w-full mq750:h-auto mq750:pb-[205px] mq750:box-border">
              <div className="self-stretch rounded-xl border-gainsboro-200 border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start pt-[23px] px-0 pb-0 gap-[23.8px] shrink-0 max-w-full z-[1]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[23px] pr-6 box-border max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[21px] max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[21px]">
                      <TitleAndImage
                        propFlex="unset"
                        propAlignSelf="stretch"
                        picture="/picture@2x.png"
                        group="/group@2x.png"
                        group="/group@2x.png"
                        group="/group@2x.png"
                        group="/group@2x.png"
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
                      <div className="w-[128.3px] h-[18px] relative">
                        <div className="absolute top-[1px] left-[0.3px] leading-[17px] flex items-center w-[18.7px] h-[17px] min-w-[18.7px]">{`By `}</div>
                        <b className="absolute top-[0px] left-[0px] text-smi-7 [text-decoration:underline] leading-[17px] flex text-center items-center justify-center w-[128.3px] h-[17px]">
                          Felega Tours
                        </b>
                      </div>
                    </div>
                    <b className="relative text-smi-9 leading-[17px] text-wwwtripadvisorcom-black">
                      <p className="m-0">
                        Full Day Tour of Addis Ababa with Hotel
                      </p>
                      <p className="m-0">Pickup and Drop-off</p>
                    </b>
                  </div>
                </div>
                <div className="self-stretch h-px flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
                  <div className="self-stretch flex-1 relative border-gainsboro-200 border-t-[1px] border-solid box-border overflow-hidden max-w-full" />
                </div>
                <TourBookingDetails
                  propMinWidth="96px"
                  propTextDecoration="none"
                />
                <div className="self-stretch h-px flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
                  <div className="self-stretch flex-1 relative border-gainsboro-200 border-t-[1px] border-solid box-border overflow-hidden max-w-full" />
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-6 text-sm-6">
                  <div className="flex flex-row items-start justify-start gap-1">
                    <img
                      className="h-4 w-4 relative"
                      loading="lazy"
                      alt=""
                      src="/svg-33.svg"
                    />
                    <div className="relative leading-[17px] inline-block min-w-[103px]">
                      Non-refundable
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-whitesmoke-100 border-gainsboro-200 border-t-[1px] border-solid flex flex-row items-start justify-between pt-[23px] px-6 pb-6 gap-5 text-[16.3px] text-wwwtripadvisorcom-black mq450:flex-wrap">
                  <b className="relative leading-[22px] inline-block min-w-[45px]">
                    Total:
                  </b>
                  <b className="relative text-[15.5px] leading-[22px] inline-block text-gray-500 min-w-[63.1px] whitespace-nowrap">
                    $92.00
                  </b>
                </div>
              </div>
              <Footer1
                propHeight="280.1px"
                propPadding="0px 0px 90.7px"
                propHeight1="76.1px"
                propPadding1="0px 0px 17.1px"
                propWidth="198px"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactDetails;
