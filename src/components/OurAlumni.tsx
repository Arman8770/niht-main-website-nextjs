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
    <section
      id="why-niht"
      className="py-16 bg-[#f3f3f3]"
    >
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-3xl p-10 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 via-brand-secondary/10 to-brand-primary/10 opacity-30 blur-3xl" />

          <div className="relative text-center mb-12">
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
            <div className="flex animate-marquee gap-10">
              {alumnis.concat(alumnis).map((alumni, index) => (
                <div key={index} className="book-wrapper min-w-[260px]">
                  <div className="book">
                    {/* Alumni Photo */}
                    <Image
                      src={alumni.person}
                      alt="Alumni"
                      className="w-full h-full object-cover"
                    />

                    {/* Company Logo in top-right corner */}
                    <div className="book-logo">
                      <Image
                        src={alumni.company}
                        alt="Company"
                        className="w-full h-full object-contain"
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
