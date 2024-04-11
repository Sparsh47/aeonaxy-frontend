import React from "react";
import Heading from "../Misc/Heading";
import five from "../../images/4.png";

function Page5({ textData }) {
  return (
    <div className="md:my-[3.5rem]">
      <div className="w-[100%] flex items-center">
        <img
          src={five}
          alt="page-img"
          className="relative xl:right-[150px] hidden lg:block"
        />
        <div className="text-center md:text-justify w-[20rem] md:w-[44rem] relative xl:left-[150px]">
          <Heading textData={textData} />
          <br />
          <p className="text-[12px] md:text-lg font-medium text-gray-700 italic">
            -Jacob S.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page5;
