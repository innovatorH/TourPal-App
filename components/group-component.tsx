import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const GroupComponent = ({ className = "" }) => {
  const router = useRouter();

  const onTourPal1ImageClick = useCallback(() => {
    router.push("/tour-pal-landing-page");
  }, [router]);

  const onNavItemTextClick = useCallback(() => {
    router.push("/reviews");
  }, [router]);

  const onButtonMenuProfileClick = useCallback(() => {
    router.push("/user-profile");
  }, [router]);

  return (
    <header
      className={`self-stretch flex flex-row items-end justify-start pt-3.5 px-[41px] pb-[17px] box-border sticky gap-[148px] top-[0] z-[99] max-w-full text-left text-3xl-6 text-gray-600 font-open-sans lg:gap-[74px] mq450:gap-[18px] mq750:gap-[37px] ${className}`}
    >
      <img
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-5901.svg"
      />
      <img
        className="h-[72px] w-[183px] relative rounded-8xs object-cover cursor-pointer z-[1]"
        loading="lazy"
        alt=""
        src="/tourpal-1@2x.png"
        onClick={onTourPal1ImageClick}
      />
      <div className="w-[665px] flex flex-col items-start justify-end pt-0 pb-5 pl-0 pr-[17px] box-border max-w-full mq1050:w-[17.9px]">
        <div className="self-stretch flex flex-row items-start justify-between gap-5 z-[1] mq1050:hidden">
          <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[3px]">
            <a className="[text-decoration:none] relative italic font-bold text-[inherit]">
              Desitnations
            </a>
          </div>
          <div className="w-[85.9px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border">
            <a className="[text-decoration:none] relative inline-block italic font-bold text-[inherit] min-w-[53px]">
              Trips
            </a>
          </div>
          <a
            className="[text-decoration:none] relative inline-block italic font-bold text-[inherit] min-w-[86px] cursor-pointer"
            onClick={onNavItemTextClick}
          >
            Reviews
          </a>
          <a className="[text-decoration:none] relative italic font-bold text-[inherit] whitespace-nowrap">
            Things To Do
          </a>
        </div>
      </div>
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-3">
        <div
          className="flex flex-row items-start justify-start cursor-pointer z-[1]"
          onClick={onButtonMenuProfileClick}
        >
          <div className="h-10 w-10 relative rounded-xl overflow-hidden shrink-0">
            <img
              className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_20px)] max-h-full w-full overflow-hidden object-cover"
              alt=""
              src="/picture--defaultavatar202042jpg@2x.png"
            />
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/image-34@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
