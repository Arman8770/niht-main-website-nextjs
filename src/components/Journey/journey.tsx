import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'

const Journey = () => {
    return (
        <>
            {/* Career Journey Section */}
            <section id='procedure' className="py-8 md:py-16 bg-gradient-to-br from-[#f3f3f3] to-brand-gray-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-6 md:mb-12">
                        <h2 className="text-2xl md:text-4xl font-bold mb-[7px] md:mb-4">
                            Level Up Your Career
                        </h2>
                        <p className="text-m md:text-lg text-muted-foreground mb-[7px] md:mb-4">
                            A simple 3-step path to grow skills and land your dream job
                        </p>
                        <span className="block w-16 h-1 bg-primary mx-auto rounded"></span>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Start with Free Counseling",
                                description: "Discuss your goals with our experts and get a personalized roadmap for your career in digital marketing.",
                                image: "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg"
                            },
                            {
                                step: "02",
                                title: "Hands-on Training",
                                description: "Learn SEO, Social Media, Ads, Analytics & more with live projects guided by industry professionals.",
                                image: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg"
                            },
                            {
                                step: "03",
                                title: "Career Growth",
                                description: "Get certifications, build your portfolio, and land your first job or promotion in digital marketing.",
                                image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
                            }
                        ].map((step, index) => (
                            <div key={index} className="relative group">
                                <div className="text-center">
                                    <div className="relative mx-auto w-64 h-48 mb-6 rounded-2xl overflow-hidden shadow-premium group-hover:shadow-glow transition-all duration-500 group-hover:scale-105">
                                        <Image
                                            src={step.image}
                                            alt={`Step ${step.step}: ${step.title}`}
                                            width={256} // ✅ Required width
                                            height={192} // ✅ Required height
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                                        <div className="absolute top-4 left-4">
                                            <Badge variant="secondary" className="text-lg font-bold px-3 py-1 backdrop-blur-sm bg-white/90 shadow-soft">
                                                {step.step}
                                            </Badge>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">{step.title}</h3>
                                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                                </div>

                                {index < 2 && (
                                    <div className="hidden lg:block absolute top-24 -right-4 z-10">
                                        <div className="bg-blue-100 rounded-full p-2 backdrop-blur-sm animate-pulse">
                                            <ArrowRight className="h-6 w-6 text-blue-600" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Journey
