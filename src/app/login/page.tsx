"use client";
import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "@/firebase/firebase";
import Link from "next/link";

export default function LoginPage() {
  const handleGoogleLogin = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // Optionally redirect or show success
      window.location.href = "/add";
    } catch (error: any) {
      alert("Login failed: " + (error?.message || "Unknown error"));
    }
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "50vh" }}>
        <h1 className="font-bold text-yellow-100">Login</h1>
        <button onClick={handleGoogleLogin} style={{ padding: "10px 20px", fontSize: "16px", borderRadius: "5px", background: "#4285F4", color: "white", border: "none", cursor: "pointer" }}>
          Sign in with Google
        </button>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-8" style={{alignItems: "center", textAlign: "center"}}>
        <Link href="/" className="bg-white hover:bg-purple-700 hover:text-white font-semibold py-4 px-50 rounded-lg shadow col-span-full text-center"        >
          Back to Home 
        </Link>
      </div>
    </>
  );
}
