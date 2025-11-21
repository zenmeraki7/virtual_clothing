"use client";

import Image from "next/image";

export default function FinalPreview({ url }: { url: string }) {
  return (
    <div>
      <div className="relative w-full h-96">
        <Image
          src={url}
          alt="Final Preview"
          fill
          className="rounded-xl shadow-lg object-contain"
        />
      </div>

      <a
        href={url}
        download
        className="mt-4 inline-block px-6 py-3 bg-black text-white rounded-lg"
      >
        Download Image
      </a>
    </div>
  );
}
