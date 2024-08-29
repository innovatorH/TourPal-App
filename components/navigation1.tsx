import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const Navigation1 = ({ className = "" }) => {
  const router = useRouter();

  const onNavItemTextClick = useCallback(() => {
    router.push("/sign-up");
  }, [router]);

  const onNavItemTextClick1 = useCallback(() => {
    router.push("/log-in");
  }, [router]);

  const onTourPal1ImageClick = useCallback(() => {
    router.push("/tour-pal-landing-page");
  }, [router]);

  return (
    <header
      className={`self-stretch flex flex-row items-start justify-center pt-6 pb-[25.8px] pl-[132px] pr-5 sticky gap-[67px] top-[0] z-[99] text-left text-3xl-6 text-gray-600 font-open-sans mq850:hidden mq850:gap-[17px] mq850:pl-[33px] mq850:box-border mq1225:gap-[33px] mq1225:pl-[66px] mq1225:box-border ${className}`}
    >
      <div className="flex flex-col items-start justify-start pt-3 pb-0 pl-0 pr-[3px]">
        <a className="[text-decoration:none] relative italic font-bold text-[inherit] z-[1]">
          Desitnations
        </a>
      </div>
      <div className="w-[238.9px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
        <div className="self-stretch h-[31px] relative">
          <a
            className="[text-decoration:none] absolute top-[0px] left-[152.9px] inline-block italic font-bold text-[inherit] min-w-[86px] cursor-pointer z-[1]"
            onClick={onNavItemTextClick}
          >
            Reviews
          </a>
          <a
            className="[text-decoration:none] absolute top-[0px] left-[0px] inline-block italic font-bold text-[inherit] min-w-[53px] cursor-pointer z-[1]"
            onClick={onNavItemTextClick}
          >
            Trips
          </a>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-3 pb-0 pl-0 pr-2.5">
        <a
          className="[text-decoration:none] relative italic font-bold text-[inherit] whitespace-nowrap cursor-pointer z-[1]"
          onClick={onNavItemTextClick}
        >
          Things To Do
        </a>
      </div>
      <div className="flex flex-col items-start justify-start pt-3 pb-0 pl-0 pr-0.5">
        <a
          className="[text-decoration:none] relative inline-block italic font-bold text-[inherit] min-w-[58px] cursor-pointer z-[1]"
          onClick={onNavItemTextClick1}
        >
          Login
        </a>
      </div>
      <button
        className="cursor-pointer border-gray-600 border-[1.3px] border-solid pt-2.5 pb-2 pl-[29px] pr-7 bg-[transparent] rounded-[6.65px] flex flex-row items-start justify-start z-[1]"
        onClick={onNavItemTextClick}
      >
        <a className="[text-decoration:none] relative text-3xl-6 inline-block italic font-bold font-open-sans text-gray-600 text-left min-w-[78px] whitespace-nowrap">
          Sign up
        </a>
        <div className="h-[53.2px] w-[135.7px] relative rounded-[6.65px] border-gray-600 border-[1.3px] border-solid box-border hidden" />
      </button>
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <img
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-165.svg"
        />
        <img
          className="absolute top-[15px] left-[26px] rounded-8xs w-[183px] h-[72px] object-cover cursor-pointer z-[1]"
          loading="lazy"
          alt=""
          src="/tourpal-1@2x.png"
          onClick={onTourPal1ImageClick}
        />
        <img
          className="absolute h-[calc(100%_-_3px)] top-[0px] bottom-[3px] left-[1377px] max-h-full w-[100px] object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/square.svg"
        />
      </div>
    </header>
  );
};

Navigation1.propTypes = {
  className: PropTypes.string,
};

export default Navigation1;
