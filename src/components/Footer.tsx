"use client";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import { usePopup } from "./form/PopupProvider";
import NihtLogo from "@/assets/NIHT-LOGO-black-2.png";
import Nihtyr from "@/assets/20year.png";
import Image from "next/image";

const Footer = () => {
  const { openPopup } = usePopup();
  return (
    <section
      id="contact"
      className="pt-12 pb-6 lg:pt-16 lg:pb-8 bg-gradient-to-b from-blue-600 to-blue-800 relative overflow-hidden"
    >
      <footer>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            {/* Still Have Questions */}
            <div className="bg-white rounded-2xl p-8 shadow-medium">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-2 md:mb-6">
                  Still Have Questions?
                </h3>
                <p className="text-m md:text-lg text-muted-foreground">
                  Our admission counselors are here to help you make the best
                  decision for your career
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {/* Live Chat */}
                <div className="text-center bg-gradient-card rounded-lg p-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.52 3.48A11.92 11.92 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.08 1.5 5.79L0 24l6.29-1.49A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52ZM12 22c-1.9 0-3.68-.5-5.21-1.36l-.37-.22-3.73.88.9-3.63-.24-.38A9.946 9.946 0 0 1 2 12c0-5.52 4.48-10 10-10 2.66 0 5.15 1.04 7.03 2.93A9.933 9.933 0 0 1 22 12c0 5.52-4.48 10-10 10Z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Live Chat
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Chat with our counselors instantly
                  </p>
                  <a
                    href="https://wa.me/+919830269100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="cta" size="sm" className="w-full">
                      Start Chat
                    </Button>
                  </a>
                </div>

                {/* Call Us */}
                <div className="text-center bg-gradient-card rounded-lg p-4">
                  <div className="w-12 h-12 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-brand-secondary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Call Us</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Speak with our experts directly
                  </p>
                  <a href="tel:+919830269100">
                    <Button variant="cta" size="sm" className="w-full">
                      Callback
                    </Button>
                  </a>
                </div>

                {/* Email Us */}
                <div className="text-center bg-gradient-card rounded-lg p-4 col-span-2 md:col-span-1 justify-self-center">
                  <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-brand-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Email Us
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get detailed information via email
                  </p>
                  <Button
                    variant="cta"
                    onClick={() => openPopup()}
                    size="sm"
                    className="w-full"
                  >
                    Send Email
                  </Button>
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="bg-transparent text-white pt-8">
              <div
                className="max-w-6xl mx-auto px-6 
                  grid gap-8 
                  grid-cols-2 md:grid-cols-3
                  justify-items-center text-center"
              >

                {["Bhawanipore Campus", "Ultadanga Campus", "Jayanagar Campus"].map(
                  (campus, i) => (
                    <a
                      key={i}
                      onClick={() => openPopup()}
                      className={`
        text-white/80 text-sm hover:text-white 
        flex flex-col items-center gap-4 cursor-pointer
        ${i === 2 ? "col-span-2 md:col-span-1" : ""}
      `}
                    >
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                        <svg
                          width="28px"
                          height="30px"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.37892 10.2236L8 16L12.6211 10.2236C13.5137 9.10788 14 7.72154 14 6.29266V6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6V6.29266C2 7.72154 2.4863 9.10788 3.37892 10.2236ZM8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <h4 className="font-semibold">{campus} →</h4>
                    </a>
                  )
                )}

              </div>
            </div>

            {/* === Inline Links Section (same as image) === */}
            <div className="mt-10 text-left text-white/90 space-y-6 border-t border-white/20 pt-6">
              {/* Short Term Certifications */}
              <div>
                <h4 className="font-semibold text-lg mb-2 text-white">
                  Short Term Certifications
                </h4>
                <div className="text-sm text-gray-300 leading-relaxed">
                  {[
                    "All Digital Marketing Certifications",
                    "Social Media Marketing Course",
                    "SEO Course Online",
                    "Performance Marketing Course Online",
                    "Content Writing Course",
                    "E-Commerce Course",
                    "Website Development Course",
                    "Email Marketing Course",
                    "Instagram Marketing Course",
                    "Conversion Rate Optimisation Course",
                    "Interview Preparation Course",
                  ].map((item, idx, arr) => (
                    <span key={idx}>
                      <a href="#" className="hover:text-white cursor-pointer">
                        {item}
                      </a>
                      {idx !== arr.length - 1 && " | "}
                    </span>
                  ))}
                </div>
              </div>

              {/* Free Masterclasses */}
              <div>
                <h4 className="font-semibold text-lg mb-2 text-white">
                  Free Masterclasses
                </h4>
                <div className="text-sm text-gray-300 leading-relaxed">
                  {[
                    "Free Digital Marketing Courses Online",
                    "Fundamentals of Digital Marketing Course",
                    "Free Instagram Marketing Course",
                    "ChatGPT Course",
                    "Linkedin Masterclass",
                    "Meta Ads Course",
                  ].map((item, idx, arr) => (
                    <span key={idx}>
                      <a href="#" className="hover:text-white cursor-pointer">
                        {item}
                      </a>
                      {idx !== arr.length - 1 && " | "}
                    </span>
                  ))}
                </div>
              </div>

              {/* Digital Marketing Courses Across The World */}
              <div>
                <h4 className="font-semibold text-lg mb-2 text-white">
                  Digital Marketing Courses Across The World
                </h4>
                <div className="text-sm text-gray-300 leading-relaxed">
                  {[
                    "Mumbai",
                    "Delhi",
                    "Nepal",
                    "Dubai",
                    "Bangalore",
                    "Pune",
                    "Hyderabad",
                    "Kolkata",
                    "Jaipur",
                    "Ahmedabad",
                    "Chandigarh",
                    "Chennai",
                    "Kochi",
                    "Lucknow",
                    "Surat",
                    "Indore",
                    "Nagpur",
                    "Coimbatore",
                    "Noida",
                    "Gurgaon",
                    "Dehradun",
                    "Thrissur",
                    "Faridabad",
                    "Patna",
                    "Thane",
                    "Nashik",
                    "Udaipur",
                    "Navi Mumbai",
                    "South Delhi",
                    "Dadar",
                    "Andheri",
                    "Meerut",
                    "Borivali",
                    "Vashi",
                    "Kalyan",
                    "Panvel",
                    "Mulund",
                    "Virar",
                    "Bandra",
                    "Rohini",
                    "Kozhikode",
                  ].map((city, idx, arr) => (
                    <span key={idx}>
                      <a href="#" className="hover:text-white cursor-pointer">
                        Digital Marketing Courses In {city}
                      </a>
                      {idx !== arr.length - 1 && " | "}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-8 pt-8 border-t border-white/20 flex items-center justify-between flex-wrap gap-4">
              <Image
                src={NihtLogo}
                alt="Left Logo"
                className="w-auto h-16 hidden md:block"
              />
              <div className="text-center flex-1">
                <p className="text-white text-sm mb-2">
                  ⭐⭐⭐⭐⭐ Trusted by 52,234+ Students • Google Partner
                </p>
                <p className="text-white text-sm font-semibold btn-shine mb-2 rounded-full ">
                  100% Secure Payment • EMI Facility Available
                </p>
                <p className="text-white text-[7px] pt-2 md:px-4">
                  **All trademarks, logos and brand names are the property of
                  their respective owners. The usage is just symbolic and these
                  brands are not associated nor do they endorse this program in
                  any manner.
                </p>
              </div>
              <Image
                src={Nihtyr}
                alt="Right Logo"
                className="w-auto h-20 hidden md:block"
              />
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
