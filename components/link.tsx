import PropTypes from "prop-types";

const Link = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-lg border-gainsboro-200 border-[1px] border-solid flex flex-row items-start justify-start pt-[7px] px-2 pb-[15px] gap-2 text-left text-smi-5 text-wwwtripadvisorcom-black font-wwwtripadvisorcom-inter-black-463 ${className}`}
    >
      <img
        className="h-12 w-12 relative"
        loading="lazy"
        alt=""
        src="/background1.svg"
      />
      <div className="flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0">
        <div className="flex flex-col items-start justify-start gap-1">
          <b className="relative leading-[17px]">Write your first review</b>
          <div className="relative text-xs-3 leading-[14px] text-darkslategray-200">
            Unlock review milestones
          </div>
        </div>
      </div>
    </div>
  );
};

Link.propTypes = {
  className: PropTypes.string,
};

export default Link;
