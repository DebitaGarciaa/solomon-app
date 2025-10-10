// src/modules/join-us/_components/roles-section.tsx
"use client";

import React from "react";
import { useGetJoinUsJobs } from "@/services/join-us-queries";
import JobCard from "./JobCard"; // Impor JobCard yang baru
import { Button } from "@/components/button";

interface RolesSectionProps {
  selectedDivision: string | null;
}

const RolesSection: React.FC<RolesSectionProps> = ({ selectedDivision }) => {
  const [page, setPage] = React.useState(1);

  const { data: jobResponse, isLoading } = useGetJoinUsJobs({
    division: selectedDivision,
    term: "",
    page: page.toString(),
  });

  // Data dummy untuk tampilan, ganti dengan data dari API
  const dummyJobs = [
    {
      title: "Host Live Streaming",
      tags: ["Persuasiveness", "Expressiveness"],
      team: "Creative Team",
      type: "Full-time",
      applicants: 5,
      capacity: 10,
      description:
        "Turn on-screen charisma into conversions. Lead our live sessions, engage audiences, and drive sales results.",
      postedDate: "3 days ago",
    },
    {
      title: "Content Creator",
      tags: ["Creativity", "Storytelling"],
      team: "Marketing",
      type: "Part-time",
      applicants: 8,
      capacity: 15,
      description:
        "Create compelling content across our social media platforms to build a strong brand presence.",
      postedDate: "1 day ago",
    },
    // Tambahkan lebih banyak data dummy jika perlu
  ];

  const jobs = jobResponse?.data ?? dummyJobs;
  const totalPages = jobResponse?.meta.totalPages ?? 5;

  return (
    <section className="container py-16">
      <h2 className="text-3xl font-bold text-center mb-4">
        Roles We're Hiring For
      </h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Discover exciting career opportunities and join our growing team
      </p>

      {isLoading ? (
        <div className="text-center py-10">Loading Roles...</div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {jobs.map((job: any, index: number) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center items-center mt-12 gap-4">
        <Button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          variant="outline"
        >
          {"<"}
        </Button>
        <span className="font-semibold">
          Page {page} of {totalPages}
        </span>
        <Button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          variant="outline"
        >
          {">"}
        </Button>
      </div>
    </section>
  );
};

export default RolesSection;