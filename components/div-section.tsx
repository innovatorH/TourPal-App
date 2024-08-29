import { useCallback } from "react";
import { useRouter } from "next/router";
import BtnOutlinevertical from "./btn-outlinevertical";
import PropTypes from "prop-types";

const DivSection = ({ className = "" }) => {
  const router = useRouter();

  const onBtnPrytemplateClick = useCallback(() => {
    router.push("/journeystory-generator-user");
  }, [router]);

  const onAlreadyHaveAnClick = useCallback(() => {
    router.push("/log-in");
  }, [router]);

  return (
    <div
      className={`w-[460px] rounded-t-3xl rounded-b-none bg-gray-100 overflow-hidden shrink-0 flex flex-col items-end justify-start pt-[39.5px] px-[39px] pb-[60.5px] box-border gap-[49px] min-w-[460px] max-w-full z-[2] text-center text-smi-8 text-gray-700 font-zen-kaku-gothic-antique mq1125:min-w-full mq450:gap-6 mq450:pt-5 mq450:pb-[25px] mq450:box-border mq800:pt-[26px] mq800:pb-[39px] mq800:box-border mq1300:flex-1 ${className}`}
    >
      <div className="w-[460px] h-[768px] relative rounded-t-3xl rounded-b-none bg-gray-100 hidden max-w-full" />
      <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[17.5px] max-w-full">
        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[7px]">
          <div className="flex flex-col items-start justify-start z-[1]">
            <div className="relative text-smi-8 leading-[23px] font-zen-kaku-gothic-antique text-wwwtripadvisorcom-black text-left">
              LET'S GET YOU STARTED
            </div>
            <h3 className="m-0 relative text-6xl leading-[44px] font-medium font-zen-kaku-gothic-antique text-wwwtripadvisorcom-black text-left mq450:text-xl mq450:leading-[35px]">
              Create an Account
            </h3>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full z-[1]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[9px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div className="w-[102px] flex flex-row items-start justify-start py-0 px-[11px] box-border">
                <div className="flex-1 bg-gray-100 overflow-hidden flex flex-row items-start justify-start py-0 px-[5px] whitespace-nowrap z-[1]">
                  <div className="h-[23px] w-[79.8px] relative bg-gray-100 hidden" />
                  <div className="flex-1 relative text-smi-8 leading-[23px] font-zen-kaku-gothic-antique text-gray-400 text-center inline-block min-w-[68.7px] z-[1]">
                    Your Name
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-lg border-silver-400 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-3 px-4 pb-[11px] max-w-full mt-[-12px]">
                <div className="h-[57px] w-[381px] relative rounded-lg border-silver-400 border-[1px] border-solid box-border hidden max-w-full" />
                <input
                  className="w-[100.8px] [border:none] [outline:none] font-zen-kaku-gothic-antique text-base bg-[transparent] h-[29px] relative leading-[28.16px] text-gray-400 text-left inline-block p-0 z-[1]"
                  placeholder="Johnson Doe"
                  type="text"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
              <div className="w-[380px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border max-w-full">
                <div className="self-stretch rounded-lg border-darkslategray-100 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-3 px-4 pb-[11px] max-w-full">
                  <div className="h-[57px] w-[381px] relative rounded-lg border-darkslategray-100 border-[1px] border-solid box-border hidden max-w-full" />
                  <input
                    className="w-[174px] [border:none] [outline:none] font-zen-kaku-gothic-antique text-base bg-[transparent] h-[29px] relative leading-[28.16px] text-darkslategray-100 text-left inline-block whitespace-nowrap p-0 z-[1]"
                    placeholder="johnsondoe@nomail.com"
                    type="text"
                  />
                </div>
              </div>
              <div className="w-[54px] bg-gray-100 overflow-hidden shrink-0 flex flex-row items-start justify-start py-0 pl-[5px] pr-1 box-border z-[1] ml-[-368.8px]">
                <div className="h-[23px] w-[54px] relative bg-gray-100 hidden" />
                <div className="flex-1 relative text-smi-8 leading-[23px] font-zen-kaku-gothic-antique text-darkslategray-100 text-center z-[1]">
                  Email
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div className="w-[89.2px] flex flex-row items-start justify-start py-0 px-[11px] box-border">
                <div className="flex-1 bg-gray-100 overflow-hidden flex flex-row items-start justify-start py-0 pl-[5px] pr-[3px] z-[1]">
                  <div className="h-[23px] w-[67px] relative bg-gray-100 hidden" />
                  <div className="flex-1 relative text-smi-8 leading-[23px] font-zen-kaku-gothic-antique text-gray-400 text-center inline-block min-w-[58px] z-[1]">
                    Password
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-lg border-silver-400 border-[1px] border-solid box-border flex flex-row items-start justify-between pt-3 pb-[11px] pl-[15px] pr-[9px] max-w-full gap-5 mt-[-12px]">
                <div className="h-[57px] w-[381px] relative rounded-lg border-silver-400 border-[1px] border-solid box-border hidden max-w-full" />
                <input
                  className="w-[174px] [border:none] [outline:none] font-zen-kaku-gothic-antique text-base bg-[transparent] h-[29px] relative leading-[28.16px] text-gray-400 text-left inline-block p-0 z-[1]"
                  placeholder="***************"
                  type="text"
                />
                <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                  <img
                    className="w-4 h-4 relative object-cover z-[1]"
                    alt=""
                    src="/exiconeye@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            className="cursor-pointer [border:none] py-[7px] px-[47px] bg-gray-700 self-stretch rounded-lg flex flex-row items-start justify-start box-border whitespace-nowrap max-w-full hover:bg-dimgray-200 mq450:pl-5 mq450:pr-5 mq450:box-border"
            onClick={onBtnPrytemplateClick}
          >
            <div className="h-14 w-[380px] relative rounded-lg bg-gray-700 hidden max-w-full" />
            <b className="h-[42px] flex-1 relative text-smi-8 leading-[22.53px] flex font-zen-kaku-gothic-antique text-white text-center items-center justify-center z-[1]">
              GET STARTED
            </b>
          </button>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[17px] max-w-full">
          <div className="self-stretch h-[20.5px] relative z-[1]">
            <img
              className="absolute h-[9.76%] w-full top-[45.37%] right-[0%] bottom-[44.88%] left-[0%] max-w-full overflow-hidden max-h-full"
              loading="lazy"
              alt=""
              src="/linedivider.svg"
            />
            <div className="absolute top-[0px] left-[166px] bg-gray-100 flex flex-row items-start justify-start pt-[0.8px] pb-[0.7px] pl-[17px] pr-4 z-[1]">
              <div className="h-[20.5px] w-12 relative bg-gray-100 hidden" />
              <b className="relative text-smi-8 inline-block font-zen-kaku-gothic-antique text-gray-700 text-center min-w-[15px] z-[2]">
                Or
              </b>
            </div>
          </div>
          <BtnOutlinevertical
            signUpWithGoogle="Sign up with Google"
            signUpWithFacebook="Sign up with Facebook"
            apple="/apple@2x.png"
            signUpWithApple="Sign up with Apple"
          />
        </div>
      </form>
      <div className="flex flex-row items-start justify-end py-0 px-[70px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex flex-row items-start justify-start gap-[7.5px] mq450:flex-wrap">
          <div className="relative z-[1]">
            <span>Already have an account?</span>
            <b>{` `}</b>
          </div>
          <b
            className="relative [text-decoration:underline] inline-block min-w-[73px] cursor-pointer z-[1]"
            onClick={onAlreadyHaveAnClick}
          >
            LOGIN HERE
          </b>
        </div>
      </div>
    </div>
  );
};

DivSection.propTypes = {
  className: PropTypes.string,
};

export default DivSection;
