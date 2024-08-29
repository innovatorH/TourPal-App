import PropTypes from "prop-types";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <div
      className={`w-[155.7px] flex flex-col items-start justify-end pt-0 px-0 pb-[7.6px] box-border text-left text-4xl-9 text-text-clr font-poppins ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-[16.6px]">
        <div className="relative leading-[30px] font-medium inline-block min-w-[64px] mq450:text-lgi mq450:leading-[24px]">
          Press
        </div>
        <div className="relative leading-[30px] font-medium inline-block min-w-[98px] mq450:text-lgi mq450:leading-[24px]">
          Affilates
        </div>
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
