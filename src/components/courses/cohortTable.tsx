// components/CohortTable.tsx
import React from "react";
import Image from "next/image";
import Delhi from "@/assets/NIHT-LOGO-black-2.png";

interface Cohort {
  campus: string;
  batchType: string;
  applicationDeadline: string;
  batchStarts: string;
  batchCapacity: string;
}

const cohorts: Cohort[] = [
  {
    campus: "Mumbai",
    batchType: "Weekday (Mon - Fri)",
    applicationDeadline: "Oct 14, 2025",
    batchStarts: "Nov 28, 2025",
    batchCapacity: "Only 50",
  },
  {
    campus: "Delhi",
    batchType: "Weekday (Mon - Fri)",
    applicationDeadline: "Oct 14, 2025",
    batchStarts: "Nov 29, 2025",
    batchCapacity: "Only 40",
  },
];

const campusIcons: { [key: string]: string } = {
  Mumbai: Delhi.src,
  Delhi: Delhi.src,
};

const CohortTable: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-blue-700 text-white text-center py-3 font-semibold text-lg rounded-t-lg">
        PG in Digital Marketing & Strategy 2025 Cohort Details
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block bg-white shadow-md rounded-b-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Campus
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Batch Type
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Application Deadline
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Batch Starts
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Batch Capacity
              </th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {cohorts.map((cohort, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 flex items-center gap-2">
                  <Image
                    src={campusIcons[cohort.campus]}
                    alt={cohort.campus}
                    width={24}
                    height={24}
                  />
                  <span className="text-gray-800 font-medium">{cohort.campus}</span>
                </td>
                <td className="px-6 py-4 text-gray-700">{cohort.batchType}</td>
                <td className="px-6 py-4 text-gray-700">{cohort.applicationDeadline}</td>
                <td className="px-6 py-4 text-gray-700">{cohort.batchStarts}</td>
                <td className="px-6 py-4">
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {cohort.batchCapacity}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
                    Apply Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Layout */}
      <div className="md:hidden mt-4 space-y-4">
        {cohorts.map((cohort, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col gap-2"
          >
            <div className="flex items-center gap-2">
              <Image
                src={campusIcons[cohort.campus]}
                alt={cohort.campus}
                width={24}
                height={24}
              />
              <span className="font-medium text-gray-800">{cohort.campus}</span>
            </div>
            <div className="text-gray-700">
              <span className="font-medium">Batch Type: </span>
              {cohort.batchType}
            </div>
            <div className="text-gray-700">
              <span className="font-medium">Application Deadline: </span>
              {cohort.applicationDeadline}
            </div>
            <div className="text-gray-700">
              <span className="font-medium">Batch Starts: </span>
              {cohort.batchStarts}
            </div>
            <div>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                {cohort.batchCapacity}
              </span>
            </div>
            <button className="mt-2 bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CohortTable;
