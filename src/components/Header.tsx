"use client";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState, FC } from "react";
import { Button } from "@/components/ui/button";
import FloatingButtons from "./whatsapp/whatsappfloat";
import { usePopup } from "./form/PopupProvider";
import NIHTLogo from "@/assets/niht-digital-marketing-logo.png";
import NIHTYR from "@/assets/20year.png";
import Link from "next/link";

const menuData = [
  {
    title: "Courses",
    items: [
      { label: "CPDM", href: "/course/cpdm" },
      { label: "PPDM", href: "/course/ppdm" },
      { label: "MPDM", href: "/course/mpdm" },
      { label: "AI Course", href: "/course/ai" },
      { label: "Free Master Class", href: "/course/master-class" },
    ],
  },
  {
    title: "Experiential Learning",
    items: [
      { label: "Capstone Projects", href: "/learning/capstone-projects" },
      { label: "Podcasting", href: "/learning/podcasting" },
      { label: "In-House Studio", href: "/learning/studio" },
      { label: "Photoshoots", href: "/learning/photoshoots" },
      { label: "Videography", href: "/learning/videography" },
      { label: "Super Saturday", href: "/learning/super-saturday" },
      { label: "Bootcamps?", href: "/learning/bootcamps" },
      { label: "InterviewSmart", href: "/learning/interview-smart" },
    ],
  },
  {
    title: "Student Center",
    items: [
      { label: "Placements Reports", href: "/student/placements" },
      { label: "Trainers", href: "/student/trainers" },
      { label: "Alumni", href: "/student/alumni" },
      { label: "Why Choose NIHT", href: "/student/why-niht" },
      { label: "Student Testimonials", href: "/student/testimonials" },
      { label: "Campus Life", href: "/student/campus-life" },
    ],
  },
  {
    title: "More",
    items: [
      { label: "Hire from us", href: "/more/hire" },
      { label: "Work with us", href: "/more/work" },
      { label: "Student Internship Form", href: "/more/internship-form" },
    ],
  },
];

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const { openPopup } = usePopup();

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-1000 bg-white backdrop-blur-md shadow-sm transition-all duration-300 py-2">
        {/* News Ticker */}
        <div className="w-full text-[#2b2f3b] text-sm md:text-base font-medium text-center overflow-hidden whitespace-nowrap p-0.5 bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-soft hover:shadow-medium transition-shadow duration-300">
          <div className="flex animate-marquee-1">
            <span className="mr-8">⭐⭐⭐⭐⭐ Trusted by 52,234+ Students • Google Partner</span>
            <span className="mr-8">⭐⭐⭐⭐⭐ Trusted by 52,234+ Students • Google Partner</span>
            <span className="mr-8">⭐⭐⭐⭐⭐ Trusted by 52,234+ Students • Google Partner</span>

            <span className="mr-8">⭐⭐⭐⭐⭐ Trusted by 52,234+ Students • Google Partner</span>
            <span className="mr-8">⭐⭐⭐⭐⭐ Trusted by 52,234+ Students • Google Partner</span>
            <span className="mr-8">⭐⭐⭐⭐⭐ Trusted by 52,234+ Students • Google Partner</span>

          </div>
        </div>

        <div className="container mx-auto px-4 flex justify-between items-center lg:h-22">
          {/* Logo */}
          {NIHTLogo && NIHTYR && (
            <div className="flex items-center justify-start gap-2">
              <Link href="/" className="flex items-center">
                <Image src={NIHTLogo} alt="NIHT Logo" className="object-contain w-auto h-12 lg:h-14" />
                <Image src={NIHTYR} alt="NIHT Year" className="object-contain w-auto h-16 lg:h-20" />
              </Link>
            </div>
          )}

          {/* Desktop Nav */}
<nav className="hidden md:flex items-center gap-8">
  {menuData.map((menu) => (
    <div
      key={menu.title}
      className="relative"
      onMouseEnter={() => setDesktopDropdown(menu.title)}
      onMouseLeave={() => setDesktopDropdown(null)}
    >
      {/* Button */}
      <button className="flex items-center gap-1 text-gray-700 hover:text-brand-primary">
        {menu.title} <ChevronDown size={16} />
      </button>

      {/* Dropdown */}
      <div
        className={`absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50 transition-all duration-300 ${
          desktopDropdown === menu.title ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="space-y-2 text-sm">
          {menu.items.map((item, idx) => (
            <li key={idx}>
              <Link
                href={item.href}
                className="block px-2 py-1 hover:bg-gray-100 rounded"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ))}
  <Button onClick={openPopup} variant="cta" size="sm">
    Enroll Now
  </Button>
</nav>




          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 transition-transform duration-300"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={`md:hidden bg-white/90 backdrop-blur-md shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <nav className="flex flex-col items-start py-4 px-6 space-y-4">
            {menuData.map((menu) => (
              <div key={menu.title} className="w-full">
                <button
                  onClick={() =>
                    setMobileDropdown(mobileDropdown === menu.title ? null : menu.title)
                  }
                  className="flex justify-between items-center w-full text-gray-700 hover:text-brand-primary py-2"
                >
                  {menu.title} <ChevronDown size={16} />
                </button>
                {mobileDropdown === menu.title && (
                  <ul className="pl-4 space-y-2 text-sm">
                    {menu.items.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          href={item.href}
                          className="block px-2 py-1 hover:bg-gray-100 rounded"
                          onClick={() => setIsOpen(false)} // closes mobile menu on click
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <Button onClick={openPopup} variant="cta" size="sm">
              Enroll Now
            </Button>
          </nav>
        </div>
      </header>

      <FloatingButtons />
    </>
  );
};

export default Header;
