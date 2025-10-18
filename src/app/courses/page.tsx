import Link from "next/link";
import { courses } from "../data/courses";

export default function CourseList() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Courses</h1>
      <div className="grid grid-cols-2 gap-6">
        {courses.map((course) => (
          <div key={course.slug} className="border p-4 rounded shadow">
            <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
            <h2 className="text-xl font-semibold mt-2">{course.title}</h2>
            <p className="text-gray-600">{course.description}</p>
            <Link href={`/course/${course.slug}`}>
              <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
