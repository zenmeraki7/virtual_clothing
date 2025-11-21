export default function FAQ() {
  const faqs = [
    {
      q: "Will the model look real?",
      a: "Yes, we use advanced diffusion models to generate photorealistic models.",
    },
    {
      q: "Is my data safe?",
      a: "Your images are stored securely and never shared.",
    },
    {
      q: "Can I use the images on Amazon/Myntra?",
      a: "Yes. The output is catalogue-ready and meets ecommerce platform requirements.",
    },
    {
      q: "Do colors remain accurate?",
      a: "Yes, we ensure 100% color accuracy and texture preservation.",
    },
  ];

  return (
    <section>
      <h2 className="text-3xl text-center font-bold mb-8">FAQs</h2>

      <div className="space-y-6">
        {faqs.map((f, i) => (
          <details
            key={i}
            className="p-4 bg-white rounded-xl border shadow-sm cursor-pointer"
          >
            <summary className="font-semibold">{f.q}</summary>
            <p className="mt-2 text-gray-600">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}