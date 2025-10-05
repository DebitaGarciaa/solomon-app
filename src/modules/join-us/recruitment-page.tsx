// src/modules/join-us/recruitment-page.tsx
'use client'; 

import React from 'react';
import SnapshotSection from './_components/snapshot-section';
import ExploreDivisionTabs from './_components/explore-division-tabs';
import RolesSection from './_components/roles-section';
import TalentPoolForm from './_components/talent-pool-form';
import { useGetJoinUsDivisions, useGetJoinUsStats } from '@/services/join-us-queries'; // <-- UPDATED IMPORT

const RecruitmentPage = () => {
  const { data: stats, isLoading: isLoadingStats } = useGetJoinUsStats();
  const { data: divisions, isLoading: isLoadingDivisions } = useGetJoinUsDivisions();
  
  // State untuk filter yang dipilih
  const [selectedDivision, setSelectedDivision] = React.useState<string | null>(null);

  return (
    <main className="flex flex-col min-h-screen">
      {/* 1. Hero Section (Placeholder) */}
      <section className="py-24" />

      {/* 2. A Snapshot of Our Growth Section */}
      <SnapshotSection stats={stats} isLoading={isLoadingStats} />

      {/* 3. Explore by Division Section */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Explore by Division</h2>
        <ExploreDivisionTabs 
          divisions={divisions || []} 
          onSelectDivision={setSelectedDivision} // Meneruskan callback untuk mengubah state filter
        />
      </section>

      {/* 4. Roles We're Hiring For Section */}
      <RolesSection selectedDivision={selectedDivision} /> {/* Meneruskan state filter */}
      
      {/* 5. Timeline Section (Placeholder) */}
      <section className="py-16" />

      {/* 6. Talent Pool Form Section */}
      <section className="py-16 bg-blue-50">
        <TalentPoolForm />
      </section>
    </main>
  );
};

export default RecruitmentPage;