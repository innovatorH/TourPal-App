import { useMemo } from "react";
import PropTypes from "prop-types";

const Footer1 = ({
  className = "",
  propHeight,
  propPadding,
  propHeight1,
  propPadding1,
  propWidth,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      height: propHeight,
      padding: propPadding,
    };
  }, [propHeight, propPadding]);

  const supportCallStyle = useMemo(() => {
    return {
      height: propHeight1,
      padding: propPadding1,
    };
  }, [propHeight1, propPadding1]);

  const callNow251930252577Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-10 text-left text-2xl-9 text-wwwtripadvisorcom-black font-wwwtripadvisorcom-inter-black-463 mq450:gap-5 ${className}`}
    >
      <div className="self-stretch rounded-3xs border-gainsboro-200 border-[1px] border-solid flex flex-col items-start justify-start pt-[25px] pb-[22px] pl-[21px] pr-[19px] gap-[22.9px] mq450:pt-5 mq450:pb-5 mq450:box-border">
        <b className="relative leading-[29px] mq450:text-lg mq450:leading-[23px]">
          Book with confidence
        </b>
        <div className="self-stretch h-px relative border-gainsboro-200 border-b-[1px] border-solid box-border" />
        <div className="flex flex-row items-start justify-start gap-[18px] text-mini-8">
          <div className="flex flex-col items-start justify-start gap-[48.6px]">
            <div className="flex flex-col items-start justify-start gap-[31.8px]">
              <img
                className="w-[25px] h-[25px] relative overflow-hidden shrink-0"
                alt=""
                src="/icon1.svg"
              />
              <img
                className="w-[25px] h-[25px] relative overflow-hidden shrink-0"
                alt=""
                src="/icon-11.svg"
              />
            </div>
            <img
              className="w-[25px] h-[25px] relative overflow-hidden shrink-0"
              alt=""
              src="/icon-21.svg"
            />
            <img
              className="w-[25px] h-[25px] relative overflow-hidden shrink-0"
              alt=""
              src="/icon-31.svg"
            />
          </div>
          <div
            className="flex flex-col items-start justify-start gap-[14.7px]"
            style={frameDiv1Style}
          >
            <div className="flex flex-col items-start justify-start gap-[5px]">
              <b className="relative leading-[20px]">Lowest price guarantee</b>
              <div className="relative text-sm-5 leading-[17px]">
                Find it cheaper? We'll refund the difference
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[5px]">
              <b className="relative leading-[20px]">Privacy protection</b>
              <div className="relative text-sm-3 leading-[16.8px]">
                <p className="m-0">We use SSL encryption to keep your data</p>
                <p className="m-0">secure</p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[5px] text-mini-6">
              <b className="relative leading-[20px]">24/7 global support</b>
              <div className="relative text-sm-2 leading-[16.8px]">
                <p className="m-0">Get the answers you need, when you need</p>
                <p className="m-0">them</p>
              </div>
            </div>
            <div
              className="flex flex-col items-start justify-start gap-[4.1px] text-mini-9"
              style={supportCallStyle}
            >
              <b className="relative leading-[20px] inline-block min-w-[96px]">
                Give us a call
              </b>
              <div className="relative text-sm-5 leading-[16.8px]">
                <p className="m-0">We’d be happy to help you out with your</p>
                <p className="m-0">booking</p>
              </div>
              <div
                className="w-44 relative text-smi-4 [text-decoration:underline] leading-[16.8px] flex items-center"
                style={callNow251930252577Style}
              >
                Call now: +251-930252577
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-[55px] text-center text-xs text-gray-200">
        <div className="relative inline-block min-w-[4px]">.</div>
      </div>
    </div>
  );
};

Footer1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propPadding: PropTypes.any,
  propHeight1: PropTypes.any,
  propPadding1: PropTypes.any,
  propWidth: PropTypes.any,
};

export default Footer1;
