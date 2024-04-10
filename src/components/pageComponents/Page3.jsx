import React from "react";
import Heading from "../Misc/Heading";
import three from "../../images/2.png";

function Page3({ textData }) {
  return (
    <div className="w-[100%] flex items-center">
      <img src={three} alt="page-img" className="relative right-[200px]" />
      <div className="w-[34rem] relative left-[100px]">
        <Heading textData={textData} />
      </div>
    </div>
  );
}

export default Page3;
