import React from "react";

function Card3({ data, index }) {
  return (
    <div className="relative flex flex-col items-center">
      {index === 0 && (
        <div className="absolute -top-5 p-[10px] rounded-[10rem] bg-yellow-400 font-black text-[8px] md:text-[8px] lg:text-[12px]">
          MOST POPULAR
        </div>
      )}
      <div className="w-[20rem] h-[8rem] md:w-[25rem] md:h-[8rem] lg:w-[30rem] lg:h-[13rem] flex items-center justify-center gap-5 border-[1px] border-[#eaeaea] rounded-xl cursor-pointer p-5 hover:shadow-md transition duration-200 ease-in-out">
        <div>
          <p className="font-medium text-sm md:text-md lg:text-lg">
            <span className="font-bold">
              {data.content.split(" ")[0]} {data.content.split(" ")[1]}{" "}
            </span>
            {data.content.split(" ").splice(2).join(" ")}
          </p>
        </div>
        <img
          src={data.image}
          alt="card-img"
          className="lg:w-[100%] md:w-[30%] w-[20%]"
        />
      </div>
    </div>
  );
}

export default Card3;
