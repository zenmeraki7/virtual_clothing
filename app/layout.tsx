// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
export const metadata = {
  title: "Catalogue AI",
  description: "AI-powered clothing photoshoot generator"
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <div className="max-w-4xl mx-auto py-10">{children}</div>
      </body>
    </html>
  );
}