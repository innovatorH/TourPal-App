import PropTypes from "prop-types";

const VideoBanner = ({ className = "" }) => {
  return (
    <div
      className={`h-[749.5px] w-[1329.4px] absolute !m-[0] right-[-883.5px] bottom-[-320px] ${className}`}
    >
      <img
        className="absolute top-[680.3px] left-[0px] w-[69.2px] h-[69.2px]"
        loading="lazy"
        alt=""
        src="/play-button.svg"
      />
      <img
        className="absolute top-[165.2px] left-[44.1px] w-[512.1px] h-4"
        alt=""
        src="/decore.svg"
      />
      <img
        className="absolute top-[487px] left-[142.4px] w-[227.8px] h-[210.6px] z-[1]"
        loading="lazy"
        alt=""
        src="/image1.svg"
      />
      <div className="absolute top-[0px] left-[471.4px] w-[858px] h-[732px]">
        <div className="absolute top-[690px] left-[376px] rounded-5xs-8 bg-white w-[7.8px] h-[7.8px]" />
        <img
          className="absolute top-[0px] left-[0px] w-full h-full"
          loading="lazy"
          alt=""
          src="/group-608.svg"
        />
      </div>
    </div>
  );
};

VideoBanner.propTypes = {
  className: PropTypes.string,
};

export default VideoBanner;
