// src/modules/join-us/_components/explore-division-tabs.tsx
'use client';

import React from 'react';

// Fungsi: Menampilkan tab-tab filter berdasarkan divisi yang tersedia
interface ExploreDivisionTabsProps {
  divisions: string[];
  onSelectDivision: (division: string | null) => void; 
}

const ExploreDivisionTabs: React.FC<ExploreDivisionTabsProps> = ({ divisions, onSelectDivision }) => {
  const [activeTab, setActiveTab] = React.useState<string | null>(null);

  const handleTabClick = (division: string | null) => {
    // Logika toggle filter: klik lagi untuk mematikan filter
    const newActiveTab = activeTab === division ? null : division;
    setActiveTab(newActiveTab);
    onSelectDivision(newActiveTab); 
  };
  
  // Memastikan opsi "Semua" di depan
  const allDivisions = ['All', ...divisions.filter(d => d !== 'All')];

  return (
    <div className="flex flex-wrap justify-center gap-4 py-4">
      {allDivisions.map((division) => (
        <button
          key={division}
          onClick={() => handleTabClick(division === 'All' ? null : division)}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-200 
            ${(activeTab === division || (activeTab === null && division === 'All'))
              ? 'bg-blue-800 text-white shadow-md' 
              : 'bg-white text-gray-800 border border-gray-300 hover:bg-blue-50'
            }`}
        >
          {division}
        </button>
      ))}
    </div>
  );
};

export default ExploreDivisionTabs;