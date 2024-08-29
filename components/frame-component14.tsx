import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const FrameComponent14 = ({ className = "" }) => {
  const router = useRouter();

  const onButtonMenuProfileClick = useCallback(() => {
    router.push("/user-profile");
  }, [router]);

  return (
    <header
      className={`self-stretch flex flex-col items-start justify-start gap-[6.8px] shrink-0 max-w-full text-left text-3xl-6 text-gray-600 font-open-sans ${className}`}
    >
      <div className="self-stretch bg-gainsboro-300 flex flex-row items-start justify-between pt-[3px] pb-0 pl-[41px] pr-11 box-border max-w-full gap-5 z-[1] mq800:pr-[22px] mq800:box-border mq1300:flex-wrap">
        <div className="h-[103px] w-[1519px] relative bg-gainsboro-300 hidden max-w-full" />
        <div className="h-[83px] w-[183px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
          <img
            className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/tourpal-1@2x.png"
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-[70.2px] max-w-full mq800:gap-[18px] mq1125:gap-[35px] mq1125:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-[30.5px] px-0 pb-0">
            <a className="[text-decoration:none] relative italic font-bold text-[inherit] z-[2] mq450:text-lg">
              Desitnations
            </a>
          </div>
          <div className="w-[522.8px] flex flex-col items-start justify-start pt-[30.5px] px-0 pb-0 box-border max-w-full">
            <nav className="m-0 w-[440.9px] flex flex-row items-start justify-between gap-5 max-w-full whitespace-nowrap text-left text-3xl-6 text-gray-600 font-open-sans mq450:flex-wrap">
              <div className="w-[85.9px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border">
                <a className="[text-decoration:none] relative inline-block italic font-bold text-[inherit] min-w-[53px] z-[2] mq450:text-lg">
                  Trips
                </a>
              </div>
              <a className="[text-decoration:none] relative inline-block italic font-bold text-[inherit] min-w-[86px] z-[2] mq450:text-lg">
                Reviews
              </a>
              <a className="[text-decoration:none] relative italic font-bold text-[inherit] z-[2] mq450:text-lg">
                Things To Do
              </a>
            </nav>
          </div>
          <div className="w-[196px] flex flex-row items-start justify-between gap-5">
            <div className="flex flex-col items-start justify-start pt-[26px] px-0 pb-0">
              <div
                className="w-10 h-10 relative cursor-pointer z-[2]"
                onClick={onButtonMenuProfileClick}
              >
                <img
                  className="absolute top-[0px] left-[0px] rounded-xl w-full h-full overflow-hidden object-cover"
                  loading="lazy"
                  alt=""
                  src="/container2@2x.png"
                />
              </div>
            </div>
            <img
              className="h-[100px] w-[100px] relative object-contain z-[2]"
              loading="lazy"
              alt=""
              src="/square.svg"
            />
          </div>
        </div>
      </div>
      <div className="w-[526.2px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-xs-6 text-wwwtripadvisorcom-black font-wwwtripadvisorcom-inter-black-463">
        <div className="w-[144.1px] flex flex-row items-start justify-between gap-5">
          <a className="[text-decoration:none] relative leading-[14px] text-[inherit] inline-block min-w-[36px] z-[1]">
            Profile
          </a>
          <a className="[text-decoration:none] relative text-xs-4 leading-[14px] text-darkslategray-200 text-left inline-block min-w-[77px] z-[1]">
            Achievements
          </a>
        </div>
      </div>
    </header>
  );
};

FrameComponent14.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent14;
