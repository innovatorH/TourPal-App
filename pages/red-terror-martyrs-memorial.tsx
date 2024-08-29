import { useCallback } from "react";
import HumburgerMenuFrame from "../components/humburger-menu-frame";
import { useRouter } from "next/router";
import BackButton from "../components/back-button";
import QuestComponent from "../components/quest-component";

const RedTerrorMartyrsMemorial = () => {
  const router = useRouter();

  const onLogoContainerClick = useCallback(() => {
    router.push("/tour-pal-landing-page");
  }, [router]);

  const onProfilePicIconClick = useCallback(() => {
    router.push("/user-profile");
  }, [router]);

  const onNextContainerClick = useCallback(() => {
    router.push("/checkpoint-two-page");
  }, [router]);

  const onNextContainerClick1 = useCallback(() => {
    router.push("/checkpoint-one-page");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-5 pb-0 pl-[27px] pr-7 box-border gap-[57px] leading-[normal] tracking-[normal] text-left text-[64px] text-saddlebrown-100 font-abhaya-libre mq750:gap-7">
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/image-47@2x.png"
      />
      <header className="self-stretch flex flex-row items-start justify-between gap-5 text-left text-base text-white font-itim">
        <div className="flex flex-row items-start justify-start gap-5">
          <HumburgerMenuFrame />
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
                  src="/logo1.svg"
                />
              </div>
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[53px]">
                TourPal
              </a>
            </div>
          </div>
        </div>
        <img
          className="h-[46px] w-[46px] relative cursor-pointer z-[1]"
          loading="lazy"
          alt=""
          src="/profile-pic.svg"
          onClick={onProfilePicIconClick}
        />
      </header>
      <h1 className="!m-[0] w-[888px] absolute top-[73px] left-[calc(50%_-_444px)] text-inherit leading-[64px] font-normal font-[inherit] inline-block z-[2] mq1025:text-[51px] mq1025:leading-[51px] mq450:text-19xl mq450:leading-[38px]">
        Red Terror Martyrs Memorial
      </h1>
      <main className="self-stretch flex flex-row items-start justify-end py-0 pl-1 pr-[3px] box-border max-w-full">
        <section className="flex-1 flex flex-row items-start justify-start flex-wrap content-start gap-[30px] max-w-full text-left text-base text-white font-wwwtripadvisorcom-inter-black-463">
          <div className="w-[62px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
            <div className="self-stretch flex flex-col items-end justify-start gap-[325px]">
              <div
                className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start gap-[3.6px] cursor-pointer z-[1]"
                onClick={onNextContainerClick}
              >
                <img
                  className="h-[30px] w-[19.4px] relative"
                  loading="lazy"
                  alt=""
                  src="/vector2.svg"
                />
                <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                  <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[39px]">
                    Back
                  </a>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end py-0 pl-4 pr-2">
                <BackButton />
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-row items-end justify-start min-w-[836px] max-w-full [row-gap:20px] text-5xl mq1025:min-w-full mq1100:flex-wrap">
            <div className="h-[900px] flex-1 flex flex-col items-end justify-start pt-0 px-0 pb-0 box-border max-w-full mq1025:min-w-full">
              <QuestComponent />
              <div className="w-[1173px] h-[171px] relative [background:linear-gradient(0deg,_#000,_rgba(102,_102,_102,_0))] shrink-0 max-w-full z-[2] mt-[-163px]" />
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-7">
              <div
                className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start py-0 pl-0 pr-7 relative cursor-pointer z-[1]"
                onClick={onNextContainerClick1}
              >
                <img
                  className="h-[34px] w-[23px] absolute !m-[0] top-[0px] right-[5px] object-contain"
                  loading="lazy"
                  alt=""
                  src="/vector-41.svg"
                />
                <h3 className="m-0 h-[37px] relative text-inherit font-bold font-[inherit] inline-block min-w-[64px] mq450:text-lgi">
                  Start
                </h3>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RedTerrorMartyrsMemorial;
