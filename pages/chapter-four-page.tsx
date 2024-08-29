import HumburgerMenuFrame from "../components/humburger-menu-frame";
import FrameComponent3 from "../components/frame-component3";

const ChapterFourPage = () => {
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
        <div className="w-[666px] flex flex-col items-start justify-start pt-[55px] px-0 pb-0 box-border max-w-full text-29xl font-abhaya-libre mq750:w-0">
          <h1 className="m-0 self-stretch relative text-inherit font-normal font-[inherit] whitespace-nowrap mq750:hidden">
            Red Terror Martyrs Memorial
          </h1>
        </div>
      </header>
      <main className="self-stretch flex flex-row items-start justify-center py-0 pl-0.5 pr-0 box-border max-w-full">
        <section className="w-[1154.4px] flex flex-col items-end justify-start gap-[33px] max-w-full text-justify text-13xl text-wwwtripadvisorcom-black font-abhaya-libre mq675:gap-4">
          <div className="self-stretch h-[575px] relative leading-[38px] inline-block mq450:text-lgi">
            <p className="m-0 text-21xl">Chapter 4: Relics of Resistance</p>
            <p className="m-0 text-5xl">&nbsp;</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              You enter the exhibition hall next, where a collection of personal
              items and artifacts from the Red Terror period is displayed. The
              room is dimly lit, creating an intimate atmosphere that invites
              quiet reflection. You walk past glass cases containing
              bloodstained clothing, yellowed documents, and crude instruments
              of torture used by the regime.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              One display catches your eye—a small stack of letters, carefully
              preserved behind glass. You lean in closer to read one of them. It
              is a letter from a father to his daughter, written from prison
              just days before his execution. “My dearest, be strong,” it
              begins. “Though we are apart, my love for you will never fade.
              Remember that even in the darkest times, there is light.” The
              paper is old and worn, the ink slightly faded, but the emotion
              behind the words is still raw and powerful. As you read, you feel
              tears welling up in your eyes, imagining the fear and hope that
              must have filled this father’s heart as he wrote to his child for
              the last time.
            </p>
          </div>
          <FrameComponent3 title1="/title-1@2x.png" nextTextShadow="unset" />
        </section>
      </main>
    </div>
  );
};

export default ChapterFourPage;
