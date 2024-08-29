import { useMemo } from "react";
import PropTypes from "prop-types";

const Anchor = ({
  className = "",
  propFlex,
  propMinWidth,
  description,
  propTextDecoration,
  propMinWidth1,
}) => {
  const anchorStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  const descriptionStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
      minWidth: propMinWidth1,
    };
  }, [propTextDecoration, propMinWidth1]);

  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start py-2 px-[5px] box-border min-w-[68px] text-left text-base text-wwwtripadvisorcom-black font-wwwtripadvisorcom-inter-black-463 ${className}`}
      style={anchorStyle}
    >
      <a
        className="[text-decoration:none] relative font-black text-[inherit] inline-block min-w-[78px]"
        style={descriptionStyle}
      >
        {description}
      </a>
    </div>
  );
};

Anchor.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propTextDecoration: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default Anchor;
