import React, { useEffect, useState } from "react";

function CircularProgressBar() {
  const [progress, setProgress] = useState(0);

  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  const calculateProgress = (value) => {
    return (value / 100) * circumference;
  };

  useEffect(() => {
    if (progress < 100) {
      var interval = setTimeout(() => setProgress((prev) => prev + 1), 20);
    }

    return () => {
      clearInterval(interval);
    };
  }, [progress]);

  return (
    <div className="w-1/3 sm:w-1/3 md:w-1/4 lg:w-1/5 mx-auto">
      <svg viewBox="0 0 150 150" className="w-full h-auto">
        <circle
          cx="75"
          cy="75"
          r={radius}
          fill="none"
          stroke="#00ff00"
          strokeWidth="14"
        />
        <circle
          cx="75"
          cy="75"
          r={radius}
          fill="none"
          stroke="#f0f0f0"
          strokeWidth="14"
          strokeDasharray={circumference}
          strokeDashoffset={calculateProgress(progress)}
          strokeLinecap="square"
          transform="rotate(-90 75 75)"
        />
      </svg>
    </div>
  );
}

export default CircularProgressBar;
