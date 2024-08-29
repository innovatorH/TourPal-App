import { useCallback } from "react";
import HumburgerMenuFrame from "../components/humburger-menu-frame";
import { useRouter } from "next/router";
import Content1 from "../components/content1";

const CheckpointTwoPage = () => {
  const router = useRouter();

  const onLogoContainerClick = useCallback(() => {
    router.push("/red-terror-martyrs-memorial");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-5 px-[27px] pb-[507px] box-border gap-[203px] leading-[normal] tracking-[normal] mq450:gap-[51px] mq750:gap-[101px]">
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/image-48@2x.png"
      />
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
        <div className="w-[666px] flex flex-col items-start justify-start pt-[55px] px-0 pb-0 box-border max-w-full text-29xl font-abhaya-libre mq1050:w-0">
          <h1 className="m-0 self-stretch relative text-inherit font-normal font-[inherit] whitespace-nowrap z-[1] mq1050:hidden">
            Red Terror Martyrs Memorial
          </h1>
        </div>
      </header>
      <Content1 />
    </div>
  );
};

export default CheckpointTwoPage;
