"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) {
      alert("Please agree to the terms and conditions first.");
      return;
    }
    router.push("/login");
  };

  return (
    <>
      {/* 🔷 HEADER PUTIH */}
      <header className="auth-header">
        <div className="auth-header-left">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className="company-name">Solomon Indo Global</span>
        </div>
        <Link href="/" className="back-button">
          Back to Previous Page
        </Link>
      </header>

      {/* 🔷 BACKGROUND + CARD */}
      <div className="auth-bg" style={{ backgroundImage: "url('/register.png')" }}>
        <div className="auth-overlay" />

        <main className="auth-card font-[Plus Jakarta Sans]" role="main">
          {/* Tabs */}
          <div className="auth-tabs" role="tablist">
            <Link href="/login" className="auth-tab">
              Login
            </Link>
            <span className="auth-tab active">Register</span>
          </div>

          {/* Title */}
          <h1 className="auth-title">Build Your Future with Us.</h1>
          <p className="auth-sub">Unlock your potential.</p>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ marginTop: 16 }}>
            {/* Email */}
            <label className="input-label">Email Address*</label>
            <div className="input-wrapper">
              <input
                className="input-field"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
              />
            </div>

            {/* Password */}
            <label className="input-label">Password*</label>
            <div className="input-wrapper" style={{ position: "relative" }}>
              <input
                className="input-field"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="toggle-password"
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>

            {/* Confirm Password */}
            <label className="input-label">Confirm Password*</label>
            <div className="input-wrapper" style={{ position: "relative" }}>
              <input
                className="input-field"
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type={showConfirmPassword ? "text" : "password"}
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="toggle-password"
              >
                {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>

            {/* Checkbox Agreement */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start ",
                marginTop: "10px",
                color: "white",
                fontSize: "0.9rem",
              }}
            >
              <input
                id="agree"
                type="checkbox"
                checked={agree}
                onChange={() => setAgree(!agree)}
                className="mr-2 accent-blue-500 cursor-pointer"
                required
              />
              <label htmlFor="agree">
                I agree to the{" "}
                <span className="text-blue-400 underline cursor-pointer">
                  terms and conditions
                </span>
              </label>
            </div>

            {/* Tombol Daftar */}
            <button className="btn-primary cursor-pointer" type="submit" style={{ marginTop: 20 }}>
              Sign Up Now
            </button>

            {/* Garis pembatas */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                margin: "1.5rem 0",
              }}
            >
              <hr style={{ flex: 1, opacity: 0.3 }} />
              <span style={{ margin: "0 10px" }}>or register with</span>
              <hr style={{ flex: 1, opacity: 0.3 }} />
            </div>

            {/* Ikon Sosial */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1.5rem",
              }}
            >
              <Image src="/google button.png" alt="Google" width={40} height={40} />
              <Image src="/linkdln button.png" alt="LinkedIn" width={40} height={40} />
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
