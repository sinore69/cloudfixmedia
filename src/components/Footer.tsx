import React from "react";

export default function Footer() {
    return (
      <footer className="bg-accent2 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">© 2025 CloudFixMedia. All Rights Reserved.</p>
          <div className="mt-4 space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
            <a href="mailto:cloudfixmedia@gmail.com" className="text-gray-400 hover:text-white">Contact Us</a>
          </div>
            <div className="mt-3 text-gray-400 hover:text-white">Email: admin@cloudfixmedia.com | Phone: +91 81001 10638</div>
            <div className="mt-3 text-gray-400 hover:text-white">HQ Address: New Town, Kolkata 700135</div>
        </div>
      </footer>
    );
  }
  