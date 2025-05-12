import React from "react";
import { useState } from "react";

export default function Faqs() {
  const handleButton = () => {
    window.location.href = "https://calendly.com/cloudfixmedia/45-minutes-exploration-call-cloudfixmedia";
  };

  const [faqs, setFaqs] = useState([
    {
      question: "What services do you provide?",
      answer:
        "We offer end-to-end lead generation solutions, including:\n\n- Targeted ad campaigns\n- Scalable growth strategies\n- Comprehensive reporting and insights",
      open: false,
    },
    {
      question: "Who is this service for?",
      answer:
        "This service is for Indian e-commerce brands specializing in men’s fashion. Whether you’re a startup or an established brand, we can help you grow.",
      open: false,
    },
    {
      question: "What makes you different from other agencies?",
      answer:
        "We have 7+ years of experience and a proven track record in men’s fashion. With over ₹40 crore in ad spend, we understand the nuances of this niche and deliver campaigns that convert.",
      open: false,
    },
    {
      question: "How soon can I see results?",
      answer:
        "Results depend on your specific goals and current business status. However, most clients begin to see improvements within the first few weeks of working with us.",
      open: false,
    },
    {
      question: "How do I get started?",
      answer:
        "Simply click on the Get Started Now button or book your free strategy session today. Let’s kickstart your growth journey!",
      open: false,
    },
    {
      question: "How do you ensure ROI?",
      answer:
        "Our data-driven strategies focus on maximizing every rupee spent. We continuously test, optimize, and refine campaigns to deliver measurable results and sustainable growth.",
      open: false,
    },
    {
      question: "Do you offer a free consultation?",
      answer:
        "Yes! We offer a free strategy session to discuss your goals and how we can help achieve them.",
      open: false,
    },
  ]);

  const toggleFAQ = (index: number) => {
    setFaqs(
      faqs.map((faq, i) => ({
        ...faq,
        open: i === index ? !faq.open : false, // Toggle only the clicked FAQ
      }))
    );
  };

  return (
    <div>
      <div id="faqs" className="max-w-3xl mx-auto p-6">
        <h2 className="text-xl md:text-4xl font-bold text-center text-white mb-8">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-lg p-3 mb-3 cursor-pointer transition-all duration-300 bg-rgb[13,13,13]`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex row justify-between space-x-2 text-white">
              <h1 className="text-sm font-semibold md:text-xl">
                {faq.question}
              </h1>
              {faq.open && <div>-</div>}
              {!faq.open && <div>+</div>}
            </div>
            {faq.open && (
              <div className="mt-2 text-gray-400 text-xs md:text-lg">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="pt-5 md:pt-10 w-full flex flex-col items-center bg-accent2">
        <button
          onClick={handleButton}
          className="px-8 py-4 w-11/12 md:w-1/3 rounded-full font-bold text-md md:text-2xl text-white bg-blue-600 transition-transform duration-200 active:scale-95 flex items-center justify-center"
        >
          Book your strategy call now
          <span className="ml-3 text-xl">→</span>
        </button>
      </div>
    </div>
  );
}
