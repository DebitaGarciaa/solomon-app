// src/modules/join-us/recruitment-page.tsx
"use client";

import React from "react";
import SnapshotSection from "./_components/snapshot-section";
import ExploreDivisionTabs from "./_components/explore-division-tabs";
import RolesSection from "./_components/roles-section";
import TalentPoolForm from "./_components/talent-pool-form";
import {
  useGetJoinUsDivisions,
  useGetJoinUsStats,
} from "@/services/join-us-queries";
import Image from "next/image";

// --- Komponen Baru untuk Kartu Testimoni ---
const TestimonialCard = ({ quote, author, role, imageSrc }: any) => (
  <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
    <div className="absolute top-0 left-8 transform -translate-y-1/2">
      <Image
        src={imageSrc}
        alt={author}
        width={80}
        height={80}
        className="rounded-full border-4 border-white"
      />
    </div>
    <p className="mt-10 text-gray-600 italic">"{quote}"</p>
    <div className="mt-4 text-right">
      <p className="font-bold text-gray-900">{author}</p>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  </div>
);

// --- Komponen Baru untuk Kartu Budaya Perusahaan ---
const CultureCard = ({ title, description, icon }: any) => (
  <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="font-bold text-lg text-gray-900">{title}</h3>
    <p className="text-gray-600 text-sm mt-2">{description}</p>
  </div>
);

const RecruitmentPage = () => {
  const { data: stats, isLoading: isLoadingStats } = useGetJoinUsStats();
  const { data: divisions, isLoading: isLoadingDivisions } =
    useGetJoinUsDivisions();
  const [selectedDivision, setSelectedDivision] = React.useState<string | null>(
    null
  );

  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      {/* 1. Hero Section */}
      <section
        className="relative bg-cover bg-center py-32 text-center"
        style={{ backgroundImage: "url('/register.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 px-4 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Your Potential, Unleashed
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Stop dreaming about the future. Start building it with us today.
          </p>
          {/* Job Search Form */}
          <div className="mt-8 max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-2xl flex flex-col md:flex-row gap-4 items-center">
            <input
              type="text"
              placeholder="Search for job title..."
              className="flex-grow p-3 border border-gray-300 rounded-md text-gray-800"
            />
            <select className="p-3 border border-gray-300 rounded-md text-gray-800">
              <option>Categories</option>
            </select>
            <select className="p-3 border border-gray-300 rounded-md text-gray-800">
              <option>Position</option>
            </select>
            <select className="p-3 border border-gray-300 rounded-md text-gray-800">
              <option>Type</option>
            </select>
            <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 transition-colors">
              View Job Openings
            </button>
          </div>
        </div>
      </section>

      {/* Wrapper untuk konten utama */}
      <div className="container mx-auto px-4 py-16 space-y-24">
        {/* 2. A Snapshot of Our Growth Section */}
        <SnapshotSection stats={stats} isLoading={isLoadingStats} />

        {/* 3. Hear It From The Team Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-4">
            Hear It From The Team
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Get an insider look at our culture, challenges, and growth
            opportunities straight from the people who live it every day.
          </p>
          {/* Testimonial Cards - Ganti dengan data asli nanti */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <TestimonialCard
              quote="The best part is the trust. My manager doesn't micromanage; I feel empowered by leadership to take full ownership of my projects. It's challenging, but knowing that I own my impact makes the long hours worth it."
              author="Bima"
              role="Backend Developer"
              imageSrc="/vercel.svg" // Ganti dengan path gambar profil
            />
            <TestimonialCard
              quote="I love the collaborative environment. Everyone is willing to help and share knowledge, which has helped me grow immensely in my role."
              author="Sari"
              role="Frontend Developer"
              imageSrc="/vercel.svg" // Ganti dengan path gambar profil
            />
          </div>
        </section>

        {/* 4. Why Join Us? Our SOLID Culture Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-4">Why Join Us?</h2>
          <p className="text-center text-gray-600 font-bold text-xl mb-12">
            Our SOLID Culture.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CultureCard
              title="Cross-Domain Experience"
              description="We encourage you to continue innovating and gaining cross-domain exposure."
              icon={"🚀"}
            />
            <CultureCard
              title="Own Your Impact"
              description="Our leadership empowers you with complete autonomy to lead initiatives."
              icon={"🎯"}
            />
            <CultureCard
              title="Fast-Growing Company"
              description="We focus on growth that is not only rapid, but also sustainable."
              icon={"📈"}
            />
            <CultureCard
              title="Inspiring Colleagues"
              description="Our optimistic and supportive team is ready to help you grow."
              icon={"🤝"}
            />
          </div>
        </section>

        {/* 5. Explore by Division Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">
            Find Your Fit: Explore Our 8 Collaborative Teams
          </h2>
          <ExploreDivisionTabs
            divisions={divisions || []}
            onSelectDivision={setSelectedDivision}
          />
        </section>

        {/* 6. Roles We're Hiring For Section */}
        <RolesSection selectedDivision={selectedDivision} />
      </div>

      {/* 7. Talent Pool Form Section */}
      <section className="py-20 bg-slate-100">
        <TalentPoolForm />
      </section>
    </main>
  );
};

export default RecruitmentPage;
