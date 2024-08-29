import { useMemo } from "react";
import PropTypes from "prop-types";

const CheckpointquestCard = ({
  className = "",
  adwaMuseumCheckpointThumbnail,
  line1,
  checkpointquestCardLeft,
}) => {
  const checkpointquestCardStyle = useMemo(() => {
    return {
      left: checkpointquestCardLeft,
    };
  }, [checkpointquestCardLeft]);

  return (
    <div
      className={`flex-1 rounded-3xs bg-white border-saddlebrown-200 border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start pt-[11px] px-2 pb-[17px] gap-[17px] min-w-[239px] max-w-full text-left text-base text-wwwtripadvisorcom-black font-wwwtripadvisorcom-inter-black-463 ${className}`}
      style={checkpointquestCardStyle}
    >
      <img
        className="self-stretch h-[300px] relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={adwaMuseumCheckpointThumbnail}
      />
      <div className="w-[329px] flex flex-row items-start justify-start py-0 px-[27px] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between gap-5">
          <div className="relative inline-block min-w-[102px]">
            Adwa Victory
          </div>
          <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
            <img
              className="w-[22px] h-0 relative"
              loading="lazy"
              alt=""
              src={line1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

CheckpointquestCard.propTypes = {
  className: PropTypes.string,
  adwaMuseumCheckpointThumbnail: PropTypes.string,
  line1: PropTypes.string,

  /** Style props */
  checkpointquestCardLeft: PropTypes.any,
};

export default CheckpointquestCard;
