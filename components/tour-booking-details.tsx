import { useMemo } from "react";
import PropTypes from "prop-types";

const TourBookingDetails = ({
  className = "",
  propMinWidth,
  propTextDecoration,
}) => {
  const bookingDateStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const adultsStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <div
      className={`w-[238px] flex flex-row items-start justify-start py-0 px-6 box-border text-left text-smi-9 text-wwwtripadvisorcom-black font-wwwtripadvisorcom-inter-black-463 ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start gap-[19px]">
        <div className="flex flex-col items-start justify-start gap-4">
          <img
            className="w-6 h-6 relative"
            loading="lazy"
            alt=""
            src="/svg1.svg"
          />
          <img className="w-6 h-6 relative" alt="" src="/svg-12.svg" />
          <img className="w-6 h-6 relative" alt="" src="/svg-22.svg" />
        </div>
        <div
          className="flex-1 flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0"
          style={bookingDateStyle}
        >
          <div className="self-stretch flex flex-col items-start justify-start gap-[23px]">
            <div className="relative leading-[17px]">
              Friday, August 30, 2024
            </div>
            <div className="relative text-sm-2 leading-[17px] inline-block min-w-[54px] whitespace-nowrap">
              9:00 AM
            </div>
            <div
              className="relative text-sm-1 leading-[17px] inline-block min-w-[51px]"
              style={adultsStyle}
            >
              2 Adults
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TourBookingDetails.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propTextDecoration: PropTypes.any,
};

export default TourBookingDetails;
