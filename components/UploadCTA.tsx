"use client";
import { useRouter } from "next/navigation";

export default function UploadCTA() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/upload")}
      className="px-8 py-4 bg-black text-white rounded-xl text-lg font-semibold hover:opacity-90 transition"
    >
      Upload Clothing Image →
    </button>
  );
}