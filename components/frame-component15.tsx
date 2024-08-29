import { useCallback } from "react";
import { useRouter } from "next/router";
import AppContent from "./app-content";
import PropTypes from "prop-types";

const FrameComponent15 = ({ className = "" }) => {
  const router = useRouter();

  const onWriteAReviewClick = useCallback(() => {
    router.push("/reviews");
  }, [router]);

  return (
    <div
      className={`flex flex-row items-start justify-end py-0 px-[45px] box-border max-w-full text-left text-mid-3 text-text-clr font-poppins mq1225:pl-[22px] mq1225:pr-[22px] mq1225:box-border ${className}`}
    >
      <div className="flex flex-row items-start justify-center gap-[72px] max-w-full mq450:gap-[18px] mq850:gap-9 mq1500:flex-wrap">
        <div className="flex flex-col items-start justify-start py-0 pl-0 pr-3 gap-[39.7px] mq450:gap-5">
          <div className="flex flex-row items-start justify-start py-0 px-[27px]">
            <img
              className="h-[46.4px] w-[150px] relative object-cover shrink-0 z-[1]"
              loading="lazy"
              alt=""
              src="/group-599@2x.png"
            />
          </div>
          <div className="relative leading-[124.5%] font-medium inline-block min-h-[66px] shrink-0 z-[1]">
            <p className="m-0">Plan your trip in minute, get full</p>
            <p className="m-0">Control for much longer.</p>
          </div>
        </div>
        <div className="w-[697px] flex flex-row items-start justify-start gap-[13px] max-w-full text-8xl-9 text-black mq850:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-[114.4px] max-w-full mq450:gap-[29px] mq850:gap-[57px]">
            <div className="w-[436.3px] flex flex-row items-start justify-between gap-5 max-w-full mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start gap-[44.8px] min-w-[228px] mq450:flex-1">
                <b className="relative leading-[35px] z-[1] mq450:text-3xl mq450:leading-[28px]">
                  Company
                </b>
                <div className="flex flex-col items-start justify-start gap-[15.9px] text-4xl-9 text-text-clr">
                  <div className="relative leading-[30px] font-medium inline-block min-w-[109px] z-[1] mq450:text-lgi mq450:leading-[24px]">
                    About Us
                  </div>
                  <div className="relative leading-[30px] font-medium inline-block min-w-[53px] z-[1] mq450:text-lgi mq450:leading-[24px]">
                    Blog
                  </div>
                  <div className="relative leading-[30px] font-medium z-[1] mq450:text-lgi mq450:leading-[24px]">
                    Terms and policies
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[42.1px] min-w-[118.3px] mq450:flex-1">
                <div className="flex flex-row items-start justify-start py-0 pl-px pr-0">
                  <b className="relative leading-[35px] inline-block min-w-[117px] z-[1] mq450:text-3xl mq450:leading-[28px]">
                    Contact
                  </b>
                </div>
                <div className="flex flex-col items-start justify-start gap-[17.3px] text-4xl-9 text-text-clr">
                  <div className="relative leading-[30px] font-medium inline-block min-w-[115px] z-[1] mq450:text-lgi mq450:leading-[24px]">
                    Help/FAQ
                  </div>
                  <div className="relative leading-[30px] font-medium inline-block min-w-[64px] z-[1] mq450:text-lgi mq450:leading-[24px]">
                    Press
                  </div>
                  <div className="relative leading-[30px] font-medium inline-block min-w-[98px] z-[1] mq450:text-lgi mq450:leading-[24px]">
                    Affilates
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end text-xl text-text-clr">
              <h2 className="m-0 relative text-inherit leading-[25px] font-medium font-[inherit] z-[1] mq450:text-base mq450:leading-[20px]">
                All rights reserved@TourPal.com
              </h2>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[44.8px]">
            <b className="relative leading-[35px] inline-block min-w-[73px] z-[1] mq450:text-3xl mq450:leading-[28px]">
              More
            </b>
            <div className="flex flex-col items-start justify-start gap-[17.2px] text-4xl-9 text-text-clr">
              <div className="relative leading-[30px] font-medium inline-block min-w-[75px] z-[1] mq450:text-lgi mq450:leading-[24px]">
                Hotels
              </div>
              <div className="relative leading-[30px] font-medium inline-block min-w-[76px] z-[1] mq450:text-lgi mq450:leading-[24px]">
                Airline
              </div>
              <div
                className="relative leading-[30px] font-medium cursor-pointer z-[1] mq450:text-lgi mq450:leading-[24px]"
                onClick={onWriteAReviewClick}
              >
                Write a review
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[78px] px-0 pb-0 text-7xl-6">
          <AppContent
            googlePlay="/google-play1.svg"
            playStore="/play-store1.svg"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent15.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent15;
