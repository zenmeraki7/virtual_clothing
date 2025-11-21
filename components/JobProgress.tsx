export default function JobProgress({ progress }: { progress: number }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-3">
      <div
        className="bg-black h-3 rounded-full transition-all"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}