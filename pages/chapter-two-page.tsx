import FrameComponent10 from "../components/frame-component10";
import FrameComponent3 from "../components/frame-component3";

const ChapterTwoPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-5 px-[27px] pb-[119px] box-border gap-14 leading-[normal] tracking-[normal] mq750:gap-7">
      <FrameComponent10
        humburgerMenuFramePosition="relative"
        humburgerMenuFrameBottom="unset"
        humburgerMenuFrameLeft="unset"
      />
      <main className="self-stretch flex flex-row items-start justify-center py-0 pl-0.5 pr-0 box-border max-w-full">
        <section className="w-[1154.4px] flex flex-col items-start justify-start gap-[38px] max-w-full text-justify text-13xl text-wwwtripadvisorcom-black font-abhaya-libre mq675:gap-[19px]">
          <div className="self-stretch relative mq450:text-lgi">
            <p className="m-0 text-21xl">
              Chapter 2: Understanding the Red Terror
            </p>
            <p className="m-0 text-5xl">&nbsp;</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Before delving deeper into the memorial, you stop at a large
              plaque near the entrance. The text explains the historical context
              behind the Red Terror. It describes the rise of the Derg regime in
              the late 1970s, a time when Ethiopia was plunged into political
              chaos. Following the overthrow of Emperor Haile Selassie, the
              Derg, a Marxist-Leninist military junta, took control.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              The Derg, fearing opposition, launched a campaign known as the Red
              Terror to eliminate all perceived enemies. The regime arrested,
              tortured, and executed thousands of Ethiopians, creating an
              atmosphere of fear and suspicion. As you read, you begin to
              understand the scale of the violence and the deep scars it left on
              the nation. You feel a mix of sadness and anger, realizing that
              these events are more than just history—they are the lived
              experiences of real people.
            </p>
          </div>
          <FrameComponent3 title1="/title-1@2x.png" />
        </section>
      </main>
    </div>
  );
};

export default ChapterTwoPage;
