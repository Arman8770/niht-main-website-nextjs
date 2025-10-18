import { courses } from "@/app/data/courses";
import HeroImage from "@/assets/niht-banner-image-mudit-sir.webp";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface Props {
  slug: string;
}

export default function CourseBanner({ slug }: Props) {
  const course = courses.find((c) => c.slug === slug);

  if (!course) return <p>Course not found</p>;

  return (
    <section className="relative mt-16 md:mt-30 bg-gray-0 text-white">
      {course.image && (
        <div className="absolute inset-0">
          <Image
            src={HeroImage}
            alt={course.title}
            width={1920}
            height={600}
            priority
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
        <p className="text-lg mb-6">{course.details}</p>
        <div className="flex justify-center">
          <Button
            variant="cta"
            size="lg"
            className="px-8 py-4 flex items-center justify-center"
          >
            <CheckCircle className="w-5 h-5 mr-2" />
            Enroll Now
          </Button>
        </div>
      </div>
    </section>
  );
}
