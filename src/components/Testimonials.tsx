import React from "react";
import Slider from "react-slick"; // Import react-slick for sliding functionality

const Testimonials = () => {
  const handleButton = () => {
    window.location.href = "https://calendly.com/cloudfixmedia/45-minutes-exploration-call-cloudfixmedia";
  };

  // Testimonials data
  const testimonials = [
    {
      quote:
        "Before working with CloudFixMedia, I was stuck at a 2x ROAS on Facebook ads. After partnering with them, my ROAS skyrocketed to 4x! Their expertise in men’s fashion transformed my business. Highly recommend!",
      name: "Arjun Mehta",
      job: "Founder, TrendyWear",
    },
    {
      quote:
        "Working with CloudFixMedia has been the best decision for my men’s fashion brand. Now I’m seeing 4x consistently. They understand men’s fashion and know exactly how to drive results!",
      name: "Priya Nair",
      job: "CEO, Urban Threads",
    },
    {
      quote:
        "I was burning through my budget with poor returns until CloudFixMedia stepped in. They streamlined my ad strategy and took me from wasted spend to consistent 4x ROAS. Absolutely worth it!",
      name: "Ravi Sharma",
      job: "Marketing Head, EthnicCrafts",
    },
    {
      quote:
        "My ad budget felt like a black hole—high spend, low returns. CloudFixMedia revamped everything, optimizing my campaigns to achieve a solid 3.7x ROAS. Highly recommend their expertise!",
      name: "Ananya Singh",
      job: "Founder, StyleFusion",
    },
    {
      quote:
        "After being disappointed by another agency, I gave CloudFixMedia a try. They turned my campaigns around, boosting my ROAS from 2x to 4x. Wish I found them sooner!",
      name: "Karan Patel",
      job: "Owner, Elite Couture",
    },
  ];

  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Loop through the testimonials infinitely
    speed: 500, // Speed of the transition
    slidesToShow: 3, // Show three testimonials at a time
    slidesToScroll: 1, // Scroll one testimonial at a time
    pauseOnHover: true, // Pause the sliding when hovering
    pauseOnClick: true, // Pause the sliding when clicking
    autoplay: true, // Enable auto-sliding
    autoplaySpeed: 3000, // Set the time for each slide (in milliseconds)
    swipeToSlide: true, // Enable gesture swiping
    touchMove: true, // Allow moving the slides with gestures
    arrows: false, // Disable arrows
    responsive: [
      {
        breakpoint: 1024, // For medium screens (tablets)
        settings: {
          slidesToShow: 2, // Show two testimonials at a time
        },
      },
      {
        breakpoint: 768, // For smaller screens (mobiles)
        settings: {
          slidesToShow: 1, // Show one testimonial at a time
        },
      },
    ],
  };

  return (
    <div id="testimonials" className="w-full h-full space-y-10 md:space-y-16 bg-black text-white text-center px-2 md:px-16">
      <div className="flex flex-row justify-between items-center pt-5 md:pt-10 space-y-4 md:space-y-0">
        <h1 className="text-xl md:text-5xl font-bold whitespace-nowrap">
          What Our Clients<span className="font-bold italic text-blue-600"> Say :</span>
        </h1>
        {/* Button */}
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <button
            onClick={handleButton}
            className="px-3 md:px-16 py-2 md:py-3 w-full ml-10 md:ml-0 md:w-auto rounded-full font-bold text-sm md:text-2xl bg-blue-600 text-white transition-transform duration-200 active:scale-95"
          >
            Book a call
          </button>
        </div>
      </div>

      <div className="relative">
        {/* Slick slider component */}
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-1 md:px-4">
              <div className="bg-gray-800 p-5 rounded-lg text-sm md:text-lg h-5/6 md:h-64 text-start flex flex-col justify-between space-y-4">
                <p className="italic line-clamp-4 md:line-clamp-5">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <p className="font-semibold truncate">{testimonial.name}</p>
                  <p className="text-sm truncate">{testimonial.job}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
