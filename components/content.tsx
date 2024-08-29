import BackgroundHorizontalBorder from "./background-horizontal-border";
import FrameComponent1 from "./frame-component1";
import PropTypes from "prop-types";

const Content = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start max-w-full text-center text-sm-2 text-darkslategray-200 font-wwwtripadvisorcom-inter-black-463 ${className}`}
    >
      <BackgroundHorizontalBorder />
      <FrameComponent1
        propBackgroundImage="url('/defaultavatar202042jpg@3x.png')"
        image33="/image-33@2x.png"
      />
      <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[21px] box-border max-w-full mt-[-32px]">
        <div className="w-[1232px] rounded-sm bg-white overflow-auto shrink-0 flex flex-row items-start justify-start py-0 px-3 box-border gap-[136px] max-w-full z-[2] mq450:gap-[68px]">
          <div className="w-[101.4px] flex flex-row items-start justify-start gap-[8.4px]">
            <div className="h-[46px] w-px border-gainsboro-200 border-b-[0.8px] border-solid box-border flex flex-row items-start justify-start relative">
              <div className="w-[62px] absolute !m-[0] top-[13px] right-[-177.4px] leading-[18px] flex items-center whitespace-nowrap">
                <a
                  className="text-[inherit]"
                  href="https://www.figma.com/design/wB5D7oGp6lMY6IeoVynXnS?node-id=1-2"
                  target="_blank"
                >
                  s
                </a>
              </div>
              <a className="[text-decoration:none] w-[44.3px] absolute !m-[0] top-[13.1px] right-[-238.9px] text-sm-3 leading-[18px] text-[inherit] flex items-center justify-center min-w-[44.3px]">
                Photos
              </a>
              <div className="h-[45.2px] w-[74.6px] absolute !m-[0] top-[0px] right-[-300.4px] z-[1]" />
              <div className="h-[45.2px] w-[94.4px] absolute !m-[0] top-[0px] right-[-464.9px]" />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-3.5 px-0 pb-0 text-smi-8 text-wwwtripadvisorcom-black">
              <a
                className="self-stretch relative leading-[18px] text-[inherit] [text-decoration:none]"
                href="https://www.figma.com/design/wB5D7oGp6lMY6IeoVynXnS?node-id=1-2"
                target="_blank"
              >
                Activity feed
              </a>
            </div>
          </div>
          <div className="w-[170px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border text-smi-8 text-wwwtripadvisorcom-black">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 border-mediumseagreen-400 border-t-[1.6px] border-solid border-mediumseagreen-400 border-b-[1.6px] border-solid flex flex-row items-start justify-start pt-1 pb-1.5 pl-3 pr-[11px] z-[1]">
                <b className="flex-1 relative leading-[18px]">Reviews</b>
              </div>
              <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 ml-[-5px] text-sm-6 text-darkslategray-200">
                <a className="[text-decoration:none] relative leading-[18px] text-[inherit] inline-block min-w-[71px]">
                  Travel map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
