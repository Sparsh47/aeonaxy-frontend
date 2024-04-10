import React from "react";

function Card2({ data, isSelected, onClick }) {
  return (
    <div
      className={`w-[15rem] h-[14rem] border-[2px] rounded-xl cursor-pointer flex flex-col items-center justify-center hover:shadow-md transition duration-200 ease-in-out ${
        isSelected ? "border-yellow-400 shadow-xl" : "border-[#eaeaea]"
      }`}
      onClick={onClick}
    >
      <img src={data.image} alt="card-img" />
      <p className="text-lg font-medium">{data.text1}</p>
      <p className="text-xl font-medium text-gray-400">{data.text2}</p>
    </div>
  );
}

export default Card2;
