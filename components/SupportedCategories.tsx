export default function SupportedCategories() {
  const types = [
    "T-Shirts",
    "Hoodies",
    "Kurtis",
    "Sarees",
    "Ethnic Wear",
    "Jeans",
    "Dresses",
    "Jackets",
  ];

  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold mb-6">Works for Every Clothing Type</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {types.map((t) => (
          <span
            key={t}
            className="px-5 py-2 border rounded-full bg-white shadow-sm text-gray-700"
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}