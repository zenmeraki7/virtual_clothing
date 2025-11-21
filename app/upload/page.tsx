"use client";
import FileUploader from "@/components/FileUploader";
import { useState } from "react";
import { uploadImage } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();

  const handleUpload = async () => {
    if (!file) return;

    const res = await uploadImage(file);
    router.push(`/editor?uploadId=${res.uploadId}&url=${res.imageUrl}`);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Upload Clothing Image</h1>

      <FileUploader onFileSelect={setFile} />

      <button
        className="px-6 py-3 bg-black text-white rounded-lg disabled:opacity-30"
        disabled={!file}
        onClick={handleUpload}
      >
        Continue
      </button>
    </div>
  );
}