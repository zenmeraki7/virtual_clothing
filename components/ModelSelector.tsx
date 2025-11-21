export default function ModelSelector({
  value,
  onChange
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <h3 className="font-semibold mb-2">Model Gender</h3>

      <div className="flex gap-4">
        {["female", "male"].map(g => (
          <button
            key={g}
            onClick={() => onChange(g)}
            className={`px-4 py-2 border rounded-lg ${
              value === g ? "bg-black text-white" : "bg-white"
            }`}
          >
            {g}
          </button>
        ))}
      </div>
    </div>
  );
}