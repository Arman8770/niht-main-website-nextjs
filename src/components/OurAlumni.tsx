"use client";

import alumni from "@/assets/alumni/Ishika Gupta.webp";
import alumni2 from "@/assets/alumni/Layer 10.webp";
import alumni3 from "@/assets/alumni/Layer 12.webp";
import alumni4 from "@/assets/alumni/Layer 3.webp";
import alumni5 from "@/assets/alumni/Layer 5.webp";
import alumni6 from "@/assets/alumni/Layer 8.webp";
import alumni7 from "@/assets/alumni/Payel Sadhya.webp";
import alumni8 from "@/assets/alumni/Shreya Hazra.webp";
import alumni9 from "@/assets/alumni/Layer 6.webp";
import alumni10 from "@/assets/alumni/Smit Das.webp";
import alumni11 from "@/assets/alumni/Tanisha Gupta.webp";
import alumni12 from "@/assets/alumni/cropped-logo-300x93.webp";
import Image from "next/image";

const OurAlumni = () => {
  const alumnis = [
    { person: alumni9, company: "" },
    { person: alumni7, company: "" },
    { person: alumni, company: "" },
    { person: alumni2, company: "" },
    { person: alumni3, company: "" },
    { person: alumni4, company: "" },
    { person: alumni5, company: "" },
    { person: alumni6, company: "" },
    { person: alumni8, company: "" },
    { person: alumni10, company: "" },
    { person: alumni11, company: "" },
    { person: alumni12, company: "" },
  ];

  return (
    <section id="alumni" className="py-8 bg-[#f3f3f3]">
      <div className="container mx-auto px-6 md:px-0">
        <div className="bg-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 via-brand-secondary/10 to-brand-primary/10 opacity-30 blur-3xl" />

          <div className="relative text-center mb-8">
            <h3 className="text-2xl md:text-4xl  font-bold text-foreground mb-2 md:mb-6">
              Our Alumni
            </h3>
            <p className="text-m md:text-lg text-muted-foreground max-w-3xl mx-auto">
             Our students have built strong careers with global leading brands. Their journeys show how real‑world training, live projects and a strong portfolio can turn practical skills into genuine job opportunities.
            </p>
          </div>

          {/* Alumni Showcase */}
          <div className="overflow-hidden relative">
            <div className="flex gap-6 items-center animate-marquee">
              {[...Array(5)].flatMap((_, i) =>
                alumnis.map((alumni, idx) => (
                  <div key={`${i}-${idx}`} className="flex-shrink-0 w-44">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image src={alumni.person} alt="Alumni" fill className="object-contain" />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAlumni;
