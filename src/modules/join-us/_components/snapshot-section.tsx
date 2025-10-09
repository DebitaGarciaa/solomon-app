// src/modules/join-us/_components/snapshot-section.tsx
'use client';

import React from 'react';
import type { StatsResponse } from '@/types/job.api';

interface SnapshotSectionProps {
  stats: StatsResponse | undefined;
  isLoading: boolean;
}

const SnapshotSection: React.FC<SnapshotSectionProps> = ({ stats, isLoading }) => {
  if (isLoading) return <div className="text-center py-8">Loading Growth Snapshot...</div>;

const data = [
    { value: `${stats?.totalJobs ?? '50'}+`, label: 'Job Opportunities' },
    { value: `${stats?.totalEmployees ?? '350'}+`, label: 'Happy Employees' },
    { value: `${stats?.yearsInBusiness ?? '7'}+`, label: 'Years of Experience' },
    { value: `${stats?.growthRate ?? '42'}%`, label: 'Growth in the Last Year' },
];

  return (
    <section className="container py-8 text-center bg-gray-50 border-y">
      <h3 className="text-xl font-semibold mb-6 text-gray-700">A Snapshot of Our Growth</h3>
      <div className="flex justify-around items-center">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Gaya untuk metrik agar terlihat menonjol seperti di desain */}
            <div className="text-4xl font-extrabold text-blue-800 tracking-tight">
              {item.value}
            </div>
            <p className="text-gray-600 font-medium text-sm mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SnapshotSection;