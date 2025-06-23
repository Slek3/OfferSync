import React from "react";
import Link from "next/link";

const categories = [
  { label: "Smartphones", value: "smartphones" },
  { label: "Eletrônicos", value: "eletronicos" },
  { label: "Moda", value: "moda" },
  { label: "Beleza", value: "beleza" },
  { label: "Casa", value: "casa" },
  { label: "Games", value: "games" },
  { label: "Moveis", value: "mercado" },
];

export default function CategoryNav() {
  return (
    <nav className="w-full flex flex-wrap gap-3 justify-center my-4">
      {categories.map((cat) => (
        <Link
          key={cat.value}
          href={`/categoria/${cat.value}`}
          className="px-4 py-2 rounded font-semibold border border-blue-200 bg-blue-50 text-blue-700 hover:bg-orange-400 hover:text-white hover:border-orange-400 transition text-sm shadow-sm"
        >
          {cat.label}
        </Link>
      ))}
    </nav>
  );
}
