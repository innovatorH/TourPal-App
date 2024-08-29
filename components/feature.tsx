import { useCallback } from "react";
import { useRouter } from "next/router";
import Destination from "./destination";
import PropTypes from "prop-types";

const Feature = ({ className = "" }) => {
  const router = useRouter();

  const onDestinationContainerClick = useCallback(() => {
    router.push("/adwa");
  }, [router]);

  const onDestinationContainerClick1 = useCallback(() => {
    router.push("/kilo");
  }, [router]);

  const onDestinationContainerClick2 = useCallback(() => {
    router.push("/entoto");
  }, [router]);

  return (
    <section
      className={`w-[1557.4px] flex flex-row items-start justify-center pt-0 px-0 pb-[114.4px] box-border max-w-full text-center text-47xl-5 text-rd1 font-volkhov mq900:pb-[74px] mq900:box-border mq450:pb-12 mq450:box-border ${className}`}
    >
      <div className="flex flex-col items-end justify-start gap-[80.2px] max-w-full mq900:gap-10 mq450:gap-5">
        <div className="w-[1366.6px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <b className="relative capitalize mq900:text-34xl mq450:text-21xl">
            Top Destinations
          </b>
        </div>
        <div className="flex flex-row items-start justify-center gap-[46.6px] max-w-full text-left text-4xl-9 text-text-clr font-poppins mq900:gap-[23px] mq1725:flex-wrap">
          <Destination
            onDestinationContainerClick={onDestinationContainerClick}
            rectangle14="/rectangle-14@2x.png"
            piassaAddisAbaba="Piassa, Addis Ababa"
            daysTrip="10 Days Trip"
            k="$5,42k"
          />
          <div className="w-[452.1px] flex flex-col items-start justify-start py-0 pl-0 pr-[33px] box-border max-w-full">
            <Destination
              onDestinationContainerClick={onDestinationContainerClick1}
              propWidth="unset"
              propBackgroundImage="url('/rectangle-141@2x.png')"
              propAlignSelf="stretch"
              rectangle14="/rectangle-141@2x.png"
              propGap="67.6px"
              piassaAddisAbaba="4kilo, Addis Ababa"
              daysTrip="12 Days Trip"
              k="$4.2k"
              propMinWidth="64px"
            />
          </div>
          <div className="w-[419px] flex flex-row items-start justify-start relative max-w-full">
            <img
              className="h-[335.2px] w-[127.7px] absolute !m-[0] right-[-82.5px] bottom-[62.5px]"
              alt=""
              src="/decore-1.svg"
            />
            <div
              className="flex-1 rounded-[31.92px] flex flex-row items-end justify-start bg-[url('/rectangle-142@2x.png')] bg-cover bg-no-repeat bg-[top] min-h-[608px] max-w-full cursor-pointer z-[1]"
              onClick={onDestinationContainerClick2}
            >
              <img
                className="w-[417.7px] relative rounded-[31.92px] max-h-full object-cover hidden max-w-full"
                alt=""
                src="/rectangle-142@2x.png"
              />
              <div className="flex-1 rounded-t-none rounded-b-[31.92px] bg-white flex flex-row items-start justify-between pt-[37.2px] pb-[55.9px] pl-[26px] pr-[34px] box-border max-w-full gap-5 z-[1] mq450:flex-wrap">
                <div className="h-[172.9px] w-[419px] relative rounded-t-none rounded-b-[31.92px] bg-white hidden max-w-full" />
                <div className="flex flex-col items-start justify-start gap-[23.2px]">
                  <div className="relative leading-[30px] font-medium z-[1] mq450:text-lgi mq450:leading-[24px]">
                    Entoto, Addis Ababa
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[14.6px] text-2xl-3">
                    <img
                      className="h-[26.6px] w-[26.6px] relative overflow-hidden shrink-0 min-h-[27px] z-[1]"
                      alt=""
                      src="/navigation-1.svg"
                    />
                    <div className="relative leading-[124.5%] font-medium shrink-0 z-[1] mq450:text-mid mq450:leading-[21px]">
                      28 Days Trip
                    </div>
                  </div>
                </div>
                <div className="relative leading-[30px] font-medium inline-block min-w-[53px] z-[1] mq450:text-lgi mq450:leading-[24px]">
                  $15k
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Feature.propTypes = {
  className: PropTypes.string,
};

export default Feature;
