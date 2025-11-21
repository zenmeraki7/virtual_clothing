export default function HowItWorks() {
  const steps = [
    {
      title: "1. Upload Clothing Photo",
      desc: "Flat lay, ghost mannequin, product shot — anything works.",
    },
    {
      title: "2. Choose Model, Pose & Background",
      desc: "Select studio pose, skin tone, background style & more.",
    },
    {
      title: "3. Download Catalogue-Ready Images",
      desc: "Photorealistic fashion shoots generated in seconds.",
    },
  ];

  return (
    <section>
      <h2 className="text-3xl text-center font-bold mb-8">How It Works</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        {steps.map((s, i) => (
          <div key={i} className="text-center space-y-3">
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}