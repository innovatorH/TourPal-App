import Anchor from "../components/anchor";
import CheckpointquestCard from "../components/checkpointquest-card";

const Entoto = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-end justify-start pt-[5px] pb-5 pl-8 pr-[35px] box-border gap-[91px] leading-[normal] tracking-[normal] text-justify text-sm text-wwwtripadvisorcom-black font-wwwtripadvisorcom-inter-black-463 mq700:gap-[45px] mq450:gap-[23px] mq975:flex-wrap">
      <div className="w-[477px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border min-w-[477px] max-w-full mq700:min-w-full mq975:flex-1">
        <div className="self-stretch flex flex-row items-end justify-start gap-[3.6px] max-w-full mq450:flex-wrap">
          <img
            className="h-[30px] w-[19.4px] relative shrink-0"
            loading="lazy"
            alt=""
            src="/vector1.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border min-w-[295px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[49px] shrink-0 max-w-full mq450:gap-6">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[29px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[27px] pr-[29px] box-border max-w-full">
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
                      <Anchor
                        propFlex="1"
                        propMinWidth="68px"
                        description="Activities"
                        propTextDecoration="none"
                        propMinWidth1="78px"
                      />
                    </div>
                  </div>
                  <div className="self-stretch relative">
                    Entoto Park, nestled near Addis Ababa, Ethiopia, offers a
                    serene escape amidst the Entoto mountain range. With lush
                    greenery, winding trails, and panoramic views, it invites
                    nature lovers and cultural enthusiasts alike. Historic sites
                    like the Entoto Maryam Church and the Entoto Observatory add
                    cultural richness. Visitors can enjoy leisurely walks,
                    picnics, or adventurous hikes to Mount Entoto's summit.
                    Promoting conservation and sustainable tourism, the park
                    safeguards native biodiversity while educating visitors.
                    Entoto Park stands as a cherished haven, preserving
                    Ethiopia's natural beauty and heritage for generations to
                    come.
                  </div>
                </div>
              </div>
              <div className="w-[411px] flex flex-col items-start justify-start gap-[15px] max-w-full text-left">
                <div className="self-stretch flex flex-row items-start justify-end py-0 px-[50px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <div className="relative [text-decoration:underline]">
                    This checkpoint is featured in this Quest
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-1 max-w-full text-base mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-[385px] px-0 pb-0 mq450:pt-[250px] mq450:box-border">
                    <b className="relative inline-block min-w-[39px]">Back</b>
                  </div>
                  <CheckpointquestCard
                    adwaMuseumCheckpointThumbnail="/adwa-museum-checkpoint-thumbnail-1@2x.png"
                    line1="pending_I165:12398;9:10332"
                    checkpointquestCardLeft="unset"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="h-[717px] flex-1 relative rounded-3xs max-w-full overflow-hidden object-cover min-w-[367px] mq700:min-w-full"
        alt=""
        src="/adwa-museum-checkpoint-thumbnail-2@2x.png"
      />
    </div>
  );
};

export default Entoto;
