export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      features: ["3 free generations", "Standard quality"],
    },
    {
      name: "Starter",
      price: "₹499/mo",
      features: ["50 generations", "HD quality", "Fast queue"],
    },
    {
      name: "Pro",
      price: "₹1499/mo",
      features: ["Unlimited", "4K upscale", "Priority queue", "API access"],
    },
  ];

  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold text-center">Pricing</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {plans.map((p) => (
          <div key={p.name} className="p-6 border rounded-xl bg-white shadow-sm">
            <h2 className="text-2xl font-bold">{p.name}</h2>
            <p className="text-4xl font-bold my-4">{p.price}</p>

            <ul className="space-y-2">
              {p.features.map((f) => (
                <li key={f} className="text-gray-700">✔ {f}</li>
              ))}
            </ul>

            <button className="mt-6 w-full bg-black text-white py-3 rounded-lg">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}