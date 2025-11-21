type SkinToneSelectorProps = {
  value: string;
  onChange: (tone: string) => void;
};

export default function SkinToneSelector({ value, onChange }: SkinToneSelectorProps) {
  const tones = ["fair", "wheatish", "brown", "dark"];

  return (
    <div>
      <h3 className="font-semibold mb-2">Skin Tone</h3>

      <div className="flex gap-4">
        {tones.map(t => (
          <button
            key={t}
            onClick={() => onChange(t)}
            className={`px-4 py-2 border rounded-lg ${
              value === t ? "bg-black text-white" : "bg-white"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}
