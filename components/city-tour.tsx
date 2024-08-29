import { useMemo } from "react";
import RatingStar from "./rating-star";
import Rating from "./rating";
import PropTypes from "prop-types";

const CityTour = ({
  className = "",
  listItemPicture,
  holyTrinityCathedral,
  prop,
  propMinWidth,
  ratingStarHeight,
  ratingStarWidth,
  groupIconRight,
  groupIconLeft,
}) => {
  const div1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`w-[368px] flex flex-col items-start justify-start gap-[7.9px] min-w-[350px] max-w-full text-left text-base-7 text-darkslategray-200 font-wwwtripadvisorcom-inter-black-463 ${className}`}
    >
      <div className="self-stretch rounded-lg bg-gainsboro-200 overflow-hidden flex flex-row items-start justify-start max-w-full">
        <div className="flex-1 bg-wwwtripadvisorcom-black flex flex-col items-end justify-start pt-2 px-0 pb-0 box-border relative gap-[182.4px] max-w-full mq450:gap-[91px]">
          <img
            className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src={listItemPicture}
          />
          <img className="flex flex-row items-start justify-end py-0 px-2" />
          <div className="self-stretch [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.6)_75%)] overflow-x-auto flex flex-row items-start justify-center pt-[29.1px] px-5 pb-[13.1px] gap-[13.8px] z-[1]">
            <div className="h-[7.8px] w-[7.8px] relative rounded-5xs-8 bg-white shrink-0" />
            <div className="h-1.5 w-1.5 relative rounded-md bg-lightgray shrink-0" />
            <div className="h-1.5 w-1.5 relative rounded-md bg-lightgray shrink-0" />
            <div className="h-1.5 w-1.5 relative rounded-md bg-lightgray shrink-0" />
            <div className="h-1.5 w-1.5 relative rounded-md bg-lightgray shrink-0" />
          </div>
        </div>
      </div>
      <b className="h-[18.4px] relative leading-[22px] flex text-wwwtripadvisorcom-black items-center shrink-0">
        {holyTrinityCathedral}
      </b>
      <div className="flex flex-row items-start justify-start gap-[7.6px] text-xs-4">
        <div className="flex flex-row items-start justify-start gap-0.5">
          <RatingStar
            vector="/museum-ratings.svg"
            group="/group-5@2x.png"
            ratingStarHeight={ratingStarHeight}
            ratingStarWidth={ratingStarWidth}
            groupIconRight={groupIconRight}
            groupIconLeft={groupIconLeft}
          />
          <RatingStar
            vector="/museum-ratings.svg"
            group="/group-5@2x.png"
            ratingStarHeight={ratingStarHeight}
            ratingStarWidth={ratingStarWidth}
            groupIconRight={groupIconRight}
            groupIconLeft={groupIconLeft}
          />
          <RatingStar
            vector="/museum-ratings.svg"
            group="/group-5@2x.png"
            ratingStarHeight={ratingStarHeight}
            ratingStarWidth={ratingStarWidth}
            groupIconRight={groupIconRight}
            groupIconLeft={groupIconLeft}
          />
          <RatingStar
            vector="/museum-ratings.svg"
            group="/group-5@2x.png"
            ratingStarHeight={ratingStarHeight}
            ratingStarWidth={ratingStarWidth}
            groupIconRight={groupIconRight}
            groupIconLeft={groupIconLeft}
          />
          <Rating
            vector="/museum-ratings.svg"
            group="/group-5@2x.png"
            ratingStarHeight="12px"
            ratingStarWidth="12px"
            groupIconRight="0%"
            groupIconLeft="50%"
          />
        </div>
        <div
          className="relative leading-[14px] inline-block min-w-[22px]"
          style={div1Style}
        >
          {prop}
        </div>
      </div>
      <div className="relative text-sm-5 leading-[17px]">{`Religious Sites, Churches & Cathedrals`}</div>
    </div>
  );
};

CityTour.propTypes = {
  className: PropTypes.string,
  listItemPicture: PropTypes.string,
  holyTrinityCathedral: PropTypes.string,
  prop: PropTypes.string,
  ratingStarHeight: PropTypes.string,
  ratingStarWidth: PropTypes.string,
  groupIconRight: PropTypes.string,
  groupIconLeft: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default CityTour;
