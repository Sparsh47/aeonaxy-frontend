import React from "react";

function Card1({ data }) {
  return (
    <div className="w-[50rem] border border-gray-200 rounded-lg p-5 cursor-pointer flex items-center gap-5">
      <img src={data.image} alt="card-img" />
      <span className="text-gray-500 font-medium text-lg">
        <span className="text-black">{data.text.split(" ")[0]}</span>{" "}
        {data.text.split(" ").splice(1).join(" ")}
      </span>
    </div>
  );
}

export default Card1;
