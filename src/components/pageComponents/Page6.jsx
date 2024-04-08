import React from "react";
import CircularProgress from "../Misc/CircularProgress";

function Page6() {
  return (
    <div className="w-[100%] h-[100vh] flex flex-col items-center justify-center gap-5">
      <CircularProgress />
      <div className="text-center text-3xl font-bold">
        Finding learning path recommendations for you based on
        <br /> your responses
      </div>
    </div>
  );
}

export default Page6;
