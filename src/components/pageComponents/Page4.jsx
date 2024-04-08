import React from "react";
import Heading from "../Misc/Heading";
import Card2 from "../Cards/Card2";

function Page4({ textData, cardData }) {
  return (
    <div className="flex flex-col gap-4">
      <Heading textData={textData} />
      <div className="flex gap-5 my-10">
        {cardData.content.map((data, index) => (
          <Card2 key={index} data={data} />
        ))}
      </div>
    </div>
  );
}

export default Page4;
