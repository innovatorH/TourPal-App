import { useCallback } from "react";
import FrameComponent10 from "../components/frame-component10";
import { useRouter } from "next/router";

const ChapterSixPage = () => {
  const router = useRouter();

  const onBeginContainerClick = useCallback(() => {
    router.push("/journey-roadmap");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-5 px-[27px] pb-[73px] box-border gap-[88px] leading-[normal] tracking-[normal] mq450:gap-[22px] mq750:gap-11">
      <FrameComponent10
        propHeight="unset"
        propDisplay="unset"
        humburgerMenuFramePosition="relative"
        humburgerMenuFrameBottom="unset"
        humburgerMenuFrameLeft="unset"
      />
      <main className="self-stretch flex flex-row items-start justify-center py-0 pl-px pr-0 box-border max-w-full">
        <section className="w-[1153px] flex flex-col items-start justify-start gap-[52px] max-w-full text-justify text-13xl text-wwwtripadvisorcom-black font-abhaya-libre mq675:gap-[26px]">
          <div className="self-stretch relative mq450:text-lgi">
            <p className="m-0 text-21xl">Chapter 5: A Flame for the Martyrs</p>
            <p className="m-0 text-5xl">&nbsp;</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Your journey through the memorial ends in a beautiful garden, a
              stark contrast to the somber exhibits you have just seen. The
              garden is filled with colorful flowers and tall, graceful trees,
              their branches swaying gently in the breeze. The scent of blooming
              flowers fills the air, creating a sense of peace and tranquility.
              You find a quiet bench and sit down, taking a moment to reflect on
              everything you have learned.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Surrounded by the beauty of the garden, you think about the
              stories you’ve heard—the lives lost, the families torn apart, and
              the resilience of a people who endured so much suffering. You are
              struck by the power of memory and the importance of remembering
              history, not just as a series of events but as the lived
              experiences of real people. As you prepare to leave, you feel a
              renewed sense of purpose, determined to carry the lessons of the
              Red Terror with you, to ensure that such atrocities are never
              repeated.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Leaving the garden, you take one last look back at the memorial.
              The eternal flame flickers in the distance, a beacon of hope and
              remembrance. You walk away with a heavy heart but also a sense of
              gratitude for the opportunity to learn about this crucial part of
              Ethiopia’s history. The stories of the martyrs will stay with you,
              a reminder of the importance of remembering the past to build a
              better future.
            </p>
          </div>
          <footer className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 text-left text-5xl text-wwwtripadvisorcom-black font-wwwtripadvisorcom-inter-black-463 mq750:flex-wrap">
            <img
              className="w-[443px] relative max-h-full object-cover max-w-full"
              loading="lazy"
              alt=""
              src="/title-1@2x.png"
            />
            <div className="flex flex-col items-start justify-start pt-[30px] px-0 pb-0">
              <div
                className="rounded-3xs bg-mediumspringgreen-300 border-mediumspringgreen-100 border-[2px] border-solid flex flex-row items-start justify-start pt-[7px] pb-2 pl-[25px] pr-6 whitespace-nowrap cursor-pointer"
                onClick={onBeginContainerClick}
              >
                <div className="h-[50px] w-[145px] relative rounded-3xs bg-mediumspringgreen-300 border-mediumspringgreen-100 border-[2px] border-solid box-border hidden" />
                <h3 className="m-0 relative text-inherit font-bold font-[inherit] inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] min-w-[96px] z-[1]">
                  The End
                </h3>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default ChapterSixPage;
