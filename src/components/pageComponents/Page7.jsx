import React from "react";
import Heading from "../Misc/Heading";
import { resultData } from "../../formData/data";
import Card3 from "../Cards/Card3";

function Page7({ textData }) {
  return (
    <div className="flex flex-col items-center justify-center gap-14 w-[100%] h-[100vh]">
      <div className="text-center">
        <Heading textData={textData} />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
        {resultData.map((data, index) => (
          <Card3 key={index} index={index} data={data} />
        ))}
      </div>
    </div>
  );
}

export default Page7;
