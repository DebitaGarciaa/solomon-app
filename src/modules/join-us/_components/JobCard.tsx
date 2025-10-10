// src/modules/join-us/_components/JobCard.tsx
"use client";

import React from "react";
import { Button } from "@/components/button";

interface JobCardProps {
  job: {
    title: string;
    tags: string[];
    team: string;
    type: string;
    applicants: number;
    capacity: number;
    description: string;
    postedDate: string;
  };
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
      <div className="flex justify-between items-start">
        <div className="flex flex-wrap gap-2">
          {job.tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-900 text-white text-xs font-semibold px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <button className="text-gray-400 hover:text-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
        </button>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mt-4">{job.title}</h3>

      <div className="flex items-center text-gray-500 text-sm mt-2">
        <span>
          {job.team} • {job.type}
        </span>
        <span className="mx-2">|</span>
        <span>
          👥 {job.applicants}/{job.capacity} People are apply for this job
        </span>
      </div>

      <p className="text-gray-600 mt-4 text-sm">{job.description}</p>

      <div className="flex justify-between items-center mt-6">
        <span className="text-sm text-gray-400">
          Posted {job.postedDate}
        </span>
        <Button className="bg-blue-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors">
          APPLY NOW
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
