import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const Main = ({ className = "" }) => {
  const router = useRouter();

  const onNavItemTextClick = useCallback(() => {
    router.push("/sign-up");
  }, [router]);

  const onNavItemTextClick1 = useCallback(() => {
    router.push("/log-in");
  }, [router]);

  return (
    <header
      className={`self-stretch h-[104px] flex flex-row items-start justify-start py-0 pl-[21px] pr-0 box-border max-w-full text-left text-3xl-6 text-gray-600 font-open-sans ${className}`}
    >
      <div className="self-stretch flex-1 flex flex-row items-start justify-start max-w-full">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex-1 bg-gainsboro-300 flex flex-row items-start justify-start pt-3.5 px-[33px] pb-[17px] box-border gap-[9.3px] max-w-full">
            <div className="h-[103px] w-[1616px] relative bg-gainsboro-300 hidden max-w-full" />
            <div className="self-stretch w-[355.7px] flex flex-col items-start justify-start max-w-full">
              <img
                className="w-[183px] flex-1 relative rounded-8xs max-h-full object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/tourpal-1@2x.png"
              />
            </div>
            <div className="w-[349.8px] flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-full mq1725:w-[90.6px]">
              <div className="w-[259.2px] flex flex-row items-start justify-between gap-5 mq1725:hidden">
                <a className="[text-decoration:none] relative italic font-bold text-[inherit] z-[1]">
                  Desitnations
                </a>
                <a
                  className="[text-decoration:none] relative inline-block italic font-bold text-[inherit] min-w-[53px] cursor-pointer z-[1]"
                  onClick={onNavItemTextClick}
                >
                  Trips
                </a>
              </div>
            </div>
            <div className="w-[143.7px] flex flex-col items-start justify-start pt-5 pb-0 pl-0 pr-5 box-border">
              <a
                className="[text-decoration:none] relative inline-block italic font-bold text-[inherit] min-w-[86px] cursor-pointer z-[1]"
                onClick={onNavItemTextClick}
              >
                Reviews
              </a>
            </div>
            <div className="w-[203.5px] flex flex-col items-start justify-start pt-5 pb-0 pl-0 pr-5 box-border">
              <a
                className="[text-decoration:none] relative inline-block italic font-bold text-[inherit] min-w-[97px] cursor-pointer z-[1]"
                onClick={onNavItemTextClick}
              >
                Bookings
              </a>
            </div>
            <div className="w-[118.4px] flex flex-col items-start justify-start pt-5 pb-0 pl-0 pr-5 box-border">
              <a
                className="[text-decoration:none] relative inline-block italic font-bold text-[inherit] min-w-[58px] cursor-pointer z-[1]"
                onClick={onNavItemTextClick1}
              >
                Login
              </a>
            </div>
            <div className="w-[182.2px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
              <button
                className="cursor-pointer border-gray-600 border-[1.3px] border-solid pt-2.5 pb-2 pl-[29px] pr-7 bg-[transparent] rounded-[6.65px] flex flex-row items-start justify-start z-[1]"
                onClick={onNavItemTextClick}
              >
                <a className="[text-decoration:none] relative text-3xl-6 inline-block italic font-bold font-open-sans text-gray-600 text-left min-w-[78px] whitespace-nowrap">
                  Sign up
                </a>
                <div className="h-[53.2px] w-[135.7px] relative rounded-[6.65px] border-gray-600 border-[1.3px] border-solid box-border hidden" />
              </button>
            </div>
            <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0">
              <a className="[text-decoration:none] relative inline-block italic font-bold text-[inherit] min-w-[30px] z-[1]">
                EN
              </a>
            </div>
            <div className="flex flex-col items-start justify-start pt-[31.3px] px-0 pb-0">
              <img
                className="w-3 h-1.5 relative z-[1]"
                alt=""
                src="/vector-1.svg"
              />
            </div>
          </div>
        </div>
        <img
          className="h-[100px] w-[100px] relative object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/square.svg"
        />
      </div>
    </header>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
