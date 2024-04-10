import React, { useState } from "react";
import Card1 from "../Cards/Card1";
import Heading from "../Misc/Heading";

function Page2({ textData, cardData }) {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(index === selectedCard ? null : index);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="text-center">
        <Heading textData={textData} />
      </div>
      <div className="flex flex-col gap-3">
        {cardData.content.map((data, index) => (
          <Card1
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

export default Page2;
