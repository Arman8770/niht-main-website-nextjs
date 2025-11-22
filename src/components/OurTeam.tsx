import { AnimatedTestimonials } from "./ui/animated-testimonial";
import { Button } from "./ui/button";


function OurTeam() {
    const Events = [
        {
            title: "The Truth About Viral Ads",
            date: "Sep 20, 2025",
            time: "4:00 PM - 6:00 PM",
            location: "Workhauz, Jaipur",
            registered: 118,
            mode: "Offline",
            src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "The Truth About Viral Ads",
            date: "Sep 20, 2025",
            time: "4:00 PM - 6:00 PM",
            location: "Workhauz, Jaipur",
            registered: 118,
            mode: "Offline",
            src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "The Truth About Viral Ads",
            date: "Sep 20, 2025",
            time: "4:00 PM - 6:00 PM",
            location: "Workhauz, Jaipur",
            registered: 118,
            mode: "Offline",
            src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "The Truth About Viral Ads",
            date: "Sep 20, 2025",
            time: "4:00 PM - 6:00 PM",
            location: "Workhauz, Jaipur",
            registered: 118,
            mode: "Offline",
            src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "The Truth About Viral Ads",
            date: "Sep 20, 2025",
            time: "4:00 PM - 6:00 PM",
            location: "Workhauz, Jaipur",
            registered: 118,
            mode: "Offline",
            src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];
    return (
        <section className="py-4 md:py-16">
            <div className="container bg-white rounded-xl mx-auto px-6  gap-8 items-center">
               
                {/* Left - OrbitingSkills (Static) */}
                <div className="">
                     <div className="text-center mb-12">
                    <a href="#voices">
                        <Button variant="outline" className="btn-shine mb-4 text-brand-accent border-brand-accent">
                            Our Team
                        </Button>
                    </a>
                    <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
                        Don’t Miss Out: Join Our Next Big Event
                    </h2>
                    <p className="text-m md:text-lg text-muted-foreground max-w-3xl mx-auto">
                        Experience learning, networking, and inspiration — right at your fingertips.
                    </p>
                </div>
                    <AnimatedTestimonials teams={Events} autoplay className="max-w-lg" />
                </div>
            </div>
        </section>
    )
}

export { OurTeam };