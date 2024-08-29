import { useCallback } from "react";
import { useRouter } from "next/router";
import Group from "../components/group";

const LogIn = () => {
  const router = useRouter();

  const onTourPal2ImageClick = useCallback(() => {
    router.push("/sign-up");
  }, [router]);

  return (
    <div className="w-full relative [background:linear-gradient(46.33deg,_rgba(33,_33,_33,_0.84),_rgba(66,_66,_66,_0.24))] overflow-hidden flex flex-row items-start justify-start pt-[132px] px-[185px] pb-0 box-border gap-[62.5px] leading-[normal] tracking-[normal] z-[1] text-left text-20xl-1 text-white font-zen-kaku-gothic-antique mq450:pl-5 mq450:pr-5 mq450:box-border mq800:gap-4 mq800:pl-[46px] mq800:pr-[46px] mq800:box-border mq1300:gap-[31px] mq1300:flex-wrap mq1300:pl-[92px] mq1300:pr-[92px] mq1300:box-border">
      <img
        className="h-[2160px] w-[3840px] absolute !m-[0] top-[-1207px] right-[-1440px] object-cover z-[1]"
        alt=""
        src="/ultra-hd-4k-landscape-87324728-1@2x.png"
      />
      <img
        className="h-[900px] w-[1440px] relative object-cover hidden max-w-full z-[1]"
        alt=""
        src="/bgimg1@2x.png"
      />
      <section className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(46.33deg,_rgba(33,_33,_33,_0.84),_rgba(66,_66,_66,_0.24))] z-[1]" />
      <div className="w-[481px] flex flex-col items-start justify-start pt-[91px] px-0 pb-0 box-border min-w-[481px] max-w-full mq1125:min-w-full mq800:pt-[59px] mq800:box-border mq1300:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-12 max-w-full mq800:gap-6">
          <div className="self-stretch flex flex-col items-start justify-start gap-[137px] max-w-full mq800:gap-[68px]">
            <div className="w-[431px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <img
                className="h-[72px] w-[183px] relative rounded-8xs object-cover cursor-pointer z-[2]"
                loading="lazy"
                alt=""
                src="/tourpal-1@2x.png"
                onClick={onTourPal2ImageClick}
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full">
              <b className="self-stretch relative leading-[46.87px] z-[2] mq450:text-4xl mq450:leading-[28px] mq800:text-12xl mq800:leading-[37px]">
                <p className="m-0">{`Discover more, `}</p>
                <p className="m-0">Travel with confidence.</p>
              </b>
              <div className="w-[412px] relative text-base leading-[28.16px] inline-block max-w-full z-[2]">
                Discover unique destinations tailored to your preferences,
                explore with interactive stories, and travel confidently with
                our personalized recommendations.
              </div>
            </div>
          </div>
          <img
            className="w-[133.5px] h-0.5 relative z-[2]"
            loading="lazy"
            alt=""
            src="/carouselslider.svg"
          />
        </div>
      </div>
      <Group />
    </div>
  );
};

export default LogIn;
