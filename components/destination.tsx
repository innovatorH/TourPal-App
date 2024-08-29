import { useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const Destination = ({
  className = "",
  onDestinationContainerClick,
  propWidth,
  propBackgroundImage,
  propAlignSelf,
  rectangle14,
  propGap,
  piassaAddisAbaba,
  daysTrip,
  k,
  propMinWidth,
}) => {
  const destinationStyle = useMemo(() => {
    return {
      width: propWidth,
      backgroundImage: propBackgroundImage,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propBackgroundImage, propAlignSelf]);

  const card2Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const kStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const router = useRouter();

  const onDestinationContainerClick1 = useCallback(() => {
    router.push("/adwa");
  }, [router]);

  return (
    <div
      className={`w-[419px] rounded-[31.92px] flex flex-row items-end justify-start bg-[url('/rectangle-14@2x.png')] bg-cover bg-no-repeat bg-[top] min-h-[608px] max-w-full cursor-pointer text-left text-4xl-9 text-text-clr font-poppins ${className}`}
      onClick={onDestinationContainerClick}
      style={destinationStyle}
    >
      <img
        className="w-[417.7px] relative rounded-[31.92px] max-h-full object-cover hidden max-w-full"
        alt=""
        src={rectangle14}
      />
      <div
        className="flex-1 rounded-t-none rounded-b-[31.92px] bg-white flex flex-row items-start justify-start pt-[35.9px] px-[26px] pb-[55.9px] box-border gap-[32.3px] max-w-full z-[1] mq450:gap-4 mq450:flex-wrap"
        style={card2Style}
      >
        <div className="h-[172.9px] w-[419px] relative rounded-t-none rounded-b-[31.92px] bg-white hidden max-w-full" />
        <div className="flex flex-col items-start justify-start gap-[24.5px]">
          <div className="relative leading-[30px] font-medium z-[1] mq450:text-lgi mq450:leading-[24px]">
            {piassaAddisAbaba}
          </div>
          <div className="flex flex-row items-start justify-start gap-[18.6px] text-2xl-3">
            <img
              className="h-[26.6px] w-[26.6px] relative overflow-hidden shrink-0 min-h-[27px] z-[1]"
              loading="lazy"
              alt=""
              src="/navigation-1.svg"
            />
            <div className="relative leading-[124.5%] font-medium inline-block min-w-[126px] shrink-0 z-[1] mq450:text-mid mq450:leading-[21px]">
              {daysTrip}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[1.3px] px-0 pb-0">
          <div
            className="relative leading-[30px] font-medium inline-block min-w-[79px] z-[1] mq450:text-lgi mq450:leading-[24px]"
            style={kStyle}
          >
            {k}
          </div>
        </div>
      </div>
    </div>
  );
};

Destination.propTypes = {
  className: PropTypes.string,
  rectangle14: PropTypes.string,
  piassaAddisAbaba: PropTypes.string,
  daysTrip: PropTypes.string,
  k: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propBackgroundImage: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propGap: PropTypes.any,
  propMinWidth: PropTypes.any,

  /** Action props */
  onDestinationContainerClick: PropTypes.func,
};

export default Destination;
