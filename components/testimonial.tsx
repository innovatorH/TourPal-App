import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const Testimonial = ({ className = "" }) => {
  const router = useRouter();

  const onLinkIconClick = useCallback(() => {
    router.push("/journeystory-generator-user");
  }, [router]);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[129px] pl-[19px] pr-0 box-border max-w-full text-left text-4xl-9 text-text-clr font-poppins mq900:pb-[55px] mq900:box-border mq1325:pb-[84px] mq1325:box-border ${className}`}
    >
      <div className="w-[1552px] flex flex-col items-start justify-start gap-[65.1px] max-w-full mq900:gap-[33px] mq450:gap-4">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[10.6px] max-w-full">
            <div className="relative uppercase font-semibold mq450:text-lgi">
              Testimonials
            </div>
            <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-47xl-5 text-rd1 font-volkhov">
              <img
                className="h-[90.4px] w-[90.4px] absolute !m-[0] top-[-58.6px] left-[659.7px] rounded-[50%] object-cover z-[3]"
                alt=""
                src="/image-11@2x.png"
              />
              <div className="flex-1 flex flex-row items-start justify-start relative gap-[231.5px] max-w-full mq900:gap-[58px] mq1325:gap-[116px] mq450:gap-[29px] mq1725:flex-wrap">
                <div className="flex flex-col items-start justify-start gap-[110px] min-w-[544px] max-w-full mq900:gap-[55px] mq900:min-w-full mq450:gap-[27px] mq1725:flex-1">
                  <b className="relative capitalize mq900:text-34xl mq450:text-21xl">
                    <p className="m-0">What people say</p>
                    <p className="m-0">about Us.</p>
                  </b>
                  <img
                    className="w-[115.7px] h-4 relative"
                    loading="lazy"
                    alt=""
                    src="/group-61.svg"
                  />
                </div>
                <div className="w-[667.7px] flex flex-col items-start justify-start pt-[106.4px] px-0 pb-0 box-border min-w-[667.7px] max-w-full text-2xl-3 text-text-clr font-poppins mq1325:min-w-full mq450:pt-[69px] mq450:box-border mq1725:flex-1">
                  <div className="self-stretch shadow-[0px_133px_106.41px_rgba(0,_0,_0,_0.02),_0px_86.2px_62.32px_rgba(0,_0,_0,_0.02),_0px_51.2px_33.89px_rgba(0,_0,_0,_0.01),_0px_26.6px_17.29px_rgba(0,_0,_0,_0.01),_0px_10.8px_8.67px_rgba(0,_0,_0,_0.01),_0px_2.5px_4.19px_rgba(0,_0,_0,_0)] rounded-sm-3 border-border-color border-[2.7px] border-solid box-border flex flex-col items-start justify-start pt-[21.3px] pb-[29.2px] pl-[45px] pr-5 relative gap-[58.2px] max-w-full shrink-0 mq900:gap-[29px] mq900:pl-[22px] mq900:box-border">
                    <div className="w-[673px] h-[313.9px] relative shadow-[0px_133px_106.41px_rgba(0,_0,_0,_0.02),_0px_86.2px_62.32px_rgba(0,_0,_0,_0.02),_0px_51.2px_33.89px_rgba(0,_0,_0,_0.01),_0px_26.6px_17.29px_rgba(0,_0,_0,_0.01),_0px_10.8px_8.67px_rgba(0,_0,_0,_0.01),_0px_2.5px_4.19px_rgba(0,_0,_0,_0)] rounded-sm-3 border-border-color border-[2.7px] border-solid box-border hidden max-w-full z-[0]" />
                    <blockquote className="m-0 w-[534.7px] relative leading-[42.56px] font-open-sans text-slategray inline-block max-w-full z-[1] mq450:text-mid mq450:leading-[34px]">
                      “On the Windows talking painted pasture yet its express
                      parties use. Sure last upon he same as knew next. Of
                      believed or diverted no.”
                    </blockquote>
                    <div className="flex flex-col items-start justify-start gap-[7.9px] text-4xl-9">
                      <div className="relative font-semibold z-[1] mq450:text-lgi">
                        Chris Thomas
                      </div>
                      <div className="relative text-lg-6 font-medium z-[1]">
                        CEO of Red Button
                      </div>
                    </div>
                    <div className="w-full !m-[0] absolute top-[-119.7px] left-[-66.5px] shadow-[0px_133px_106.41px_rgba(0,_0,_0,_0.02),_0px_86.2px_62.32px_rgba(0,_0,_0,_0.02),_0px_51.2px_33.89px_rgba(0,_0,_0,_0.01),_0px_26.6px_17.29px_rgba(0,_0,_0,_0.01),_0px_10.8px_8.67px_rgba(0,_0,_0,_0.01),_0px_2.5px_4.19px_rgba(0,_0,_0,_0)] rounded-sm-3 bg-white flex flex-col items-start justify-start pt-[37.4px] pb-[45.2px] pl-[45px] pr-5 box-border gap-[1.7px] max-w-full z-[2] mq900:pl-[22px] mq900:box-border">
                      <div className="w-[670.4px] h-[325.9px] relative shadow-[0px_133px_106.41px_rgba(0,_0,_0,_0.02),_0px_86.2px_62.32px_rgba(0,_0,_0,_0.02),_0px_51.2px_33.89px_rgba(0,_0,_0,_0.01),_0px_26.6px_17.29px_rgba(0,_0,_0,_0.01),_0px_10.8px_8.67px_rgba(0,_0,_0,_0.01),_0px_2.5px_4.19px_rgba(0,_0,_0,_0)] rounded-sm-3 bg-white hidden max-w-full" />
                      <div className="w-[566px] relative leading-[42.56px] font-medium inline-block max-w-full z-[3] mq450:text-mid mq450:leading-[34px]">
                        Using this app transformed my travel experience! The
                        interactive stories brought each destination to life. I
                        also loved sharing my journey and connecting with other
                        travellers. Highly recommend it!
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[6.6px] text-4xl-9">
                        <div className="relative font-semibold z-[3] mq450:text-lgi">
                          Mike taylor
                        </div>
                        <div className="relative text-lg-6 font-medium inline-block min-w-[71px] z-[3]">
                          LA, Usa.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="h-[95.1px] w-[18.6px] absolute !m-[0] top-[128.3px] right-[0px]"
                  loading="lazy"
                  alt=""
                  src="/pagination.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1427px] flex flex-col items-start justify-start gap-10 max-w-full text-17xl text-wwwtripadvisorcom-black font-wwwtripadvisorcom-inter-black-463 mq900:gap-5">
          <div className="w-[285px] flex flex-row items-start justify-start py-0 px-1.5 box-border">
            <h1 className="m-0 h-[55px] flex-1 relative text-inherit leading-[34px] font-extrabold font-[inherit] flex items-center mq900:text-10xl mq900:leading-[27px] mq450:text-3xl mq450:leading-[20px]">
              Plan your trip
            </h1>
          </div>
          <div className="self-stretch rounded-2xl flex flex-col items-start justify-start pt-8 px-[37px] pb-[91px] box-border gap-[25px] bg-[url('/background2@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-xs-4 text-white mq450:pt-[21px] mq450:pb-[59px] mq450:box-border">
            <div className="flex flex-row items-start justify-start py-0 px-[11px]">
              <div className="flex flex-row items-start justify-start gap-[7.8px]">
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <div className="relative leading-[14px] inline-block min-w-[78.1px]">
                    Powered by AI
                  </div>
                </div>
                <div className="rounded bg-thistle flex flex-row items-start justify-start pt-1.5 pb-1 pl-2 pr-[7px] text-3xs-9 text-wwwtripadvisorcom-black">
                  <div className="relative leading-[14px] uppercase font-extrabold inline-block min-w-[27px]">
                    BETA
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1332px] flex flex-col items-start justify-start gap-3 max-w-full text-13xl">
              <div className="w-[795px] flex flex-row items-start justify-start py-0 px-[11px] box-border max-w-full">
                <h1 className="m-0 flex-1 relative text-inherit leading-[56px] font-extrabold font-[inherit] inline-block max-w-full mq900:text-7xl mq900:leading-[45px] mq450:text-lgi mq450:leading-[34px]">
                  Find personalized tips for your next adventure
                </h1>
              </div>
              <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-5 text-5xl text-wwwtripadvisorcom-black mq1725:flex-wrap">
                <div className="w-[822px] flex flex-col items-start justify-start pt-0 px-0 pb-[42px] box-border min-h-[159px] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-3 max-w-full">
                    <div className="self-stretch rounded-11xl bg-white border-gainsboro-200 border-[2px] border-solid overflow-hidden flex flex-row items-start justify-between pt-[15px] pb-3.5 pl-0 pr-3 gap-5 mq900:flex-wrap mq900:pl-3 mq900:box-border">
                      <div className="w-[238px] flex flex-row items-start justify-start">
                        <img
                          className="h-14 w-14 relative"
                          loading="lazy"
                          alt=""
                          src="/container1.svg"
                        />
                        <div className="flex-1 flex flex-col items-start justify-start pt-[19px] px-0 pb-0">
                          <h3 className="m-0 self-stretch h-[18px] relative text-inherit font-normal font-[inherit] flex items-center shrink-0 mq450:text-lgi">
                            Addis Ababa
                          </h3>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                        <img
                          className="w-[46px] h-[46px] relative rounded-4xl cursor-pointer"
                          loading="lazy"
                          alt=""
                          src="/link.svg"
                          onClick={onLinkIconClick}
                        />
                      </div>
                    </div>
                    <div className="w-[620px] flex flex-row items-start justify-start py-0 px-[11px] box-border max-w-full text-base text-white">
                      <div className="flex-1 relative leading-[14px] inline-block max-w-full">
                        By city/Street only, not region (i.e Piassa, Addis
                        Ababa, not Oromia, Ethiopia).
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-14 w-[216px] relative" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = {
  className: PropTypes.string,
};

export default Testimonial;
