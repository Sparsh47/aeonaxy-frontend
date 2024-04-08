import React from "react";

function Page({ Child, textData, cardData }) {
  return (
    <div>
      <Child textData={textData} cardData={cardData} />
    </div>
  );
}

export default Page;
