import React, { useEffect, useState } from "react";
import { UseContext } from "../../customHooks/useContext";

function CircularProgressBar() {
  const context = UseContext();
  const [progress, setProgress] = useState(0);

  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  const calculateProgress = (value) => {
    return (value / 100) * circumference;
  };

  useEffect(() => {
    setProgress(context.progress);
  }, [context.progress]);

  return (
    <div style={{ width: "100px", height: "100px", position: "relative" }}>
      <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }}>
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#f0f0f0"
          strokeWidth="10"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#00ff00"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={calculateProgress(progress)}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="20"
          fill="#000000"
        >
          {`${progress}%`}
        </text>
      </svg>
    </div>
  );
}

export default CircularProgressBar;
