import { useCallback } from "react";
import HumburgerMenuFrame from "../components/humburger-menu-frame";
import { useRouter } from "next/router";
import GroupComponent1 from "../components/group-component1";

const CheckpointFourPage = () => {
  const router = useRouter();

  const onLogoContainerClick = useCallback(() => {
    router.push("/red-terror-martyrs-memorial");
  }, [router]);

  const onVectorIconClick = useCallback(() => {
    router.push("/chapter-one-page");
  }, [router]);

  const onVectorIconClick1 = useCallback(() => {
    router.push("/chapter-two-page");
  }, [router]);

  const onVectorIconClick2 = useCallback(() => {
    router.push("/chapter-threepage");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-5 pb-[500px] pl-[27px] pr-[89px] box-border gap-[203px] leading-[normal] tracking-[normal] text-left text-5xl text-wwwtripadvisorcom-black font-abhaya-libre mq450:gap-[51px] mq450:pr-5 mq450:box-border mq750:gap-[101px] mq750:pr-11 mq750:box-border">
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/image-48@2x.png"
      />
      <div className="self-stretch flex flex-row items-start justify-start max-w-full">
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
      <div className="w-[643px] flex flex-row items-start justify-between gap-5 max-w-full mq450:flex-wrap">
        <div className="w-[237px] flex flex-col items-start justify-start pt-10 px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-start justify-start relative">
            <div className="h-[404px] w-[1116px] absolute !m-[0] bottom-[-179px] left-[-554px]">
              <img
                className="absolute h-full top-[0px] bottom-[0px] left-[15px] max-h-full w-[1101px] z-[1]"
                alt=""
                src="/vector-53.svg"
              />
              <img
                className="absolute top-[374px] left-[0px] w-[30px] h-[30px] cursor-pointer z-[2]"
                alt=""
                src="/vector1.svg"
                onClick={onVectorIconClick}
              />
              <img
                className="absolute top-[173px] left-[218px] w-[30px] h-[30px] cursor-pointer z-[2]"
                loading="lazy"
                alt=""
                src="/vector1.svg"
                onClick={onVectorIconClick1}
              />
              <img
                className="absolute top-[39px] left-[440px] w-[30px] h-[30px] cursor-pointer z-[2]"
                loading="lazy"
                alt=""
                src="/vector1.svg"
                onClick={onVectorIconClick2}
              />
              <img
                className="absolute top-[309px] left-[877px] w-[30px] h-[30px] z-[2]"
                loading="lazy"
                alt=""
                src="/vector-2.svg"
              />
            </div>
            <GroupComponent1 facesOfTheFallen="Relics of Resistance" />
          </div>
        </div>
        <div className="h-[90px] w-[90px] relative">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-mediumspringgreen-300 border-mediumspringgreen-100 border-[0px] border-solid box-border w-full h-full z-[2]" />
          <div className="absolute top-[33px] left-[22px] inline-block min-w-[46px] z-[3] mq450:text-lgi">
            END
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckpointFourPage;
