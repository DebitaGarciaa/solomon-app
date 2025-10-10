"use client";

import Image from "next/image";
import "@/styles/landingpage.css";
import { Button } from "@/components/UI/button";
import { Card } from "@/components/UI/card";

const LandingPage = () => {
  return (
    <main className="landing-container">
      {/* ================= HERO SECTION ================= */}
      <section className="hero-section relative">
        {/* Background image */}
        <Image
          src="/bgLanding.png"
          alt="Office background"
          fill
          className="object-cover -z-10 brightness-90 transition-opacity duration-700 ease-in-out"
          priority
          placeholder="blur"
          blurDataURL="/bgLanding.png"
        />

        {/* NAVBAR (Glass) */}
        <nav className="navbar-glass">
          <div className="navbar-left">
            <Image
              src="/logo.png" // ⬅️ pakai logo.png dari folder public
              alt="Solomon Indo Global"
              width={42}
              height={42}
              className="navbar-logo"
            />
            <span className="navbar-brand">Solomon Indo Global</span>
          </div>

          <div className="navbar-right">
            <a href="#" className="nav-link">Division</a>
            <a href="#" className="nav-link active">Career</a>
            <Button className="btn-joinus">Join Us</Button>
            <a href="#" className="nav-link">English</a>
          </div>
        </nav>

        {/* HERO CONTENT */}
        <div className="hero-overlay">
          <div className="hero-text">
            <h1 className="hero-title">
              Your Potential, <span>Unleashed</span>
            </h1>
            <p className="hero-subtitle">
              Stop dreaming about the future. Start building it with us today.
            </p>
          </div>

          {/* SEARCH BAR */}
          <Card className="hero-searchbar">
            <div className="search-group">
              <input
                type="text"
                placeholder="Search for job title..."
                className="search-input"
              />
              <select className="search-select">
                <option>Categories</option>
              </select>
              <select className="search-select">
                <option>Position</option>
              </select>
              <select className="search-select">
                <option>Type</option>
              </select>
              <Button className="btn-view-jobs">View Job Openings</Button>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
