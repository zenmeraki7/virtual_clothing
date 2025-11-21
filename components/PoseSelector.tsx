type PoseSelectorProps = {
  value: string;
  onChange: (pose: string) => void;
};

export default function PoseSelector({ value, onChange }: PoseSelectorProps) {
  const poses = ["standing", "walking", "side", "studio"];

  return (
    <div>
      <h3 className="font-semibold mb-2">Pose</h3>

      <div className="flex gap-4">
        {poses.map(p => (
          <button
            key={p}
            onClick={() => onChange(p)}
            className={`px-4 py-2 border rounded-lg ${
              value === p ? "bg-black text-white" : "bg-white"
            }`}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}
