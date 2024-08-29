import HumburgerMenuFrame from "../components/humburger-menu-frame";
import FrameComponent3 from "../components/frame-component3";

const ChapterOnePage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-5 px-[27px] pb-[119px] box-border gap-28 leading-[normal] tracking-[normal] mq450:gap-7 mq750:gap-14">
      <header className="w-[1026px] flex flex-row items-start justify-between gap-5 max-w-full text-left text-base text-saddlebrown-100 font-itim">
        <div className="flex flex-row items-start justify-start gap-5">
          <HumburgerMenuFrame
            humburgerMenuFramePosition="relative"
            humburgerMenuFrameBottom="unset"
            humburgerMenuFrameLeft="unset"
          />
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div className="flex flex-col items-start justify-start gap-0.5">
              <div className="flex flex-row items-start justify-start py-0 pl-[13px] pr-2.5">
                <img
                  className="h-[25px] w-[29.5px] relative"
                  loading="lazy"
                  alt=""
                  src="/logo.svg"
                />
              </div>
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[53px]">
                TourPal
              </a>
            </div>
          </div>
        </div>
        <div className="w-[666px] flex flex-col items-start justify-start pt-[55px] px-0 pb-0 box-border max-w-full text-29xl font-abhaya-libre mq750:w-0">
          <h1 className="m-0 self-stretch relative text-inherit font-normal font-[inherit] whitespace-nowrap mq750:hidden">
            Red Terror Martyrs Memorial
          </h1>
        </div>
      </header>
      <section className="self-stretch flex flex-row items-start justify-center py-0 pl-0.5 pr-0 box-border max-w-full text-justify text-13xl text-wwwtripadvisorcom-black font-abhaya-libre">
        <div className="w-[1154.4px] flex flex-col items-start justify-start gap-5 max-w-full">
          <div className="self-stretch relative mq450:text-lgi">
            <p className="m-0 text-21xl">
              Chapter 1: Entering the Memorial Grounds
            </p>
            <p className="m-0 text-5xl">&nbsp;</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              You step through the creaking gates of the Red Terror Martyrs
              Memorial in Addis Ababa, Ethiopia. The air is still, almost thick
              with the weight of memories that seem to linger in the space
              around you. Your eyes are drawn to a large, imposing statue just
              inside the entrance—a figure frozen in mid-scream, its hands
              reaching toward the sky as if pleading for justice. The bronze
              surface glints in the fading sunlight, casting long shadows on the
              ground.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              For a moment, you pause, taking in the gravity of this place. This
              memorial stands as a tribute to those who suffered and died during
              Ethiopia’s Red Terror, a brutal period in the nation’s history. As
              you move closer, the silence deepens, and a somber mood sets in.
              You feel an invisible pull, urging you to learn more about the
              stories preserved here.
            </p>
          </div>
          <FrameComponent3 title1="/title-1@2x.png" nextTextShadow="unset" />
        </div>
      </section>
    </div>
  );
};

export default ChapterOnePage;
