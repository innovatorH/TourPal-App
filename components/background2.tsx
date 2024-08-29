import PropTypes from "prop-types";

const Background2 = ({ className = "" }) => {
  return (
    <div
      className={`w-[1232px] rounded-sm bg-white flex flex-row items-start justify-between pt-6 pb-3 pl-6 pr-[25px] box-border shrink-0 max-w-full gap-5 z-[1] text-left text-base-5 text-wwwtripadvisorcom-black font-wwwtripadvisorcom-inter-black-463 mq1050:flex-wrap mq1050:justify-center ${className}`}
    >
      <div className="w-[511.9px] flex flex-row items-start justify-start gap-[15px] max-w-full mq750:flex-wrap">
        <div className="h-[126px] w-[126px] rounded-107xl bg-white overflow-hidden shrink-0 flex flex-row items-start justify-start relative">
          <div className="h-[120px] w-[calc(100%_-_6px)] absolute !m-[0] top-[calc(50%_-_60px)] right-[3px] left-[3px] rounded-101xl overflow-hidden bg-[url('/defaultavatar202042jpg@3x.png')] bg-cover bg-no-repeat bg-[top] z-[2]">
            <img
              className="absolute top-[-3px] left-[-1.6px] w-[122px] h-[106px] object-cover hidden"
              alt=""
              src="/image-33@2x.png"
            />
            <div className="absolute top-[0px] left-[0px] rounded-101xl border-gray-1200 border-[1px] border-solid box-border w-full h-full hidden" />
          </div>
          <div className="h-[126px] w-[126px] relative rounded-107xl border-white border-[2px] border-solid box-border z-[1]" />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[27px] px-0 pb-0 box-border min-w-[241px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
              <div className="overflow-hidden flex flex-row items-end justify-start pt-0 px-0 pb-[0.2px]">
                <b className="relative leading-[22px] inline-block min-w-[111.8px] shrink-0">
                  Contributions
                </b>
              </div>
              <div className="overflow-hidden flex flex-row items-end justify-start pt-0 px-0 pb-[0.2px] text-base">
                <b className="relative leading-[22px] inline-block min-w-[76px] shrink-0">
                  Followers
                </b>
              </div>
              <div className="overflow-hidden flex flex-row items-end justify-start pt-0 px-0 pb-[0.2px] text-base-2">
                <b className="relative leading-[22px] inline-block min-w-[76.1px] shrink-0">
                  Following
                </b>
              </div>
            </div>
            <div className="w-[310px] flex flex-row items-start justify-between gap-5 text-3xl text-gray-400">
              <div className="w-[51.2px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border">
                <b className="relative leading-[26px] inline-block min-w-[15px] mq450:text-lg mq450:leading-[21px]">
                  0
                </b>
              </div>
              <b className="relative leading-[26px] inline-block min-w-[15px] mq450:text-lg mq450:leading-[21px]">
                0
              </b>
              <b className="relative leading-[26px] inline-block min-w-[15px] mq450:text-lg mq450:leading-[21px]">
                0
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[34px] flex flex-row items-start justify-start gap-[0.8px]">
        <button className="cursor-pointer [border:none] pt-[7.8px] pb-[8.2px] pl-4 pr-[15px] bg-white h-[35.6px] rounded-tl-10xs rounded-tr-none rounded-br-none rounded-bl-10xs border-gainsboro-200 border-t-[0.8px] border-solid border-gainsboro-200 border-b-[0.8px] border-solid border-gainsboro-200 border-l-[0.8px] border-solid box-border flex flex-row items-start justify-start shrink-0 whitespace-nowrap hover:bg-gainsboro-100">
          <a className="[text-decoration:none] relative text-smi-9 leading-[18px] font-bold font-wwwtripadvisorcom-inter-black-463 text-wwwtripadvisorcom-black text-center inline-block min-w-[69px]">
            Edit profile
          </a>
        </button>
        <img
          className="self-stretch w-[46px] relative rounded-tl-none rounded-tr-10xs rounded-br-10xs rounded-bl-none max-h-full min-h-[34px] shrink-0"
          loading="lazy"
          alt=""
          src="/button1.svg"
        />
      </div>
    </div>
  );
};

Background2.propTypes = {
  className: PropTypes.string,
};

export default Background2;
