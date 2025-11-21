"use client";

import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="max-w-md mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Create an Account</h1>

      <input className="w-full border p-3 rounded-lg" placeholder="Email" />
      <input className="w-full border p-3 rounded-lg" placeholder="Full Name" />
      <input type="password" className="w-full border p-3 rounded-lg" placeholder="Password" />

      <button className="w-full bg-black text-white py-3 rounded-lg">Signup</button>

      <p className="text-sm">
        Already have an account?{" "}
        <Link href="/login" className="underline">
          Login
        </Link>
      </p>
    </div>
  );
}