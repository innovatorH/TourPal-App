import RatingStar from "./rating-star";
import PropTypes from "prop-types";

const Rating1 = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-start justify-start gap-[5px] z-[1] ${className}`}
    >
      <RatingStar
        vector="/vector3.svg"
        group="/group1@2x.png"
        ratingStarHeight="22px"
        ratingStarWidth="22px"
        groupIconRight="0.45%"
        groupIconLeft="49.55%"
      />
      <RatingStar
        vector="/vector3.svg"
        group="/group1@2x.png"
        ratingStarHeight="22px"
        ratingStarWidth="22px"
        groupIconRight="0.45%"
        groupIconLeft="49.55%"
      />
      <RatingStar
        vector="/vector3.svg"
        group="/group1@2x.png"
        ratingStarHeight="22px"
        ratingStarWidth="22px"
        groupIconRight="0.45%"
        groupIconLeft="49.55%"
      />
      <RatingStar
        vector="/vector3.svg"
        group="/group1@2x.png"
        ratingStarHeight="22px"
        ratingStarWidth="22px"
        groupIconRight="0.45%"
        groupIconLeft="49.55%"
      />
      <RatingStar
        vector="/vector3.svg"
        group="/group1@2x.png"
        ratingStarHeight="22px"
        ratingStarWidth="22px"
        groupIconRight="0.45%"
        groupIconLeft="49.55%"
      />
    </div>
  );
};

Rating1.propTypes = {
  className: PropTypes.string,
};

export default Rating1;
