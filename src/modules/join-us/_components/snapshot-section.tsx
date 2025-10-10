// src/modules/join-us/_components/snapshot-section.tsx
"use client";

import React from "react";
import type { StatsResponse } from "@/types/job.api";

interface SnapshotSectionProps {
  stats: StatsResponse | undefined;
  isLoading: boolean;
}

const SnapshotSection: React.FC<SnapshotSectionProps> = ({
  stats,
  isLoading,
}) => {
  if (isLoading)
    return <div className="text-center py-8">Loading Growth Snapshot...</div>;

  const data = [
    { value: `${stats?.totalJobs ?? "50"}+`, label: "New Opportunities" },
    { value: `${stats?.totalEmployees ?? "250"}+`, label: "Active Employees" },
    { value: `${stats?.yearsInBusiness ?? "7"}`, label: "Collaborative Teams" },
    { value: `${stats?.growthRate ?? "40"}%`, label: "Annual Growth" },
  ];

  return (
    <section className="container py-8 text-center">
      <h2 className="text-3xl font-bold mb-4">A Snapshot of Our Growth</h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Discover exciting career opportunities and join our growing team
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-full shadow-lg aspect-square"
          >
            <div className="text-4xl font-extrabold text-blue-600 tracking-tight">
              {item.value}
            </div>
            <p className="text-gray-600 font-medium text-sm mt-2 text-center">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SnapshotSection;