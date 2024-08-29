import Navbar from "../components/navbar";
import TourDetails from "../components/tour-details";
import FrameComponent16 from "../components/frame-component16";

const TourGuide = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[33px] pb-[91px] pl-px pr-0 box-border gap-[68px] leading-[normal] tracking-[normal] text-left text-mini-3 text-wwwtripadvisorcom-black font-wwwtripadvisorcom-inter-black-463 mq450:gap-[17px] mq750:gap-[34px]">
      <Navbar />
      <div className="absolute !m-[0] bottom-[755px] left-[555px]">
        Jul 2024 • Business
      </div>
      <main className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[21px] box-border max-w-full">
        <section className="w-[1150px] flex flex-col items-start justify-start gap-[104px] max-w-full lg:gap-[52px] mq750:gap-[26px]">
          <TourDetails />
          <FrameComponent16 />
        </section>
      </main>
    </div>
  );
};

export default TourGuide;
