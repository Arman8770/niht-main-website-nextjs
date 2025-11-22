"use client";

import alumni from "@/assets/alumni/gentalman.png";

import Google from "@/assets/Social_Icons/Google.webp";
import Twitter from "@/assets/Social_Icons/twitter.png";
import LinkedIn from "@/assets/Social_Icons/linkedin.webp";
import MicrosoftBing from "@/assets/Social_Icons/Bing.png";
import HubSpot from "@/assets/Social_Icons/hubspot.png";
import SEMrush from "@/assets/Social_Icons/Semrush.png";
import Unbounce from "@/assets/Social_Icons/Unbounce.png";
import YouTube from "@/assets/Social_Icons/youtube.png";
import Image from "next/image";

const OurAlumni = () => {
  const alumnis = [
    { person: alumni, company: Google },
    { person: alumni, company: Twitter },
    { person: alumni, company: LinkedIn },
    { person: alumni, company: MicrosoftBing },
    { person: alumni, company: HubSpot },
    { person: alumni, company: SEMrush },
    { person: alumni, company: Unbounce },
    { person: alumni, company: YouTube },
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
              We are proud of our alumni who work with top global brands.
              Here are some of their amazing journeys.
            </p>
          </div>

          {/* Alumni Showcase */}
          <div className="overflow-hidden relative">
            {/* marquee wrapper: flex with centered items, nowrap */}
            <div className="flex gap-6 items-center animate-marquee">
              {alumnis.concat(alumnis).map((alumni, index) => (
                // Fixed width, no shrink so aspect-square is reliable
                <div key={index} className="flex-shrink-0 w-44">
                  {/* card: square, relative for Image fill */}
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
                    {/* PERSON IMAGE — 1:1 PERFECT SQUARE */}
                    <Image src={alumni.person} alt="Alumni" fill className="object-cover" />

                    {/* SMALL COMPANY LOGO — 12x12-14x14 px */}
                    <div className="absolute top-2 right-2 bg-white p-1 rounded-md shadow flex items-center justify-center">
                      <Image
                        src={alumni.company}
                        alt="Company"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurAlumni;
