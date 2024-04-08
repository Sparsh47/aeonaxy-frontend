import React from "react";
import Card1 from "../Cards/Card1";
import Heading from "../Misc/Heading";

function Page1({ textData, cardData }) {
  return (
    <div className="flex flex-col gap-4">
      <Heading textData={textData} />
      <div className="flex flex-col gap-3">
        {cardData.content.map((data, index) => (
          <Card1 key={index} data={data} />
        ))}
      </div>
    </div>
  );
}

export default Page1;
