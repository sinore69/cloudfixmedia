import React from "react";

export default function HighLights() {
  return (
    <div className="w-full pb-10 flex flex-row items-center justify-center px-6 text-white space-x-3 md:space-x-8">
      {/* Experience Box */}
      <div className="flex flex-col items-center justify-center space-y-2 w-28 md:w-40 h-28 md:h-48 bg-accent2 text-white rounded-2xl md:rounded-3xl shadow-lg">
        <span className="text-2xl md:text-5xl font-bold">7+</span>
        <span className="text-sm md:text-xl w-2/3 text-center">
          Years of Experience
        </span>
      </div>

      <div>
        <div className="w-[2px] md:w-1 h-24 md:h-40 bg-white rounded-full"></div>
      </div>

      {/* Adspends Box */}
      <div className="flex flex-col items-center justify-center space-y-2 w-28 md:w-40 h-28 md:h-48 bg-accent2 text-white rounded-2xl md:rounded-3xl shadow-lg">
        <span className="text-2xl md:text-5xl font-bold">
          40 <span className="text-xl">Cr+</span>
        </span>
        <span className="text-sm md:text-xl text-center">
          In <br />
          Ad spend
        </span>
      </div>
    </div>
  );
}
