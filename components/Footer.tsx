import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center py-10 text-gray-500">
      <p>© {new Date().getFullYear()} Catalogue AI — All rights reserved.</p>
      <p className="mt-2 text-sm">Made for e-commerce brands, sellers & creators.</p>
    </footer>
  );
}