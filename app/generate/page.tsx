"use client";
import { useSearchParams, useRouter } from "next/navigation";
import JobProgress from "../../components/JobProgress";
import { useEffect, useState, Suspense } from "react";
import { getJobStatus } from "../../lib/api";

function GenerateContent() {
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
          clearInterval(interval);
          router.push(`/result/${res.resultId}`);
        }
      } catch (error) {
        console.error("Error fetching job status:", error);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [jobId, router]);

  return (
    <div className="text-center space-y-4 p-6">
      <h1 className="text-2xl font-bold">Generating Photoshoot...</h1>
      <JobProgress progress={progress} />
    </div>
  );
}

export default function GeneratePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <GenerateContent />
    </Suspense>
  );
}