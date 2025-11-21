"use client";

export const dynamic = "force-dynamic"; // <--- ADD THIS LINE

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import ModelSelector from "../../components/ModelSelector";
import SkinToneSelector from "../../components/SkinToneSelector";
import PoseSelector from "../../components/PoseSelector";
import BackgroundSelector from "../../components/BackgroundSelector";
import { startGeneration } from "../../lib/api";
import Image from "next/image";

export default function EditorContent() {
  const params = useSearchParams();
  const router = useRouter();

  const uploadId = params.get("uploadId");
  const imageUrl = params.get("url");

  const [modelData, setModelData] = useState({
    gender: "female",
    skinTone: "wheatish",
    pose: "standing",
    background: "studio",
  });

  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (!uploadId) {
      router.push("/upload");
    }
  }, [uploadId, router]);

  const start = async () => {
    if (!uploadId) return;

    setIsGenerating(true);
    try {
      const res = await startGeneration(uploadId, modelData);
      router.push(`/generate?jobId=${res.jobId}`);
    } catch (error) {
      console.error("Generation failed:", error);
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Choose Model & Style</h1>

      {imageUrl && (
        <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-200">
          <p className="text-sm font-semibold text-gray-700 mb-2">
            Your Uploaded Clothing:
          </p>
          <Image
            src={imageUrl}
            alt="Uploaded clothing"
            width={600}
            height={400}
            className="w-full max-h-64 object-contain rounded-lg"
            priority
          />
        </div>
      )}

      <ModelSelector
        value={modelData.gender}
        onChange={(v) => setModelData({ ...modelData, gender: v })}
      />

      <SkinToneSelector
        value={modelData.skinTone}
        onChange={(v) => setModelData({ ...modelData, skinTone: v })}
      />

      <PoseSelector
        value={modelData.pose}
        onChange={(v) => setModelData({ ...modelData, pose: v })}
      />

      <BackgroundSelector
        value={modelData.background}
        onChange={(v) => setModelData({ ...modelData, background: v })}
      />

      <button
        onClick={start}
        disabled={isGenerating}
        className="px-6 py-3 bg-black text-white rounded-lg disabled:opacity-50"
      >
        {isGenerating ? "Starting..." : "Generate Photoshoot"}
      </button>
    </div>
  );
}
