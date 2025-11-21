import Image from "next/image";

// Import your images directly
import flat1 from "../public/samples/flat1.jpg";
import flat2 from "../public/samples/flat2.jpg";
import flat3 from "../public/samples/flat3.jpg";

import model1 from "../public/samples/model1.jpg";
import model2 from "../public/samples/model2.jpg";
import model3 from "../public/samples/model3.jpg";

export default function BeforeAfterGallery() {
  const items = [
    { before: flat1, after: model1 },
    { before: flat2, after: model2 },
    { before: flat3, after: model3 },
  ];

  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold mb-10">Before & After</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        {items.map((item, idx) => (
          <div key={idx} className="space-y-3">
            
            {/* Before Image */}
            <div className="relative w-full h-64">
              <Image
                src={item.before}
                alt={`Before image ${idx + 1}`}
                fill
                className="rounded-xl shadow-sm border object-cover"
              />
            </div>

            {/* After Image */}
            <div className="relative w-full h-64">
              <Image
                src={item.after}
                alt={`After image ${idx + 1}`}
                fill
                className="rounded-xl shadow-lg border object-cover"
              />
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
