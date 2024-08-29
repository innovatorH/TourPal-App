import PropTypes from "prop-types";

const Background = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-xl bg-darkslategray-300 overflow-hidden flex flex-row items-start justify-start py-8 pl-8 pr-6 box-border relative max-w-full text-left text-19xl-4 text-white font-wwwtripadvisorcom-inter-black-463 ${className}`}
    >
      <div className="h-full w-full !m-[0] absolute top-[0px] right-[0px] bottom-[0px] left-[0px] flex flex-col items-start justify-start">
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/picture@2x.png"
        />
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.6))] z-[1]" />
      </div>
      <div className="flex-1 flex flex-col items-end justify-start gap-[113.4px] max-w-full z-[2] mq450:gap-7 mq750:gap-[57px]">
        <div className="w-[179.8px] flex flex-row items-start justify-start gap-2">
          <button className="cursor-pointer border-gainsboro-200 border-[1px] border-solid py-2 pl-3 pr-[11px] bg-white flex-1 rounded-xl flex flex-row items-start justify-start gap-1">
            <img
              className="h-5 w-5 relative min-h-[20px]"
              alt=""
              src="/svg1.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
              <b className="relative text-smi-6 leading-[17px] inline-block font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-left min-w-[35px]">
                Invite
              </b>
            </div>
          </button>
          <img
            className="h-10 w-10 relative rounded-xl min-h-[40px]"
            loading="lazy"
            alt=""
            src="/button--share-trip.svg"
          />
          <img
            className="h-10 w-10 relative rounded-xl min-h-[40px]"
            alt=""
            src="/button--edit.svg"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="flex flex-col items-start justify-start gap-[8.6px] max-w-full">
            <div className="relative leading-[50px] font-extrabold mq450:text-4xl mq450:leading-[30px] mq750:text-12xl mq750:leading-[40px]">
              Addis Ababa for 6 days
            </div>
            <div className="flex flex-row items-start justify-start gap-4 text-base-6 mq450:flex-wrap">
              <div className="flex flex-row items-start justify-start gap-2">
                <img
                  className="h-6 w-6 relative min-h-[24px] shrink-0"
                  alt=""
                  src="/svg-11.svg"
                />
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <b className="relative leading-[22px] shrink-0">
                    Aug 25 → Aug 30
                  </b>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-2 text-mid">
                <img
                  className="h-6 w-6 relative min-h-[24px] shrink-0"
                  alt=""
                  src="/svg-21.svg"
                />
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <b className="relative leading-[22px] inline-block min-w-[107px] shrink-0">
                    Addis Ababa
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Background.propTypes = {
  className: PropTypes.string,
};

export default Background;
