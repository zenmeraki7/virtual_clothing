"use client";
export const dynamic = "force-dynamic"; // <--- Required to stop prerender

import { useSearchParams, useRouter } from "next/navigation";
import ModelSelector from "../../components/ModelSelector";
import SkinToneSelector from "../../components/SkinToneSelector";
import PoseSelector from "../../components/PoseSelector";
import BackgroundSelector from "../../components/BackgroundSelector";
import { startGeneration } from "../../lib/api";
import { useState } from "react";

export default function EditorPage() {
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
    if (!uploadId) return alert("Invalid upload session!");
    const res = await startGeneration(uploadId, modelData);
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
