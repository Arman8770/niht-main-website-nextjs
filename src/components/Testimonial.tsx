import React from "react";
import { CircularTestimonials } from '@/components/ui/circular-testimonials';
import { Button } from "./ui/button";

const testimonials = [
  {
    quote:
      "I was impressed by the food! And I could really tell that they use high-quality ingredients. The staff was friendly and attentive. I'll definitely be back for more!",
    name: "Tamar Mendelson",
    designation: "Restaurant Critic",
    src:
      "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "This place exceeded all expectations! The atmosphere is inviting, and the staff truly goes above and beyond. I'll keep returning for more exceptional dining experience.",
    name: "Joe Charlescraft",
    designation: "Frequent Visitor",
    src:
      "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
  },
  {
    quote:
      "Shining Yam is a hidden gem! The impeccable service and overall attention to detail created a memorable experience. I highly recommend it!",
    name: "Martina Edelweist",
    designation: "Satisfied Customer",
    src:
      "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
  },
];

export const Testimonials = () => (
  <section>
    {/* Light testimonials section */}
    {/* <div className="bg-[#f7f7fa] p-20 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
      <div
        className="items-center justify-center relative flex"
        style={{ maxWidth: "1456px" }}
      >
        <CircularTestimonials
          testimonials={testimonials}
          autoplay={true}
          colors={{
            name: "#0a0a0a",
            designation: "#454545",
            testimony: "#171717",
            arrowBackground: "#141414",
            arrowForeground: "#f1f1f7",
            arrowHoverBackground: "#00A6FB",
          }}
          fontSizes={{
            name: "28px",
            designation: "20px",
            quote: "20px",
          }}
        />
      </div>
    </div> */}

    {/* Dark testimonials section */}
    
    <div className="bg-blue-800 py-12 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
      <div className=" rounded-xl ">
            <div className="text-center mb-8">
                {/* <a href="#voices">
                    <Button variant="outline" className="btn-shine mb-4 text-brand-accent border-brand-accent">
                        Testimonial
                    </Button>
                </a> */}
                <h2 className="text-2xl md:text-4xl text-white font-bold text-foreground mb-2">
                    Testimonial
                </h2>
                <p className="text-m md:text-lg text-gray-300 max-w-3xl mx-auto">
                    Experience learning, networking, and inspiration — right at your fingertips.
                </p>
            </div>
        </div>
      <div
        className="items-center justify-center relative flex"
        style={{ maxWidth: "1024px" }}
      >
        <CircularTestimonials
          testimonials={testimonials}
          autoplay={true}
          colors={{
            name: "#f7f7ff",
            designation: "#e1e1e1",
            testimony: "#f1f1f7",
            arrowBackground: "#0582CA",
            arrowForeground: "#141414",
            arrowHoverBackground: "#f7f7ff",
          }}
          fontSizes={{
            name: "28px",
            designation: "20px",
            quote: "20px",
          }}
        />
      </div>
    </div>
  </section>
);
