export default function Testimonials() {
  const reviews = [
    {
      name: "Arjun, Clothing Brand Owner",
      quote:
        "Replaced our entire photoshoot budget. Results are unbelievably realistic.",
    },
    {
      name: "Priya, Boutique Seller",
      quote:
        "The best AI model photoshoot tool I’ve ever used. My listings look premium now.",
    },
    {
      name: "Dinesh, Amazon Seller",
      quote:
        "Saved hours and thousands of rupees. The output looks like a real studio shoot.",
    },
  ];

  return (
    <section>
      <h2 className="text-3xl text-center font-bold mb-8">What Sellers Say</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <div key={i} className="p-5 border rounded-xl bg-white shadow-sm">
            <p className="text-gray-700 italic mb-3">“{r.quote}”</p>
            <p className="text-sm font-semibold text-gray-900">— {r.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}