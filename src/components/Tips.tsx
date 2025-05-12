import React from "react";
import { useState } from "react";


const LeadMagnet = () => {
  const [email, setEmail] = useState("");

  const handleButton = () => {
    window.location.href = "https://calendly.com/cloudfixmedia/45-minutes-exploration-call-cloudfixmedia";
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you! The PDF will be sent to: ${email}`);
      setEmail(""); // Reset the email field
    } else {
      alert("Please enter a valid email address.");
    }
  };
  
  return (
    <div className="w-full py-10 bg-black text-white text-center px-4">
      <h2 className="text-xl md:text-3xl font-bold  mb-4">
        <span className="text-blue-600">FREE</span> Offer
      </h2>
      <p className="text-sm md:text-lg mb-6 text-gray-300">
        10 Proven Marketing Tips for Men’s Fashion Brands.<br />
        Enter your email to get the FREE PDF.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-row items-center justify-center gap-4 text-accent2"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full sm:w-96 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-accent2"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white hover:bg-gray-400 text-accent2 w-1/3 md:w-24 h-10 rounded-md font-bold"
        >
          Get PDF
        </button>
      </form>
      {/* Button container centered */}
      <div className="flex justify-center items-center pt-5 md:pt-10 w-full">
          <button
            onClick={handleButton}
            className="w-4/5 md:w-1/3 py-4 bg-blue-600 text-xl text-white rounded-full shadow-[0_0_10px_4px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_8px_rgba(59,130,246,0.75)] active:scale-95 transition-all duration-300"
          >
            Schedule a Meeting
            <span><span className="ml-3 text-xl">→</span></span>
          </button>
        </div>
    </div>
  );
};

export default LeadMagnet;
