import { useMemo } from "react";
import PropTypes from "prop-types";

const BtnOutlinevertical = ({
  className = "",
  propAlignSelf,
  propFlex,
  signUpWithGoogle,
  signUpWithFacebook,
  apple,
  signUpWithApple,
  btnOutlineverticalTop,
}) => {
  const btnOutlineverticalStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      top: btnOutlineverticalTop,
    };
  }, [propAlignSelf, propFlex, btnOutlineverticalTop]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[9px] max-w-full z-[1] ${className}`}
      style={btnOutlineverticalStyle}
    >
      <button className="cursor-pointer border-whitesmoke-300 border-[1px] border-solid py-1.5 px-10 bg-gray-100 self-stretch h-[49px] rounded-lg box-border flex flex-row items-start justify-start max-w-full">
        <div className="h-[49px] w-[381px] relative rounded-lg bg-gray-100 border-whitesmoke-300 border-[1px] border-solid box-border hidden max-w-full" />
        <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
          <img
            className="w-[18px] h-[18px] relative z-[1]"
            alt=""
            src="/icons8google.svg"
          />
        </div>
        <div className="w-[274px] flex flex-col items-start justify-start py-0 px-0 box-border">
          <div className="ml-[-11px] w-[285px] h-9 relative text-smi-8 leading-[22.53px] font-zen-kaku-gothic-antique text-dimgray-100 text-center flex items-center justify-center shrink-0 z-[1]">
            {signUpWithGoogle}
          </div>
        </div>
      </button>
      <button className="cursor-pointer border-whitesmoke-300 border-[1px] border-solid py-1.5 px-10 bg-gray-100 self-stretch h-[49px] rounded-lg box-border flex flex-row items-start justify-start max-w-full">
        <div className="h-[49px] w-[381px] relative rounded-lg bg-gray-100 border-whitesmoke-300 border-[1px] border-solid box-border hidden max-w-full" />
        <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
          <img
            className="w-[18px] h-[18px] relative z-[1]"
            alt=""
            src="/icons8facebook.svg"
          />
        </div>
        <div className="w-[274px] flex flex-col items-start justify-start py-0 px-0 box-border">
          <div className="ml-[-11px] w-[285px] h-9 relative text-smi-8 leading-[22.53px] font-zen-kaku-gothic-antique text-dimgray-100 text-center flex items-center justify-center shrink-0 z-[1]">
            {signUpWithFacebook}
          </div>
        </div>
      </button>
      <button className="cursor-pointer border-whitesmoke-300 border-[1px] border-solid py-1.5 px-10 bg-gray-100 self-stretch h-[49px] rounded-lg box-border flex flex-row items-start justify-start max-w-full">
        <div className="h-[49px] w-[381px] relative rounded-lg bg-gray-100 border-whitesmoke-300 border-[1px] border-solid box-border hidden max-w-full" />
        <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
          <img
            className="w-[13.5px] h-[18px] relative object-cover z-[1]"
            alt=""
            src={apple}
          />
        </div>
        <div className="flex flex-col items-start justify-start py-0 px-0">
          <div className="ml-[-6.5px] w-[285px] h-9 relative text-smi-8 leading-[22.53px] font-zen-kaku-gothic-antique text-dimgray-100 text-center flex items-center justify-center shrink-0 z-[1]">
            {signUpWithApple}
          </div>
        </div>
      </button>
    </div>
  );
};

BtnOutlinevertical.propTypes = {
  className: PropTypes.string,
  signUpWithGoogle: PropTypes.string,
  signUpWithFacebook: PropTypes.string,
  apple: PropTypes.string,
  signUpWithApple: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  btnOutlineverticalTop: PropTypes.any,
};

export default BtnOutlinevertical;
