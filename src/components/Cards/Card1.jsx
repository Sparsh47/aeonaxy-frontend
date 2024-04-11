import React from "react";

function Card1({ data, isSelected, onClick }) {
  return (
    <div
      className={`w-[20rem] sm:w-[30rem] md:w-[40rem] lg:w-[50rem] border rounded-lg p-4 cursor-pointer flex items-center gap-5 transition duration-200 ease-in-out hover:shadow-md ${
        isSelected ? "border-yellow-400 shadow-xl" : "border-[#eaeaea]"
      }`}
      onClick={onClick}
    >
      <img src={data.image} alt="card-img" />
      <span className="text-sm sm:text-md md:text-lg text-gray-500 font-medium">
        <span className={isSelected ? "text-black font-bold" : "text-black"}>
          {data.text.split(" ")[0]}
        </span>{" "}
        {data.text.split(" ").splice(1).join(" ")}
      </span>
    </div>
  );
}

export default Card1;
