import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const Background1 = ({ className = "" }) => {
  const router = useRouter();

  const onNavItemTextClick = useCallback(() => {
    router.push("/journeystory-generator-user");
  }, [router]);

  const onButtonMenuProfileClick = useCallback(() => {
    router.push("/user-profile");
  }, [router]);

  return (
    <header
      className={`h-40 bg-white overflow-x-auto shrink-0 flex flex-row items-start justify-start pt-[30px] px-0 pb-[23px] box-border max-w-full text-left text-3xl-6 text-gray-600 font-open-sans ${className}`}
    >
      <div className="self-stretch w-[1519px] overflow-x-auto shrink-0 flex flex-row items-start justify-start pt-[18px] px-[41px] pb-[17px] box-border relative gap-[70.2px] max-w-full z-[1] mq450:gap-[18px] mq750:gap-[35px]">
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full shrink-0"
          alt=""
          src="/group-590.svg"
        />
        <div className="self-stretch w-[207.8px] shrink-0 flex flex-col items-start justify-start py-0 pl-0 pr-6 box-border">
          <img
            className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/tourpal-1@2x.png"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-[21px] px-0 pb-0">
          <a className="[text-decoration:none] relative italic font-bold text-[inherit] z-[1] mq450:text-lg">
            Desitnations
          </a>
        </div>
        <div className="w-[82.7px] shrink-0 flex flex-col items-start justify-start pt-[21px] pb-0 pl-0 pr-5 box-border">
          <a
            className="[text-decoration:none] relative inline-block italic font-bold text-[inherit] min-w-[53px] cursor-pointer z-[1] mq450:text-lg"
            onClick={onNavItemTextClick}
          >
            Trips
          </a>
        </div>
        <div className="w-[436.7px] shrink-0 flex flex-col items-start justify-start pt-[21px] px-0 pb-0 box-border max-w-[calc(100%_-_747px)]">
          <div className="w-72 flex flex-row items-start justify-between gap-5">
            <a className="[text-decoration:none] relative inline-block italic font-bold text-[inherit] min-w-[86px] z-[1] mq450:text-lg">
              Reviews
            </a>
            <a className="[text-decoration:none] relative italic font-bold text-[inherit] z-[1] mq450:text-lg">
              Things To Do
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0">
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
                alt=""
                src="/image-34@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Background1.propTypes = {
  className: PropTypes.string,
};

export default Background1;
