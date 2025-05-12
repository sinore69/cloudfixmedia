import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import BookingTimer from "./components/BookingTimer";
import HighLight from "./components/HighLight";
import ProofInSlide from "./components/ProofInSlide";
import Brands from "./components/Brands";
import Testimonials from "./components/Testimonials";
import Tips from "./components/Tips";
import Calendly from "./components/Calendly";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <BookingTimer />
      <HighLight />
      <ProofInSlide />
      <Brands />
      <Testimonials />
      <Calendly />
      <Tips />
      <Faqs />
      <Footer />
    </>
  );
}
