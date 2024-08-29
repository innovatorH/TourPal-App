import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const DayContainers = ({ className = "" }) => {
  const router = useRouter();

  const onFooterButtonClick = useCallback(() => {
    router.push("/red-terror-martyrs-memorial");
  }, [router]);

  return (
    <div
      className={`w-[630px] flex flex-row items-start justify-start py-0 px-px box-border max-w-full text-left text-2xl-6 text-wwwtripadvisorcom-black font-wwwtripadvisorcom-inter-black-463 ${className}`}
    >
      <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-5 mq750:flex-wrap">
        <div className="w-[400.9px] flex flex-col items-start justify-end pt-0 px-0 pb-[13.2px] box-border max-w-full">
          <div className="self-stretch flex flex-row items-end justify-start gap-[6.7px] mq450:flex-wrap">
            <div className="h-[114.6px] flex flex-col items-start justify-start gap-[41.6px] min-w-[188px] shrink-0 mq450:flex-1">
              <button className="cursor-pointer border-wwwtripadvisorcom-black border-[1px] border-solid py-3 pl-[22px] pr-[21px] bg-white w-[100.1px] flex-1 rounded-3xl box-border flex flex-row items-start justify-start gap-2">
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <img className="w-4 h-4 relative" alt="" src="/svg-16.svg" />
                </div>
                <b className="w-[30.3px] relative text-base-1 leading-[20px] flex font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-center items-center justify-center shrink-0 min-w-[30.3px]">
                  Add
                </b>
              </button>
              <b className="relative leading-[29px] mq450:text-mid mq450:leading-[23px]">
                Thursday, Aug 29
              </b>
            </div>
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-px box-border min-w-[134px] text-center text-lgi-8">
              <div className="self-stretch relative [text-decoration:underline] leading-[24px] shrink-0">
                Addis Ababa, Ethiopia
              </div>
            </div>
          </div>
        </div>
        <button
          className="cursor-pointer [border:none] py-[11px] px-[15px] bg-wwwtripadvisorcom-black w-[77px] rounded-xl flex flex-row items-start justify-start box-border"
          onClick={onFooterButtonClick}
        >
          <b className="flex-1 relative text-mini-8 leading-[20px] font-wwwtripadvisorcom-inter-black-463 text-white text-center">
            Start
          </b>
        </button>
      </div>
    </div>
  );
};

DayContainers.propTypes = {
  className: PropTypes.string,
};

export default DayContainers;
