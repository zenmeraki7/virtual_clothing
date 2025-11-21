const BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export async function uploadImage(file: File) {
  const fd = new FormData();
  fd.append("image", file);

  const res = await fetch(`${BASE}/upload`, { method: "POST", body: fd });
  return res.json();
}

export async function startGeneration(uploadId: string, data: Record<string, unknown>) {
  const res = await fetch(`${BASE}/generate-model`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ uploadId, ...data })
  });

  return res.json();
}

export async function getJobStatus(jobId: string) {
  const res = await fetch(`${BASE}/job/${jobId}`);
  return res.json();
}

export async function getResult(id: string) {
  const res = await fetch(`${BASE}/result/${id}`);
  return res.json();
}