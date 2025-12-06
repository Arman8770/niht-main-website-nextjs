"use client";

import React, { useState, useEffect } from "react";
import {
  Clock,
  MapPin,
  CalendarDays,
  Hourglass,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import DELHI_ICON_SRC from "@/assets/NIHT-LOGO-black-2.png";
import { Button } from "../ui/button";
import { usePopup } from "../form/PopupProvider";

// --- DATA TYPES & CONTENT ---

interface Cohort {
  campus: "Bhowanipore" | "Ultadanga";
  batchType: string;
  applicationDeadline: string;
  batchStarts: string;
  originalSeats: number;
  capacity: number;
}

// Extended interface for state management
interface DynamicCohort extends Cohort {
  seatsLeft: number;
}

// NOTE: Dates here are placeholders now, they will be overwritten by the useEffect logic
const cohortsData: Cohort[] = [
  {
    campus: "Bhowanipore",
    batchType: "(Mon - Thu) / (Sat - Sun)",
    applicationDeadline: "", // Will be calculated dynamically
    batchStarts: "",       // Will be calculated dynamically
    originalSeats: 6,
    capacity: 100,
  },
  {
    campus: "Ultadanga",
    batchType: "(Mon - Thu) / (Sat - Sun)",
    applicationDeadline: "", // Will be calculated dynamically
    batchStarts: "",       // Will be calculated dynamically
    originalSeats: 5,
    capacity: 120,
  },
];

const campusIcons: Record<string, string> = {
  Bhowanipore: DELHI_ICON_SRC.src,
  Ultadanga: DELHI_ICON_SRC.src,
};

const CohortTable: React.FC = () => {
  const { openPopup } = usePopup();

  // Initialize with placeholders
  const [dynamicCohorts, setDynamicCohorts] = useState<DynamicCohort[]>(
    cohortsData.map((c) => ({ ...c, seatsLeft: c.originalSeats }))
  );

  const [isClient, setIsClient] = useState(false);

  // LOGIC: Daily Seat Reduction & Date Calculation
  useEffect(() => {
    setIsClient(true);

    // --- 1. DATE CALCULATION LOGIC ---
    const todayObj = new Date();
    
    // Helper to add days and format: "Jan 02, 2026"
    const getFutureDateStr = (daysToAdd: number) => {
      const futureDate = new Date(todayObj);
      futureDate.setDate(todayObj.getDate() + daysToAdd);
      
      return futureDate.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      });
    };

    // Calculate dynamic dates based on current day
    const calculatedDeadline = getFutureDateStr(5);      // +5 Days
    const  calculatedBatchStart= getFutureDateStr(20);       // +20 Days

    // --- 2. SEAT LOGIC ---
    const todayDateString = todayObj.toDateString(); // unique per day
    const STORAGE_KEY = "dynamicCohortsData";
    const DATE_KEY = "lastUpdatedDate";

    // Load stored seats if exists
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    const lastUpdatedDate = localStorage.getItem(DATE_KEY);

    let processedCohorts: DynamicCohort[] = [];

    if (!savedData) {
      // FIRST TIME — Use original seats
      processedCohorts = cohortsData.map((c) => ({
        ...c,
        seatsLeft: c.originalSeats,
      }));
      
      // Save for next time
      localStorage.setItem(STORAGE_KEY, JSON.stringify(processedCohorts));
      localStorage.setItem(DATE_KEY, todayDateString);
    } 
    else if (lastUpdatedDate === todayDateString) {
      // SAME DAY — Use saved data
      processedCohorts = savedData;
    } 
    else {
      // NEW DAY → Reduce seats
      processedCohorts = savedData.map((c: DynamicCohort) => {
        let updatedSeats = c.seatsLeft - 1;
        if (updatedSeats <= 2) {
          updatedSeats = c.originalSeats; // Reset if too low
        }
        return { ...c, seatsLeft: updatedSeats };
      });

      // Update storage
      localStorage.setItem(STORAGE_KEY, JSON.stringify(processedCohorts));
      localStorage.setItem(DATE_KEY, todayDateString);
    }

    // --- 3. MERGE DATES INTO DATA ---
    // We override the stored dates with the fresh calculated dates
    const finalCohorts = processedCohorts.map(cohort => ({
      ...cohort,
      batchStarts: calculatedBatchStart,
      applicationDeadline: calculatedDeadline
    }));

    setDynamicCohorts(finalCohorts);

  }, []);

  // Helper to calculate percentage
  const getFillPercentage = (left: number, capacity: number) => {
    const filled = capacity - left;
    return Math.round((filled / capacity) * 100);
  };

  return (
    <div className="relative py-2 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* --- CUSTOM ANIMATIONS --- */}
      <style jsx global>{`
        @keyframes pop-scale {
          0% { transform: scale(1); }
          25% { transform: scale(1.1); filter: brightness(1.1); }
          50% { transform: scale(1); }
          100% { transform: scale(1); }
        }

        @keyframes damru-shake {
          0% { transform: rotate(0deg); }
          15% { transform: rotate(-12deg); }
          30% { transform: rotate(12deg); }
          45% { transform: rotate(-6deg); }
          60% { transform: rotate(6deg); }
          75% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }

        .animate-pop-interval {
          animation: pop-scale 1s ease-in-out infinite;
          transform-origin: left center;
          display: inline-flex;
        }

        .animate-damru-interval {
          animation: damru-shake 1s ease-in-out infinite;
          transform-origin: center;
        }
      `}</style>

      <div className="container mx-auto relative">
        <div className="text-center mb-8 md:mb-16 space-y-4">
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            AI-Powered Digital Marketing & Strategy Program Guide
          </h2>
        </div>

        {/* --- DESKTOP TABLE VIEW --- */}
        <div className="hidden lg:block space-y-4 bg-blue-50 p-4 rounded-xl">
          {/* Table Headers */}
          <div className="grid grid-cols-12 gap-6 px-8 text-sm font-bold text-white uppercase tracking-wider mb-2 py-2 bg-blue-700 rounded-full items-center">
            <div className="col-span-3">Campus</div>
            <div className="col-span-3">Batch Type</div>
            <div className="col-span-2">Application Deadline</div>
            <div className="col-span-2">Batch Starts</div>
            <div className="col-span-2 text-right">Batch Capacity</div>
          </div>

          {dynamicCohorts.map((cohort, idx) => {
            const seatsToDisplay = isClient ? cohort.seatsLeft : cohort.originalSeats;
            const percentage = getFillPercentage(seatsToDisplay, cohort.capacity);

            return (
              <div
                key={idx}
                className="group relative grid grid-cols-12 gap-6 items-center bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Campus */}
                <div className="col-span-3 flex items-center gap-4">
                  <div className="relative h-14 w-14 bg-slate-50 rounded-xl flex items-center justify-center p-2 border border-gray-100 group-hover:bg-blue-50 transition-colors">
                    <img
                      src={campusIcons[cohort.campus]}
                      alt={cohort.campus}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {cohort.campus}
                    </h3>
                    <div className="flex items-center gap-1 text-slate-500 text-xs font-medium mt-1">
                      <MapPin className="w-3 h-3" />
                      <span>On-site/Remote</span>
                    </div>
                  </div>
                </div>

                {/* Batch Type */}
                <div className="col-span-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span className="font-semibold text-slate-700 text-sm">Schedule</span>
                  </div>
                  <p className="text-sm text-slate-500 pl-6">
                    {cohort.batchType}
                  </p>
                </div>

                {/* Deadline */}
                <div className="col-span-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-slate-400 font-bold uppercase">Ends On</span>
                    <span className="text-sm font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded w-fit border border-red-100">
                      {isClient ? cohort.applicationDeadline : "Loading..."}
                    </span>
                  </div>
                </div>

                {/* Starts */}
                <div className="col-span-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-slate-400 font-bold uppercase">Starts</span>
                    <div className="flex items-center gap-1.5">
                      <CalendarDays className="w-4 h-4 text-slate-400" />
                      <span className="font-semibold text-slate-800 text-sm">
                         {isClient ? cohort.batchStarts : "Loading..."}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Availability & Action */}
                <div className="col-span-2 flex flex-col gap-3">

                  {/* Progress Section */}
                  <div className="w-full">
                    <div className="flex justify-between items-center mb-1.5 whitespace-nowrap">
                      <span className="animate-pop-interval text-red-500 font-bold text-sm flex items-center gap-1.5">
                        <Hourglass className="animate-damru-interval w-3.5 h-3.5" />
                        Only {seatsToDisplay} seats Left
                      </span>

                    </div>

                    {/* Progress Bar Track */}
                    <div className="flex items-center gap-3 py-1">

                      <div className="h-2 flex-1 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-red-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>

                      <span className="text-xs font-bold text-slate-400 whitespace-nowrap">
                        {percentage}% Full
                      </span>

                    </div>
                  </div>

                  <Button
                    variant="cta"
                    size="biglg"
                    onClick={openPopup}
                    className="w-full text-white font-semibold flex items-center justify-center gap-2 shadow-md transition-all h-10 rounded-lg text-sm"
                  >
                    Enroll Now
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- MOBILE CARD VIEW --- */}
        <div className="lg:hidden space-y-6">
          {dynamicCohorts.map((cohort, idx) => {
            const seatsToDisplay = isClient ? cohort.seatsLeft : cohort.originalSeats;
            const percentage = getFillPercentage(seatsToDisplay, cohort.capacity);

            return (
              <div
                key={idx}
                className="bg-white rounded-[2rem] p-6 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-2xl -z-0 translate-x-10 -translate-y-10"></div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center p-2">
                        <img
                          src={campusIcons[cohort.campus]}
                          alt={cohort.campus}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">
                          {cohort.campus}
                        </h3>
                        <div className="flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-md mt-1 w-fit">
                          <CheckCircle2 className="w-3 h-3" /> On-site/Remote
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 bg-slate-50/80 p-4 rounded-2xl border border-slate-100 mb-6">
                    <div className="flex justify-between items-center border-b border-slate-200/60 pb-3">
                      <span className="text-xs text-slate-500 font-bold uppercase tracking-wide">
                        Batch Type
                      </span>
                      <span className="text-sm font-bold text-slate-800 text-right">
                        {cohort.batchType}
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-200/60 pb-3">
                      <span className="text-xs text-slate-500 font-bold uppercase tracking-wide">
                        Batch Starts
                      </span>
                      <span className="text-sm font-bold text-slate-800">
                         {isClient ? cohort.batchStarts : "Loading..."}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-500 font-bold uppercase tracking-wide">
                        Application Deadline
                      </span>
                      <span className="text-sm font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">
                         {isClient ? cohort.applicationDeadline : "Loading..."}
                      </span>
                    </div>
                  </div>

                  {/* Mobile Availability Section */}
                  <div className="space-y-4">
                    <div className="w-full">
                      <div className="flex justify-between items-center mb-2 whitespace-nowrap">
                        <span className="animate-pop-interval text-red-500 font-bold text-sm flex items-center gap-1.5">
                          <Hourglass className="animate-damru-interval w-3.5 h-3.5" />
                          Only {seatsToDisplay} seats Left
                        </span>

                        <span className="text-xs font-bold text-slate-400 ml-2">
                          {percentage}% Full
                        </span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-red-500 rounded-full"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>

                    <Button
                      onClick={openPopup}
                      variant="cta"
                      size="biglg"
                      className="w-full text-white py-6 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg transition-all"
                    >
                      Enroll Now
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CohortTable;