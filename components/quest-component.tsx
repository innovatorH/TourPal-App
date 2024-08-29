import PropTypes from "prop-types";

const QuestComponent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-3xs border-mediumspringgreen-200 border-[1px] border-solid box-border overflow-y-auto flex flex-col items-start justify-start pt-[37px] px-5 pb-[200px] gap-6 shrink-0 max-w-full z-[1] text-justify text-7xl text-white font-wwwtripadvisorcom-inter-black-463 mq1025:pt-6 mq1025:pb-[130px] mq1025:box-border mq450:pt-5 mq450:pb-[84px] mq450:box-border ${className}`}
    >
      <h2 className="m-0 w-[1112px] h-[609px] relative text-inherit inline-block shrink-0 max-w-full font-[inherit] mq450:text-2xl">
        <p className="[margin-block-start:0] [margin-block-end:10px]">
          <span className="font-black whitespace-pre-wrap">
            {`                                                                                        `}
            <span className="[text-decoration:underline]">Description</span>
          </span>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:10px]">
          <span className="font-black whitespace-pre-wrap">
            <span className="[text-decoration:underline]">&nbsp;</span>
          </span>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:10px]">
          <span className="font-wwwtripadvisorcom-inter-black-463">
            Welcome to an immersive journey through Ethiopia's past, where
            history and memory intertwine to tell the story of courage and
            resilience. In this experience, you will explore the Red Terror
            Martyrs Memorial in Addis Ababa, a powerful tribute to the thousands
            who suffered and lost their lives during one of the darkest periods
            in Ethiopia's history. Through six evocative chapters, you will
            uncover the stories of the victims, witness the lasting impact of
            the Red Terror, and reflect on the enduring spirit of those who
            fought for freedom.
          </span>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:10px]">
          <span className="font-black font-wwwtripadvisorcom-inter-black-463 whitespace-pre-wrap">{`              `}</span>
          <span className="font-black font-wwwtripadvisorcom-inter-black-463 whitespace-pre-wrap">
            <span className="[text-decoration:underline]">Checkpoints</span>
          </span>
        </p>
        <ol className="m-0 text-inherit pl-[35px]">
          <li className="mb-0">
            <span className="font-extralight font-wwwtripadvisorcom-inter-black-463">
              The Memorial Grounds
            </span>
          </li>
          <li className="mb-0">
            <span className="font-extralight font-wwwtripadvisorcom-inter-black-463">
              The Red Terror
            </span>
          </li>
          <li className="mb-0">
            <span className="font-extralight font-wwwtripadvisorcom-inter-black-463">
              Faces of the Fallen
            </span>
          </li>
          <li className="mb-0">
            <span className="font-extralight font-wwwtripadvisorcom-inter-black-463">
              Relics of Resistance
            </span>
          </li>
          <li className="mb-0">
            <span className="font-extralight font-wwwtripadvisorcom-inter-black-463">
              A Flame for the Martyrs
            </span>
          </li>
          <li className="mb-0">
            <span className="font-extralight font-wwwtripadvisorcom-inter-black-463">
              A Place for Reflection
            </span>
          </li>
        </ol>
        <p className="[margin-block-start:0] [margin-block-end:10px]">
          <span className="font-black whitespace-pre-wrap">{`                                                                                `}</span>
          <span className="font-black whitespace-pre-wrap">
            <span className="[text-decoration:underline]">
              Glimpse of the story
            </span>
          </span>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:10px]">
          <span className="font-black whitespace-pre-wrap">
            <span className="[text-decoration:underline]">&nbsp;</span>
          </span>
        </p>
        <p className="m-0 font-abhaya-libre">
          Step into the somber grounds of the Red Terror Martyrs Memorial, where
          silence speaks louder than words. Feel the weight of history as you
          pass through the gates, drawn towards a powerful bronze statue that
          symbolizes the suffering and resilience of a nation. As you journey
          through the memorial, you’ll encounter the faces of the fallen on the
          Martyrs' Wall, read letters filled with love and loss, and stand
          before the eternal flame that burns brightly in remembrance. This is
          more than a story—it’s a tribute to those who lived through the
          terror, a call to remember, and a reminder to never forget.
        </p>
      </h2>
      <div className="w-[1111px] flex flex-row items-start justify-start py-0 px-[54px] box-border max-w-full text-left text-base mq1100:pl-[27px] mq1100:pr-[27px] mq1100:box-border">
        <div className="flex-1 flex flex-row items-start justify-end max-w-full">
          <div className="h-[30px] w-[108.4px] relative hidden">
            <img
              className="absolute top-[calc(50%_-_15px)] left-[0px] w-[19.4px] h-[30px]"
              alt=""
              src="/vector-21.svg"
            />
            <b className="absolute top-[calc(50%_-_9px)] left-[39.4px]">
              Previous
            </b>
          </div>
          <div className="flex flex-row items-start justify-start gap-5 text-wwwtripadvisorcom-black">
            <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
              <b className="relative inline-block min-w-[37px]">Next</b>
            </div>
            <img
              className="h-[30px] w-[19.4px] relative object-contain"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
      </div>
      <div className="w-[1111px] h-[171px] relative [background:linear-gradient(0deg,_#000,_rgba(102,_102,_102,_0))] shrink-0 hidden max-w-full" />
    </div>
  );
};

QuestComponent.propTypes = {
  className: PropTypes.string,
};

export default QuestComponent;
