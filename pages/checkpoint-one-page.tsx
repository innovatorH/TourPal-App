import { useCallback } from "react";
import { useRouter } from "next/router";
import HumburgerMenuFrame from "../components/humburger-menu-frame";

const CheckpointOnePage = () => {
  const router = useRouter();

  const onGroupContainerClick = useCallback(() => {
    router.push("/chapter-one-page");
  }, [router]);

  const onLogoContainerClick = useCallback(() => {
    router.push("/red-terror-martyrs-memorial");
  }, [router]);

  return (
    <div className="w-full h-[1024px] relative bg-white overflow-hidden leading-[normal] tracking-[normal] text-left text-5xl text-wwwtripadvisorcom-black font-abhaya-libre">
      <img
        className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/image-48@2x.png"
      />
      <div className="absolute top-[334px] left-[1261px] w-[90px] h-[90px]">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-mediumspringgreen-300 border-mediumspringgreen-100 border-[0px] border-solid box-border w-full h-full" />
        <div className="absolute top-[33px] left-[22px] inline-block min-w-[46px] mq450:text-lgi">
          END
        </div>
      </div>
      <div className="absolute top-[587px] left-[27px] flex flex-row items-start justify-start py-0 pl-[15px] pr-0">
        <div
          className="h-[140px] w-[254px] flex flex-col items-start justify-start gap-4 cursor-pointer z-[2]"
          onClick={onGroupContainerClick}
        >
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <img
              className="h-[100px] w-[56.3px] relative cursor-pointer"
              alt=""
              src="/vector-4.svg"
              onClick={onGroupContainerClick}
            />
          </div>
          <div className="self-stretch relative leading-[24px] [text-shadow:1px_0_0_#22c55e,_0_1px_0_#22c55e,_-1px_0_0_#22c55e,_0_-1px_0_#22c55e] mq450:text-lgi mq450:leading-[19px]">
            The Memorial Grounds
          </div>
          <div className="w-[1101px] h-[404px] relative max-w-[434%] shrink-0">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
              alt=""
              src="/vector-54.svg"
            />
            <img
              className="absolute top-[173px] left-[203px] w-[30px] h-[30px] z-[2]"
              loading="lazy"
              alt=""
              src="/vector-2.svg"
            />
            <img
              className="absolute top-[39px] left-[425px] w-[30px] h-[30px] z-[2]"
              loading="lazy"
              alt=""
              src="/vector-2.svg"
            />
            <img
              className="absolute top-[175px] left-[643px] w-[30px] h-[30px] z-[2]"
              loading="lazy"
              alt=""
              src="/vector-2.svg"
            />
            <img
              className="absolute top-[309px] left-[862px] w-[30px] h-[30px] z-[2]"
              loading="lazy"
              alt=""
              src="/vector-2.svg"
            />
          </div>
        </div>
      </div>
      <header className="absolute top-[20px] left-[27px] w-[1026px] flex flex-row items-start justify-between gap-5 max-w-full text-left text-base text-saddlebrown-100 font-itim">
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
        <div className="w-[666px] flex flex-col items-start justify-start pt-[55px] px-0 pb-0 box-border max-w-full text-29xl font-abhaya-libre mq762:w-0">
          <h1 className="m-0 self-stretch relative text-inherit font-normal font-[inherit] whitespace-nowrap z-[1] mq762:hidden">
            Red Terror Martyrs Memorial
          </h1>
        </div>
      </header>
    </div>
  );
};

export default CheckpointOnePage;
