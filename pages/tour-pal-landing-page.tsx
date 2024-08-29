import { useCallback } from "react";
import Main from "../components/main";
import VideoBanner from "../components/video-banner";
import { useRouter } from "next/router";
import FrameComponent12 from "../components/frame-component12";
import Feature from "../components/feature";
import TripPlanning from "../components/trip-planning";
import Testimonial from "../components/testimonial";
import FrameComponent13 from "../components/frame-component13";

const TourPalLandingPage = () => {
  const router = useRouter();

  const onCTAClick = useCallback(() => {
    router.push("/sign-up");
  }, [router]);

  return (
    <div className="w-full relative bg-white flex flex-col items-start justify-start pt-10 pb-[88px] pl-[143px] pr-10 box-border gap-[133px] leading-[normal] tracking-[normal] text-left text-27xl-3 text-wwwtripadvisorcom-black font-wwwtripadvisorcom-inter-black-463 mq900:gap-[33px] mq900:pl-[35px] mq900:box-border mq1325:gap-[66px] mq1325:pl-[71px] mq1325:box-border">
      <Main />
      <div className="w-[834.5px] flex flex-row items-start justify-start pt-0 px-[53px] pb-[15.5px] box-border max-w-full mq900:pl-[26px] mq900:pr-[26px] mq900:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[39px] max-w-full mq900:gap-[19px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0 box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[18.5px] max-w-full">
              <div className="relative tracking-[1.08px] leading-[65px] font-black inline-block max-w-full mq900:text-[37px] mq900:leading-[52px] mq450:text-9xl mq450:leading-[39px]">
                Ready to Discover?
              </div>
              <div className="self-stretch flex flex-row items-start justify-start relative text-[111.7px] text-st1 font-volkhov">
                <b className="relative tracking-[-0.04em] leading-[118.38px] z-[1] mq900:text-[56px] mq900:leading-[71px] mq450:text-[34px] mq450:leading-[47px]">
                  <p className="m-0">Travel, enjoy</p>
                  <p className="m-0">and live a new</p>
                  <p className="m-0">and full life</p>
                </b>
                <VideoBanner />
              </div>
            </div>
          </div>
          <h2 className="m-0 w-[634.5px] relative text-7xl leading-[29px] font-bold font-[inherit] text-wwwtripadvisorcom-port-gore text-center inline-block max-w-full mq450:text-2xl mq450:leading-[23px]">
            <p className="m-0">Explore experiences, adventures, and more—</p>
            <p className="m-0">tailored to your tastes</p>
          </h2>
        </div>
      </div>
      <div className="w-[66.5px] h-[65.2px] absolute !m-[0] top-[1576.2px] left-[312.4px]">
        <div className="absolute top-[65.2px] left-[66.5px] rounded-tl-[23.94px] rounded-tr-[6.65px] rounded-br-sm-3 rounded-bl-[6.65px] bg-papayawhip w-full h-full [transform:_rotate(-180deg)] [transform-origin:0_0]" />
      </div>
      <div className="w-[637.7px] flex flex-row items-start justify-start pt-0 px-[51px] pb-[70.2px] box-border max-w-full text-3xl-6 text-text-color1 font-poppins mq900:pl-[25px] mq900:pr-[25px] mq900:box-border">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq900:flex-wrap">
          <button
            className="cursor-pointer [border:none] pt-[22.6px] px-12 pb-[23.2px] bg-yellow shadow-[0px_26.6px_46.55px_rgba(241,_165,_1,_0.15)] rounded-sm-3 flex flex-row items-start justify-start shrink-0 whitespace-nowrap hover:bg-darkgoldenrod"
            onClick={onCTAClick}
          >
            <div className="h-[79.8px] w-[226.1px] relative shadow-[0px_26.6px_46.55px_rgba(241,_165,_1,_0.15)] rounded-sm-3 bg-yellow hidden" />
            <div className="relative text-3xl-6 font-medium font-poppins text-white text-left z-[1]">
              Get Started
            </div>
          </button>
          <div className="flex flex-col items-start justify-start pt-[25.3px] px-0 pb-0">
            <div className="relative font-medium shrink-0 mq450:text-lg">
              Find out More
            </div>
          </div>
        </div>
      </div>
      <FrameComponent12 />
      <Feature />
      <TripPlanning />
      <Testimonial />
      <FrameComponent13 />
    </div>
  );
};

export default TourPalLandingPage;
