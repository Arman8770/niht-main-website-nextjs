import { Phone } from "lucide-react";
import React from "react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">
      {/* Call Button */}
      <a
        href="tel:+919830269100"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all duration-300 floating"
        title="Call Us"
      >
        <Phone className="h-6 w-6" />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+919830269100"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all duration-300 floating"
        title="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.83 11.83 0 0012 0C5.37 0 0 5.37 0 12c0 2.1.55 4.08 1.52 5.77L0 24l6.34-1.58A11.83 11.83 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.48-8.52zm-8.52 18c-2.1 0-4.1-.55-5.77-1.52l-.41-.24-3.77.94.95-3.7-.25-.41A9.952 9.952 0 012 12c0-5.52 4.48-10 10-10 2.66 0 5.17 1.04 7.07 2.93S22 9.34 22 12c0 5.52-4.48 10-10 10zm5.17-7.28c-.28-.14-1.64-.81-1.9-.9-.26-.09-.45-.14-.64.14s-.73.9-.89 1.09c-.16.18-.32.21-.6.07-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.39-1.65-1.55-1.92-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.47.09-.18.05-.35-.03-.49-.09-.14-.64-1.54-.88-2.12-.23-.56-.46-.48-.64-.49-.16-.01-.35-.01-.54-.01-.18 0-.47.07-.72.35s-.94.92-.94 2.24c0 1.31.96 2.58 1.1 2.76.14.18 1.9 2.92 4.6 4.1.64.28 1.14.45 1.53.57.64.2 1.22.17 1.68.1.51-.08 1.64-.67 1.87-1.31.23-.64.23-1.19.16-1.31-.07-.12-.26-.18-.54-.32z" />
        </svg>
        
      </a>
    </div>
  );
};

export default FloatingButtons;
