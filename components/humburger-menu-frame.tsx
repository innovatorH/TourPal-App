import { useMemo } from "react";
import PropTypes from "prop-types";

const HumburgerMenuFrame = ({
  className = "",
  humburgerMenuFramePosition,
  humburgerMenuFrameBottom,
  humburgerMenuFrameLeft,
}) => {
  const humburgerMenuFrameStyle = useMemo(() => {
    return {
      position: humburgerMenuFramePosition,
      bottom: humburgerMenuFrameBottom,
      left: humburgerMenuFrameLeft,
    };
  }, [
    humburgerMenuFramePosition,
    humburgerMenuFrameBottom,
    humburgerMenuFrameLeft,
  ]);

  return (
    <div
      className={`h-[46px] w-5 relative z-[1] ${className}`}
      style={humburgerMenuFrameStyle}
    >
      <div className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_10px)] w-5 h-[12.5px]">
        <div className="absolute top-[calc(50%_-_6.25px)] left-[calc(50%_-_10px)] rounded-8xs bg-saddlebrown-100 w-5 h-[1.5px]" />
        <div className="absolute top-[calc(50%_-_0.75px)] left-[calc(50%_-_10px)] rounded-8xs bg-saddlebrown-100 w-5 h-[1.5px]" />
        <div className="absolute top-[calc(50%_+_4.75px)] left-[calc(50%_-_10px)] rounded-8xs bg-saddlebrown-100 w-5 h-[1.5px]" />
      </div>
    </div>
  );
};

HumburgerMenuFrame.propTypes = {
  className: PropTypes.string,

  /** Style props */
  humburgerMenuFramePosition: PropTypes.any,
  humburgerMenuFrameBottom: PropTypes.any,
  humburgerMenuFrameLeft: PropTypes.any,
};

export default HumburgerMenuFrame;
