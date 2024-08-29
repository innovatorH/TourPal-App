import PropTypes from "prop-types";

const BackgroundHorizontalBorder = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-gainsboro-200 border-gainsboro-200 border-t-[0.8px] border-solid flex flex-row items-start justify-center pt-28 px-5 pb-[112.6px] gap-3 shrink-0 text-left text-smi text-wwwtripadvisorcom-black font-wwwtripadvisorcom-inter-black-463 ${className}`}
    >
      <img
        className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
        loading="lazy"
        alt=""
        src="/icon.svg"
      />
      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
        <b className="relative leading-[18px] inline-block min-w-[106px]">
          Add cover photo
        </b>
      </div>
    </div>
  );
};

BackgroundHorizontalBorder.propTypes = {
  className: PropTypes.string,
};

export default BackgroundHorizontalBorder;
