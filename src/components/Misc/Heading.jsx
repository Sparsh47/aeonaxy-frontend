import React from "react";

function Heading({ textData }) {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-4xl font-bold">{textData.text1}</h1>
      <h2 className="text-lg font-medium text-gray-700">{textData.text2}</h2>
    </div>
  );
}

export default Heading;
