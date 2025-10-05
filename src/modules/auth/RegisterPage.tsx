"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { registerUser, RegisterPayload } from "@/services/api";

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password tidak sama!");
      return;
    }

    try {
      const payload: RegisterPayload = { email, username, password };
      const res = await registerUser(payload);
      console.log("Register success:", res.data);
      alert("Registrasi berhasil!");
      router.push("/login");
    } catch (err) {
      console.error("Register error:", err);
      alert("Registrasi gagal, cek console.");
    }
  };

  return (
    <>
      {/* HEADER PUTIH */}
      <header className="auth-header">
        <div className="auth-header-left">
          <Image src="/Logo.png" alt="Logo" width={40} height={40} />
          <span className="auth-header-text">Solomon Indo Global</span>
        </div>

        <Link href="/" className="back-button">
          Back to Previous Page
        </Link>
      </header>

      {/* BAGIAN REGISTER */}
      <div
        className="auth-bg"
        style={{ backgroundImage: "url('/register.png')" }}
      >
        <div className="auth-overlay" />

        <main className="auth-card font-[Plus Jakarta Sans]" role="main">
          {/* Tabs */}
          <div className="auth-tabs" data-active="register" role="tablist">
            <Link href="/login" className="auth-tab" aria-label="Go to login">
              Login
            </Link>
            <span className="auth-tab active" aria-current="page">
              Register
            </span>
          </div>

          <h1 className="auth-title">Build Your Future with Us.</h1>
          <p className="auth-sub">Unlock your potential.</p>

          {/* form */}
          <form onSubmit={handleSubmit} style={{ marginTop: 8 }}>
            {/* EMAIL */}
            <div className="input-wrapper">
              <label className="sr-only">Email Address</label>
              <input
                className="input-field"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
              />
            </div>

            {/* PASSWORD */}
            <div className="input-wrapper">
              <label className="sr-only">Password</label>
              <input
                className="input-field"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                required
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁" : "👁‍🗨"}
              </span>
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="input-wrapper">
              <label className="sr-only">Confirm Password</label>
              <input
                className="input-field"
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type={showConfirmPassword ? "text" : "password"}
                required
              />
              <span
                className="toggle-password"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "👁" : "👁‍🗨"}
              </span>
            </div>

            <div style={{ textAlign: "center", marginTop: 18 }}>
              <button className="btn-primary cursor-pointer" type="submit">
                Sign Up Now
              </button>
            </div>
          </form>

          {/* divider social login */}
          <div style={{ marginTop: "1rem", textAlign: "center" }}>
            <p className="text-gray-500 text-sm">or register with</p>
            <div className="flex justify-center gap-6">
              <Image
                src="/google button.png"
                alt="Google"
                width={50}
                height={50}
              />
              <Image
                src="/linkdln button.png"
                alt="LinkedIn"
                width={50}
                height={50}
                className="mx-2"
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
