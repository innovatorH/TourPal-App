import { useCallback } from "react";
import { useRouter } from "next/router";
import HumburgerMenuFrame from "../components/humburger-menu-frame";

const CheckpoointFivePage = () => {
  const router = useRouter();

  const onVectorIconClick = useCallback(() => {
    router.push("/chapter-one-page");
  }, [router]);

  const onVectorIconClick1 = useCallback(() => {
    router.push("/chapter-two-page");
  }, [router]);

  const onVectorIconClick2 = useCallback(() => {
    router.push("/chapter-threepage");
  }, [router]);

  const onVectorIconClick3 = useCallback(() => {
    router.push("/chapter-four-page");
  }, [router]);

  const onGroupContainerClick = useCallback(() => {
    router.push("/chapter-five-page");
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
      <div className="absolute top-[501px] left-[912px] w-[268px] h-[154px] flex flex-row items-start justify-start">
        <div className="h-[404px] w-[1116px] relative max-w-[417%] shrink-0">
          <img
            className="absolute h-full top-[0px] bottom-[0px] left-[15px] max-h-full w-[1101px] z-[1]"
            alt=""
            src="/vector-52.svg"
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
            className="absolute top-[175px] left-[658px] w-[30px] h-[30px] cursor-pointer z-[2]"
            loading="lazy"
            alt=""
            src="/vector1.svg"
            onClick={onVectorIconClick3}
          />
        </div>
        <div
          className="w-[268px] flex flex-col items-start justify-start gap-[30px] shrink-0 cursor-pointer z-[2]"
          onClick={onGroupContainerClick}
        >
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <img
              className="h-[100px] w-[56.3px] relative cursor-pointer"
              loading="lazy"
              alt=""
              src="/vector-4.svg"
              onClick={onGroupContainerClick}
            />
          </div>
          <div className="self-stretch relative leading-[24px] [text-shadow:1px_0_0_#22c55e,_0_1px_0_#22c55e,_-1px_0_0_#22c55e,_0_-1px_0_#22c55e] mq450:text-lgi mq450:leading-[19px]">
            A Flame of the Martyrs
          </div>
        </div>
      </div>
      <section className="absolute top-[20px] left-[27px] w-[1153px] flex flex-row items-start justify-start max-w-full">
        <header className="w-[1046px] flex flex-row items-start justify-between py-0 pl-0 pr-5 box-border gap-5 max-w-full text-left text-base text-saddlebrown-100 font-itim">
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
      </section>
    </div>
  );
};

export default CheckpoointFivePage;
