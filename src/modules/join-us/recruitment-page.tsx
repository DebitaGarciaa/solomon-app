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
    <main className="flex flex-col min-h-screen bg-gray-50">
      {/* 1. Hero Section */}
      <section
        className="relative bg-cover bg-center py-32 text-center text-white"
        style={{ backgroundImage: "url('/register.png')" }} // Ganti dengan path gambar Anda
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay gelap agar teks terbaca */}
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Find Your Next Career at Solomon
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            We believe in empowering talent. Explore our open roles and discover where you fit in.
          </p>
        </div>
      </section>

      {/* Wrapper untuk konten utama dengan padding dan jarak */}
      <div className="container mx-auto px-4 py-16 space-y-20">
        {/* 2. A Snapshot of Our Growth Section */}
        <SnapshotSection stats={stats} isLoading={isLoadingStats} />

        {/* 3. Explore by Division Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Explore by Division</h2>
          <ExploreDivisionTabs
            divisions={divisions || []}
            onSelectDivision={setSelectedDivision} // Meneruskan callback untuk mengubah state filter
          />
        </section>

        {/* 4. Roles We're Hiring For Section */}
        <RolesSection selectedDivision={selectedDivision} /> {/* Meneruskan state filter */}
      </div>

      {/* 5. Timeline Section (Placeholder) - Bisa diisi nanti */}
      {/* <section className="py-16" /> */}

      {/* 6. Talent Pool Form Section */}
      <section className="py-20 bg-slate-100">
        <TalentPoolForm />
      </section>
    </main>
  );
};

export default RecruitmentPage;
