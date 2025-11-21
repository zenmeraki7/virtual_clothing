"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Login</h1>

      <input className="w-full border p-3 rounded-lg" placeholder="Email" />
      <input type="password" className="w-full border p-3 rounded-lg" placeholder="Password" />

      <button className="w-full bg-black text-white py-3 rounded-lg">Login</button>

      <p className="text-sm">
        Don’t have an account?{" "}
        <Link href="/signup" className="underline">
          Signup
        </Link>
      </p>
    </div>
  );
}