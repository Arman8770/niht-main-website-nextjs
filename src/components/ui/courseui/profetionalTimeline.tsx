"use client";

import React, { memo, useCallback, useState } from "react";
import {
  Briefcase,
  BookOpen,
  FileText,
  Clock,
  GraduationCap,
  Code,
  Palette,
} from "lucide-react";

// Badge component
const Badge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span
    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary ${className}`}
  >
    {children}
  </span>
);

// Types
export interface TimelineItemData {
  id: string;
  title: string;
  type: string;
  duration: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  responsibilities: string[];
  skills: string[];
}

type ExpandMode = "multi" | "single";

interface ProfessionalTimelineProps {
  data: TimelineItemData[];
  defaultExpandedIds?: string[];
  expandMode?: ExpandMode;
}

interface TimelineItemProps {
  item: TimelineItemData;
  expanded: boolean;
  onToggle: (id: string) => void;
  index: number;
}

// Timeline Item Component
const TimelineItem = memo(({ item, expanded, onToggle, index }: TimelineItemProps) => {
  const Icon = item.icon;
  return (
    <div className="relative mb-8 last:mb-0 pl-6 border-l border-border">
      <div
        className="absolute left-0 top-2.5 w-4 h-4 -translate-x-1/2 rounded-full border-2 border-primary bg-background"
        aria-hidden="true"
      />
      <div className="p-4 rounded-lg border bg-card hover:shadow-lg transition-shadow duration-300">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => onToggle(item.id)}
        >
          <div className="flex items-center gap-2">
            <Icon className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">{item.title}</h3>
          </div>
          <Badge>{item.type}</Badge>
        </div>

        <p className="text-muted-foreground text-sm flex items-center gap-1 mt-1">
          <Clock className="w-4 h-4" /> {item.duration}
        </p>

        {expanded && (
          <div className="mt-4 space-y-3 animate-fadeIn">
            <div>
              <h4 className="font-medium mb-1">Responsibilities:</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground">
                {item.responsibilities.map((res, i) => (
                  <li key={i}>{res}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-1">Skills Gained:</h4>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, i) => (
                  <Badge key={i}>{skill}</Badge>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

TimelineItem.displayName = "TimelineItem";

// Professional Timeline Component
export function ProfessionalTimeline({
  data,
  defaultExpandedIds,
  expandMode = "multi",
}: ProfessionalTimelineProps) {
  const initial = defaultExpandedIds ?? data.map((item) => item.id);
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set(initial));

  const onToggle = useCallback(
    (id: string) => {
      setExpanded((prev) => {
        const next = new Set(prev);
        if (expandMode === "single") {
          return prev.has(id) ? new Set() : new Set([id]);
        }
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        return next;
      });
    },
    [expandMode]
  );

  return (
    <div className="relative">
      {data.map((item, index) => (
        <TimelineItem
          key={item.id}
          item={item}
          expanded={expanded.has(item.id)}
          onToggle={onToggle}
          index={index}
        />
      ))}
    </div>
  );
}

// Main Export
export default function TimelinePage2({
  timelineData,
}: {
  timelineData: TimelineItemData[];
}) {
  return (
    <div className="transition-all duration-500 ease-in-out">
      <div className="max-w-3xl mx-auto">
        <ProfessionalTimeline data={timelineData} expandMode="multi" />
      </div>
    </div>
  );
}
