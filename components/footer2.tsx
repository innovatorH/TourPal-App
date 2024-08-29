import PropTypes from "prop-types";

const Footer2 = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch flex flex-row items-start justify-end py-0 pl-[23px] pr-[22px] box-border max-w-full text-left text-7xl-6 text-text-clr font-poppins ${className}`}
    >
      <div className="flex-1 bg-white flex flex-col items-start justify-start pt-[41px] pb-[183.4px] pl-[1167px] pr-[22px] box-border gap-[21.6px] max-w-full mq450:pl-5 mq450:pt-[27px] mq450:pb-[119px] mq450:box-border mq800:pl-[291px] mq800:box-border mq1300:pl-[583px] mq1300:box-border">
        <div className="w-[1474px] h-[407px] relative bg-white hidden max-w-full" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-6 pr-[25px]">
          <div className="flex-1 flex flex-row items-start justify-between flex-wrap content-start gap-5">
            <img
              className="h-[54.5px] w-[54.5px] relative z-[1]"
              loading="lazy"
              alt=""
              src="/social.svg"
            />
            <img
              className="h-[59.9px] w-[59.9px] relative min-h-[60px] z-[1]"
              alt=""
              src="/social-1.svg"
            />
            <div className="h-[57.2px] flex flex-col items-start justify-start pt-[2.7px] px-0 pb-0 box-border">
              <img
                className="w-[54.5px] h-[54.5px] relative z-[1]"
                alt=""
                src="/social-2.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[27px] pr-[26px]">
          <div className="relative tracking-[0.01em] leading-[124.5%] font-medium z-[1] mq450:text-2xl mq450:leading-[26px]">
            Discover our app
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[9.3px]">
          <img
            className="self-stretch w-[142.3px] relative max-h-full min-h-[47px] shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src="/google-play1.svg"
          />
          <img
            className="self-stretch w-[133px] relative max-h-full min-h-[47px] shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src="/play-store1.svg"
          />
        </div>
      </div>
    </footer>
  );
};

Footer2.propTypes = {
  className: PropTypes.string,
};

export default Footer2;
