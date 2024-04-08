import React, { useEffect, useState } from "react";
import { UseContext } from "../../customHooks/useContext";

function Progress() {
  const context = UseContext();
  const [width, setWidth] = useState(50);

  const widthValues = {
    1: 10,
    2: 20,
    3: 30,
    4: 60,
    5: 100,
  };

  useEffect(() => {
    setWidth(widthValues[context.page] || 0);
  }, [context.page]);

  return (
    <div className="relative w-[80%] h-[5px] bg-gray-200 rounded-md">
      <div
        className="absolute left-0 top-0 h-[5px] bg-emerald-500 rounded-md"
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
}

export default Progress;
