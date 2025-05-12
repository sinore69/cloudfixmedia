import React from "react";

export default function Hero() {
  const handleButton = () => {
    window.location.href = "https://calendly.com/cloudfixmedia/45-minutes-exploration-call-cloudfixmedia";
  };

  return (
    <section id="#" className="w-full h-auto text text-white font-satoshi">
      {/* Hero Section */}
      <div className="w-full h-full relative flex flex-col space-y-5 pt-32 md:pt-52 items-center justify-center px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl text-center">
          Drive 10x Conversions for Your <br /> E-Commerce, 
          <span className="font-instruemntserif italic" > <span className="text-blue-600">F</span>ashion Brand</span>
        </h1>

        <p className="w-full md:w-3/4 text-gray-400 text-center text-sm md:text-xl mb-6">
          By Hitting A Minimum of{" "}
          <span className="text-yellow-200">8-10X in ROI</span> in Less Than 2
          Months
        </p>
        {/* Button container centered */}
        <div className="flex justify-center items-center pt-5 md:pt-10 w-full">
          <button
            onClick={handleButton}
            className="w-4/5 md:w-1/3 py-4 bg-blue-600 text-xl text-white rounded-full shadow-[0_0_10px_4px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_8px_rgba(59,130,246,0.75)] active:scale-95 transition-all duration-300"
          >
            Schedule a Call
            <span className="ml-3 text-xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
