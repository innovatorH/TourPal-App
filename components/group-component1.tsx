import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const GroupComponent1 = ({ className = "", facesOfTheFallen }) => {
  const router = useRouter();

  const onGroupContainerClick = useCallback(() => {
    router.push("/chapter-threepage");
  }, [router]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[25px] cursor-pointer z-[2] text-left text-5xl text-wwwtripadvisorcom-black font-abhaya-libre ${className}`}
      onClick={onGroupContainerClick}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <img
          className="h-[100px] w-[56.3px] relative cursor-pointer"
          loading="lazy"
          alt=""
          src="/vector-4.svg"
          onClick={onGroupContainerClick}
        />
      </div>
      <div className="self-stretch relative leading-[24px] [text-shadow:1px_0_0_#22c55e,_0_1px_0_#22c55e,_-1px_0_0_#22c55e,_0_-1px_0_#22c55e] mq450:text-lgi mq450:leading-[19px]">
        {facesOfTheFallen}
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
  facesOfTheFallen: PropTypes.string,
};

export default GroupComponent1;
