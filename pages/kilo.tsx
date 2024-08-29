import Anchor from "../components/anchor";
import CheckpointquestCard from "../components/checkpointquest-card";

const Kilo = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start pt-[5px] pb-[7px] pl-8 pr-[35px] box-border gap-[91px] leading-[normal] tracking-[normal] text-left text-sm text-wwwtripadvisorcom-black font-wwwtripadvisorcom-inter-black-463 mq700:gap-[45px] mq450:gap-[23px] mq975:flex-wrap">
      <div className="w-[477px] flex flex-row items-end justify-start gap-[3.6px] min-w-[477px] max-w-full mq700:min-w-full mq450:flex-wrap mq975:flex-1">
        <img
          className="h-[30px] w-[19.4px] relative shrink-0"
          loading="lazy"
          alt=""
          src="/vector1.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border min-w-[295px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[29px] shrink-0 max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-7 pr-[29px] box-border max-w-full">
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
            <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full text-justify">
                <div className="flex-1 relative inline-block max-w-full">
                  <p className="m-0">
                    4 Kilo is a prominent area located in the heart of Addis
                    Ababa, Ethiopia's bustling capital city. Known for its
                    historical significance and vibrant atmosphere, 4 Kilo
                    serves as a central hub for cultural, educational, and
                    political activities in the city. The area is named after
                    its distance from the old railway station in Addis Ababa,
                    reflecting a common practice in the city where many
                    locations are referred to by their distance from notable
                    landmarks.
                  </p>
                  <p className="m-0">
                    With its blend of academic prestige, historical landmarks,
                    and cultural sites, 4 Kilo is a vital part of Addis Ababa,
                    offering a glimpse into the nation's past, present, and
                    future. Whether you are a student, a researcher, or a
                    visitor, 4 Kilo represents the heart of Ethiopia's
                    intellectual and cultural life.
                  </p>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5">
                <div className="relative [text-decoration:underline]">
                  This checkpoint is featured in this Quest
                </div>
              </div>
              <div className="w-[411px] flex flex-row items-start justify-center gap-1 max-w-full text-base mq450:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-[385px] px-0 pb-0 mq450:pt-[250px] mq450:box-border">
                  <b className="relative inline-block min-w-[39px]">Back</b>
                </div>
                <CheckpointquestCard
                  adwaMuseumCheckpointThumbnail="/adwa-museum-checkpoint-thumbnail-1@2x.png"
                  line1="pending_I165:12412;9:10332"
                  checkpointquestCardLeft="unset"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border min-w-[367px] max-w-full mq700:min-w-full">
        <img
          className="self-stretch h-[730px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/rectangle-14@2x.png"
        />
      </div>
    </div>
  );
};

export default Kilo;
