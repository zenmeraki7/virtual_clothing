"use client";
import { useState } from "react";
import Image from "next/image";

export default function FileUploader({
  onFileSelect
}: {
  onFileSelect: (file: File | null) => void;
}) {
  const [preview, setPreview] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    onFileSelect(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div>
      <label className="block w-full border-2 border-dashed border-gray-300 p-8 text-center rounded-xl cursor-pointer hover:bg-gray-100">
        <input type="file" accept="image/*" className="hidden" onChange={handleChange} />
        {!preview && <p>Click to upload clothing image</p>}
        {preview && (
          <div className="relative w-full h-64">
            <Image
              src={preview}
              alt="Uploaded clothing image"
              fill
              style={{ objectFit: "contain" }}
              className="rounded-xl shadow-md"
            />
          </div>
        )}
      </label>
    </div>
  );
}
