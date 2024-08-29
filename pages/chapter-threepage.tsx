import HumburgerMenuFrame from "../components/humburger-menu-frame";
import FrameComponent3 from "../components/frame-component3";

const ChapterThreepage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-5 px-[27px] pb-[119px] box-border gap-14 leading-[normal] tracking-[normal] mq750:gap-7">
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
        <div className="w-[666px] flex flex-col items-start justify-start pt-[55px] px-0 pb-0 box-border max-w-full text-29xl font-abhaya-libre mq1050:w-0">
          <h1 className="m-0 self-stretch relative text-inherit font-normal font-[inherit] whitespace-nowrap mq1050:hidden">
            Red Terror Martyrs Memorial
          </h1>
        </div>
      </header>
      <main className="self-stretch flex flex-row items-start justify-center py-0 pl-0.5 pr-0 box-border max-w-full">
        <section className="w-[1154.4px] flex flex-col items-end justify-start gap-[76px] max-w-full text-justify text-13xl text-wwwtripadvisorcom-black font-abhaya-libre mq750:gap-[19px] mq1125:gap-[38px]">
          <div className="self-stretch relative mq450:text-lgi">
            <p className="m-0 text-21xl">Chapter 3: Faces of the Fallen</p>
            <p className="m-0 text-5xl">&nbsp;</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Moving on, you come to a long wall covered with photographs. This
              is the Martyrs’ Wall, a powerful tribute to the many lives lost
              during the Red Terror. Each photograph captures a face, a story
              frozen in time. Some are smiling, full of hope and youth, while
              others look more somber, their eyes reflecting the gravity of the
              times they lived in.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              As you walk slowly along the wall, you notice a photograph of a
              young woman. Her name, Alem, is etched below her picture. She was
              only 19 years old when she was executed in 1978. Her smile is
              warm, her eyes bright, and for a moment, you feel as if she is
              looking right at you, her gaze piercing through the years. You
              stop, imagining what her life might have been like, cut short in
              such a brutal manner. The weight of this loss sinks in, and you
              feel a profound sense of connection to these individuals who
              suffered so greatly.
            </p>
          </div>
          <FrameComponent3 title1="/title-1@2x.png" nextTextShadow="unset" />
        </section>
      </main>
    </div>
  );
};

export default ChapterThreepage;
