import { useCallback } from "react";
import TestimonialContentWrapper from "./testimonial-content-wrapper";
import FrameComponent5 from "./frame-component5";
import FrameComponent6 from "./frame-component6";
import { useRouter } from "next/router";
import FrameComponent7 from "./frame-component7";
import PropTypes from "prop-types";

const FrameComponent8 = ({ className = "" }) => {
  const router = useRouter();

  const onWriteAReviewClick = useCallback(() => {
    router.push("/reviews");
  }, [router]);

  return (
    <div
      className={`w-[1292.5px] flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full text-left text-8xl-9 text-black font-poppins ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[15.2px] max-w-full">
        <div className="w-[1215.4px] flex flex-row items-start justify-between gap-5 max-w-full mq900:flex-wrap">
          <div className="w-[191.9px] flex flex-col items-start justify-start pt-0.5 pb-0 pl-0 pr-5 box-border">
            <b className="relative leading-[35px] mq450:text-3xl mq450:leading-[28px]">
              Company
            </b>
          </div>
          <b className="relative leading-[35px] inline-block min-w-[117px] mq450:text-3xl mq450:leading-[28px]">
            Contact
          </b>
          <div className="w-[150px] flex flex-col items-start justify-start pt-[5px] pb-0 pl-0 pr-5 box-border">
            <b className="relative leading-[35px] inline-block min-w-[73px] mq450:text-3xl mq450:leading-[28px]">
              More
            </b>
          </div>
          <TestimonialContentWrapper />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start max-w-full text-4xl-9 text-text-clr">
          <div className="w-[1212px] flex flex-row items-start justify-between gap-5 max-w-full mq900:flex-wrap">
            <FrameComponent5 />
            <div className="relative leading-[30px] font-medium inline-block min-w-[115px] mq450:text-lgi mq450:leading-[24px]">
              Help/FAQ
            </div>
            <div className="w-[146.7px] flex flex-col items-start justify-start pt-[7.7px] pb-0 pl-0 pr-5 box-border">
              <div className="relative leading-[30px] font-medium inline-block min-w-[75px] mq450:text-lgi mq450:leading-[24px]">
                Hotels
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[19.3px] px-0 pb-0 text-7xl-6">
              <div className="relative tracking-[0.01em] leading-[124.5%] font-medium mq450:text-2xl mq450:leading-[26px]">
                Discover our app
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-end justify-between gap-5 mt-[-4.4px] mq1325:flex-wrap">
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[5.6px]">
              <div className="flex flex-col items-start justify-start gap-[16.6px]">
                <div className="relative leading-[30px] font-medium inline-block min-w-[53px] mq450:text-lgi mq450:leading-[24px]">
                  Blog
                </div>
                <div className="relative leading-[30px] font-medium mq450:text-lgi mq450:leading-[24px]">
                  Terms and policies
                </div>
              </div>
            </div>
            <FrameComponent6 />
            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[13px] gap-[16.5px]">
              <div className="relative leading-[30px] font-medium inline-block min-w-[76px] mq450:text-lgi mq450:leading-[24px]">
                Airline
              </div>
              <div
                className="relative leading-[30px] font-medium cursor-pointer mq450:text-lgi mq450:leading-[24px]"
                onClick={onWriteAReviewClick}
              >
                Write a review
              </div>
            </div>
            <FrameComponent7 />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
