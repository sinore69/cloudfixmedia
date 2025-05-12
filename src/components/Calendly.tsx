import React from "react";
import { useEffect } from "react";

const Calendly = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup to remove script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-black" id="calendly-section">
      <h1 className="text-2xl md:text-5xl mb-6 font-bold text-white text-center flex flex-col pt-20">
        Book Your Strategy Call Now
      </h1>
      <div
        className="calendly-inline-widget md:min-w-[320px] h-[700px] md:h-[800px]"
        data-url="https://calendly.com/cloudfixmedia/45-minutes-exploration-call-cloudfixmedia?hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=1e88e5"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
    </div>
  );
};

export default Calendly;
