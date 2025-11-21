"use client";

import { useSearchParams, useRouter } from "next/navigation";
import JobProgress from "../../components/JobProgress";
import { useEffect, useState } from "react";
import { getJobStatus } from "../../lib/api";

export const dynamic = "force-dynamic"; // <--- Add this line

export default function GeneratePage() {
  const params = useSearchParams();
  const jobId = params.get("jobId");
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
  if (!jobId) return;

  const interval = setInterval(async () => {
    try {
      const res = await getJobStatus(jobId);
      setProgress(res.progress);

      if (res.status === "done") {
        router.push(`/result/${res.resultId}`);
      }
    } catch (err) {
      console.error(err);
    }
  }, 1500);

  return () => clearInterval(interval);
}, [jobId, router]); // ✅ Add router


  return (
    <div className="text-center space-y-4">
      <h1 className="text-2xl font-bold">Generating Photoshoot...</h1>
      <JobProgress progress={progress} />
    </div>
  );
}
