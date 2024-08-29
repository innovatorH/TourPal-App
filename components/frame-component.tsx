import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "", rectangle165, tourPal1, square }) => {
  const router = useRouter();

  const onNavItemTextClick = useCallback(() => {
    router.push("/reviews");
  }, [router]);

  const onNavItemTextClick1 = useCallback(() => {
    router.push("/journeystory-generator-user");
  }, [router]);

  return (
    <header
      className={`self-stretch flex flex-row items-end justify-between pt-0.5 pb-0 pl-[51px] pr-[43px] box-border sticky top-[0] z-[99] max-w-full gap-5 text-left text-3xl-6 text-gray-600 font-open-sans mq750:pl-[25px] mq750:pr-[21px] mq750:box-border ${className}`}
    >
      <img
        className="h-full w-full absolute !m-[0] top-[-1px] right-[0.2px] left-[0px] max-w-full overflow-hidden"
        alt=""
        src={rectangle165}
      />
      <img
        className="h-[72px] w-[183px] relative rounded-8xs object-cover z-[3]"
        loading="lazy"
        alt=""
        src={tourPal1}
      />
      <div className="flex flex-row items-start justify-start gap-[67px] max-w-full mq750:gap-[17px] mq1050:gap-[33px]">
        <div className="flex flex-col items-start justify-start pt-12 pb-0 pl-0 pr-[3px]">
          <a className="[text-decoration:none] relative italic font-bold text-[inherit] z-[1]">
            Desitnations
          </a>
        </div>
        <div className="w-[238.9px] flex flex-col items-start justify-start pt-12 px-0 pb-0 box-border">
          <div className="self-stretch h-[31px] relative">
            <a
              className="[text-decoration:none] absolute top-[0px] left-[152.9px] inline-block italic font-bold text-[inherit] min-w-[86px] cursor-pointer z-[1]"
              onClick={onNavItemTextClick}
            >
              Reviews
            </a>
            <a
              className="[text-decoration:none] absolute top-[0px] left-[0px] inline-block italic font-bold text-[inherit] min-w-[53px] cursor-pointer z-[1]"
              onClick={onNavItemTextClick1}
            >
              Trips
            </a>
          </div>
        </div>
        <div className="w-[180.9px] flex flex-col items-start justify-start pt-12 pb-0 pl-0 pr-5 box-border">
          <a className="[text-decoration:none] relative italic font-bold text-[inherit] whitespace-nowrap z-[1]">
            Things To Do
          </a>
        </div>
        <div className="flex flex-col items-start justify-start pt-11 pb-0 pl-0 pr-[21px]">
          <div className="w-10 h-10 relative rounded-xl overflow-hidden shrink-0 z-[1]">
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
        <img
          className="h-[100px] w-[100px] relative object-contain z-[1]"
          loading="lazy"
          alt=""
          src={square}
        />
      </div>
    </header>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  rectangle165: PropTypes.string,
  tourPal1: PropTypes.string,
  square: PropTypes.string,
};

export default FrameComponent;
