"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import ModelSelector from "../../components/ModelSelector";
import SkinToneSelector from "../../components/SkinToneSelector";
import PoseSelector from "../../components/PoseSelector";
import BackgroundSelector from "../../components/BackgroundSelector";
import { startGeneration } from "../../lib/api";

export default function EditorPage() {
  const params = useSearchParams();
  const uploadId = params.get("uploadId"); // may be null
  const router = useRouter();

  const [modelData, setModelData] = useState({
    gender: "female",
    skinTone: "wheatish",
    pose: "standing",
    background: "studio",
  });

  const start = async () => {
    if (!uploadId) {
      alert("Upload ID is missing!");
      return;
    }

    try {
      const res = await startGeneration(uploadId, modelData);
      router.push(`/generate?jobId=${res.jobId}`);
    } catch (error) {
      console.error("Generation failed:", error);
      alert("Failed to start generation. Check console for details.");
    }
  };

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold">Choose Model & Style</h1>

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
        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Generate Photoshoot
      </button>
    </div>
  );
}
