import PropTypes from "prop-types";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <div
      className={`w-[187.3px] flex flex-col items-start justify-start pt-[4.7px] pb-0 pl-0 pr-5 box-border text-left text-4xl-9 text-text-clr font-poppins ${className}`}
    >
      <div className="relative leading-[30px] font-medium inline-block min-w-[109px] mq450:text-lgi mq450:leading-[24px]">
        About Us
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
