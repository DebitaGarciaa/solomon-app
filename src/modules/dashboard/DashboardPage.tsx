"use client";
import Navbar from "./Navbar";
import DashboardStats from "./DashboardStats";
import JobsCard from "./JobsCard";

export default function DashboardPage() {
  return (
    <div className="dashboard-root">
      <Navbar />
      <main className="main-content">
        <DashboardStats />
        <JobsCard />
      </main>
    </div>
  );
}
