import { useCallback } from "react";
import FrameComponent from "../components/frame-component";
import FrameComponent9 from "../components/frame-component9";
import Link from "../components/link";
import Link1 from "../components/link1";
import { useRouter } from "next/router";
import FrameComponent2 from "../components/frame-component2";

const UserProfile = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/component");
  }, [router]);

  return (
    <div className="w-full relative [background:linear-gradient(#fff,_#fff),_#fff] overflow-y-auto flex flex-col items-start justify-start pt-0 px-0 pb-[168px] box-border leading-[normal] tracking-[normal]">
      <FrameComponent
        rectangle165="/rectangle-165.svg"
        tourPal1="/tourpal-11@2x.png"
        square="/square.svg"
      />
      <main className="self-stretch bg-whitesmoke-100 flex flex-col items-start justify-start pt-0 px-0 pb-[43px] box-border gap-6 max-w-full mt-[-0.5px] lg:pb-7 lg:box-border mq750:pb-5 mq750:box-border">
        <FrameComponent9 />
        <section className="w-[1204.6px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-2xl-4 text-wwwtripadvisorcom-black font-wwwtripadvisorcom-inter-black-463">
          <div className="w-[918px] flex flex-row items-start justify-start gap-6 max-w-full mq1050:flex-wrap">
            <div className="w-[290px] flex flex-col items-start justify-start gap-6 min-w-[290px] mq1050:flex-1">
              <div className="self-stretch bg-white flex flex-col items-start justify-start p-6 gap-2">
                <b className="relative leading-[29px] mq450:text-mid mq450:leading-[23px]">
                  Your Achievements
                </b>
                <div className="relative text-sm-5 leading-[17px] text-darkslategray-200">
                  Start sharing to unlock
                </div>
                <Link />
                <Link1 />
                <button
                  className="cursor-pointer [border:none] pt-[9.6px] pb-[18.4px] pl-[21px] pr-5 bg-wwwtripadvisorcom-black self-stretch rounded-xl flex flex-row items-start justify-center whitespace-nowrap hover:bg-darkslategray-200"
                  onClick={onButtonClick}
                >
                  <a className="[text-decoration:none] relative text-mini-5 leading-[20px] font-bold font-wwwtripadvisorcom-inter-black-463 text-white text-center inline-block min-w-[56px]">
                    View all
                  </a>
                </button>
              </div>
              <FrameComponent2 />
            </div>
            <div className="flex-1 rounded-sm bg-white flex flex-col items-center justify-start pt-12 pb-[48.4px] pl-[21px] pr-5 box-border gap-[7.6px] min-w-[393px] max-w-full text-center text-[18.1px] mq750:min-w-full">
              <div className="w-[425px] flex flex-row items-start justify-center py-0 pl-0 pr-px box-border max-w-full">
                <b className="w-[169.3px] relative leading-[24px] flex items-center justify-center shrink-0">
                  Fill Out Your Profile
                </b>
              </div>
              <div className="w-[424.1px] relative text-base-4 leading-[20px] text-gray-400 flex items-center max-w-full">
                <span className="w-full">
                  <p className="m-0">
                    Add photos and info to your profile so people can find you
                  </p>
                  <p className="m-0">easily and get to know you better!</p>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserProfile;
