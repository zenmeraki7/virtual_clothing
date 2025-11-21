export default function FeaturesGrid() {
  const features = [
    "AI-powered background removal (SAM-2)",
    "Ultra-realistic Virtual Try-On (VTON)",
    "Studio lighting, premium catalog look",
    "Works with all garment types",
    "Color-accurate garment preservation",
    "4K upscaling powered by Real-ESRGAN",
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Why People Love It</h2>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-green-500 font-bold">✔</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
