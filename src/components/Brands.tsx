import One from "../assets/One.png";
import Two from "../assets/Two.png";
import Three from "../assets/Three.webp";
import Four from "../assets/Four.webp";
import Five from "../assets/Five.png";
import Six from "../assets/Six.png";
import Seven from "../assets/Seven.webp";
import Eight from "../assets/Eight.png";
import Marquee from "react-fast-marquee";
import React from "react";

export default function Brands() {
  const handleButton = () => {
    window.location.href = "https://calendly.com/cloudfixmedia/45-minutes-exploration-call-cloudfixmedia";
  };

  return (
    <div className="py-10 bg-black text-white text-center flex flex-col items-center">
      <div className="pt-5 md:pt-10 w-full flex flex-col items-center">
        <button
          onClick={handleButton}
          className="px-8 py-4 w-10/12 md:w-4/12 rounded-lg text-md md:text-2xl text-white bg-blue-600 transition-transform duration-200 active:scale-95 flex items-center justify-center"
        >
          <h1 className="pr-2">Book a meeting now</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4h18M3 6h18M4 6v14h16V6M10 12h4m-2-2v4"
            />
          </svg>
        </button>
      </div>

      <h1 className="text-2xl md:text-5xl my-10 font-bold pb-8">
        <span className="text-blue-600">Brands{" "}</span>
        <span className="font-instruemntserif italic font-normal">
          we have worked with . . .
        </span>
      </h1>
      <div className="overflow-hidden w-full px-4">
        <Marquee
          pauseOnHover={true}
          loop={0} // Infinite loop
          gradient={true}
          gradientWidth={50} // Adjust gradient width for effect
          speed={280} // Reduced speed for smoother scrolling
          gradientColor="0,0,0" // Proper RGB format for black gradient
        >
          <img
            src={One}
            alt="Brand 1"
            className="h-12 md:h-16 mx-5 md:mx-10 rounded-lg"
          />
          <img src={Two} alt="Brand 2" className="h-12 md:h-16 mx-5 md:mx-10" />
          <img
            src={Three}
            alt="Brand 3"
            className="h-12 md:h-16 mx-5 md:mx-10"
          />
          <img
            src={Four}
            alt="Brand 4"
            className="h-12 md:h-16 mx-5 md:mx-10"
          />
          <img
            src={Eight}
            alt="Brand 5"
            className="h-12 md:h-16 mx-5 md:mx-10"
          />
          <img
            src={Five}
            alt="Brand 5"
            className="h-12 md:h-16 mx-5 md:mx-10"
          />
          <img src={Six} alt="Brand 5" className="h-12 md:h-16 mx-5 md:mx-10" />
          <img
            src={Seven}
            alt="Brand 5"
            className="h-12 md:h-16 mx-5 md:mx-10"
          />
        </Marquee>
      </div>
    </div>
  );
}
