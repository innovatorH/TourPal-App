import PropTypes from "prop-types";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-start justify-end pt-0 px-0 pb-[11.6px] ${className}`}
    >
      <div className="flex flex-row items-start justify-start gap-[9.3px] mq450:flex-wrap">
        <img
          className="self-stretch w-[142.3px] relative max-h-full min-h-[47px] shrink-0"
          loading="lazy"
          alt=""
          src="/google-play.svg"
        />
        <img
          className="self-stretch w-[133px] relative max-h-full min-h-[47px] shrink-0"
          loading="lazy"
          alt=""
          src="/play-store.svg"
        />
      </div>
    </div>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
