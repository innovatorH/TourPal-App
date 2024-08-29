import { useMemo } from "react";
import RatingStar from "./rating-star";
import Rating from "./rating";
import PropTypes from "prop-types";

const TitleAndImage = ({
  className = "",
  propFlex,
  propAlignSelf,
  picture,
  group,
  ratingStarHeight,
  ratingStarWidth,
  groupIconRight,
  groupIconLeft,
}) => {
  const titleAndImageStyle = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propAlignSelf]);

  return (
    <div
      className={`flex-1 flex flex-row items-end justify-start gap-[25.6px] max-w-full text-left text-[16.3px] text-wwwtripadvisorcom-black font-wwwtripadvisorcom-inter-black-463 mq450:flex-wrap ${className}`}
      style={titleAndImageStyle}
    >
      <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-px box-border min-w-[161px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[7.9px]">
          <b className="relative leading-[22px]">
            <p className="m-0">Full Day Tour of Addis Ababa</p>
            <p className="m-0">with Hotel Pickup and Drop-off</p>
          </b>
          <div className="flex flex-row items-start justify-start gap-[8.3px] text-xs-8 text-darkslategray-200">
            <div className="flex flex-row items-start justify-start gap-0.5 shrink-0">
              <RatingStar
                vector="/museum-ratings.svg"
                group={group}
                ratingStarHeight={ratingStarHeight}
                ratingStarWidth={ratingStarWidth}
                groupIconRight={groupIconRight}
                groupIconLeft={groupIconLeft}
              />
              <RatingStar
                vector="/museum-ratings.svg"
                group={group}
                ratingStarHeight={ratingStarHeight}
                ratingStarWidth={ratingStarWidth}
                groupIconRight={groupIconRight}
                groupIconLeft={groupIconLeft}
              />
              <RatingStar
                vector="/museum-ratings.svg"
                group={group}
                ratingStarHeight={ratingStarHeight}
                ratingStarWidth={ratingStarWidth}
                groupIconRight={groupIconRight}
                groupIconLeft={groupIconLeft}
              />
              <RatingStar
                vector="/museum-ratings.svg"
                group={group}
                ratingStarHeight={ratingStarHeight}
                ratingStarWidth={ratingStarWidth}
                groupIconRight={groupIconRight}
                groupIconLeft={groupIconLeft}
              />
              <Rating
                vector="/museum-ratings.svg"
                group="/group1@2x.png"
                ratingStarHeight="12px"
                ratingStarWidth="12px"
                groupIconRight="0%"
                groupIconLeft="50%"
              />
            </div>
            <div className="relative leading-[14px] inline-block min-w-[21.8px] shrink-0">
              150
            </div>
          </div>
        </div>
      </div>
      <img
        className="h-[67px] w-[67px] relative rounded-lg overflow-hidden shrink-0 object-cover min-h-[67px]"
        loading="lazy"
        alt=""
        src={picture}
      />
    </div>
  );
};

TitleAndImage.propTypes = {
  className: PropTypes.string,
  picture: PropTypes.string,
  group: PropTypes.string,
  ratingStarHeight: PropTypes.string,
  ratingStarWidth: PropTypes.string,
  groupIconRight: PropTypes.string,
  groupIconLeft: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default TitleAndImage;
