import React from "react";

function Card2({ data }) {
  return (
    <div className="w-[16rem] h-[16rem] border-[2px] border-[#eaeaea] rounded-xl cursor-pointer flex flex-col items-center gap-2">
      <img src="#" alt="card-img" />
      <p className="text-lg font-medium">{data.text1}</p>
      <p className="text-xl font-medium text-gray-400">{data.text2}</p>
    </div>
  );
}

export default Card2;
