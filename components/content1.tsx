import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const Content1 = ({ className = "" }) => {
  const router = useRouter();

  const onGroupContainerClick = useCallback(() => {
    router.push("/chapter-two-page");
  }, [router]);

  const onVectorIconClick = useCallback(() => {
    router.push("/chapter-one-page");
  }, [router]);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end py-0 px-[62px] box-border max-w-full text-left text-5xl text-wwwtripadvisorcom-black font-abhaya-libre lg:pl-[31px] lg:pr-[31px] lg:box-border ${className}`}
    >
      <div className="w-[1046px] flex flex-row items-start justify-between gap-5 max-w-full mq450:flex-wrap">
        <div className="w-[164px] flex flex-col items-start justify-start pt-[42px] px-0 pb-0 box-border">
          <div
            className="self-stretch flex flex-col items-start justify-start relative gap-[17px] cursor-pointer z-[2]"
            onClick={onGroupContainerClick}
          >
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[54px]">
              <img
                className="h-[100px] flex-1 relative max-w-full overflow-hidden cursor-pointer"
                loading="lazy"
                alt=""
                src="/vector-4.svg"
                onClick={onGroupContainerClick}
              />
            </div>
            <div className="self-stretch relative leading-[24px] [text-shadow:1px_0_0_#22c55e,_0_1px_0_#22c55e,_-1px_0_0_#22c55e,_0_-1px_0_#22c55e] mq450:text-lgi mq450:leading-[19px]">
              The Red Terror
            </div>
            <div className="w-[1116px] h-[404px] absolute !m-[0] right-[-801px] bottom-[-186px]">
              <img
                className="absolute h-full top-[0px] bottom-[0px] left-[15px] max-h-full w-[1101px] z-[1]"
                alt=""
                src="/vector-51.svg"
              />
              <img
                className="absolute top-[374px] left-[0px] w-[30px] h-[30px] cursor-pointer z-[2]"
                alt=""
                src="/vector1.svg"
                onClick={onVectorIconClick}
              />
              <img
                className="absolute top-[39px] left-[440px] w-[30px] h-[30px] z-[2]"
                loading="lazy"
                alt=""
                src="/vector-2.svg"
              />
              <img
                className="absolute top-[175px] left-[658px] w-[30px] h-[30px] z-[2]"
                loading="lazy"
                alt=""
                src="/vector-2.svg"
              />
              <img
                className="absolute top-[309px] left-[877px] w-[30px] h-[30px] z-[2]"
                loading="lazy"
                alt=""
                src="/vector-2.svg"
              />
            </div>
          </div>
        </div>
        <div className="h-[90px] w-[90px] relative">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-mediumspringgreen-300 border-mediumspringgreen-100 border-[0px] border-solid box-border w-full h-full z-[2]" />
          <div className="absolute top-[33px] left-[22px] inline-block min-w-[46px] z-[3] mq450:text-lgi">
            END
          </div>
        </div>
      </div>
    </section>
  );
};

Content1.propTypes = {
  className: PropTypes.string,
};

export default Content1;
