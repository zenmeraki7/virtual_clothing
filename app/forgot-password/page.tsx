"use client";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = async () => {
    // TODO: call backend → /auth/forgot-password
    setSent(true);
  };

  return (
    <div className="max-w-md mx-auto space-y-6">
      {sent ? (
        <>
          <h1 className="text-3xl font-bold">Check your email</h1>
          <p className="text-gray-600">
            If an account exists, a reset link has been sent to:
          </p>
          <p className="font-semibold">{email}</p>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold">Forgot Password</h1>
          <p className="text-gray-600">
            Enter your email and we will send you a password reset link.
          </p>

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-black text-white py-3 rounded-lg"
          >
            Send Reset Link
          </button>
        </>
      )}
    </div>
  );
}