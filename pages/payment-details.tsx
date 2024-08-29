import { useCallback } from "react";
import { useRouter } from "next/router";
import TitleAndImage from "../components/title-and-image";
import TourBookingDetails from "../components/tour-booking-details";
import Footer1 from "../components/footer1";

const PaymentDetails = () => {
  const router = useRouter();

  const onTourPal1ImageClick = useCallback(() => {
    router.push("/tour-pal-landing-page");
  }, [router]);

  const onContainerClick = useCallback(() => {
    router.push("/overview-page");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-y-auto flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border gap-[32.9px] leading-[normal] tracking-[normal] mq750:gap-4">
      <div className="w-52 h-[38.1px] relative shrink-0 hidden z-[0]" />
      <header className="w-[1157.6px] h-[110.1px] shrink-0 flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-sm text-white font-wwwtripadvisorcom-inter-black-463">
        <div className="self-stretch w-[739.6px] flex flex-col items-start justify-start gap-1.5 max-w-full">
          <img
            className="w-[183px] flex-1 relative rounded-8xs max-h-full object-cover cursor-pointer z-[1]"
            loading="lazy"
            alt=""
            src="/tourpal-1@2x.png"
            onClick={onTourPal1ImageClick}
          />
          <div className="self-stretch flex flex-row items-start justify-end max-w-full">
            <div className="w-[377.6px] flex flex-row items-start justify-between max-w-full gap-5 mq450:w-[221.2px] mq750:w-[224.1px]">
              <div className="w-[153.5px] flex flex-row items-end justify-start gap-2 mq750:hidden">
                <div className="w-8 rounded-2xl bg-wwwtripadvisorcom-black flex flex-row items-start justify-start pt-[9px] pb-1.5 pl-[13px] pr-[11px] box-border">
                  <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[7px]">
                    1
                  </a>
                </div>
                <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[3px] text-mini-9 text-wwwtripadvisorcom-black">
                  <b className="self-stretch relative [text-decoration:underline] leading-[20px] inline-block min-w-[113.5px] whitespace-nowrap">
                    Contact Details
                  </b>
                </div>
              </div>
              <div className="w-[156.4px] flex flex-row items-end justify-start gap-2 text-sm-7 mq450:hidden">
                <div className="w-8 rounded-2xl bg-wwwtripadvisorcom-black flex flex-row items-start justify-start pt-[9px] pb-[7px] pl-3 pr-2.5 box-border shrink-0">
                  <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[9px]">
                    2
                  </a>
                </div>
                <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[3px] text-mini-6 text-wwwtripadvisorcom-black">
                  <b className="self-stretch relative leading-[20px] inline-block min-w-[116.4px] shrink-0 whitespace-nowrap">
                    Payment Details
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="w-full h-0.5 absolute !m-[0] top-[172.1px] right-[0px] left-[0px] border-silver-100 border-t-[2px] border-solid box-border shrink-0" />
      <div className="w-[178px] h-px absolute !m-[0] bottom-[-2.2px] left-[-102px] shrink-0 [transform:_rotate(180deg)] [transform-origin:0_0]" />
      <main className="self-stretch flex flex-row items-start justify-start pt-0 px-[169px] pb-[0.8px] box-border gap-[169px] max-w-full text-left text-sm-4 text-wwwtripadvisorcom-black font-wwwtripadvisorcom-inter-black-463 lg:gap-[84px] lg:pl-[84px] lg:pr-[84px] lg:box-border mq450:gap-[21px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[42px] mq750:pl-[42px] mq750:pr-[42px] mq750:box-border">
        <div className="ml-[-170px] w-px flex flex-col items-start justify-start pt-[1106.2px] px-0 pb-0 box-border shrink-0 lg:pt-[719px] lg:box-border mq750:pt-[467px] mq750:box-border">
          <div className="self-stretch h-px overflow-hidden shrink-0 flex flex-row items-start justify-start relative">
            <div className="h-[17px] w-[353.1px] absolute !m-[0] right-[-352.1px] bottom-[-16px] flex items-center z-[1]">{`{\"mode\":\"full\",\"isActive\":true,\"isUserDisabled\":false}`}</div>
          </div>
        </div>
        <section className="w-[1182px] bg-white flex flex-col items-start justify-start pt-0 px-0 pb-[37px] box-border shrink-0 max-w-full z-[1] text-left text-xs text-dimgray-200 font-wwwtripadvisorcom-inter-black-463">
          <div className="self-stretch bg-white flex flex-row items-start justify-start p-6 box-border min-h-[84px] [row-gap:20px] mq450:flex-wrap">
            <img
              className="h-3 w-3 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/icon2.svg"
            />
            <div className="flex flex-col items-start justify-start py-0 px-0">
              <div className="mr-[-0.2px] relative leading-[12px] inline-block min-w-[91.2px]">{` Contact Details `}</div>
            </div>
            <img
              className="h-3 w-3 relative overflow-hidden shrink-0"
              alt=""
              src="/icon-12.svg"
            />
            <div className="relative text-xs-3 inline-block min-w-[83.5px]">
              {" "}
              Activity Details
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-5 pr-6 box-border max-w-full text-center text-2xl-9 text-wwwtripadvisorcom-black">
            <div className="flex-1 flex flex-row items-start justify-start gap-[27.8px] max-w-full lg:flex-wrap">
              <div className="flex-1 flex flex-col items-end justify-start gap-[82px] max-w-full mq1050:min-w-full mq450:gap-5 mq750:gap-[41px]">
                <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-3 box-border max-w-full text-left">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[49px] max-w-full mq750:gap-6">
                    <b className="relative leading-[24px] mq450:text-lg mq450:leading-[19px]">
                      Payment Details
                    </b>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[14.2px] text-mini-4">
                      <b className="relative leading-[20px] inline-block min-w-[65px]">
                        Pay with:
                      </b>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[10.9px] text-base-3">
                        <div className="self-stretch rounded-xl bg-white border-gainsboro-200 border-[2px] border-solid flex flex-row items-end justify-start pt-[13px] px-[18px] pb-[15px] gap-[3.8px] mq750:flex-wrap">
                          <div className="flex flex-col items-start justify-end pt-0 pb-[5px] pl-0 pr-[5px]">
                            <div className="w-[21px] h-[21px] relative shadow-[0px_0px_2px_1px_rgba(0,_0,_0,_0.1)_inset] rounded-2xl bg-white border-darkslategray-300 border-[1px] border-solid box-border" />
                          </div>
                          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
                            <b className="relative">Credit/Debit Card</b>
                          </div>
                          <img
                            className="h-6 w-[35px] relative rounded overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src="/cc-discover-icon-no-bgsvg.svg"
                          />
                          <img
                            className="h-6 w-[35px] relative rounded overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src="/cc-mastercard-icon-no-bgsvg.svg"
                          />
                          <img
                            className="h-6 w-[35px] relative rounded overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src="/cc-amex-icon-no-bgsvg.svg"
                          />
                          <img
                            className="h-6 w-[35px] relative rounded overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src="/cc-visa-icon-no-bgsvg.svg"
                          />
                          <img
                            className="h-6 w-[35px] relative rounded overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src="/cc-jcb-iconsvg.svg"
                          />
                        </div>
                        <div className="self-stretch rounded-xl bg-white border-gainsboro-200 border-[2px] border-solid flex flex-row items-end justify-start pt-[13px] px-[18px] pb-[15px] gap-[2.9px] mq450:flex-wrap">
                          <div className="flex flex-col items-start justify-end pt-0 pb-[5px] pl-0 pr-1.5">
                            <div className="w-[21px] h-[21px] relative shadow-[0px_0px_2px_1px_rgba(0,_0,_0,_0.1)_inset] rounded-2xl bg-white border-darkslategray-300 border-[1px] border-solid box-border" />
                          </div>
                          <input
                            className="w-[51px] [border:none] [outline:none] bg-[transparent] h-5 flex flex-col items-start justify-end pt-0 px-0 pb-px box-border font-wwwtripadvisorcom-inter-black-463 font-bold text-base-3 text-wwwtripadvisorcom-black"
                            placeholder="PayPal"
                            type="text"
                          />
                          <img
                            className="h-6 w-[35px] relative rounded overflow-hidden shrink-0"
                            alt=""
                            src="/paypal-icon-no-bgsvg.svg"
                          />
                        </div>
                        <div className="self-stretch rounded-xl bg-white border-gainsboro-200 border-[2px] border-solid flex flex-row items-end justify-start pt-[13px] px-[18px] pb-[15px] [row-gap:20px] mq450:flex-wrap">
                          <div className="flex flex-col items-start justify-end pt-0 pb-[5px] pl-0 pr-[9px]">
                            <div className="w-[21px] h-[21px] relative shadow-[0px_0px_2px_1px_rgba(0,_0,_0,_0.1)_inset] rounded-2xl bg-white border-darkslategray-300 border-[1px] border-solid box-border" />
                          </div>
                          <input
                            className="w-[65px] [border:none] [outline:none] bg-[transparent] h-5 flex flex-col items-start justify-end pt-0 px-0 pb-px box-border font-wwwtripadvisorcom-inter-black-463 font-bold text-base-3 text-wwwtripadvisorcom-black"
                            placeholder="TeleBirr"
                            type="text"
                          />
                          <div className="h-6 w-[35px] relative rounded bg-whitesmoke-100 overflow-hidden shrink-0">
                            <img
                              className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden object-cover"
                              alt=""
                              src="/paypal-icon-no-bgsvg-1@2x.png"
                            />
                          </div>
                        </div>
                        <div className="self-stretch rounded-xl bg-white border-gainsboro-200 border-[2px] border-solid flex flex-row items-end justify-start pt-[13px] px-[18px] pb-[15px] [row-gap:20px] mq450:flex-wrap">
                          <div className="flex flex-col items-start justify-end pt-0 pb-[5px] pl-0 pr-[9px]">
                            <div className="w-[21px] h-[21px] relative shadow-[0px_0px_2px_1px_rgba(0,_0,_0,_0.1)_inset] rounded-2xl bg-white border-darkslategray-300 border-[1px] border-solid box-border" />
                          </div>
                          <input
                            className="w-[219px] [border:none] [outline:none] bg-[transparent] h-5 flex flex-col items-start justify-end pt-0 px-0 pb-px box-border font-wwwtripadvisorcom-inter-black-463 font-bold text-base-3 text-wwwtripadvisorcom-black"
                            placeholder="Commercial Bank of Ethiopia"
                            type="text"
                          />
                          <div className="h-6 w-[35px] relative rounded bg-whitesmoke-100 overflow-hidden shrink-0">
                            <div className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden bg-[url('/image-61@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
                              <div className="absolute top-[0px] left-[0px] w-full h-full hidden" />
                              <img
                                className="absolute top-[0px] left-[0px] w-full h-full object-cover hidden"
                                alt=""
                                src="/image-61@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[706px] flex flex-row items-start justify-center pt-0 px-5 pb-[285.2px] box-border max-w-full text-2xl-4 mq450:pb-[185px] mq450:box-border">
                  <div className="w-[486px] flex flex-col items-end justify-start gap-[29px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[22px] pr-5">
                      <div className="w-[209.5px] flex flex-col items-start justify-start gap-[1.8px]">
                        <b className="self-stretch relative leading-[29px] mq450:text-mid mq450:leading-[23px]">
                          Total Price: $92.00
                        </b>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[33px] pr-[34px] text-mini-6">
                          <div className="flex-1 flex flex-row items-end justify-start gap-[5px]">
                            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
                              <img
                                className="w-[22px] h-[22px] relative rounded-mini"
                                loading="lazy"
                                alt=""
                                src="/background5.svg"
                              />
                            </div>
                            <b className="flex-1 relative leading-[20px] inline-block min-w-[114.6px]">
                              Non-refundable
                            </b>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="cursor-pointer [border:none] py-px pl-[25px] pr-[23px] bg-[transparent] self-stretch h-14 overflow-hidden shrink-0 flex flex-row items-start justify-start box-border max-w-full"
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
                <div className="w-[297px] relative text-xs-3 text-gray-200 whitespace-pre-wrap flex items-center justify-center">{`© 2024 TourPal All rights reserved.  `}</div>
              </div>
              <div className="w-[390.2px] flex flex-col items-start justify-start gap-6 min-w-[390.2px] max-w-full text-left text-sm text-darkslategray-200 lg:flex-1 mq1050:min-w-full">
                <div className="self-stretch rounded-xl border-gainsboro-200 border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start pt-[23px] px-0 pb-0 gap-[23.8px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[22px] pr-6 box-border max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[21px] max-w-full">
                      <div className="self-stretch flex flex-col items-start justify-start gap-5 max-w-full">
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
                          <TitleAndImage
                            picture="/picture2@2x.png"
                            group="/group1@2x.png"
                            group="/group1@2x.png"
                            group="/group1@2x.png"
                            group="/group1@2x.png"
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
                        <div className="w-[128.3px] h-[19px] relative">
                          <div className="absolute top-[2px] left-[1.8px] leading-[17px] flex items-center w-[18.7px] h-[17px] min-w-[18.7px]">{`By `}</div>
                          <b className="absolute top-[0px] left-[0px] text-smi-7 [text-decoration:underline] leading-[17px] flex text-center items-center justify-center w-[128.3px] h-[17px]">
                            Felega Tours
                          </b>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 px-px text-smi-9 text-wwwtripadvisorcom-black">
                        <b className="relative leading-[17px]">
                          <p className="m-0">
                            Full Day Tour of Addis Ababa with Hotel
                          </p>
                          <p className="m-0">Pickup and Drop-off</p>
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
                    <div className="self-stretch flex-1 relative border-gainsboro-200 border-t-[1px] border-solid box-border overflow-hidden max-w-full" />
                  </div>
                  <TourBookingDetails />
                  <div className="self-stretch h-px flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
                    <div className="self-stretch flex-1 relative border-gainsboro-200 border-t-[1px] border-solid box-border overflow-hidden max-w-full" />
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-6 text-sm-6">
                    <div className="flex flex-row items-start justify-start gap-1">
                      <img
                        className="h-4 w-4 relative"
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
                <Footer1 />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PaymentDetails;
