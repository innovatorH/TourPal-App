import { useCallback } from "react";
import GroupComponent from "../components/group-component";
import { useRouter } from "next/router";

const JourneystoryGeneratorUser = () => {
  const router = useRouter();

  const onLinkClick = useCallback(() => {
    router.push("/place");
  }, [router]);

  const onButtonClick = useCallback(() => {
    router.push("/overview-page");
  }, [router]);

  const onItemContainerClick = useCallback(() => {
    router.push("/red-terror-martyrs-memorial");
  }, [router]);

  return (
    <div className="w-full relative [background:linear-gradient(#fff,_#fff),_#fff] overflow-y-auto flex flex-col items-end justify-start pt-[34px] px-0 pb-[121px] box-border gap-[50.9px] leading-[normal] tracking-[normal] mq750:gap-[25px]">
      <GroupComponent />
      <main className="self-stretch flex flex-row items-start justify-center py-0 pl-[29px] pr-5 box-border max-w-full shrink-0">
        <section className="w-[1136px] flex flex-col items-start justify-start gap-[67px] max-w-full text-left text-[47.3px] text-wwwtripadvisorcom-black font-wwwtripadvisorcom-inter-black-463 lg:gap-[33px] mq750:gap-[17px]">
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[52px] box-border gap-11 max-w-full text-center mq450:pb-[22px] mq450:box-border mq750:gap-[22px] mq1050:pb-[34px] mq1050:box-border">
            <div className="w-[1087px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <div className="w-[579px] flex flex-col items-end justify-start gap-[23.1px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-end py-0 pl-1.5 pr-[5px] box-border max-w-full shrink-0">
                  <div className="flex-1 relative tracking-[1.08px] leading-[65px] font-black inline-block max-w-full z-[2] mq450:text-9xl mq450:leading-[39px] mq1050:text-19xl mq1050:leading-[52px]">
                    Customize your journey with Trips
                  </div>
                </div>
                <div className="self-stretch relative text-mini leading-[22px] text-darkslategray-200 z-[2]">
                  Now you have two ways to plan your trip—get AI-powered
                  recommendations or explore on your own.
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center gap-4 max-w-full text-left text-6xl mq1050:flex-wrap">
              <div className="flex-1 flex flex-row items-start justify-start relative min-w-[364px] max-w-full mq450:min-w-full mq1050:flex-1">
                <div className="h-[1754px] w-[1319px] absolute !m-[0] right-[-664px] bottom-[-839px]">
                  <img
                    className="absolute top-[1103px] left-[179px] w-6 h-9"
                    loading="lazy"
                    alt=""
                    src="/button--search.svg"
                  />
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                    alt=""
                  />
                </div>
                <div className="flex-1 rounded-xl [background:linear-gradient(143.62deg,_#d5dff7,_#feffc6)] flex flex-col items-center justify-start pt-7 px-5 pb-[27px] box-border gap-9 max-w-full z-[2] mq450:gap-[18px] mq750:pt-5 mq750:pb-5 mq750:box-border">
                  <img
                    className="w-[368px] relative rounded-16xl max-h-full object-cover max-w-full"
                    loading="lazy"
                    alt=""
                    src="/image-37@2x.png"
                  />
                  <div className="flex flex-row items-start justify-start py-0 pl-11 pr-[45px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
                    <div className="flex flex-col items-start justify-start gap-8 mq450:gap-4">
                      <h3 className="m-0 relative text-inherit tracking-[0.56px] leading-[28px] font-extrabold font-[inherit] mq450:text-xl mq450:leading-[22px]">
                        <p className="m-0">Start a trip in minutes</p>
                        <p className="m-0">with AI</p>
                      </h3>
                      <div className="w-[263.1px] flex flex-col items-start justify-start gap-[15.4px] text-2xs-6 text-darkslategray-200">
                        <div className="self-stretch relative leading-[22px]">
                          <p className="m-0">
                            Answer four short questions and get
                          </p>
                          <p className="m-0">
                            personalized recs with AI, guided by
                          </p>
                          <p className="m-0">traveler opinions.</p>
                        </div>
                        <button
                          className="cursor-pointer [border:none] pt-[10.6px] pb-2.5 pl-9 pr-[35px] bg-wwwtripadvisorcom-port-gore w-[195.9px] rounded-3xl flex flex-row items-start justify-start box-border whitespace-nowrap hover:bg-darkslateblue"
                          onClick={onLinkClick}
                        >
                          <b className="flex-1 relative text-mini-5 leading-[20px] inline-block font-wwwtripadvisorcom-inter-black-463 text-white text-center min-w-[124.1px]">
                            Try AI trip builder
                          </b>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-[0.6036] rounded-xl bg-pink flex flex-col items-start justify-start pt-7 pb-[27px] pl-[113px] pr-[109px] box-border gap-11 min-w-[364px] max-w-full z-[2] text-5xl-9 mq450:pl-5 mq450:pr-5 mq450:box-border mq450:min-w-full mq750:gap-[22px] mq750:py-5 mq750:pl-14 mq750:pr-[54px] mq750:box-border mq1050:flex-1">
                <img
                  className="self-stretch h-[314px] relative rounded-16xl max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-38@2x.png"
                />
                <div className="w-[324.9px] flex flex-row items-start justify-start py-0 px-[27px] box-border max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-8 mq450:gap-4">
                    <div className="h-14 relative tracking-[0.56px] leading-[28px] font-extrabold flex items-center shrink-0 mq450:text-xl mq450:leading-[22px]">
                      <span>
                        <p className="m-0">Build your trip from</p>
                        <p className="m-0">scratch</p>
                      </span>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[15.4px] text-2xs-6 text-darkslategray-200">
                      <div className="self-stretch relative leading-[22px]">
                        <p className="m-0">
                          Browse top destinations, restaurants,
                        </p>
                        <p className="m-0">
                          and things to do and save your faves
                        </p>
                        <p className="m-0">to your Journey as you go.</p>
                      </div>
                      <button
                        className="cursor-pointer [border:none] pt-[10.6px] pb-2.5 pl-6 pr-[23px] bg-mediumseagreen-100 rounded-3xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumseagreen-300"
                        onClick={onButtonClick}
                      >
                        <b className="relative text-mini-5 leading-[20px] inline-block font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-center min-w-[95px]">
                          Do it yourself
                        </b>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1064px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full text-3xl-1">
            <div className="flex-1 flex flex-col items-start justify-start gap-[31px] max-w-full mq750:gap-[15px]">
              <b className="relative leading-[29px] inline-block max-w-full mq450:text-lg mq450:leading-[23px]">
                Use AI to plan a trip to a traveler-loved spot
              </b>
              <div className="self-stretch flex flex-row items-start justify-end max-w-full text-xl text-gray-400">
                <div className="w-[946px] flex flex-row items-start justify-start flex-wrap content-start gap-[34.1px] max-w-full mq750:gap-[17px]">
                  <div className="flex-1 flex flex-col items-start justify-start pt-[18.8px] px-0 pb-0 box-border min-w-[497px] max-w-full mq750:min-w-full">
                    <div className="self-stretch h-4 overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.4px] box-border">
                      <div className="h-4 w-[166px] relative flex items-center shrink-0 mq450:text-base">
                        Search
                      </div>
                    </div>
                  </div>
                  <button
                    className="cursor-pointer [border:none] py-[17px] pl-[30px] pr-[29px] bg-wwwtripadvisorcom-black w-[148px] rounded-3xl flex flex-row items-start justify-start box-border shrink-0 z-[2] hover:bg-darkslategray-200"
                    onClick={onLinkClick}
                  >
                    <b className="flex-1 relative text-5xl leading-[20px] font-wwwtripadvisorcom-inter-black-463 text-white text-center mq450:text-lgi mq450:leading-[16px]">
                      Start
                    </b>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1062.8px] flex flex-col items-start justify-start gap-[59.2px] max-w-full text-base text-white mq750:gap-[30px]">
            <div className="self-stretch grid flex-row items-start justify-start gap-[65.2px] grid-cols-[repeat(4,_minmax(166px,_1fr))] shrink-0 mq450:grid-cols-[minmax(166px,_1fr)] mq750:gap-4 mq1050:gap-[33px] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(166px,_287px))]">
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div
                  className="self-stretch rounded-xl overflow-hidden flex flex-row items-start justify-start cursor-pointer z-[3]"
                  onClick={onItemContainerClick}
                >
                  <div className="w-[168px] relative tracking-[0.56px] leading-[28px] font-extrabold hidden items-center shrink-0">
                    Mercato Market
                  </div>
                  <div className="flex-1 rounded-md bg-gainsboro-200 overflow-hidden flex flex-col items-start justify-end pt-[136.8px] px-0 pb-0 relative">
                    <div className="self-stretch h-[76px] relative [background:linear-gradient(0deg,_rgba(0,_0,_0,_0.6),_rgba(0,_0,_0,_0.6)_57.89%,_rgba(0,_0,_0,_0))]">
                      <div className="absolute w-[calc(100%_-_32px)] top-[32px] right-[16px] left-[16px] h-7 overflow-hidden hidden" />
                    </div>
                    <div className="!m-[0] absolute top-[-1px] left-[0px] flex flex-row items-start justify-start w-full h-full">
                      <img
                        className="h-[214px] w-[213px] relative object-cover z-[1]"
                        loading="lazy"
                        alt=""
                        src="/image-421@2x.png"
                      />
                      <div className="w-[184px] absolute !m-[0] right-[0px] bottom-[0px] tracking-[0.56px] leading-[28px] font-extrabold flex items-center z-[2]">
                        Red Terror Martyrs Memorial Museum
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-0.5 pb-0 pl-0 pr-2 text-center">
                <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-start justify-start z-[2]">
                  <div className="h-[212.8px] flex-1 relative rounded-md bg-gainsboro-200 overflow-hidden">
                    <div className="absolute w-full right-[0%] bottom-[0px] left-[0%] [background:linear-gradient(0deg,_rgba(0,_0,_0,_0.6),_rgba(0,_0,_0,_0.6)_57.89%,_rgba(0,_0,_0,_0))] h-[76px]">
                      <div className="absolute w-[calc(100%_-_32px)] top-[32px] right-[16px] left-[16px] h-7 overflow-hidden hidden" />
                    </div>
                    <img
                      className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
                      loading="lazy"
                      alt=""
                      src="/image-401@2x.png"
                    />
                    <div className="absolute top-[175px] left-[0px] tracking-[0.56px] leading-[28px] font-extrabold flex items-center justify-center w-[206px] z-[3]">
                      Ethnological Museum
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-px pb-0 pl-0 pr-2">
                <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-start justify-start z-[2]">
                  <div className="w-[188px] relative tracking-[0.56px] leading-[28px] font-extrabold hidden items-center shrink-0">
                    National Museum
                  </div>
                  <div className="flex-1 rounded-md bg-gainsboro-200 overflow-hidden flex flex-col items-start justify-start pt-[157px] px-[21px] pb-0 relative text-center">
                    <div className="w-full h-[76px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(0deg,_rgba(0,_0,_0,_0.6),_rgba(0,_0,_0,_0.6)_57.89%,_rgba(0,_0,_0,_0))]">
                      <div className="absolute w-[calc(100%_-_32px)] top-[32px] right-[16px] left-[16px] h-7 overflow-hidden hidden" />
                    </div>
                    <img
                      className="w-full h-full absolute !m-[0] top-[-1px] right-[-0.2px] object-cover z-[1]"
                      loading="lazy"
                      alt=""
                      src="/image-41@2x.png"
                    />
                    <div className="self-stretch relative tracking-[0.56px] leading-[28px] font-extrabold z-[2]">
                      National Museum of Ethiopia
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden flex flex-row items-start justify-start z-[2]">
                <div className="w-[145px] relative tracking-[0.56px] leading-[28px] font-extrabold hidden items-center shrink-0">
                  Mount Entoto
                </div>
                <div className="flex-1 rounded-md bg-gainsboro-200 overflow-hidden flex flex-col items-start justify-end pt-[177px] pb-[7.8px] pl-[45px] pr-5 relative">
                  <div className="w-full h-[76px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(0deg,_rgba(0,_0,_0,_0.6),_rgba(0,_0,_0,_0.6)_57.89%,_rgba(0,_0,_0,_0))]">
                    <div className="absolute w-[calc(100%_-_32px)] top-[32px] right-[16px] left-[16px] h-7 overflow-hidden hidden" />
                  </div>
                  <img
                    className="w-full h-full absolute !m-[0] right-[-0.2px] bottom-[-0.2px] object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/image-431@2x.png"
                  />
                  <div className="relative tracking-[0.56px] leading-[28px] font-extrabold inline-block min-w-[123px] z-[2]">
                    Mount Entoto
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch grid flex-row items-start justify-start gap-[70.2px] shrink-0 grid-cols-[repeat(4,_minmax(160px,_1fr))] text-center mq450:grid-cols-[minmax(160px,_1fr)] mq750:gap-[18px] mq1050:gap-[35px] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(160px,_277px))]">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="self-stretch flex flex-row items-start justify-start relative">
                  <div className="w-[calc(100%_-_4.8px)] absolute !m-[0] bottom-[-11.2px] left-[2px] tracking-[0.56px] leading-[28px] font-extrabold flex items-center justify-center">
                     Red Terror Martyrs Memorial Museum
                  </div>
                  <div className="flex-1 rounded-xl overflow-hidden flex flex-row items-start justify-start z-[2] text-left">
                    <div className="flex-1 rounded-md bg-gainsboro-200 overflow-hidden flex flex-col items-start justify-end pt-[179px] pb-[5.8px] pl-[37px] pr-[7px] relative">
                      <div className="w-full h-[76px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(0deg,_rgba(0,_0,_0,_0.6),_rgba(0,_0,_0,_0.6)_57.89%,_rgba(0,_0,_0,_0))]">
                        <div className="absolute w-[calc(100%_-_32px)] top-[32px] right-[16px] left-[16px] h-7 overflow-hidden hidden" />
                      </div>
                      <img
                        className="w-full h-full absolute !m-[0] right-[-0.2px] bottom-[-0.2px] object-cover z-[1]"
                        loading="lazy"
                        alt=""
                        src="/image-39@2x.png"
                      />
                      <div className="self-stretch relative tracking-[0.56px] leading-[28px] font-extrabold z-[2]">
                        Mercato Market
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden flex flex-row items-start justify-start z-[2]">
                <div className="flex-1 flex flex-row items-start justify-start">
                  <div className="w-52 relative tracking-[0.56px] leading-[28px] font-extrabold hidden items-center justify-center shrink-0">
                    Holy Trinity Cathedral
                  </div>
                  <div className="flex-1 rounded-md bg-gainsboro-200 overflow-hidden flex flex-col items-start justify-end pt-[175px] px-[13px] pb-[9.8px] relative text-left">
                    <div className="w-full h-[76px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(0deg,_rgba(0,_0,_0,_0.6),_rgba(0,_0,_0,_0.6)_57.89%,_rgba(0,_0,_0,_0))]" />
                    <img
                      className="w-full h-full absolute !m-[0] right-[-0.2px] bottom-[-0.2px] object-cover z-[1]"
                      loading="lazy"
                      alt=""
                      src="/image-44@2x.png"
                    />
                    <div className="relative tracking-[0.56px] leading-[28px] font-extrabold z-[2]">
                      Holy Trinity Cathedral
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden flex flex-row items-start justify-start z-[2]">
                <div className="flex-1 rounded-md bg-gainsboro-200 overflow-hidden flex flex-col items-start justify-start pt-[167px] pb-0 pl-[5px] pr-0 relative">
                  <div className="w-full h-[76px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(0deg,_rgba(0,_0,_0,_0.6),_rgba(0,_0,_0,_0.6)_57.89%,_rgba(0,_0,_0,_0))]">
                    <div className="absolute w-[calc(100%_-_32px)] top-[32px] right-[16px] left-[16px] h-7 overflow-hidden hidden" />
                  </div>
                  <img
                    className="w-full h-full absolute !m-[0] right-[-0.2px] bottom-[-0.2px] object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/image-451@2x.png"
                  />
                  <div className="self-stretch h-[46px] relative tracking-[0.56px] leading-[28px] font-extrabold flex items-center justify-center shrink-0 z-[2]">
                    Menagesha Suba Forest Park
                  </div>
                </div>
              </div>
              <div className="h-[212.8px] rounded-xl overflow-hidden flex flex-row items-start justify-start z-[2]">
                <div className="self-stretch flex-1 rounded-md bg-gainsboro-200 overflow-hidden flex flex-col items-start justify-end pt-[136.8px] px-0 pb-0 relative">
                  <div className="self-stretch flex-1 relative [background:linear-gradient(0deg,_rgba(0,_0,_0,_0.6),_rgba(0,_0,_0,_0.6)_57.89%,_rgba(0,_0,_0,_0))]" />
                  <div className="!m-[0] absolute top-[0px] left-[0px] flex flex-row items-start justify-start w-full h-full">
                    <img
                      className="h-[213px] w-[213px] relative object-cover z-[1]"
                      loading="lazy"
                      alt=""
                      src="/image-46@2x.png"
                    />
                    <div className="h-[46px] w-52 absolute !m-[0] right-[0px] bottom-[0px] tracking-[0.56px] leading-[28px] font-extrabold flex items-center justify-center z-[2]">
                      The Mausoleum of Menelik II
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default JourneystoryGeneratorUser;
