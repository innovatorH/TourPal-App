import PropTypes from "prop-types";

const Container2 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-xl overflow-hidden flex flex-row items-start justify-start max-w-full text-center text-3xs-9 text-white font-wwwtripadvisorcom-inter-black-463 ${className}`}
    >
      <div className="flex-1 bg-wwwtripadvisorcom-black flex flex-row items-end justify-start relative min-h-[480px] max-w-full">
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/list--item--button--see-all-photos@2x.png"
        />
        <div className="flex-1 [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.6)_75%)] flex flex-row items-end justify-between pt-0.5 pb-[13.1px] pl-[596px] pr-4 box-border max-w-full gap-5 z-[1] mq450:pl-5 mq450:box-border mq850:flex-wrap mq850:pl-[149px] mq850:box-border mq1225:pl-[298px] mq1225:box-border">
          <div className="flex flex-row items-start justify-start gap-[13.8px]">
            <div className="h-[7.8px] w-[7.8px] relative rounded-5xs-8 bg-white" />
            <div className="h-1.5 w-1.5 relative rounded-md bg-lightgray" />
            <div className="h-1.5 w-1.5 relative rounded-md bg-lightgray" />
            <div className="h-1.5 w-1.5 relative rounded-md bg-lightgray" />
            <div className="h-1.5 w-1.5 relative rounded-md bg-lightgray" />
          </div>
          <div className="w-[69.4px] flex flex-col items-start justify-end pt-0 px-0 pb-[2.9px] box-border">
            <div className="self-stretch rounded-2xl bg-wwwtripadvisorcom-black flex flex-row items-end justify-start py-1.5 px-1 gap-1 z-[2]">
              <img
                className="h-5 w-5 relative"
                loading="lazy"
                alt=""
                src="/svg3.svg"
              />
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[2.7px]">
                <b className="relative leading-[14px] inline-block min-w-[35px]">
                  29,835
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Container2.propTypes = {
  className: PropTypes.string,
};

export default Container2;
