// src/modules/join-us/_components/roles-section.tsx
'use client';

import React from 'react';
import { useGetJoinUsJobs } from '@/services/join-us-queries'; // <-- UPDATED IMPORT
// ... JobCard import 

interface RolesSectionProps {
  selectedDivision: string | null; 
}

const RolesSection: React.FC<RolesSectionProps> = ({ selectedDivision }) => {
  const [page, setPage] = React.useState(1);

  const { data: jobResponse, isLoading } = useGetJoinUsJobs({
    division: selectedDivision,
    term: '', 
    page: page.toString(),
  });

  if (isLoading) return <div className="text-center py-10">Loading Roles...</div>;
  
  return (
    <section className="container py-16">
      {/* ... rendering jobs and pagination logic ... */}
    </section>
  );
};

export default RolesSection;