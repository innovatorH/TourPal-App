import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "", propHeight, propPadding }) => {
  const frameDivStyle = useMemo(() => {
    return {
      height: propHeight,
      padding: propPadding,
    };
  }, [propHeight, propPadding]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-3 text-left text-mini-6 text-darkslategray-200 font-wwwtripadvisorcom-inter-black-463 ${className}`}
    >
      <div className="self-stretch rounded-sm bg-white flex flex-col items-start justify-start pt-6 px-6 pb-9 gap-[14.4px]">
        <b className="relative leading-[20px] inline-block text-wwwtripadvisorcom-black min-w-[34px]">
          Intro
        </b>
        <div className="flex flex-row items-start justify-start gap-1 text-sm-9">
          <div
            className="h-[81.6px] flex flex-col items-start justify-start pt-0 px-0 pb-[32.8px] box-border gap-[16.8px]"
            style={frameDivStyle}
          >
            <img
              className="w-4 h-4 relative overflow-hidden shrink-0"
              alt=""
              src="/icon-1.svg"
            />
            <img
              className="w-4 h-4 relative overflow-hidden shrink-0"
              alt=""
              src="/icon-2.svg"
            />
            <img
              className="w-4 h-4 relative overflow-hidden shrink-0"
              alt=""
              src="/icon-3.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-[14.8px]">
            <div className="relative leading-[18px]">Addis Ababa, Ethiopia</div>
            <div className="relative text-smi leading-[18px] inline-block min-w-[121px]">
              Joined in Aug 2024
            </div>
            <b className="relative text-smi-9 leading-[18px] text-wwwtripadvisorcom-black">
              markontech.yegaratech.com
            </b>
          </div>
        </div>
        <div className="relative text-sm-5 leading-[18px] inline-block min-w-[120.8px]">
          travel enthusiastic.
        </div>
      </div>
      <div className="self-stretch rounded-sm bg-white flex flex-col items-start justify-start pt-6 pb-[33.4px] pl-6 pr-5 gap-[22.6px] text-mini-9 text-gray-500">
        <b className="relative leading-[20px]">Share your travel advice</b>
        <div className="flex flex-col items-start justify-start gap-6 text-smi-7 text-wwwtripadvisorcom-black">
          <div className="flex flex-row items-end justify-start gap-4">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
              alt=""
              src="/icon-4.svg"
            />
            <b className="relative leading-[18px] inline-block min-w-[74.5px]">
              Post photos
            </b>
          </div>
          <div className="flex flex-row items-end justify-start gap-4 text-smi-6">
            <input
              className="m-0 h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
              type="checkbox"
            />
            <b className="relative leading-[18px] inline-block min-w-[78px]">
              Write review
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propPadding: PropTypes.any,
};

export default FrameComponent2;
