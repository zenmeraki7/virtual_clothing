type BackgroundSelectorProps = {
  value: string;
  onChange: (bg: string) => void;
};

export default function BackgroundSelector({ value, onChange }: BackgroundSelectorProps) {
  const bgs = ["studio", "white", "outdoor", "premium"];

  return (
    <div>
      <h3 className="font-semibold mb-2">Background</h3>

      <div className="flex gap-4">
        {bgs.map((b) => (
          <button
            key={b}
            onClick={() => onChange(b)}
            className={`px-4 py-2 border rounded-lg ${
              value === b ? "bg-black text-white" : "bg-white"
            }`}
          >
            {b}
          </button>
        ))}
      </div>
    </div>
  );
}
