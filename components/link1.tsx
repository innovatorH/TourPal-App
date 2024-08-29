import PropTypes from "prop-types";

const Link1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-lg border-gainsboro-200 border-[1px] border-solid flex flex-row items-start justify-start pt-[7px] px-2 pb-[15px] gap-2 text-left text-smi-9 text-wwwtripadvisorcom-black font-wwwtripadvisorcom-inter-black-463 ${className}`}
    >
      <img className="h-12 w-12 relative" alt="" src="/background-11.svg" />
      <div className="flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0">
        <div className="flex flex-col items-start justify-start gap-1">
          <b className="relative leading-[17px]">Upload your first photo</b>
          <div className="relative text-xs-4 leading-[14px] text-darkslategray-200">
            Unlock photo milestones
          </div>
        </div>
      </div>
    </div>
  );
};

Link1.propTypes = {
  className: PropTypes.string,
};

export default Link1;
