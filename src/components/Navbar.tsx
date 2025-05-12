import React, { useState, MouseEvent } from "react";
import Logo from "/logo.png";

export default function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleButton = () => {
    window.location.href = "https://calendly.com/cloudfixmedia/45-minutes-exploration-call-cloudfixmedia";
  };

  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu if open
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="bg-[rgba(13, 13, 13, 0.5)] border-gray-400 backdrop-blur-md shadow-md rounded-2xl mt-4 lg:mt-6 p-2 lg:p-3 lg:max-w-5xl mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2 h-8 md:h-12 py-1">
              <div className="bg-white h-full flex items-center rounded-full text-black">
                <img src={Logo} alt="Logo" className="h-full rounded-xl p-1" />
                <h1 className="font-semibold text-sm md:text-base pr-2">
                  CloudFixMedia
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 items-center">
              <a
                href="#"
                className="text-white hover:bg-gray-800 hover:py-1 px-2 hover:rounded-lg"
                onClick={(e) => handleScroll(e, "top")}
              >
                Home
              </a>
              <a
                href="#projects"
                className="text-white hover:bg-gray-800 hover:py-1 px-2 hover:rounded-lg"
                onClick={(e) => handleScroll(e, "projects")}
              >
                Our Projects
              </a>
              <a
                href="#testimonials"
                className="text-white hover:bg-gray-800 hover:py-1 px-2 hover:rounded-lg"
                onClick={(e) => handleScroll(e, "testimonials")}
              >
                Testimonials
              </a>
              <a
                href="#faqs"
                className="text-white hover:bg-gray-800 hover:py-1 px-2 hover:rounded-lg"
                onClick={(e) => handleScroll(e, "faqs")}
              >
                FAQs
              </a>
              <button
                className="bg-blue-600 text-white h-[40px] w-[140px] rounded-full"
                onClick={handleButton}
              >
                Schedule a Call
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          {isOpen && (
            <div className="mt-2 md:hidden space-y-2">
              <a
                href="#"
                className="block text-white px-3 py-2 rounded-md"
                onClick={(e) => handleScroll(e, "top")}
              >
                Home
              </a>
              <a
                href="#projects"
                className="block text-white px-3 py-2 rounded-md"
                onClick={(e) => handleScroll(e, "projects")}
              >
                Our Projects
              </a>
              <a
                href="#testimonials"
                className="block text-white px-3 py-2 rounded-md"
                onClick={(e) => handleScroll(e, "testimonials")}
              >
                Testimonials
              </a>
              <a
                href="#faqs"
                className="block text-white px-3 py-2 rounded-md"
                onClick={(e) => handleScroll(e, "faqs")}
              >
                FAQs
              </a>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}
