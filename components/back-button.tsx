import PropTypes from "prop-types";

const BackButton = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-2.5 z-[1] text-left text-base text-wwwtripadvisorcom-black font-wwwtripadvisorcom-inter-black-463 ${className}`}
    >
      <div className="flex flex-row items-start justify-start py-0 pl-1 pr-[5px]">
        <img
          className="h-[30px] w-[29.3px] relative"
          loading="lazy"
          alt=""
          src="/vector-11.svg"
        />
      </div>
      <div className="relative inline-block min-w-[38px]">Back</div>
    </div>
  );
};

BackButton.propTypes = {
  className: PropTypes.string,
};

export default BackButton;
