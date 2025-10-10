// src/modules/join-us/_components/explore-division-tabs.tsx
"use client";

import React from "react";

interface ExploreDivisionTabsProps {
  divisions: string[];
  onSelectDivision: (division: string | null) => void;
}

const ExploreDivisionTabs: React.FC<ExploreDivisionTabsProps> = ({
  divisions,
  onSelectDivision,
}) => {
  const [activeTab, setActiveTab] = React.useState<string | null>(null);

  const handleTabClick = (division: string | null) => {
    const newActiveTab = activeTab === division ? null : division;
    setActiveTab(newActiveTab);
    onSelectDivision(newActiveTab);
  };

  // Menambahkan "Show all Division" sebagai opsi pertama
  const allDivisions = ["Show all Division", ...divisions];

  return (
    <div className="flex flex-wrap justify-center gap-4 py-4">
      {allDivisions.map((division) => (
        <button
          key={division}
          onClick={() =>
            handleTabClick(division === "Show all Division" ? null : division)
          }
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2
            ${
              activeTab === division ||
              (activeTab === null && division === "Show all Division")
                ? "bg-blue-100 text-blue-700 border border-blue-300"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
            }`}
        >
          {/* Ganti dengan ikon yang sesuai */}
          <span>🎬</span>
          {division}
        </button>
      ))}
    </div>
  );
};

export default ExploreDivisionTabs;