import { useCallback } from "react";
import HumburgerMenuFrame from "../components/humburger-menu-frame";
import { useRouter } from "next/router";

const CheckpointSixPage = () => {
  const router = useRouter();

  const onLogoContainerClick = useCallback(() => {
    router.push("/red-terror-martyrs-memorial");
  }, [router]);

  const onFooterShapesIconClick = useCallback(() => {
    router.push("/chapter-one-page");
  }, [router]);

  const onFooterShapesIconClick1 = useCallback(() => {
    router.push("/chapter-two-page");
  }, [router]);

  const onFooterShapesIconClick2 = useCallback(() => {
    router.push("/chapter-threepage");
  }, [router]);

  const onFooterShapesIconClick3 = useCallback(() => {
    router.push("/chapter-four-page");
  }, [router]);

  const onFooterShapesIconClick4 = useCallback(() => {
    router.push("/chapter-five-page");
  }, [router]);

  const onGroupContainerClick = useCallback(() => {
    router.push("/chapter-six-page");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-5 px-1.5 pb-[563px] box-border gap-[136px] leading-[normal] tracking-[normal] text-left text-5xl text-wwwtripadvisorcom-black font-abhaya-libre mq450:gap-[34px] mq750:gap-[68px]">
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/image-48@2x.png"
      />
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[21px] box-border max-w-full">
        <header className="w-[1026px] flex flex-row items-start justify-between gap-5 max-w-full text-left text-base text-saddlebrown-100 font-itim">
          <div className="flex flex-row items-start justify-start gap-5">
            <HumburgerMenuFrame
              humburgerMenuFramePosition="relative"
              humburgerMenuFrameBottom="unset"
              humburgerMenuFrameLeft="unset"
            />
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <div
                className="flex flex-col items-start justify-start gap-0.5 cursor-pointer z-[1]"
                onClick={onLogoContainerClick}
              >
                <div className="flex flex-row items-start justify-start py-0 px-[13px]">
                  <img
                    className="h-[25px] w-[29.5px] relative"
                    loading="lazy"
                    alt=""
                    src="/logo.svg"
                  />
                </div>
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[53px]">
                  TourPal
                </a>
              </div>
            </div>
          </div>
          <div className="w-[666px] flex flex-col items-start justify-start pt-[55px] px-0 pb-0 box-border max-w-full text-29xl font-abhaya-libre mq750:w-0">
            <h1 className="m-0 self-stretch relative text-inherit font-normal font-[inherit] whitespace-nowrap z-[1] mq750:hidden">
              Red Terror Martyrs Memorial
            </h1>
          </div>
        </header>
      </div>
      <div className="w-[276px] flex flex-row items-start justify-start py-0 pl-5 pr-0 box-border relative">
        <div className="h-[404px] w-[1116px] absolute !m-[0] bottom-[-242px] left-[-1004px]">
          <img
            className="absolute h-full top-[0px] bottom-[0px] left-[15px] max-h-full w-[1101px] z-[1]"
            alt=""
            src="/vector-55.svg"
          />
          <img
            className="absolute top-[374px] left-[0px] w-[30px] h-[30px] cursor-pointer z-[2]"
            alt=""
            src="/vector1.svg"
            onClick={onFooterShapesIconClick}
          />
          <img
            className="absolute top-[173px] left-[218px] w-[30px] h-[30px] cursor-pointer z-[2]"
            loading="lazy"
            alt=""
            src="/vector1.svg"
            onClick={onFooterShapesIconClick1}
          />
          <img
            className="absolute top-[39px] left-[440px] w-[30px] h-[30px] cursor-pointer z-[2]"
            loading="lazy"
            alt=""
            src="/vector1.svg"
            onClick={onFooterShapesIconClick2}
          />
          <img
            className="absolute top-[175px] left-[658px] w-[30px] h-[30px] cursor-pointer z-[2]"
            loading="lazy"
            alt=""
            src="/vector1.svg"
            onClick={onFooterShapesIconClick3}
          />
          <img
            className="absolute top-[309px] left-[877px] w-[30px] h-[30px] cursor-pointer z-[2]"
            loading="lazy"
            alt=""
            src="/vector1.svg"
            onClick={onFooterShapesIconClick4}
          />
        </div>
        <div
          className="flex-1 flex flex-col items-start justify-start pt-[75px] px-0 pb-0 relative gap-[13px] cursor-pointer z-[4]"
          onClick={onGroupContainerClick}
        >
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <div className="h-[82px] w-[90px] relative">
              <img
                className="absolute top-[0px] left-[0px] w-full h-full z-[2]"
                alt=""
                src="/subtract.svg"
              />
              <div className="absolute top-[25px] left-[22px] inline-block min-w-[46px] z-[3] mq450:text-lgi">
                END
              </div>
            </div>
          </div>
          <div className="self-stretch relative leading-[24px] [text-shadow:1px_0_0_#22c55e,_0_1px_0_#22c55e,_-1px_0_0_#22c55e,_0_-1px_0_#22c55e] mq450:text-lgi mq450:leading-[19px]">
            A place for Reflection
          </div>
          <img
            className="w-[56.3px] h-[100px] absolute !m-[0] top-[0px] right-[99.7px] cursor-pointer"
            loading="lazy"
            alt=""
            src="/vector-4.svg"
            onClick={onGroupContainerClick}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckpointSixPage;
