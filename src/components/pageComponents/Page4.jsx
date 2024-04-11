import React, { useState } from "react";
import Heading from "../Misc/Heading";
import Card2 from "../Cards/Card2";

function Page4({ textData, cardData }) {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(index === selectedCard ? null : index);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="text-center">
        <Heading textData={textData} />
      </div>
      <div className="flex flex-col items-center md:flex-row gap-5 my-10">
        {cardData.content.map((data, index) => (
          <Card2
            key={index}
            data={data}
            isSelected={index === selectedCard}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Page4;
