import Footer from "./footer";
import PropTypes from "prop-types";

const FrameComponent13 = ({ className = "" }) => {
  return (
    <section
      className={`w-[1711.2px] flex flex-col items-start justify-start gap-[100.8px] max-w-full text-center text-24xl-9 text-text-clr font-poppins mq900:gap-[50px] mq450:gap-[25px] ${className}`}
    >
      <div className="w-[1662.2px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[1262px] flex flex-row items-start justify-start relative max-w-full">
          <div className="flex-1 relative leading-[71.83px] font-semibold inline-block max-w-full z-[1] mq900:text-16xl mq900:leading-[57px] mq450:text-7xl mq450:leading-[43px]">
            <p className="m-0">
              Subscribe to get information, latest news and other
            </p>
            <p className="m-0">interesting offers in Addis Ababa</p>
          </div>
          <div className="h-[530.1px] w-[1684.2px] absolute !m-[0] bottom-[-285.1px] left-[-277.2px]">
            <img
              className="absolute top-[16.4px] left-[0px] w-[1657.9px] h-[513.7px] object-contain"
              alt=""
              src="/group-78@2x.png"
            />
            <img
              className="absolute top-[0px] left-[1591.9px] w-[92.3px] h-[88.3px] z-[1]"
              loading="lazy"
              alt=""
              src="/group-77.svg"
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

FrameComponent13.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent13;
