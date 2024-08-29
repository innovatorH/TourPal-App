import FrameComponent10 from "../components/frame-component10";
import FrameComponent3 from "../components/frame-component3";

const ChapterFivePage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-5 px-[27px] pb-[119px] box-border gap-14 leading-[normal] tracking-[normal] mq750:gap-7">
      <FrameComponent10
        propHeight="unset"
        propDisplay="unset"
        humburgerMenuFramePosition="relative"
        humburgerMenuFrameBottom="unset"
        humburgerMenuFrameLeft="unset"
      />
      <main className="self-stretch flex flex-row items-start justify-center py-0 pl-0.5 pr-0 box-border max-w-full">
        <section className="w-[1154.4px] flex flex-col items-end justify-start gap-[76px] max-w-full text-justify text-13xl text-wwwtripadvisorcom-black font-abhaya-libre mq750:gap-[19px] mq1125:gap-[38px]">
          <div className="self-stretch relative mq450:text-lgi">
            <p className="m-0 text-21xl">Chapter 5: A Flame for the Martyrs</p>
            <p className="m-0 text-5xl">&nbsp;</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              At the center of the memorial, you find the eternal flame, a
              simple yet profound symbol of remembrance. The flame flickers
              gently, its warm light dancing across the faces of visitors who
              have gathered around it. You stand before the flame, feeling its
              heat on your face, and reflect on its significance.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              “This flame represents the undying memory of those who perished
              during the Red Terror,” a guide explains quietly beside you. “It
              symbolizes the spirit of those who fought for freedom, justice,
              and peace.” You close your eyes, allowing the words to sink in.
              The flame’s steady glow reminds you of the resilience of the human
              spirit, even in the face of overwhelming darkness. It urges you to
              remember the past and to honor the sacrifices made by those who
              came before.
            </p>
          </div>
          <FrameComponent3
            title1="/title-1@2x.png"
            nextTextShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          />
        </section>
      </main>
    </div>
  );
};

export default ChapterFivePage;
