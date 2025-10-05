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
    <div className="auth-bg">
      <div className="auth-overlay" />

      <main className="auth-card" role="main">
        <div style={{ textAlign: "center", marginTop: 8 }}>
          <div className="auth-tabs" role="tablist">
            <span className="auth-tab active">Login</span>
            <Link href="/register" className="auth-tab">Register</Link>
          </div>

          <h1 className="auth-title">Welcome back to Solomon.</h1>
          <p className="auth-sub">Sign in to continue to Solomon Indo Global</p>
        </div>

        <form onSubmit={handleSubmit} style={{ marginTop: 8 }}>
          <div className="form-row">
            <input
              className="input-field"
              placeholder="Enter your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
          </div>

          <div className="form-row" style={{ position: "relative" }}>
            <input
              className="input-field"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              style={{
                position: "absolute",
                right: 12,
                top: "50%",
                transform: "translateY(-50%)",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>

          <div style={{ textAlign: "center", marginTop: 18 }}>
            <button className="btn-primary" type="submit">
              Login
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
