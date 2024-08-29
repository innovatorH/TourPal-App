import { useMemo } from "react";
import HumburgerMenuFrame from "./humburger-menu-frame";
import PropTypes from "prop-types";

const FrameComponent10 = ({
  className = "",
  propHeight,
  propDisplay,
  humburgerMenuFramePosition,
  humburgerMenuFrameBottom,
  humburgerMenuFrameLeft,
}) => {
  const redTerrorMartyrsStyle = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
    };
  }, [propHeight, propDisplay]);

  return (
    <header
      className={`w-[1026px] flex flex-row items-start justify-between gap-5 max-w-full text-left text-base text-saddlebrown-100 font-itim ${className}`}
    >
      <div className="flex flex-row items-start justify-start gap-5">
        <HumburgerMenuFrame
          humburgerMenuFramePosition={humburgerMenuFramePosition}
          humburgerMenuFrameBottom={humburgerMenuFrameBottom}
          humburgerMenuFrameLeft={humburgerMenuFrameLeft}
        />
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div className="flex flex-col items-start justify-start gap-0.5">
            <div className="flex flex-row items-start justify-start py-0 pl-[13px] pr-2.5">
              <img
                className="h-[25px] w-[29.5px] relative"
                loading="lazy"
                alt=""
                src="/logo.svg"
              />
            </div>
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[53px]">
              TourPal
            </a>
          </div>
        </div>
      </div>
      <div className="w-[666px] flex flex-col items-start justify-start pt-[55px] px-0 pb-0 box-border max-w-full text-29xl font-abhaya-libre mq750:w-0">
        <h1
          className="m-0 self-stretch relative text-inherit font-normal font-[inherit] whitespace-nowrap mq750:hidden"
          style={redTerrorMartyrsStyle}
        >
          Red Terror Martyrs Memorial
        </h1>
      </div>
    </header>
  );
};

FrameComponent10.propTypes = {
  className: PropTypes.string,
  humburgerMenuFramePosition: PropTypes.string,
  humburgerMenuFrameBottom: PropTypes.string,
  humburgerMenuFrameLeft: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default FrameComponent10;
