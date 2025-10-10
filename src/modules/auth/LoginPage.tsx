"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });

    try {
      router.push("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      alert("Login gagal. Periksa email dan password Anda.");
    }
  };

  return (
    <>
      {/* HEADER PUTIH */}
      <header className="auth-header">
        <div className="auth-header-left">
          <Image
            src="/logo.png"
            alt="Solomon Indo Global Logo"
            width={40}
            height={40}
            style={{ marginRight: 10 }}
          />
          <span className="company-name">Solomon Indo Global</span>
        </div>

        <Link href="/" className="back-button">
          Back to Previous Page
        </Link>
      </header>

      {/* BACKGROUND + FORM */}
      <div className="auth-bg">
        <div className="auth-overlay" />

        <main className="auth-card" role="main">
          {/* Tabs */}
          <div className="auth-tabs" role="tablist">
            <span className="auth-tab active">Login</span>
            <Link href="/register" className="auth-tab">
              Register
            </Link>
          </div>

          {/* Title */}
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-sub">Pick up where you left off.</p>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ marginTop: 16 }}>
            <label className="input-label">Email Address*</label>
            <div className="input-wrapper">
              <input
                className="input-field"
                placeholder="marlonganteng@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
              />
            </div>

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
                onClick={() => setShowPassword((s) => !s)}
                className="toggle-password"
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>

            {/* Remember Me & Forgot */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "white",
                fontSize: "0.85rem",
                marginBottom: 12,
              }}
            >
              <label style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <input type="checkbox" /> Remember Me
              </label>
              <a
                href="#"
                style={{
                  color: "#cbd5e1",
                  textDecoration: "none",
                }}
              >
                Forgot Password?
              </a>
            </div>

            {/* Tombol Login */}
            <button className="btn-primary" type="submit">
              Sign In Now
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
