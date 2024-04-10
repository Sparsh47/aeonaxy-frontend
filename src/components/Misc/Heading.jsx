import React from "react";
import { UseContext } from "../../customHooks/useContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Heading({ textData }) {
  const context = UseContext();

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-4xl font-bold">{textData.text1}</h1>
      {context.page === 5 && (
        <>
          <div className="flex gap-2 mt-5">
            <FontAwesomeIcon icon="star" className="text-yellow-400 text-3xl" />
            <FontAwesomeIcon icon="star" className="text-yellow-400 text-3xl" />
            <FontAwesomeIcon icon="star" className="text-yellow-400 text-3xl" />
            <FontAwesomeIcon icon="star" className="text-yellow-400 text-3xl" />
            <FontAwesomeIcon icon="star" className="text-yellow-400 text-3xl" />
          </div>
        </>
      )}
      <h2 className="text-lg font-medium text-gray-700">{textData.text2}</h2>
    </div>
  );
}

export default Heading;
