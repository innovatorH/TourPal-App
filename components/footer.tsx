import FrameComponent8 from "./frame-component8";
import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch flex flex-row items-start justify-start gap-[100.1px] max-w-full text-left text-mid-3 text-text-clr font-poppins mq900:gap-[50px] mq450:gap-[25px] ${className}`}
    >
      <div className="flex flex-col items-start justify-start pt-[503.2px] px-0 pb-0 mq900:pt-[327px] mq900:box-border mq1325:hidden">
        <div className="flex flex-col items-start justify-start gap-[20.7px]">
          <div className="flex flex-row items-start justify-start py-0 px-[38px]">
            <img
              className="h-[46.4px] w-[150px] relative rounded-8xs object-cover shrink-0"
              loading="lazy"
              alt=""
              src="/tourpal-2@2x.png"
            />
          </div>
          <div className="relative leading-[124.5%] font-medium inline-block min-h-[66px] shrink-0">
            <p className="m-0">Plan your trip in minute, get full</p>
            <p className="m-0">Control for much longer.</p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[107.8px] max-w-[calc(100%_-_370px)] text-10xl-3 text-rd mq900:gap-[54px] mq1325:max-w-full mq450:gap-[27px]">
        <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[103.3px] box-border gap-[11.9px] max-w-full font-roboto mq450:pb-[67px] mq450:box-border">
          <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[31.6px] max-w-full mq900:gap-4">
            <div className="w-[555.3px] rounded-sm-3 bg-white flex flex-row items-start justify-start pt-[31.6px] px-10 pb-[31.5px] box-border gap-[18.5px] max-w-full z-[1]">
              <div className="h-[85.8px] w-[555.3px] relative rounded-sm-3 bg-white hidden max-w-full" />
              <div className="h-[22.7px] w-[27.7px] relative rounded-[6.65px] border-text-color border-[1.3px] border-solid box-border z-[1]">
                <img
                  className="absolute top-[7.5px] left-[5.3px] rounded-[1.33px] w-[15.8px] h-[5.7px]"
                  alt=""
                  src="/email-icon.svg"
                />
                <div className="absolute top-[0px] left-[0px] rounded-[6.65px] border-text-color border-[1.3px] border-solid box-border w-full h-full hidden" />
              </div>
              <input
                className="w-[99.2px] [border:none] [outline:none] font-montserrat text-lg-6 bg-[transparent] h-[21.8px] relative text-text-color text-left inline-block p-0 z-[1]"
                placeholder="Your email"
                type="text"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start min-w-[398px] max-w-full mq900:min-w-full">
              <button className="cursor-pointer [border:none] pt-[27.8px] px-[69px] pb-[29px] bg-[transparent] w-[251px] rounded-sm-3 [background:linear-gradient(180deg,_#ff946d,_#ff7d68)] flex flex-row items-start justify-start box-border z-[1]">
                <div className="h-[85.8px] w-[251px] relative rounded-sm-3 [background:linear-gradient(180deg,_#ff946d,_#ff7d68)] hidden" />
                <div className="flex-1 relative text-3xl-6 font-semibold font-open-sans text-white text-center inline-block min-w-[111.5px] z-[1] mq450:text-lg">
                  Subscribe
                </div>
              </button>
            </div>
            <div className="w-[109.2px] flex flex-col items-start justify-start pt-[63.1px] px-0 pb-0 box-border">
              <div className="self-stretch flex flex-row items-start justify-between gap-5">
                <div className="relative inline-block min-w-[17px] mq450:text-4xl">
                  +
                </div>
                <div className="relative inline-block min-w-[17px] mq450:text-4xl">
                  +
                </div>
                <div className="relative text-st inline-block min-w-[17px] mq450:text-4xl">
                  +
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[29.2px]">
            <div className="relative inline-block min-w-[17px] mq450:text-4xl">
              +
            </div>
            <div className="relative inline-block min-w-[17px] mq450:text-4xl">
              +
            </div>
            <div className="relative inline-block min-w-[17px] mq450:text-4xl">
              +
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[29.2px]">
            <div className="relative text-nd inline-block min-w-[17px] mq450:text-4xl">
              +
            </div>
            <div className="relative inline-block min-w-[17px] mq450:text-4xl">
              +
            </div>
            <div className="relative inline-block min-w-[17px] mq450:text-4xl">
              +
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[29.2px]">
            <div className="relative inline-block min-w-[17px] mq450:text-4xl">
              +
            </div>
            <div className="relative inline-block min-w-[17px] mq450:text-4xl">
              +
            </div>
            <div className="relative inline-block min-w-[17px] mq450:text-4xl">
              +
            </div>
            <div className="relative inline-block min-w-[17px] mq450:text-4xl">
              +
            </div>
          </div>
          <div className="w-[201.5px] flex flex-row items-start justify-between gap-5">
            <div className="relative inline-block min-w-[17px] shrink-0 mq450:text-4xl">
              +
            </div>
            <div className="flex flex-row items-start justify-start gap-[29.2px]">
              <div className="relative inline-block min-w-[17px] mq450:text-4xl">
                +
              </div>
              <div className="relative inline-block min-w-[17px] mq450:text-4xl">
                +
              </div>
              <div className="relative inline-block min-w-[17px] mq450:text-4xl">
                +
              </div>
            </div>
          </div>
        </div>
        <FrameComponent8 />
        <div className="w-[891.9px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0 text-xl text-text-clr">
          <div className="relative leading-[25px] font-medium mq450:text-base mq450:leading-[20px]">
            All rights reserved@TourPal.com
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
