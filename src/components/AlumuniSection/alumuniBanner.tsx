import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";

function AlumuniHeroSection() {
  return (
    <section className="overflow-hidden pt-16">
      <div className="w-full py-16 md:py-32 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            
            {/* Left Content */}
            <div className="flex flex-col gap-6">
              

              <h1 className="text-4xl md:text-6xl leading-tight tracking-tight font-medium">
                This is the start of something!
              </h1>

              <p className="text-lg md:text-xl tracking-tight text-muted-foreground max-w-md">
                Managing a small business today is already tough. Avoid further
                complications by ditching outdated, tedious trade methods. Our
                goal is to streamline SMB trade, making it easier and faster than ever.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-4" variant="outline">
                  Jump on a call <PhoneCall className="w-4 h-4" />
                </Button>
                <Button size="lg" className="gap-4">
                  Sign up here <MoveRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Right Image Grid */}
            <div className="grid grid-cols-2 md:gap-8 gap-4">
              <div className="bg-muted rounded-md aspect-square w-full"></div>
              <div className="bg-muted rounded-md row-span-2 w-full h-full"></div>
              <div className="bg-muted rounded-md aspect-square w-full"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export { AlumuniHeroSection };
