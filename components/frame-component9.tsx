import BackgroundHorizontalBorder from "./background-horizontal-border";
import FrameComponent1 from "./frame-component1";
import PropTypes from "prop-types";

const FrameComponent9 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start max-w-full text-left text-smi text-wwwtripadvisorcom-black font-wwwtripadvisorcom-inter-black-463 ${className}`}
    >
      <BackgroundHorizontalBorder />
      <FrameComponent1
        image33="/image-33@2x.png"
        editProfileHref="https://www.figma.com/design/wB5D7oGp6lMY6IeoVynXnS?node-id=1-2"
        editProfileTarget="_blank"
      />
      <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[21px] box-border max-w-full mt-[-32px] text-center text-smi-8 text-darkslategray-200">
        <div className="w-[1232px] rounded-sm bg-white overflow-auto shrink-0 flex flex-row items-start justify-start py-0 px-3 box-border gap-[335.4px] max-w-full z-[2] mq450:gap-[168px]">
          <div className="w-px border-gainsboro-200 border-b-[0.8px] border-solid box-border flex flex-row items-start justify-start pt-0 pb-[0.8px] px-0 relative">
            <div className="w-[104px] border-mediumseagreen-400 border-t-[1.6px] border-solid border-mediumseagreen-400 border-b-[1.6px] border-solid box-border flex flex-row items-start justify-start pt-[11px] px-[11px] pb-3 shrink-0 text-wwwtripadvisorcom-black">
              <a
                className="flex-1 relative leading-[18px] font-bold text-[inherit] inline-block [text-decoration:none] min-w-[80.2px]"
                href="https://www.figma.com/design/wB5D7oGp6lMY6IeoVynXnS?node-id=1-2"
                target="_blank"
              >
                Activity feed
              </a>
            </div>
            <div className="w-[62px] absolute !m-[0] top-[13px] right-[-177.4px] text-sm-2 leading-[18px] flex items-center shrink-0">
              <a
                className="text-[inherit]"
                href="https://www.figma.com/design/wB5D7oGp6lMY6IeoVynXnS?node-id=1-2"
                target="_blank"
              >
                s
              </a>
            </div>
            <a
              className="w-[44.3px] absolute !m-[0] top-[13.1px] right-[-238.9px] text-sm-3 leading-[18px] text-[inherit] flex items-center justify-center [text-decoration:none] shrink-0"
              href="https://www.figma.com/design/wB5D7oGp6lMY6IeoVynXnS?node-id=1-2"
              target="_blank"
            >
              Photos
            </a>
            <a
              className="w-[51px] absolute !m-[0] top-[13.1px] right-[-313.8px] text-smi-9 leading-[18px] text-[inherit] flex items-center justify-center [text-decoration:none] shrink-0"
              href="https://www.figma.com/design/wB5D7oGp6lMY6IeoVynXnS?node-id=1-2"
              target="_blank"
            >
              Reviews
            </a>
            <div className="h-[45.2px] w-[94.4px] absolute !m-[0] top-[0px] right-[-464.9px]" />
          </div>
          <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0 text-sm-6">
            <div className="relative leading-[18px] inline-block min-w-[71px]">
              Travel map
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;
