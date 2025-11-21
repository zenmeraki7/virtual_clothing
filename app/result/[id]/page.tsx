"use client";

import { useEffect, useState } from "react";
import { getResult } from "@/lib/api";
import { useParams } from "next/navigation";
import FinalPreview from "@/components/FinalPreview";

type ResultData = {
  vtonUrl: string;
};

export default function ResultPage() {
  const { id } = useParams();
  const resultId = Array.isArray(id) ? id[0] : id; // handle string | string[]

  const [data, setData] = useState<ResultData | null>(null);

  useEffect(() => {
    if (!resultId) return;
    getResult(resultId).then(setData);
  }, [resultId]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Final Result</h1>
      <FinalPreview url={data.vtonUrl} />
    </div>
  );
}
