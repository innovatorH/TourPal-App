import { useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "", title1, nextTextShadow }) => {
  const nextStyle = useMemo(() => {
    return {
      textShadow: nextTextShadow,
    };
  }, [nextTextShadow]);

  const router = useRouter();

  const onNextContainerClick = useCallback(() => {
    router.push("/checkpoint-three-page");
  }, [router]);

  return (
    <footer
      className={`self-stretch flex flex-row items-end justify-between max-w-full gap-5 text-left text-base text-wwwtripadvisorcom-black font-wwwtripadvisorcom-inter-black-463 mq675:flex-wrap ${className}`}
    >
      <img
        className="w-[443px] relative max-h-full object-cover max-w-full"
        loading="lazy"
        alt=""
        src={title1}
      />
      <div
        className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start gap-5 cursor-pointer"
        onClick={onNextContainerClick}
      >
        <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
          <b className="relative inline-block min-w-[37px]" style={nextStyle}>
            Next
          </b>
        </div>
        <img
          className="h-[30px] w-[19.4px] relative object-contain"
          loading="lazy"
          alt=""
          src="/vector.svg"
        />
      </div>
    </footer>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
  title1: PropTypes.string,

  /** Style props */
  nextTextShadow: PropTypes.any,
};

export default FrameComponent3;
