import React from "react";
import Heading from "../Misc/Heading";
import three from "../../images/2.png";

function Page3({ textData }) {
  return (
    <div className="w-[100%] flex flex-col md:flex-row items-center md:justify-evenly">
      <img
        src={three}
        alt="page-img"
        className="relative xl:right-[200px] w-[40%] lg:w-[40%]"
      />
      <div className="text-justify sm:text-left w-[20rem] sm:w-[25rem] md:w-[34rem] relative lg:left-[50px] xl:left-[100px]">
        <Heading textData={textData} />
      </div>
    </div>
  );
}

export default Page3;
