import { useCallback } from "react";
import { useRouter } from "next/router";
import BtnOutlinevertical from "./btn-outlinevertical";
import PropTypes from "prop-types";

const Group = ({ className = "" }) => {
  const router = useRouter();

  const onBtnPrytemplateClick = useCallback(() => {
    router.push("/journeystory-generator-user");
  }, [router]);

  const onAlreadyHaveAnClick = useCallback(() => {
    router.push("/sign-up");
  }, [router]);

  return (
    <div
      className={`h-[768px] w-[460px] relative rounded-t-3xl rounded-b-none bg-gray-100 min-w-[460px] max-w-full z-[2] text-center text-smi-8 text-gray-700 font-zen-kaku-gothic-antique mq1125:min-w-full mq450:h-auto mq450:min-h-[768] mq1300:flex-1 ${className}`}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-3xl rounded-b-none bg-gray-100 hidden" />
      <img
        className="absolute top-[406px] left-[40.5px] w-[380px] h-0.5 z-[3]"
        loading="lazy"
        alt=""
        src="/linedivider.svg"
      />
      <form className="m-0 absolute top-[39.5px] left-[39.5px] w-[381px] flex flex-col items-start justify-start gap-[25px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start max-w-full">
          <div className="relative text-smi-8 leading-[23px] font-zen-kaku-gothic-antique text-wwwtripadvisorcom-black text-left inline-block min-w-[97px] z-[3]">
            WELCOME BACK
          </div>
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[17px]">
            <h3 className="m-0 relative text-6xl leading-[44px] font-medium font-zen-kaku-gothic-antique text-wwwtripadvisorcom-black text-left z-[3] mq450:text-xl mq450:leading-[35px]">
              Log In to your Account
            </h3>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[19.3px] box-border gap-4 max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[9px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <div className="w-[76.2px] flex flex-row items-start justify-start py-0 px-[11px] box-border">
                  <div className="flex-1 bg-gray-100 overflow-hidden flex flex-row items-start justify-start py-0 pl-[5px] pr-1 z-[4]">
                    <div className="h-[23px] w-[54px] relative bg-gray-100 hidden" />
                    <div className="flex-1 relative text-smi-8 leading-[23px] font-zen-kaku-gothic-antique text-darkslategray-100 text-center z-[1]">
                      Email
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-lg border-darkslategray-100 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-3 px-4 pb-[11px] max-w-full z-[3] mt-[-12px]">
                  <div className="h-[57px] w-[381px] relative rounded-lg border-darkslategray-100 border-[1px] border-solid box-border hidden max-w-full" />
                  <input
                    className="w-[174px] [border:none] [outline:none] font-zen-kaku-gothic-antique text-base bg-[transparent] h-[29px] relative leading-[28.16px] text-darkslategray-100 text-left inline-block whitespace-nowrap p-0 z-[4]"
                    placeholder="johnsondoe@nomail.com"
                    type="text"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <div className="w-[89.2px] flex flex-row items-start justify-start py-0 px-[11px] box-border">
                  <div className="flex-1 bg-gray-100 overflow-hidden flex flex-row items-start justify-start py-0 pl-[5px] pr-[3px] z-[4]">
                    <div className="h-[23px] w-[67px] relative bg-gray-100 hidden" />
                    <div className="flex-1 relative text-smi-8 leading-[23px] font-zen-kaku-gothic-antique text-silver-300 text-center inline-block min-w-[58px] z-[1]">
                      Password
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-lg border-silver-400 border-[1px] border-solid box-border flex flex-row items-start justify-between pt-3 pb-[11px] pl-[15px] pr-[9px] max-w-full gap-5 z-[3] mt-[-12px]">
                  <div className="h-[57px] w-[381px] relative rounded-lg border-silver-400 border-[1px] border-solid box-border hidden max-w-full" />
                  <input
                    className="w-[174px] [border:none] [outline:none] font-zen-kaku-gothic-antique text-base bg-[transparent] h-[29px] relative leading-[28.16px] text-gray-400 text-left inline-block p-0 z-[4]"
                    placeholder="***************"
                    type="text"
                  />
                  <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                    <img
                      className="w-4 h-4 relative object-cover z-[4]"
                      alt=""
                      src="/exiconeye1@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
              <div className="flex flex-row items-start justify-start gap-[5.3px]">
                <div className="h-[22px] w-[21.5px] relative rounded-sm bg-gainsboro-200 z-[3]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-gainsboro-200 hidden" />
                  <img
                    className="absolute h-[34.55%] w-[54.42%] top-[32.73%] right-[22.79%] bottom-[32.73%] left-[22.79%] max-w-full overflow-hidden max-h-full z-[1]"
                    loading="lazy"
                    alt=""
                    src="/new-shape.svg"
                  />
                </div>
                <div className="relative text-smi-8 leading-[23px] font-zen-kaku-gothic-antique text-wwwtripadvisorcom-black text-left inline-block min-w-[81px] z-[3]">
                  Remember me
                </div>
              </div>
              <div className="relative text-smi-8 leading-[23px] font-medium font-zen-kaku-gothic-antique text-darkslategray-100 text-left inline-block min-w-[102px] z-[3]">
                Forgot Password?
              </div>
            </div>
            <button
              className="cursor-pointer [border:none] py-[7px] px-[47px] bg-gray-700 self-stretch rounded-lg flex flex-row items-start justify-start box-border max-w-full z-[3] hover:bg-dimgray-200"
              onClick={onBtnPrytemplateClick}
            >
              <div className="h-14 w-[380px] relative rounded-lg bg-gray-700 hidden max-w-full" />
              <b className="h-[42px] flex-1 relative text-smi-8 leading-[22.53px] flex font-zen-kaku-gothic-antique text-white text-center items-center justify-center z-[1]">
                CONTINUE
              </b>
            </button>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[22px] pr-5">
            <div className="bg-gray-100 flex flex-row items-start justify-start pt-[0.7px] pb-[0.8px] pl-[17px] pr-4 z-[4]">
              <div className="h-[20.5px] w-12 relative bg-gray-100 hidden" />
              <b className="relative text-smi-8 inline-block font-zen-kaku-gothic-antique text-gray-700 text-center min-w-[15px] z-[5]">
                Or
              </b>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
          <BtnOutlinevertical
            propAlignSelf="unset"
            propFlex="1"
            signUpWithGoogle="Log In with Google"
            signUpWithFacebook="Log In with Facebook"
            apple="/apple1@2x.png"
            signUpWithApple="Log In with Apple"
            btnOutlineverticalTop="unset"
          />
        </div>
      </form>
      <div className="absolute top-[653px] left-[154.5px] flex flex-row items-start justify-start gap-[5px]">
        <div className="relative inline-block min-w-[60px] z-[3]">
          <span>New User?</span>
          <b>{` `}</b>
        </div>
        <b
          className="relative [text-decoration:underline] inline-block min-w-[85px] cursor-pointer z-[3]"
          onClick={onAlreadyHaveAnClick}
        >
          SIGN UP HERE
        </b>
      </div>
    </div>
  );
};

Group.propTypes = {
  className: PropTypes.string,
};

export default Group;
