import p1 from "../assets/proof/p1.jpeg";
import p2 from "../assets/proof/p2.jpeg";
import p3 from "../assets/proof/p3.jpeg";
import p4 from "../assets/proof/p4.jpeg";
import p5 from "../assets/proof/p5.jpeg";
import p6 from "../assets/proof/p6.jpeg";
import p7 from "../assets/proof/p7.jpeg";
import p8 from "../assets/proof/p8.jpg";
import p9 from "../assets/proof/p9.png";
import p10 from "../assets/proof/p10.png";
import p11 from "../assets/proof/p11.jpg";
import p12 from "../assets/proof/p12.jpg";
import p13 from "../assets/proof/p13.jpg";
import Marquee from "react-fast-marquee";
import React from "react";

const ProofInSlide = () => {


  return (
    <div id="projects" className="text-white text-xl md:text-4xl text-center space-y-10 md:space-y-16">
      <h1 className="text-xl md:text-5xl font-bold">
        Increased Sales by 50% in <span className="text-blue-600">First Month</span>
      </h1>
      <div className="overflow-hidden">
        <Marquee
          pauseOnHover={true}
          loop={0} // Infinite loop
          gradient={true}
          gradientWidth={100} // Adjust gradient width for effect
          speed={180} // Reduced speed for smoother scrolling
          gradientColor="0,0,0" // Proper RGB format for black gradient
        >
          <div className="image-wrapper border-blue-600 border-2 mx-1 h-56 md:h-96">
            <img src={p1} alt="Proof 1" className="h-full" />
          </div>
          <div className="image-wrapper border-blue-600 border-2 mx-1 h-56 md:h-96">
            <img src={p2} alt="Proof 2" className="h-full" />
          </div>
          <div className="image-wrapper border-blue-600 border-2 mx-1 h-56 md:h-96">
            <img src={p3} alt="Proof 3" className="h-full" />
          </div>
          <div className="image-wrapper border-blue-600 border-2 mx-1 h-56 md:h-96">
            <img src={p4} alt="Proof 4" className="h-full" />
          </div>
          <div className="image-wrapper border-blue-600 border-2 mx-1 h-56 md:h-96">
            <img src={p5} alt="Proof 5" className="h-full" />
          </div>
          <div className="image-wrapper border-blue-600 border-2 mx-1 h-56 md:h-96">
            <img src={p6} alt="Proof 6" className="h-full" />
          </div>
          <div className="image-wrapper border-blue-600 border-2 mx-1 h-56 md:h-96">
            <img src={p7} alt="Proof 7" className="h-full" />
          </div>
          <div className="image-wrapper border-blue-600 border-2 mx-1 h-56 md:h-96">
            <img src={p8} alt="Proof 8" className="h-full" />
          </div>
          <div className="image-wrapper border-blue-600 border-2 mx-1 h-56 md:h-96">
            <img src={p9} alt="Proof 9" className="h-full" />
          </div>
          <div className="image-wrapper border-blue-600 border-2 mx-1 h-56 md:h-96">
            <img src={p10} alt="Proof 10" className="h-full" />
          </div>
          <div className="image-wrapper border-blue-600 border-2 mx-1 h-56 md:h-96">
            <img src={p11} alt="Proof 11" className="h-full" />
          </div>
          <div className="image-wrapper border-blue-600 border-2 mx-1 h-56 md:h-96">
            <img src={p12} alt="Proof 12" className="h-full" />
          </div>
          <div className="image-wrapper border-blue-600 border-2 mx-1 h-56 md:h-96">
            <img src={p13} alt="Proof 13" className="h-full" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default ProofInSlide;
