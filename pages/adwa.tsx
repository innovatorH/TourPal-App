import Anchor from "../components/anchor";
import CheckpointquestCard from "../components/checkpointquest-card";

const Adwa = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-end justify-start pt-[5px] px-8 pb-5 box-border gap-[86.4px] leading-[normal] tracking-[normal] text-justify text-sm text-wwwtripadvisorcom-black font-wwwtripadvisorcom-inter-black-463 mq700:gap-[43px] mq450:gap-[22px] mq975:flex-wrap">
      <div className="w-[484px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border min-w-[484px] max-w-full mq700:min-w-full mq975:flex-1">
        <div className="self-stretch flex flex-row items-end justify-start gap-[3.6px] max-w-full mq450:flex-wrap">
          <img
            className="h-[30px] w-[19.4px] relative shrink-0"
            loading="lazy"
            alt=""
            src="/vector1.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border min-w-[300px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-8 shrink-0 max-w-full mq450:gap-4">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2 pr-0 box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[29px] max-w-full">
                  <div className="w-[437px] flex flex-row items-start justify-start py-0 px-5 box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-start gap-[41px] max-w-full mq450:gap-5 mq450:flex-wrap">
                      <Anchor
                        propFlex="unset"
                        propMinWidth="unset"
                        description="Description"
                        propTextDecoration="underline"
                        propMinWidth1="95px"
                      />
                      <Anchor
                        propFlex="1"
                        propMinWidth="68px"
                        description="Facilities"
                        propTextDecoration="none"
                        propMinWidth1="73px"
                      />
                      <Anchor description="Activities" />
                    </div>
                  </div>
                  <div className="self-stretch relative">
                    The Adwa Museum in Addis Ababa commemorates the Battle of
                    Adwa, where Ethiopian forces triumphed over Italian invaders
                    on March 1, 1896. This victory ensured Ethiopia's
                    sovereignty and symbolized resistance against colonialism in
                    Africa. Located in the heart of Addis Ababa, the museum
                    showcases historical artifacts, documents, photographs, and
                    interactive displays, offering a comprehensive understanding
                    of the battle. It also hosts educational programs, guided
                    tours, and workshops to educate visitors about Ethiopia's
                    rich history. As a living memorial, the Adwa Museum
                    celebrates Ethiopian unity, resilience, and independence,
                    making it a must-visit for those interested in Ethiopian and
                    African heritage.
                  </div>
                </div>
              </div>
              <div className="w-[418px] flex flex-col items-start justify-start gap-[15px] max-w-full text-left">
                <div className="self-stretch flex flex-row items-start justify-end py-0 px-[50px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <div className="relative [text-decoration:underline]">
                    This checkpoint is featured in this Quest
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[11px] max-w-full text-base mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-[385px] px-0 pb-0 mq450:pt-[250px] mq450:box-border">
                    <b className="relative inline-block min-w-[39px]">Back</b>
                  </div>
                  <CheckpointquestCard
                    adwaMuseumCheckpointThumbnail="/adwa-museum-checkpoint-thumbnail-1@2x.png"
                    line1="pending_I165:12269;9:10332"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="h-[720px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[367px] mq700:min-w-full"
        loading="lazy"
        alt=""
        src="/image2@2x.png"
      />
    </div>
  );
};

export default Adwa;
