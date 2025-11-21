"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, Suspense } from "react";
import ModelSelector from "../../components/ModelSelector";
import SkinToneSelector from "../../components/SkinToneSelector";
import PoseSelector from "../../components/PoseSelector";
import BackgroundSelector from "../../components/BackgroundSelector";
import { startGeneration } from "../../lib/api";

// Content component that uses useSearchParams
function EditorContent() {
  const params = useSearchParams();
  const uploadId = params.get("uploadId");
  const router = useRouter();

  const [modelData, setModelData] = useState({
    gender: "female",
    skinTone: "wheatish",
    pose: "standing",
    background: "studio"
  });

  const start = async () => {
    const res = await startGeneration(uploadId!, modelData);
    router.push(`/generate?jobId=${res.jobId}`);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Choose Model & Style</h1>

      <ModelSelector value={modelData.gender} onChange={v => setModelData({ ...modelData, gender: v })} />

      <SkinToneSelector value={modelData.skinTone} onChange={v => setModelData({ ...modelData, skinTone: v })} />

      <PoseSelector value={modelData.pose} onChange={v => setModelData({ ...modelData, pose: v })} />

      <BackgroundSelector value={modelData.background} onChange={v => setModelData({ ...modelData, background: v })} />

      <button
        onClick={start}
        className="px-6 py-3 bg-black text-white rounded-lg"
      >
        Generate Photoshoot
      </button>
    </div>
  );
}

// Main page with Suspense wrapper
export default function EditorPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <EditorContent />
    </Suspense>
  );
}