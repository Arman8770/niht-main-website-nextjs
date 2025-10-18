// app/course/[slug]/page.tsx
import { courses } from "../../data/courses";

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export default function CourseDetail({ params }: { params: { slug: string } }) {
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) return <p>Course not found</p>;

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.details}</p>
    </div>
  );
}
