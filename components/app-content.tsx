import { useMemo } from "react";
import PropTypes from "prop-types";

const AppContent = ({
  className = "",
  propHeight,
  propPadding,
  googlePlay,
  playStore,
}) => {
  const appContentStyle = useMemo(() => {
    return {
      height: propHeight,
      padding: propPadding,
    };
  }, [propHeight, propPadding]);

  return (
    <div
      className={`flex flex-col items-start justify-start gap-[22px] text-left text-7xl-6 text-text-clr font-poppins ${className}`}
      style={appContentStyle}
    >
      <div className="flex flex-row items-start justify-start py-0 pl-[27px] pr-[26px]">
        <div className="relative tracking-[0.01em] leading-[124.5%] font-medium z-[1] mq450:text-2xl mq450:leading-[26px]">
          Discover our app
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[9.3px]">
        <img
          className="self-stretch w-[142.3px] relative max-h-full min-h-[47px] shrink-0 z-[1]"
          loading="lazy"
          alt=""
          src={googlePlay}
        />
        <img
          className="self-stretch w-[133px] relative max-h-full min-h-[47px] shrink-0 z-[1]"
          loading="lazy"
          alt=""
          src={playStore}
        />
      </div>
    </div>
  );
};

AppContent.propTypes = {
  className: PropTypes.string,
  googlePlay: PropTypes.string,
  playStore: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propPadding: PropTypes.any,
};

export default AppContent;
