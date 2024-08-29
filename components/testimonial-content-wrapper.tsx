import PropTypes from "prop-types";

const TestimonialContentWrapper = ({ className = "" }) => {
  return (
    <div
      className={`h-[61.9px] w-[235.4px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border ${className}`}
    >
      <div className="self-stretch flex-1 flex flex-row items-start justify-between gap-5">
        <img
          className="h-[54.5px] w-[54.5px] relative"
          loading="lazy"
          alt=""
          src="/social.svg"
        />
        <img
          className="h-[59.9px] w-[59.9px] relative min-h-[60px]"
          alt=""
          src="/social-1.svg"
        />
        <div className="h-[57.2px] flex flex-col items-start justify-start pt-[2.7px] px-0 pb-0 box-border">
          <img
            className="w-[54.5px] h-[54.5px] relative"
            alt=""
            src="/social-2.svg"
          />
        </div>
      </div>
    </div>
  );
};

TestimonialContentWrapper.propTypes = {
  className: PropTypes.string,
};

export default TestimonialContentWrapper;
