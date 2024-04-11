import React, { useState } from "react";
import Card1 from "../Cards/Card1";
import Heading from "../Misc/Heading";
import { UseContext } from "../../customHooks/useContext";

function Page1({ textData, cardData }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const { setStart } = UseContext();

  const handleCardClick = (index) => {
    setSelectedCard(index === selectedCard ? null : index);
  };

  if (selectedCard === 0 || selectedCard) {
    setStart(true);
  } else {
    setStart(false);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="text-center">
        <Heading textData={textData} />
      </div>
      <div className="flex flex-col items-center gap-3">
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

export default Page1;
